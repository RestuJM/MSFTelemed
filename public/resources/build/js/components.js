!function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document)
      throw new Error('jQuery requires a window with a document');
    return t(e);
  } : t(e);
}('undefined' != typeof window ? window : this, function (e, t) {
  'use strict';
  function n(e, t) {
    t = t || ne;
    var n = t.createElement('script');
    n.text = e, t.head.appendChild(n).parentNode.removeChild(n);
  }
  function r(e) {
    var t = !!e && 'length' in e && e.length, n = ge.type(e);
    return 'function' !== n && !ge.isWindow(e) && ('array' === n || 0 === t || 'number' == typeof t && t > 0 && t - 1 in e);
  }
  function i(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  function o(e, t, n) {
    return ge.isFunction(t) ? ge.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? ge.grep(e, function (e) {
      return e === t !== n;
    }) : 'string' != typeof t ? ge.grep(e, function (e) {
      return se.call(t, e) > -1 !== n;
    }) : ke.test(t) ? ge.filter(t, e, n) : (t = ge.filter(t, e), ge.grep(e, function (e) {
      return se.call(t, e) > -1 !== n && 1 === e.nodeType;
    }));
  }
  function a(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;);
    return e;
  }
  function s(e) {
    var t = {};
    return ge.each(e.match(Ae) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }
  function u(e) {
    return e;
  }
  function l(e) {
    throw e;
  }
  function c(e, t, n, r) {
    var i;
    try {
      e && ge.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && ge.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  function f() {
    ne.removeEventListener('DOMContentLoaded', f), e.removeEventListener('load', f), ge.ready();
  }
  function p() {
    this.expando = ge.expando + p.uid++;
  }
  function d(e) {
    return 'true' === e || 'false' !== e && ('null' === e ? null : e === +e + '' ? +e : Re.test(e) ? JSON.parse(e) : e);
  }
  function h(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (r = 'data-' + t.replace(Me, '-$&').toLowerCase(), 'string' == typeof (n = e.getAttribute(r))) {
        try {
          n = d(n);
        } catch (e) {
        }
        Pe.set(e, t, n);
      } else
        n = void 0;
    return n;
  }
  function g(e, t, n, r) {
    var i, o = 1, a = 20, s = r ? function () {
        return r.cur();
      } : function () {
        return ge.css(e, t, '');
      }, u = s(), l = n && n[3] || (ge.cssNumber[t] ? '' : 'px'), c = (ge.cssNumber[t] || 'px' !== l && +u) && We.exec(ge.css(e, t));
    if (c && c[3] !== l) {
      l = l || c[3], n = n || [], c = +u || 1;
      do {
        o = o || '.5', c /= o, ge.style(e, t, c + l);
      } while (o !== (o = s() / u) && 1 !== o && --a);
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }
  function v(e) {
    var t, n = e.ownerDocument, r = e.nodeName, i = ze[r];
    return i || (t = n.body.appendChild(n.createElement(r)), i = ge.css(t, 'display'), t.parentNode.removeChild(t), 'none' === i && (i = 'block'), ze[r] = i, i);
  }
  function m(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
      r = e[o], r.style && (n = r.style.display, t ? ('none' === n && (i[o] = Oe.get(r, 'display') || null, i[o] || (r.style.display = '')), '' === r.style.display && Be(r) && (i[o] = v(r))) : 'none' !== n && (i[o] = 'none', Oe.set(r, 'display', n)));
    for (o = 0; o < a; o++)
      null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  function y(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || '*') : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || '*') : [], void 0 === t || t && i(e, t) ? ge.merge([e], n) : n;
  }
  function x(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Oe.set(e[n], 'globalEval', !t || Oe.get(t[n], 'globalEval'));
  }
  function b(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
      if ((o = e[d]) || 0 === o)
        if ('object' === ge.type(o))
          ge.merge(p, o.nodeType ? [o] : o);
        else if (Ye.test(o)) {
          for (a = a || f.appendChild(t.createElement('div')), s = (Ue.exec(o) || [
              '',
              ''
            ])[1].toLowerCase(), u = Ge[s] || Ge._default, a.innerHTML = u[1] + ge.htmlPrefilter(o) + u[2], c = u[0]; c--;)
            a = a.lastChild;
          ge.merge(p, a.childNodes), a = f.firstChild, a.textContent = '';
        } else
          p.push(t.createTextNode(o));
    for (f.textContent = '', d = 0; o = p[d++];)
      if (r && ge.inArray(o, r) > -1)
        i && i.push(o);
      else if (l = ge.contains(o.ownerDocument, o), a = y(f.appendChild(o), 'script'), l && x(a), n)
        for (c = 0; o = a[c++];)
          Ve.test(o.type || '') && n.push(o);
    return f;
  }
  function w() {
    return !0;
  }
  function T() {
    return !1;
  }
  function C() {
    try {
      return ne.activeElement;
    } catch (e) {
    }
  }
  function E(e, t, n, r, i, o) {
    var a, s;
    if ('object' == typeof t) {
      'string' != typeof n && (r = r || n, n = void 0);
      for (s in t)
        E(e, s, n, r, t[s], o);
      return e;
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ('string' == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i)
      i = T;
    else if (!i)
      return e;
    return 1 === o && (a = i, i = function (e) {
      return ge().off(e), a.apply(this, arguments);
    }, i.guid = a.guid || (a.guid = ge.guid++)), e.each(function () {
      ge.event.add(this, t, i, r, n);
    });
  }
  function k(e, t) {
    return i(e, 'table') && i(11 !== t.nodeType ? t : t.firstChild, 'tr') ? ge('>tbody', e)[0] || e : e;
  }
  function S(e) {
    return e.type = (null !== e.getAttribute('type')) + '/' + e.type, e;
  }
  function N(e) {
    var t = rt.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute('type'), e;
  }
  function D(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (Oe.hasData(e) && (o = Oe.access(e), a = Oe.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};
        for (i in l)
          for (n = 0, r = l[i].length; n < r; n++)
            ge.event.add(t, i, l[i][n]);
      }
      Pe.hasData(e) && (s = Pe.access(e), u = ge.extend({}, s), Pe.set(t, u));
    }
  }
  function j(e, t) {
    var n = t.nodeName.toLowerCase();
    'input' === n && Xe.test(e.type) ? t.checked = e.checked : 'input' !== n && 'textarea' !== n || (t.defaultValue = e.defaultValue);
  }
  function A(e, t, r, i) {
    t = oe.apply([], t);
    var o, a, s, u, l, c, f = 0, p = e.length, d = p - 1, h = t[0], g = ge.isFunction(h);
    if (g || p > 1 && 'string' == typeof h && !de.checkClone && nt.test(h))
      return e.each(function (n) {
        var o = e.eq(n);
        g && (t[0] = h.call(this, n, o.html())), A(o, t, r, i);
      });
    if (p && (o = b(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
      for (s = ge.map(y(o, 'script'), S), u = s.length; f < p; f++)
        l = o, f !== d && (l = ge.clone(l, !0, !0), u && ge.merge(s, y(l, 'script'))), r.call(e[f], l, f);
      if (u)
        for (c = s[s.length - 1].ownerDocument, ge.map(s, N), f = 0; f < u; f++)
          l = s[f], Ve.test(l.type || '') && !Oe.access(l, 'globalEval') && ge.contains(c, l) && (l.src ? ge._evalUrl && ge._evalUrl(l.src) : n(l.textContent.replace(it, ''), c));
    }
    return e;
  }
  function q(e, t, n) {
    for (var r, i = t ? ge.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || ge.cleanData(y(r)), r.parentNode && (n && ge.contains(r.ownerDocument, r) && x(y(r, 'script')), r.parentNode.removeChild(r));
    return e;
  }
  function L(e, t, n) {
    var r, i, o, a, s = e.style;
    return n = n || st(e), n && (a = n.getPropertyValue(t) || n[t], '' !== a || ge.contains(e.ownerDocument, e) || (a = ge.style(e, t)), !de.pixelMarginRight() && at.test(a) && ot.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + '' : a;
  }
  function H(e, t) {
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
      }
    };
  }
  function F(e) {
    if (e in dt)
      return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = pt.length; n--;)
      if ((e = pt[n] + t) in dt)
        return e;
  }
  function O(e) {
    var t = ge.cssProps[e];
    return t || (t = ge.cssProps[e] = F(e) || e), t;
  }
  function P(e, t, n) {
    var r = We.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function R(e, t, n, r, i) {
    var o, a = 0;
    for (o = n === (r ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0; o < 4; o += 2)
      'margin' === n && (a += ge.css(e, n + $e[o], !0, i)), r ? ('content' === n && (a -= ge.css(e, 'padding' + $e[o], !0, i)), 'margin' !== n && (a -= ge.css(e, 'border' + $e[o] + 'Width', !0, i))) : (a += ge.css(e, 'padding' + $e[o], !0, i), 'padding' !== n && (a += ge.css(e, 'border' + $e[o] + 'Width', !0, i)));
    return a;
  }
  function M(e, t, n) {
    var r, i = st(e), o = L(e, t, i), a = 'border-box' === ge.css(e, 'boxSizing', !1, i);
    return at.test(o) ? o : (r = a && (de.boxSizingReliable() || o === e.style[t]), 'auto' === o && (o = e['offset' + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + R(e, t, n || (a ? 'border' : 'content'), r, i) + 'px');
  }
  function I(e, t, n, r, i) {
    return new I.prototype.init(e, t, n, r, i);
  }
  function W() {
    gt && (!1 === ne.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(W) : e.setTimeout(W, ge.fx.interval), ge.fx.tick());
  }
  function $() {
    return e.setTimeout(function () {
      ht = void 0;
    }), ht = ge.now();
  }
  function B(e, t) {
    var n, r = 0, i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      n = $e[r], i['margin' + n] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function _(e, t, n) {
    for (var r, i = (U.tweeners[t] || []).concat(U.tweeners['*']), o = 0, a = i.length; o < a; o++)
      if (r = i[o].call(n, t, e))
        return r;
  }
  function z(e, t, n) {
    var r, i, o, a, s, u, l, c, f = 'width' in t || 'height' in t, p = this, d = {}, h = e.style, g = e.nodeType && Be(e), v = Oe.get(e, 'fxshow');
    n.queue || (a = ge._queueHooks(e, 'fx'), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s();
    }), a.unqueued++, p.always(function () {
      p.always(function () {
        a.unqueued--, ge.queue(e, 'fx').length || a.empty.fire();
      });
    }));
    for (r in t)
      if (i = t[r], vt.test(i)) {
        if (delete t[r], o = o || 'toggle' === i, i === (g ? 'hide' : 'show')) {
          if ('show' !== i || !v || void 0 === v[r])
            continue;
          g = !0;
        }
        d[r] = v && v[r] || ge.style(e, r);
      }
    if ((u = !ge.isEmptyObject(t)) || !ge.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [
        h.overflow,
        h.overflowX,
        h.overflowY
      ], l = v && v.display, null == l && (l = Oe.get(e, 'display')), c = ge.css(e, 'display'), 'none' === c && (l ? c = l : (m([e], !0), l = e.style.display || l, c = ge.css(e, 'display'), m([e]))), ('inline' === c || 'inline-block' === c && null != l) && 'none' === ge.css(e, 'float') && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = 'none' === c ? '' : c)), h.display = 'inline-block')), n.overflow && (h.overflow = 'hidden', p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1;
      for (r in d)
        u || (v ? 'hidden' in v && (g = v.hidden) : v = Oe.access(e, 'fxshow', { display: l }), o && (v.hidden = !g), g && m([e], !0), p.done(function () {
          g || m([e]), Oe.remove(e, 'fxshow');
          for (r in d)
            ge.style(e, r, d[r]);
        })), u = _(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
    }
  }
  function X(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (r = ge.camelCase(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ge.cssHooks[r]) && 'expand' in a) {
        o = a.expand(o), delete e[r];
        for (n in o)
          n in e || (e[n] = o[n], t[n] = i);
      } else
        t[r] = i;
  }
  function U(e, t, n) {
    var r, i, o = 0, a = U.prefilters.length, s = ge.Deferred().always(function () {
        delete u.elem;
      }), u = function () {
        if (i)
          return !1;
        for (var t = ht || $(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++)
          l.tweens[a].run(o);
        return s.notifyWith(e, [
          l,
          o,
          n
        ]), o < 1 && u ? n : (u || s.notifyWith(e, [
          l,
          1,
          0
        ]), s.resolveWith(e, [l]), !1);
      }, l = s.promise({
        elem: e,
        props: ge.extend({}, t),
        opts: ge.extend(!0, {
          specialEasing: {},
          easing: ge.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: ht || $(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = ge.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0, r = t ? l.tweens.length : 0;
          if (i)
            return this;
          for (i = !0; n < r; n++)
            l.tweens[n].run(1);
          return t ? (s.notifyWith(e, [
            l,
            1,
            0
          ]), s.resolveWith(e, [
            l,
            t
          ])) : s.rejectWith(e, [
            l,
            t
          ]), this;
        }
      }), c = l.props;
    for (X(c, l.opts.specialEasing); o < a; o++)
      if (r = U.prefilters[o].call(l, e, c, l.opts))
        return ge.isFunction(r.stop) && (ge._queueHooks(l.elem, l.opts.queue).stop = ge.proxy(r.stop, r)), r;
    return ge.map(c, _, l), ge.isFunction(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ge.fx.timer(ge.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l;
  }
  function V(e) {
    return (e.match(Ae) || []).join(' ');
  }
  function G(e) {
    return e.getAttribute && e.getAttribute('class') || '';
  }
  function Y(e, t, n, r) {
    var i;
    if (Array.isArray(t))
      ge.each(t, function (t, i) {
        n || Nt.test(e) ? r(e, i) : Y(e + '[' + ('object' == typeof i && null != i ? t : '') + ']', i, n, r);
      });
    else if (n || 'object' !== ge.type(t))
      r(e, t);
    else
      for (i in t)
        Y(e + '[' + i + ']', t[i], n, r);
  }
  function Q(e) {
    return function (t, n) {
      'string' != typeof t && (n = t, t = '*');
      var r, i = 0, o = t.toLowerCase().match(Ae) || [];
      if (ge.isFunction(n))
        for (; r = o[i++];)
          '+' === r[0] ? (r = r.slice(1) || '*', (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
    };
  }
  function J(e, t, n, r) {
    function i(s) {
      var u;
      return o[s] = !0, ge.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);
        return 'string' != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1);
      }), u;
    }
    var o = {}, a = e === It;
    return i(t.dataTypes[0]) || !o['*'] && i('*');
  }
  function K(e, t) {
    var n, r, i = ge.ajaxSettings.flatOptions || {};
    for (n in t)
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ge.extend(!0, e, r), e;
  }
  function Z(e, t, n) {
    for (var r, i, o, a, s = e.contents, u = e.dataTypes; '*' === u[0];)
      u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n)
      o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + ' ' + u[0]]) {
          o = i;
          break;
        }
        a || (a = i);
      }
      o = o || a;
    }
    if (o)
      return o !== u[0] && u.unshift(o), n[o];
  }
  function ee(e, t, n, r) {
    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
    if (c[1])
      for (a in e.converters)
        l[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o;)
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
        if ('*' === o)
          o = u;
        else if ('*' !== u && u !== o) {
          if (!(a = l[u + ' ' + o] || l['* ' + o]))
            for (i in l)
              if (s = i.split(' '), s[1] === o && (a = l[u + ' ' + s[0]] || l['* ' + s[0]])) {
                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e.throws)
              t = a(t);
            else
              try {
                t = a(t);
              } catch (e) {
                return {
                  state: 'parsererror',
                  error: a ? e : 'No conversion from ' + u + ' to ' + o
                };
              }
        }
    return {
      state: 'success',
      data: t
    };
  }
  var te = [], ne = e.document, re = Object.getPrototypeOf, ie = te.slice, oe = te.concat, ae = te.push, se = te.indexOf, ue = {}, le = ue.toString, ce = ue.hasOwnProperty, fe = ce.toString, pe = fe.call(Object), de = {}, he = '3.2.1', ge = function (e, t) {
      return new ge.fn.init(e, t);
    }, ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, me = /^-ms-/, ye = /-([a-z])/g, xe = function (e, t) {
      return t.toUpperCase();
    };
  ge.fn = ge.prototype = {
    jquery: he,
    constructor: ge,
    length: 0,
    toArray: function () {
      return ie.call(this);
    },
    get: function (e) {
      return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = ge.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function (e) {
      return ge.each(this, e);
    },
    map: function (e) {
      return this.pushStack(ge.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function () {
      return this.pushStack(ie.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length, n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: ae,
    sort: te.sort,
    splice: te.splice
  }, ge.extend = ge.fn.extend = function () {
    var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
    for ('boolean' == typeof a && (l = a, a = arguments[s] || {}, s++), 'object' == typeof a || ge.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
      if (null != (e = arguments[s]))
        for (t in e)
          n = a[t], r = e[t], a !== r && (l && r && (ge.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && ge.isPlainObject(n) ? n : {}, a[t] = ge.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a;
  }, ge.extend({
    expando: 'jQuery' + (he + Math.random()).replace(/\D/g, ''),
    isReady: !0,
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {
    },
    isFunction: function (e) {
      return 'function' === ge.type(e);
    },
    isWindow: function (e) {
      return null != e && e === e.window;
    },
    isNumeric: function (e) {
      var t = ge.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    },
    isPlainObject: function (e) {
      var t, n;
      return !(!e || '[object Object]' !== le.call(e) || (t = re(e)) && ('function' != typeof (n = ce.call(t, 'constructor') && t.constructor) || fe.call(n) !== pe));
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e)
        return !1;
      return !0;
    },
    type: function (e) {
      return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? ue[le.call(e)] || 'object' : typeof e;
    },
    globalEval: function (e) {
      n(e);
    },
    camelCase: function (e) {
      return e.replace(me, 'ms-').replace(ye, xe);
    },
    each: function (e, t) {
      var n, i = 0;
      if (r(e))
        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
      else
        for (i in e)
          if (!1 === t.call(e[i], i, e[i]))
            break;
      return e;
    },
    trim: function (e) {
      return null == e ? '' : (e + '').replace(ve, '');
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (r(Object(e)) ? ge.merge(n, 'string' == typeof e ? [e] : e) : ae.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : se.call(t, e, n);
    },
    merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++)
        e[i++] = t[r];
      return e.length = i, e;
    },
    grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
        !t(e[i], i) !== a && r.push(e[i]);
      return r;
    },
    map: function (e, t, n) {
      var i, o, a = 0, s = [];
      if (r(e))
        for (i = e.length; a < i; a++)
          null != (o = t(e[a], a, n)) && s.push(o);
      else
        for (a in e)
          null != (o = t(e[a], a, n)) && s.push(o);
      return oe.apply([], s);
    },
    guid: 1,
    proxy: function (e, t) {
      var n, r, i;
      if ('string' == typeof t && (n = e[t], t = e, e = n), ge.isFunction(e))
        return r = ie.call(arguments, 2), i = function () {
          return e.apply(t || this, r.concat(ie.call(arguments)));
        }, i.guid = e.guid = e.guid || ge.guid++, i;
    },
    now: Date.now,
    support: de
  }), 'function' == typeof Symbol && (ge.fn[Symbol.iterator] = te[Symbol.iterator]), ge.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
    ue['[object ' + t + ']'] = t.toLowerCase();
  });
  var be = function (e) {
    function t(e, t, n, r) {
      var i, o, a, s, u, c, p, d = t && t.ownerDocument, h = t ? t.nodeType : 9;
      if (n = n || [], 'string' != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
        return n;
      if (!r && ((t ? t.ownerDocument || t : I) !== q && A(t), t = t || q, H)) {
        if (11 !== h && (u = ge.exec(e)))
          if (i = u[1]) {
            if (9 === h) {
              if (!(a = t.getElementById(i)))
                return n;
              if (a.id === i)
                return n.push(a), n;
            } else if (d && (a = d.getElementById(i)) && R(t, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2])
              return Q.apply(n, t.getElementsByTagName(e)), n;
            if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName)
              return Q.apply(n, t.getElementsByClassName(i)), n;
          }
        if (b.qsa && !z[e + ' '] && (!F || !F.test(e))) {
          if (1 !== h)
            d = t, p = e;
          else if ('object' !== t.nodeName.toLowerCase()) {
            for ((s = t.getAttribute('id')) ? s = s.replace(xe, be) : t.setAttribute('id', s = M), c = E(e), o = c.length; o--;)
              c[o] = '#' + s + ' ' + f(c[o]);
            p = c.join(','), d = ve.test(e) && l(t.parentNode) || t;
          }
          if (p)
            try {
              return Q.apply(n, d.querySelectorAll(p)), n;
            } catch (e) {
            } finally {
              s === M && t.removeAttribute('id');
            }
        }
      }
      return S(e.replace(oe, '$1'), t, n, r);
    }
    function n() {
      function e(n, r) {
        return t.push(n + ' ') > w.cacheLength && delete e[t.shift()], e[n + ' '] = r;
      }
      var t = [];
      return e;
    }
    function r(e) {
      return e[M] = !0, e;
    }
    function i(e) {
      var t = q.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }
    function o(e, t) {
      for (var n = e.split('|'), r = n.length; r--;)
        w.attrHandle[n[r]] = t;
    }
    function a(e, t) {
      var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r)
        return r;
      if (n)
        for (; n = n.nextSibling;)
          if (n === t)
            return -1;
      return e ? 1 : -1;
    }
    function s(e) {
      return function (t) {
        return 'form' in t ? t.parentNode && !1 === t.disabled ? 'label' in t ? 'label' in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : 'label' in t && t.disabled === e;
      };
    }
    function u(e) {
      return r(function (t) {
        return t = +t, r(function (n, r) {
          for (var i, o = e([], n.length, t), a = o.length; a--;)
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
        });
      });
    }
    function l(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function c() {
    }
    function f(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++)
        r += e[t].value;
      return r;
    }
    function p(e, t, n) {
      var r = t.dir, i = t.next, o = i || r, a = n && 'parentNode' === o, s = $++;
      return t.first ? function (t, n, i) {
        for (; t = t[r];)
          if (1 === t.nodeType || a)
            return e(t, n, i);
        return !1;
      } : function (t, n, u) {
        var l, c, f, p = [
            W,
            s
          ];
        if (u) {
          for (; t = t[r];)
            if ((1 === t.nodeType || a) && e(t, n, u))
              return !0;
        } else
          for (; t = t[r];)
            if (1 === t.nodeType || a)
              if (f = t[M] || (t[M] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase())
                t = t[r] || t;
              else {
                if ((l = c[o]) && l[0] === W && l[1] === s)
                  return p[2] = l[2];
                if (c[o] = p, p[2] = e(t, n, u))
                  return !0;
              }
        return !1;
      };
    }
    function d(e) {
      return e.length > 1 ? function (t, n, r) {
        for (var i = e.length; i--;)
          if (!e[i](t, n, r))
            return !1;
        return !0;
      } : e[0];
    }
    function h(e, n, r) {
      for (var i = 0, o = n.length; i < o; i++)
        t(e, n[i], r);
      return r;
    }
    function g(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a;
    }
    function v(e, t, n, i, o, a) {
      return i && !i[M] && (i = v(i)), o && !o[M] && (o = v(o, a)), r(function (r, a, s, u) {
        var l, c, f, p = [], d = [], v = a.length, m = r || h(t || '*', s.nodeType ? [s] : s, []), y = !e || !r && t ? m : g(m, p, e, s, u), x = n ? o || (r ? e : v || i) ? [] : a : y;
        if (n && n(y, x, s, u), i)
          for (l = g(x, d), i(l, [], s, u), c = l.length; c--;)
            (f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
        if (r) {
          if (o || e) {
            if (o) {
              for (l = [], c = x.length; c--;)
                (f = x[c]) && l.push(y[c] = f);
              o(null, x = [], l, u);
            }
            for (c = x.length; c--;)
              (f = x[c]) && (l = o ? K(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f));
          }
        } else
          x = g(x === a ? x.splice(v, x.length) : x), o ? o(null, a, x, u) : Q.apply(a, x);
      });
    }
    function m(e) {
      for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[' '], s = o ? 1 : 0, u = p(function (e) {
            return e === t;
          }, a, !0), l = p(function (e) {
            return K(t, e) > -1;
          }, a, !0), c = [function (e, n, r) {
              var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
              return t = null, i;
            }]; s < i; s++)
        if (n = w.relative[e[s].type])
          c = [p(d(c), n)];
        else {
          if (n = w.filter[e[s].type].apply(null, e[s].matches), n[M]) {
            for (r = ++s; r < i && !w.relative[e[r].type]; r++);
            return v(s > 1 && d(c), s > 1 && f(e.slice(0, s - 1).concat({ value: ' ' === e[s - 2].type ? '*' : '' })).replace(oe, '$1'), n, s < r && m(e.slice(s, r)), r < i && m(e = e.slice(r)), r < i && f(e));
          }
          c.push(n);
        }
      return d(c);
    }
    function y(e, n) {
      var i = n.length > 0, o = e.length > 0, a = function (r, a, s, u, l) {
          var c, f, p, d = 0, h = '0', v = r && [], m = [], y = N, x = r || o && w.find.TAG('*', l), b = W += null == y ? 1 : Math.random() || 0.1, T = x.length;
          for (l && (N = a === q || a || l); h !== T && null != (c = x[h]); h++) {
            if (o && c) {
              for (f = 0, a || c.ownerDocument === q || (A(c), s = !H); p = e[f++];)
                if (p(c, a || q, s)) {
                  u.push(c);
                  break;
                }
              l && (W = b);
            }
            i && ((c = !p && c) && d--, r && v.push(c));
          }
          if (d += h, i && h !== d) {
            for (f = 0; p = n[f++];)
              p(v, m, a, s);
            if (r) {
              if (d > 0)
                for (; h--;)
                  v[h] || m[h] || (m[h] = G.call(u));
              m = g(m);
            }
            Q.apply(u, m), l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u);
          }
          return l && (W = b, N = y), v;
        };
      return i ? r(a) : a;
    }
    var x, b, w, T, C, E, k, S, N, D, j, A, q, L, H, F, O, P, R, M = 'sizzle' + 1 * new Date(), I = e.document, W = 0, $ = 0, B = n(), _ = n(), z = n(), X = function (e, t) {
        return e === t && (j = !0), 0;
      }, U = {}.hasOwnProperty, V = [], G = V.pop, Y = V.push, Q = V.push, J = V.slice, K = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          if (e[n] === t)
            return n;
        return -1;
      }, Z = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', ee = '[\\x20\\t\\r\\n\\f]', te = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+', ne = '\\[' + ee + '*(' + te + ')(?:' + ee + '*([*^$|!~]?=)' + ee + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + te + '))|)' + ee + '*\\]', re = ':(' + te + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + ne + ')*)|.*)\\)|)', ie = new RegExp(ee + '+', 'g'), oe = new RegExp('^' + ee + '+|((?:^|[^\\\\])(?:\\\\.)*)' + ee + '+$', 'g'), ae = new RegExp('^' + ee + '*,' + ee + '*'), se = new RegExp('^' + ee + '*([>+~]|' + ee + ')' + ee + '*'), ue = new RegExp('=' + ee + '*([^\\]\'"]*?)' + ee + '*\\]', 'g'), le = new RegExp(re), ce = new RegExp('^' + te + '$'), fe = {
        ID: new RegExp('^#(' + te + ')'),
        CLASS: new RegExp('^\\.(' + te + ')'),
        TAG: new RegExp('^(' + te + '|[*])'),
        ATTR: new RegExp('^' + ne),
        PSEUDO: new RegExp('^' + re),
        CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + ee + '*(even|odd|(([+-]|)(\\d*)n|)' + ee + '*(?:([+-]|)' + ee + '*(\\d+)|))' + ee + '*\\)|)', 'i'),
        bool: new RegExp('^(?:' + Z + ')$', 'i'),
        needsContext: new RegExp('^' + ee + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + ee + '*((?:-\\d)?\\d*)' + ee + '*\\)|)(?=[^-]|$)', 'i')
      }, pe = /^(?:input|select|textarea|button)$/i, de = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, me = new RegExp('\\\\([\\da-f]{1,6}' + ee + '?|(' + ee + ')|.)', 'ig'), ye = function (e, t, n) {
        var r = '0x' + t - 65536;
        return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
      }, xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, be = function (e, t) {
        return t ? '\0' === e ? '\uFFFD' : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' ' : '\\' + e;
      }, we = function () {
        A();
      }, Te = p(function (e) {
        return !0 === e.disabled && ('form' in e || 'label' in e);
      }, {
        dir: 'parentNode',
        next: 'legend'
      });
    try {
      Q.apply(V = J.call(I.childNodes), I.childNodes), V[I.childNodes.length].nodeType;
    } catch (e) {
      Q = {
        apply: V.length ? function (e, t) {
          Y.apply(e, J.call(t));
        } : function (e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];);
          e.length = n - 1;
        }
      };
    }
    b = t.support = {}, C = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && 'HTML' !== t.nodeName;
    }, A = t.setDocument = function (e) {
      var t, n, r = e ? e.ownerDocument || e : I;
      return r !== q && 9 === r.nodeType && r.documentElement ? (q = r, L = q.documentElement, H = !C(q), I !== q && (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener('unload', we, !1) : n.attachEvent && n.attachEvent('onunload', we)), b.attributes = i(function (e) {
        return e.className = 'i', !e.getAttribute('className');
      }), b.getElementsByTagName = i(function (e) {
        return e.appendChild(q.createComment('')), !e.getElementsByTagName('*').length;
      }), b.getElementsByClassName = he.test(q.getElementsByClassName), b.getById = i(function (e) {
        return L.appendChild(e).id = M, !q.getElementsByName || !q.getElementsByName(M).length;
      }), b.getById ? (w.filter.ID = function (e) {
        var t = e.replace(me, ye);
        return function (e) {
          return e.getAttribute('id') === t;
        };
      }, w.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && H) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (w.filter.ID = function (e) {
        var t = e.replace(me, ye);
        return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id');
          return n && n.value === t;
        };
      }, w.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && H) {
          var n, r, i, o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode('id')) && n.value === e)
              return [o];
            for (i = t.getElementsByName(e), r = 0; o = i[r++];)
              if ((n = o.getAttributeNode('id')) && n.value === e)
                return [o];
          }
          return [];
        }
      }), w.find.TAG = b.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n, r = [], i = 0, o = t.getElementsByTagName(e);
        if ('*' === e) {
          for (; n = o[i++];)
            1 === n.nodeType && r.push(n);
          return r;
        }
        return o;
      }, w.find.CLASS = b.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && H)
          return t.getElementsByClassName(e);
      }, O = [], F = [], (b.qsa = he.test(q.querySelectorAll)) && (i(function (e) {
        L.appendChild(e).innerHTML = '<a id=\'' + M + '\'></a><select id=\'' + M + '-\r\\\' msallowcapture=\'\'><option selected=\'\'></option></select>', e.querySelectorAll('[msallowcapture^=\'\']').length && F.push('[*^$]=' + ee + '*(?:\'\'|"")'), e.querySelectorAll('[selected]').length || F.push('\\[' + ee + '*(?:value|' + Z + ')'), e.querySelectorAll('[id~=' + M + '-]').length || F.push('~='), e.querySelectorAll(':checked').length || F.push(':checked'), e.querySelectorAll('a#' + M + '+*').length || F.push('.#.+[+~]');
      }), i(function (e) {
        e.innerHTML = '<a href=\'\' disabled=\'disabled\'></a><select disabled=\'disabled\'><option/></select>';
        var t = q.createElement('input');
        t.setAttribute('type', 'hidden'), e.appendChild(t).setAttribute('name', 'D'), e.querySelectorAll('[name=d]').length && F.push('name' + ee + '*[*^$|!~]?='), 2 !== e.querySelectorAll(':enabled').length && F.push(':enabled', ':disabled'), L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(':disabled').length && F.push(':enabled', ':disabled'), e.querySelectorAll('*,:x'), F.push(',.*:');
      })), (b.matchesSelector = he.test(P = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function (e) {
        b.disconnectedMatch = P.call(e, '*'), P.call(e, '[s!=\'\']:x'), O.push('!=', re);
      }), F = F.length && new RegExp(F.join('|')), O = O.length && new RegExp(O.join('|')), t = he.test(L.compareDocumentPosition), R = t || he.test(L.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t)
          for (; t = t.parentNode;)
            if (t === e)
              return !0;
        return !1;
      }, X = t ? function (e, t) {
        if (e === t)
          return j = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === I && R(I, e) ? -1 : t === q || t.ownerDocument === I && R(I, t) ? 1 : D ? K(D, e) - K(D, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t)
          return j = !0, 0;
        var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], u = [t];
        if (!i || !o)
          return e === q ? -1 : t === q ? 1 : i ? -1 : o ? 1 : D ? K(D, e) - K(D, t) : 0;
        if (i === o)
          return a(e, t);
        for (n = e; n = n.parentNode;)
          s.unshift(n);
        for (n = t; n = n.parentNode;)
          u.unshift(n);
        for (; s[r] === u[r];)
          r++;
        return r ? a(s[r], u[r]) : s[r] === I ? -1 : u[r] === I ? 1 : 0;
      }, q) : q;
    }, t.matches = function (e, n) {
      return t(e, null, null, n);
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== q && A(e), n = n.replace(ue, '=\'$1\']'), b.matchesSelector && H && !z[n + ' '] && (!O || !O.test(n)) && (!F || !F.test(n)))
        try {
          var r = P.call(e, n);
          if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType)
            return r;
        } catch (e) {
        }
      return t(n, q, null, [e]).length > 0;
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== q && A(e), R(e, t);
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== q && A(e);
      var n = w.attrHandle[t.toLowerCase()], r = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
      return void 0 !== r ? r : b.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, t.escape = function (e) {
      return (e + '').replace(xe, be);
    }, t.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }, t.uniqueSort = function (e) {
      var t, n = [], r = 0, i = 0;
      if (j = !b.detectDuplicates, D = !b.sortStable && e.slice(0), e.sort(X), j) {
        for (; t = e[i++];)
          t === e[i] && (r = n.push(i));
        for (; r--;)
          e.splice(n[r], 1);
      }
      return D = null, e;
    }, T = t.getText = function (e) {
      var t, n = '', r = 0, i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ('string' == typeof e.textContent)
            return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling)
            n += T(e);
        } else if (3 === i || 4 === i)
          return e.nodeValue;
      } else
        for (; t = e[r++];)
          n += T(t);
      return n;
    }, w = t.selectors = {
      cacheLength: 50,
      createPseudo: r,
      match: fe,
      attrHandle: {},
      find: {},
      relative: {
        '>': {
          dir: 'parentNode',
          first: !0
        },
        ' ': { dir: 'parentNode' },
        '+': {
          dir: 'previousSibling',
          first: !0
        },
        '~': { dir: 'previousSibling' }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(me, ye), e[3] = (e[3] || e[4] || e[5] || '').replace(me, ye), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), 'nth' === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3])), e[5] = +(e[7] + e[8] || 'odd' === e[3])) : e[3] && t.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t, n = !e[6] && e[2];
          return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || '' : n && le.test(n) && (t = E(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(me, ye).toLowerCase();
          return '*' === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = B[e + ' '];
          return t || (t = new RegExp('(^|' + ee + ')' + e + '(' + ee + '|$)')) && B(e, function (e) {
            return t.test('string' == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute('class') || '');
          });
        },
        ATTR: function (e, n, r) {
          return function (i) {
            var o = t.attr(i, e);
            return null == o ? '!=' === n : !n || (o += '', '=' === n ? o === r : '!=' === n ? o !== r : '^=' === n ? r && 0 === o.indexOf(r) : '*=' === n ? r && o.indexOf(r) > -1 : '$=' === n ? r && o.slice(-r.length) === r : '~=' === n ? (' ' + o.replace(ie, ' ') + ' ').indexOf(r) > -1 : '|=' === n && (o === r || o.slice(0, r.length + 1) === r + '-'));
          };
        },
        CHILD: function (e, t, n, r, i) {
          var o = 'nth' !== e.slice(0, 3), a = 'last' !== e.slice(-4), s = 'of-type' === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l, c, f, p, d, h, g = o !== a ? 'nextSibling' : 'previousSibling', v = t.parentNode, m = s && t.nodeName.toLowerCase(), y = !u && !s, x = !1;
            if (v) {
              if (o) {
                for (; g;) {
                  for (p = t; p = p[g];)
                    if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType)
                      return !1;
                  h = g = 'only' === e && !h && 'nextSibling';
                }
                return !0;
              }
              if (h = [a ? v.firstChild : v.lastChild], a && y) {
                for (p = v, f = p[M] || (p[M] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === W && l[1], x = d && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                  if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [
                      W,
                      d,
                      x
                    ];
                    break;
                  }
              } else if (y && (p = t, f = p[M] || (p[M] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === W && l[1], x = d), !1 === x)
                for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && (f = p[M] || (p[M] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[e] = [
                    W,
                    x
                  ]), p !== t)););
              return (x -= i) === r || x % r == 0 && x / r >= 0;
            }
          };
        },
        PSEUDO: function (e, n) {
          var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error('unsupported pseudo: ' + e);
          return o[M] ? o(n) : o.length > 1 ? (i = [
            e,
            e,
            '',
            n
          ], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
            for (var r, i = o(e, n), a = i.length; a--;)
              r = K(e, i[a]), e[r] = !(t[r] = i[a]);
          }) : function (e) {
            return o(e, 0, i);
          }) : o;
        }
      },
      pseudos: {
        not: r(function (e) {
          var t = [], n = [], i = k(e.replace(oe, '$1'));
          return i[M] ? r(function (e, t, n, r) {
            for (var o, a = i(e, null, r, []), s = e.length; s--;)
              (o = a[s]) && (e[s] = !(t[s] = o));
          }) : function (e, r, o) {
            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
          };
        }),
        has: r(function (e) {
          return function (n) {
            return t(e, n).length > 0;
          };
        }),
        contains: r(function (e) {
          return e = e.replace(me, ye), function (t) {
            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
          };
        }),
        lang: r(function (e) {
          return ce.test(e || '') || t.error('unsupported lang: ' + e), e = e.replace(me, ye).toLowerCase(), function (t) {
            var n;
            do {
              if (n = H ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang'))
                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-');
            } while ((t = t.parentNode) && 1 === t.nodeType);
            return !1;
          };
        }),
        target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === L;
        },
        focus: function (e) {
          return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: s(!1),
        disabled: s(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && !!e.checked || 'option' === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)
            if (e.nodeType < 6)
              return !1;
          return !0;
        },
        parent: function (e) {
          return !w.pseudos.empty(e);
        },
        header: function (e) {
          return de.test(e.nodeName);
        },
        input: function (e) {
          return pe.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return 'input' === t && 'button' === e.type || 'button' === t;
        },
        text: function (e) {
          var t;
          return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase());
        },
        first: u(function () {
          return [0];
        }),
        last: u(function (e, t) {
          return [t - 1];
        }),
        eq: u(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: u(function (e, t) {
          for (var n = 0; n < t; n += 2)
            e.push(n);
          return e;
        }),
        odd: u(function (e, t) {
          for (var n = 1; n < t; n += 2)
            e.push(n);
          return e;
        }),
        lt: u(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;)
            e.push(r);
          return e;
        }),
        gt: u(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;)
            e.push(r);
          return e;
        })
      }
    }, w.pseudos.nth = w.pseudos.eq;
    for (x in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      })
      w.pseudos[x] = function (e) {
        return function (t) {
          return 'input' === t.nodeName.toLowerCase() && t.type === e;
        };
      }(x);
    for (x in {
        submit: !0,
        reset: !0
      })
      w.pseudos[x] = function (e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ('input' === n || 'button' === n) && t.type === e;
        };
      }(x);
    return c.prototype = w.filters = w.pseudos, w.setFilters = new c(), E = t.tokenize = function (e, n) {
      var r, i, o, a, s, u, l, c = _[e + ' '];
      if (c)
        return n ? 0 : c.slice(0);
      for (s = e, u = [], l = w.preFilter; s;) {
        r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), o.push({
          value: r,
          type: i[0].replace(oe, ' ')
        }), s = s.slice(r.length));
        for (a in w.filter)
          !(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
            value: r,
            type: a,
            matches: i
          }), s = s.slice(r.length));
        if (!r)
          break;
      }
      return n ? s.length : s ? t.error(e) : _(e, u).slice(0);
    }, k = t.compile = function (e, t) {
      var n, r = [], i = [], o = z[e + ' '];
      if (!o) {
        for (t || (t = E(e)), n = t.length; n--;)
          o = m(t[n]), o[M] ? r.push(o) : i.push(o);
        o = z(e, y(i, r)), o.selector = e;
      }
      return o;
    }, S = t.select = function (e, t, n, r) {
      var i, o, a, s, u, c = 'function' == typeof e && e, p = !r && E(e = c.selector || e);
      if (n = n || [], 1 === p.length) {
        if (o = p[0] = p[0].slice(0), o.length > 2 && 'ID' === (a = o[0]).type && 9 === t.nodeType && H && w.relative[o[1].type]) {
          if (!(t = (w.find.ID(a.matches[0].replace(me, ye), t) || [])[0]))
            return n;
          c && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }
        for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
          if ((u = w.find[s]) && (r = u(a.matches[0].replace(me, ye), ve.test(o[0].type) && l(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && f(o)))
              return Q.apply(n, r), n;
            break;
          }
      }
      return (c || k(e, p))(r, t, !H, n, !t || ve.test(e) && l(t.parentNode) || t), n;
    }, b.sortStable = M.split('').sort(X).join('') === M, b.detectDuplicates = !!j, A(), b.sortDetached = i(function (e) {
      return 1 & e.compareDocumentPosition(q.createElement('fieldset'));
    }), i(function (e) {
      return e.innerHTML = '<a href=\'#\'></a>', '#' === e.firstChild.getAttribute('href');
    }) || o('type|href|height|width', function (e, t, n) {
      if (!n)
        return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
    }), b.attributes && i(function (e) {
      return e.innerHTML = '<input/>', e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
    }) || o('value', function (e, t, n) {
      if (!n && 'input' === e.nodeName.toLowerCase())
        return e.defaultValue;
    }), i(function (e) {
      return null == e.getAttribute('disabled');
    }) || o(Z, function (e, t, n) {
      var r;
      if (!n)
        return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), t;
  }(e);
  ge.find = be, ge.expr = be.selectors, ge.expr[':'] = ge.expr.pseudos, ge.uniqueSort = ge.unique = be.uniqueSort, ge.text = be.getText, ge.isXMLDoc = be.isXML, ge.contains = be.contains, ge.escapeSelector = be.escape;
  var we = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (i && ge(e).is(n))
            break;
          r.push(e);
        }
      return r;
    }, Te = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    }, Ce = ge.expr.match.needsContext, Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, ke = /^.[^:#\[\.,]*$/;
  ge.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ':not(' + e + ')'), 1 === t.length && 1 === r.nodeType ? ge.find.matchesSelector(r, e) ? [r] : [] : ge.find.matches(e, ge.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, ge.fn.extend({
    find: function (e) {
      var t, n, r = this.length, i = this;
      if ('string' != typeof e)
        return this.pushStack(ge(e).filter(function () {
          for (t = 0; t < r; t++)
            if (ge.contains(i[t], this))
              return !0;
        }));
      for (n = this.pushStack([]), t = 0; t < r; t++)
        ge.find(e, i[t], n);
      return r > 1 ? ge.uniqueSort(n) : n;
    },
    filter: function (e) {
      return this.pushStack(o(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(o(this, e || [], !0));
    },
    is: function (e) {
      return !!o(this, 'string' == typeof e && Ce.test(e) ? ge(e) : e || [], !1).length;
    }
  });
  var Se, Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (ge.fn.init = function (e, t, n) {
    var r, i;
    if (!e)
      return this;
    if (n = n || Se, 'string' == typeof e) {
      if (!(r = '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3 ? [
          null,
          e,
          null
        ] : Ne.exec(e)) || !r[1] && t)
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof ge ? t[0] : t, ge.merge(this, ge.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), Ee.test(r[1]) && ge.isPlainObject(t))
          for (r in t)
            ge.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return i = ne.getElementById(r[2]), i && (this[0] = i, this.length = 1), this;
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : ge.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ge) : ge.makeArray(e, this);
  }).prototype = ge.fn, Se = ge(ne);
  var De = /^(?:parents|prev(?:Until|All))/, je = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  ge.fn.extend({
    has: function (e) {
      var t = ge(e, this), n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++)
          if (ge.contains(this, t[e]))
            return !0;
      });
    },
    closest: function (e, t) {
      var n, r = 0, i = this.length, o = [], a = 'string' != typeof e && ge(e);
      if (!Ce.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ge.find.matchesSelector(n, e))) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? ge.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? 'string' == typeof e ? se.call(ge(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), ge.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return we(e, 'parentNode');
    },
    parentsUntil: function (e, t, n) {
      return we(e, 'parentNode', n);
    },
    next: function (e) {
      return a(e, 'nextSibling');
    },
    prev: function (e) {
      return a(e, 'previousSibling');
    },
    nextAll: function (e) {
      return we(e, 'nextSibling');
    },
    prevAll: function (e) {
      return we(e, 'previousSibling');
    },
    nextUntil: function (e, t, n) {
      return we(e, 'nextSibling', n);
    },
    prevUntil: function (e, t, n) {
      return we(e, 'previousSibling', n);
    },
    siblings: function (e) {
      return Te((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return Te(e.firstChild);
    },
    contents: function (e) {
      return i(e, 'iframe') ? e.contentDocument : (i(e, 'template') && (e = e.content || e), ge.merge([], e.childNodes));
    }
  }, function (e, t) {
    ge.fn[e] = function (n, r) {
      var i = ge.map(this, t, n);
      return 'Until' !== e.slice(-5) && (r = n), r && 'string' == typeof r && (i = ge.filter(r, i)), this.length > 1 && (je[e] || ge.uniqueSort(i), De.test(e) && i.reverse()), this.pushStack(i);
    };
  });
  var Ae = /[^\x20\t\r\n\f]+/g;
  ge.Callbacks = function (e) {
    e = 'string' == typeof e ? s(e) : ge.extend({}, e);
    var t, n, r, i, o = [], a = [], u = -1, l = function () {
        for (i = i || e.once, r = t = !0; a.length; u = -1)
          for (n = a.shift(); ++u < o.length;)
            !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length, n = !1);
        e.memory || (n = !1), t = !1, i && (o = n ? [] : '');
      }, c = {
        add: function () {
          return o && (n && !t && (u = o.length - 1, a.push(n)), function t(n) {
            ge.each(n, function (n, r) {
              ge.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && 'string' !== ge.type(r) && t(r);
            });
          }(arguments), n && !t && l()), this;
        },
        remove: function () {
          return ge.each(arguments, function (e, t) {
            for (var n; (n = ge.inArray(t, o, n)) > -1;)
              o.splice(n, 1), n <= u && u--;
          }), this;
        },
        has: function (e) {
          return e ? ge.inArray(e, o) > -1 : o.length > 0;
        },
        empty: function () {
          return o && (o = []), this;
        },
        disable: function () {
          return i = a = [], o = n = '', this;
        },
        disabled: function () {
          return !o;
        },
        lock: function () {
          return i = a = [], n || t || (o = n = ''), this;
        },
        locked: function () {
          return !!i;
        },
        fireWith: function (e, n) {
          return i || (n = n || [], n = [
            e,
            n.slice ? n.slice() : n
          ], a.push(n), t || l()), this;
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        }
      };
    return c;
  }, ge.extend({
    Deferred: function (t) {
      var n = [
          [
            'notify',
            'progress',
            ge.Callbacks('memory'),
            ge.Callbacks('memory'),
            2
          ],
          [
            'resolve',
            'done',
            ge.Callbacks('once memory'),
            ge.Callbacks('once memory'),
            0,
            'resolved'
          ],
          [
            'reject',
            'fail',
            ge.Callbacks('once memory'),
            ge.Callbacks('once memory'),
            1,
            'rejected'
          ]
        ], r = 'pending', i = {
          state: function () {
            return r;
          },
          always: function () {
            return o.done(arguments).fail(arguments), this;
          },
          catch: function (e) {
            return i.then(null, e);
          },
          pipe: function () {
            var e = arguments;
            return ge.Deferred(function (t) {
              ge.each(n, function (n, r) {
                var i = ge.isFunction(e[r[4]]) && e[r[4]];
                o[r[1]](function () {
                  var e = i && i.apply(this, arguments);
                  e && ge.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + 'With'](this, i ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          },
          then: function (t, r, i) {
            function o(t, n, r, i) {
              return function () {
                var s = this, c = arguments, f = function () {
                    var e, f;
                    if (!(t < a)) {
                      if ((e = r.apply(s, c)) === n.promise())
                        throw new TypeError('Thenable self-resolution');
                      f = e && ('object' == typeof e || 'function' == typeof e) && e.then, ge.isFunction(f) ? i ? f.call(e, o(a, n, u, i), o(a, n, l, i)) : (a++, f.call(e, o(a, n, u, i), o(a, n, l, i), o(a, n, u, n.notifyWith))) : (r !== u && (s = void 0, c = [e]), (i || n.resolveWith)(s, c));
                    }
                  }, p = i ? f : function () {
                    try {
                      f();
                    } catch (e) {
                      ge.Deferred.exceptionHook && ge.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (r !== l && (s = void 0, c = [e]), n.rejectWith(s, c));
                    }
                  };
                t ? p() : (ge.Deferred.getStackHook && (p.stackTrace = ge.Deferred.getStackHook()), e.setTimeout(p));
              };
            }
            var a = 0;
            return ge.Deferred(function (e) {
              n[0][3].add(o(0, e, ge.isFunction(i) ? i : u, e.notifyWith)), n[1][3].add(o(0, e, ge.isFunction(t) ? t : u)), n[2][3].add(o(0, e, ge.isFunction(r) ? r : l));
            }).promise();
          },
          promise: function (e) {
            return null != e ? ge.extend(e, i) : i;
          }
        }, o = {};
      return ge.each(n, function (e, t) {
        var a = t[2], s = t[5];
        i[t[1]] = a.add, s && a.add(function () {
          r = s;
        }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + 'With'](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + 'With'] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    },
    when: function (e) {
      var t = arguments.length, n = t, r = Array(n), i = ie.call(arguments), o = ge.Deferred(), a = function (e) {
          return function (n) {
            r[e] = this, i[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || o.resolveWith(r, i);
          };
        };
      if (t <= 1 && (c(e, o.done(a(n)).resolve, o.reject, !t), 'pending' === o.state() || ge.isFunction(i[n] && i[n].then)))
        return o.then();
      for (; n--;)
        c(i[n], a(n), o.reject);
      return o.promise();
    }
  });
  var qe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ge.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && qe.test(t.name) && e.console.warn('jQuery.Deferred exception: ' + t.message, t.stack, n);
  }, ge.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };
  var Le = ge.Deferred();
  ge.fn.ready = function (e) {
    return Le.then(e).catch(function (e) {
      ge.readyException(e);
    }), this;
  }, ge.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --ge.readyWait : ge.isReady) || (ge.isReady = !0, !0 !== e && --ge.readyWait > 0 || Le.resolveWith(ne, [ge]));
    }
  }), ge.ready.then = Le.then, 'complete' === ne.readyState || 'loading' !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(ge.ready) : (ne.addEventListener('DOMContentLoaded', f), e.addEventListener('load', f));
  var He = function (e, t, n, r, i, o, a) {
      var s = 0, u = e.length, l = null == n;
      if ('object' === ge.type(n)) {
        i = !0;
        for (s in n)
          He(e, t, s, n[s], !0, o, a);
      } else if (void 0 !== r && (i = !0, ge.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
          return l.call(ge(e), n);
        })), t))
        for (; s < u; s++)
          t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    }, Fe = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  p.uid = 1, p.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, Fe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function (e, t, n) {
      var r, i = this.cache(e);
      if ('string' == typeof t)
        i[ge.camelCase(t)] = n;
      else
        for (r in t)
          i[ge.camelCase(r)] = t[r];
      return i;
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ge.camelCase(t)];
    },
    access: function (e, t, n) {
      return void 0 === t || t && 'string' == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function (e, t) {
      var n, r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          Array.isArray(t) ? t = t.map(ge.camelCase) : (t = ge.camelCase(t), t = t in r ? [t] : t.match(Ae) || []), n = t.length;
          for (; n--;)
            delete r[t[n]];
        }
        (void 0 === t || ge.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !ge.isEmptyObject(t);
    }
  };
  var Oe = new p(), Pe = new p(), Re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Me = /[A-Z]/g;
  ge.extend({
    hasData: function (e) {
      return Pe.hasData(e) || Oe.hasData(e);
    },
    data: function (e, t, n) {
      return Pe.access(e, t, n);
    },
    removeData: function (e, t) {
      Pe.remove(e, t);
    },
    _data: function (e, t, n) {
      return Oe.access(e, t, n);
    },
    _removeData: function (e, t) {
      Oe.remove(e, t);
    }
  }), ge.fn.extend({
    data: function (e, t) {
      var n, r, i, o = this[0], a = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (i = Pe.get(o), 1 === o.nodeType && !Oe.get(o, 'hasDataAttrs'))) {
          for (n = a.length; n--;)
            a[n] && (r = a[n].name, 0 === r.indexOf('data-') && (r = ge.camelCase(r.slice(5)), h(o, r, i[r])));
          Oe.set(o, 'hasDataAttrs', !0);
        }
        return i;
      }
      return 'object' == typeof e ? this.each(function () {
        Pe.set(this, e);
      }) : He(this, function (t) {
        var n;
        if (o && void 0 === t) {
          if (void 0 !== (n = Pe.get(o, e)))
            return n;
          if (void 0 !== (n = h(o, e)))
            return n;
        } else
          this.each(function () {
            Pe.set(this, e, t);
          });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        Pe.remove(this, e);
      });
    }
  }), ge.extend({
    queue: function (e, t, n) {
      var r;
      if (e)
        return t = (t || 'fx') + 'queue', r = Oe.get(e, t), n && (!r || Array.isArray(n) ? r = Oe.access(e, t, ge.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function (e, t) {
      t = t || 'fx';
      var n = ge.queue(e, t), r = n.length, i = n.shift(), o = ge._queueHooks(e, t), a = function () {
          ge.dequeue(e, t);
        };
      'inprogress' === i && (i = n.shift(), r--), i && ('fx' === t && n.unshift('inprogress'), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + 'queueHooks';
      return Oe.get(e, n) || Oe.access(e, n, {
        empty: ge.Callbacks('once memory').add(function () {
          Oe.remove(e, [
            t + 'queue',
            n
          ]);
        })
      });
    }
  }), ge.fn.extend({
    queue: function (e, t) {
      var n = 2;
      return 'string' != typeof e && (t = e, e = 'fx', n--), arguments.length < n ? ge.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = ge.queue(this, e, t);
        ge._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && ge.dequeue(this, e);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        ge.dequeue(this, e);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || 'fx', []);
    },
    promise: function (e, t) {
      var n, r = 1, i = ge.Deferred(), o = this, a = this.length, s = function () {
          --r || i.resolveWith(o, [o]);
        };
      for ('string' != typeof e && (t = e, e = void 0), e = e || 'fx'; a--;)
        (n = Oe.get(o[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t);
    }
  });
  var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, We = new RegExp('^(?:([+-])=|)(' + Ie + ')([a-z%]*)$', 'i'), $e = [
      'Top',
      'Right',
      'Bottom',
      'Left'
    ], Be = function (e, t) {
      return e = t || e, 'none' === e.style.display || '' === e.style.display && ge.contains(e.ownerDocument, e) && 'none' === ge.css(e, 'display');
    }, _e = function (e, t, n, r) {
      var i, o, a = {};
      for (o in t)
        a[o] = e.style[o], e.style[o] = t[o];
      i = n.apply(e, r || []);
      for (o in t)
        e.style[o] = a[o];
      return i;
    }, ze = {};
  ge.fn.extend({
    show: function () {
      return m(this, !0);
    },
    hide: function () {
      return m(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        Be(this) ? ge(this).show() : ge(this).hide();
      });
    }
  });
  var Xe = /^(?:checkbox|radio)$/i, Ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Ve = /^$|\/(?:java|ecma)script/i, Ge = {
      option: [
        1,
        '<select multiple=\'multiple\'>',
        '</select>'
      ],
      thead: [
        1,
        '<table>',
        '</table>'
      ],
      col: [
        2,
        '<table><colgroup>',
        '</colgroup></table>'
      ],
      tr: [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      td: [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      _default: [
        0,
        '',
        ''
      ]
    };
  Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td;
  var Ye = /<|&#?\w+;/;
  !function () {
    var e = ne.createDocumentFragment(), t = e.appendChild(ne.createElement('div')), n = ne.createElement('input');
    n.setAttribute('type', 'radio'), n.setAttribute('checked', 'checked'), n.setAttribute('name', 't'), t.appendChild(n), de.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = '<textarea>x</textarea>', de.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
  }();
  var Qe = ne.documentElement, Je = /^key/, Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ze = /^([^.]*)(?:\.(.+)|)/;
  ge.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, v = Oe.get(e);
      if (v)
        for (n.handler && (o = n, n = o.handler, i = o.selector), i && ge.find.matchesSelector(Qe, i), n.guid || (n.guid = ge.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
            return void 0 !== ge && ge.event.triggered !== t.type ? ge.event.dispatch.apply(e, arguments) : void 0;
          }), t = (t || '').match(Ae) || [''], l = t.length; l--;)
          s = Ze.exec(t[l]) || [], d = g = s[1], h = (s[2] || '').split('.').sort(), d && (f = ge.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ge.event.special[d] || {}, c = ge.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && ge.expr.match.needsContext.test(i),
            namespace: h.join('.')
          }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ge.event.global[d] = !0);
    },
    remove: function (e, t, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, v = Oe.hasData(e) && Oe.get(e);
      if (v && (u = v.events)) {
        for (t = (t || '').match(Ae) || [''], l = t.length; l--;)
          if (s = Ze.exec(t[l]) || [], d = g = s[1], h = (s[2] || '').split('.').sort(), d) {
            for (f = ge.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'), a = o = p.length; o--;)
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ('**' !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ge.removeEvent(e, d, v.handle), delete u[d]);
          } else
            for (d in u)
              ge.event.remove(e, d + t[l], n, r, !0);
        ge.isEmptyObject(u) && Oe.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t, n, r, i, o, a, s = ge.event.fix(e), u = new Array(arguments.length), l = (Oe.get(this, 'events') || {})[s.type] || [], c = ge.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++)
        u[t] = arguments[t];
      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        for (a = ge.event.handlers.call(this, s, l), t = 0; (i = a[t++]) && !s.isPropagationStopped();)
          for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();)
            s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((ge.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
      if (u && l.nodeType && !('click' === e.type && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              r = t[n], i = r.selector + ' ', void 0 === a[i] && (a[i] = r.needsContext ? ge(i, this).index(l) > -1 : ge.find(i, this, null, [l]).length), a[i] && o.push(r);
            o.length && s.push({
              elem: l,
              handlers: o
            });
          }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function (e, t) {
      Object.defineProperty(ge.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: ge.isFunction(t) ? function () {
          if (this.originalEvent)
            return t(this.originalEvent);
        } : function () {
          if (this.originalEvent)
            return this.originalEvent[e];
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function (e) {
      return e[ge.expando] ? e : new ge.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== C() && this.focus)
            return this.focus(), !1;
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          if (this === C() && this.blur)
            return this.blur(), !1;
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          if ('checkbox' === this.type && this.click && i(this, 'input'))
            return this.click(), !1;
        },
        _default: function (e) {
          return i(e.target, 'a');
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, ge.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, ge.Event = function (e, t) {
    return this instanceof ge.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ge.extend(this, t), this.timeStamp = e && e.timeStamp || ge.now(), void (this[ge.expando] = !0)) : new ge.Event(e, t);
  }, ge.Event.prototype = {
    constructor: ge.Event,
    isDefaultPrevented: T,
    isPropagationStopped: T,
    isImmediatePropagationStopped: T,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, ge.each({
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
      return null == e.which && Je.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, ge.event.addProp), ge.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    pointerenter: 'pointerover',
    pointerleave: 'pointerout'
  }, function (e, t) {
    ge.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function (e) {
        var n, r = this, i = e.relatedTarget, o = e.handleObj;
        return i && (i === r || ge.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), ge.fn.extend({
    on: function (e, t, n, r) {
      return E(this, e, t, n, r);
    },
    one: function (e, t, n, r) {
      return E(this, e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj)
        return r = e.handleObj, ge(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler), this;
      if ('object' == typeof e) {
        for (i in e)
          this.off(i, t, e[i]);
        return this;
      }
      return !1 !== t && 'function' != typeof t || (n = t, t = void 0), !1 === n && (n = T), this.each(function () {
        ge.event.remove(this, e, n, t);
      });
    }
  });
  var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, tt = /<script|<style|<link/i, nt = /checked\s*(?:[^=]|=\s*.checked.)/i, rt = /^true\/(.*)/, it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  ge.extend({
    htmlPrefilter: function (e) {
      return e.replace(et, '<$1></$2>');
    },
    clone: function (e, t, n) {
      var r, i, o, a, s = e.cloneNode(!0), u = ge.contains(e.ownerDocument, e);
      if (!(de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e)))
        for (a = y(s), o = y(e), r = 0, i = o.length; r < i; r++)
          j(o[r], a[r]);
      if (t)
        if (n)
          for (o = o || y(e), a = a || y(s), r = 0, i = o.length; r < i; r++)
            D(o[r], a[r]);
        else
          D(e, s);
      return a = y(s, 'script'), a.length > 0 && x(a, !u && y(e, 'script')), s;
    },
    cleanData: function (e) {
      for (var t, n, r, i = ge.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (Fe(n)) {
          if (t = n[Oe.expando]) {
            if (t.events)
              for (r in t.events)
                i[r] ? ge.event.remove(n, r) : ge.removeEvent(n, r, t.handle);
            n[Oe.expando] = void 0;
          }
          n[Pe.expando] && (n[Pe.expando] = void 0);
        }
    }
  }), ge.fn.extend({
    detach: function (e) {
      return q(this, e, !0);
    },
    remove: function (e) {
      return q(this, e);
    },
    text: function (e) {
      return He(this, function (e) {
        return void 0 === e ? ge.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return A(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          k(this, e).appendChild(e);
        }
      });
    },
    prepend: function () {
      return A(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = k(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return A(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return A(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++)
        1 === e.nodeType && (ge.cleanData(y(e, !1)), e.textContent = '');
      return this;
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return ge.clone(this, e, t);
      });
    },
    html: function (e) {
      return He(this, function (e) {
        var t = this[0] || {}, n = 0, r = this.length;
        if (void 0 === e && 1 === t.nodeType)
          return t.innerHTML;
        if ('string' == typeof e && !tt.test(e) && !Ge[(Ue.exec(e) || [
            '',
            ''
          ])[1].toLowerCase()]) {
          e = ge.htmlPrefilter(e);
          try {
            for (; n < r; n++)
              t = this[n] || {}, 1 === t.nodeType && (ge.cleanData(y(t, !1)), t.innerHTML = e);
            t = 0;
          } catch (e) {
          }
        }
        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var e = [];
      return A(this, arguments, function (t) {
        var n = this.parentNode;
        ge.inArray(this, e) < 0 && (ge.cleanData(y(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), ge.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (e, t) {
    ge.fn[e] = function (e) {
      for (var n, r = [], i = ge(e), o = i.length - 1, a = 0; a <= o; a++)
        n = a === o ? this : this.clone(!0), ge(i[a])[t](n), ae.apply(r, n.get());
      return this.pushStack(r);
    };
  });
  var ot = /^margin/, at = new RegExp('^(' + Ie + ')(?!px)[a-z%]+$', 'i'), st = function (t) {
      var n = t.ownerDocument.defaultView;
      return n && n.opener || (n = e), n.getComputedStyle(t);
    };
  !function () {
    function t() {
      if (s) {
        s.style.cssText = 'box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%', s.innerHTML = '', Qe.appendChild(a);
        var t = e.getComputedStyle(s);
        n = '1%' !== t.top, o = '2px' === t.marginLeft, r = '4px' === t.width, s.style.marginRight = '50%', i = '4px' === t.marginRight, Qe.removeChild(a), s = null;
      }
    }
    var n, r, i, o, a = ne.createElement('div'), s = ne.createElement('div');
    s.style && (s.style.backgroundClip = 'content-box', s.cloneNode(!0).style.backgroundClip = '', de.clearCloneStyle = 'content-box' === s.style.backgroundClip, a.style.cssText = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute', a.appendChild(s), ge.extend(de, {
      pixelPosition: function () {
        return t(), n;
      },
      boxSizingReliable: function () {
        return t(), r;
      },
      pixelMarginRight: function () {
        return t(), i;
      },
      reliableMarginLeft: function () {
        return t(), o;
      }
    }));
  }();
  var ut = /^(none|table(?!-c[ea]).+)/, lt = /^--/, ct = {
      position: 'absolute',
      visibility: 'hidden',
      display: 'block'
    }, ft = {
      letterSpacing: '0',
      fontWeight: '400'
    }, pt = [
      'Webkit',
      'Moz',
      'ms'
    ], dt = ne.createElement('div').style;
  ge.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = L(e, 'opacity');
            return '' === n ? '1' : n;
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
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: 'cssFloat' },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, a, s = ge.camelCase(t), u = lt.test(t), l = e.style;
        return u || (t = O(s)), a = ge.cssHooks[t] || ge.cssHooks[s], void 0 === n ? a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : (o = typeof n, 'string' === o && (i = We.exec(n)) && i[1] && (n = g(e, t, i), o = 'number'), void (null != n && n === n && ('number' === o && (n += i && i[3] || (ge.cssNumber[s] ? '' : 'px')), de.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (l[t] = 'inherit'), a && 'set' in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))));
      }
    },
    css: function (e, t, n, r) {
      var i, o, a, s = ge.camelCase(t);
      return lt.test(t) || (t = O(s)), a = ge.cssHooks[t] || ge.cssHooks[s], a && 'get' in a && (i = a.get(e, !0, n)), void 0 === i && (i = L(e, t, r)), 'normal' === i && t in ft && (i = ft[t]), '' === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), ge.each([
    'height',
    'width'
  ], function (e, t) {
    ge.cssHooks[t] = {
      get: function (e, n, r) {
        if (n)
          return !ut.test(ge.css(e, 'display')) || e.getClientRects().length && e.getBoundingClientRect().width ? M(e, t, r) : _e(e, ct, function () {
            return M(e, t, r);
          });
      },
      set: function (e, n, r) {
        var i, o = r && st(e), a = r && R(e, t, r, 'border-box' === ge.css(e, 'boxSizing', !1, o), o);
        return a && (i = We.exec(n)) && 'px' !== (i[3] || 'px') && (e.style[t] = n, n = ge.css(e, t)), P(e, n, a);
      }
    };
  }), ge.cssHooks.marginLeft = H(de.reliableMarginLeft, function (e, t) {
    if (t)
      return (parseFloat(L(e, 'marginLeft')) || e.getBoundingClientRect().left - _e(e, { marginLeft: 0 }, function () {
        return e.getBoundingClientRect().left;
      })) + 'px';
  }), ge.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (e, t) {
    ge.cssHooks[e + t] = {
      expand: function (n) {
        for (var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n]; r < 4; r++)
          i[e + $e[r] + t] = o[r] || o[r - 2] || o[0];
        return i;
      }
    }, ot.test(e) || (ge.cssHooks[e + t].set = P);
  }), ge.fn.extend({
    css: function (e, t) {
      return He(this, function (e, t, n) {
        var r, i, o = {}, a = 0;
        if (Array.isArray(t)) {
          for (r = st(e), i = t.length; a < i; a++)
            o[t[a]] = ge.css(e, t[a], !1, r);
          return o;
        }
        return void 0 !== n ? ge.style(e, t, n) : ge.css(e, t);
      }, e, t, arguments.length > 1);
    }
  }), ge.Tween = I, I.prototype = {
    constructor: I,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || ge.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ge.cssNumber[n] ? '' : 'px');
    },
    cur: function () {
      var e = I.propHooks[this.prop];
      return e && e.get ? e.get(this) : I.propHooks._default.get(this);
    },
    run: function (e) {
      var t, n = I.propHooks[this.prop];
      return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this;
    }
  }, I.prototype.init.prototype = I.prototype, I.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, ''), t && 'auto' !== t ? t : 0);
      },
      set: function (e) {
        ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]] && !ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ge.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, ge.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return 0.5 - Math.cos(e * Math.PI) / 2;
    },
    _default: 'swing'
  }, ge.fx = I.prototype.init, ge.fx.step = {};
  var ht, gt, vt = /^(?:toggle|show|hide)$/, mt = /queueHooks$/;
  ge.Animation = ge.extend(U, {
    tweeners: {
      '*': [function (e, t) {
          var n = this.createTween(e, t);
          return g(n.elem, e, We.exec(t), n), n;
        }]
    },
    tweener: function (e, t) {
      ge.isFunction(e) ? (t = e, e = ['*']) : e = e.match(Ae);
      for (var n, r = 0, i = e.length; r < i; r++)
        n = e[r], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t);
    },
    prefilters: [z],
    prefilter: function (e, t) {
      t ? U.prefilters.unshift(e) : U.prefilters.push(e);
    }
  }), ge.speed = function (e, t, n) {
    var r = e && 'object' == typeof e ? ge.extend({}, e) : {
      complete: n || !n && t || ge.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !ge.isFunction(t) && t
    };
    return ge.fx.off ? r.duration = 0 : 'number' != typeof r.duration && (r.duration in ge.fx.speeds ? r.duration = ge.fx.speeds[r.duration] : r.duration = ge.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = 'fx'), r.old = r.complete, r.complete = function () {
      ge.isFunction(r.old) && r.old.call(this), r.queue && ge.dequeue(this, r.queue);
    }, r;
  }, ge.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(Be).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
    },
    animate: function (e, t, n, r) {
      var i = ge.isEmptyObject(e), o = ge.speed(t, n, r), a = function () {
          var t = U(this, ge.extend({}, e), o);
          (i || Oe.get(this, 'finish')) && t.stop(!0);
        };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function (e, t, n) {
      var r = function (e) {
        var t = e.stop;
        delete e.stop, t(n);
      };
      return 'string' != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || 'fx', []), this.each(function () {
        var t = !0, i = null != e && e + 'queueHooks', o = ge.timers, a = Oe.get(this);
        if (i)
          a[i] && a[i].stop && r(a[i]);
        else
          for (i in a)
            a[i] && a[i].stop && mt.test(i) && r(a[i]);
        for (i = o.length; i--;)
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        !t && n || ge.dequeue(this, e);
      });
    },
    finish: function (e) {
      return !1 !== e && (e = e || 'fx'), this.each(function () {
        var t, n = Oe.get(this), r = n[e + 'queue'], i = n[e + 'queueHooks'], o = ge.timers, a = r ? r.length : 0;
        for (n.finish = !0, ge.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; t < a; t++)
          r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish;
      });
    }
  }), ge.each([
    'toggle',
    'show',
    'hide'
  ], function (e, t) {
    var n = ge.fn[t];
    ge.fn[t] = function (e, r, i) {
      return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, r, i);
    };
  }), ge.each({
    slideDown: B('show'),
    slideUp: B('hide'),
    slideToggle: B('toggle'),
    fadeIn: { opacity: 'show' },
    fadeOut: { opacity: 'hide' },
    fadeToggle: { opacity: 'toggle' }
  }, function (e, t) {
    ge.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), ge.timers = [], ge.fx.tick = function () {
    var e, t = 0, n = ge.timers;
    for (ht = ge.now(); t < n.length; t++)
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || ge.fx.stop(), ht = void 0;
  }, ge.fx.timer = function (e) {
    ge.timers.push(e), ge.fx.start();
  }, ge.fx.interval = 13, ge.fx.start = function () {
    gt || (gt = !0, W());
  }, ge.fx.stop = function () {
    gt = null;
  }, ge.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, ge.fn.delay = function (t, n) {
    return t = ge.fx ? ge.fx.speeds[t] || t : t, n = n || 'fx', this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);
      r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = ne.createElement('input'), t = ne.createElement('select'), n = t.appendChild(ne.createElement('option'));
    e.type = 'checkbox', de.checkOn = '' !== e.value, de.optSelected = n.selected, e = ne.createElement('input'), e.value = 't', e.type = 'radio', de.radioValue = 't' === e.value;
  }();
  var yt, xt = ge.expr.attrHandle;
  ge.fn.extend({
    attr: function (e, t) {
      return He(this, ge.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ge.removeAttr(this, e);
      });
    }
  }), ge.extend({
    attr: function (e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o)
        return void 0 === e.getAttribute ? ge.prop(e, t, n) : (1 === o && ge.isXMLDoc(e) || (i = ge.attrHooks[t.toLowerCase()] || (ge.expr.match.bool.test(t) ? yt : void 0)), void 0 !== n ? null === n ? void ge.removeAttr(e, t) : i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ''), n) : i && 'get' in i && null !== (r = i.get(e, t)) ? r : (r = ge.find.attr(e, t), null == r ? void 0 : r));
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!de.radioValue && 'radio' === t && i(e, 'input')) {
            var n = e.value;
            return e.setAttribute('type', t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n, r = 0, i = t && t.match(Ae);
      if (i && 1 === e.nodeType)
        for (; n = i[r++];)
          e.removeAttribute(n);
    }
  }), yt = {
    set: function (e, t, n) {
      return !1 === t ? ge.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, ge.each(ge.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = xt[t] || ge.find.attr;
    xt[t] = function (e, t, r) {
      var i, o, a = t.toLowerCase();
      return r || (o = xt[a], xt[a] = i, i = null != n(e, t, r) ? a : null, xt[a] = o), i;
    };
  });
  var bt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
  ge.fn.extend({
    prop: function (e, t) {
      return He(this, ge.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[ge.propFix[e] || e];
      });
    }
  }), ge.extend({
    prop: function (e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o)
        return 1 === o && ge.isXMLDoc(e) || (t = ge.propFix[t] || t, i = ge.propHooks[t]), void 0 !== n ? i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && 'get' in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = ge.find.attr(e, 'tabindex');
          return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      for: 'htmlFor',
      class: 'className'
    }
  }), de.optSelected || (ge.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), ge.each([
    'tabIndex',
    'readOnly',
    'maxLength',
    'cellSpacing',
    'cellPadding',
    'rowSpan',
    'colSpan',
    'useMap',
    'frameBorder',
    'contentEditable'
  ], function () {
    ge.propFix[this.toLowerCase()] = this;
  }), ge.fn.extend({
    addClass: function (e) {
      var t, n, r, i, o, a, s, u = 0;
      if (ge.isFunction(e))
        return this.each(function (t) {
          ge(this).addClass(e.call(this, t, G(this)));
        });
      if ('string' == typeof e && e)
        for (t = e.match(Ae) || []; n = this[u++];)
          if (i = G(n), r = 1 === n.nodeType && ' ' + V(i) + ' ') {
            for (a = 0; o = t[a++];)
              r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
            s = V(r), i !== s && n.setAttribute('class', s);
          }
      return this;
    },
    removeClass: function (e) {
      var t, n, r, i, o, a, s, u = 0;
      if (ge.isFunction(e))
        return this.each(function (t) {
          ge(this).removeClass(e.call(this, t, G(this)));
        });
      if (!arguments.length)
        return this.attr('class', '');
      if ('string' == typeof e && e)
        for (t = e.match(Ae) || []; n = this[u++];)
          if (i = G(n), r = 1 === n.nodeType && ' ' + V(i) + ' ') {
            for (a = 0; o = t[a++];)
              for (; r.indexOf(' ' + o + ' ') > -1;)
                r = r.replace(' ' + o + ' ', ' ');
            s = V(r), i !== s && n.setAttribute('class', s);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return 'boolean' == typeof t && 'string' === n ? t ? this.addClass(e) : this.removeClass(e) : ge.isFunction(e) ? this.each(function (n) {
        ge(this).toggleClass(e.call(this, n, G(this), t), t);
      }) : this.each(function () {
        var t, r, i, o;
        if ('string' === n)
          for (r = 0, i = ge(this), o = e.match(Ae) || []; t = o[r++];)
            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
        else
          void 0 !== e && 'boolean' !== n || (t = G(this), t && Oe.set(this, '__className__', t), this.setAttribute && this.setAttribute('class', t || !1 === e ? '' : Oe.get(this, '__className__') || ''));
      });
    },
    hasClass: function (e) {
      var t, n, r = 0;
      for (t = ' ' + e + ' '; n = this[r++];)
        if (1 === n.nodeType && (' ' + V(G(n)) + ' ').indexOf(t) > -1)
          return !0;
      return !1;
    }
  });
  var Tt = /\r/g;
  ge.fn.extend({
    val: function (e) {
      var t, n, r, i = this[0];
      return arguments.length ? (r = ge.isFunction(e), this.each(function (n) {
        var i;
        1 === this.nodeType && (i = r ? e.call(this, n, ge(this).val()) : e, null == i ? i = '' : 'number' == typeof i ? i += '' : Array.isArray(i) && (i = ge.map(i, function (e) {
          return null == e ? '' : e + '';
        })), (t = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()]) && 'set' in t && void 0 !== t.set(this, i, 'value') || (this.value = i));
      })) : i ? (t = ge.valHooks[i.type] || ge.valHooks[i.nodeName.toLowerCase()], t && 'get' in t && void 0 !== (n = t.get(i, 'value')) ? n : (n = i.value, 'string' == typeof n ? n.replace(Tt, '') : null == n ? '' : n)) : void 0;
    }
  }), ge.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = ge.find.attr(e, 'value');
          return null != t ? t : V(ge.text(e));
        }
      },
      select: {
        get: function (e) {
          var t, n, r, o = e.options, a = e.selectedIndex, s = 'select-one' === e.type, u = s ? null : [], l = s ? a + 1 : o.length;
          for (r = a < 0 ? l : s ? a : 0; r < l; r++)
            if (n = o[r], (n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, 'optgroup'))) {
              if (t = ge(n).val(), s)
                return t;
              u.push(t);
            }
          return u;
        },
        set: function (e, t) {
          for (var n, r, i = e.options, o = ge.makeArray(t), a = i.length; a--;)
            r = i[a], (r.selected = ge.inArray(ge.valHooks.option.get(r), o) > -1) && (n = !0);
          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), ge.each([
    'radio',
    'checkbox'
  ], function () {
    ge.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t))
          return e.checked = ge.inArray(ge(e).val(), t) > -1;
      }
    }, de.checkOn || (ge.valHooks[this].get = function (e) {
      return null === e.getAttribute('value') ? 'on' : e.value;
    });
  });
  var Ct = /^(?:focusinfocus|focusoutblur)$/;
  ge.extend(ge.event, {
    trigger: function (t, n, r, i) {
      var o, a, s, u, l, c, f, p = [r || ne], d = ce.call(t, 'type') ? t.type : t, h = ce.call(t, 'namespace') ? t.namespace.split('.') : [];
      if (a = s = r = r || ne, 3 !== r.nodeType && 8 !== r.nodeType && !Ct.test(d + ge.event.triggered) && (d.indexOf('.') > -1 && (h = d.split('.'), d = h.shift(), h.sort()), l = d.indexOf(':') < 0 && 'on' + d, t = t[ge.expando] ? t : new ge.Event(d, 'object' == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join('.'), t.rnamespace = t.namespace ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ge.makeArray(n, [t]), f = ge.event.special[d] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
        if (!i && !f.noBubble && !ge.isWindow(r)) {
          for (u = f.delegateType || d, Ct.test(u + d) || (a = a.parentNode); a; a = a.parentNode)
            p.push(a), s = a;
          s === (r.ownerDocument || ne) && p.push(s.defaultView || s.parentWindow || e);
        }
        for (o = 0; (a = p[o++]) && !t.isPropagationStopped();)
          t.type = o > 1 ? u : f.bindType || d, c = (Oe.get(a, 'events') || {})[t.type] && Oe.get(a, 'handle'), c && c.apply(a, n), (c = l && a[l]) && c.apply && Fe(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
        return t.type = d, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !Fe(r) || l && ge.isFunction(r[d]) && !ge.isWindow(r) && (s = r[l], s && (r[l] = null), ge.event.triggered = d, r[d](), ge.event.triggered = void 0, s && (r[l] = s)), t.result;
      }
    },
    simulate: function (e, t, n) {
      var r = ge.extend(new ge.Event(), n, {
        type: e,
        isSimulated: !0
      });
      ge.event.trigger(r, null, t);
    }
  }), ge.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        ge.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n)
        return ge.event.trigger(e, t, n, !0);
    }
  }), ge.each('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(' '), function (e, t) {
    ge.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), ge.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), de.focusin = 'onfocusin' in e, de.focusin || ge.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (e, t) {
    var n = function (e) {
      ge.event.simulate(t, e.target, ge.event.fix(e));
    };
    ge.event.special[t] = {
      setup: function () {
        var r = this.ownerDocument || this, i = Oe.access(r, t);
        i || r.addEventListener(e, n, !0), Oe.access(r, t, (i || 0) + 1);
      },
      teardown: function () {
        var r = this.ownerDocument || this, i = Oe.access(r, t) - 1;
        i ? Oe.access(r, t, i) : (r.removeEventListener(e, n, !0), Oe.remove(r, t));
      }
    };
  });
  var Et = e.location, kt = ge.now(), St = /\?/;
  ge.parseXML = function (t) {
    var n;
    if (!t || 'string' != typeof t)
      return null;
    try {
      n = new e.DOMParser().parseFromString(t, 'text/xml');
    } catch (e) {
      n = void 0;
    }
    return n && !n.getElementsByTagName('parsererror').length || ge.error('Invalid XML: ' + t), n;
  };
  var Nt = /\[\]$/, Dt = /\r?\n/g, jt = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i;
  ge.param = function (e, t) {
    var n, r = [], i = function (e, t) {
        var n = ge.isFunction(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (Array.isArray(e) || e.jquery && !ge.isPlainObject(e))
      ge.each(e, function () {
        i(this.name, this.value);
      });
    else
      for (n in e)
        Y(n, e[n], t, i);
    return r.join('&');
  }, ge.fn.extend({
    serialize: function () {
      return ge.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = ge.prop(this, 'elements');
        return e ? ge.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !ge(this).is(':disabled') && At.test(this.nodeName) && !jt.test(e) && (this.checked || !Xe.test(e));
      }).map(function (e, t) {
        var n = ge(this).val();
        return null == n ? null : Array.isArray(n) ? ge.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Dt, '\r\n')
          };
        }) : {
          name: t.name,
          value: n.replace(Dt, '\r\n')
        };
      }).get();
    }
  });
  var qt = /%20/g, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Pt = /^(?:GET|HEAD)$/, Rt = /^\/\//, Mt = {}, It = {}, Wt = '*/'.concat('*'), $t = ne.createElement('a');
  $t.href = Et.href, ge.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: 'GET',
      isLocal: Ot.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': Wt,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': JSON.parse,
        'text xml': ge.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? K(K(e, ge.ajaxSettings), t) : K(ge.ajaxSettings, e);
    },
    ajaxPrefilter: Q(Mt),
    ajaxTransport: Q(It),
    ajax: function (t, n) {
      function r(t, n, r, s) {
        var l, p, d, b, w, T = n;
        c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || '', C.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Z(h, C, r)), b = ee(h, b, C, l), l ? (h.ifModified && (w = C.getResponseHeader('Last-Modified'), w && (ge.lastModified[o] = w), (w = C.getResponseHeader('etag')) && (ge.etag[o] = w)), 204 === t || 'HEAD' === h.type ? T = 'nocontent' : 304 === t ? T = 'notmodified' : (T = b.state, p = b.data, d = b.error, l = !d)) : (d = T, !t && T || (T = 'error', t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + '', l ? m.resolveWith(g, [
          p,
          T,
          C
        ]) : m.rejectWith(g, [
          C,
          T,
          d
        ]), C.statusCode(x), x = void 0, f && v.trigger(l ? 'ajaxSuccess' : 'ajaxError', [
          C,
          h,
          l ? p : d
        ]), y.fireWith(g, [
          C,
          T
        ]), f && (v.trigger('ajaxComplete', [
          C,
          h
        ]), --ge.active || ge.event.trigger('ajaxStop')));
      }
      'object' == typeof t && (n = t, t = void 0), n = n || {};
      var i, o, a, s, u, l, c, f, p, d, h = ge.ajaxSetup({}, n), g = h.context || h, v = h.context && (g.nodeType || g.jquery) ? ge(g) : ge.event, m = ge.Deferred(), y = ge.Callbacks('once memory'), x = h.statusCode || {}, b = {}, w = {}, T = 'canceled', C = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (c) {
              if (!s)
                for (s = {}; t = Ft.exec(a);)
                  s[t[1].toLowerCase()] = t[2];
              t = s[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return c ? a : null;
          },
          setRequestHeader: function (e, t) {
            return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this;
          },
          overrideMimeType: function (e) {
            return null == c && (h.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (c)
                C.always(e[C.status]);
              else
                for (t in e)
                  x[t] = [
                    x[t],
                    e[t]
                  ];
            return this;
          },
          abort: function (e) {
            var t = e || T;
            return i && i.abort(t), r(0, t), this;
          }
        };
      if (m.promise(C), h.url = ((t || h.url || Et.href) + '').replace(Rt, Et.protocol + '//'), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || '*').toLowerCase().match(Ae) || [''], null == h.crossDomain) {
        l = ne.createElement('a');
        try {
          l.href = h.url, l.href = l.href, h.crossDomain = $t.protocol + '//' + $t.host != l.protocol + '//' + l.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }
      if (h.data && h.processData && 'string' != typeof h.data && (h.data = ge.param(h.data, h.traditional)), J(Mt, h, n, C), c)
        return C;
      f = ge.event && h.global, f && 0 == ge.active++ && ge.event.trigger('ajaxStart'), h.type = h.type.toUpperCase(), h.hasContent = !Pt.test(h.type), o = h.url.replace(Lt, ''), h.hasContent ? h.data && h.processData && 0 === (h.contentType || '').indexOf('application/x-www-form-urlencoded') && (h.data = h.data.replace(qt, '+')) : (d = h.url.slice(o.length), h.data && (o += (St.test(o) ? '&' : '?') + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, '$1'), d = (St.test(o) ? '&' : '?') + '_=' + kt++ + d), h.url = o + d), h.ifModified && (ge.lastModified[o] && C.setRequestHeader('If-Modified-Since', ge.lastModified[o]), ge.etag[o] && C.setRequestHeader('If-None-Match', ge.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader('Content-Type', h.contentType), C.setRequestHeader('Accept', h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ('*' !== h.dataTypes[0] ? ', ' + Wt + '; q=0.01' : '') : h.accepts['*']);
      for (p in h.headers)
        C.setRequestHeader(p, h.headers[p]);
      if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c))
        return C.abort();
      if (T = 'abort', y.add(h.complete), C.done(h.success), C.fail(h.error), i = J(It, h, n, C)) {
        if (C.readyState = 1, f && v.trigger('ajaxSend', [
            C,
            h
          ]), c)
          return C;
        h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          C.abort('timeout');
        }, h.timeout));
        try {
          c = !1, i.send(b, r);
        } catch (e) {
          if (c)
            throw e;
          r(-1, e);
        }
      } else
        r(-1, 'No Transport');
      return C;
    },
    getJSON: function (e, t, n) {
      return ge.get(e, t, n, 'json');
    },
    getScript: function (e, t) {
      return ge.get(e, void 0, t, 'script');
    }
  }), ge.each([
    'get',
    'post'
  ], function (e, t) {
    ge[t] = function (e, n, r, i) {
      return ge.isFunction(n) && (i = i || r, r = n, n = void 0), ge.ajax(ge.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, ge.isPlainObject(e) && e));
    };
  }), ge._evalUrl = function (e) {
    return ge.ajax({
      url: e,
      type: 'GET',
      dataType: 'script',
      cache: !0,
      async: !1,
      global: !1,
      throws: !0
    });
  }, ge.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (ge.isFunction(e) && (e = e.call(this[0])), t = ge(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;)
          e = e.firstElementChild;
        return e;
      }).append(this)), this;
    },
    wrapInner: function (e) {
      return ge.isFunction(e) ? this.each(function (t) {
        ge(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = ge(this), n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function (e) {
      var t = ge.isFunction(e);
      return this.each(function (n) {
        ge(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function (e) {
      return this.parent(e).not('body').each(function () {
        ge(this).replaceWith(this.childNodes);
      }), this;
    }
  }), ge.expr.pseudos.hidden = function (e) {
    return !ge.expr.pseudos.visible(e);
  }, ge.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, ge.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {
    }
  };
  var Bt = {
      0: 200,
      1223: 204
    }, _t = ge.ajaxSettings.xhr();
  de.cors = !!_t && 'withCredentials' in _t, de.ajax = _t = !!_t, ge.ajaxTransport(function (t) {
    var n, r;
    if (de.cors || _t && !t.crossDomain)
      return {
        send: function (i, o) {
          var a, s = t.xhr();
          if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
            for (a in t.xhrFields)
              s[a] = t.xhrFields[a];
          t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i['X-Requested-With'] || (i['X-Requested-With'] = 'XMLHttpRequest');
          for (a in i)
            s.setRequestHeader(a, i[a]);
          n = function (e) {
            return function () {
              n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, 'abort' === e ? s.abort() : 'error' === e ? 'number' != typeof s.status ? o(0, 'error') : o(s.status, s.statusText) : o(Bt[s.status] || s.status, s.statusText, 'text' !== (s.responseType || 'text') || 'string' != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
            };
          }, s.onload = n(), r = s.onerror = n('error'), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
            4 === s.readyState && e.setTimeout(function () {
              n && r();
            });
          }, n = n('abort');
          try {
            s.send(t.hasContent && t.data || null);
          } catch (e) {
            if (n)
              throw e;
          }
        },
        abort: function () {
          n && n();
        }
      };
  }), ge.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), ge.ajaxSetup({
    accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
    contents: { script: /\b(?:java|ecma)script\b/ },
    converters: {
      'text script': function (e) {
        return ge.globalEval(e), e;
      }
    }
  }), ge.ajaxPrefilter('script', function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
  }), ge.ajaxTransport('script', function (e) {
    if (e.crossDomain) {
      var t, n;
      return {
        send: function (r, i) {
          t = ge('<script>').prop({
            charset: e.scriptCharset,
            src: e.url
          }).on('load error', n = function (e) {
            t.remove(), n = null, e && i('error' === e.type ? 404 : 200, e.type);
          }), ne.head.appendChild(t[0]);
        },
        abort: function () {
          n && n();
        }
      };
    }
  });
  var zt = [], Xt = /(=)\?(?=&|$)|\?\?/;
  ge.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = zt.pop() || ge.expando + '_' + kt++;
      return this[e] = !0, e;
    }
  }), ge.ajaxPrefilter('json jsonp', function (t, n, r) {
    var i, o, a, s = !1 !== t.jsonp && (Xt.test(t.url) ? 'url' : 'string' == typeof t.data && 0 === (t.contentType || '').indexOf('application/x-www-form-urlencoded') && Xt.test(t.data) && 'data');
    if (s || 'jsonp' === t.dataTypes[0])
      return i = t.jsonpCallback = ge.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Xt, '$1' + i) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? '&' : '?') + t.jsonp + '=' + i), t.converters['script json'] = function () {
        return a || ge.error(i + ' was not called'), a[0];
      }, t.dataTypes[0] = 'json', o = e[i], e[i] = function () {
        a = arguments;
      }, r.always(function () {
        void 0 === o ? ge(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, zt.push(i)), a && ge.isFunction(o) && o(a[0]), a = o = void 0;
      }), 'script';
  }), de.createHTMLDocument = function () {
    var e = ne.implementation.createHTMLDocument('').body;
    return e.innerHTML = '<form></form><form></form>', 2 === e.childNodes.length;
  }(), ge.parseHTML = function (e, t, n) {
    if ('string' != typeof e)
      return [];
    'boolean' == typeof t && (n = t, t = !1);
    var r, i, o;
    return t || (de.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(''), r = t.createElement('base'), r.href = ne.location.href, t.head.appendChild(r)) : t = ne), i = Ee.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = b([e], t, o), o && o.length && ge(o).remove(), ge.merge([], i.childNodes));
  }, ge.fn.load = function (e, t, n) {
    var r, i, o, a = this, s = e.indexOf(' ');
    return s > -1 && (r = V(e.slice(s)), e = e.slice(0, s)), ge.isFunction(t) ? (n = t, t = void 0) : t && 'object' == typeof t && (i = 'POST'), a.length > 0 && ge.ajax({
      url: e,
      type: i || 'GET',
      dataType: 'html',
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? ge('<div>').append(ge.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [
          e.responseText,
          t,
          e
        ]);
      });
    }), this;
  }, ge.each([
    'ajaxStart',
    'ajaxStop',
    'ajaxComplete',
    'ajaxError',
    'ajaxSuccess',
    'ajaxSend'
  ], function (e, t) {
    ge.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), ge.expr.pseudos.animated = function (e) {
    return ge.grep(ge.timers, function (t) {
      return e === t.elem;
    }).length;
  }, ge.offset = {
    setOffset: function (e, t, n) {
      var r, i, o, a, s, u, l, c = ge.css(e, 'position'), f = ge(e), p = {};
      'static' === c && (e.style.position = 'relative'), s = f.offset(), o = ge.css(e, 'top'), u = ge.css(e, 'left'), l = ('absolute' === c || 'fixed' === c) && (o + u).indexOf('auto') > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ge.isFunction(t) && (t = t.call(e, n, ge.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), 'using' in t ? t.using.call(e, p) : f.css(p);
    }
  }, ge.fn.extend({
    offset: function (e) {
      if (arguments.length)
        return void 0 === e ? this : this.each(function (t) {
          ge.offset.setOffset(this, e, t);
        });
      var t, n, r, i, o = this[0];
      return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, {
        top: r.top + i.pageYOffset - n.clientTop,
        left: r.left + i.pageXOffset - n.clientLeft
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function () {
      if (this[0]) {
        var e, t, n = this[0], r = {
            top: 0,
            left: 0
          };
        return 'fixed' === ge.css(n, 'position') ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), i(e[0], 'html') || (r = e.offset()), r = {
          top: r.top + ge.css(e[0], 'borderTopWidth', !0),
          left: r.left + ge.css(e[0], 'borderLeftWidth', !0)
        }), {
          top: t.top - r.top - ge.css(n, 'marginTop', !0),
          left: t.left - r.left - ge.css(n, 'marginLeft', !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent; e && 'static' === ge.css(e, 'position');)
          e = e.offsetParent;
        return e || Qe;
      });
    }
  }), ge.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (e, t) {
    var n = 'pageYOffset' === t;
    ge.fn[e] = function (r) {
      return He(this, function (e, r, i) {
        var o;
        return ge.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i);
      }, e, r, arguments.length);
    };
  }), ge.each([
    'top',
    'left'
  ], function (e, t) {
    ge.cssHooks[t] = H(de.pixelPosition, function (e, n) {
      if (n)
        return n = L(e, t), at.test(n) ? ge(e).position()[t] + 'px' : n;
    });
  }), ge.each({
    Height: 'height',
    Width: 'width'
  }, function (e, t) {
    ge.each({
      padding: 'inner' + e,
      content: t,
      '': 'outer' + e
    }, function (n, r) {
      ge.fn[r] = function (i, o) {
        var a = arguments.length && (n || 'boolean' != typeof i), s = n || (!0 === i || !0 === o ? 'margin' : 'border');
        return He(this, function (t, n, i) {
          var o;
          return ge.isWindow(t) ? 0 === r.indexOf('outer') ? t['inner' + e] : t.document.documentElement['client' + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body['scroll' + e], o['scroll' + e], t.body['offset' + e], o['offset' + e], o['client' + e])) : void 0 === i ? ge.css(t, n, s) : ge.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      };
    });
  }), ge.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
    }
  }), ge.holdReady = function (e) {
    e ? ge.readyWait++ : ge.ready(!0);
  }, ge.isArray = Array.isArray, ge.parseJSON = JSON.parse, ge.nodeName = i, 'function' == typeof define && define.amd && define('jquery', [], function () {
    return ge;
  });
  var Ut = e.jQuery, Vt = e.$;
  return ge.noConflict = function (t) {
    return e.$ === ge && (e.$ = Vt), t && e.jQuery === ge && (e.jQuery = Ut), ge;
  }, t || (e.jQuery = e.$ = ge), ge;
});
!function (t) {
  'use strict';
  function e(t) {
    if (!b(t))
      return sr;
    y(t.objectMaxDepth) && (sr.objectMaxDepth = n(t.objectMaxDepth) ? t.objectMaxDepth : NaN);
  }
  function n(t) {
    return C(t) && 0 < t;
  }
  function r(t, e) {
    return e = e || Error, function () {
      var n, r = arguments[0];
      for (n = '[' + (t ? t + ':' : '') + r + '] http://errors.angularjs.org/1.6.5/' + (t ? t + '/' : '') + r, r = 1; r < arguments.length; r++) {
        n = n + (1 == r ? '?' : '&') + 'p' + (r - 1) + '=';
        var i, o = encodeURIComponent;
        i = arguments[r], i = 'function' == typeof i ? i.toString().replace(/ \{[\s\S]*$/, '') : void 0 === i ? 'undefined' : 'string' != typeof i ? JSON.stringify(i) : i, n += o(i);
      }
      return new e(n);
    };
  }
  function i(t) {
    if (null == t || O(t))
      return !1;
    if (wr(t) || x(t) || ir && t instanceof ir)
      return !0;
    var e = 'length' in Object(t) && t.length;
    return C(e) && (0 <= e && (e - 1 in t || t instanceof Array) || 'function' == typeof t.item);
  }
  function o(t, e, n) {
    var r, a;
    if (t)
      if (k(t))
        for (r in t)
          'prototype' !== r && 'length' !== r && 'name' !== r && t.hasOwnProperty(r) && e.call(n, t[r], r, t);
      else if (wr(t) || i(t)) {
        var s = 'object' != typeof t;
        for (r = 0, a = t.length; r < a; r++)
          (s || r in t) && e.call(n, t[r], r, t);
      } else if (t.forEach && t.forEach !== o)
        t.forEach(e, n, t);
      else if (w(t))
        for (r in t)
          e.call(n, t[r], r, t);
      else if ('function' == typeof t.hasOwnProperty)
        for (r in t)
          t.hasOwnProperty(r) && e.call(n, t[r], r, t);
      else
        for (r in t)
          cr.call(t, r) && e.call(n, t[r], r, t);
    return t;
  }
  function a(t, e, n) {
    for (var r = Object.keys(t).sort(), i = 0; i < r.length; i++)
      e.call(n, t[r[i]], r[i]);
    return r;
  }
  function s(t) {
    return function (e, n) {
      t(n, e);
    };
  }
  function u() {
    return ++yr;
  }
  function c(t, e, n) {
    for (var r = t.$$hashKey, i = 0, o = e.length; i < o; ++i) {
      var a = e[i];
      if (b(a) || k(a))
        for (var s = Object.keys(a), u = 0, l = s.length; u < l; u++) {
          var f = s[u], h = a[f];
          n && b(h) ? S(h) ? t[f] = new Date(h.valueOf()) : A(h) ? t[f] = new RegExp(h) : h.nodeName ? t[f] = h.cloneNode(!0) : N(h) ? t[f] = h.clone() : (b(t[f]) || (t[f] = wr(h) ? [] : {}), c(t[f], [h], !0)) : t[f] = h;
        }
    }
    return r ? t.$$hashKey = r : delete t.$$hashKey, t;
  }
  function l(t) {
    return c(t, hr.call(arguments, 1), !1);
  }
  function f(t) {
    return c(t, hr.call(arguments, 1), !0);
  }
  function h(t) {
    return parseInt(t, 10);
  }
  function p(t, e) {
    return l(Object.create(t), e);
  }
  function $() {
  }
  function d(t) {
    return t;
  }
  function m(t) {
    return function () {
      return t;
    };
  }
  function v(t) {
    return k(t.toString) && t.toString !== dr;
  }
  function g(t) {
    return void 0 === t;
  }
  function y(t) {
    return void 0 !== t;
  }
  function b(t) {
    return null !== t && 'object' == typeof t;
  }
  function w(t) {
    return null !== t && 'object' == typeof t && !mr(t);
  }
  function x(t) {
    return 'string' == typeof t;
  }
  function C(t) {
    return 'number' == typeof t;
  }
  function S(t) {
    return '[object Date]' === dr.call(t);
  }
  function E(t) {
    switch (dr.call(t)) {
    case '[object Error]':
    case '[object Exception]':
    case '[object DOMException]':
      return !0;
    default:
      return t instanceof Error;
    }
  }
  function k(t) {
    return 'function' == typeof t;
  }
  function A(t) {
    return '[object RegExp]' === dr.call(t);
  }
  function O(t) {
    return t && t.window === t;
  }
  function M(t) {
    return t && t.$evalAsync && t.$watch;
  }
  function V(t) {
    return 'boolean' == typeof t;
  }
  function T(t) {
    return t && C(t.length) && xr.test(dr.call(t));
  }
  function N(t) {
    return !(!t || !(t.nodeName || t.prop && t.attr && t.find));
  }
  function I(t) {
    var e = {};
    t = t.split(',');
    var n;
    for (n = 0; n < t.length; n++)
      e[t[n]] = !0;
    return e;
  }
  function j(t) {
    return lr(t.nodeName || t[0] && t[0].nodeName);
  }
  function D(t, e) {
    var n = t.indexOf(e);
    return 0 <= n && t.splice(n, 1), n;
  }
  function P(t, e, r) {
    function i(t, e, n) {
      if (0 > --n)
        return '...';
      var r, i = e.$$hashKey;
      if (wr(t)) {
        r = 0;
        for (var o = t.length; r < o; r++)
          e.push(a(t[r], n));
      } else if (w(t))
        for (r in t)
          e[r] = a(t[r], n);
      else if (t && 'function' == typeof t.hasOwnProperty)
        for (r in t)
          t.hasOwnProperty(r) && (e[r] = a(t[r], n));
      else
        for (r in t)
          cr.call(t, r) && (e[r] = a(t[r], n));
      return i ? e.$$hashKey = i : delete e.$$hashKey, e;
    }
    function a(t, e) {
      if (!b(t))
        return t;
      var n = u.indexOf(t);
      if (-1 !== n)
        return c[n];
      if (O(t) || M(t))
        throw vr('cpws');
      var n = !1, r = s(t);
      return void 0 === r && (r = wr(t) ? [] : Object.create(mr(t)), n = !0), u.push(t), c.push(r), n ? i(t, r, e) : r;
    }
    function s(t) {
      switch (dr.call(t)) {
      case '[object Int8Array]':
      case '[object Int16Array]':
      case '[object Int32Array]':
      case '[object Float32Array]':
      case '[object Float64Array]':
      case '[object Uint8Array]':
      case '[object Uint8ClampedArray]':
      case '[object Uint16Array]':
      case '[object Uint32Array]':
        return new t.constructor(a(t.buffer), t.byteOffset, t.length);
      case '[object ArrayBuffer]':
        if (!t.slice) {
          var e = new ArrayBuffer(t.byteLength);
          return new Uint8Array(e).set(new Uint8Array(t)), e;
        }
        return t.slice(0);
      case '[object Boolean]':
      case '[object Number]':
      case '[object String]':
      case '[object Date]':
        return new t.constructor(t.valueOf());
      case '[object RegExp]':
        return e = new RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), e.lastIndex = t.lastIndex, e;
      case '[object Blob]':
        return new t.constructor([t], { type: t.type });
      }
      if (k(t.cloneNode))
        return t.cloneNode(!0);
    }
    var u = [], c = [];
    if (r = n(r) ? r : NaN, e) {
      if (T(e) || '[object ArrayBuffer]' === dr.call(e))
        throw vr('cpta');
      if (t === e)
        throw vr('cpi');
      return wr(e) ? e.length = 0 : o(e, function (t, n) {
        '$$hashKey' !== n && delete e[n];
      }), u.push(t), c.push(e), i(t, e, r);
    }
    return a(t, r);
  }
  function R(t, e) {
    return t === e || t !== t && e !== e;
  }
  function U(t, e) {
    if (t === e)
      return !0;
    if (null === t || null === e)
      return !1;
    if (t !== t && e !== e)
      return !0;
    var n, r = typeof t;
    if (r === typeof e && 'object' === r) {
      if (!wr(t)) {
        if (S(t))
          return !!S(e) && R(t.getTime(), e.getTime());
        if (A(t))
          return !!A(e) && t.toString() === e.toString();
        if (M(t) || M(e) || O(t) || O(e) || wr(e) || S(e) || A(e))
          return !1;
        r = ct();
        for (n in t)
          if ('$' !== n.charAt(0) && !k(t[n])) {
            if (!U(t[n], e[n]))
              return !1;
            r[n] = !0;
          }
        for (n in e)
          if (!(n in r) && '$' !== n.charAt(0) && y(e[n]) && !k(e[n]))
            return !1;
        return !0;
      }
      if (!wr(e))
        return !1;
      if ((r = t.length) === e.length) {
        for (n = 0; n < r; n++)
          if (!U(t[n], e[n]))
            return !1;
        return !0;
      }
    }
    return !1;
  }
  function _(t, e, n) {
    return t.concat(hr.call(e, n));
  }
  function L(t, e) {
    var n = 2 < arguments.length ? hr.call(arguments, 2) : [];
    return !k(e) || e instanceof RegExp ? e : n.length ? function () {
      return arguments.length ? e.apply(t, _(n, arguments, 0)) : e.apply(t, n);
    } : function () {
      return arguments.length ? e.apply(t, arguments) : e.call(t);
    };
  }
  function q(e, n) {
    var r = n;
    return 'string' == typeof e && '$' === e.charAt(0) && '$' === e.charAt(1) ? r = void 0 : O(n) ? r = '$WINDOW' : n && t.document === n ? r = '$DOCUMENT' : M(n) && (r = '$SCOPE'), r;
  }
  function F(t, e) {
    if (!g(t))
      return C(e) || (e = e ? 2 : null), JSON.stringify(t, q, e);
  }
  function B(t) {
    return x(t) ? JSON.parse(t) : t;
  }
  function H(t, e) {
    t = t.replace(Ar, '');
    var n = Date.parse('Jan 01, 1970 00:00:00 ' + t) / 60000;
    return br(n) ? e : n;
  }
  function z(t, e, n) {
    n = n ? -1 : 1;
    var r = t.getTimezoneOffset();
    return e = H(e, r), n *= e - r, t = new Date(t.getTime()), t.setMinutes(t.getMinutes() + n), t;
  }
  function W(t) {
    t = ir(t).clone().empty();
    var e = ir('<div>').append(t).html();
    try {
      return t[0].nodeType === Nr ? lr(e) : e.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function (t, e) {
        return '<' + lr(e);
      });
    } catch (t) {
      return lr(e);
    }
  }
  function G(t) {
    try {
      return decodeURIComponent(t);
    } catch (t) {
    }
  }
  function K(t) {
    var e = {};
    return o((t || '').split('&'), function (t) {
      var n, r, i;
      t && (r = t = t.replace(/\+/g, '%20'), n = t.indexOf('='), -1 !== n && (r = t.substring(0, n), i = t.substring(n + 1)), r = G(r), y(r) && (i = !y(i) || G(i), cr.call(e, r) ? wr(e[r]) ? e[r].push(i) : e[r] = [
        e[r],
        i
      ] : e[r] = i));
    }), e;
  }
  function J(t) {
    var e = [];
    return o(t, function (t, n) {
      wr(t) ? o(t, function (t) {
        e.push(Y(n, !0) + (!0 === t ? '' : '=' + Y(t, !0)));
      }) : e.push(Y(n, !0) + (!0 === t ? '' : '=' + Y(t, !0)));
    }), e.length ? e.join('&') : '';
  }
  function Z(t) {
    return Y(t, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
  }
  function Y(t, e) {
    return encodeURIComponent(t).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%20/g, e ? '%20' : '+');
  }
  function Q(t, e) {
    var n, r, i = Or.length;
    for (r = 0; r < i; ++r)
      if (n = Or[r] + e, x(n = t.getAttribute(n)))
        return n;
    return null;
  }
  function X(e, n) {
    var r, i, a = {};
    o(Or, function (t) {
      t += 'app', !r && e.hasAttribute && e.hasAttribute(t) && (r = e, i = e.getAttribute(t));
    }), o(Or, function (t) {
      t += 'app';
      var n;
      !r && (n = e.querySelector('[' + t.replace(':', '\\:') + ']')) && (r = n, i = n.getAttribute(t));
    }), r && (Mr ? (a.strictDi = null !== Q(r, 'strict-di'), n(r, i ? [i] : [], a)) : t.console.error('Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.'));
  }
  function tt(e, n, r) {
    b(r) || (r = {}), r = l({ strictDi: !1 }, r);
    var i = function () {
        if (e = ir(e), e.injector()) {
          var i = e[0] === t.document ? 'document' : W(e);
          throw vr('btstrpd', i.replace(/</, '&lt;').replace(/>/, '&gt;'));
        }
        return n = n || [], n.unshift([
          '$provide',
          function (t) {
            t.value('$rootElement', e);
          }
        ]), r.debugInfoEnabled && n.push([
          '$compileProvider',
          function (t) {
            t.debugInfoEnabled(!0);
          }
        ]), n.unshift('ng'), i = Ht(n, r.strictDi), i.invoke([
          '$rootScope',
          '$rootElement',
          '$compile',
          '$injector',
          function (t, e, n, r) {
            t.$apply(function () {
              e.data('$injector', r), n(e)(t);
            });
          }
        ]), i;
      }, a = /^NG_ENABLE_DEBUG_INFO!/, s = /^NG_DEFER_BOOTSTRAP!/;
    if (t && a.test(t.name) && (r.debugInfoEnabled = !0, t.name = t.name.replace(a, '')), t && !s.test(t.name))
      return i();
    t.name = t.name.replace(s, ''), gr.resumeBootstrap = function (t) {
      return o(t, function (t) {
        n.push(t);
      }), i();
    }, k(gr.resumeDeferredBootstrap) && gr.resumeDeferredBootstrap();
  }
  function et() {
    t.name = 'NG_ENABLE_DEBUG_INFO!' + t.name, t.location.reload();
  }
  function nt(t) {
    if (!(t = gr.element(t).injector()))
      throw vr('test');
    return t.get('$$testability');
  }
  function rt(t, e) {
    return e = e || '_', t.replace(Vr, function (t, n) {
      return (n ? e : '') + t.toLowerCase();
    });
  }
  function it(t, e, n) {
    if (!t)
      throw vr('areq', e || '?', n || 'required');
    return t;
  }
  function ot(t, e, n) {
    return n && wr(t) && (t = t[t.length - 1]), it(k(t), e, 'not a function, got ' + (t && 'object' == typeof t ? t.constructor.name || 'Object' : typeof t)), t;
  }
  function at(t, e) {
    if ('hasOwnProperty' === t)
      throw vr('badname', e);
  }
  function st(t, e, n) {
    if (!e)
      return t;
    e = e.split('.');
    for (var r, i = t, o = e.length, a = 0; a < o; a++)
      r = e[a], t && (t = (i = t)[r]);
    return !n && k(t) ? L(i, t) : t;
  }
  function ut(t) {
    for (var e, n = t[0], r = t[t.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)
      (e || t[i] !== n) && (e || (e = ir(hr.call(t, 0, i))), e.push(n));
    return e || t;
  }
  function ct() {
    return Object.create(null);
  }
  function lt(t) {
    if (null == t)
      return '';
    switch (typeof t) {
    case 'string':
      break;
    case 'number':
      t = '' + t;
      break;
    default:
      t = !v(t) || wr(t) || S(t) ? F(t) : t.toString();
    }
    return t;
  }
  function ft(t) {
    function e(t, e, n) {
      return t[e] || (t[e] = n());
    }
    var n = r('$injector'), i = r('ng');
    return t = e(t, 'angular', Object), t.$$minErr = t.$$minErr || r, e(t, 'module', function () {
      var t = {};
      return function (r, o, a) {
        var s = {};
        if ('hasOwnProperty' === r)
          throw i('badname', 'module');
        return o && t.hasOwnProperty(r) && (t[r] = null), e(t, r, function () {
          function t(t, e, n, r) {
            return r || (r = u), function () {
              return r[n || 'push']([
                t,
                e,
                arguments
              ]), h;
            };
          }
          function e(t, e, n) {
            return n || (n = u), function (i, o) {
              return o && k(o) && (o.$$moduleName = r), n.push([
                t,
                e,
                arguments
              ]), h;
            };
          }
          if (!o)
            throw n('nomod', r);
          var u = [], c = [], l = [], f = t('$injector', 'invoke', 'push', c), h = {
              _invokeQueue: u,
              _configBlocks: c,
              _runBlocks: l,
              info: function (t) {
                if (y(t)) {
                  if (!b(t))
                    throw i('aobj', 'value');
                  return s = t, this;
                }
                return s;
              },
              requires: o,
              name: r,
              provider: e('$provide', 'provider'),
              factory: e('$provide', 'factory'),
              service: e('$provide', 'service'),
              value: t('$provide', 'value'),
              constant: t('$provide', 'constant', 'unshift'),
              decorator: e('$provide', 'decorator', c),
              animation: e('$animateProvider', 'register'),
              filter: e('$filterProvider', 'register'),
              controller: e('$controllerProvider', 'register'),
              directive: e('$compileProvider', 'directive'),
              component: e('$compileProvider', 'component'),
              config: f,
              run: function (t) {
                return l.push(t), this;
              }
            };
          return a && f(a), h;
        });
      };
    });
  }
  function ht(t, e) {
    if (wr(t)) {
      e = e || [];
      for (var n = 0, r = t.length; n < r; n++)
        e[n] = t[n];
    } else if (b(t))
      for (n in e = e || {}, t)
        '$' === n.charAt(0) && '$' === n.charAt(1) || (e[n] = t[n]);
    return e || t;
  }
  function pt(t, e) {
    var r = [];
    return n(e) && (t = gr.copy(t, null, e)), JSON.stringify(t, function (t, e) {
      if (e = q(t, e), b(e)) {
        if (0 <= r.indexOf(e))
          return '...';
        r.push(e);
      }
      return e;
    });
  }
  function $t(t, e) {
    return e.toUpperCase();
  }
  function dt(t) {
    return t.replace(Pr, $t);
  }
  function mt(t) {
    return 1 === (t = t.nodeType) || !t || 9 === t;
  }
  function vt(t, e) {
    var n, r, i = e.createDocumentFragment(), a = [];
    if (qr.test(t)) {
      for (n = i.appendChild(e.createElement('div')), r = (Fr.exec(t) || [
          '',
          ''
        ])[1].toLowerCase(), r = Hr[r] || Hr._default, n.innerHTML = r[1] + t.replace(Br, '<$1></$2>') + r[2], r = r[0]; r--;)
        n = n.lastChild;
      a = _(a, n.childNodes), n = i.firstChild, n.textContent = '';
    } else
      a.push(e.createTextNode(t));
    return i.textContent = '', i.innerHTML = '', o(a, function (t) {
      i.appendChild(t);
    }), i;
  }
  function gt(e) {
    if (e instanceof gt)
      return e;
    var n;
    if (x(e) && (e = Cr(e), n = !0), !(this instanceof gt)) {
      if (n && '<' !== e.charAt(0))
        throw _r('nosel');
      return new gt(e);
    }
    if (n) {
      n = t.document;
      var r;
      e = (r = Lr.exec(e)) ? [n.createElement(r[1])] : (r = vt(e, n)) ? r.childNodes : [], Ot(this, e);
    } else
      k(e) ? jt(e) : Ot(this, e);
  }
  function yt(t) {
    return t.cloneNode(!0);
  }
  function bt(t, e) {
    !e && mt(t) && ir.cleanData([t]), t.querySelectorAll && ir.cleanData(t.querySelectorAll('*'));
  }
  function wt(t, e, n, r) {
    if (y(r))
      throw _r('offargs');
    var i = (r = Ct(t)) && r.events, a = r && r.handle;
    if (a)
      if (e) {
        var s = function (e) {
          var r = i[e];
          y(n) && D(r || [], n), y(n) && r && 0 < r.length || (t.removeEventListener(e, a), delete i[e]);
        };
        o(e.split(' '), function (t) {
          s(t), Ur[t] && s(Ur[t]);
        });
      } else
        for (e in i)
          '$destroy' !== e && t.removeEventListener(e, a), delete i[e];
  }
  function xt(t, e) {
    var n = t.ng339, r = n && jr[n];
    r && (e ? delete r.data[e] : (r.handle && (r.events.$destroy && r.handle({}, '$destroy'), wt(t)), delete jr[n], t.ng339 = void 0));
  }
  function Ct(t, e) {
    var n = t.ng339, n = n && jr[n];
    return e && !n && (t.ng339 = n = ++Dr, n = jr[n] = {
      events: {},
      data: {},
      handle: void 0
    }), n;
  }
  function St(t, e, n) {
    if (mt(t)) {
      var r, i = y(n), o = !i && e && !b(e), a = !e;
      if (t = (t = Ct(t, !o)) && t.data, i)
        t[dt(e)] = n;
      else {
        if (a)
          return t;
        if (o)
          return t && t[dt(e)];
        for (r in e)
          t[dt(r)] = e[r];
      }
    }
  }
  function Et(t, e) {
    return !!t.getAttribute && -1 < (' ' + (t.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + e + ' ');
  }
  function kt(t, e) {
    e && t.setAttribute && o(e.split(' '), function (e) {
      t.setAttribute('class', Cr((' ' + (t.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').replace(' ' + Cr(e) + ' ', ' ')));
    });
  }
  function At(t, e) {
    if (e && t.setAttribute) {
      var n = (' ' + (t.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ');
      o(e.split(' '), function (t) {
        t = Cr(t), -1 === n.indexOf(' ' + t + ' ') && (n += t + ' ');
      }), t.setAttribute('class', Cr(n));
    }
  }
  function Ot(t, e) {
    if (e)
      if (e.nodeType)
        t[t.length++] = e;
      else {
        var n = e.length;
        if ('number' == typeof n && e.window !== e) {
          if (n)
            for (var r = 0; r < n; r++)
              t[t.length++] = e[r];
        } else
          t[t.length++] = e;
      }
  }
  function Mt(t, e) {
    return Vt(t, '$' + (e || 'ngController') + 'Controller');
  }
  function Vt(t, e, n) {
    for (9 === t.nodeType && (t = t.documentElement), e = wr(e) ? e : [e]; t;) {
      for (var r = 0, i = e.length; r < i; r++)
        if (y(n = ir.data(t, e[r])))
          return n;
      t = t.parentNode || 11 === t.nodeType && t.host;
    }
  }
  function Tt(t) {
    for (bt(t, !0); t.firstChild;)
      t.removeChild(t.firstChild);
  }
  function Nt(t, e) {
    e || bt(t);
    var n = t.parentNode;
    n && n.removeChild(t);
  }
  function It(e, n) {
    n = n || t, 'complete' === n.document.readyState ? n.setTimeout(e) : ir(n).on('load', e);
  }
  function jt(e) {
    function n() {
      t.document.removeEventListener('DOMContentLoaded', n), t.removeEventListener('load', n), e();
    }
    'complete' === t.document.readyState ? t.setTimeout(e) : (t.document.addEventListener('DOMContentLoaded', n), t.addEventListener('load', n));
  }
  function Dt(t, e) {
    var n = Gr[e.toLowerCase()];
    return n && Kr[j(t)] && n;
  }
  function Pt(t, e) {
    var n = function (n, r) {
      n.isDefaultPrevented = function () {
        return n.defaultPrevented;
      };
      var i = e[r || n.type], o = i ? i.length : 0;
      if (o) {
        if (g(n.immediatePropagationStopped)) {
          var a = n.stopImmediatePropagation;
          n.stopImmediatePropagation = function () {
            n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n);
          };
        }
        n.isImmediatePropagationStopped = function () {
          return !0 === n.immediatePropagationStopped;
        };
        var s = i.specialHandlerWrapper || Rt;
        1 < o && (i = ht(i));
        for (var u = 0; u < o; u++)
          n.isImmediatePropagationStopped() || s(t, n, i[u]);
      }
    };
    return n.elem = t, n;
  }
  function Rt(t, e, n) {
    n.call(t, e);
  }
  function Ut(t, e, n) {
    var r = e.relatedTarget;
    r && (r === t || zr.call(t, r)) || n.call(t, e);
  }
  function _t() {
    this.$get = function () {
      return l(gt, {
        hasClass: function (t, e) {
          return t.attr && (t = t[0]), Et(t, e);
        },
        addClass: function (t, e) {
          return t.attr && (t = t[0]), At(t, e);
        },
        removeClass: function (t, e) {
          return t.attr && (t = t[0]), kt(t, e);
        }
      });
    };
  }
  function Lt(t, e) {
    var n = t && t.$$hashKey;
    return n ? ('function' == typeof n && (n = t.$$hashKey()), n) : (n = typeof t, n = 'function' === n || 'object' === n && null !== t ? t.$$hashKey = n + ':' + (e || u)() : n + ':' + t);
  }
  function qt() {
    this._keys = [], this._values = [], this._lastKey = NaN, this._lastIndex = -1;
  }
  function Ft(t) {
    return t = Function.prototype.toString.call(t).replace(ri, ''), t.match(Xr) || t.match(ti);
  }
  function Bt(t) {
    return (t = Ft(t)) ? 'function(' + (t[1] || '').replace(/[\s\r\n]+/, ' ') + ')' : 'fn';
  }
  function Ht(t, e) {
    function n(t) {
      return function (e, n) {
        if (!b(e))
          return t(e, n);
        o(e, s(t));
      };
    }
    function r(t, e) {
      if (at(t, 'service'), (k(e) || wr(e)) && (e = $.instantiate(e)), !e.$get)
        throw ii('pget', t);
      return p[t + 'Provider'] = e;
    }
    function i(t, e) {
      return function () {
        var n = y.invoke(e, this);
        if (g(n))
          throw ii('undef', t);
        return n;
      };
    }
    function a(t, e, n) {
      return r(t, { $get: !1 !== n ? i(t, e) : e });
    }
    function u(t) {
      it(g(t) || wr(t), 'modulesToLoad', 'not an array');
      var e, n = [];
      return o(t, function (t) {
        function r(t) {
          var e, n;
          for (e = 0, n = t.length; e < n; e++) {
            var r = t[e], i = $.get(r[0]);
            i[r[1]].apply(i, r[2]);
          }
        }
        if (!h.get(t)) {
          h.set(t, !0);
          try {
            x(t) ? (e = ar(t), y.modules[t] = e, n = n.concat(u(e.requires)).concat(e._runBlocks), r(e._invokeQueue), r(e._configBlocks)) : k(t) ? n.push($.invoke(t)) : wr(t) ? n.push($.invoke(t)) : ot(t, 'module');
          } catch (e) {
            throw wr(t) && (t = t[t.length - 1]), e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + '\n' + e.stack), ii('modulerr', t, e.stack || e.message || e);
          }
        }
      }), n;
    }
    function c(t, n) {
      function r(e, r) {
        if (t.hasOwnProperty(e)) {
          if (t[e] === l)
            throw ii('cdep', e + ' <- ' + f.join(' <- '));
          return t[e];
        }
        try {
          return f.unshift(e), t[e] = l, t[e] = n(e, r), t[e];
        } catch (n) {
          throw t[e] === l && delete t[e], n;
        } finally {
          f.shift();
        }
      }
      function i(t, n, i) {
        var o = [];
        t = Ht.$$annotate(t, e, i);
        for (var a = 0, s = t.length; a < s; a++) {
          var u = t[a];
          if ('string' != typeof u)
            throw ii('itkn', u);
          o.push(n && n.hasOwnProperty(u) ? n[u] : r(u, i));
        }
        return o;
      }
      return {
        invoke: function (t, e, n, r) {
          if ('string' == typeof n && (r = n, n = null), n = i(t, n, r), wr(t) && (t = t[t.length - 1]), r = t, rr || 'function' != typeof r)
            r = !1;
          else {
            var o = r.$$ngIsClass;
            V(o) || (o = r.$$ngIsClass = /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(r))), r = o;
          }
          return r ? (n.unshift(null), new (Function.prototype.bind.apply(t, n))()) : t.apply(e, n);
        },
        instantiate: function (t, e, n) {
          var r = wr(t) ? t[t.length - 1] : t;
          return t = i(t, e, n), t.unshift(null), new (Function.prototype.bind.apply(r, t))();
        },
        get: r,
        annotate: Ht.$$annotate,
        has: function (e) {
          return p.hasOwnProperty(e + 'Provider') || t.hasOwnProperty(e);
        }
      };
    }
    e = !0 === e;
    var l = {}, f = [], h = new Yr(), p = {
        $provide: {
          provider: n(r),
          factory: n(a),
          service: n(function (t, e) {
            return a(t, [
              '$injector',
              function (t) {
                return t.instantiate(e);
              }
            ]);
          }),
          value: n(function (t, e) {
            return a(t, m(e), !1);
          }),
          constant: n(function (t, e) {
            at(t, 'constant'), p[t] = e, d[t] = e;
          }),
          decorator: function (t, e) {
            var n = $.get(t + 'Provider'), r = n.$get;
            n.$get = function () {
              var t = y.invoke(r, n);
              return y.invoke(e, null, { $delegate: t });
            };
          }
        }
      }, $ = p.$injector = c(p, function (t, e) {
        throw gr.isString(e) && f.push(e), ii('unpr', f.join(' <- '));
      }), d = {}, v = c(d, function (t, e) {
        var n = $.get(t + 'Provider', e);
        return y.invoke(n.$get, n, void 0, t);
      }), y = v;
    p.$injectorProvider = { $get: m(v) }, y.modules = $.modules = ct();
    var w = u(t), y = v.get('$injector');
    return y.strictDi = e, o(w, function (t) {
      t && y.invoke(t);
    }), y;
  }
  function zt() {
    var t = !0;
    this.disableAutoScrolling = function () {
      t = !1;
    }, this.$get = [
      '$window',
      '$location',
      '$rootScope',
      function (e, n, r) {
        function i(t) {
          var e = null;
          return Array.prototype.some.call(t, function (t) {
            if ('a' === j(t))
              return e = t, !0;
          }), e;
        }
        function o(t) {
          if (t) {
            t.scrollIntoView();
            var n;
            n = a.yOffset, k(n) ? n = n() : N(n) ? (n = n[0], n = 'fixed' !== e.getComputedStyle(n).position ? 0 : n.getBoundingClientRect().bottom) : C(n) || (n = 0), n && (t = t.getBoundingClientRect().top, e.scrollBy(0, t - n));
          } else
            e.scrollTo(0, 0);
        }
        function a(t) {
          t = x(t) ? t : C(t) ? t.toString() : n.hash();
          var e;
          t ? (e = s.getElementById(t)) ? o(e) : (e = i(s.getElementsByName(t))) ? o(e) : 'top' === t && o(null) : o(null);
        }
        var s = e.document;
        return t && r.$watch(function () {
          return n.hash();
        }, function (t, e) {
          t === e && '' === t || It(function () {
            r.$evalAsync(a);
          });
        }), a;
      }
    ];
  }
  function Wt(t, e) {
    return t || e ? t ? e ? (wr(t) && (t = t.join(' ')), wr(e) && (e = e.join(' ')), t + ' ' + e) : t : e : '';
  }
  function Gt(t) {
    x(t) && (t = t.split(' '));
    var e = ct();
    return o(t, function (t) {
      t.length && (e[t] = !0);
    }), e;
  }
  function Kt(t) {
    return b(t) ? t : {};
  }
  function Jt(t, e, n, r) {
    function i(t) {
      try {
        t.apply(null, hr.call(arguments, 1));
      } finally {
        if (0 === --m)
          for (; v.length;)
            try {
              v.pop()();
            } catch (t) {
              n.error(t);
            }
      }
    }
    function a() {
      C = null, u();
    }
    function s() {
      y = S(), y = g(y) ? null : y, U(y, A) && (y = A), b = A = y;
    }
    function u() {
      var t = b;
      s(), w === c.url() && t === y || (w = c.url(), b = y, o(E, function (t) {
        t(c.url(), y);
      }));
    }
    var c = this, l = t.location, f = t.history, h = t.setTimeout, p = t.clearTimeout, d = {};
    c.isMock = !1;
    var m = 0, v = [];
    c.$$completeOutstandingRequest = i, c.$$incOutstandingRequestCount = function () {
      m++;
    }, c.notifyWhenNoOutstandingRequests = function (t) {
      0 === m ? t() : v.push(t);
    };
    var y, b, w = l.href, x = e.find('base'), C = null, S = r.history ? function () {
        try {
          return f.state;
        } catch (t) {
        }
      } : $;
    s(), c.url = function (e, n, i) {
      if (g(i) && (i = null), l !== t.location && (l = t.location), f !== t.history && (f = t.history), e) {
        var o = b === i;
        if (w === e && (!r.history || o))
          return c;
        var a = w && Ae(w) === Ae(e);
        return w = e, b = i, !r.history || a && o ? (a || (C = e), n ? l.replace(e) : a ? (n = l, i = e.indexOf('#'), i = -1 === i ? '' : e.substr(i), n.hash = i) : l.href = e, l.href !== e && (C = e)) : (f[n ? 'replaceState' : 'pushState'](i, '', e), s()), C && (C = e), c;
      }
      return C || l.href.replace(/%27/g, '\'');
    }, c.state = function () {
      return y;
    };
    var E = [], k = !1, A = null;
    c.onUrlChange = function (e) {
      return k || (r.history && ir(t).on('popstate', a), ir(t).on('hashchange', a), k = !0), E.push(e), e;
    }, c.$$applicationDestroyed = function () {
      ir(t).off('hashchange popstate', a);
    }, c.$$checkUrlChange = u, c.baseHref = function () {
      var t = x.attr('href');
      return t ? t.replace(/^(https?:)?\/\/[^\/]*/, '') : '';
    }, c.defer = function (t, e) {
      var n;
      return m++, n = h(function () {
        delete d[n], i(t);
      }, e || 0), d[n] = !0, n;
    }, c.defer.cancel = function (t) {
      return !!d[t] && (delete d[t], p(t), i($), !0);
    };
  }
  function Zt() {
    this.$get = [
      '$window',
      '$log',
      '$sniffer',
      '$document',
      function (t, e, n, r) {
        return new Jt(t, r, e, n);
      }
    ];
  }
  function Yt() {
    this.$get = function () {
      function t(t, n) {
        function i(t) {
          t !== h && (p ? p === t && (p = t.n) : p = t, o(t.n, t.p), o(t, h), h = t, h.n = null);
        }
        function o(t, e) {
          t !== e && (t && (t.p = e), e && (e.n = t));
        }
        if (t in e)
          throw r('$cacheFactory')('iid', t);
        var a = 0, s = l({}, n, { id: t }), u = ct(), c = n && n.capacity || Number.MAX_VALUE, f = ct(), h = null, p = null;
        return e[t] = {
          put: function (t, e) {
            if (!g(e)) {
              if (c < Number.MAX_VALUE) {
                i(f[t] || (f[t] = { key: t }));
              }
              return t in u || a++, u[t] = e, a > c && this.remove(p.key), e;
            }
          },
          get: function (t) {
            if (c < Number.MAX_VALUE) {
              var e = f[t];
              if (!e)
                return;
              i(e);
            }
            return u[t];
          },
          remove: function (t) {
            if (c < Number.MAX_VALUE) {
              var e = f[t];
              if (!e)
                return;
              e === h && (h = e.p), e === p && (p = e.n), o(e.n, e.p), delete f[t];
            }
            t in u && (delete u[t], a--);
          },
          removeAll: function () {
            u = ct(), a = 0, f = ct(), h = p = null;
          },
          destroy: function () {
            f = s = u = null, delete e[t];
          },
          info: function () {
            return l({}, s, { size: a });
          }
        };
      }
      var e = {};
      return t.info = function () {
        var t = {};
        return o(e, function (e, n) {
          t[n] = e.info();
        }), t;
      }, t.get = function (t) {
        return e[t];
      }, t;
    };
  }
  function Qt() {
    this.$get = [
      '$cacheFactory',
      function (t) {
        return t('templates');
      }
    ];
  }
  function Xt(e, n) {
    function r(t, e, n) {
      var r = /^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/, i = ct();
      return o(t, function (t, o) {
        if (t in C)
          i[o] = C[t];
        else {
          var a = t.match(r);
          if (!a)
            throw hi('iscp', e, o, t, n ? 'controller bindings definition' : 'isolate scope definition');
          i[o] = {
            mode: a[1][0],
            collection: '*' === a[2],
            optional: '?' === a[3],
            attrName: a[4] || o
          }, a[4] && (C[t] = i[o]);
        }
      }), i;
    }
    function i(t) {
      var e = t.charAt(0);
      if (!e || e !== lr(e))
        throw hi('baddir', t);
      if (t !== t.trim())
        throw hi('baddir', t);
    }
    function a(t) {
      var e = t.require || t.controller && t.name;
      return !wr(e) && b(e) && o(e, function (t, n) {
        var r = t.match(v);
        t.substring(r[0].length) || (e[n] = r[0] + n);
      }), e;
    }
    var u = {}, c = /^\s*directive:\s*([\w-]+)\s+(.*)$/, f = /(([\w-]+)(?::([^;]+))?;?)/, h = I('ngSrc,ngSrcset,src,srcset'), v = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, w = /^(on[a-z]+|formaction)$/, C = ct();
    this.directive = function t(n, r) {
      return it(n, 'name'), at(n, 'directive'), x(n) ? (i(n), it(r, 'directiveFactory'), u.hasOwnProperty(n) || (u[n] = [], e.factory(n + 'Directive', [
        '$injector',
        '$exceptionHandler',
        function (t, e) {
          var r = [];
          return o(u[n], function (i, o) {
            try {
              var s = t.invoke(i);
              k(s) ? s = { compile: m(s) } : !s.compile && s.link && (s.compile = m(s.link)), s.priority = s.priority || 0, s.index = o, s.name = s.name || n, s.require = a(s);
              var u = s, c = s.restrict;
              if (c && (!x(c) || !/[EACM]/.test(c)))
                throw hi('badrestrict', c, n);
              u.restrict = c || 'EA', s.$$moduleName = i.$$moduleName, r.push(s);
            } catch (t) {
              e(t);
            }
          }), r;
        }
      ])), u[n].push(r)) : o(n, s(t)), this;
    }, this.component = function t(e, n) {
      function r(t) {
        function e(e) {
          return k(e) || wr(e) ? function (n, r) {
            return t.invoke(e, this, {
              $element: n,
              $attrs: r
            });
          } : e;
        }
        var r = n.template || n.templateUrl ? n.template : '', a = {
            controller: i,
            controllerAs: ie(n.controller) || n.controllerAs || '$ctrl',
            template: e(r),
            templateUrl: e(n.templateUrl),
            transclude: n.transclude,
            scope: {},
            bindToController: n.bindings || {},
            restrict: 'E',
            require: n.require
          };
        return o(n, function (t, e) {
          '$' === e.charAt(0) && (a[e] = t);
        }), a;
      }
      if (!x(e))
        return o(e, s(L(this, t))), this;
      var i = n.controller || function () {
      };
      return o(n, function (t, e) {
        '$' === e.charAt(0) && (r[e] = t, k(i) && (i[e] = t));
      }), r.$inject = ['$injector'], this.directive(e, r);
    }, this.aHrefSanitizationWhitelist = function (t) {
      return y(t) ? (n.aHrefSanitizationWhitelist(t), this) : n.aHrefSanitizationWhitelist();
    }, this.imgSrcSanitizationWhitelist = function (t) {
      return y(t) ? (n.imgSrcSanitizationWhitelist(t), this) : n.imgSrcSanitizationWhitelist();
    };
    var S = !0;
    this.debugInfoEnabled = function (t) {
      return y(t) ? (S = t, this) : S;
    };
    var A = !1;
    this.preAssignBindingsEnabled = function (t) {
      return y(t) ? (A = t, this) : A;
    };
    var O = 10;
    this.onChangesTtl = function (t) {
      return arguments.length ? (O = t, this) : O;
    };
    var T = !0;
    this.commentDirectivesEnabled = function (t) {
      return arguments.length ? (T = t, this) : T;
    };
    var N = !0;
    this.cssClassDirectivesEnabled = function (t) {
      return arguments.length ? (N = t, this) : N;
    }, this.$get = [
      '$injector',
      '$interpolate',
      '$exceptionHandler',
      '$templateRequest',
      '$parse',
      '$controller',
      '$rootScope',
      '$sce',
      '$animate',
      '$$sanitizeUri',
      function (e, n, i, a, s, m, C, I, P, _) {
        function q() {
          try {
            if (!--Ot)
              throw Ct = void 0, hi('infchng', O);
            C.$apply(function () {
              for (var t = [], e = 0, n = Ct.length; e < n; ++e)
                try {
                  Ct[e]();
                } catch (e) {
                  t.push(e);
                }
              if (Ct = void 0, t.length)
                throw t;
            });
          } finally {
            Ot++;
          }
        }
        function F(t, e) {
          if (e) {
            var n, r, i, o = Object.keys(e);
            for (n = 0, r = o.length; n < r; n++)
              i = o[n], this[i] = e[i];
          } else
            this.$attr = {};
          this.$$element = t;
        }
        function B(t, e, n) {
          Et.innerHTML = '<span ' + e + '>', e = Et.firstChild.attributes;
          var r = e[0];
          e.removeNamedItem(r.name), r.value = n, t.attributes.setNamedItem(r);
        }
        function H(t, e) {
          try {
            t.addClass(e);
          } catch (t) {
          }
        }
        function z(t, e, n, r, i) {
          t instanceof ir || (t = ir(t));
          var o = G(t, e, t, n, r, i);
          z.$$addScopeClass(t);
          var a = null;
          return function (e, n, r) {
            if (!t)
              throw hi('multilink');
            it(e, 'scope'), i && i.needsNewScope && (e = e.$parent.$new()), r = r || {};
            var s = r.parentBoundTranscludeFn, u = r.transcludeControllers;
            if (r = r.futureParentElement, s && s.$$boundTransclude && (s = s.$$boundTransclude), a || (a = (r = r && r[0]) && 'foreignobject' !== j(r) && dr.call(r).match(/SVG/) ? 'svg' : 'html'), r = 'html' !== a ? ir(dt(a, ir('<div>').append(t).html())) : n ? Wr.clone.call(t) : t, u)
              for (var c in u)
                r.data('$' + c + 'Controller', u[c].instance);
            return z.$$addScopeInfo(r, e), n && n(r, e), o && o(e, r, r, s), n || (t = o = null), r;
          };
        }
        function G(t, e, n, r, i, o) {
          function a(t, n, r, i) {
            var o, a, s, u, c, l, p;
            if (f)
              for (p = Array(n.length), u = 0; u < h.length; u += 3)
                o = h[u], p[o] = n[o];
            else
              p = n;
            for (u = 0, c = h.length; u < c;)
              a = p[h[u++]], n = h[u++], o = h[u++], n ? (n.scope ? (s = t.$new(), z.$$addScopeInfo(ir(a), s)) : s = t, l = n.transcludeOnThisElement ? J(t, n.transclude, i) : !n.templateOnThisElement && i ? i : !i && e ? J(t, e) : null, n(o, s, a, r, l)) : o && o(t, a.childNodes, void 0, i);
          }
          for (var s, u, c, l, f, h = [], p = wr(t) || t instanceof ir, $ = 0; $ < t.length; $++)
            s = new F(), 11 === rr && K(t, $, p), u = Z(t[$], [], s, 0 === $ ? r : void 0, i), (o = u.length ? et(u, t[$], s, e, n, null, [], [], o) : null) && o.scope && z.$$addScopeClass(s.$$element), s = o && o.terminal || !(c = t[$].childNodes) || !c.length ? null : G(c, o ? (o.transcludeOnThisElement || !o.templateOnThisElement) && o.transclude : e), (o || s) && (h.push($, o, s), l = !0, f = f || o), o = null;
          return l ? a : null;
        }
        function K(t, e, n) {
          var r, i = t[e], o = i.parentNode;
          if (i.nodeType === Nr)
            for (; (r = o ? i.nextSibling : t[e + 1]) && r.nodeType === Nr;)
              i.nodeValue += r.nodeValue, r.parentNode && r.parentNode.removeChild(r), n && r === t[e + 1] && t.splice(e + 1, 1);
        }
        function J(t, e, n) {
          function r(r, i, o, a, s) {
            return r || (r = t.$new(!1, s), r.$$transcluded = !0), e(r, i, {
              parentBoundTranscludeFn: n,
              transcludeControllers: o,
              futureParentElement: a
            });
          }
          var i, o = r.$$slots = ct();
          for (i in e.$$slots)
            o[i] = e.$$slots[i] ? J(t, e.$$slots[i], n) : null;
          return r;
        }
        function Z(t, e, n, r, i) {
          var o, a = n.$attr;
          switch (t.nodeType) {
          case 1:
            o = j(t), st(e, ee(o), 'E', r, i);
            for (var s, u, c, l, h = t.attributes, p = 0, $ = h && h.length; p < $; p++) {
              var d = !1, m = !1;
              s = h[p], u = s.name, c = s.value, s = ee(u), (l = Nt.test(s)) && (u = u.replace($i, '').substr(8).replace(/_(.)/g, function (t, e) {
                return e.toUpperCase();
              })), (s = s.match(It)) && ut(s[1]) && (d = u, m = u.substr(0, u.length - 5) + 'end', u = u.substr(0, u.length - 6)), s = ee(u.toLowerCase()), a[s] = u, !l && n.hasOwnProperty(s) || (n[s] = c, Dt(t, s) && (n[s] = !0)), vt(t, e, c, s, l), st(e, s, 'A', r, i, d, m);
            }
            if ('input' === o && 'hidden' === t.getAttribute('type') && t.setAttribute('autocomplete', 'off'), !At)
              break;
            if (a = t.className, b(a) && (a = a.animVal), x(a) && '' !== a)
              for (; t = f.exec(a);)
                s = ee(t[2]), st(e, s, 'C', r, i) && (n[s] = Cr(t[3])), a = a.substr(t.index + t[0].length);
            break;
          case Nr:
            $t(e, t.nodeValue);
            break;
          case 8:
            if (!kt)
              break;
            Y(t, e, n, r, i);
          }
          return e.sort(ht), e;
        }
        function Y(t, e, n, r, i) {
          try {
            var o = c.exec(t.nodeValue);
            if (o) {
              var a = ee(o[1]);
              st(e, a, 'M', r, i) && (n[a] = Cr(o[2]));
            }
          } catch (t) {
          }
        }
        function Q(t, e, n) {
          var r = [], i = 0;
          if (e && t.hasAttribute && t.hasAttribute(e))
            do {
              if (!t)
                throw hi('uterdir', e, n);
              1 === t.nodeType && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling;
            } while (0 < i);
          else
            r.push(t);
          return ir(r);
        }
        function X(t, e, n) {
          return function (r, i, o, a, s) {
            return i = Q(i[0], e, n), t(r, i, o, a, s);
          };
        }
        function tt(t, e, n, r, i, o) {
          var a;
          return t ? z(e, n, r, i, o) : function () {
            return a || (a = z(e, n, r, i, o), e = n = o = null), a.apply(this, arguments);
          };
        }
        function et(t, e, n, r, a, s, u, c, f) {
          function h(t, e, n, r) {
            t && (n && (t = X(t, n, r)), t.require = $.require, t.directiveName = d, (S === $ || $.$$isolateScope) && (t = bt(t, { isolateScope: !0 })), u.push(t)), e && (n && (e = X(e, n, r)), e.require = $.require, e.directiveName = d, (S === $ || $.$$isolateScope) && (e = bt(e, { isolateScope: !0 })), c.push(e));
          }
          function p(t, r, a, s, f) {
            function h(t, e, n, r) {
              var i;
              if (M(t) || (r = n, n = e, e = t, t = void 0), N && (i = y), n || (n = N ? O.parent() : O), !r)
                return f(t, e, i, n, I);
              var o = f.$$slots[r];
              if (o)
                return o(t, e, i, n, I);
              if (g(o))
                throw hi('noslot', r, W(O));
            }
            var p, $, d, m, v, y, w, O;
            e === a ? (s = n, O = n.$$element) : (O = ir(a), s = new F(O, n)), v = r, S ? m = r.$new(!0) : x && (v = r.$parent), f && (w = h, w.$$boundTransclude = f, w.isSlotFilled = function (t) {
              return !!f.$$slots[t];
            }), C && (y = ot(O, s, w, C, m, r, S)), S && (z.$$addScopeInfo(O, m, !0, !(E && (E === S || E === S.$$originalDirective))), z.$$addScopeClass(O, !0), m.$$isolateBindings = S.$$isolateBindings, $ = xt(r, s, m, m.$$isolateBindings, S), $.removeWatches && m.$on('$destroy', $.removeWatches));
            for (p in y) {
              $ = C[p], d = y[p];
              var V = $.$$bindings.bindToController;
              if (A) {
                d.bindingInfo = V ? xt(v, s, d.instance, V, $) : {};
                var T = d();
                T !== d.instance && (d.instance = T, O.data('$' + $.name + 'Controller', T), d.bindingInfo.removeWatches && d.bindingInfo.removeWatches(), d.bindingInfo = xt(v, s, d.instance, V, $));
              } else
                d.instance = d(), O.data('$' + $.name + 'Controller', d.instance), d.bindingInfo = xt(v, s, d.instance, V, $);
            }
            for (o(C, function (t, e) {
                var n = t.require;
                t.bindToController && !wr(n) && b(n) && l(y[e].instance, nt(e, n, O, y));
              }), o(y, function (t) {
                var e = t.instance;
                if (k(e.$onChanges))
                  try {
                    e.$onChanges(t.bindingInfo.initialChanges);
                  } catch (t) {
                    i(t);
                  }
                if (k(e.$onInit))
                  try {
                    e.$onInit();
                  } catch (t) {
                    i(t);
                  }
                k(e.$doCheck) && (v.$watch(function () {
                  e.$doCheck();
                }), e.$doCheck()), k(e.$onDestroy) && v.$on('$destroy', function () {
                  e.$onDestroy();
                });
              }), p = 0, $ = u.length; p < $; p++)
              d = u[p], wt(d, d.isolateScope ? m : r, O, s, d.require && nt(d.directiveName, d.require, O, y), w);
            var I = r;
            for (S && (S.template || null === S.templateUrl) && (I = m), t && t(I, a.childNodes, void 0, f), p = c.length - 1; 0 <= p; p--)
              d = c[p], wt(d, d.isolateScope ? m : r, O, s, d.require && nt(d.directiveName, d.require, O, y), w);
            o(y, function (t) {
              t = t.instance, k(t.$postLink) && t.$postLink();
            });
          }
          f = f || {};
          for (var $, d, m, v, y, w = -Number.MAX_VALUE, x = f.newScopeDirective, C = f.controllerDirectives, S = f.newIsolateScopeDirective, E = f.templateDirective, O = f.nonTlbTranscludeDirective, V = !1, T = !1, N = f.hasElementTranscludeDirective, I = n.$$element = ir(e), D = r, P = !1, R = !1, U = 0, _ = t.length; U < _; U++) {
            $ = t[U];
            var q = $.$$start, B = $.$$end;
            if (q && (I = Q(e, q, B)), m = void 0, w > $.priority)
              break;
            if ((y = $.scope) && ($.templateUrl || (b(y) ? (pt('new/isolated scope', S || x, $, I), S = $) : pt('new/isolated scope', S, $, I)), x = x || $), d = $.name, !P && ($.replace && ($.templateUrl || $.template) || $.transclude && !$.$$tlb)) {
              for (y = U + 1; P = t[y++];)
                if (P.transclude && !P.$$tlb || P.replace && (P.templateUrl || P.template)) {
                  R = !0;
                  break;
                }
              P = !0;
            }
            if (!$.templateUrl && $.controller && (C = C || ct(), pt('\'' + d + '\' controller', C[d], $, I), C[d] = $), y = $.transclude)
              if (V = !0, $.$$tlb || (pt('transclusion', O, $, I), O = $), 'element' === y)
                N = !0, w = $.priority, m = I, I = n.$$element = ir(z.$$createComment(d, n[d])), e = I[0], gt(a, hr.call(m, 0), e), m[0].$$parentNode = m[0].parentNode, D = tt(R, m, r, w, s && s.name, { nonTlbTranscludeDirective: O });
              else {
                var H = ct();
                if (b(y)) {
                  m = [];
                  var G = ct(), K = ct();
                  o(y, function (t, e) {
                    var n = '?' === t.charAt(0);
                    t = n ? t.substring(1) : t, G[t] = e, H[e] = null, K[e] = n;
                  }), o(I.contents(), function (t) {
                    var e = G[ee(j(t))];
                    e ? (K[e] = !0, H[e] = H[e] || [], H[e].push(t)) : m.push(t);
                  }), o(K, function (t, e) {
                    if (!t)
                      throw hi('reqslot', e);
                  });
                  for (var J in H)
                    H[J] && (H[J] = tt(R, H[J], r));
                } else
                  m = ir(yt(e)).contents();
                I.empty(), D = tt(R, m, r, void 0, void 0, { needsNewScope: $.$$isolateScope || $.$$newScope }), D.$$slots = H;
              }
            if ($.template)
              if (T = !0, pt('template', E, $, I), E = $, y = k($.template) ? $.template(I, n) : $.template, y = Tt(y), $.replace) {
                if (s = $, m = qr.test(y) ? re(dt($.templateNamespace, Cr(y))) : [], e = m[0], 1 !== m.length || 1 !== e.nodeType)
                  throw hi('tplrt', d, '');
                gt(a, I, e), _ = { $attr: {} }, y = Z(e, [], _);
                var Y = t.splice(U + 1, t.length - (U + 1));
                (S || x) && at(y, S, x), t = t.concat(y).concat(Y), lt(n, _), _ = t.length;
              } else
                I.html(y);
            if ($.templateUrl)
              T = !0, pt('template', E, $, I), E = $, $.replace && (s = $), p = ft(t.splice(U, t.length - U), I, n, a, V && D, u, c, {
                controllerDirectives: C,
                newScopeDirective: x !== $ && x,
                newIsolateScopeDirective: S,
                templateDirective: E,
                nonTlbTranscludeDirective: O
              }), _ = t.length;
            else if ($.compile)
              try {
                v = $.compile(I, n, D);
                var et = $.$$originalDirective || $;
                k(v) ? h(null, L(et, v), q, B) : v && h(L(et, v.pre), L(et, v.post), q, B);
              } catch (t) {
                i(t, W(I));
              }
            $.terminal && (p.terminal = !0, w = Math.max(w, $.priority));
          }
          return p.scope = x && !0 === x.scope, p.transcludeOnThisElement = V, p.templateOnThisElement = T, p.transclude = D, f.hasElementTranscludeDirective = N, p;
        }
        function nt(t, e, n, r) {
          var i;
          if (x(e)) {
            var a = e.match(v);
            e = e.substring(a[0].length);
            var s = a[1] || a[3], a = '?' === a[2];
            if ('^^' === s ? n = n.parent() : i = (i = r && r[e]) && i.instance, !i) {
              var u = '$' + e + 'Controller';
              i = s ? n.inheritedData(u) : n.data(u);
            }
            if (!i && !a)
              throw hi('ctreq', e, t);
          } else if (wr(e))
            for (i = [], s = 0, a = e.length; s < a; s++)
              i[s] = nt(t, e[s], n, r);
          else
            b(e) && (i = {}, o(e, function (e, o) {
              i[o] = nt(t, e, n, r);
            }));
          return i || null;
        }
        function ot(t, e, n, r, i, o, a) {
          var s, u = ct();
          for (s in r) {
            var c = r[s], l = {
                $scope: c === a || c.$$isolateScope ? i : o,
                $element: t,
                $attrs: e,
                $transclude: n
              }, f = c.controller;
            '@' === f && (f = e[c.name]), l = m(f, l, !0, c.controllerAs), u[c.name] = l, t.data('$' + c.name + 'Controller', l.instance);
          }
          return u;
        }
        function at(t, e, n) {
          for (var r = 0, i = t.length; r < i; r++)
            t[r] = p(t[r], {
              $$isolateScope: e,
              $$newScope: n
            });
        }
        function st(t, n, i, o, a, s, c) {
          if (n === a)
            return null;
          var l = null;
          if (u.hasOwnProperty(n)) {
            a = e.get(n + 'Directive');
            for (var f = 0, h = a.length; f < h; f++)
              if (n = a[f], (g(o) || o > n.priority) && -1 !== n.restrict.indexOf(i)) {
                if (s && (n = p(n, {
                    $$start: s,
                    $$end: c
                  })), !n.$$bindings) {
                  var $ = l = n, d = n.name, m = {
                      isolateScope: null,
                      bindToController: null
                    };
                  if (b($.scope) && (!0 === $.bindToController ? (m.bindToController = r($.scope, d, !0), m.isolateScope = {}) : m.isolateScope = r($.scope, d, !1)), b($.bindToController) && (m.bindToController = r($.bindToController, d, !0)), m.bindToController && !$.controller)
                    throw hi('noctrl', d);
                  l = l.$$bindings = m, b(l.isolateScope) && (n.$$isolateBindings = l.isolateScope);
                }
                t.push(n), l = n;
              }
          }
          return l;
        }
        function ut(t) {
          if (u.hasOwnProperty(t))
            for (var n = e.get(t + 'Directive'), r = 0, i = n.length; r < i; r++)
              if (t = n[r], t.multiElement)
                return !0;
          return !1;
        }
        function lt(t, e) {
          var n = e.$attr, r = t.$attr;
          o(t, function (r, i) {
            '$' !== i.charAt(0) && (e[i] && e[i] !== r && (r = r.length ? r + ('style' === i ? ';' : ' ') + e[i] : e[i]), t.$set(i, r, !0, n[i]));
          }), o(e, function (e, i) {
            t.hasOwnProperty(i) || '$' === i.charAt(0) || (t[i] = e, 'class' !== i && 'style' !== i && (r[i] = n[i]));
          });
        }
        function ft(t, e, n, r, s, u, c, l) {
          var f, h, $ = [], d = e[0], m = t.shift(), v = p(m, {
              templateUrl: null,
              transclude: null,
              replace: null,
              $$originalDirective: m
            }), g = k(m.templateUrl) ? m.templateUrl(e, n) : m.templateUrl, y = m.templateNamespace;
          return e.empty(), a(g).then(function (i) {
            var a, p;
            if (i = Tt(i), m.replace) {
              if (i = qr.test(i) ? re(dt(y, Cr(i))) : [], a = i[0], 1 !== i.length || 1 !== a.nodeType)
                throw hi('tplrt', m.name, g);
              i = { $attr: {} }, gt(r, e, a);
              var w = Z(a, [], i);
              b(m.scope) && at(w, !0), t = w.concat(t), lt(n, i);
            } else
              a = d, e.html(i);
            for (t.unshift(v), f = et(t, a, n, s, e, m, u, c, l), o(r, function (t, n) {
                t === a && (r[n] = e[0]);
              }), h = G(e[0].childNodes, s); $.length;) {
              i = $.shift(), p = $.shift();
              var x = $.shift(), C = $.shift(), w = e[0];
              if (!i.$$destroyed) {
                if (p !== d) {
                  var S = p.className;
                  l.hasElementTranscludeDirective && m.replace || (w = yt(a)), gt(x, ir(p), w), H(ir(w), S);
                }
                p = f.transcludeOnThisElement ? J(i, f.transclude, C) : C, f(h, i, w, r, p);
              }
            }
            $ = null;
          }).catch(function (t) {
            E(t) && i(t);
          }), function (t, e, n, r, i) {
            t = i, e.$$destroyed || ($ ? $.push(e, n, r, t) : (f.transcludeOnThisElement && (t = J(e, f.transclude, i)), f(h, e, n, r, t)));
          };
        }
        function ht(t, e) {
          var n = e.priority - t.priority;
          return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index;
        }
        function pt(t, e, n, r) {
          function i(t) {
            return t ? ' (module: ' + t + ')' : '';
          }
          if (e)
            throw hi('multidir', e.name, i(e.$$moduleName), n.name, i(n.$$moduleName), t, W(r));
        }
        function $t(t, e) {
          var r = n(e, !0);
          r && t.push({
            priority: 0,
            compile: function (t) {
              t = t.parent();
              var e = !!t.length;
              return e && z.$$addBindingClass(t), function (t, n) {
                var i = n.parent();
                e || z.$$addBindingClass(i), z.$$addBindingInfo(i, r.expressions), t.$watch(r, function (t) {
                  n[0].nodeValue = t;
                });
              };
            }
          });
        }
        function dt(e, n) {
          switch (e = lr(e || 'html')) {
          case 'svg':
          case 'math':
            var r = t.document.createElement('div');
            return r.innerHTML = '<' + e + '>' + n + '</' + e + '>', r.childNodes[0].childNodes;
          default:
            return n;
          }
        }
        function mt(t, e) {
          if ('srcdoc' === e)
            return I.HTML;
          var n = j(t);
          if ('src' === e || 'ngSrc' === e) {
            if (-1 === [
                'img',
                'video',
                'audio',
                'source',
                'track'
              ].indexOf(n))
              return I.RESOURCE_URL;
          } else if ('xlinkHref' === e || 'form' === n && 'action' === e || 'link' === n && 'href' === e)
            return I.RESOURCE_URL;
        }
        function vt(t, e, r, i, o) {
          var a = mt(t, i), s = h[i] || o, u = n(r, !o, a, s);
          if (u) {
            if ('multiple' === i && 'select' === j(t))
              throw hi('selmulti', W(t));
            if (w.test(i))
              throw hi('nodomevents');
            e.push({
              priority: 100,
              compile: function () {
                return {
                  pre: function (t, e, o) {
                    e = o.$$observers || (o.$$observers = ct());
                    var c = o[i];
                    c !== r && (u = c && n(c, !0, a, s), r = c), u && (o[i] = u(t), (e[i] || (e[i] = [])).$$inter = !0, (o.$$observers && o.$$observers[i].$$scope || t).$watch(u, function (t, e) {
                      'class' === i && t !== e ? o.$updateClass(t, e) : o.$set(i, t);
                    }));
                  }
                };
              }
            });
          }
        }
        function gt(e, n, r) {
          var i, o, a = n[0], s = n.length, u = a.parentNode;
          if (e)
            for (i = 0, o = e.length; i < o; i++)
              if (e[i] === a) {
                e[i++] = r, o = i + s - 1;
                for (var c = e.length; i < c; i++, o++)
                  o < c ? e[i] = e[o] : delete e[i];
                e.length -= s - 1, e.context === a && (e.context = r);
                break;
              }
          for (u && u.replaceChild(r, a), e = t.document.createDocumentFragment(), i = 0; i < s; i++)
            e.appendChild(n[i]);
          for (ir.hasData(a) && (ir.data(r, ir.data(a)), ir(a).off('$destroy')), ir.cleanData(e.querySelectorAll('*')), i = 1; i < s; i++)
            delete n[i];
          n[0] = r, n.length = 1;
        }
        function bt(t, e) {
          return l(function () {
            return t.apply(null, arguments);
          }, t, e);
        }
        function wt(t, e, n, r, o, a) {
          try {
            t(e, n, r, o, a);
          } catch (t) {
            i(t, W(n));
          }
        }
        function xt(t, e, r, i, a) {
          function u(e, n, i) {
            k(r.$onChanges) && !R(n, i) && (Ct || (t.$$postDigest(q), Ct = []), l || (l = {}, Ct.push(c)), l[e] && (i = l[e].previousValue), l[e] = new te(i, n));
          }
          function c() {
            r.$onChanges(l), l = void 0;
          }
          var l, f = [], h = {};
          return o(i, function (i, o) {
            var c, l, p, d, m = i.attrName, v = i.optional;
            switch (i.mode) {
            case '@':
              v || cr.call(e, m) || (r[o] = e[m] = void 0), v = e.$observe(m, function (t) {
                (x(t) || V(t)) && (u(o, t, r[o]), r[o] = t);
              }), e.$$observers[m].$$scope = t, c = e[m], x(c) ? r[o] = n(c)(t) : V(c) && (r[o] = c), h[o] = new te(pi, r[o]), f.push(v);
              break;
            case '=':
              if (!cr.call(e, m)) {
                if (v)
                  break;
                e[m] = void 0;
              }
              if (v && !e[m])
                break;
              l = s(e[m]), d = l.literal ? U : R, p = l.assign || function () {
                throw c = r[o] = l(t), hi('nonassign', e[m], m, a.name);
              }, c = r[o] = l(t), v = function (e) {
                return d(e, r[o]) || (d(e, c) ? p(t, e = r[o]) : r[o] = e), c = e;
              }, v.$stateful = !0, v = i.collection ? t.$watchCollection(e[m], v) : t.$watch(s(e[m], v), null, l.literal), f.push(v);
              break;
            case '<':
              if (!cr.call(e, m)) {
                if (v)
                  break;
                e[m] = void 0;
              }
              if (v && !e[m])
                break;
              l = s(e[m]);
              var g = l.literal, y = r[o] = l(t);
              h[o] = new te(pi, r[o]), v = t.$watch(l, function (t, e) {
                if (e === t) {
                  if (e === y || g && U(e, y))
                    return;
                  e = y;
                }
                u(o, t, e), r[o] = t;
              }, g), f.push(v);
              break;
            case '&':
              if ((l = e.hasOwnProperty(m) ? s(e[m]) : $) === $ && v)
                break;
              r[o] = function (e) {
                return l(t, e);
              };
            }
          }), {
            initialChanges: h,
            removeWatches: f.length && function () {
              for (var t = 0, e = f.length; t < e; ++t)
                f[t]();
            }
          };
        }
        var Ct, St = /^\w/, Et = t.document.createElement('div'), kt = T, At = N, Ot = O;
        F.prototype = {
          $normalize: ee,
          $addClass: function (t) {
            t && 0 < t.length && P.addClass(this.$$element, t);
          },
          $removeClass: function (t) {
            t && 0 < t.length && P.removeClass(this.$$element, t);
          },
          $updateClass: function (t, e) {
            var n = ne(t, e);
            n && n.length && P.addClass(this.$$element, n), (n = ne(e, t)) && n.length && P.removeClass(this.$$element, n);
          },
          $set: function (t, e, n, r) {
            var a = Dt(this.$$element[0], t), s = Jr[t], u = t;
            if (a ? (this.$$element.prop(t, e), r = a) : s && (this[s] = e, u = s), this[t] = e, r ? this.$attr[t] = r : (r = this.$attr[t]) || (this.$attr[t] = r = rt(t, '-')), 'a' === (a = j(this.$$element)) && ('href' === t || 'xlinkHref' === t) || 'img' === a && 'src' === t)
              this[t] = e = _(e, 'src' === t);
            else if ('img' === a && 'srcset' === t && y(e)) {
              for (var a = '', s = Cr(e), c = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, c = /\s/.test(s) ? c : /(,)/, s = s.split(c), c = Math.floor(s.length / 2), l = 0; l < c; l++)
                var f = 2 * l, a = a + _(Cr(s[f]), !0), a = a + ' ' + Cr(s[f + 1]);
              s = Cr(s[2 * l]).split(/\s/), a += _(Cr(s[0]), !0), 2 === s.length && (a += ' ' + Cr(s[1])), this[t] = e = a;
            }
            !1 !== n && (null === e || g(e) ? this.$$element.removeAttr(r) : St.test(r) ? this.$$element.attr(r, e) : B(this.$$element[0], r, e)), (t = this.$$observers) && o(t[u], function (t) {
              try {
                t(e);
              } catch (t) {
                i(t);
              }
            });
          },
          $observe: function (t, e) {
            var n = this, r = n.$$observers || (n.$$observers = ct()), i = r[t] || (r[t] = []);
            return i.push(e), C.$evalAsync(function () {
              i.$$inter || !n.hasOwnProperty(t) || g(n[t]) || e(n[t]);
            }), function () {
              D(i, e);
            };
          }
        };
        var Mt = n.startSymbol(), Vt = n.endSymbol(), Tt = '{{' === Mt && '}}' === Vt ? d : function (t) {
            return t.replace(/\{\{/g, Mt).replace(/}}/g, Vt);
          }, Nt = /^ngAttr[A-Z]/, It = /^(.+)Start$/;
        return z.$$addBindingInfo = S ? function (t, e) {
          var n = t.data('$binding') || [];
          wr(e) ? n = n.concat(e) : n.push(e), t.data('$binding', n);
        } : $, z.$$addBindingClass = S ? function (t) {
          H(t, 'ng-binding');
        } : $, z.$$addScopeInfo = S ? function (t, e, n, r) {
          t.data(n ? r ? '$isolateScopeNoTemplate' : '$isolateScope' : '$scope', e);
        } : $, z.$$addScopeClass = S ? function (t, e) {
          H(t, e ? 'ng-isolate-scope' : 'ng-scope');
        } : $, z.$$createComment = function (e, n) {
          var r = '';
          return S && (r = ' ' + (e || '') + ': ', n && (r += n + ' ')), t.document.createComment(r);
        }, z;
      }
    ];
  }
  function te(t, e) {
    this.previousValue = t, this.currentValue = e;
  }
  function ee(t) {
    return t.replace($i, '').replace(di, $t);
  }
  function ne(t, e) {
    var n = '', r = t.split(/\s+/), i = e.split(/\s+/), o = 0;
    t:
      for (; o < r.length; o++) {
        for (var a = r[o], s = 0; s < i.length; s++)
          if (a === i[s])
            continue t;
        n += (0 < n.length ? ' ' : '') + a;
      }
    return n;
  }
  function re(t) {
    t = ir(t);
    var e = t.length;
    if (1 >= e)
      return t;
    for (; e--;) {
      var n = t[e];
      (8 === n.nodeType || n.nodeType === Nr && '' === n.nodeValue.trim()) && pr.call(t, e, 1);
    }
    return t;
  }
  function ie(t, e) {
    if (e && x(e))
      return e;
    if (x(t)) {
      var n = vi.exec(t);
      if (n)
        return n[3];
    }
  }
  function oe() {
    var t = {}, e = !1;
    this.has = function (e) {
      return t.hasOwnProperty(e);
    }, this.register = function (e, n) {
      at(e, 'controller'), b(e) ? l(t, e) : t[e] = n;
    }, this.allowGlobals = function () {
      e = !0;
    }, this.$get = [
      '$injector',
      '$window',
      function (n, i) {
        function o(t, e, n, i) {
          if (!t || !b(t.$scope))
            throw r('$controller')('noscp', i, e);
          t.$scope[e] = n;
        }
        return function (r, a, s, u) {
          var c, f, h;
          if (s = !0 === s, u && x(u) && (h = u), x(r)) {
            if (!(u = r.match(vi)))
              throw mi('ctrlfmt', r);
            if (f = u[1], h = h || u[3], !(r = t.hasOwnProperty(f) ? t[f] : st(a.$scope, f, !0) || (e ? st(i, f, !0) : void 0)))
              throw mi('ctrlreg', f);
            ot(r, f, !0);
          }
          return s ? (s = (wr(r) ? r[r.length - 1] : r).prototype, c = Object.create(s || null), h && o(a, h, c, f || r.name), l(function () {
            var t = n.invoke(r, c, a, f);
            return t !== c && (b(t) || k(t)) && (c = t, h && o(a, h, c, f || r.name)), c;
          }, {
            instance: c,
            identifier: h
          })) : (c = n.instantiate(r, a, f), h && o(a, h, c, f || r.name), c);
        };
      }
    ];
  }
  function ae() {
    this.$get = [
      '$window',
      function (t) {
        return ir(t.document);
      }
    ];
  }
  function se() {
    this.$get = [
      '$document',
      '$rootScope',
      function (t, e) {
        function n() {
          i = r.hidden;
        }
        var r = t[0], i = r && r.hidden;
        return t.on('visibilitychange', n), e.$on('$destroy', function () {
          t.off('visibilitychange', n);
        }), function () {
          return i;
        };
      }
    ];
  }
  function ue() {
    this.$get = [
      '$log',
      function (t) {
        return function (e, n) {
          t.error.apply(t, arguments);
        };
      }
    ];
  }
  function ce(t) {
    return b(t) ? S(t) ? t.toISOString() : F(t) : t;
  }
  function le() {
    this.$get = function () {
      return function (t) {
        if (!t)
          return '';
        var e = [];
        return a(t, function (t, n) {
          null === t || g(t) || (wr(t) ? o(t, function (t) {
            e.push(Y(n) + '=' + Y(ce(t)));
          }) : e.push(Y(n) + '=' + Y(ce(t))));
        }), e.join('&');
      };
    };
  }
  function fe() {
    this.$get = function () {
      return function (t) {
        function e(t, r, i) {
          null === t || g(t) || (wr(t) ? o(t, function (t, n) {
            e(t, r + '[' + (b(t) ? n : '') + ']');
          }) : b(t) && !S(t) ? a(t, function (t, n) {
            e(t, r + (i ? '' : '[') + n + (i ? '' : ']'));
          }) : n.push(Y(r) + '=' + Y(ce(t))));
        }
        if (!t)
          return '';
        var n = [];
        return e(t, '', !0), n.join('&');
      };
    };
  }
  function he(t, e) {
    if (x(t)) {
      var n = t.replace(Ci, '').trim();
      if (n) {
        var r = e('Content-Type');
        if ((r = r && 0 === r.indexOf(yi)) || (r = (r = n.match(wi)) && xi[r[0]].test(n)), r)
          try {
            t = B(n);
          } catch (e) {
            throw Si('baddata', t, e);
          }
      }
    }
    return t;
  }
  function pe(t) {
    var e, n = ct();
    return x(t) ? o(t.split('\n'), function (t) {
      e = t.indexOf(':');
      var r = lr(Cr(t.substr(0, e)));
      t = Cr(t.substr(e + 1)), r && (n[r] = n[r] ? n[r] + ', ' + t : t);
    }) : b(t) && o(t, function (t, e) {
      var r = lr(e), i = Cr(t);
      r && (n[r] = n[r] ? n[r] + ', ' + i : i);
    }), n;
  }
  function $e(t) {
    var e;
    return function (n) {
      return e || (e = pe(t)), n ? (n = e[lr(n)], void 0 === n && (n = null), n) : e;
    };
  }
  function de(t, e, n, r) {
    return k(r) ? r(t, e, n) : (o(r, function (r) {
      t = r(t, e, n);
    }), t);
  }
  function me() {
    var t = this.defaults = {
        transformResponse: [he],
        transformRequest: [function (t) {
            return b(t) && '[object File]' !== dr.call(t) && '[object Blob]' !== dr.call(t) && '[object FormData]' !== dr.call(t) ? F(t) : t;
          }],
        headers: {
          common: { Accept: 'application/json, text/plain, */*' },
          post: ht(bi),
          put: ht(bi),
          patch: ht(bi)
        },
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        paramSerializer: '$httpParamSerializer',
        jsonpCallbackParam: 'callback'
      }, e = !1;
    this.useApplyAsync = function (t) {
      return y(t) ? (e = !!t, this) : e;
    };
    var n = this.interceptors = [];
    this.$get = [
      '$browser',
      '$httpBackend',
      '$$cookieReader',
      '$cacheFactory',
      '$rootScope',
      '$q',
      '$injector',
      '$sce',
      function (i, a, s, u, c, f, h, p) {
        function d(e) {
          function n(t, e) {
            for (var n = 0, r = e.length; n < r;) {
              var i = e[n++], o = e[n++];
              t = t.then(i, o);
            }
            return e.length = 0, t;
          }
          function a(t, e) {
            var n, r = {};
            return o(t, function (t, i) {
              k(t) ? null != (n = t(e)) && (r[i] = n) : r[i] = t;
            }), r;
          }
          function s(t) {
            var e = l({}, t);
            return e.data = de(t.data, t.headers, t.status, u.transformResponse), t = t.status, 200 <= t && 300 > t ? e : f.reject(e);
          }
          if (!b(e))
            throw r('$http')('badreq', e);
          if (!x(p.valueOf(e.url)))
            throw r('$http')('badreq', e.url);
          var u = l({
            method: 'get',
            transformRequest: t.transformRequest,
            transformResponse: t.transformResponse,
            paramSerializer: t.paramSerializer,
            jsonpCallbackParam: t.jsonpCallbackParam
          }, e);
          u.headers = function (e) {
            var n, r, i, o = t.headers, s = l({}, e.headers), o = l({}, o.common, o[lr(e.method)]);
            t:
              for (n in o) {
                r = lr(n);
                for (i in s)
                  if (lr(i) === r)
                    continue t;
                s[n] = o[n];
              }
            return a(s, ht(e));
          }(e), u.method = fr(u.method), u.paramSerializer = x(u.paramSerializer) ? h.get(u.paramSerializer) : u.paramSerializer, i.$$incOutstandingRequestCount();
          var c = [], d = [];
          return e = f.resolve(u), o(S, function (t) {
            (t.request || t.requestError) && c.unshift(t.request, t.requestError), (t.response || t.responseError) && d.push(t.response, t.responseError);
          }), e = n(e, c), e = e.then(function (e) {
            var n = e.headers, r = de(e.data, $e(n), void 0, e.transformRequest);
            return g(r) && o(n, function (t, e) {
              'content-type' === lr(e) && delete n[e];
            }), g(e.withCredentials) && !g(t.withCredentials) && (e.withCredentials = t.withCredentials), m(e, r).then(s, s);
          }), e = n(e, d), e = e.finally(function () {
            i.$$completeOutstandingRequest($);
          });
        }
        function m(n, r) {
          function i(t) {
            if (t) {
              var n = {};
              return o(t, function (t, r) {
                n[r] = function (n) {
                  function r() {
                    t(n);
                  }
                  e ? c.$applyAsync(r) : c.$$phase ? r() : c.$apply(r);
                };
              }), n;
            }
          }
          function u(t, n, r, i) {
            function o() {
              l(n, t, r, i);
            }
            m && (200 <= t && 300 > t ? m.put(V, [
              t,
              n,
              pe(r),
              i
            ]) : m.remove(V)), e ? c.$applyAsync(o) : (o(), c.$$phase || c.$apply());
          }
          function l(t, e, r, i) {
            e = -1 <= e ? e : 0, (200 <= e && 300 > e ? E.resolve : E.reject)({
              data: t,
              status: e,
              headers: $e(r),
              config: n,
              statusText: i
            });
          }
          function h(t) {
            l(t.data, t.status, ht(t.headers()), t.statusText);
          }
          function $() {
            var t = d.pendingRequests.indexOf(n);
            -1 !== t && d.pendingRequests.splice(t, 1);
          }
          var m, S, E = f.defer(), A = E.promise, O = n.headers, M = 'jsonp' === lr(n.method), V = n.url;
          return M ? V = p.getTrustedResourceUrl(V) : x(V) || (V = p.valueOf(V)), V = v(V, n.paramSerializer(n.params)), M && (V = w(V, n.jsonpCallbackParam)), d.pendingRequests.push(n), A.then($, $), !n.cache && !t.cache || !1 === n.cache || 'GET' !== n.method && 'JSONP' !== n.method || (m = b(n.cache) ? n.cache : b(t.cache) ? t.cache : C), m && (S = m.get(V), y(S) ? S && k(S.then) ? S.then(h, h) : wr(S) ? l(S[1], S[0], ht(S[2]), S[3]) : l(S, 200, {}, 'OK') : m.put(V, A)), g(S) && ((S = fn(n.url) ? s()[n.xsrfCookieName || t.xsrfCookieName] : void 0) && (O[n.xsrfHeaderName || t.xsrfHeaderName] = S), a(n.method, V, r, u, O, n.timeout, n.withCredentials, n.responseType, i(n.eventHandlers), i(n.uploadEventHandlers))), A;
        }
        function v(t, e) {
          return 0 < e.length && (t += (-1 === t.indexOf('?') ? '?' : '&') + e), t;
        }
        function w(t, e) {
          if (/[&?][^=]+=JSON_CALLBACK/.test(t))
            throw Si('badjsonp', t);
          if (new RegExp('[&?]' + e + '=').test(t))
            throw Si('badjsonp', e, t);
          return t += (-1 === t.indexOf('?') ? '?' : '&') + e + '=JSON_CALLBACK';
        }
        var C = u('$http');
        t.paramSerializer = x(t.paramSerializer) ? h.get(t.paramSerializer) : t.paramSerializer;
        var S = [];
        return o(n, function (t) {
          S.unshift(x(t) ? h.get(t) : h.invoke(t));
        }), d.pendingRequests = [], function (t) {
          o(arguments, function (t) {
            d[t] = function (e, n) {
              return d(l({}, n || {}, {
                method: t,
                url: e
              }));
            };
          });
        }('get', 'delete', 'head', 'jsonp'), function (t) {
          o(arguments, function (t) {
            d[t] = function (e, n, r) {
              return d(l({}, r || {}, {
                method: t,
                url: e,
                data: n
              }));
            };
          });
        }('post', 'put', 'patch'), d.defaults = t, d;
      }
    ];
  }
  function ve() {
    this.$get = function () {
      return function () {
        return new t.XMLHttpRequest();
      };
    };
  }
  function ge() {
    this.$get = [
      '$browser',
      '$jsonpCallbacks',
      '$document',
      '$xhrFactory',
      function (t, e, n, r) {
        return ye(t, r, t.defer, e, n[0]);
      }
    ];
  }
  function ye(t, e, n, r, i) {
    function a(t, e, n) {
      t = t.replace('JSON_CALLBACK', e);
      var o = i.createElement('script'), a = null;
      return o.type = 'text/javascript', o.src = t, o.async = !0, a = function (t) {
        o.removeEventListener('load', a), o.removeEventListener('error', a), i.body.removeChild(o), o = null;
        var s = -1, u = 'unknown';
        t && ('load' !== t.type || r.wasCalled(e) || (t = { type: 'error' }), u = t.type, s = 'error' === t.type ? 404 : 200), n && n(s, u);
      }, o.addEventListener('load', a), o.addEventListener('error', a), i.body.appendChild(o), a;
    }
    return function (i, s, u, c, l, f, h, p, $, d) {
      function m() {
        b && b(), w && w.abort();
      }
      if (s = s || t.url(), 'jsonp' === lr(i))
        var v = r.createCallback(s), b = a(s, v, function (t, e) {
            var i = 200 === t && r.getResponse(v);
            y(x) && n.cancel(x), b = w = null, c(t, i, '', e), r.removeCallback(v);
          });
      else {
        var w = e(i, s);
        if (w.open(i, s, !0), o(l, function (t, e) {
            y(t) && w.setRequestHeader(e, t);
          }), w.onload = function () {
            var t = w.statusText || '', e = 'response' in w ? w.response : w.responseText, r = 1223 === w.status ? 204 : w.status;
            0 === r && (r = e ? 200 : 'file' === ln(s).protocol ? 404 : 0);
            var i = w.getAllResponseHeaders();
            y(x) && n.cancel(x), b = w = null, c(r, e, i, t);
          }, i = function () {
            y(x) && n.cancel(x), b = w = null, c(-1, null, null, '');
          }, w.onerror = i, w.onabort = i, w.ontimeout = i, o($, function (t, e) {
            w.addEventListener(e, t);
          }), o(d, function (t, e) {
            w.upload.addEventListener(e, t);
          }), h && (w.withCredentials = !0), p)
          try {
            w.responseType = p;
          } catch (t) {
            if ('json' !== p)
              throw t;
          }
        w.send(g(u) ? null : u);
      }
      if (0 < f)
        var x = n(m, f);
      else
        f && k(f.then) && f.then(m);
    };
  }
  function be() {
    var t = '{{', e = '}}';
    this.startSymbol = function (e) {
      return e ? (t = e, this) : t;
    }, this.endSymbol = function (t) {
      return t ? (e = t, this) : e;
    }, this.$get = [
      '$parse',
      '$exceptionHandler',
      '$sce',
      function (n, r, i) {
        function o(t) {
          return '\\\\\\' + t;
        }
        function a(n) {
          return n.replace(h, t).replace(p, e);
        }
        function s(t, e, n, r) {
          var i = t.$watch(function (t) {
            return i(), r(t);
          }, e, n);
          return i;
        }
        function u(o, u, h, p) {
          function $(t) {
            try {
              var e = t;
              return t = h ? i.getTrusted(h, e) : i.valueOf(e), p && !y(t) ? t : lt(t);
            } catch (t) {
              r(Ei.interr(o, t));
            }
          }
          if (!o.length || -1 === o.indexOf(t)) {
            var d;
            return u || (u = a(o), d = m(u), d.exp = o, d.expressions = [], d.$$watchDelegate = s), d;
          }
          p = !!p;
          var v, b, w = 0, x = [], C = [];
          d = o.length;
          for (var S = [], E = []; w < d;) {
            if (-1 === (v = o.indexOf(t, w)) || -1 === (b = o.indexOf(e, v + c))) {
              w !== d && S.push(a(o.substring(w)));
              break;
            }
            w !== v && S.push(a(o.substring(w, v))), w = o.substring(v + c, b), x.push(w), C.push(n(w, $)), w = b + f, E.push(S.length), S.push('');
          }
          if (h && 1 < S.length && Ei.throwNoconcat(o), !u || x.length) {
            var A = function (t) {
              for (var e = 0, n = x.length; e < n; e++) {
                if (p && g(t[e]))
                  return;
                S[E[e]] = t[e];
              }
              return S.join('');
            };
            return l(function (t) {
              var e = 0, n = x.length, i = Array(n);
              try {
                for (; e < n; e++)
                  i[e] = C[e](t);
                return A(i);
              } catch (t) {
                r(Ei.interr(o, t));
              }
            }, {
              exp: o,
              expressions: x,
              $$watchDelegate: function (t, e) {
                var n;
                return t.$watchGroup(C, function (r, i) {
                  var o = A(r);
                  k(e) && e.call(this, o, r !== i ? n : o, t), n = o;
                });
              }
            });
          }
        }
        var c = t.length, f = e.length, h = new RegExp(t.replace(/./g, o), 'g'), p = new RegExp(e.replace(/./g, o), 'g');
        return u.startSymbol = function () {
          return t;
        }, u.endSymbol = function () {
          return e;
        }, u;
      }
    ];
  }
  function we() {
    this.$get = [
      '$rootScope',
      '$window',
      '$q',
      '$$q',
      '$browser',
      function (t, e, n, r, i) {
        function o(o, s, u, c) {
          function l() {
            f ? o.apply(null, h) : o(d);
          }
          var f = 4 < arguments.length, h = f ? hr.call(arguments, 4) : [], p = e.setInterval, $ = e.clearInterval, d = 0, m = y(c) && !c, v = (m ? r : n).defer(), g = v.promise;
          return u = y(u) ? u : 0, g.$$intervalId = p(function () {
            m ? i.defer(l) : t.$evalAsync(l), v.notify(d++), 0 < u && d >= u && (v.resolve(d), $(g.$$intervalId), delete a[g.$$intervalId]), m || t.$apply();
          }, s), a[g.$$intervalId] = v, g;
        }
        var a = {};
        return o.cancel = function (t) {
          return !!(t && t.$$intervalId in a) && (a[t.$$intervalId].promise.$$state.pur = !0, a[t.$$intervalId].reject('canceled'), e.clearInterval(t.$$intervalId), delete a[t.$$intervalId], !0);
        }, o;
      }
    ];
  }
  function xe(t) {
    t = t.split('/');
    for (var e = t.length; e--;)
      t[e] = Z(t[e]);
    return t.join('/');
  }
  function Ce(t, e) {
    var n = ln(t);
    e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = h(n.port) || Oi[n.protocol] || null;
  }
  function Se(t, e) {
    if (Vi.test(t))
      throw Mi('badpath', t);
    var n = '/' !== t.charAt(0);
    n && (t = '/' + t);
    var r = ln(t);
    e.$$path = decodeURIComponent(n && '/' === r.pathname.charAt(0) ? r.pathname.substring(1) : r.pathname), e.$$search = K(r.search), e.$$hash = decodeURIComponent(r.hash), e.$$path && '/' !== e.$$path.charAt(0) && (e.$$path = '/' + e.$$path);
  }
  function Ee(t, e) {
    return t.slice(0, e.length) === e;
  }
  function ke(t, e) {
    if (Ee(e, t))
      return e.substr(t.length);
  }
  function Ae(t) {
    var e = t.indexOf('#');
    return -1 === e ? t : t.substr(0, e);
  }
  function Oe(t) {
    return t.replace(/(#.+)|#$/, '$1');
  }
  function Me(t, e, n) {
    this.$$html5 = !0, n = n || '', Ce(t, this), this.$$parse = function (t) {
      var n = ke(e, t);
      if (!x(n))
        throw Mi('ipthprfx', t, e);
      Se(n, this), this.$$path || (this.$$path = '/'), this.$$compose();
    }, this.$$compose = function () {
      var t = J(this.$$search), n = this.$$hash ? '#' + Z(this.$$hash) : '';
      this.$$url = xe(this.$$path) + (t ? '?' + t : '') + n, this.$$absUrl = e + this.$$url.substr(1), this.$$urlUpdatedByLocation = !0;
    }, this.$$parseLinkUrl = function (r, i) {
      if (i && '#' === i[0])
        return this.hash(i.slice(1)), !0;
      var o, a;
      return y(o = ke(t, r)) ? (a = o, a = n && y(o = ke(n, o)) ? e + (ke('/', o) || o) : t + a) : y(o = ke(e, r)) ? a = e + o : e === r + '/' && (a = e), a && this.$$parse(a), !!a;
    };
  }
  function Ve(t, e, n) {
    Ce(t, this), this.$$parse = function (r) {
      var i, o = ke(t, r) || ke(e, r);
      g(o) || '#' !== o.charAt(0) ? this.$$html5 ? i = o : (i = '', g(o) && (t = r, this.replace())) : (i = ke(n, o), g(i) && (i = o)), Se(i, this), r = this.$$path;
      var o = t, a = /^\/[A-Z]:(\/.*)/;
      Ee(i, o) && (i = i.replace(o, '')), a.exec(i) || (r = (i = a.exec(r)) ? i[1] : r), this.$$path = r, this.$$compose();
    }, this.$$compose = function () {
      var e = J(this.$$search), r = this.$$hash ? '#' + Z(this.$$hash) : '';
      this.$$url = xe(this.$$path) + (e ? '?' + e : '') + r, this.$$absUrl = t + (this.$$url ? n + this.$$url : ''), this.$$urlUpdatedByLocation = !0;
    }, this.$$parseLinkUrl = function (e, n) {
      return Ae(t) === Ae(e) && (this.$$parse(e), !0);
    };
  }
  function Te(t, e, n) {
    this.$$html5 = !0, Ve.apply(this, arguments), this.$$parseLinkUrl = function (r, i) {
      if (i && '#' === i[0])
        return this.hash(i.slice(1)), !0;
      var o, a;
      return t === Ae(r) ? o = r : (a = ke(e, r)) ? o = t + n + a : e === r + '/' && (o = e), o && this.$$parse(o), !!o;
    }, this.$$compose = function () {
      var e = J(this.$$search), r = this.$$hash ? '#' + Z(this.$$hash) : '';
      this.$$url = xe(this.$$path) + (e ? '?' + e : '') + r, this.$$absUrl = t + n + this.$$url, this.$$urlUpdatedByLocation = !0;
    };
  }
  function Ne(t) {
    return function () {
      return this[t];
    };
  }
  function Ie(t, e) {
    return function (n) {
      return g(n) ? this[t] : (this[t] = e(n), this.$$compose(), this);
    };
  }
  function je() {
    var t = '!', e = {
        enabled: !1,
        requireBase: !0,
        rewriteLinks: !0
      };
    this.hashPrefix = function (e) {
      return y(e) ? (t = e, this) : t;
    }, this.html5Mode = function (t) {
      return V(t) ? (e.enabled = t, this) : b(t) ? (V(t.enabled) && (e.enabled = t.enabled), V(t.requireBase) && (e.requireBase = t.requireBase), (V(t.rewriteLinks) || x(t.rewriteLinks)) && (e.rewriteLinks = t.rewriteLinks), this) : e;
    }, this.$get = [
      '$rootScope',
      '$browser',
      '$sniffer',
      '$rootElement',
      '$window',
      function (n, r, i, o, a) {
        function s(t, e, n) {
          var i = c.url(), o = c.$$state;
          try {
            r.url(t, e, n), c.$$state = r.state();
          } catch (t) {
            throw c.url(i), c.$$state = o, t;
          }
        }
        function u(t, e) {
          n.$broadcast('$locationChangeSuccess', c.absUrl(), t, c.$$state, e);
        }
        var c, l;
        l = r.baseHref();
        var f, h = r.url();
        if (e.enabled) {
          if (!l && e.requireBase)
            throw Mi('nobase');
          f = h.substring(0, h.indexOf('/', h.indexOf('//') + 2)) + (l || '/'), l = i.history ? Me : Te;
        } else
          f = Ae(h), l = Ve;
        var p = f.substr(0, Ae(f).lastIndexOf('/') + 1);
        c = new l(f, p, '#' + t), c.$$parseLinkUrl(h, h), c.$$state = r.state();
        var $ = /^\s*(javascript|mailto):/i;
        o.on('click', function (t) {
          var i = e.rewriteLinks;
          if (i && !t.ctrlKey && !t.metaKey && !t.shiftKey && 2 !== t.which && 2 !== t.button) {
            for (var s = ir(t.target); 'a' !== j(s[0]);)
              if (s[0] === o[0] || !(s = s.parent())[0])
                return;
            if (!x(i) || !g(s.attr(i))) {
              var i = s.prop('href'), u = s.attr('href') || s.attr('xlink:href');
              b(i) && '[object SVGAnimatedString]' === i.toString() && (i = ln(i.animVal).href), $.test(i) || !i || s.attr('target') || t.isDefaultPrevented() || !c.$$parseLinkUrl(i, u) || (t.preventDefault(), c.absUrl() !== r.url() && (n.$apply(), a.angular['ff-684208-preventDefault'] = !0));
            }
          }
        }), Oe(c.absUrl()) !== Oe(h) && r.url(c.absUrl(), !0);
        var d = !0;
        return r.onUrlChange(function (t, e) {
          Ee(t, p) ? (n.$evalAsync(function () {
            var r, i = c.absUrl(), o = c.$$state;
            t = Oe(t), c.$$parse(t), c.$$state = e, r = n.$broadcast('$locationChangeStart', t, i, e, o).defaultPrevented, c.absUrl() === t && (r ? (c.$$parse(i), c.$$state = o, s(i, !1, o)) : (d = !1, u(i, o)));
          }), n.$$phase || n.$digest()) : a.location.href = t;
        }), n.$watch(function () {
          if (d || c.$$urlUpdatedByLocation) {
            c.$$urlUpdatedByLocation = !1;
            var t = Oe(r.url()), e = Oe(c.absUrl()), o = r.state(), a = c.$$replace, l = t !== e || c.$$html5 && i.history && o !== c.$$state;
            (d || l) && (d = !1, n.$evalAsync(function () {
              var e = c.absUrl(), r = n.$broadcast('$locationChangeStart', e, t, c.$$state, o).defaultPrevented;
              c.absUrl() === e && (r ? (c.$$parse(t), c.$$state = o) : (l && s(e, a, o === c.$$state ? null : c.$$state), u(t, o)));
            }));
          }
          c.$$replace = !1;
        }), c;
      }
    ];
  }
  function De() {
    var t = !0, e = this;
    this.debugEnabled = function (e) {
      return y(e) ? (t = e, this) : t;
    }, this.$get = [
      '$window',
      function (n) {
        function r(t) {
          return E(t) && (t.stack && a ? t = t.message && -1 === t.stack.indexOf(t.message) ? 'Error: ' + t.message + '\n' + t.stack : t.stack : t.sourceURL && (t = t.message + '\n' + t.sourceURL + ':' + t.line)), t;
        }
        function i(t) {
          var e = n.console || {}, i = e[t] || e.log || $;
          return function () {
            var t = [];
            return o(arguments, function (e) {
              t.push(r(e));
            }), Function.prototype.apply.call(i, e, t);
          };
        }
        var a = rr || /\bEdge\//.test(n.navigator && n.navigator.userAgent);
        return {
          log: i('log'),
          info: i('info'),
          warn: i('warn'),
          error: i('error'),
          debug: function () {
            var n = i('debug');
            return function () {
              t && n.apply(e, arguments);
            };
          }()
        };
      }
    ];
  }
  function Pe(t) {
    return t + '';
  }
  function Re(t, e) {
    return void 0 !== t ? t : e;
  }
  function Ue(t, e) {
    return void 0 === t ? e : void 0 === e ? t : t + e;
  }
  function _e(t, e) {
    switch (t.type) {
    case Ri.MemberExpression:
      if (t.computed)
        return !1;
      break;
    case Ri.UnaryExpression:
      return 1;
    case Ri.BinaryExpression:
      return '+' !== t.operator && 1;
    case Ri.CallExpression:
      return !1;
    }
    return void 0 === e ? Ui : e;
  }
  function Le(t, e, n) {
    var r, i, a = t.isPure = _e(t, n);
    switch (t.type) {
    case Ri.Program:
      r = !0, o(t.body, function (t) {
        Le(t.expression, e, a), r = r && t.expression.constant;
      }), t.constant = r;
      break;
    case Ri.Literal:
      t.constant = !0, t.toWatch = [];
      break;
    case Ri.UnaryExpression:
      Le(t.argument, e, a), t.constant = t.argument.constant, t.toWatch = t.argument.toWatch;
      break;
    case Ri.BinaryExpression:
      Le(t.left, e, a), Le(t.right, e, a), t.constant = t.left.constant && t.right.constant, t.toWatch = t.left.toWatch.concat(t.right.toWatch);
      break;
    case Ri.LogicalExpression:
      Le(t.left, e, a), Le(t.right, e, a), t.constant = t.left.constant && t.right.constant, t.toWatch = t.constant ? [] : [t];
      break;
    case Ri.ConditionalExpression:
      Le(t.test, e, a), Le(t.alternate, e, a), Le(t.consequent, e, a), t.constant = t.test.constant && t.alternate.constant && t.consequent.constant, t.toWatch = t.constant ? [] : [t];
      break;
    case Ri.Identifier:
      t.constant = !1, t.toWatch = [t];
      break;
    case Ri.MemberExpression:
      Le(t.object, e, a), t.computed && Le(t.property, e, a), t.constant = t.object.constant && (!t.computed || t.property.constant), t.toWatch = [t];
      break;
    case Ri.CallExpression:
      r = n = !!t.filter && !e(t.callee.name).$stateful, i = [], o(t.arguments, function (t) {
        Le(t, e, a), r = r && t.constant, t.constant || i.push.apply(i, t.toWatch);
      }), t.constant = r, t.toWatch = n ? i : [t];
      break;
    case Ri.AssignmentExpression:
      Le(t.left, e, a), Le(t.right, e, a), t.constant = t.left.constant && t.right.constant, t.toWatch = [t];
      break;
    case Ri.ArrayExpression:
      r = !0, i = [], o(t.elements, function (t) {
        Le(t, e, a), r = r && t.constant, t.constant || i.push.apply(i, t.toWatch);
      }), t.constant = r, t.toWatch = i;
      break;
    case Ri.ObjectExpression:
      r = !0, i = [], o(t.properties, function (t) {
        Le(t.value, e, a), r = r && t.value.constant && !t.computed, t.value.constant || i.push.apply(i, t.value.toWatch), t.computed && (Le(t.key, e, a), t.key.constant || i.push.apply(i, t.key.toWatch));
      }), t.constant = r, t.toWatch = i;
      break;
    case Ri.ThisExpression:
      t.constant = !1, t.toWatch = [];
      break;
    case Ri.LocalsExpression:
      t.constant = !1, t.toWatch = [];
    }
  }
  function qe(t) {
    if (1 === t.length) {
      t = t[0].expression;
      var e = t.toWatch;
      return 1 !== e.length ? e : e[0] !== t ? e : void 0;
    }
  }
  function Fe(t) {
    return t.type === Ri.Identifier || t.type === Ri.MemberExpression;
  }
  function Be(t) {
    if (1 === t.body.length && Fe(t.body[0].expression))
      return {
        type: Ri.AssignmentExpression,
        left: t.body[0].expression,
        right: { type: Ri.NGValueParameter },
        operator: '='
      };
  }
  function He(t) {
    this.$filter = t;
  }
  function ze(t) {
    this.$filter = t;
  }
  function We(t, e, n) {
    this.ast = new Ri(t, n), this.astCompiler = n.csp ? new ze(e) : new He(e);
  }
  function Ge(t) {
    return k(t.valueOf) ? t.valueOf() : Ii.call(t);
  }
  function Ke() {
    var t, e, n = ct(), r = {
        true: !0,
        false: !1,
        null: null,
        undefined: void 0
      };
    this.addLiteral = function (t, e) {
      r[t] = e;
    }, this.setIdentifierFns = function (n, r) {
      return t = n, e = r, this;
    }, this.$get = [
      '$filter',
      function (i) {
        function a(t, e, n) {
          return null == t || null == e ? t === e : !('object' == typeof t && 'object' == typeof (t = Ge(t)) && !n) && (t === e || t !== t && e !== e);
        }
        function s(t, e, n, r, i) {
          var o, s = r.inputs;
          if (1 === s.length) {
            var u = a, s = s[0];
            return t.$watch(function (t) {
              var e = s(t);
              return a(e, u, s.isPure) || (o = r(t, void 0, void 0, [e]), u = e && Ge(e)), o;
            }, e, n, i);
          }
          for (var c = [], l = [], f = 0, h = s.length; f < h; f++)
            c[f] = a, l[f] = null;
          return t.$watch(function (t) {
            for (var e = !1, n = 0, i = s.length; n < i; n++) {
              var u = s[n](t);
              (e || (e = !a(u, c[n], s[n].isPure))) && (l[n] = u, c[n] = u && Ge(u));
            }
            return e && (o = r(t, void 0, void 0, l)), o;
          }, e, n, i);
        }
        function u(t, e, n, r, i) {
          function o(t) {
            return r(t);
          }
          function a(t, n, r) {
            c = t, k(e) && e(t, n, r), y(t) && r.$$postDigest(function () {
              y(c) && u();
            });
          }
          var u, c;
          return u = r.inputs ? s(t, a, n, r, i) : t.$watch(o, a, n);
        }
        function c(t, e, n, r) {
          function i(t) {
            var e = !0;
            return o(t, function (t) {
              y(t) || (e = !1);
            }), e;
          }
          var a, s;
          return a = t.$watch(function (t) {
            return r(t);
          }, function (t, n, r) {
            s = t, k(e) && e(t, n, r), i(t) && r.$$postDigest(function () {
              i(s) && a();
            });
          }, n);
        }
        function l(t, e, n, r) {
          var i = t.$watch(function (t) {
            return i(), r(t);
          }, e, n);
          return i;
        }
        function f(t, e) {
          if (!e)
            return t;
          var n = t.$$watchDelegate, r = !1, i = n !== c && n !== u ? function (n, i, o, a) {
              return o = r && a ? a[0] : t(n, i, o, a), e(o, n, i);
            } : function (n, r, i, o) {
              return i = t(n, r, i, o), n = e(i, n, r), y(i) ? n : i;
            }, r = !t.inputs;
          return n && n !== s ? (i.$$watchDelegate = n, i.inputs = t.inputs) : e.$stateful || (i.$$watchDelegate = s, i.inputs = t.inputs ? t.inputs : [t]), i.inputs && (i.inputs = i.inputs.map(function (t) {
            return t.isPure === Ui ? function (e) {
              return t(e);
            } : t;
          })), i;
        }
        var h = {
          csp: Er().noUnsafeEval,
          literals: P(r),
          isIdentifierStart: k(t) && t,
          isIdentifierContinue: k(e) && e
        };
        return function (t, e) {
          var r, o, a;
          switch (typeof t) {
          case 'string':
            return a = t = t.trim(), r = n[a], r || (':' === t.charAt(0) && ':' === t.charAt(1) && (o = !0, t = t.substring(2)), r = new Pi(h), r = new We(r, i, h).parse(t), r.constant ? r.$$watchDelegate = l : o ? r.$$watchDelegate = r.literal ? c : u : r.inputs && (r.$$watchDelegate = s), n[a] = r), f(r, e);
          case 'function':
            return f(t, e);
          default:
            return f($, e);
          }
        };
      }
    ];
  }
  function Je() {
    var t = !0;
    this.$get = [
      '$rootScope',
      '$exceptionHandler',
      function (e, n) {
        return Ye(function (t) {
          e.$evalAsync(t);
        }, n, t);
      }
    ], this.errorOnUnhandledRejections = function (e) {
      return y(e) ? (t = e, this) : t;
    };
  }
  function Ze() {
    var t = !0;
    this.$get = [
      '$browser',
      '$exceptionHandler',
      function (e, n) {
        return Ye(function (t) {
          e.defer(t);
        }, n, t);
      }
    ], this.errorOnUnhandledRejections = function (e) {
      return y(e) ? (t = e, this) : t;
    };
  }
  function Ye(t, e, n) {
    function i() {
      return new a();
    }
    function a() {
      var t = this.promise = new s();
      this.resolve = function (e) {
        f(t, e);
      }, this.reject = function (e) {
        p(t, e);
      }, this.notify = function (e) {
        d(t, e);
      };
    }
    function s() {
      this.$$state = { status: 0 };
    }
    function u() {
      for (; !C && S.length;) {
        var t = S.shift();
        if (!t.pur) {
          t.pur = !0;
          var n = t.value, n = 'Possibly unhandled rejection: ' + ('function' == typeof n ? n.toString().replace(/ \{[\s\S]*$/, '') : g(n) ? 'undefined' : 'string' != typeof n ? pt(n, void 0) : n);
          E(t.value) ? e(t.value, n) : e(n);
        }
      }
    }
    function c(e) {
      !n || e.pending || 2 !== e.status || e.pur || (0 === C && 0 === S.length && t(u), S.push(e)), !e.processScheduled && e.pending && (e.processScheduled = !0, ++C, t(function () {
        var r, i, o;
        o = e.pending, e.processScheduled = !1, e.pending = void 0;
        try {
          for (var a = 0, s = o.length; a < s; ++a) {
            e.pur = !0, i = o[a][0], r = o[a][e.status];
            try {
              k(r) ? f(i, r(e.value)) : 1 === e.status ? f(i, e.value) : p(i, e.value);
            } catch (t) {
              p(i, t);
            }
          }
        } finally {
          --C, n && 0 === C && t(u);
        }
      }));
    }
    function f(t, e) {
      t.$$state.status || (e === t ? $(t, x('qcycle', e)) : h(t, e));
    }
    function h(t, e) {
      function n(e) {
        a || (a = !0, h(t, e));
      }
      function r(e) {
        a || (a = !0, $(t, e));
      }
      function i(e) {
        d(t, e);
      }
      var o, a = !1;
      try {
        (b(e) || k(e)) && (o = e.then), k(o) ? (t.$$state.status = -1, o.call(e, n, r, i)) : (t.$$state.value = e, t.$$state.status = 1, c(t.$$state));
      } catch (t) {
        r(t);
      }
    }
    function p(t, e) {
      t.$$state.status || $(t, e);
    }
    function $(t, e) {
      t.$$state.value = e, t.$$state.status = 2, c(t.$$state);
    }
    function d(n, r) {
      var i = n.$$state.pending;
      0 >= n.$$state.status && i && i.length && t(function () {
        for (var t, n, o = 0, a = i.length; o < a; o++) {
          n = i[o][0], t = i[o][3];
          try {
            d(n, k(t) ? t(r) : r);
          } catch (t) {
            e(t);
          }
        }
      });
    }
    function m(t) {
      var e = new s();
      return p(e, t), e;
    }
    function v(t, e, n) {
      var r = null;
      try {
        k(n) && (r = n());
      } catch (t) {
        return m(t);
      }
      return r && k(r.then) ? r.then(function () {
        return e(t);
      }, m) : e(t);
    }
    function y(t, e, n, r) {
      var i = new s();
      return f(i, t), i.then(e, n, r);
    }
    function w(t) {
      if (!k(t))
        throw x('norslvr', t);
      var e = new s();
      return t(function (t) {
        f(e, t);
      }, function (t) {
        p(e, t);
      }), e;
    }
    var x = r('$q', TypeError), C = 0, S = [];
    l(s.prototype, {
      then: function (t, e, n) {
        if (g(t) && g(e) && g(n))
          return this;
        var r = new s();
        return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([
          r,
          t,
          e,
          n
        ]), 0 < this.$$state.status && c(this.$$state), r;
      },
      catch: function (t) {
        return this.then(null, t);
      },
      finally: function (t, e) {
        return this.then(function (e) {
          return v(e, A, t);
        }, function (e) {
          return v(e, m, t);
        }, e);
      }
    });
    var A = y;
    return w.prototype = s.prototype, w.defer = i, w.reject = m, w.when = y, w.resolve = A, w.all = function (t) {
      var e = new s(), n = 0, r = wr(t) ? [] : {};
      return o(t, function (t, i) {
        n++, y(t).then(function (t) {
          r[i] = t, --n || f(e, r);
        }, function (t) {
          p(e, t);
        });
      }), 0 === n && f(e, r), e;
    }, w.race = function (t) {
      var e = i();
      return o(t, function (t) {
        y(t).then(e.resolve, e.reject);
      }), e.promise;
    }, w;
  }
  function Qe() {
    this.$get = [
      '$window',
      '$timeout',
      function (t, e) {
        var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame, r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame, i = !!n, o = i ? function (t) {
            var e = n(t);
            return function () {
              r(e);
            };
          } : function (t) {
            var n = e(t, 16.66, !1);
            return function () {
              e.cancel(n);
            };
          };
        return o.supported = i, o;
      }
    ];
  }
  function Xe() {
    function t(t) {
      function e() {
        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = ++yr, this.$$ChildScope = null;
      }
      return e.prototype = t, e;
    }
    var e = 10, n = r('$rootScope'), a = null, s = null;
    this.digestTtl = function (t) {
      return arguments.length && (e = t), e;
    }, this.$get = [
      '$exceptionHandler',
      '$parse',
      '$browser',
      function (r, u, c) {
        function l(t) {
          t.currentScope.$$destroyed = !0;
        }
        function f(t) {
          9 === rr && (t.$$childHead && f(t.$$childHead), t.$$nextSibling && f(t.$$nextSibling)), t.$parent = t.$$nextSibling = t.$$prevSibling = t.$$childHead = t.$$childTail = t.$root = t.$$watchers = null;
        }
        function h() {
          this.$id = ++yr, this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null;
        }
        function p(t) {
          if (x.$$phase)
            throw n('inprog', x.$$phase);
          x.$$phase = t;
        }
        function d(t, e) {
          do {
            t.$$watchersCount += e;
          } while (t = t.$parent);
        }
        function m(t, e, n) {
          do {
            t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n];
          } while (t = t.$parent);
        }
        function v() {
        }
        function y() {
          for (; E.length;)
            try {
              E.shift()();
            } catch (t) {
              r(t);
            }
          s = null;
        }
        function w() {
          null === s && (s = c.defer(function () {
            x.$apply(y);
          }));
        }
        h.prototype = {
          constructor: h,
          $new: function (e, n) {
            var r;
            return n = n || this, e ? (r = new h(), r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = t(this)), r = new this.$$ChildScope()), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (e || n !== this) && r.$on('$destroy', l), r;
          },
          $watch: function (t, e, n, r) {
            var i = u(t);
            if (i.$$watchDelegate)
              return i.$$watchDelegate(this, e, n, i, t);
            var o = this, s = o.$$watchers, c = {
                fn: e,
                last: v,
                get: i,
                exp: r || t,
                eq: !!n
              };
            return a = null, k(e) || (c.fn = $), s || (s = o.$$watchers = [], s.$$digestWatchIndex = -1), s.unshift(c), s.$$digestWatchIndex++, d(this, 1), function () {
              var t = D(s, c);
              0 <= t && (d(o, -1), t < s.$$digestWatchIndex && s.$$digestWatchIndex--), a = null;
            };
          },
          $watchGroup: function (t, e) {
            function n() {
              u = !1, c ? (c = !1, e(i, i, s)) : e(i, r, s);
            }
            var r = Array(t.length), i = Array(t.length), a = [], s = this, u = !1, c = !0;
            if (!t.length) {
              var l = !0;
              return s.$evalAsync(function () {
                l && e(i, i, s);
              }), function () {
                l = !1;
              };
            }
            return 1 === t.length ? this.$watch(t[0], function (t, n, o) {
              i[0] = t, r[0] = n, e(i, t === n ? i : r, o);
            }) : (o(t, function (t, e) {
              var o = s.$watch(t, function (t, o) {
                i[e] = t, r[e] = o, u || (u = !0, s.$evalAsync(n));
              });
              a.push(o);
            }), function () {
              for (; a.length;)
                a.shift()();
            });
          },
          $watchCollection: function (t, e) {
            function n(t) {
              r = t;
              var e, n, a;
              if (!g(r)) {
                if (b(r))
                  if (i(r))
                    for (o !== h && (o = h, d = o.length = 0, l++), t = r.length, d !== t && (l++, o.length = d = t), e = 0; e < t; e++)
                      a = o[e], n = r[e], a !== a && n !== n || a === n || (l++, o[e] = n);
                  else {
                    o !== p && (o = p = {}, d = 0, l++), t = 0;
                    for (e in r)
                      cr.call(r, e) && (t++, n = r[e], a = o[e], e in o ? a !== a && n !== n || a === n || (l++, o[e] = n) : (d++, o[e] = n, l++));
                    if (d > t)
                      for (e in l++, o)
                        cr.call(r, e) || (d--, delete o[e]);
                  }
                else
                  o !== r && (o = r, l++);
                return l;
              }
            }
            n.$stateful = !0;
            var r, o, a, s = this, c = 1 < e.length, l = 0, f = u(t, n), h = [], p = {}, $ = !0, d = 0;
            return this.$watch(f, function () {
              if ($ ? ($ = !1, e(r, r, s)) : e(r, a, s), c)
                if (b(r))
                  if (i(r)) {
                    a = Array(r.length);
                    for (var t = 0; t < r.length; t++)
                      a[t] = r[t];
                  } else
                    for (t in a = {}, r)
                      cr.call(r, t) && (a[t] = r[t]);
                else
                  a = r;
            });
          },
          $digest: function () {
            var t, i, o, u, l, f, h, $, d, m, g = e, b = [];
            p('$digest'), c.$$checkUrlChange(), this === x && null !== s && (c.defer.cancel(s), y()), a = null;
            do {
              for (h = !1, $ = this, f = 0; f < C.length; f++) {
                try {
                  m = C[f], (u = m.fn)(m.scope, m.locals);
                } catch (t) {
                  r(t);
                }
                a = null;
              }
              C.length = 0;
              t:
                do {
                  if (f = $.$$watchers)
                    for (f.$$digestWatchIndex = f.length; f.$$digestWatchIndex--;)
                      try {
                        if (t = f[f.$$digestWatchIndex])
                          if (l = t.get, (i = l($)) === (o = t.last) || (t.eq ? U(i, o) : br(i) && br(o))) {
                            if (t === a) {
                              h = !1;
                              break t;
                            }
                          } else
                            h = !0, a = t, t.last = t.eq ? P(i, null) : i, u = t.fn, u(i, o === v ? i : o, $), 5 > g && (d = 4 - g, b[d] || (b[d] = []), b[d].push({
                              msg: k(t.exp) ? 'fn: ' + (t.exp.name || t.exp.toString()) : t.exp,
                              newVal: i,
                              oldVal: o
                            }));
                      } catch (t) {
                        r(t);
                      }
                  if (!(f = $.$$watchersCount && $.$$childHead || $ !== this && $.$$nextSibling))
                    for (; $ !== this && !(f = $.$$nextSibling);)
                      $ = $.$parent;
                } while ($ = f);
              if ((h || C.length) && !g--)
                throw x.$$phase = null, n('infdig', e, b);
            } while (h || C.length);
            for (x.$$phase = null; A < S.length;)
              try {
                S[A++]();
              } catch (t) {
                r(t);
              }
            S.length = A = 0, c.$$checkUrlChange();
          },
          $destroy: function () {
            if (!this.$$destroyed) {
              var t = this.$parent;
              this.$broadcast('$destroy'), this.$$destroyed = !0, this === x && c.$$applicationDestroyed(), d(this, -this.$$watchersCount);
              for (var e in this.$$listenerCount)
                m(this, this.$$listenerCount[e], e);
              t && t.$$childHead === this && (t.$$childHead = this.$$nextSibling), t && t.$$childTail === this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = $, this.$on = this.$watch = this.$watchGroup = function () {
                return $;
              }, this.$$listeners = {}, this.$$nextSibling = null, f(this);
            }
          },
          $eval: function (t, e) {
            return u(t)(this, e);
          },
          $evalAsync: function (t, e) {
            x.$$phase || C.length || c.defer(function () {
              C.length && x.$digest();
            }), C.push({
              scope: this,
              fn: u(t),
              locals: e
            });
          },
          $$postDigest: function (t) {
            S.push(t);
          },
          $apply: function (t) {
            try {
              p('$apply');
              try {
                return this.$eval(t);
              } finally {
                x.$$phase = null;
              }
            } catch (t) {
              r(t);
            } finally {
              try {
                x.$digest();
              } catch (t) {
                throw r(t), t;
              }
            }
          },
          $applyAsync: function (t) {
            function e() {
              n.$eval(t);
            }
            var n = this;
            t && E.push(e), t = u(t), w();
          },
          $on: function (t, e) {
            var n = this.$$listeners[t];
            n || (this.$$listeners[t] = n = []), n.push(e);
            var r = this;
            do {
              r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++;
            } while (r = r.$parent);
            var i = this;
            return function () {
              var r = n.indexOf(e);
              -1 !== r && (n[r] = null, m(i, 1, t));
            };
          },
          $emit: function (t, e) {
            var n, i, o, a = [], s = this, u = !1, c = {
                name: t,
                targetScope: s,
                stopPropagation: function () {
                  u = !0;
                },
                preventDefault: function () {
                  c.defaultPrevented = !0;
                },
                defaultPrevented: !1
              }, l = _([c], arguments, 1);
            do {
              for (n = s.$$listeners[t] || a, c.currentScope = s, i = 0, o = n.length; i < o; i++)
                if (n[i])
                  try {
                    n[i].apply(null, l);
                  } catch (t) {
                    r(t);
                  }
                else
                  n.splice(i, 1), i--, o--;
              if (u)
                return c.currentScope = null, c;
              s = s.$parent;
            } while (s);
            return c.currentScope = null, c;
          },
          $broadcast: function (t, e) {
            var n = this, i = this, o = {
                name: t,
                targetScope: this,
                preventDefault: function () {
                  o.defaultPrevented = !0;
                },
                defaultPrevented: !1
              };
            if (!this.$$listenerCount[t])
              return o;
            for (var a, s, u = _([o], arguments, 1); n = i;) {
              for (o.currentScope = n, i = n.$$listeners[t] || [], a = 0, s = i.length; a < s; a++)
                if (i[a])
                  try {
                    i[a].apply(null, u);
                  } catch (t) {
                    r(t);
                  }
                else
                  i.splice(a, 1), a--, s--;
              if (!(i = n.$$listenerCount[t] && n.$$childHead || n !== this && n.$$nextSibling))
                for (; n !== this && !(i = n.$$nextSibling);)
                  n = n.$parent;
            }
            return o.currentScope = null, o;
          }
        };
        var x = new h(), C = x.$$asyncQueue = [], S = x.$$postDigestQueue = [], E = x.$$applyAsyncQueue = [], A = 0;
        return x;
      }
    ];
  }
  function tn() {
    var t = /^\s*(https?|ftp|mailto|tel|file):/, e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
    this.aHrefSanitizationWhitelist = function (e) {
      return y(e) ? (t = e, this) : t;
    }, this.imgSrcSanitizationWhitelist = function (t) {
      return y(t) ? (e = t, this) : e;
    }, this.$get = function () {
      return function (n, r) {
        var i, o = r ? e : t;
        return i = ln(n).href, '' === i || i.match(o) ? n : 'unsafe:' + i;
      };
    };
  }
  function en(t) {
    if ('self' === t)
      return t;
    if (x(t)) {
      if (-1 < t.indexOf('***'))
        throw _i('iwcard', t);
      return t = Sr(t).replace(/\\\*\\\*/g, '.*').replace(/\\\*/g, '[^:/.?&;]*'), new RegExp('^' + t + '$');
    }
    if (A(t))
      return new RegExp('^' + t.source + '$');
    throw _i('imatcher');
  }
  function nn(t) {
    var e = [];
    return y(t) && o(t, function (t) {
      e.push(en(t));
    }), e;
  }
  function rn() {
    this.SCE_CONTEXTS = Li;
    var t = ['self'], e = [];
    this.resourceUrlWhitelist = function (e) {
      return arguments.length && (t = nn(e)), t;
    }, this.resourceUrlBlacklist = function (t) {
      return arguments.length && (e = nn(t)), e;
    }, this.$get = [
      '$injector',
      function (n) {
        function r(t, e) {
          return 'self' === t ? fn(e) : !!t.exec(e.href);
        }
        function i(t) {
          var e = function (t) {
            this.$$unwrapTrustedValue = function () {
              return t;
            };
          };
          return t && (e.prototype = new t()), e.prototype.valueOf = function () {
            return this.$$unwrapTrustedValue();
          }, e.prototype.toString = function () {
            return this.$$unwrapTrustedValue().toString();
          }, e;
        }
        var o = function (t) {
          throw _i('unsafe');
        };
        n.has('$sanitize') && (o = n.get('$sanitize'));
        var a = i(), s = {};
        return s[Li.HTML] = i(a), s[Li.CSS] = i(a), s[Li.URL] = i(a), s[Li.JS] = i(a), s[Li.RESOURCE_URL] = i(s[Li.URL]), {
          trustAs: function (t, e) {
            var n = s.hasOwnProperty(t) ? s[t] : null;
            if (!n)
              throw _i('icontext', t, e);
            if (null === e || g(e) || '' === e)
              return e;
            if ('string' != typeof e)
              throw _i('itype', t);
            return new n(e);
          },
          getTrusted: function (n, i) {
            if (null === i || g(i) || '' === i)
              return i;
            var a = s.hasOwnProperty(n) ? s[n] : null;
            if (a && i instanceof a)
              return i.$$unwrapTrustedValue();
            if (n === Li.RESOURCE_URL) {
              var u, c, a = ln(i.toString()), l = !1;
              for (u = 0, c = t.length; u < c; u++)
                if (r(t[u], a)) {
                  l = !0;
                  break;
                }
              if (l)
                for (u = 0, c = e.length; u < c; u++)
                  if (r(e[u], a)) {
                    l = !1;
                    break;
                  }
              if (l)
                return i;
              throw _i('insecurl', i.toString());
            }
            if (n === Li.HTML)
              return o(i);
            throw _i('unsafe');
          },
          valueOf: function (t) {
            return t instanceof a ? t.$$unwrapTrustedValue() : t;
          }
        };
      }
    ];
  }
  function on() {
    var t = !0;
    this.enabled = function (e) {
      return arguments.length && (t = !!e), t;
    }, this.$get = [
      '$parse',
      '$sceDelegate',
      function (e, n) {
        if (t && 8 > rr)
          throw _i('iequirks');
        var r = ht(Li);
        r.isEnabled = function () {
          return t;
        }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, t || (r.trustAs = r.getTrusted = function (t, e) {
          return e;
        }, r.valueOf = d), r.parseAs = function (t, n) {
          var i = e(n);
          return i.literal && i.constant ? i : e(n, function (e) {
            return r.getTrusted(t, e);
          });
        };
        var i = r.parseAs, a = r.getTrusted, s = r.trustAs;
        return o(Li, function (t, e) {
          var n = lr(e);
          r[('parse_as_' + n).replace(qi, $t)] = function (e) {
            return i(t, e);
          }, r[('get_trusted_' + n).replace(qi, $t)] = function (e) {
            return a(t, e);
          }, r[('trust_as_' + n).replace(qi, $t)] = function (e) {
            return s(t, e);
          };
        }), r;
      }
    ];
  }
  function an() {
    this.$get = [
      '$window',
      '$document',
      function (t, e) {
        var n = {}, r = !((!t.nw || !t.nw.process) && t.chrome && (t.chrome.app && t.chrome.app.runtime || !t.chrome.app && t.chrome.runtime && t.chrome.runtime.id)) && t.history && t.history.pushState, i = h((/android (\d+)/.exec(lr((t.navigator || {}).userAgent)) || [])[1]), o = /Boxee/i.test((t.navigator || {}).userAgent), a = e[0] || {}, s = a.body && a.body.style, u = !1, c = !1;
        return s && (u = !!('transition' in s || 'webkitTransition' in s), c = !!('animation' in s || 'webkitAnimation' in s)), {
          history: !(!r || 4 > i || o),
          hasEvent: function (t) {
            if ('input' === t && rr)
              return !1;
            if (g(n[t])) {
              var e = a.createElement('div');
              n[t] = 'on' + t in e;
            }
            return n[t];
          },
          csp: Er(),
          transitions: u,
          animations: c,
          android: i
        };
      }
    ];
  }
  function sn() {
    var t;
    this.httpOptions = function (e) {
      return e ? (t = e, this) : t;
    }, this.$get = [
      '$exceptionHandler',
      '$templateCache',
      '$http',
      '$q',
      '$sce',
      function (e, n, r, i, o) {
        function a(s, u) {
          a.totalPendingRequests++, x(s) && !g(n.get(s)) || (s = o.getTrustedResourceUrl(s));
          var c = r.defaults && r.defaults.transformResponse;
          return wr(c) ? c = c.filter(function (t) {
            return t !== he;
          }) : c === he && (c = null), r.get(s, l({
            cache: n,
            transformResponse: c
          }, t)).finally(function () {
            a.totalPendingRequests--;
          }).then(function (t) {
            return n.put(s, t.data), t.data;
          }, function (t) {
            return u || (t = Fi('tpload', s, t.status, t.statusText), e(t)), i.reject(t);
          });
        }
        return a.totalPendingRequests = 0, a;
      }
    ];
  }
  function un() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$location',
      function (t, e, n) {
        return {
          findBindings: function (t, e, n) {
            t = t.getElementsByClassName('ng-binding');
            var r = [];
            return o(t, function (t) {
              var i = gr.element(t).data('$binding');
              i && o(i, function (i) {
                n ? new RegExp('(^|\\s)' + Sr(e) + '(\\s|\\||$)').test(i) && r.push(t) : -1 !== i.indexOf(e) && r.push(t);
              });
            }), r;
          },
          findModels: function (t, e, n) {
            for (var r = [
                  'ng-',
                  'data-ng-',
                  'ng\\:'
                ], i = 0; i < r.length; ++i) {
              var o = t.querySelectorAll('[' + r[i] + 'model' + (n ? '=' : '*=') + '"' + e + '"]');
              if (o.length)
                return o;
            }
          },
          getLocation: function () {
            return n.url();
          },
          setLocation: function (e) {
            e !== n.url() && (n.url(e), t.$digest());
          },
          whenStable: function (t) {
            e.notifyWhenNoOutstandingRequests(t);
          }
        };
      }
    ];
  }
  function cn() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$q',
      '$$q',
      '$exceptionHandler',
      function (t, e, n, r, i) {
        function o(o, s, u) {
          k(o) || (u = s, s = o, o = $);
          var c, l = hr.call(arguments, 3), f = y(u) && !u, h = (f ? r : n).defer(), p = h.promise;
          return c = e.defer(function () {
            try {
              h.resolve(o.apply(null, l));
            } catch (t) {
              h.reject(t), i(t);
            } finally {
              delete a[p.$$timeoutId];
            }
            f || t.$apply();
          }, s), p.$$timeoutId = c, a[c] = h, p;
        }
        var a = {};
        return o.cancel = function (t) {
          return !!(t && t.$$timeoutId in a) && (a[t.$$timeoutId].promise.$$state.pur = !0, a[t.$$timeoutId].reject('canceled'), delete a[t.$$timeoutId], e.defer.cancel(t.$$timeoutId));
        }, o;
      }
    ];
  }
  function ln(t) {
    return rr && (Bi.setAttribute('href', t), t = Bi.href), Bi.setAttribute('href', t), {
      href: Bi.href,
      protocol: Bi.protocol ? Bi.protocol.replace(/:$/, '') : '',
      host: Bi.host,
      search: Bi.search ? Bi.search.replace(/^\?/, '') : '',
      hash: Bi.hash ? Bi.hash.replace(/^#/, '') : '',
      hostname: Bi.hostname,
      port: Bi.port,
      pathname: '/' === Bi.pathname.charAt(0) ? Bi.pathname : '/' + Bi.pathname
    };
  }
  function fn(t) {
    return t = x(t) ? ln(t) : t, t.protocol === Hi.protocol && t.host === Hi.host;
  }
  function hn() {
    this.$get = m(t);
  }
  function pn(t) {
    function e(t) {
      try {
        return decodeURIComponent(t);
      } catch (e) {
        return t;
      }
    }
    var n = t[0] || {}, r = {}, i = '';
    return function () {
      var t, o, a, s, u;
      try {
        t = n.cookie || '';
      } catch (e) {
        t = '';
      }
      if (t !== i)
        for (i = t, t = i.split('; '), r = {}, a = 0; a < t.length; a++)
          o = t[a], 0 < (s = o.indexOf('=')) && (u = e(o.substring(0, s)), g(r[u]) && (r[u] = e(o.substring(s + 1))));
      return r;
    };
  }
  function $n() {
    this.$get = pn;
  }
  function dn(t) {
    function e(n, r) {
      if (b(n)) {
        var i = {};
        return o(n, function (t, n) {
          i[n] = e(n, t);
        }), i;
      }
      return t.factory(n + 'Filter', r);
    }
    this.register = e, this.$get = [
      '$injector',
      function (t) {
        return function (e) {
          return t.get(e + 'Filter');
        };
      }
    ], e('currency', bn), e('date', Tn), e('filter', mn), e('json', Nn), e('limitTo', In), e('lowercase', Yi), e('number', wn), e('orderBy', Dn), e('uppercase', Qi);
  }
  function mn() {
    return function (t, e, n, o) {
      if (!i(t)) {
        if (null == t)
          return t;
        throw r('filter')('notarray', t);
      }
      o = o || '$';
      var a;
      switch (yn(e)) {
      case 'function':
        break;
      case 'boolean':
      case 'null':
      case 'number':
      case 'string':
        a = !0;
      case 'object':
        e = vn(e, n, o, a);
        break;
      default:
        return t;
      }
      return Array.prototype.filter.call(t, e);
    };
  }
  function vn(t, e, n, r) {
    var i = b(t) && n in t;
    return !0 === e ? e = U : k(e) || (e = function (t, e) {
      return !g(t) && (null === t || null === e ? t === e : !(b(e) || b(t) && !v(t)) && (t = lr('' + t), e = lr('' + e), -1 !== t.indexOf(e)));
    }), function (o) {
      return i && !b(o) ? gn(o, t[n], e, n, !1) : gn(o, t, e, n, r);
    };
  }
  function gn(t, e, n, r, i, o) {
    var a = yn(t), s = yn(e);
    if ('string' === s && '!' === e.charAt(0))
      return !gn(t, e.substring(1), n, r, i);
    if (wr(t))
      return t.some(function (t) {
        return gn(t, e, n, r, i);
      });
    switch (a) {
    case 'object':
      var u;
      if (i) {
        for (u in t)
          if (u.charAt && '$' !== u.charAt(0) && gn(t[u], e, n, r, !0))
            return !0;
        return !o && gn(t, e, n, r, !1);
      }
      if ('object' === s) {
        for (u in e)
          if (o = e[u], !k(o) && !g(o) && (a = u === r, !gn(a ? t : t[u], o, n, r, a, a)))
            return !1;
        return !0;
      }
      return n(t, e);
    case 'function':
      return !1;
    default:
      return n(t, e);
    }
  }
  function yn(t) {
    return null === t ? 'null' : typeof t;
  }
  function bn(t) {
    var e = t.NUMBER_FORMATS;
    return function (t, n, r) {
      return g(n) && (n = e.CURRENCY_SYM), g(r) && (r = e.PATTERNS[1].maxFrac), null == t ? t : Sn(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, r).replace(/\u00A4/g, n);
    };
  }
  function wn(t) {
    var e = t.NUMBER_FORMATS;
    return function (t, n) {
      return null == t ? t : Sn(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n);
    };
  }
  function xn(t) {
    var e, n, r, i, o, a = 0;
    for (-1 < (n = t.indexOf(Wi)) && (t = t.replace(Wi, '')), 0 < (r = t.search(/e/i)) ? (0 > n && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : 0 > n && (n = t.length), r = 0; t.charAt(r) === Gi; r++);
    if (r === (o = t.length))
      e = [0], n = 1;
    else {
      for (o--; t.charAt(o) === Gi;)
        o--;
      for (n -= r, e = [], i = 0; r <= o; r++, i++)
        e[i] = +t.charAt(r);
    }
    return n > zi && (e = e.splice(0, zi - 1), a = n - 1, n = 1), {
      d: e,
      e: a,
      i: n
    };
  }
  function Cn(t, e, n, r) {
    var i = t.d, o = i.length - t.i;
    if (e = g(e) ? Math.min(Math.max(n, o), r) : +e, n = e + t.i, r = i[n], 0 < n) {
      i.splice(Math.max(t.i, n));
      for (var a = n; a < i.length; a++)
        i[a] = 0;
    } else
      for (o = Math.max(0, o), t.i = 1, i.length = Math.max(1, n = e + 1), i[0] = 0, a = 1; a < n; a++)
        i[a] = 0;
    if (5 <= r)
      if (0 > n - 1) {
        for (r = 0; r > n; r--)
          i.unshift(0), t.i++;
        i.unshift(1), t.i++;
      } else
        i[n - 1]++;
    for (; o < Math.max(0, e); o++)
      i.push(0);
    (e = i.reduceRight(function (t, e, n, r) {
      return e += t, r[n] = e % 10, Math.floor(e / 10);
    }, 0)) && (i.unshift(e), t.i++);
  }
  function Sn(t, e, n, r, i) {
    if (!x(t) && !C(t) || isNaN(t))
      return '';
    var o = !isFinite(t), a = !1, s = Math.abs(t) + '', u = '';
    if (o)
      u = '\u221E';
    else {
      for (a = xn(s), Cn(a, i, e.minFrac, e.maxFrac), u = a.d, s = a.i, i = a.e, o = [], a = u.reduce(function (t, e) {
          return t && !e;
        }, !0); 0 > s;)
        u.unshift(0), s++;
      for (0 < s ? o = u.splice(s, u.length) : (o = u, u = [0]), s = [], u.length >= e.lgSize && s.unshift(u.splice(-e.lgSize, u.length).join('')); u.length > e.gSize;)
        s.unshift(u.splice(-e.gSize, u.length).join(''));
      u.length && s.unshift(u.join('')), u = s.join(n), o.length && (u += r + o.join('')), i && (u += 'e+' + i);
    }
    return 0 > t && !a ? e.negPre + u + e.negSuf : e.posPre + u + e.posSuf;
  }
  function En(t, e, n, r) {
    var i = '';
    for ((0 > t || r && 0 >= t) && (r ? t = 1 - t : (t = -t, i = '-')), t = '' + t; t.length < e;)
      t = Gi + t;
    return n && (t = t.substr(t.length - e)), i + t;
  }
  function kn(t, e, n, r, i) {
    return n = n || 0, function (o) {
      return o = o['get' + t](), (0 < n || o > -n) && (o += n), 0 === o && -12 === n && (o = 12), En(o, e, r, i);
    };
  }
  function An(t, e, n) {
    return function (r, i) {
      var o = r['get' + t]();
      return i[fr((n ? 'STANDALONE' : '') + (e ? 'SHORT' : '') + t)][o];
    };
  }
  function On(t) {
    var e = new Date(t, 0, 1).getDay();
    return new Date(t, 0, (4 >= e ? 5 : 12) - e);
  }
  function Mn(t) {
    return function (e) {
      var n = On(e.getFullYear());
      return e = +new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay())) - +n, e = 1 + Math.round(e / 604800000), En(e, t);
    };
  }
  function Vn(t, e) {
    return 0 >= t.getFullYear() ? e.ERAS[0] : e.ERAS[1];
  }
  function Tn(t) {
    function e(t) {
      var e;
      if (e = t.match(n)) {
        t = new Date(0);
        var r = 0, i = 0, o = e[8] ? t.setUTCFullYear : t.setFullYear, a = e[8] ? t.setUTCHours : t.setHours;
        e[9] && (r = h(e[9] + e[10]), i = h(e[9] + e[11])), o.call(t, h(e[1]), h(e[2]) - 1, h(e[3])), r = h(e[4] || 0) - r, i = h(e[5] || 0) - i, o = h(e[6] || 0), e = Math.round(1000 * parseFloat('0.' + (e[7] || 0))), a.call(t, r, i, o, e);
      }
      return t;
    }
    var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (n, r, i) {
      var a, s, u = '', c = [];
      if (r = r || 'mediumDate', r = t.DATETIME_FORMATS[r] || r, x(n) && (n = Zi.test(n) ? h(n) : e(n)), C(n) && (n = new Date(n)), !S(n) || !isFinite(n.getTime()))
        return n;
      for (; r;)
        (s = Ji.exec(r)) ? (c = _(c, s, 1), r = c.pop()) : (c.push(r), r = null);
      var l = n.getTimezoneOffset();
      return i && (l = H(i, l), n = z(n, i, !0)), o(c, function (e) {
        a = Ki[e], u += a ? a(n, t.DATETIME_FORMATS, l) : '\'\'' === e ? '\'' : e.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
      }), u;
    };
  }
  function Nn() {
    return function (t, e) {
      return g(e) && (e = 2), F(t, e);
    };
  }
  function In() {
    return function (t, e, n) {
      return e = 1 / 0 === Math.abs(Number(e)) ? Number(e) : h(e), br(e) ? t : (C(t) && (t = t.toString()), i(t) ? (n = !n || isNaN(n) ? 0 : h(n), n = 0 > n ? Math.max(0, t.length + n) : n, 0 <= e ? jn(t, n, n + e) : 0 === n ? jn(t, e, t.length) : jn(t, Math.max(0, n + e), n)) : t);
    };
  }
  function jn(t, e, n) {
    return x(t) ? t.slice(e, n) : hr.call(t, e, n);
  }
  function Dn(t) {
    function e(e) {
      return e.map(function (e) {
        var n = 1, r = d;
        if (k(e))
          r = e;
        else if (x(e) && ('+' !== e.charAt(0) && '-' !== e.charAt(0) || (n = '-' === e.charAt(0) ? -1 : 1, e = e.substring(1)), '' !== e && (r = t(e), r.constant)))
          var i = r(), r = function (t) {
              return t[i];
            };
        return {
          get: r,
          descending: n
        };
      });
    }
    function n(t) {
      switch (typeof t) {
      case 'number':
      case 'boolean':
      case 'string':
        return !0;
      default:
        return !1;
      }
    }
    function o(t, e) {
      var n = 0, r = t.type, i = e.type;
      if (r === i) {
        var i = t.value, o = e.value;
        'string' === r ? (i = i.toLowerCase(), o = o.toLowerCase()) : 'object' === r && (b(i) && (i = t.index), b(o) && (o = e.index)), i !== o && (n = i < o ? -1 : 1);
      } else
        n = r < i ? -1 : 1;
      return n;
    }
    return function (t, a, s, u) {
      if (null == t)
        return t;
      if (!i(t))
        throw r('orderBy')('notarray', t);
      wr(a) || (a = [a]), 0 === a.length && (a = ['+']);
      var c = e(a), l = s ? -1 : 1, f = k(u) ? u : o;
      return t = Array.prototype.map.call(t, function (t, e) {
        return {
          value: t,
          tieBreaker: {
            value: e,
            type: 'number',
            index: e
          },
          predicateValues: c.map(function (r) {
            var i = r.get(t);
            return r = typeof i, null === i ? (r = 'string', i = 'null') : 'object' === r && (k(i.valueOf) && (i = i.valueOf(), n(i)) || v(i) && (i = i.toString(), n(i))), {
              value: i,
              type: r,
              index: e
            };
          })
        };
      }), t.sort(function (t, e) {
        for (var n = 0, r = c.length; n < r; n++) {
          var i = f(t.predicateValues[n], e.predicateValues[n]);
          if (i)
            return i * c[n].descending * l;
        }
        return (f(t.tieBreaker, e.tieBreaker) || o(t.tieBreaker, e.tieBreaker)) * l;
      }), t = t.map(function (t) {
        return t.value;
      });
    };
  }
  function Pn(t) {
    return k(t) && (t = { link: t }), t.restrict = t.restrict || 'AC', m(t);
  }
  function Rn(t, e, n, r, i) {
    this.$$controls = [], this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = i(e.name || e.ngForm || '')(n), this.$dirty = !1, this.$valid = this.$pristine = !0, this.$submitted = this.$invalid = !1, this.$$parentForm = eo, this.$$element = t, this.$$animate = r, Un(this);
  }
  function Un(t) {
    t.$$classCache = {}, t.$$classCache[Ro] = !(t.$$classCache[Po] = t.$$element.hasClass(Po));
  }
  function _n(t) {
    function e(t, e, n) {
      n && !t.$$classCache[e] ? (t.$$animate.addClass(t.$$element, e), t.$$classCache[e] = !0) : !n && t.$$classCache[e] && (t.$$animate.removeClass(t.$$element, e), t.$$classCache[e] = !1);
    }
    function n(t, n, r) {
      n = n ? '-' + rt(n, '-') : '', e(t, Po + n, !0 === r), e(t, Ro + n, !1 === r);
    }
    var r = t.set, i = t.unset;
    t.clazz.prototype.$setValidity = function (t, o, a) {
      g(o) ? (this.$pending || (this.$pending = {}), r(this.$pending, t, a)) : (this.$pending && i(this.$pending, t, a), Ln(this.$pending) && (this.$pending = void 0)), V(o) ? o ? (i(this.$error, t, a), r(this.$$success, t, a)) : (r(this.$error, t, a), i(this.$$success, t, a)) : (i(this.$error, t, a), i(this.$$success, t, a)), this.$pending ? (e(this, 'ng-pending', !0), this.$valid = this.$invalid = void 0, n(this, '', null)) : (e(this, 'ng-pending', !1), this.$valid = Ln(this.$error), this.$invalid = !this.$valid, n(this, '', this.$valid)), o = this.$pending && this.$pending[t] ? void 0 : !this.$error[t] && (!!this.$$success[t] || null), n(this, t, o), this.$$parentForm.$setValidity(t, o, this);
    };
  }
  function Ln(t) {
    if (t)
      for (var e in t)
        if (t.hasOwnProperty(e))
          return !1;
    return !0;
  }
  function qn(t) {
    t.$formatters.push(function (e) {
      return t.$isEmpty(e) ? e : e.toString();
    });
  }
  function Fn(t, e, n, r, i, o) {
    var a = lr(e[0].type);
    if (!i.android) {
      var s = !1;
      e.on('compositionstart', function () {
        s = !0;
      }), e.on('compositionend', function () {
        s = !1, c();
      });
    }
    var u, c = function (t) {
        if (u && (o.defer.cancel(u), u = null), !s) {
          var i = e.val();
          t = t && t.type, 'password' === a || n.ngTrim && 'false' === n.ngTrim || (i = Cr(i)), (r.$viewValue !== i || '' === i && r.$$hasNativeValidators) && r.$setViewValue(i, t);
        }
      };
    if (i.hasEvent('input'))
      e.on('input', c);
    else {
      var l = function (t, e, n) {
        u || (u = o.defer(function () {
          u = null, e && e.value === n || c(t);
        }));
      };
      e.on('keydown', function (t) {
        var e = t.keyCode;
        91 === e || 15 < e && 19 > e || 37 <= e && 40 >= e || l(t, this, this.value);
      }), i.hasEvent('paste') && e.on('paste cut', l);
    }
    e.on('change', c), $o[a] && r.$$hasNativeValidators && a === n.type && e.on('keydown wheel mousedown', function (t) {
      if (!u) {
        var e = this.validity, n = e.badInput, r = e.typeMismatch;
        u = o.defer(function () {
          u = null, e.badInput === n && e.typeMismatch === r || c(t);
        });
      }
    }), r.$render = function () {
      var t = r.$isEmpty(r.$viewValue) ? '' : r.$viewValue;
      e.val() !== t && e.val(t);
    };
  }
  function Bn(t, e) {
    return function (n, r) {
      var i, a;
      if (S(n))
        return n;
      if (x(n)) {
        if ('"' === n.charAt(0) && '"' === n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), oo.test(n))
          return new Date(n);
        if (t.lastIndex = 0, i = t.exec(n))
          return i.shift(), a = r ? {
            yyyy: r.getFullYear(),
            MM: r.getMonth() + 1,
            dd: r.getDate(),
            HH: r.getHours(),
            mm: r.getMinutes(),
            ss: r.getSeconds(),
            sss: r.getMilliseconds() / 1000
          } : {
            yyyy: 1970,
            MM: 1,
            dd: 1,
            HH: 0,
            mm: 0,
            ss: 0,
            sss: 0
          }, o(i, function (t, n) {
            n < e.length && (a[e[n]] = +t);
          }), new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1000 * a.sss || 0);
      }
      return NaN;
    };
  }
  function Hn(t, e, n, r) {
    return function (i, o, a, s, u, c, l) {
      function f(t) {
        return t && !(t.getTime && t.getTime() !== t.getTime());
      }
      function h(t) {
        return y(t) && !S(t) ? n(t) || void 0 : t;
      }
      zn(i, o, a, s), Fn(i, o, a, s, u, c);
      var p, $ = s && s.$options.getOption('timezone');
      if (s.$$parserName = t, s.$parsers.push(function (t) {
          return s.$isEmpty(t) ? null : e.test(t) ? (t = n(t, p), $ && (t = z(t, $)), t) : void 0;
        }), s.$formatters.push(function (t) {
          if (t && !S(t))
            throw Lo('datefmt', t);
          return f(t) ? ((p = t) && $ && (p = z(p, $, !0)), l('date')(t, r, $)) : (p = null, '');
        }), y(a.min) || a.ngMin) {
        var d;
        s.$validators.min = function (t) {
          return !f(t) || g(d) || n(t) >= d;
        }, a.$observe('min', function (t) {
          d = h(t), s.$validate();
        });
      }
      if (y(a.max) || a.ngMax) {
        var m;
        s.$validators.max = function (t) {
          return !f(t) || g(m) || n(t) <= m;
        }, a.$observe('max', function (t) {
          m = h(t), s.$validate();
        });
      }
    };
  }
  function zn(t, e, n, r) {
    (r.$$hasNativeValidators = b(e[0].validity)) && r.$parsers.push(function (t) {
      var n = e.prop('validity') || {};
      return n.badInput || n.typeMismatch ? void 0 : t;
    });
  }
  function Wn(t) {
    t.$$parserName = 'number', t.$parsers.push(function (e) {
      return t.$isEmpty(e) ? null : uo.test(e) ? parseFloat(e) : void 0;
    }), t.$formatters.push(function (e) {
      if (!t.$isEmpty(e)) {
        if (!C(e))
          throw Lo('numfmt', e);
        e = e.toString();
      }
      return e;
    });
  }
  function Gn(t) {
    return y(t) && !C(t) && (t = parseFloat(t)), br(t) ? void 0 : t;
  }
  function Kn(t) {
    var e = t.toString(), n = e.indexOf('.');
    return -1 === n ? -1 < t && 1 > t && (t = /e-(\d+)$/.exec(e)) ? Number(t[1]) : 0 : e.length - n - 1;
  }
  function Jn(t, e, n) {
    t = Number(t);
    var r = (0 | t) !== t, i = (0 | e) !== e, o = (0 | n) !== n;
    if (r || i || o) {
      var a = r ? Kn(t) : 0, s = i ? Kn(e) : 0, u = o ? Kn(n) : 0, a = Math.max(a, s, u), a = Math.pow(10, a);
      t *= a, e *= a, n *= a, r && (t = Math.round(t)), i && (e = Math.round(e)), o && (n = Math.round(n));
    }
    return 0 == (t - e) % n;
  }
  function Zn(t, e, n, r, i) {
    if (y(r)) {
      if (t = t(r), !t.constant)
        throw Lo('constexpr', n, r);
      return t(e);
    }
    return i;
  }
  function Yn(t, e) {
    function n(t, e) {
      if (!t || !t.length)
        return [];
      if (!e || !e.length)
        return t;
      var n = [], r = 0;
      t:
        for (; r < t.length; r++) {
          for (var i = t[r], o = 0; o < e.length; o++)
            if (i === e[o])
              continue t;
          n.push(i);
        }
      return n;
    }
    function r(t) {
      var e = t;
      return wr(t) ? e = t.map(r).join(' ') : b(t) && (e = Object.keys(t).filter(function (e) {
        return t[e];
      }).join(' ')), e;
    }
    function i(t) {
      var e = t;
      if (wr(t))
        e = t.map(i);
      else if (b(t)) {
        var n = !1, e = Object.keys(t).filter(function (e) {
            return e = t[e], !n && g(e) && (n = !0), e;
          });
        n && e.push(void 0);
      }
      return e;
    }
    t = 'ngClass' + t;
    var a;
    return [
      '$parse',
      function (s) {
        return {
          restrict: 'AC',
          link: function (u, c, l) {
            function f(t, e) {
              var n = [];
              return o(t, function (t) {
                (0 < e || y[t]) && (y[t] = (y[t] || 0) + e, y[t] === +(0 < e) && n.push(t));
              }), n.join(' ');
            }
            function h(t) {
              if (t === e) {
                var n = d, n = f(n && n.split(' '), 1);
                l.$addClass(n);
              } else
                n = d, n = f(n && n.split(' '), -1), l.$removeClass(n);
              b = t;
            }
            function p(t) {
              (t = r(t)) !== d && $(t);
            }
            function $(t) {
              if (b === e) {
                var r = d && d.split(' '), i = t && t.split(' '), o = n(r, i), r = n(i, r), o = f(o, -1), r = f(r, 1);
                l.$addClass(r), l.$removeClass(o);
              }
              d = t;
            }
            var d, m = l[t].trim(), v = ':' === m.charAt(0) && ':' === m.charAt(1), m = s(m, v ? i : r), g = v ? p : $, y = c.data('$classCounts'), b = !0;
            y || (y = ct(), c.data('$classCounts', y)), 'ngClass' !== t && (a || (a = s('$index', function (t) {
              return 1 & t;
            })), u.$watch(a, h)), u.$watch(m, g, v);
          }
        };
      }
    ];
  }
  function Qn(t, e, n, r, i, o, a, s, u) {
    this.$modelValue = this.$viewValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = u(n.name || '', !1)(t), this.$$parentForm = eo, this.$options = qo, this.$$parsedNgModel = i(n.ngModel), this.$$parsedNgModelAssign = this.$$parsedNgModel.assign, this.$$ngModelGet = this.$$parsedNgModel, this.$$ngModelSet = this.$$parsedNgModelAssign, this.$$pendingDebounce = null, this.$$parserValid = void 0, this.$$currentValidationRunId = 0, Object.defineProperty(this, '$$scope', { value: t }), this.$$attr = n, this.$$element = r, this.$$animate = o, this.$$timeout = a, this.$$parse = i, this.$$q = s, this.$$exceptionHandler = e, Un(this), Xn(this);
  }
  function Xn(t) {
    t.$$scope.$watch(function (e) {
      if ((e = t.$$ngModelGet(e)) !== t.$modelValue && (t.$modelValue === t.$modelValue || e === e)) {
        t.$modelValue = t.$$rawModelValue = e, t.$$parserValid = void 0;
        for (var n = t.$formatters, r = n.length, i = e; r--;)
          i = n[r](i);
        t.$viewValue !== i && (t.$$updateEmptyClasses(i), t.$viewValue = t.$$lastCommittedViewValue = i, t.$render(), t.$$runValidators(t.$modelValue, t.$viewValue, $));
      }
      return e;
    });
  }
  function tr(t) {
    this.$$options = t;
  }
  function er(t, e) {
    o(e, function (e, n) {
      y(t[n]) || (t[n] = e);
    });
  }
  function nr(t, e) {
    t.prop('selected', e), t.attr('selected', e);
  }
  var rr, ir, or, ar, sr = { objectMaxDepth: 5 }, ur = /^\/(.+)\/([a-z]*)$/, cr = Object.prototype.hasOwnProperty, lr = function (t) {
      return x(t) ? t.toLowerCase() : t;
    }, fr = function (t) {
      return x(t) ? t.toUpperCase() : t;
    }, hr = [].slice, pr = [].splice, $r = [].push, dr = Object.prototype.toString, mr = Object.getPrototypeOf, vr = r('ng'), gr = t.angular || (t.angular = {}), yr = 0;
  rr = t.document.documentMode;
  var br = Number.isNaN || function (t) {
    return t !== t;
  };
  $.$inject = [], d.$inject = [];
  var wr = Array.isArray, xr = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/, Cr = function (t) {
      return x(t) ? t.trim() : t;
    }, Sr = function (t) {
      return t.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
    }, Er = function () {
      if (!y(Er.rules)) {
        var e = t.document.querySelector('[ng-csp]') || t.document.querySelector('[data-ng-csp]');
        if (e) {
          var n = e.getAttribute('ng-csp') || e.getAttribute('data-ng-csp');
          Er.rules = {
            noUnsafeEval: !n || -1 !== n.indexOf('no-unsafe-eval'),
            noInlineStyle: !n || -1 !== n.indexOf('no-inline-style')
          };
        } else {
          e = Er;
          try {
            new Function(''), n = !1;
          } catch (t) {
            n = !0;
          }
          e.rules = {
            noUnsafeEval: n,
            noInlineStyle: !1
          };
        }
      }
      return Er.rules;
    }, kr = function () {
      if (y(kr.name_))
        return kr.name_;
      var e, n, r, i, o = Or.length;
      for (n = 0; n < o; ++n)
        if (r = Or[n], e = t.document.querySelector('[' + r.replace(':', '\\:') + 'jq]')) {
          i = e.getAttribute(r + 'jq');
          break;
        }
      return kr.name_ = i;
    }, Ar = /:/g, Or = [
      'ng-',
      'data-ng-',
      'ng:',
      'x-ng-'
    ], Mr = function (e) {
      var n = e.currentScript;
      return !n || (n instanceof t.HTMLScriptElement || n instanceof t.SVGScriptElement) && (n = n.attributes, [
        n.getNamedItem('src'),
        n.getNamedItem('href'),
        n.getNamedItem('xlink:href')
      ].every(function (t) {
        if (!t)
          return !0;
        if (!t.value)
          return !1;
        var n = e.createElement('a');
        if (n.href = t.value, e.location.origin === n.origin)
          return !0;
        switch (n.protocol) {
        case 'http:':
        case 'https:':
        case 'ftp:':
        case 'blob:':
        case 'file:':
        case 'data:':
          return !0;
        default:
          return !1;
        }
      }));
    }(t.document), Vr = /[A-Z]/g, Tr = !1, Nr = 3, Ir = {
      full: '1.6.5',
      major: 1,
      minor: 6,
      dot: 5,
      codeName: 'toffee-salinization'
    };
  gt.expando = 'ng339';
  var jr = gt.cache = {}, Dr = 1;
  gt._data = function (t) {
    return this.cache[t[this.expando]] || {};
  };
  var Pr = /-([a-z])/g, Rr = /^-ms-/, Ur = {
      mouseleave: 'mouseout',
      mouseenter: 'mouseover'
    }, _r = r('jqLite'), Lr = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, qr = /<|&#?\w+;/, Fr = /<([\w:-]+)/, Br = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Hr = {
      option: [
        1,
        '<select multiple="multiple">',
        '</select>'
      ],
      thead: [
        1,
        '<table>',
        '</table>'
      ],
      col: [
        2,
        '<table><colgroup>',
        '</colgroup></table>'
      ],
      tr: [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      td: [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      _default: [
        0,
        '',
        ''
      ]
    };
  Hr.optgroup = Hr.option, Hr.tbody = Hr.tfoot = Hr.colgroup = Hr.caption = Hr.thead, Hr.th = Hr.td;
  var zr = t.Node.prototype.contains || function (t) {
      return !!(16 & this.compareDocumentPosition(t));
    }, Wr = gt.prototype = {
      ready: jt,
      toString: function () {
        var t = [];
        return o(this, function (e) {
          t.push('' + e);
        }), '[' + t.join(', ') + ']';
      },
      eq: function (t) {
        return ir(0 <= t ? this[t] : this[this.length + t]);
      },
      length: 0,
      push: $r,
      sort: [].sort,
      splice: [].splice
    }, Gr = {};
  o('multiple selected checked disabled readOnly required open'.split(' '), function (t) {
    Gr[lr(t)] = t;
  });
  var Kr = {};
  o('input select option textarea button form details'.split(' '), function (t) {
    Kr[t] = !0;
  });
  var Jr = {
    ngMinlength: 'minlength',
    ngMaxlength: 'maxlength',
    ngMin: 'min',
    ngMax: 'max',
    ngPattern: 'pattern',
    ngStep: 'step'
  };
  o({
    data: St,
    removeData: xt,
    hasData: function (t) {
      for (var e in jr[t.ng339])
        return !0;
      return !1;
    },
    cleanData: function (t) {
      for (var e = 0, n = t.length; e < n; e++)
        xt(t[e]);
    }
  }, function (t, e) {
    gt[e] = t;
  }), o({
    data: St,
    inheritedData: Vt,
    scope: function (t) {
      return ir.data(t, '$scope') || Vt(t.parentNode || t, [
        '$isolateScope',
        '$scope'
      ]);
    },
    isolateScope: function (t) {
      return ir.data(t, '$isolateScope') || ir.data(t, '$isolateScopeNoTemplate');
    },
    controller: Mt,
    injector: function (t) {
      return Vt(t, '$injector');
    },
    removeAttr: function (t, e) {
      t.removeAttribute(e);
    },
    hasClass: Et,
    css: function (t, e, n) {
      if (e = dt(e.replace(Rr, 'ms-')), !y(n))
        return t.style[e];
      t.style[e] = n;
    },
    attr: function (t, e, n) {
      var r = t.nodeType;
      if (r !== Nr && 2 !== r && 8 !== r && t.getAttribute) {
        var r = lr(e), i = Gr[r];
        if (!y(n))
          return t = t.getAttribute(e), i && null !== t && (t = r), null === t ? void 0 : t;
        null === n || !1 === n && i ? t.removeAttribute(e) : t.setAttribute(e, i ? r : n);
      }
    },
    prop: function (t, e, n) {
      if (!y(n))
        return t[e];
      t[e] = n;
    },
    text: function () {
      function t(t, e) {
        if (g(e)) {
          var n = t.nodeType;
          return 1 === n || n === Nr ? t.textContent : '';
        }
        t.textContent = e;
      }
      return t.$dv = '', t;
    }(),
    val: function (t, e) {
      if (g(e)) {
        if (t.multiple && 'select' === j(t)) {
          var n = [];
          return o(t.options, function (t) {
            t.selected && n.push(t.value || t.text);
          }), n;
        }
        return t.value;
      }
      t.value = e;
    },
    html: function (t, e) {
      if (g(e))
        return t.innerHTML;
      bt(t, !0), t.innerHTML = e;
    },
    empty: Tt
  }, function (t, e) {
    gt.prototype[e] = function (e, n) {
      var r, i, o = this.length;
      if (t !== Tt && g(2 === t.length && t !== Et && t !== Mt ? e : n)) {
        if (b(e)) {
          for (r = 0; r < o; r++)
            if (t === St)
              t(this[r], e);
            else
              for (i in e)
                t(this[r], i, e[i]);
          return this;
        }
        for (r = t.$dv, o = g(r) ? Math.min(o, 1) : o, i = 0; i < o; i++) {
          var a = t(this[i], e, n);
          r = r ? r + a : a;
        }
        return r;
      }
      for (r = 0; r < o; r++)
        t(this[r], e, n);
      return this;
    };
  }), o({
    removeData: xt,
    on: function (t, e, n, r) {
      if (y(r))
        throw _r('onargs');
      if (mt(t)) {
        r = Ct(t, !0);
        var i = r.events, o = r.handle;
        o || (o = r.handle = Pt(t, i)), r = 0 <= e.indexOf(' ') ? e.split(' ') : [e];
        for (var a = r.length, s = function (e, r, a) {
              var s = i[e];
              s || (s = i[e] = [], s.specialHandlerWrapper = r, '$destroy' === e || a || t.addEventListener(e, o)), s.push(n);
            }; a--;)
          e = r[a], Ur[e] ? (s(Ur[e], Ut), s(e, void 0, !0)) : s(e);
      }
    },
    off: wt,
    one: function (t, e, n) {
      t = ir(t), t.on(e, function r() {
        t.off(e, n), t.off(e, r);
      }), t.on(e, n);
    },
    replaceWith: function (t, e) {
      var n, r = t.parentNode;
      bt(t), o(new gt(e), function (e) {
        n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), n = e;
      });
    },
    children: function (t) {
      var e = [];
      return o(t.childNodes, function (t) {
        1 === t.nodeType && e.push(t);
      }), e;
    },
    contents: function (t) {
      return t.contentDocument || t.childNodes || [];
    },
    append: function (t, e) {
      var n = t.nodeType;
      if (1 === n || 11 === n) {
        e = new gt(e);
        for (var n = 0, r = e.length; n < r; n++)
          t.appendChild(e[n]);
      }
    },
    prepend: function (t, e) {
      if (1 === t.nodeType) {
        var n = t.firstChild;
        o(new gt(e), function (e) {
          t.insertBefore(e, n);
        });
      }
    },
    wrap: function (t, e) {
      var n = ir(e).eq(0).clone()[0], r = t.parentNode;
      r && r.replaceChild(n, t), n.appendChild(t);
    },
    remove: Nt,
    detach: function (t) {
      Nt(t, !0);
    },
    after: function (t, e) {
      var n = t, r = t.parentNode;
      if (r) {
        e = new gt(e);
        for (var i = 0, o = e.length; i < o; i++) {
          var a = e[i];
          r.insertBefore(a, n.nextSibling), n = a;
        }
      }
    },
    addClass: At,
    removeClass: kt,
    toggleClass: function (t, e, n) {
      e && o(e.split(' '), function (e) {
        var r = n;
        g(r) && (r = !Et(t, e)), (r ? At : kt)(t, e);
      });
    },
    parent: function (t) {
      return (t = t.parentNode) && 11 !== t.nodeType ? t : null;
    },
    next: function (t) {
      return t.nextElementSibling;
    },
    find: function (t, e) {
      return t.getElementsByTagName ? t.getElementsByTagName(e) : [];
    },
    clone: yt,
    triggerHandler: function (t, e, n) {
      var r, i, a = e.type || e, s = Ct(t);
      (s = (s = s && s.events) && s[a]) && (r = {
        preventDefault: function () {
          this.defaultPrevented = !0;
        },
        isDefaultPrevented: function () {
          return !0 === this.defaultPrevented;
        },
        stopImmediatePropagation: function () {
          this.immediatePropagationStopped = !0;
        },
        isImmediatePropagationStopped: function () {
          return !0 === this.immediatePropagationStopped;
        },
        stopPropagation: $,
        type: a,
        target: t
      }, e.type && (r = l(r, e)), e = ht(s), i = n ? [r].concat(n) : [r], o(e, function (e) {
        r.isImmediatePropagationStopped() || e.apply(t, i);
      }));
    }
  }, function (t, e) {
    gt.prototype[e] = function (e, n, r) {
      for (var i, o = 0, a = this.length; o < a; o++)
        g(i) ? (i = t(this[o], e, n, r), y(i) && (i = ir(i))) : Ot(i, t(this[o], e, n, r));
      return y(i) ? i : this;
    };
  }), gt.prototype.bind = gt.prototype.on, gt.prototype.unbind = gt.prototype.off;
  var Zr = Object.create(null);
  qt.prototype = {
    _idx: function (t) {
      return t === this._lastKey ? this._lastIndex : (this._lastKey = t, this._lastIndex = this._keys.indexOf(t));
    },
    _transformKey: function (t) {
      return br(t) ? Zr : t;
    },
    get: function (t) {
      if (t = this._transformKey(t), -1 !== (t = this._idx(t)))
        return this._values[t];
    },
    set: function (t, e) {
      t = this._transformKey(t);
      var n = this._idx(t);
      -1 === n && (n = this._lastIndex = this._keys.length), this._keys[n] = t, this._values[n] = e;
    },
    delete: function (t) {
      return t = this._transformKey(t), -1 !== (t = this._idx(t)) && (this._keys.splice(t, 1), this._values.splice(t, 1), this._lastKey = NaN, this._lastIndex = -1, !0);
    }
  };
  var Yr = qt, Qr = [function () {
        this.$get = [function () {
            return Yr;
          }];
      }], Xr = /^([^(]+?)=>/, ti = /^[^(]*\(\s*([^)]*)\)/m, ei = /,/, ni = /^\s*(_?)(\S+?)\1\s*$/, ri = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, ii = r('$injector');
  Ht.$$annotate = function (t, e, n) {
    var r;
    if ('function' == typeof t) {
      if (!(r = t.$inject)) {
        if (r = [], t.length) {
          if (e)
            throw x(n) && n || (n = t.name || Bt(t)), ii('strictdi', n);
          e = Ft(t), o(e[1].split(ei), function (t) {
            t.replace(ni, function (t, e, n) {
              r.push(n);
            });
          });
        }
        t.$inject = r;
      }
    } else
      wr(t) ? (e = t.length - 1, ot(t[e], 'fn'), r = t.slice(0, e)) : ot(t, 'fn', !0);
    return r;
  };
  var oi = r('$animate'), ai = function () {
      this.$get = $;
    }, si = function () {
      var t = new Yr(), e = [];
      this.$get = [
        '$$AnimateRunner',
        '$rootScope',
        function (n, r) {
          function i(t, e, n) {
            var r = !1;
            return e && (e = x(e) ? e.split(' ') : wr(e) ? e : [], o(e, function (e) {
              e && (r = !0, t[e] = n);
            })), r;
          }
          function a() {
            o(e, function (e) {
              var n = t.get(e);
              if (n) {
                var r = Gt(e.attr('class')), i = '', a = '';
                o(n, function (t, e) {
                  t !== !!r[e] && (t ? i += (i.length ? ' ' : '') + e : a += (a.length ? ' ' : '') + e);
                }), o(e, function (t) {
                  i && At(t, i), a && kt(t, a);
                }), t.delete(e);
              }
            }), e.length = 0;
          }
          return {
            enabled: $,
            on: $,
            off: $,
            pin: $,
            push: function (o, s, u, c) {
              return c && c(), u = u || {}, u.from && o.css(u.from), u.to && o.css(u.to), (u.addClass || u.removeClass) && (s = u.addClass, c = u.removeClass, u = t.get(o) || {}, s = i(u, s, !0), c = i(u, c, !1), (s || c) && (t.set(o, u), e.push(o), 1 === e.length && r.$$postDigest(a))), o = new n(), o.complete(), o;
            }
          };
        }
      ];
    }, ui = [
      '$provide',
      function (t) {
        var e = this, n = null, r = null;
        this.$$registeredAnimations = Object.create(null), this.register = function (n, r) {
          if (n && '.' !== n.charAt(0))
            throw oi('notcsel', n);
          var i = n + '-animation';
          e.$$registeredAnimations[n.substr(1)] = i, t.factory(i, r);
        }, this.customFilter = function (t) {
          return 1 === arguments.length && (r = k(t) ? t : null), r;
        }, this.classNameFilter = function (t) {
          if (1 === arguments.length && (n = t instanceof RegExp ? t : null) && /[(\s|\/)]ng-animate[(\s|\/)]/.test(n.toString()))
            throw n = null, oi('nongcls', 'ng-animate');
          return n;
        }, this.$get = [
          '$$animateQueue',
          function (t) {
            function e(t, e, n) {
              if (n) {
                var r;
                t: {
                  for (r = 0; r < n.length; r++) {
                    var i = n[r];
                    if (1 === i.nodeType) {
                      r = i;
                      break t;
                    }
                  }
                  r = void 0;
                }
                !r || r.parentNode || r.previousElementSibling || (n = null);
              }
              n ? n.after(t) : e.prepend(t);
            }
            return {
              on: t.on,
              off: t.off,
              pin: t.pin,
              enabled: t.enabled,
              cancel: function (t) {
                t.end && t.end();
              },
              enter: function (n, r, i, o) {
                return r = r && ir(r), i = i && ir(i), r = r || i.parent(), e(n, r, i), t.push(n, 'enter', Kt(o));
              },
              move: function (n, r, i, o) {
                return r = r && ir(r), i = i && ir(i), r = r || i.parent(), e(n, r, i), t.push(n, 'move', Kt(o));
              },
              leave: function (e, n) {
                return t.push(e, 'leave', Kt(n), function () {
                  e.remove();
                });
              },
              addClass: function (e, n, r) {
                return r = Kt(r), r.addClass = Wt(r.addclass, n), t.push(e, 'addClass', r);
              },
              removeClass: function (e, n, r) {
                return r = Kt(r), r.removeClass = Wt(r.removeClass, n), t.push(e, 'removeClass', r);
              },
              setClass: function (e, n, r, i) {
                return i = Kt(i), i.addClass = Wt(i.addClass, n), i.removeClass = Wt(i.removeClass, r), t.push(e, 'setClass', i);
              },
              animate: function (e, n, r, i, o) {
                return o = Kt(o), o.from = o.from ? l(o.from, n) : n, o.to = o.to ? l(o.to, r) : r, o.tempClasses = Wt(o.tempClasses, i || 'ng-inline-animate'), t.push(e, 'animate', o);
              }
            };
          }
        ];
      }
    ], ci = function () {
      this.$get = [
        '$$rAF',
        function (t) {
          function e(e) {
            n.push(e), 1 < n.length || t(function () {
              for (var t = 0; t < n.length; t++)
                n[t]();
              n = [];
            });
          }
          var n = [];
          return function () {
            var t = !1;
            return e(function () {
              t = !0;
            }), function (n) {
              t ? n() : e(n);
            };
          };
        }
      ];
    }, li = function () {
      this.$get = [
        '$q',
        '$sniffer',
        '$$animateAsyncRun',
        '$$isDocumentHidden',
        '$timeout',
        function (t, e, n, r, i) {
          function a(t) {
            this.setHost(t);
            var e = n();
            this._doneCallbacks = [], this._tick = function (t) {
              r() ? i(t, 0, !1) : e(t);
            }, this._state = 0;
          }
          return a.chain = function (t, e) {
            function n() {
              r === t.length ? e(!0) : t[r](function (t) {
                !1 === t ? e(!1) : (r++, n());
              });
            }
            var r = 0;
            n();
          }, a.all = function (t, e) {
            function n(n) {
              i = i && n, ++r === t.length && e(i);
            }
            var r = 0, i = !0;
            o(t, function (t) {
              t.done(n);
            });
          }, a.prototype = {
            setHost: function (t) {
              this.host = t || {};
            },
            done: function (t) {
              2 === this._state ? t() : this._doneCallbacks.push(t);
            },
            progress: $,
            getPromise: function () {
              if (!this.promise) {
                var e = this;
                this.promise = t(function (t, n) {
                  e.done(function (e) {
                    !1 === e ? n() : t();
                  });
                });
              }
              return this.promise;
            },
            then: function (t, e) {
              return this.getPromise().then(t, e);
            },
            catch: function (t) {
              return this.getPromise().catch(t);
            },
            finally: function (t) {
              return this.getPromise().finally(t);
            },
            pause: function () {
              this.host.pause && this.host.pause();
            },
            resume: function () {
              this.host.resume && this.host.resume();
            },
            end: function () {
              this.host.end && this.host.end(), this._resolve(!0);
            },
            cancel: function () {
              this.host.cancel && this.host.cancel(), this._resolve(!1);
            },
            complete: function (t) {
              var e = this;
              0 === e._state && (e._state = 1, e._tick(function () {
                e._resolve(t);
              }));
            },
            _resolve: function (t) {
              2 !== this._state && (o(this._doneCallbacks, function (e) {
                e(t);
              }), this._doneCallbacks.length = 0, this._state = 2);
            }
          }, a;
        }
      ];
    }, fi = function () {
      this.$get = [
        '$$rAF',
        '$q',
        '$$AnimateRunner',
        function (t, e, n) {
          return function (e, r) {
            function i() {
              return t(function () {
                o.addClass && (e.addClass(o.addClass), o.addClass = null), o.removeClass && (e.removeClass(o.removeClass), o.removeClass = null), o.to && (e.css(o.to), o.to = null), a || s.complete(), a = !0;
              }), s;
            }
            var o = r || {};
            o.$$prepared || (o = P(o)), o.cleanupStyles && (o.from = o.to = null), o.from && (e.css(o.from), o.from = null);
            var a, s = new n();
            return {
              start: i,
              end: i
            };
          };
        }
      ];
    }, hi = r('$compile'), pi = new function () {
    }();
  Xt.$inject = [
    '$provide',
    '$$sanitizeUriProvider'
  ], te.prototype.isFirstChange = function () {
    return this.previousValue === pi;
  };
  var $i = /^((?:x|data)[:\-_])/i, di = /[:\-_]+(.)/g, mi = r('$controller'), vi = /^(\S+)(\s+as\s+([\w$]+))?$/, gi = function () {
      this.$get = [
        '$document',
        function (t) {
          return function (e) {
            return e ? !e.nodeType && e instanceof ir && (e = e[0]) : e = t[0].body, e.offsetWidth + 1;
          };
        }
      ];
    }, yi = 'application/json', bi = { 'Content-Type': yi + ';charset=utf-8' }, wi = /^\[|^\{(?!\{)/, xi = {
      '[': /]$/,
      '{': /}$/
    }, Ci = /^\)]\}',?\n/, Si = r('$http'), Ei = gr.$interpolateMinErr = r('$interpolate');
  Ei.throwNoconcat = function (t) {
    throw Ei('noconcat', t);
  }, Ei.interr = function (t, e) {
    return Ei('interr', t, e.toString());
  };
  var ki = function () {
      this.$get = function () {
        function t(t) {
          var e = function (t) {
            e.data = t, e.called = !0;
          };
          return e.id = t, e;
        }
        var e = gr.callbacks, n = {};
        return {
          createCallback: function (r) {
            r = '_' + (e.$$counter++).toString(36);
            var i = 'angular.callbacks.' + r, o = t(r);
            return n[i] = e[r] = o, i;
          },
          wasCalled: function (t) {
            return n[t].called;
          },
          getResponse: function (t) {
            return n[t].data;
          },
          removeCallback: function (t) {
            delete e[n[t].id], delete n[t];
          }
        };
      };
    }, Ai = /^([^?#]*)(\?([^#]*))?(#(.*))?$/, Oi = {
      http: 80,
      https: 443,
      ftp: 21
    }, Mi = r('$location'), Vi = /^\s*[\\/]{2,}/, Ti = {
      $$absUrl: '',
      $$html5: !1,
      $$replace: !1,
      absUrl: Ne('$$absUrl'),
      url: function (t) {
        if (g(t))
          return this.$$url;
        var e = Ai.exec(t);
        return (e[1] || '' === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || '' === t) && this.search(e[3] || ''), this.hash(e[5] || ''), this;
      },
      protocol: Ne('$$protocol'),
      host: Ne('$$host'),
      port: Ne('$$port'),
      path: Ie('$$path', function (t) {
        return t = null !== t ? t.toString() : '', '/' === t.charAt(0) ? t : '/' + t;
      }),
      search: function (t, e) {
        switch (arguments.length) {
        case 0:
          return this.$$search;
        case 1:
          if (x(t) || C(t))
            t = t.toString(), this.$$search = K(t);
          else {
            if (!b(t))
              throw Mi('isrcharg');
            t = P(t, {}), o(t, function (e, n) {
              null == e && delete t[n];
            }), this.$$search = t;
          }
          break;
        default:
          g(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e;
        }
        return this.$$compose(), this;
      },
      hash: Ie('$$hash', function (t) {
        return null !== t ? t.toString() : '';
      }),
      replace: function () {
        return this.$$replace = !0, this;
      }
    };
  o([
    Te,
    Ve,
    Me
  ], function (t) {
    t.prototype = Object.create(Ti), t.prototype.state = function (e) {
      if (!arguments.length)
        return this.$$state;
      if (t !== Me || !this.$$html5)
        throw Mi('nostate');
      return this.$$state = g(e) ? null : e, this.$$urlUpdatedByLocation = !0, this;
    };
  });
  var Ni = r('$parse'), Ii = {}.constructor.prototype.valueOf, ji = ct();
  o('+ - * / % === !== == != < > <= >= && || ! = |'.split(' '), function (t) {
    ji[t] = !0;
  });
  var Di = {
      n: '\n',
      f: '\f',
      r: '\r',
      t: '\t',
      v: '\x0B',
      '\'': '\'',
      '"': '"'
    }, Pi = function (t) {
      this.options = t;
    };
  Pi.prototype = {
    constructor: Pi,
    lex: function (t) {
      for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;)
        if ('"' === (t = this.text.charAt(this.index)) || '\'' === t)
          this.readString(t);
        else if (this.isNumber(t) || '.' === t && this.isNumber(this.peek()))
          this.readNumber();
        else if (this.isIdentifierStart(this.peekMultichar()))
          this.readIdent();
        else if (this.is(t, '(){}[].,;:?'))
          this.tokens.push({
            index: this.index,
            text: t
          }), this.index++;
        else if (this.isWhitespace(t))
          this.index++;
        else {
          var e = t + this.peek(), n = e + this.peek(2), r = ji[e], i = ji[n];
          ji[t] || r || i ? (t = i ? n : r ? e : t, this.tokens.push({
            index: this.index,
            text: t,
            operator: !0
          }), this.index += t.length) : this.throwError('Unexpected next character ', this.index, this.index + 1);
        }
      return this.tokens;
    },
    is: function (t, e) {
      return -1 !== e.indexOf(t);
    },
    peek: function (t) {
      return t = t || 1, this.index + t < this.text.length && this.text.charAt(this.index + t);
    },
    isNumber: function (t) {
      return '0' <= t && '9' >= t && 'string' == typeof t;
    },
    isWhitespace: function (t) {
      return ' ' === t || '\r' === t || '\t' === t || '\n' === t || '\x0B' === t || '\xA0' === t;
    },
    isIdentifierStart: function (t) {
      return this.options.isIdentifierStart ? this.options.isIdentifierStart(t, this.codePointAt(t)) : this.isValidIdentifierStart(t);
    },
    isValidIdentifierStart: function (t) {
      return 'a' <= t && 'z' >= t || 'A' <= t && 'Z' >= t || '_' === t || '$' === t;
    },
    isIdentifierContinue: function (t) {
      return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(t, this.codePointAt(t)) : this.isValidIdentifierContinue(t);
    },
    isValidIdentifierContinue: function (t, e) {
      return this.isValidIdentifierStart(t, e) || this.isNumber(t);
    },
    codePointAt: function (t) {
      return 1 === t.length ? t.charCodeAt(0) : (t.charCodeAt(0) << 10) + t.charCodeAt(1) - 56613888;
    },
    peekMultichar: function () {
      var t = this.text.charAt(this.index), e = this.peek();
      if (!e)
        return t;
      var n = t.charCodeAt(0), r = e.charCodeAt(0);
      return 55296 <= n && 56319 >= n && 56320 <= r && 57343 >= r ? t + e : t;
    },
    isExpOperator: function (t) {
      return '-' === t || '+' === t || this.isNumber(t);
    },
    throwError: function (t, e, n) {
      throw n = n || this.index, e = y(e) ? 's ' + e + '-' + this.index + ' [' + this.text.substring(e, n) + ']' : ' ' + n, Ni('lexerr', t, e, this.text);
    },
    readNumber: function () {
      for (var t = '', e = this.index; this.index < this.text.length;) {
        var n = lr(this.text.charAt(this.index));
        if ('.' === n || this.isNumber(n))
          t += n;
        else {
          var r = this.peek();
          if ('e' === n && this.isExpOperator(r))
            t += n;
          else if (this.isExpOperator(n) && r && this.isNumber(r) && 'e' === t.charAt(t.length - 1))
            t += n;
          else {
            if (!this.isExpOperator(n) || r && this.isNumber(r) || 'e' !== t.charAt(t.length - 1))
              break;
            this.throwError('Invalid exponent');
          }
        }
        this.index++;
      }
      this.tokens.push({
        index: e,
        text: t,
        constant: !0,
        value: Number(t)
      });
    },
    readIdent: function () {
      var t = this.index;
      for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
        var e = this.peekMultichar();
        if (!this.isIdentifierContinue(e))
          break;
        this.index += e.length;
      }
      this.tokens.push({
        index: t,
        text: this.text.slice(t, this.index),
        identifier: !0
      });
    },
    readString: function (t) {
      var e = this.index;
      this.index++;
      for (var n = '', r = t, i = !1; this.index < this.text.length;) {
        var o = this.text.charAt(this.index), r = r + o;
        if (i)
          'u' === o ? (i = this.text.substring(this.index + 1, this.index + 5), i.match(/[\da-f]{4}/i) || this.throwError('Invalid unicode escape [\\u' + i + ']'), this.index += 4, n += String.fromCharCode(parseInt(i, 16))) : n += Di[o] || o, i = !1;
        else if ('\\' === o)
          i = !0;
        else {
          if (o === t)
            return this.index++, void this.tokens.push({
              index: e,
              text: r,
              constant: !0,
              value: n
            });
          n += o;
        }
        this.index++;
      }
      this.throwError('Unterminated quote', e);
    }
  };
  var Ri = function (t, e) {
    this.lexer = t, this.options = e;
  };
  Ri.Program = 'Program', Ri.ExpressionStatement = 'ExpressionStatement', Ri.AssignmentExpression = 'AssignmentExpression', Ri.ConditionalExpression = 'ConditionalExpression', Ri.LogicalExpression = 'LogicalExpression', Ri.BinaryExpression = 'BinaryExpression', Ri.UnaryExpression = 'UnaryExpression', Ri.CallExpression = 'CallExpression', Ri.MemberExpression = 'MemberExpression', Ri.Identifier = 'Identifier', Ri.Literal = 'Literal', Ri.ArrayExpression = 'ArrayExpression', Ri.Property = 'Property', Ri.ObjectExpression = 'ObjectExpression', Ri.ThisExpression = 'ThisExpression', Ri.LocalsExpression = 'LocalsExpression', Ri.NGValueParameter = 'NGValueParameter', Ri.prototype = {
    ast: function (t) {
      return this.text = t, this.tokens = this.lexer.lex(t), t = this.program(), 0 !== this.tokens.length && this.throwError('is an unexpected token', this.tokens[0]), t;
    },
    program: function () {
      for (var t = [];;)
        if (0 < this.tokens.length && !this.peek('}', ')', ';', ']') && t.push(this.expressionStatement()), !this.expect(';'))
          return {
            type: Ri.Program,
            body: t
          };
    },
    expressionStatement: function () {
      return {
        type: Ri.ExpressionStatement,
        expression: this.filterChain()
      };
    },
    filterChain: function () {
      for (var t = this.expression(); this.expect('|');)
        t = this.filter(t);
      return t;
    },
    expression: function () {
      return this.assignment();
    },
    assignment: function () {
      var t = this.ternary();
      if (this.expect('=')) {
        if (!Fe(t))
          throw Ni('lval');
        t = {
          type: Ri.AssignmentExpression,
          left: t,
          right: this.assignment(),
          operator: '='
        };
      }
      return t;
    },
    ternary: function () {
      var t, e, n = this.logicalOR();
      return this.expect('?') && (t = this.expression(), this.consume(':')) ? (e = this.expression(), {
        type: Ri.ConditionalExpression,
        test: n,
        alternate: t,
        consequent: e
      }) : n;
    },
    logicalOR: function () {
      for (var t = this.logicalAND(); this.expect('||');)
        t = {
          type: Ri.LogicalExpression,
          operator: '||',
          left: t,
          right: this.logicalAND()
        };
      return t;
    },
    logicalAND: function () {
      for (var t = this.equality(); this.expect('&&');)
        t = {
          type: Ri.LogicalExpression,
          operator: '&&',
          left: t,
          right: this.equality()
        };
      return t;
    },
    equality: function () {
      for (var t, e = this.relational(); t = this.expect('==', '!=', '===', '!==');)
        e = {
          type: Ri.BinaryExpression,
          operator: t.text,
          left: e,
          right: this.relational()
        };
      return e;
    },
    relational: function () {
      for (var t, e = this.additive(); t = this.expect('<', '>', '<=', '>=');)
        e = {
          type: Ri.BinaryExpression,
          operator: t.text,
          left: e,
          right: this.additive()
        };
      return e;
    },
    additive: function () {
      for (var t, e = this.multiplicative(); t = this.expect('+', '-');)
        e = {
          type: Ri.BinaryExpression,
          operator: t.text,
          left: e,
          right: this.multiplicative()
        };
      return e;
    },
    multiplicative: function () {
      for (var t, e = this.unary(); t = this.expect('*', '/', '%');)
        e = {
          type: Ri.BinaryExpression,
          operator: t.text,
          left: e,
          right: this.unary()
        };
      return e;
    },
    unary: function () {
      var t;
      return (t = this.expect('+', '-', '!')) ? {
        type: Ri.UnaryExpression,
        operator: t.text,
        prefix: !0,
        argument: this.unary()
      } : this.primary();
    },
    primary: function () {
      var t;
      this.expect('(') ? (t = this.filterChain(), this.consume(')')) : this.expect('[') ? t = this.arrayDeclaration() : this.expect('{') ? t = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? t = P(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? t = {
        type: Ri.Literal,
        value: this.options.literals[this.consume().text]
      } : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError('not a primary expression', this.peek());
      for (var e; e = this.expect('(', '[', '.');)
        '(' === e.text ? (t = {
          type: Ri.CallExpression,
          callee: t,
          arguments: this.parseArguments()
        }, this.consume(')')) : '[' === e.text ? (t = {
          type: Ri.MemberExpression,
          object: t,
          property: this.expression(),
          computed: !0
        }, this.consume(']')) : '.' === e.text ? t = {
          type: Ri.MemberExpression,
          object: t,
          property: this.identifier(),
          computed: !1
        } : this.throwError('IMPOSSIBLE');
      return t;
    },
    filter: function (t) {
      t = [t];
      for (var e = {
          type: Ri.CallExpression,
          callee: this.identifier(),
          arguments: t,
          filter: !0
        }; this.expect(':');)
        t.push(this.expression());
      return e;
    },
    parseArguments: function () {
      var t = [];
      if (')' !== this.peekToken().text)
        do {
          t.push(this.filterChain());
        } while (this.expect(','));
      return t;
    },
    identifier: function () {
      var t = this.consume();
      return t.identifier || this.throwError('is not a valid identifier', t), {
        type: Ri.Identifier,
        name: t.text
      };
    },
    constant: function () {
      return {
        type: Ri.Literal,
        value: this.consume().value
      };
    },
    arrayDeclaration: function () {
      var t = [];
      if (']' !== this.peekToken().text)
        do {
          if (this.peek(']'))
            break;
          t.push(this.expression());
        } while (this.expect(','));
      return this.consume(']'), {
        type: Ri.ArrayExpression,
        elements: t
      };
    },
    object: function () {
      var t, e = [];
      if ('}' !== this.peekToken().text)
        do {
          if (this.peek('}'))
            break;
          t = {
            type: Ri.Property,
            kind: 'init'
          }, this.peek().constant ? (t.key = this.constant(), t.computed = !1, this.consume(':'), t.value = this.expression()) : this.peek().identifier ? (t.key = this.identifier(), t.computed = !1, this.peek(':') ? (this.consume(':'), t.value = this.expression()) : t.value = t.key) : this.peek('[') ? (this.consume('['), t.key = this.expression(), this.consume(']'), t.computed = !0, this.consume(':'), t.value = this.expression()) : this.throwError('invalid key', this.peek()), e.push(t);
        } while (this.expect(','));
      return this.consume('}'), {
        type: Ri.ObjectExpression,
        properties: e
      };
    },
    throwError: function (t, e) {
      throw Ni('syntax', e.text, t, e.index + 1, this.text, this.text.substring(e.index));
    },
    consume: function (t) {
      if (0 === this.tokens.length)
        throw Ni('ueoe', this.text);
      var e = this.expect(t);
      return e || this.throwError('is unexpected, expecting [' + t + ']', this.peek()), e;
    },
    peekToken: function () {
      if (0 === this.tokens.length)
        throw Ni('ueoe', this.text);
      return this.tokens[0];
    },
    peek: function (t, e, n, r) {
      return this.peekAhead(0, t, e, n, r);
    },
    peekAhead: function (t, e, n, r, i) {
      if (this.tokens.length > t) {
        t = this.tokens[t];
        var o = t.text;
        if (o === e || o === n || o === r || o === i || !(e || n || r || i))
          return t;
      }
      return !1;
    },
    expect: function (t, e, n, r) {
      return !!(t = this.peek(t, e, n, r)) && (this.tokens.shift(), t);
    },
    selfReferential: {
      this: { type: Ri.ThisExpression },
      $locals: { type: Ri.LocalsExpression }
    }
  };
  var Ui = 2;
  He.prototype = {
    compile: function (t) {
      var e = this;
      this.state = {
        nextId: 0,
        filters: {},
        fn: {
          vars: [],
          body: [],
          own: {}
        },
        assign: {
          vars: [],
          body: [],
          own: {}
        },
        inputs: []
      }, Le(t, e.$filter);
      var n, r = '';
      return this.stage = 'assign', (n = Be(t)) && (this.state.computing = 'assign', r = this.nextId(), this.recurse(n, r), this.return_(r), r = 'fn.assign=' + this.generateFunction('assign', 's,v,l')), n = qe(t.body), e.stage = 'inputs', o(n, function (t, n) {
        var r = 'fn' + n;
        e.state[r] = {
          vars: [],
          body: [],
          own: {}
        }, e.state.computing = r;
        var i = e.nextId();
        e.recurse(t, i), e.return_(i), e.state.inputs.push({
          name: r,
          isPure: t.isPure
        }), t.watchId = n;
      }), this.state.computing = 'fn', this.stage = 'main', this.recurse(t), t = '"' + this.USE + ' ' + this.STRICT + '";\n' + this.filterPrefix() + 'var fn=' + this.generateFunction('fn', 's,l,a,i') + r + this.watchFns() + 'return fn;', t = new Function('$filter', 'getStringValue', 'ifDefined', 'plus', t)(this.$filter, Pe, Re, Ue), this.state = this.stage = void 0, t;
    },
    USE: 'use',
    STRICT: 'strict',
    watchFns: function () {
      var t = [], e = this.state.inputs, n = this;
      return o(e, function (e) {
        t.push('var ' + e.name + '=' + n.generateFunction(e.name, 's')), e.isPure && t.push(e.name, '.isPure=' + JSON.stringify(e.isPure) + ';');
      }), e.length && t.push('fn.inputs=[' + e.map(function (t) {
        return t.name;
      }).join(',') + '];'), t.join('');
    },
    generateFunction: function (t, e) {
      return 'function(' + e + '){' + this.varsPrefix(t) + this.body(t) + '};';
    },
    filterPrefix: function () {
      var t = [], e = this;
      return o(this.state.filters, function (n, r) {
        t.push(n + '=$filter(' + e.escape(r) + ')');
      }), t.length ? 'var ' + t.join(',') + ';' : '';
    },
    varsPrefix: function (t) {
      return this.state[t].vars.length ? 'var ' + this.state[t].vars.join(',') + ';' : '';
    },
    body: function (t) {
      return this.state[t].body.join('');
    },
    recurse: function (t, e, n, r, i, a) {
      var s, u, c, l, f, h = this;
      if (r = r || $, !a && y(t.watchId))
        e = e || this.nextId(), this.if_('i', this.lazyAssign(e, this.computedMember('i', t.watchId)), this.lazyRecurse(t, e, n, r, i, !0));
      else
        switch (t.type) {
        case Ri.Program:
          o(t.body, function (e, n) {
            h.recurse(e.expression, void 0, void 0, function (t) {
              u = t;
            }), n !== t.body.length - 1 ? h.current().body.push(u, ';') : h.return_(u);
          });
          break;
        case Ri.Literal:
          l = this.escape(t.value), this.assign(e, l), r(e || l);
          break;
        case Ri.UnaryExpression:
          this.recurse(t.argument, void 0, void 0, function (t) {
            u = t;
          }), l = t.operator + '(' + this.ifDefined(u, 0) + ')', this.assign(e, l), r(l);
          break;
        case Ri.BinaryExpression:
          this.recurse(t.left, void 0, void 0, function (t) {
            s = t;
          }), this.recurse(t.right, void 0, void 0, function (t) {
            u = t;
          }), l = '+' === t.operator ? this.plus(s, u) : '-' === t.operator ? this.ifDefined(s, 0) + t.operator + this.ifDefined(u, 0) : '(' + s + ')' + t.operator + '(' + u + ')', this.assign(e, l), r(l);
          break;
        case Ri.LogicalExpression:
          e = e || this.nextId(), h.recurse(t.left, e), h.if_('&&' === t.operator ? e : h.not(e), h.lazyRecurse(t.right, e)), r(e);
          break;
        case Ri.ConditionalExpression:
          e = e || this.nextId(), h.recurse(t.test, e), h.if_(e, h.lazyRecurse(t.alternate, e), h.lazyRecurse(t.consequent, e)), r(e);
          break;
        case Ri.Identifier:
          e = e || this.nextId(), n && (n.context = 'inputs' === h.stage ? 's' : this.assign(this.nextId(), this.getHasOwnProperty('l', t.name) + '?l:s'), n.computed = !1, n.name = t.name), h.if_('inputs' === h.stage || h.not(h.getHasOwnProperty('l', t.name)), function () {
            h.if_('inputs' === h.stage || 's', function () {
              i && 1 !== i && h.if_(h.isNull(h.nonComputedMember('s', t.name)), h.lazyAssign(h.nonComputedMember('s', t.name), '{}')), h.assign(e, h.nonComputedMember('s', t.name));
            });
          }, e && h.lazyAssign(e, h.nonComputedMember('l', t.name))), r(e);
          break;
        case Ri.MemberExpression:
          s = n && (n.context = this.nextId()) || this.nextId(), e = e || this.nextId(), h.recurse(t.object, s, void 0, function () {
            h.if_(h.notNull(s), function () {
              t.computed ? (u = h.nextId(), h.recurse(t.property, u), h.getStringValue(u), i && 1 !== i && h.if_(h.not(h.computedMember(s, u)), h.lazyAssign(h.computedMember(s, u), '{}')), l = h.computedMember(s, u), h.assign(e, l), n && (n.computed = !0, n.name = u)) : (i && 1 !== i && h.if_(h.isNull(h.nonComputedMember(s, t.property.name)), h.lazyAssign(h.nonComputedMember(s, t.property.name), '{}')), l = h.nonComputedMember(s, t.property.name), h.assign(e, l), n && (n.computed = !1, n.name = t.property.name));
            }, function () {
              h.assign(e, 'undefined');
            }), r(e);
          }, !!i);
          break;
        case Ri.CallExpression:
          e = e || this.nextId(), t.filter ? (u = h.filter(t.callee.name), c = [], o(t.arguments, function (t) {
            var e = h.nextId();
            h.recurse(t, e), c.push(e);
          }), l = u + '(' + c.join(',') + ')', h.assign(e, l), r(e)) : (u = h.nextId(), s = {}, c = [], h.recurse(t.callee, u, s, function () {
            h.if_(h.notNull(u), function () {
              o(t.arguments, function (e) {
                h.recurse(e, t.constant ? void 0 : h.nextId(), void 0, function (t) {
                  c.push(t);
                });
              }), l = s.name ? h.member(s.context, s.name, s.computed) + '(' + c.join(',') + ')' : u + '(' + c.join(',') + ')', h.assign(e, l);
            }, function () {
              h.assign(e, 'undefined');
            }), r(e);
          }));
          break;
        case Ri.AssignmentExpression:
          u = this.nextId(), s = {}, this.recurse(t.left, void 0, s, function () {
            h.if_(h.notNull(s.context), function () {
              h.recurse(t.right, u), l = h.member(s.context, s.name, s.computed) + t.operator + u, h.assign(e, l), r(e || l);
            });
          }, 1);
          break;
        case Ri.ArrayExpression:
          c = [], o(t.elements, function (e) {
            h.recurse(e, t.constant ? void 0 : h.nextId(), void 0, function (t) {
              c.push(t);
            });
          }), l = '[' + c.join(',') + ']', this.assign(e, l), r(e || l);
          break;
        case Ri.ObjectExpression:
          c = [], f = !1, o(t.properties, function (t) {
            t.computed && (f = !0);
          }), f ? (e = e || this.nextId(), this.assign(e, '{}'), o(t.properties, function (t) {
            t.computed ? (s = h.nextId(), h.recurse(t.key, s)) : s = t.key.type === Ri.Identifier ? t.key.name : '' + t.key.value, u = h.nextId(), h.recurse(t.value, u), h.assign(h.member(e, s, t.computed), u);
          })) : (o(t.properties, function (e) {
            h.recurse(e.value, t.constant ? void 0 : h.nextId(), void 0, function (t) {
              c.push(h.escape(e.key.type === Ri.Identifier ? e.key.name : '' + e.key.value) + ':' + t);
            });
          }), l = '{' + c.join(',') + '}', this.assign(e, l)), r(e || l);
          break;
        case Ri.ThisExpression:
          this.assign(e, 's'), r(e || 's');
          break;
        case Ri.LocalsExpression:
          this.assign(e, 'l'), r(e || 'l');
          break;
        case Ri.NGValueParameter:
          this.assign(e, 'v'), r(e || 'v');
        }
    },
    getHasOwnProperty: function (t, e) {
      var n = t + '.' + e, r = this.current().own;
      return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, t + '&&(' + this.escape(e) + ' in ' + t + ')')), r[n];
    },
    assign: function (t, e) {
      if (t)
        return this.current().body.push(t, '=', e, ';'), t;
    },
    filter: function (t) {
      return this.state.filters.hasOwnProperty(t) || (this.state.filters[t] = this.nextId(!0)), this.state.filters[t];
    },
    ifDefined: function (t, e) {
      return 'ifDefined(' + t + ',' + this.escape(e) + ')';
    },
    plus: function (t, e) {
      return 'plus(' + t + ',' + e + ')';
    },
    return_: function (t) {
      this.current().body.push('return ', t, ';');
    },
    if_: function (t, e, n) {
      if (!0 === t)
        e();
      else {
        var r = this.current().body;
        r.push('if(', t, '){'), e(), r.push('}'), n && (r.push('else{'), n(), r.push('}'));
      }
    },
    not: function (t) {
      return '!(' + t + ')';
    },
    isNull: function (t) {
      return t + '==null';
    },
    notNull: function (t) {
      return t + '!=null';
    },
    nonComputedMember: function (t, e) {
      var n = /[^$_a-zA-Z0-9]/g;
      return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? t + '.' + e : t + '["' + e.replace(n, this.stringEscapeFn) + '"]';
    },
    computedMember: function (t, e) {
      return t + '[' + e + ']';
    },
    member: function (t, e, n) {
      return n ? this.computedMember(t, e) : this.nonComputedMember(t, e);
    },
    getStringValue: function (t) {
      this.assign(t, 'getStringValue(' + t + ')');
    },
    lazyRecurse: function (t, e, n, r, i, o) {
      var a = this;
      return function () {
        a.recurse(t, e, n, r, i, o);
      };
    },
    lazyAssign: function (t, e) {
      var n = this;
      return function () {
        n.assign(t, e);
      };
    },
    stringEscapeRegex: /[^ a-zA-Z0-9]/g,
    stringEscapeFn: function (t) {
      return '\\u' + ('0000' + t.charCodeAt(0).toString(16)).slice(-4);
    },
    escape: function (t) {
      if (x(t))
        return '\'' + t.replace(this.stringEscapeRegex, this.stringEscapeFn) + '\'';
      if (C(t))
        return t.toString();
      if (!0 === t)
        return 'true';
      if (!1 === t)
        return 'false';
      if (null === t)
        return 'null';
      if (void 0 === t)
        return 'undefined';
      throw Ni('esc');
    },
    nextId: function (t, e) {
      var n = 'v' + this.state.nextId++;
      return t || this.current().vars.push(n + (e ? '=' + e : '')), n;
    },
    current: function () {
      return this.state[this.state.computing];
    }
  }, ze.prototype = {
    compile: function (t) {
      var e = this;
      Le(t, e.$filter);
      var n, r;
      (n = Be(t)) && (r = this.recurse(n)), n = qe(t.body);
      var i;
      n && (i = [], o(n, function (t, n) {
        var r = e.recurse(t);
        r.isPure = t.isPure, t.input = r, i.push(r), t.watchId = n;
      }));
      var a = [];
      return o(t.body, function (t) {
        a.push(e.recurse(t.expression));
      }), t = 0 === t.body.length ? $ : 1 === t.body.length ? a[0] : function (t, e) {
        var n;
        return o(a, function (r) {
          n = r(t, e);
        }), n;
      }, r && (t.assign = function (t, e, n) {
        return r(t, n, e);
      }), i && (t.inputs = i), t;
    },
    recurse: function (t, e, n) {
      var r, i, a, s = this;
      if (t.input)
        return this.inputs(t.input, t.watchId);
      switch (t.type) {
      case Ri.Literal:
        return this.value(t.value, e);
      case Ri.UnaryExpression:
        return i = this.recurse(t.argument), this['unary' + t.operator](i, e);
      case Ri.BinaryExpression:
      case Ri.LogicalExpression:
        return r = this.recurse(t.left), i = this.recurse(t.right), this['binary' + t.operator](r, i, e);
      case Ri.ConditionalExpression:
        return this['ternary?:'](this.recurse(t.test), this.recurse(t.alternate), this.recurse(t.consequent), e);
      case Ri.Identifier:
        return s.identifier(t.name, e, n);
      case Ri.MemberExpression:
        return r = this.recurse(t.object, !1, !!n), t.computed || (i = t.property.name), t.computed && (i = this.recurse(t.property)), t.computed ? this.computedMember(r, i, e, n) : this.nonComputedMember(r, i, e, n);
      case Ri.CallExpression:
        return a = [], o(t.arguments, function (t) {
          a.push(s.recurse(t));
        }), t.filter && (i = this.$filter(t.callee.name)), t.filter || (i = this.recurse(t.callee, !0)), t.filter ? function (t, n, r, o) {
          for (var s = [], u = 0; u < a.length; ++u)
            s.push(a[u](t, n, r, o));
          return t = i.apply(void 0, s, o), e ? {
            context: void 0,
            name: void 0,
            value: t
          } : t;
        } : function (t, n, r, o) {
          var s, u = i(t, n, r, o);
          if (null != u.value) {
            s = [];
            for (var c = 0; c < a.length; ++c)
              s.push(a[c](t, n, r, o));
            s = u.value.apply(u.context, s);
          }
          return e ? { value: s } : s;
        };
      case Ri.AssignmentExpression:
        return r = this.recurse(t.left, !0, 1), i = this.recurse(t.right), function (t, n, o, a) {
          var s = r(t, n, o, a);
          return t = i(t, n, o, a), s.context[s.name] = t, e ? { value: t } : t;
        };
      case Ri.ArrayExpression:
        return a = [], o(t.elements, function (t) {
          a.push(s.recurse(t));
        }), function (t, n, r, i) {
          for (var o = [], s = 0; s < a.length; ++s)
            o.push(a[s](t, n, r, i));
          return e ? { value: o } : o;
        };
      case Ri.ObjectExpression:
        return a = [], o(t.properties, function (t) {
          t.computed ? a.push({
            key: s.recurse(t.key),
            computed: !0,
            value: s.recurse(t.value)
          }) : a.push({
            key: t.key.type === Ri.Identifier ? t.key.name : '' + t.key.value,
            computed: !1,
            value: s.recurse(t.value)
          });
        }), function (t, n, r, i) {
          for (var o = {}, s = 0; s < a.length; ++s)
            a[s].computed ? o[a[s].key(t, n, r, i)] = a[s].value(t, n, r, i) : o[a[s].key] = a[s].value(t, n, r, i);
          return e ? { value: o } : o;
        };
      case Ri.ThisExpression:
        return function (t) {
          return e ? { value: t } : t;
        };
      case Ri.LocalsExpression:
        return function (t, n) {
          return e ? { value: n } : n;
        };
      case Ri.NGValueParameter:
        return function (t, n, r) {
          return e ? { value: r } : r;
        };
      }
    },
    'unary+': function (t, e) {
      return function (n, r, i, o) {
        return n = t(n, r, i, o), n = y(n) ? +n : 0, e ? { value: n } : n;
      };
    },
    'unary-': function (t, e) {
      return function (n, r, i, o) {
        return n = t(n, r, i, o), n = y(n) ? -n : -0, e ? { value: n } : n;
      };
    },
    'unary!': function (t, e) {
      return function (n, r, i, o) {
        return n = !t(n, r, i, o), e ? { value: n } : n;
      };
    },
    'binary+': function (t, e, n) {
      return function (r, i, o, a) {
        var s = t(r, i, o, a);
        return r = e(r, i, o, a), s = Ue(s, r), n ? { value: s } : s;
      };
    },
    'binary-': function (t, e, n) {
      return function (r, i, o, a) {
        var s = t(r, i, o, a);
        return r = e(r, i, o, a), s = (y(s) ? s : 0) - (y(r) ? r : 0), n ? { value: s } : s;
      };
    },
    'binary*': function (t, e, n) {
      return function (r, i, o, a) {
        return r = t(r, i, o, a) * e(r, i, o, a), n ? { value: r } : r;
      };
    },
    'binary/': function (t, e, n) {
      return function (r, i, o, a) {
        return r = t(r, i, o, a) / e(r, i, o, a), n ? { value: r } : r;
      };
    },
    'binary%': function (t, e, n) {
      return function (r, i, o, a) {
        return r = t(r, i, o, a) % e(r, i, o, a), n ? { value: r } : r;
      };
    },
    'binary===': function (t, e, n) {
      return function (r, i, o, a) {
        return r = t(r, i, o, a) === e(r, i, o, a), n ? { value: r } : r;
      };
    },
    'binary!==': function (t, e, n) {
      return function (r, i, o, a) {
        return r = t(r, i, o, a) !== e(r, i, o, a), n ? { value: r } : r;
      };
    },
    'binary==': function (t, e, n) {
      return function (r, i, o, a) {
        return r = t(r, i, o, a) == e(r, i, o, a), n ? { value: r } : r;
      };
    },
    'binary!=': function (t, e, n) {
      return function (r, i, o, a) {
        return r = t(r, i, o, a) != e(r, i, o, a), n ? { value: r } : r;
      };
    },
    'binary<': function (t, e, n) {
      return function (r, i, o, a) {
        return r = t(r, i, o, a) < e(r, i, o, a), n ? { value: r } : r;
      };
    },
    'binary>': function (t, e, n) {
      return function (r, i, o, a) {
        return r = t(r, i, o, a) > e(r, i, o, a), n ? { value: r } : r;
      };
    },
    'binary<=': function (t, e, n) {
      return function (r, i, o, a) {
        return r = t(r, i, o, a) <= e(r, i, o, a), n ? { value: r } : r;
      };
    },
    'binary>=': function (t, e, n) {
      return function (r, i, o, a) {
        return r = t(r, i, o, a) >= e(r, i, o, a), n ? { value: r } : r;
      };
    },
    'binary&&': function (t, e, n) {
      return function (r, i, o, a) {
        return r = t(r, i, o, a) && e(r, i, o, a), n ? { value: r } : r;
      };
    },
    'binary||': function (t, e, n) {
      return function (r, i, o, a) {
        return r = t(r, i, o, a) || e(r, i, o, a), n ? { value: r } : r;
      };
    },
    'ternary?:': function (t, e, n, r) {
      return function (i, o, a, s) {
        return i = t(i, o, a, s) ? e(i, o, a, s) : n(i, o, a, s), r ? { value: i } : i;
      };
    },
    value: function (t, e) {
      return function () {
        return e ? {
          context: void 0,
          name: void 0,
          value: t
        } : t;
      };
    },
    identifier: function (t, e, n) {
      return function (r, i, o, a) {
        return r = i && t in i ? i : r, n && 1 !== n && r && null == r[t] && (r[t] = {}), i = r ? r[t] : void 0, e ? {
          context: r,
          name: t,
          value: i
        } : i;
      };
    },
    computedMember: function (t, e, n, r) {
      return function (i, o, a, s) {
        var u, c, l = t(i, o, a, s);
        return null != l && (u = e(i, o, a, s), u += '', r && 1 !== r && l && !l[u] && (l[u] = {}), c = l[u]), n ? {
          context: l,
          name: u,
          value: c
        } : c;
      };
    },
    nonComputedMember: function (t, e, n, r) {
      return function (i, o, a, s) {
        return i = t(i, o, a, s), r && 1 !== r && i && null == i[e] && (i[e] = {}), o = null != i ? i[e] : void 0, n ? {
          context: i,
          name: e,
          value: o
        } : o;
      };
    },
    inputs: function (t, e) {
      return function (n, r, i, o) {
        return o ? o[e] : t(n, r, i);
      };
    }
  }, We.prototype = {
    constructor: We,
    parse: function (t) {
      t = this.ast.ast(t);
      var e = this.astCompiler.compile(t);
      return e.literal = 0 === t.body.length || 1 === t.body.length && (t.body[0].expression.type === Ri.Literal || t.body[0].expression.type === Ri.ArrayExpression || t.body[0].expression.type === Ri.ObjectExpression), e.constant = t.constant, e;
    }
  };
  var _i = r('$sce'), Li = {
      HTML: 'html',
      CSS: 'css',
      URL: 'url',
      RESOURCE_URL: 'resourceUrl',
      JS: 'js'
    }, qi = /_([a-z])/g, Fi = r('$compile'), Bi = t.document.createElement('a'), Hi = ln(t.location.href);
  pn.$inject = ['$document'], dn.$inject = ['$provide'];
  var zi = 22, Wi = '.', Gi = '0';
  bn.$inject = ['$locale'], wn.$inject = ['$locale'];
  var Ki = {
      yyyy: kn('FullYear', 4, 0, !1, !0),
      yy: kn('FullYear', 2, 0, !0, !0),
      y: kn('FullYear', 1, 0, !1, !0),
      MMMM: An('Month'),
      MMM: An('Month', !0),
      MM: kn('Month', 2, 1),
      M: kn('Month', 1, 1),
      LLLL: An('Month', !1, !0),
      dd: kn('Date', 2),
      d: kn('Date', 1),
      HH: kn('Hours', 2),
      H: kn('Hours', 1),
      hh: kn('Hours', 2, -12),
      h: kn('Hours', 1, -12),
      mm: kn('Minutes', 2),
      m: kn('Minutes', 1),
      ss: kn('Seconds', 2),
      s: kn('Seconds', 1),
      sss: kn('Milliseconds', 3),
      EEEE: An('Day'),
      EEE: An('Day', !0),
      a: function (t, e) {
        return 12 > t.getHours() ? e.AMPMS[0] : e.AMPMS[1];
      },
      Z: function (t, e, n) {
        return t = -1 * n, t = (0 <= t ? '+' : '') + (En(Math[0 < t ? 'floor' : 'ceil'](t / 60), 2) + En(Math.abs(t % 60), 2));
      },
      ww: Mn(2),
      w: Mn(1),
      G: Vn,
      GG: Vn,
      GGG: Vn,
      GGGG: function (t, e) {
        return 0 >= t.getFullYear() ? e.ERANAMES[0] : e.ERANAMES[1];
      }
    }, Ji = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/, Zi = /^-?\d+$/;
  Tn.$inject = ['$locale'];
  var Yi = m(lr), Qi = m(fr);
  Dn.$inject = ['$parse'];
  var Xi = m({
      restrict: 'E',
      compile: function (t, e) {
        if (!e.href && !e.xlinkHref)
          return function (t, e) {
            if ('a' === e[0].nodeName.toLowerCase()) {
              var n = '[object SVGAnimatedString]' === dr.call(e.prop('href')) ? 'xlink:href' : 'href';
              e.on('click', function (t) {
                e.attr(n) || t.preventDefault();
              });
            }
          };
      }
    }), to = {};
  o(Gr, function (t, e) {
    function n(t, n, i) {
      t.$watch(i[r], function (t) {
        i.$set(e, !!t);
      });
    }
    if ('multiple' !== t) {
      var r = ee('ng-' + e), i = n;
      'checked' === t && (i = function (t, e, i) {
        i.ngModel !== i[r] && n(t, e, i);
      }), to[r] = function () {
        return {
          restrict: 'A',
          priority: 100,
          link: i
        };
      };
    }
  }), o(Jr, function (t, e) {
    to[e] = function () {
      return {
        priority: 100,
        link: function (t, n, r) {
          if ('ngPattern' === e && '/' === r.ngPattern.charAt(0) && (n = r.ngPattern.match(ur)))
            return void r.$set('ngPattern', new RegExp(n[1], n[2]));
          t.$watch(r[e], function (t) {
            r.$set(e, t);
          });
        }
      };
    };
  }), o([
    'src',
    'srcset',
    'href'
  ], function (t) {
    var e = ee('ng-' + t);
    to[e] = function () {
      return {
        priority: 99,
        link: function (n, r, i) {
          var o = t, a = t;
          'href' === t && '[object SVGAnimatedString]' === dr.call(r.prop('href')) && (a = 'xlinkHref', i.$attr[a] = 'xlink:href', o = null), i.$observe(e, function (e) {
            e ? (i.$set(a, e), rr && o && r.prop(o, i[a])) : 'href' === t && i.$set(a, null);
          });
        }
      };
    };
  });
  var eo = {
    $addControl: $,
    $$renameControl: function (t, e) {
      t.$name = e;
    },
    $removeControl: $,
    $setValidity: $,
    $setDirty: $,
    $setPristine: $,
    $setSubmitted: $
  };
  Rn.$inject = [
    '$element',
    '$attrs',
    '$scope',
    '$animate',
    '$interpolate'
  ], Rn.prototype = {
    $rollbackViewValue: function () {
      o(this.$$controls, function (t) {
        t.$rollbackViewValue();
      });
    },
    $commitViewValue: function () {
      o(this.$$controls, function (t) {
        t.$commitViewValue();
      });
    },
    $addControl: function (t) {
      at(t.$name, 'input'), this.$$controls.push(t), t.$name && (this[t.$name] = t), t.$$parentForm = this;
    },
    $$renameControl: function (t, e) {
      var n = t.$name;
      this[n] === t && delete this[n], this[e] = t, t.$name = e;
    },
    $removeControl: function (t) {
      t.$name && this[t.$name] === t && delete this[t.$name], o(this.$pending, function (e, n) {
        this.$setValidity(n, null, t);
      }, this), o(this.$error, function (e, n) {
        this.$setValidity(n, null, t);
      }, this), o(this.$$success, function (e, n) {
        this.$setValidity(n, null, t);
      }, this), D(this.$$controls, t), t.$$parentForm = eo;
    },
    $setDirty: function () {
      this.$$animate.removeClass(this.$$element, Uo), this.$$animate.addClass(this.$$element, _o), this.$dirty = !0, this.$pristine = !1, this.$$parentForm.$setDirty();
    },
    $setPristine: function () {
      this.$$animate.setClass(this.$$element, Uo, _o + ' ng-submitted'), this.$dirty = !1, this.$pristine = !0, this.$submitted = !1, o(this.$$controls, function (t) {
        t.$setPristine();
      });
    },
    $setUntouched: function () {
      o(this.$$controls, function (t) {
        t.$setUntouched();
      });
    },
    $setSubmitted: function () {
      this.$$animate.addClass(this.$$element, 'ng-submitted'), this.$submitted = !0, this.$$parentForm.$setSubmitted();
    }
  }, _n({
    clazz: Rn,
    set: function (t, e, n) {
      var r = t[e];
      r ? -1 === r.indexOf(n) && r.push(n) : t[e] = [n];
    },
    unset: function (t, e, n) {
      var r = t[e];
      r && (D(r, n), 0 === r.length && delete t[e]);
    }
  });
  var no = function (t) {
      return [
        '$timeout',
        '$parse',
        function (e, n) {
          function r(t) {
            return '' === t ? n('this[""]').assign : n(t).assign || $;
          }
          return {
            name: 'form',
            restrict: t ? 'EAC' : 'E',
            require: [
              'form',
              '^^?form'
            ],
            controller: Rn,
            compile: function (n, i) {
              n.addClass(Uo).addClass(Po);
              var o = i.name ? 'name' : !(!t || !i.ngForm) && 'ngForm';
              return {
                pre: function (t, n, i, a) {
                  var s = a[0];
                  if (!('action' in i)) {
                    var u = function (e) {
                      t.$apply(function () {
                        s.$commitViewValue(), s.$setSubmitted();
                      }), e.preventDefault();
                    };
                    n[0].addEventListener('submit', u), n.on('$destroy', function () {
                      e(function () {
                        n[0].removeEventListener('submit', u);
                      }, 0, !1);
                    });
                  }
                  (a[1] || s.$$parentForm).$addControl(s);
                  var c = o ? r(s.$name) : $;
                  o && (c(t, s), i.$observe(o, function (e) {
                    s.$name !== e && (c(t, void 0), s.$$parentForm.$$renameControl(s, e), (c = r(s.$name))(t, s));
                  })), n.on('$destroy', function () {
                    s.$$parentForm.$removeControl(s), c(t, void 0), l(s, eo);
                  });
                }
              };
            }
          };
        }
      ];
    }, ro = no(), io = no(!0), oo = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/, ao = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i, so = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/, uo = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, co = /^(\d{4,})-(\d{2})-(\d{2})$/, lo = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, fo = /^(\d{4,})-W(\d\d)$/, ho = /^(\d{4,})-(\d\d)$/, po = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, $o = ct();
  o([
    'date',
    'datetime-local',
    'month',
    'time',
    'week'
  ], function (t) {
    $o[t] = !0;
  });
  var mo = {
      text: function (t, e, n, r, i, o) {
        Fn(t, e, n, r, i, o), qn(r);
      },
      date: Hn('date', co, Bn(co, [
        'yyyy',
        'MM',
        'dd'
      ]), 'yyyy-MM-dd'),
      'datetime-local': Hn('datetimelocal', lo, Bn(lo, 'yyyy MM dd HH mm ss sss'.split(' ')), 'yyyy-MM-ddTHH:mm:ss.sss'),
      time: Hn('time', po, Bn(po, [
        'HH',
        'mm',
        'ss',
        'sss'
      ]), 'HH:mm:ss.sss'),
      week: Hn('week', fo, function (t, e) {
        if (S(t))
          return t;
        if (x(t)) {
          fo.lastIndex = 0;
          var n = fo.exec(t);
          if (n) {
            var r = +n[1], i = +n[2], o = n = 0, a = 0, s = 0, u = On(r), i = 7 * (i - 1);
            return e && (n = e.getHours(), o = e.getMinutes(), a = e.getSeconds(), s = e.getMilliseconds()), new Date(r, 0, u.getDate() + i, n, o, a, s);
          }
        }
        return NaN;
      }, 'yyyy-Www'),
      month: Hn('month', ho, Bn(ho, [
        'yyyy',
        'MM'
      ]), 'yyyy-MM'),
      number: function (t, e, n, r, i, o) {
        zn(t, e, n, r), Wn(r), Fn(t, e, n, r, i, o);
        var a, s;
        if ((y(n.min) || n.ngMin) && (r.$validators.min = function (t) {
            return r.$isEmpty(t) || g(a) || t >= a;
          }, n.$observe('min', function (t) {
            a = Gn(t), r.$validate();
          })), (y(n.max) || n.ngMax) && (r.$validators.max = function (t) {
            return r.$isEmpty(t) || g(s) || t <= s;
          }, n.$observe('max', function (t) {
            s = Gn(t), r.$validate();
          })), y(n.step) || n.ngStep) {
          var u;
          r.$validators.step = function (t, e) {
            return r.$isEmpty(e) || g(u) || Jn(e, a || 0, u);
          }, n.$observe('step', function (t) {
            u = Gn(t), r.$validate();
          });
        }
      },
      url: function (t, e, n, r, i, o) {
        Fn(t, e, n, r, i, o), qn(r), r.$$parserName = 'url', r.$validators.url = function (t, e) {
          var n = t || e;
          return r.$isEmpty(n) || ao.test(n);
        };
      },
      email: function (t, e, n, r, i, o) {
        Fn(t, e, n, r, i, o), qn(r), r.$$parserName = 'email', r.$validators.email = function (t, e) {
          var n = t || e;
          return r.$isEmpty(n) || so.test(n);
        };
      },
      radio: function (t, e, n, r) {
        var i = !n.ngTrim || 'false' !== Cr(n.ngTrim);
        g(n.name) && e.attr('name', ++yr), e.on('click', function (t) {
          var o;
          e[0].checked && (o = n.value, i && (o = Cr(o)), r.$setViewValue(o, t && t.type));
        }), r.$render = function () {
          var t = n.value;
          i && (t = Cr(t)), e[0].checked = t === r.$viewValue;
        }, n.$observe('value', r.$render);
      },
      range: function (t, e, n, r, i, o) {
        function a(t, r) {
          e.attr(t, n[t]), n.$observe(t, r);
        }
        function s(t) {
          f = Gn(t), br(r.$modelValue) || (l ? (t = e.val(), f > t && (t = f, e.val(t)), r.$setViewValue(t)) : r.$validate());
        }
        function u(t) {
          h = Gn(t), br(r.$modelValue) || (l ? (t = e.val(), h < t && (e.val(h), t = h < f ? f : h), r.$setViewValue(t)) : r.$validate());
        }
        function c(t) {
          p = Gn(t), br(r.$modelValue) || (l && r.$viewValue !== e.val() ? r.$setViewValue(e.val()) : r.$validate());
        }
        zn(t, e, n, r), Wn(r), Fn(t, e, n, r, i, o);
        var l = r.$$hasNativeValidators && 'range' === e[0].type, f = l ? 0 : void 0, h = l ? 100 : void 0, p = l ? 1 : void 0, $ = e[0].validity;
        t = y(n.min), i = y(n.max), o = y(n.step);
        var d = r.$render;
        r.$render = l && y($.rangeUnderflow) && y($.rangeOverflow) ? function () {
          d(), r.$setViewValue(e.val());
        } : d, t && (r.$validators.min = l ? function () {
          return !0;
        } : function (t, e) {
          return r.$isEmpty(e) || g(f) || e >= f;
        }, a('min', s)), i && (r.$validators.max = l ? function () {
          return !0;
        } : function (t, e) {
          return r.$isEmpty(e) || g(h) || e <= h;
        }, a('max', u)), o && (r.$validators.step = l ? function () {
          return !$.stepMismatch;
        } : function (t, e) {
          return r.$isEmpty(e) || g(p) || Jn(e, f || 0, p);
        }, a('step', c));
      },
      checkbox: function (t, e, n, r, i, o, a, s) {
        var u = Zn(s, t, 'ngTrueValue', n.ngTrueValue, !0), c = Zn(s, t, 'ngFalseValue', n.ngFalseValue, !1);
        e.on('click', function (t) {
          r.$setViewValue(e[0].checked, t && t.type);
        }), r.$render = function () {
          e[0].checked = r.$viewValue;
        }, r.$isEmpty = function (t) {
          return !1 === t;
        }, r.$formatters.push(function (t) {
          return U(t, u);
        }), r.$parsers.push(function (t) {
          return t ? u : c;
        });
      },
      hidden: $,
      button: $,
      submit: $,
      reset: $,
      file: $
    }, vo = [
      '$browser',
      '$sniffer',
      '$filter',
      '$parse',
      function (t, e, n, r) {
        return {
          restrict: 'E',
          require: ['?ngModel'],
          link: {
            pre: function (i, o, a, s) {
              s[0] && (mo[lr(a.type)] || mo.text)(i, o, a, s[0], e, t, n, r);
            }
          }
        };
      }
    ], go = /^(true|false|\d+)$/, yo = function () {
      function t(t, e, n) {
        var r = y(n) ? n : 9 === rr ? '' : null;
        t.prop('value', r), e.$set('value', n);
      }
      return {
        restrict: 'A',
        priority: 100,
        compile: function (e, n) {
          return go.test(n.ngValue) ? function (e, n, r) {
            e = e.$eval(r.ngValue), t(n, r, e);
          } : function (e, n, r) {
            e.$watch(r.ngValue, function (e) {
              t(n, r, e);
            });
          };
        }
      };
    }, bo = [
      '$compile',
      function (t) {
        return {
          restrict: 'AC',
          compile: function (e) {
            return t.$$addBindingClass(e), function (e, n, r) {
              t.$$addBindingInfo(n, r.ngBind), n = n[0], e.$watch(r.ngBind, function (t) {
                n.textContent = lt(t);
              });
            };
          }
        };
      }
    ], wo = [
      '$interpolate',
      '$compile',
      function (t, e) {
        return {
          compile: function (n) {
            return e.$$addBindingClass(n), function (n, r, i) {
              n = t(r.attr(i.$attr.ngBindTemplate)), e.$$addBindingInfo(r, n.expressions), r = r[0], i.$observe('ngBindTemplate', function (t) {
                r.textContent = g(t) ? '' : t;
              });
            };
          }
        };
      }
    ], xo = [
      '$sce',
      '$parse',
      '$compile',
      function (t, e, n) {
        return {
          restrict: 'A',
          compile: function (r, i) {
            var o = e(i.ngBindHtml), a = e(i.ngBindHtml, function (e) {
                return t.valueOf(e);
              });
            return n.$$addBindingClass(r), function (e, r, i) {
              n.$$addBindingInfo(r, i.ngBindHtml), e.$watch(a, function () {
                var n = o(e);
                r.html(t.getTrustedHtml(n) || '');
              });
            };
          }
        };
      }
    ], Co = m({
      restrict: 'A',
      require: 'ngModel',
      link: function (t, e, n, r) {
        r.$viewChangeListeners.push(function () {
          t.$eval(n.ngChange);
        });
      }
    }), So = Yn('', !0), Eo = Yn('Odd', 0), ko = Yn('Even', 1), Ao = Pn({
      compile: function (t, e) {
        e.$set('ngCloak', void 0), t.removeClass('ng-cloak');
      }
    }), Oo = [function () {
        return {
          restrict: 'A',
          scope: !0,
          controller: '@',
          priority: 500
        };
      }], Mo = {}, Vo = {
      blur: !0,
      focus: !0
    };
  o('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function (t) {
    var e = ee('ng-' + t);
    Mo[e] = [
      '$parse',
      '$rootScope',
      function (n, r) {
        return {
          restrict: 'A',
          compile: function (i, o) {
            var a = n(o[e]);
            return function (e, n) {
              n.on(t, function (n) {
                var i = function () {
                  a(e, { $event: n });
                };
                Vo[t] && r.$$phase ? e.$evalAsync(i) : e.$apply(i);
              });
            };
          }
        };
      }
    ];
  });
  var To = [
      '$animate',
      '$compile',
      function (t, e) {
        return {
          multiElement: !0,
          transclude: 'element',
          priority: 600,
          terminal: !0,
          restrict: 'A',
          $$tlb: !0,
          link: function (n, r, i, o, a) {
            var s, u, c;
            n.$watch(i.ngIf, function (n) {
              n ? u || a(function (n, o) {
                u = o, n[n.length++] = e.$$createComment('end ngIf', i.ngIf), s = { clone: n }, t.enter(n, r.parent(), r);
              }) : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), s && (c = ut(s.clone), t.leave(c).done(function (t) {
                !1 !== t && (c = null);
              }), s = null));
            });
          }
        };
      }
    ], No = [
      '$templateRequest',
      '$anchorScroll',
      '$animate',
      function (t, e, n) {
        return {
          restrict: 'ECA',
          priority: 400,
          terminal: !0,
          transclude: 'element',
          controller: gr.noop,
          compile: function (r, i) {
            var o = i.ngInclude || i.src, a = i.onload || '', s = i.autoscroll;
            return function (r, i, u, c, l) {
              var f, h, p, $ = 0, d = function () {
                  h && (h.remove(), h = null), f && (f.$destroy(), f = null), p && (n.leave(p).done(function (t) {
                    !1 !== t && (h = null);
                  }), h = p, p = null);
                };
              r.$watch(o, function (o) {
                var u = function (t) {
                    !1 === t || !y(s) || s && !r.$eval(s) || e();
                  }, h = ++$;
                o ? (t(o, !0).then(function (t) {
                  if (!r.$$destroyed && h === $) {
                    var e = r.$new();
                    c.template = t, t = l(e, function (t) {
                      d(), n.enter(t, null, i).done(u);
                    }), f = e, p = t, f.$emit('$includeContentLoaded', o), r.$eval(a);
                  }
                }, function () {
                  r.$$destroyed || h !== $ || (d(), r.$emit('$includeContentError', o));
                }), r.$emit('$includeContentRequested', o)) : (d(), c.template = null);
              });
            };
          }
        };
      }
    ], Io = [
      '$compile',
      function (e) {
        return {
          restrict: 'ECA',
          priority: -400,
          require: 'ngInclude',
          link: function (n, r, i, o) {
            dr.call(r[0]).match(/SVG/) ? (r.empty(), e(vt(o.template, t.document).childNodes)(n, function (t) {
              r.append(t);
            }, { futureParentElement: r })) : (r.html(o.template), e(r.contents())(n));
          }
        };
      }
    ], jo = Pn({
      priority: 450,
      compile: function () {
        return {
          pre: function (t, e, n) {
            t.$eval(n.ngInit);
          }
        };
      }
    }), Do = function () {
      return {
        restrict: 'A',
        priority: 100,
        require: 'ngModel',
        link: function (t, e, n, r) {
          var i = n.ngList || ', ', a = 'false' !== n.ngTrim, s = a ? Cr(i) : i;
          r.$parsers.push(function (t) {
            if (!g(t)) {
              var e = [];
              return t && o(t.split(s), function (t) {
                t && e.push(a ? Cr(t) : t);
              }), e;
            }
          }), r.$formatters.push(function (t) {
            if (wr(t))
              return t.join(i);
          }), r.$isEmpty = function (t) {
            return !t || !t.length;
          };
        }
      };
    }, Po = 'ng-valid', Ro = 'ng-invalid', Uo = 'ng-pristine', _o = 'ng-dirty', Lo = r('ngModel');
  Qn.$inject = '$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate'.split(' '), Qn.prototype = {
    $$initGetterSetters: function () {
      if (this.$options.getOption('getterSetter')) {
        var t = this.$$parse(this.$$attr.ngModel + '()'), e = this.$$parse(this.$$attr.ngModel + '($$$p)');
        this.$$ngModelGet = function (e) {
          var n = this.$$parsedNgModel(e);
          return k(n) && (n = t(e)), n;
        }, this.$$ngModelSet = function (t, n) {
          k(this.$$parsedNgModel(t)) ? e(t, { $$$p: n }) : this.$$parsedNgModelAssign(t, n);
        };
      } else if (!this.$$parsedNgModel.assign)
        throw Lo('nonassign', this.$$attr.ngModel, W(this.$$element));
    },
    $render: $,
    $isEmpty: function (t) {
      return g(t) || '' === t || null === t || t !== t;
    },
    $$updateEmptyClasses: function (t) {
      this.$isEmpty(t) ? (this.$$animate.removeClass(this.$$element, 'ng-not-empty'), this.$$animate.addClass(this.$$element, 'ng-empty')) : (this.$$animate.removeClass(this.$$element, 'ng-empty'), this.$$animate.addClass(this.$$element, 'ng-not-empty'));
    },
    $setPristine: function () {
      this.$dirty = !1, this.$pristine = !0, this.$$animate.removeClass(this.$$element, _o), this.$$animate.addClass(this.$$element, Uo);
    },
    $setDirty: function () {
      this.$dirty = !0, this.$pristine = !1, this.$$animate.removeClass(this.$$element, Uo), this.$$animate.addClass(this.$$element, _o), this.$$parentForm.$setDirty();
    },
    $setUntouched: function () {
      this.$touched = !1, this.$untouched = !0, this.$$animate.setClass(this.$$element, 'ng-untouched', 'ng-touched');
    },
    $setTouched: function () {
      this.$touched = !0, this.$untouched = !1, this.$$animate.setClass(this.$$element, 'ng-touched', 'ng-untouched');
    },
    $rollbackViewValue: function () {
      this.$$timeout.cancel(this.$$pendingDebounce), this.$viewValue = this.$$lastCommittedViewValue, this.$render();
    },
    $validate: function () {
      if (!br(this.$modelValue)) {
        var t = this.$$lastCommittedViewValue, e = this.$$rawModelValue, n = this.$valid, r = this.$modelValue, i = this.$options.getOption('allowInvalid'), o = this;
        this.$$runValidators(e, t, function (t) {
          i || n === t || (o.$modelValue = t ? e : void 0, o.$modelValue !== r && o.$$writeModelToScope());
        });
      }
    },
    $$runValidators: function (t, e, n) {
      function r(t, e) {
        a === s.$$currentValidationRunId && s.$setValidity(t, e);
      }
      function i(t) {
        a === s.$$currentValidationRunId && n(t);
      }
      this.$$currentValidationRunId++;
      var a = this.$$currentValidationRunId, s = this;
      !function () {
        var t = s.$$parserName || 'parse';
        return g(s.$$parserValid) ? (r(t, null), !0) : (s.$$parserValid || (o(s.$validators, function (t, e) {
          r(e, null);
        }), o(s.$asyncValidators, function (t, e) {
          r(e, null);
        })), r(t, s.$$parserValid), s.$$parserValid);
      }() ? i(!1) : function () {
        var n = !0;
        return o(s.$validators, function (i, o) {
          var a = Boolean(i(t, e));
          n = n && a, r(o, a);
        }), !!n || (o(s.$asyncValidators, function (t, e) {
          r(e, null);
        }), !1);
      }() ? function () {
        var n = [], a = !0;
        o(s.$asyncValidators, function (i, o) {
          var s = i(t, e);
          if (!s || !k(s.then))
            throw Lo('nopromise', s);
          r(o, void 0), n.push(s.then(function () {
            r(o, !0);
          }, function () {
            a = !1, r(o, !1);
          }));
        }), n.length ? s.$$q.all(n).then(function () {
          i(a);
        }, $) : i(!0);
      }() : i(!1);
    },
    $commitViewValue: function () {
      var t = this.$viewValue;
      this.$$timeout.cancel(this.$$pendingDebounce), (this.$$lastCommittedViewValue !== t || '' === t && this.$$hasNativeValidators) && (this.$$updateEmptyClasses(t), this.$$lastCommittedViewValue = t, this.$pristine && this.$setDirty(), this.$$parseAndValidate());
    },
    $$parseAndValidate: function () {
      var t = this.$$lastCommittedViewValue, e = this;
      if (this.$$parserValid = !g(t) || void 0)
        for (var n = 0; n < this.$parsers.length; n++)
          if (t = this.$parsers[n](t), g(t)) {
            this.$$parserValid = !1;
            break;
          }
      br(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
      var r = this.$modelValue, i = this.$options.getOption('allowInvalid');
      this.$$rawModelValue = t, i && (this.$modelValue = t, e.$modelValue !== r && e.$$writeModelToScope()), this.$$runValidators(t, this.$$lastCommittedViewValue, function (n) {
        i || (e.$modelValue = n ? t : void 0, e.$modelValue !== r && e.$$writeModelToScope());
      });
    },
    $$writeModelToScope: function () {
      this.$$ngModelSet(this.$$scope, this.$modelValue), o(this.$viewChangeListeners, function (t) {
        try {
          t();
        } catch (t) {
          this.$$exceptionHandler(t);
        }
      }, this);
    },
    $setViewValue: function (t, e) {
      this.$viewValue = t, this.$options.getOption('updateOnDefault') && this.$$debounceViewValueCommit(e);
    },
    $$debounceViewValueCommit: function (t) {
      var e = this.$options.getOption('debounce');
      C(e[t]) ? e = e[t] : C(e.default) && (e = e.default), this.$$timeout.cancel(this.$$pendingDebounce);
      var n = this;
      0 < e ? this.$$pendingDebounce = this.$$timeout(function () {
        n.$commitViewValue();
      }, e) : this.$$scope.$root.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function () {
        n.$commitViewValue();
      });
    },
    $overrideModelOptions: function (t) {
      this.$options = this.$options.createChild(t);
    }
  }, _n({
    clazz: Qn,
    set: function (t, e) {
      t[e] = !0;
    },
    unset: function (t, e) {
      delete t[e];
    }
  });
  var qo, Fo = [
      '$rootScope',
      function (t) {
        return {
          restrict: 'A',
          require: [
            'ngModel',
            '^?form',
            '^?ngModelOptions'
          ],
          controller: Qn,
          priority: 1,
          compile: function (e) {
            return e.addClass(Uo).addClass('ng-untouched').addClass(Po), {
              pre: function (t, e, n, r) {
                var i = r[0];
                e = r[1] || i.$$parentForm, (r = r[2]) && (i.$options = r.$options), i.$$initGetterSetters(), e.$addControl(i), n.$observe('name', function (t) {
                  i.$name !== t && i.$$parentForm.$$renameControl(i, t);
                }), t.$on('$destroy', function () {
                  i.$$parentForm.$removeControl(i);
                });
              },
              post: function (e, n, r, i) {
                function o() {
                  a.$setTouched();
                }
                var a = i[0];
                a.$options.getOption('updateOn') && n.on(a.$options.getOption('updateOn'), function (t) {
                  a.$$debounceViewValueCommit(t && t.type);
                }), n.on('blur', function () {
                  a.$touched || (t.$$phase ? e.$evalAsync(o) : e.$apply(o));
                });
              }
            };
          }
        };
      }
    ], Bo = /(\s+|^)default(\s+|$)/;
  tr.prototype = {
    getOption: function (t) {
      return this.$$options[t];
    },
    createChild: function (t) {
      var e = !1;
      return t = l({}, t), o(t, function (n, r) {
        '$inherit' === n ? '*' === r ? e = !0 : (t[r] = this.$$options[r], 'updateOn' === r && (t.updateOnDefault = this.$$options.updateOnDefault)) : 'updateOn' === r && (t.updateOnDefault = !1, t[r] = Cr(n.replace(Bo, function () {
          return t.updateOnDefault = !0, ' ';
        })));
      }, this), e && (delete t['*'], er(t, this.$$options)), er(t, qo.$$options), new tr(t);
    }
  }, qo = new tr({
    updateOn: '',
    updateOnDefault: !0,
    debounce: 0,
    getterSetter: !1,
    allowInvalid: !1,
    timezone: null
  });
  var Ho = function () {
      function t(t, e) {
        this.$$attrs = t, this.$$scope = e;
      }
      return t.$inject = [
        '$attrs',
        '$scope'
      ], t.prototype = {
        $onInit: function () {
          var t = this.parentCtrl ? this.parentCtrl.$options : qo, e = this.$$scope.$eval(this.$$attrs.ngModelOptions);
          this.$options = t.createChild(e);
        }
      }, {
        restrict: 'A',
        priority: 10,
        require: { parentCtrl: '?^^ngModelOptions' },
        bindToController: !0,
        controller: t
      };
    }, zo = Pn({
      terminal: !0,
      priority: 1000
    }), Wo = r('ngOptions'), Go = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, Ko = [
      '$compile',
      '$document',
      '$parse',
      function (e, n, r) {
        function a(t, e, n) {
          function o(t, e, n, r, i) {
            this.selectValue = t, this.viewValue = e, this.label = n, this.group = r, this.disabled = i;
          }
          function a(t) {
            var e;
            if (!c && i(t))
              e = t;
            else {
              e = [];
              for (var n in t)
                t.hasOwnProperty(n) && '$' !== n.charAt(0) && e.push(n);
            }
            return e;
          }
          var s = t.match(Go);
          if (!s)
            throw Wo('iexp', t, W(e));
          var u = s[5] || s[7], c = s[6];
          t = / as /.test(s[0]) && s[1];
          var l = s[9];
          e = r(s[2] ? s[1] : u);
          var f = t && r(t) || e, h = l && r(l), p = l ? function (t, e) {
              return h(n, e);
            } : function (t) {
              return Lt(t);
            }, $ = function (t, e) {
              return p(t, b(t, e));
            }, d = r(s[2] || s[1]), m = r(s[3] || ''), v = r(s[4] || ''), g = r(s[8]), y = {}, b = c ? function (t, e) {
              return y[c] = e, y[u] = t, y;
            } : function (t) {
              return y[u] = t, y;
            };
          return {
            trackBy: l,
            getTrackByValue: $,
            getWatchables: r(g, function (t) {
              var e = [];
              t = t || [];
              for (var r = a(t), i = r.length, o = 0; o < i; o++) {
                var u = t === r ? o : r[o], c = t[u], u = b(c, u), c = p(c, u);
                e.push(c), (s[2] || s[1]) && (c = d(n, u), e.push(c)), s[4] && (u = v(n, u), e.push(u));
              }
              return e;
            }),
            getOptions: function () {
              for (var t = [], e = {}, r = g(n) || [], i = a(r), s = i.length, u = 0; u < s; u++) {
                var c = r === i ? u : i[u], h = b(r[c], c), y = f(n, h), c = p(y, h), w = d(n, h), x = m(n, h), h = v(n, h), y = new o(c, y, w, x, h);
                t.push(y), e[c] = y;
              }
              return {
                items: t,
                selectValueMap: e,
                getOptionFromViewValue: function (t) {
                  return e[$(t)];
                },
                getViewValueFromOption: function (t) {
                  return l ? P(t.viewValue) : t.viewValue;
                }
              };
            }
          };
        }
        var s = t.document.createElement('option'), u = t.document.createElement('optgroup');
        return {
          restrict: 'A',
          terminal: !0,
          require: [
            'select',
            'ngModel'
          ],
          link: {
            pre: function (t, e, n, r) {
              r[0].registerOption = $;
            },
            post: function (t, r, i, c) {
              function l(t) {
                var e = (t = v.getOptionFromViewValue(t)) && t.element;
                return e && !e.selected && (e.selected = !0), t;
              }
              function f(t, e) {
                t.element = e, e.disabled = t.disabled, t.label !== e.label && (e.label = t.label, e.textContent = t.label), e.value = t.selectValue;
              }
              var h = c[0], p = c[1], $ = i.multiple;
              c = 0;
              for (var d = r.children(), m = d.length; c < m; c++)
                if ('' === d[c].value) {
                  h.hasEmptyOption = !0, h.emptyOption = d.eq(c);
                  break;
                }
              r.empty(), c = !!h.emptyOption, ir(s.cloneNode(!1)).val('?');
              var v, g = a(i.ngOptions, r, t), b = n[0].createDocumentFragment();
              h.generateUnknownOptionValue = function (t) {
                return '?';
              }, $ ? (h.writeValue = function (t) {
                if (v) {
                  var e = t && t.map(l) || [];
                  v.items.forEach(function (t) {
                    t.element.selected && -1 === Array.prototype.indexOf.call(e, t) && (t.element.selected = !1);
                  });
                }
              }, h.readValue = function () {
                var t = r.val() || [], e = [];
                return o(t, function (t) {
                  (t = v.selectValueMap[t]) && !t.disabled && e.push(v.getViewValueFromOption(t));
                }), e;
              }, g.trackBy && t.$watchCollection(function () {
                if (wr(p.$viewValue))
                  return p.$viewValue.map(function (t) {
                    return g.getTrackByValue(t);
                  });
              }, function () {
                p.$render();
              })) : (h.writeValue = function (t) {
                if (v) {
                  var e = r[0].options[r[0].selectedIndex], n = v.getOptionFromViewValue(t);
                  e && e.removeAttribute('selected'), n ? (r[0].value !== n.selectValue && (h.removeUnknownOption(), r[0].value = n.selectValue, n.element.selected = !0), n.element.setAttribute('selected', 'selected')) : h.selectUnknownOrEmptyOption(t);
                }
              }, h.readValue = function () {
                var t = v.selectValueMap[r.val()];
                return t && !t.disabled ? (h.unselectEmptyOption(), h.removeUnknownOption(), v.getViewValueFromOption(t)) : null;
              }, g.trackBy && t.$watch(function () {
                return g.getTrackByValue(p.$viewValue);
              }, function () {
                p.$render();
              })), c && (e(h.emptyOption)(t), r.prepend(h.emptyOption), 8 === h.emptyOption[0].nodeType ? (h.hasEmptyOption = !1, h.registerOption = function (t, e) {
                '' === e.val() && (h.hasEmptyOption = !0, h.emptyOption = e, h.emptyOption.removeClass('ng-scope'), p.$render(), e.on('$destroy', function () {
                  var t = h.$isEmptyOptionSelected();
                  h.hasEmptyOption = !1, h.emptyOption = void 0, t && p.$render();
                }));
              }) : h.emptyOption.removeClass('ng-scope')), t.$watchCollection(g.getWatchables, function () {
                var t = v && h.readValue();
                if (v)
                  for (var e = v.items.length - 1; 0 <= e; e--) {
                    var n = v.items[e];
                    Nt(y(n.group) ? n.element.parentNode : n.element);
                  }
                v = g.getOptions();
                var i = {};
                v.items.forEach(function (t) {
                  var e;
                  if (y(t.group)) {
                    e = i[t.group], e || (e = u.cloneNode(!1), b.appendChild(e), e.label = null === t.group ? 'null' : t.group, i[t.group] = e);
                    var n = s.cloneNode(!1);
                    e.appendChild(n), f(t, n);
                  } else
                    e = s.cloneNode(!1), b.appendChild(e), f(t, e);
                }), r[0].appendChild(b), p.$render(), p.$isEmpty(t) || (e = h.readValue(), (g.trackBy || $ ? U(t, e) : t === e) || (p.$setViewValue(e), p.$render()));
              });
            }
          }
        };
      }
    ], Jo = [
      '$locale',
      '$interpolate',
      '$log',
      function (t, e, n) {
        var r = /{}/g, i = /^when(Minus)?(.+)$/;
        return {
          link: function (a, s, u) {
            function c(t) {
              s.text(t || '');
            }
            var l, f = u.count, h = u.$attr.when && s.attr(u.$attr.when), p = u.offset || 0, d = a.$eval(h) || {}, m = {}, v = e.startSymbol(), y = e.endSymbol(), b = v + f + '-' + p + y, w = gr.noop;
            o(u, function (t, e) {
              var n = i.exec(e);
              n && (n = (n[1] ? '-' : '') + lr(n[2]), d[n] = s.attr(u.$attr[e]));
            }), o(d, function (t, n) {
              m[n] = e(t.replace(r, b));
            }), a.$watch(f, function (e) {
              var r = parseFloat(e), i = br(r);
              i || r in d || (r = t.pluralCat(r - p)), r === l || i && br(l) || (w(), i = m[r], g(i) ? (null != e && n.debug('ngPluralize: no rule defined for \'' + r + '\' in ' + h), w = $, c()) : w = a.$watch(i, c), l = r);
            });
          }
        };
      }
    ], Zo = [
      '$parse',
      '$animate',
      '$compile',
      function (t, e, n) {
        var a = r('ngRepeat'), s = function (t, e, n, r, i, o, a) {
            t[n] = r, i && (t[i] = o), t.$index = e, t.$first = 0 === e, t.$last = e === a - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 == (1 & e));
          };
        return {
          restrict: 'A',
          multiElement: !0,
          transclude: 'element',
          priority: 1000,
          terminal: !0,
          $$tlb: !0,
          compile: function (r, u) {
            var c = u.ngRepeat, l = n.$$createComment('end ngRepeat', c), f = c.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
            if (!f)
              throw a('iexp', c);
            var h = f[1], p = f[2], $ = f[3], d = f[4], f = h.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);
            if (!f)
              throw a('iidexp', h);
            var m = f[3] || f[1], v = f[2];
            if ($ && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test($) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test($)))
              throw a('badident', $);
            var g, y, b, w, x = { $id: Lt };
            return d ? g = t(d) : (b = function (t, e) {
              return Lt(e);
            }, w = function (t) {
              return t;
            }), function (t, n, r, u, f) {
              g && (y = function (e, n, r) {
                return v && (x[v] = e), x[m] = n, x.$index = r, g(t, x);
              });
              var h = ct();
              t.$watchCollection(p, function (r) {
                var u, p, d, g, x, C, S, E, k, A, O = n[0], M = ct();
                if ($ && (t[$] = r), i(r))
                  E = r, p = y || b;
                else
                  for (A in p = y || w, E = [], r)
                    cr.call(r, A) && '$' !== A.charAt(0) && E.push(A);
                for (g = E.length, A = Array(g), u = 0; u < g; u++)
                  if (x = r === E ? u : E[u], C = r[x], S = p(x, C, u), h[S])
                    k = h[S], delete h[S], M[S] = k, A[u] = k;
                  else {
                    if (M[S])
                      throw o(A, function (t) {
                        t && t.scope && (h[t.id] = t);
                      }), a('dupes', c, S, C);
                    A[u] = {
                      id: S,
                      scope: void 0,
                      clone: void 0
                    }, M[S] = !0;
                  }
                for (d in h) {
                  if (k = h[d], S = ut(k.clone), e.leave(S), S[0].parentNode)
                    for (u = 0, p = S.length; u < p; u++)
                      S[u].$$NG_REMOVED = !0;
                  k.scope.$destroy();
                }
                for (u = 0; u < g; u++)
                  if (x = r === E ? u : E[u], C = r[x], k = A[u], k.scope) {
                    d = O;
                    do {
                      d = d.nextSibling;
                    } while (d && d.$$NG_REMOVED);
                    k.clone[0] !== d && e.move(ut(k.clone), null, O), O = k.clone[k.clone.length - 1], s(k.scope, u, m, C, v, x, g);
                  } else
                    f(function (t, n) {
                      k.scope = n;
                      var r = l.cloneNode(!1);
                      t[t.length++] = r, e.enter(t, null, O), O = r, k.clone = t, M[k.id] = k, s(k.scope, u, m, C, v, x, g);
                    });
                h = M;
              });
            };
          }
        };
      }
    ], Yo = [
      '$animate',
      function (t) {
        return {
          restrict: 'A',
          multiElement: !0,
          link: function (e, n, r) {
            e.$watch(r.ngShow, function (e) {
              t[e ? 'removeClass' : 'addClass'](n, 'ng-hide', { tempClasses: 'ng-hide-animate' });
            });
          }
        };
      }
    ], Qo = [
      '$animate',
      function (t) {
        return {
          restrict: 'A',
          multiElement: !0,
          link: function (e, n, r) {
            e.$watch(r.ngHide, function (e) {
              t[e ? 'addClass' : 'removeClass'](n, 'ng-hide', { tempClasses: 'ng-hide-animate' });
            });
          }
        };
      }
    ], Xo = Pn(function (t, e, n) {
      t.$watch(n.ngStyle, function (t, n) {
        n && t !== n && o(n, function (t, n) {
          e.css(n, '');
        }), t && e.css(t);
      }, !0);
    }), ta = [
      '$animate',
      '$compile',
      function (t, e) {
        return {
          require: 'ngSwitch',
          controller: [
            '$scope',
            function () {
              this.cases = {};
            }
          ],
          link: function (n, r, i, a) {
            var s = [], u = [], c = [], l = [], f = function (t, e) {
                return function (n) {
                  !1 !== n && t.splice(e, 1);
                };
              };
            n.$watch(i.ngSwitch || i.on, function (n) {
              for (var r, i; c.length;)
                t.cancel(c.pop());
              for (r = 0, i = l.length; r < i; ++r) {
                var h = ut(u[r].clone);
                l[r].$destroy(), (c[r] = t.leave(h)).done(f(c, r));
              }
              u.length = 0, l.length = 0, (s = a.cases['!' + n] || a.cases['?']) && o(s, function (n) {
                n.transclude(function (r, i) {
                  l.push(i);
                  var o = n.element;
                  r[r.length++] = e.$$createComment('end ngSwitchWhen'), u.push({ clone: r }), t.enter(r, o.parent(), o);
                });
              });
            });
          }
        };
      }
    ], ea = Pn({
      transclude: 'element',
      priority: 1200,
      require: '^ngSwitch',
      multiElement: !0,
      link: function (t, e, n, r, i) {
        t = n.ngSwitchWhen.split(n.ngSwitchWhenSeparator).sort().filter(function (t, e, n) {
          return n[e - 1] !== t;
        }), o(t, function (t) {
          r.cases['!' + t] = r.cases['!' + t] || [], r.cases['!' + t].push({
            transclude: i,
            element: e
          });
        });
      }
    }), na = Pn({
      transclude: 'element',
      priority: 1200,
      require: '^ngSwitch',
      multiElement: !0,
      link: function (t, e, n, r, i) {
        r.cases['?'] = r.cases['?'] || [], r.cases['?'].push({
          transclude: i,
          element: e
        });
      }
    }), ra = r('ngTransclude'), ia = [
      '$compile',
      function (t) {
        return {
          restrict: 'EAC',
          terminal: !0,
          compile: function (e) {
            var n = t(e.contents());
            return e.empty(), function (t, e, r, i, o) {
              function a() {
                n(t, function (t) {
                  e.append(t);
                });
              }
              if (!o)
                throw ra('orphan', W(e));
              r.ngTransclude === r.$attr.ngTransclude && (r.ngTransclude = ''), r = r.ngTransclude || r.ngTranscludeSlot, o(function (t, n) {
                var r;
                if (r = t.length)
                  t: {
                    r = 0;
                    for (var i = t.length; r < i; r++) {
                      var o = t[r];
                      if (o.nodeType !== Nr || o.nodeValue.trim()) {
                        r = !0;
                        break t;
                      }
                    }
                    r = void 0;
                  }
                r ? e.append(t) : (a(), n.$destroy());
              }, null, r), r && !o.isSlotFilled(r) && a();
            };
          }
        };
      }
    ], oa = [
      '$templateCache',
      function (t) {
        return {
          restrict: 'E',
          terminal: !0,
          compile: function (e, n) {
            'text/ng-template' === n.type && t.put(n.id, e[0].text);
          }
        };
      }
    ], aa = {
      $setViewValue: $,
      $render: $
    }, sa = [
      '$element',
      '$scope',
      function (e, n) {
        function r() {
          s || (s = !0, n.$$postDigest(function () {
            s = !1, o.ngModelCtrl.$render();
          }));
        }
        function i(t) {
          u || (u = !0, n.$$postDigest(function () {
            n.$$destroyed || (u = !1, o.ngModelCtrl.$setViewValue(o.readValue()), t && o.ngModelCtrl.$render());
          }));
        }
        var o = this, a = new Yr();
        o.selectValueMap = {}, o.ngModelCtrl = aa, o.multiple = !1, o.unknownOption = ir(t.document.createElement('option')), o.hasEmptyOption = !1, o.emptyOption = void 0, o.renderUnknownOption = function (t) {
          t = o.generateUnknownOptionValue(t), o.unknownOption.val(t), e.prepend(o.unknownOption), nr(o.unknownOption, !0), e.val(t);
        }, o.updateUnknownOption = function (t) {
          t = o.generateUnknownOptionValue(t), o.unknownOption.val(t), nr(o.unknownOption, !0), e.val(t);
        }, o.generateUnknownOptionValue = function (t) {
          return '? ' + Lt(t) + ' ?';
        }, o.removeUnknownOption = function () {
          o.unknownOption.parent() && o.unknownOption.remove();
        }, o.selectEmptyOption = function () {
          o.emptyOption && (e.val(''), nr(o.emptyOption, !0));
        }, o.unselectEmptyOption = function () {
          o.hasEmptyOption && nr(o.emptyOption, !1);
        }, n.$on('$destroy', function () {
          o.renderUnknownOption = $;
        }), o.readValue = function () {
          var t = e.val(), t = t in o.selectValueMap ? o.selectValueMap[t] : t;
          return o.hasOption(t) ? t : null;
        }, o.writeValue = function (t) {
          var n = e[0].options[e[0].selectedIndex];
          n && nr(ir(n), !1), o.hasOption(t) ? (o.removeUnknownOption(), n = Lt(t), e.val(n in o.selectValueMap ? n : t), nr(ir(e[0].options[e[0].selectedIndex]), !0)) : o.selectUnknownOrEmptyOption(t);
        }, o.addOption = function (t, e) {
          if (8 !== e[0].nodeType) {
            at(t, '"option value"'), '' === t && (o.hasEmptyOption = !0, o.emptyOption = e);
            var n = a.get(t) || 0;
            a.set(t, n + 1), r();
          }
        }, o.removeOption = function (t) {
          var e = a.get(t);
          e && (1 === e ? (a.delete(t), '' === t && (o.hasEmptyOption = !1, o.emptyOption = void 0)) : a.set(t, e - 1));
        }, o.hasOption = function (t) {
          return !!a.get(t);
        }, o.$hasEmptyOption = function () {
          return o.hasEmptyOption;
        }, o.$isUnknownOptionSelected = function () {
          return e[0].options[0] === o.unknownOption[0];
        }, o.$isEmptyOptionSelected = function () {
          return o.hasEmptyOption && e[0].options[e[0].selectedIndex] === o.emptyOption[0];
        }, o.selectUnknownOrEmptyOption = function (t) {
          null == t && o.emptyOption ? (o.removeUnknownOption(), o.selectEmptyOption()) : o.unknownOption.parent().length ? o.updateUnknownOption(t) : o.renderUnknownOption(t);
        };
        var s = !1, u = !1;
        o.registerOption = function (t, e, n, a, s) {
          if (n.$attr.ngValue) {
            var u, c = NaN;
            n.$observe('value', function (t) {
              var n, r = e.prop('selected');
              y(c) && (o.removeOption(u), delete o.selectValueMap[c], n = !0), c = Lt(t), u = t, o.selectValueMap[c] = t, o.addOption(t, e), e.attr('value', c), n && r && i();
            });
          } else
            a ? n.$observe('value', function (t) {
              o.readValue();
              var n, r = e.prop('selected');
              y(u) && (o.removeOption(u), n = !0), u = t, o.addOption(t, e), n && r && i();
            }) : s ? t.$watch(s, function (t, r) {
              n.$set('value', t);
              var a = e.prop('selected');
              r !== t && o.removeOption(r), o.addOption(t, e), r && a && i();
            }) : o.addOption(n.value, e);
          n.$observe('disabled', function (t) {
            ('true' === t || t && e.prop('selected')) && (o.multiple ? i(!0) : (o.ngModelCtrl.$setViewValue(null), o.ngModelCtrl.$render()));
          }), e.on('$destroy', function () {
            var t = o.readValue(), e = n.value;
            o.removeOption(e), r(), (o.multiple && t && -1 !== t.indexOf(e) || t === e) && i(!0);
          });
        };
      }
    ], ua = function () {
      return {
        restrict: 'E',
        require: [
          'select',
          '?ngModel'
        ],
        controller: sa,
        priority: 1,
        link: {
          pre: function (t, e, n, r) {
            var i = r[0], a = r[1];
            if (a) {
              if (i.ngModelCtrl = a, e.on('change', function () {
                  i.removeUnknownOption(), t.$apply(function () {
                    a.$setViewValue(i.readValue());
                  });
                }), n.multiple) {
                i.multiple = !0, i.readValue = function () {
                  var t = [];
                  return o(e.find('option'), function (e) {
                    e.selected && !e.disabled && (e = e.value, t.push(e in i.selectValueMap ? i.selectValueMap[e] : e));
                  }), t;
                }, i.writeValue = function (t) {
                  o(e.find('option'), function (e) {
                    var n = !!t && (-1 !== Array.prototype.indexOf.call(t, e.value) || -1 !== Array.prototype.indexOf.call(t, i.selectValueMap[e.value]));
                    n !== e.selected && nr(ir(e), n);
                  });
                };
                var s, u = NaN;
                t.$watch(function () {
                  u !== a.$viewValue || U(s, a.$viewValue) || (s = ht(a.$viewValue), a.$render()), u = a.$viewValue;
                }), a.$isEmpty = function (t) {
                  return !t || 0 === t.length;
                };
              }
            } else
              i.registerOption = $;
          },
          post: function (t, e, n, r) {
            var i = r[1];
            if (i) {
              var o = r[0];
              i.$render = function () {
                o.writeValue(i.$viewValue);
              };
            }
          }
        }
      };
    }, ca = [
      '$interpolate',
      function (t) {
        return {
          restrict: 'E',
          priority: 100,
          compile: function (e, n) {
            var r, i;
            return y(n.ngValue) || (y(n.value) ? r = t(n.value, !0) : (i = t(e.text(), !0)) || n.$set('value', e.text())), function (t, e, n) {
              var o = e.parent();
              (o = o.data('$selectController') || o.parent().data('$selectController')) && o.registerOption(t, e, n, r, i);
            };
          }
        };
      }
    ], la = function () {
      return {
        restrict: 'A',
        require: '?ngModel',
        link: function (t, e, n, r) {
          r && (n.required = !0, r.$validators.required = function (t, e) {
            return !n.required || !r.$isEmpty(e);
          }, n.$observe('required', function () {
            r.$validate();
          }));
        }
      };
    }, fa = function () {
      return {
        restrict: 'A',
        require: '?ngModel',
        link: function (t, e, n, i) {
          if (i) {
            var o, a = n.ngPattern || n.pattern;
            n.$observe('pattern', function (t) {
              if (x(t) && 0 < t.length && (t = new RegExp('^' + t + '$')), t && !t.test)
                throw r('ngPattern')('noregexp', a, t, W(e));
              o = t || void 0, i.$validate();
            }), i.$validators.pattern = function (t, e) {
              return i.$isEmpty(e) || g(o) || o.test(e);
            };
          }
        }
      };
    }, ha = function () {
      return {
        restrict: 'A',
        require: '?ngModel',
        link: function (t, e, n, r) {
          if (r) {
            var i = -1;
            n.$observe('maxlength', function (t) {
              t = h(t), i = br(t) ? -1 : t, r.$validate();
            }), r.$validators.maxlength = function (t, e) {
              return 0 > i || r.$isEmpty(e) || e.length <= i;
            };
          }
        }
      };
    }, pa = function () {
      return {
        restrict: 'A',
        require: '?ngModel',
        link: function (t, e, n, r) {
          if (r) {
            var i = 0;
            n.$observe('minlength', function (t) {
              i = h(t) || 0, r.$validate();
            }), r.$validators.minlength = function (t, e) {
              return r.$isEmpty(e) || e.length >= i;
            };
          }
        }
      };
    };
  t.angular.bootstrap ? t.console && console.log('WARNING: Tried to load angular more than once.') : (function () {
    var e;
    if (!Tr) {
      var n = kr();
      (or = g(n) ? t.jQuery : n ? t[n] : void 0) && or.fn.on ? (ir = or, l(or.fn, {
        scope: Wr.scope,
        isolateScope: Wr.isolateScope,
        controller: Wr.controller,
        injector: Wr.injector,
        inheritedData: Wr.inheritedData
      }), e = or.cleanData, or.cleanData = function (t) {
        for (var n, r, i = 0; null != (r = t[i]); i++)
          (n = or._data(r, 'events')) && n.$destroy && or(r).triggerHandler('$destroy');
        e(t);
      }) : ir = gt, gr.element = ir, Tr = !0;
    }
  }(), function (n) {
    l(n, {
      errorHandlingConfig: e,
      bootstrap: tt,
      copy: P,
      extend: l,
      merge: f,
      equals: U,
      element: ir,
      forEach: o,
      injector: Ht,
      noop: $,
      bind: L,
      toJson: F,
      fromJson: B,
      identity: d,
      isUndefined: g,
      isDefined: y,
      isString: x,
      isFunction: k,
      isObject: b,
      isNumber: C,
      isElement: N,
      isArray: wr,
      version: Ir,
      isDate: S,
      lowercase: lr,
      uppercase: fr,
      callbacks: { $$counter: 0 },
      getTestability: nt,
      reloadWithDebugInfo: et,
      $$minErr: r,
      $$csp: Er,
      $$encodeUriSegment: Z,
      $$encodeUriQuery: Y,
      $$stringify: lt
    }), ar = ft(t), ar('ng', ['ngLocale'], [
      '$provide',
      function (t) {
        t.provider({ $$sanitizeUri: tn }), t.provider('$compile', Xt).directive({
          a: Xi,
          input: vo,
          textarea: vo,
          form: ro,
          script: oa,
          select: ua,
          option: ca,
          ngBind: bo,
          ngBindHtml: xo,
          ngBindTemplate: wo,
          ngClass: So,
          ngClassEven: ko,
          ngClassOdd: Eo,
          ngCloak: Ao,
          ngController: Oo,
          ngForm: io,
          ngHide: Qo,
          ngIf: To,
          ngInclude: No,
          ngInit: jo,
          ngNonBindable: zo,
          ngPluralize: Jo,
          ngRepeat: Zo,
          ngShow: Yo,
          ngStyle: Xo,
          ngSwitch: ta,
          ngSwitchWhen: ea,
          ngSwitchDefault: na,
          ngOptions: Ko,
          ngTransclude: ia,
          ngModel: Fo,
          ngList: Do,
          ngChange: Co,
          pattern: fa,
          ngPattern: fa,
          required: la,
          ngRequired: la,
          minlength: pa,
          ngMinlength: pa,
          maxlength: ha,
          ngMaxlength: ha,
          ngValue: yo,
          ngModelOptions: Ho
        }).directive({ ngInclude: Io }).directive(to).directive(Mo), t.provider({
          $anchorScroll: zt,
          $animate: ui,
          $animateCss: fi,
          $$animateJs: ai,
          $$animateQueue: si,
          $$AnimateRunner: li,
          $$animateAsyncRun: ci,
          $browser: Zt,
          $cacheFactory: Yt,
          $controller: oe,
          $document: ae,
          $$isDocumentHidden: se,
          $exceptionHandler: ue,
          $filter: dn,
          $$forceReflow: gi,
          $interpolate: be,
          $interval: we,
          $http: me,
          $httpParamSerializer: le,
          $httpParamSerializerJQLike: fe,
          $httpBackend: ge,
          $xhrFactory: ve,
          $jsonpCallbacks: ki,
          $location: je,
          $log: De,
          $parse: Ke,
          $rootScope: Xe,
          $q: Je,
          $$q: Ze,
          $sce: on,
          $sceDelegate: rn,
          $sniffer: an,
          $templateCache: Qt,
          $templateRequest: sn,
          $$testability: un,
          $timeout: cn,
          $window: hn,
          $$rAF: Qe,
          $$jqLite: _t,
          $$Map: Qr,
          $$cookieReader: $n
        });
      }
    ]).info({ angularVersion: '1.6.5' });
  }(gr), gr.module('ngLocale', [], [
    '$provide',
    function (t) {
      function e(t) {
        t += '';
        var e = t.indexOf('.');
        return -1 == e ? 0 : t.length - e - 1;
      }
      t.value('$locale', {
        DATETIME_FORMATS: {
          AMPMS: [
            'AM',
            'PM'
          ],
          DAY: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
          ERANAMES: [
            'Before Christ',
            'Anno Domini'
          ],
          ERAS: [
            'BC',
            'AD'
          ],
          FIRSTDAYOFWEEK: 6,
          MONTH: 'January February March April May June July August September October November December'.split(' '),
          SHORTDAY: 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
          SHORTMONTH: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
          STANDALONEMONTH: 'January February March April May June July August September October November December'.split(' '),
          WEEKENDRANGE: [
            5,
            6
          ],
          fullDate: 'EEEE, MMMM d, y',
          longDate: 'MMMM d, y',
          medium: 'MMM d, y h:mm:ss a',
          mediumDate: 'MMM d, y',
          mediumTime: 'h:mm:ss a',
          short: 'M/d/yy h:mm a',
          shortDate: 'M/d/yy',
          shortTime: 'h:mm a'
        },
        NUMBER_FORMATS: {
          CURRENCY_SYM: '$',
          DECIMAL_SEP: '.',
          GROUP_SEP: ',',
          PATTERNS: [
            {
              gSize: 3,
              lgSize: 3,
              maxFrac: 3,
              minFrac: 0,
              minInt: 1,
              negPre: '-',
              negSuf: '',
              posPre: '',
              posSuf: ''
            },
            {
              gSize: 3,
              lgSize: 3,
              maxFrac: 2,
              minFrac: 2,
              minInt: 1,
              negPre: '-\xA4',
              negSuf: '',
              posPre: '\xA4',
              posSuf: ''
            }
          ]
        },
        id: 'en-us',
        localeID: 'en_US',
        pluralCat: function (t, n) {
          var r = 0 | t, i = n;
          return void 0 === i && (i = Math.min(e(t), 3)), Math.pow(10, i), 1 == r && 0 == i ? 'one' : 'other';
        }
      });
    }
  ]), ir(function () {
    X(t.document, tt);
  }));
}(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
!function (e, r) {
  'use strict';
  function t(e) {
    s && e.get('$route');
  }
  function n(e, t, n) {
    return {
      restrict: 'ECA',
      terminal: !0,
      priority: 400,
      transclude: 'element',
      link: function (a, i, o, c, u) {
        function s() {
          d && (n.cancel(d), d = null), f && (f.$destroy(), f = null), h && (d = n.leave(h), d.done(function (e) {
            !1 !== e && (d = null);
          }), h = null);
        }
        function l() {
          var o = e.current && e.current.locals;
          if (r.isDefined(o && o.$template)) {
            var o = a.$new(), c = e.current;
            h = u(o, function (e) {
              n.enter(e, null, h || i).done(function (e) {
                !1 === e || !r.isDefined($) || $ && !a.$eval($) || t();
              }), s();
            }), f = c.scope = o, f.$emit('$viewContentLoaded'), f.$eval(p);
          } else
            s();
        }
        var f, h, d, $ = o.autoscroll, p = o.onload || '';
        a.$on('$routeChangeSuccess', l), l();
      }
    };
  }
  function a(e, r, t) {
    return {
      restrict: 'ECA',
      priority: -400,
      link: function (n, a) {
        var i = t.current, o = i.locals;
        a.html(o.$template);
        var c = e(a.contents());
        if (i.controller) {
          o.$scope = n;
          var u = r(i.controller, o);
          i.controllerAs && (n[i.controllerAs] = u), a.data('$ngControllerController', u), a.children().data('$ngControllerController', u);
        }
        n[i.resolveAs || '$resolve'] = o, c(n);
      }
    };
  }
  var i, o, c, u, s, l = r.module('ngRoute', []).info({ angularVersion: '1.6.5' }).provider('$route', function () {
      function e(e, t) {
        return r.extend(Object.create(e), t);
      }
      function t(e, r) {
        var t = r.caseInsensitiveMatch, n = {
            originalPath: e,
            regexp: e
          }, a = n.keys = [];
        return e = e.replace(/([().])/g, '\\$1').replace(/(\/)?:(\w+)(\*\?|[?*])?/g, function (e, r, t, n) {
          return e = '?' === n || '*?' === n ? '?' : null, n = '*' === n || '*?' === n ? '*' : null, a.push({
            name: t,
            optional: !!e
          }), r = r || '', (e ? '' : r) + '(?:' + (e ? r : '') + (n && '(.+?)' || '([^/]+)') + (e || '') + ')' + (e || '');
        }).replace(/([\/$*])/g, '\\$1'), n.regexp = new RegExp('^' + e + '$', t ? 'i' : ''), n;
      }
      i = r.isArray, o = r.isObject, c = r.isDefined, u = r.noop;
      var n = {};
      this.when = function (e, a) {
        var c;
        if (c = void 0, i(a)) {
          c = c || [];
          for (var u = 0, s = a.length; u < s; u++)
            c[u] = a[u];
        } else if (o(a))
          for (u in c = c || {}, a)
            '$' === u.charAt(0) && '$' === u.charAt(1) || (c[u] = a[u]);
        return c = c || a, r.isUndefined(c.reloadOnSearch) && (c.reloadOnSearch = !0), r.isUndefined(c.caseInsensitiveMatch) && (c.caseInsensitiveMatch = this.caseInsensitiveMatch), n[e] = r.extend(c, e && t(e, c)), e && (u = '/' === e[e.length - 1] ? e.substr(0, e.length - 1) : e + '/', n[u] = r.extend({ redirectTo: e }, t(u, c))), this;
      }, this.caseInsensitiveMatch = !1, this.otherwise = function (e) {
        return 'string' == typeof e && (e = { redirectTo: e }), this.when(null, e), this;
      }, s = !0, this.eagerInstantiationEnabled = function (e) {
        return c(e) ? (s = e, this) : s;
      }, this.$get = [
        '$rootScope',
        '$location',
        '$routeParams',
        '$q',
        '$injector',
        '$templateRequest',
        '$sce',
        '$browser',
        function (t, a, i, o, c, s, l, h) {
          function d(e) {
            var n = S.current;
            (R = (P = w()) && n && P.$$route === n.$$route && r.equals(P.pathParams, n.pathParams) && !P.reloadOnSearch && !x) || !n && !P || t.$broadcast('$routeChangeStart', P, n).defaultPrevented && e && e.preventDefault();
          }
          function $() {
            var e = S.current, n = P;
            if (R)
              e.params = n.params, r.copy(e.params, i), t.$broadcast('$routeUpdate', e);
            else if (n || e) {
              x = !1, S.current = n;
              var a = o.resolve(n);
              h.$$incOutstandingRequestCount(), a.then(p).then(v).then(function (o) {
                return o && a.then(g).then(function (a) {
                  n === S.current && (n && (n.locals = a, r.copy(n.params, i)), t.$broadcast('$routeChangeSuccess', n, e));
                });
              }).catch(function (r) {
                n === S.current && t.$broadcast('$routeChangeError', n, e, r);
              }).finally(function () {
                h.$$completeOutstandingRequest(u);
              });
            }
          }
          function p(e) {
            var t = {
              route: e,
              hasRedirection: !1
            };
            if (e)
              if (e.redirectTo)
                if (r.isString(e.redirectTo))
                  t.path = C(e.redirectTo, e.params), t.search = e.params, t.hasRedirection = !0;
                else {
                  var n = a.path(), i = a.search();
                  e = e.redirectTo(e.pathParams, n, i), r.isDefined(e) && (t.url = e, t.hasRedirection = !0);
                }
              else if (e.resolveRedirectTo)
                return o.resolve(c.invoke(e.resolveRedirectTo)).then(function (e) {
                  return r.isDefined(e) && (t.url = e, t.hasRedirection = !0), t;
                });
            return t;
          }
          function v(e) {
            var r = !0;
            if (e.route !== S.current)
              r = !1;
            else if (e.hasRedirection) {
              var t = a.url(), n = e.url;
              n ? a.url(n).replace() : n = a.path(e.path).search(e.search).replace().url(), n !== t && (r = !1);
            }
            return r;
          }
          function g(e) {
            if (e) {
              var t = r.extend({}, e.resolve);
              return r.forEach(t, function (e, n) {
                t[n] = r.isString(e) ? c.get(e) : c.invoke(e, null, null, n);
              }), e = m(e), r.isDefined(e) && (t.$template = e), o.all(t);
            }
          }
          function m(e) {
            var t, n;
            return r.isDefined(t = e.template) ? r.isFunction(t) && (t = t(e.params)) : r.isDefined(n = e.templateUrl) && (r.isFunction(n) && (n = n(e.params)), r.isDefined(n) && (e.loadedTemplateUrl = l.valueOf(n), t = s(n))), t;
          }
          function w() {
            var t, i;
            return r.forEach(n, function (n, o) {
              var c;
              if (c = !i) {
                var u = a.path();
                c = n.keys;
                var s = {};
                if (n.regexp)
                  if (u = n.regexp.exec(u)) {
                    for (var l = 1, f = u.length; l < f; ++l) {
                      var h = c[l - 1], d = u[l];
                      h && d && (s[h.name] = d);
                    }
                    c = s;
                  } else
                    c = null;
                else
                  c = null;
                c = t = c;
              }
              c && (i = e(n, {
                params: r.extend({}, a.search(), t),
                pathParams: t
              }), i.$$route = n);
            }), i || n.null && e(n.null, {
              params: {},
              pathParams: {}
            });
          }
          function C(e, t) {
            var n = [];
            return r.forEach((e || '').split(':'), function (e, r) {
              if (0 === r)
                n.push(e);
              else {
                var a = e.match(/(\w+)(?:[?*])?(.*)/), i = a[1];
                n.push(t[i]), n.push(a[2] || ''), delete t[i];
              }
            }), n.join('');
          }
          var P, R, x = !1, S = {
              routes: n,
              reload: function () {
                x = !0;
                var e = {
                  defaultPrevented: !1,
                  preventDefault: function () {
                    this.defaultPrevented = !0, x = !1;
                  }
                };
                t.$evalAsync(function () {
                  d(e), e.defaultPrevented || $();
                });
              },
              updateParams: function (e) {
                if (!this.current || !this.current.$$route)
                  throw f('norout');
                e = r.extend({}, this.current.params, e), a.path(C(this.current.$$route.originalPath, e)), a.search(e);
              }
            };
          return t.$on('$locationChangeStart', d), t.$on('$locationChangeSuccess', $), S;
        }
      ];
    }).run(t), f = r.$$minErr('ngRoute');
  t.$inject = ['$injector'], l.provider('$routeParams', function () {
    this.$get = function () {
      return {};
    };
  }), l.directive('ngView', n), l.directive('ngView', a), n.$inject = [
    '$route',
    '$anchorScroll',
    '$animate'
  ], a.$inject = [
    '$compile',
    '$controller',
    '$route'
  ];
}(window, window.angular);
!function (n, t) {
  'use strict';
  function e(n, t, e) {
    if (!n)
      throw G('areq', t || '?', e || 'required');
    return n;
  }
  function a(n, t) {
    return n || t ? n ? t ? (E(n) && (n = n.join(' ')), E(t) && (t = t.join(' ')), n + ' ' + t) : n : t : '';
  }
  function r(n) {
    var t = {};
    return n && (n.to || n.from) && (t.to = n.to, t.from = n.from), t;
  }
  function i(n, t, e) {
    var a = '';
    return n = E(n) ? n : n && K(n) && n.length ? n.split(/\s+/) : [], M(n, function (n, r) {
      n && 0 < n.length && (a += 0 < r ? ' ' : '', a += e ? t + n : n + t);
    }), a;
  }
  function o(n) {
    if (n instanceof J)
      switch (n.length) {
      case 0:
        return n;
      case 1:
        if (1 === n[0].nodeType)
          return n;
        break;
      default:
        return J(s(n));
      }
    if (1 === n.nodeType)
      return J(n);
  }
  function s(n) {
    if (!n[0])
      return n;
    for (var t = 0; t < n.length; t++) {
      var e = n[t];
      if (1 === e.nodeType)
        return e;
    }
  }
  function u(n, t, e) {
    M(t, function (t) {
      n.addClass(t, e);
    });
  }
  function l(n, t, e) {
    M(t, function (t) {
      n.removeClass(t, e);
    });
  }
  function c(n) {
    return function (t, e) {
      e.addClass && (u(n, t, e.addClass), e.addClass = null), e.removeClass && (l(n, t, e.removeClass), e.removeClass = null);
    };
  }
  function f(n) {
    if (n = n || {}, !n.$$prepared) {
      var t = n.domOperation || Q;
      n.domOperation = function () {
        n.$$domOperationFired = !0, t(), t = Q;
      }, n.$$prepared = !0;
    }
    return n;
  }
  function m(n, t) {
    d(n, t), v(n, t);
  }
  function d(n, t) {
    t.from && (n.css(t.from), t.from = null);
  }
  function v(n, t) {
    t.to && (n.css(t.to), t.to = null);
  }
  function p(n, t, e) {
    var a = t.options || {};
    e = e.options || {};
    var r = (a.addClass || '') + ' ' + (e.addClass || ''), i = (a.removeClass || '') + ' ' + (e.removeClass || '');
    return n = h(n.attr('class'), r, i), e.preparationClasses && (a.preparationClasses = A(e.preparationClasses, a.preparationClasses), delete e.preparationClasses), r = a.domOperation !== Q ? a.domOperation : null, R(a, e), r && (a.domOperation = r), a.addClass = n.addClass ? n.addClass : null, a.removeClass = n.removeClass ? n.removeClass : null, t.addClass = a.addClass, t.removeClass = a.removeClass, a;
  }
  function h(n, t, e) {
    function a(n) {
      K(n) && (n = n.split(' '));
      var t = {};
      return M(n, function (n) {
        n.length && (t[n] = !0);
      }), t;
    }
    var r = {};
    n = a(n), t = a(t), M(t, function (n, t) {
      r[t] = 1;
    }), e = a(e), M(e, function (n, t) {
      r[t] = 1 === r[t] ? null : -1;
    });
    var i = {
      addClass: '',
      removeClass: ''
    };
    return M(r, function (t, e) {
      var a, r;
      1 === t ? (a = 'addClass', r = !n[e] || n[e + '-remove']) : -1 === t && (a = 'removeClass', r = n[e] || n[e + '-add']), r && (i[a].length && (i[a] += ' '), i[a] += e);
    }), i;
  }
  function $(n) {
    return n instanceof J ? n[0] : n;
  }
  function g(n, t, e) {
    var a = '';
    t && (a = i(t, 'ng-', !0)), e.addClass && (a = A(a, i(e.addClass, '-add'))), e.removeClass && (a = A(a, i(e.removeClass, '-remove'))), a.length && (e.preparationClasses = a, n.addClass(a));
  }
  function C(n, t) {
    var e = t ? '-' + t + 's' : '';
    return D(n, [
      W,
      e
    ]), [
      W,
      e
    ];
  }
  function y(n, t) {
    var e = t ? 'paused' : '', a = P + 'PlayState';
    return D(n, [
      a,
      e
    ]), [
      a,
      e
    ];
  }
  function D(n, t) {
    n.style[t[0]] = t[1];
  }
  function A(n, t) {
    return n ? t ? n + ' ' + t : n : t;
  }
  function b(n, t, e) {
    var a = Object.create(null), r = n.getComputedStyle(t) || {};
    return M(e, function (n, t) {
      var e = r[n];
      if (e) {
        var i = e.charAt(0);
        ('-' === i || '+' === i || 0 <= i) && (e = k(e)), 0 === e && (e = null), a[t] = e;
      }
    }), a;
  }
  function k(n) {
    var t = 0;
    return n = n.split(/\s*,\s*/), M(n, function (n) {
      's' === n.charAt(n.length - 1) && (n = n.substring(0, n.length - 1)), n = parseFloat(n) || 0, t = t ? Math.max(n, t) : n;
    }), t;
  }
  function w(n) {
    return 0 === n || null != n;
  }
  function T(n, t) {
    var e = x, a = n + 's';
    return t ? e += 'Duration' : a += ' linear all', [
      e,
      a
    ];
  }
  function S() {
    var n = Object.create(null);
    return {
      flush: function () {
        n = Object.create(null);
      },
      count: function (t) {
        return (t = n[t]) ? t.total : 0;
      },
      get: function (t) {
        return (t = n[t]) && t.value;
      },
      put: function (t, e) {
        n[t] ? n[t].total++ : n[t] = {
          total: 1,
          value: e
        };
      }
    };
  }
  function j(n, t, e) {
    M(e, function (e) {
      n[e] = I(n[e]) ? n[e] : t.style.getPropertyValue(e);
    });
  }
  var x, O, P, N;
  void 0 === n.ontransitionend && void 0 !== n.onwebkittransitionend ? (x = 'WebkitTransition', O = 'webkitTransitionEnd transitionend') : (x = 'transition', O = 'transitionend'), void 0 === n.onanimationend && void 0 !== n.onwebkitanimationend ? (P = 'WebkitAnimation', N = 'webkitAnimationEnd animationend') : (P = 'animation', N = 'animationend');
  var F, R, M, E, I, q, L, H, K, B, J, Q, U = P + 'Delay', V = P + 'Duration', W = x + 'Delay', z = x + 'Duration', G = t.$$minErr('ng'), X = {
      transitionDuration: z,
      transitionDelay: W,
      transitionProperty: x + 'Property',
      animationDuration: V,
      animationDelay: U,
      animationIterationCount: P + 'IterationCount'
    }, Y = {
      transitionDuration: z,
      transitionDelay: W,
      animationDuration: V,
      animationDelay: U
    };
  t.module('ngAnimate', [], function () {
    Q = t.noop, F = t.copy, R = t.extend, J = t.element, M = t.forEach, E = t.isArray, K = t.isString, H = t.isObject, B = t.isUndefined, I = t.isDefined, L = t.isFunction, q = t.isElement;
  }).info({ angularVersion: '1.6.5' }).directive('ngAnimateSwap', [
    '$animate',
    '$rootScope',
    function (n, t) {
      return {
        restrict: 'A',
        transclude: 'element',
        terminal: !0,
        priority: 600,
        link: function (t, e, a, r, i) {
          var o, s;
          t.$watchCollection(a.ngAnimateSwap || a.for, function (a) {
            o && n.leave(o), s && (s.$destroy(), s = null), (a || 0 === a) && (s = t.$new(), i(s, function (t) {
              o = t, n.enter(t, null, e);
            }));
          });
        }
      };
    }
  ]).directive('ngAnimateChildren', [
    '$interpolate',
    function (n) {
      return {
        link: function (t, e, a) {
          function r(n) {
            e.data('$$ngAnimateChildren', 'on' === n || 'true' === n);
          }
          var i = a.ngAnimateChildren;
          K(i) && 0 === i.length ? e.data('$$ngAnimateChildren', !0) : (r(n(i)(t)), a.$observe('ngAnimateChildren', r));
        }
      };
    }
  ]).factory('$$rAFScheduler', [
    '$$rAF',
    function (n) {
      function t(n) {
        a = a.concat(n), e();
      }
      function e() {
        if (a.length) {
          for (var t = a.shift(), i = 0; i < t.length; i++)
            t[i]();
          r || n(function () {
            r || e();
          });
        }
      }
      var a, r;
      return a = t.queue = [], t.waitUntilQuiet = function (t) {
        r && r(), r = n(function () {
          r = null, t(), e();
        });
      }, t;
    }
  ]).provider('$$animateQueue', [
    '$animateProvider',
    function (t) {
      function a(n) {
        if (!n)
          return null;
        n = n.split(' ');
        var t = Object.create(null);
        return M(n, function (n) {
          t[n] = !0;
        }), t;
      }
      function r(n, t) {
        if (n && t) {
          var e = a(t);
          return n.split(' ').some(function (n) {
            return e[n];
          });
        }
      }
      function i(n, t, e) {
        return l[n].some(function (n) {
          return n(t, e);
        });
      }
      function u(n, t) {
        var e = 0 < (n.addClass || '').length, a = 0 < (n.removeClass || '').length;
        return t ? e && a : e || a;
      }
      var l = this.rules = {
        skip: [],
        cancel: [],
        join: []
      };
      l.join.push(function (n, t) {
        return !n.structural && u(n);
      }), l.skip.push(function (n, t) {
        return !n.structural && !u(n);
      }), l.skip.push(function (n, t) {
        return 'leave' === t.event && n.structural;
      }), l.skip.push(function (n, t) {
        return t.structural && 2 === t.state && !n.structural;
      }), l.cancel.push(function (n, t) {
        return t.structural && n.structural;
      }), l.cancel.push(function (n, t) {
        return 2 === t.state && n.structural;
      }), l.cancel.push(function (n, t) {
        if (t.structural)
          return !1;
        var e = n.addClass, a = n.removeClass, i = t.addClass, o = t.removeClass;
        return !(B(e) && B(a) || B(i) && B(o)) && (r(e, o) || r(a, i));
      }), this.$get = [
        '$$rAF',
        '$rootScope',
        '$rootElement',
        '$document',
        '$$Map',
        '$$animation',
        '$$AnimateRunner',
        '$templateRequest',
        '$$jqLite',
        '$$forceReflow',
        '$$isDocumentHidden',
        function (a, r, l, d, v, h, C, y, D, A, b) {
          function k() {
            var n = !1;
            return function (t) {
              n ? t() : r.$$postDigest(function () {
                n = !0, t();
              });
            };
          }
          function w(n, t, e) {
            var a = [], r = V[e];
            return r && M(r, function (r) {
              Y.call(r.node, t) ? a.push(r.callback) : 'leave' === e && Y.call(r.node, n) && a.push(r.callback);
            }), a;
          }
          function T(n, t, e) {
            var a = s(t);
            return n.filter(function (n) {
              return !(n.node === a && (!e || n.callback === e));
            });
          }
          function S(n, t, e) {
            function s(n, t, e, r) {
              A(function () {
                var n = w(y, v, t);
                n.length ? a(function () {
                  M(n, function (n) {
                    n(d, e, r);
                  }), 'close' !== e || v.parentNode || Z.off(v);
                }) : 'close' !== e || v.parentNode || Z.off(v);
              }), n.progress(t, e, r);
            }
            function l(n) {
              var t = d, e = c;
              e.preparationClasses && (t.removeClass(e.preparationClasses), e.preparationClasses = null), e.activeClasses && (t.removeClass(e.activeClasses), e.activeClasses = null), X(d, c), m(d, c), c.domOperation(), D.complete(!n);
            }
            var c = F(e), d = o(n), v = $(d), y = v && v.parentNode, c = f(c), D = new C(), A = k();
            if (E(c.addClass) && (c.addClass = c.addClass.join(' ')), c.addClass && !K(c.addClass) && (c.addClass = null), E(c.removeClass) && (c.removeClass = c.removeClass.join(' ')), c.removeClass && !K(c.removeClass) && (c.removeClass = null), c.from && !H(c.from) && (c.from = null), c.to && !H(c.to) && (c.to = null), !(Q && v && z(v, t, e) && G(v, c)))
              return l(), D;
            var T = 0 <= [
                'enter',
                'move',
                'leave'
              ].indexOf(t), S = b(), R = S || L.get(v);
            e = !R && N.get(v) || {};
            var I = !!e.state;
            if (R || I && 1 === e.state || (R = !O(v, y, t)), R)
              return S && s(D, t, 'start'), l(), S && s(D, t, 'close'), D;
            if (T && j(v), S = {
                structural: T,
                element: d,
                event: t,
                addClass: c.addClass,
                removeClass: c.removeClass,
                close: l,
                options: c,
                runner: D
              }, I) {
              if (i('skip', S, e))
                return 2 === e.state ? (l(), D) : (p(d, e, S), e.runner);
              if (i('cancel', S, e))
                if (2 === e.state)
                  e.runner.end();
                else {
                  if (!e.structural)
                    return p(d, e, S), e.runner;
                  e.close();
                }
              else if (i('join', S, e)) {
                if (2 !== e.state)
                  return g(d, T ? t : null, c), t = S.event = e.event, c = p(d, e, S), e.runner;
                p(d, S, {});
              }
            } else
              p(d, S, {});
            if ((I = S.structural) || (I = 'animate' === S.event && 0 < Object.keys(S.options.to || {}).length || u(S)), !I)
              return l(), x(v), D;
            var q = (e.counter || 0) + 1;
            return S.counter = q, P(v, 1, S), r.$$postDigest(function () {
              d = o(n);
              var e = N.get(v), a = !e, e = e || {}, r = 0 < (d.parent() || []).length && ('animate' === e.event || e.structural || u(e));
              a || e.counter !== q || !r ? (a && (X(d, c), m(d, c)), (a || T && e.event !== t) && (c.domOperation(), D.end()), r || x(v)) : (t = !e.structural && u(e, !0) ? 'setClass' : e.event, P(v, 2), e = h(d, t, e.options), D.setHost(e), s(D, t, 'start', {}), e.done(function (n) {
                l(!n), (n = N.get(v)) && n.counter === q && x(v), s(D, t, 'close', {});
              }));
            }), D;
          }
          function j(n) {
            n = n.querySelectorAll('[data-ng-animate]'), M(n, function (n) {
              var t = parseInt(n.getAttribute('data-ng-animate'), 10), e = N.get(n);
              if (e)
                switch (t) {
                case 2:
                  e.runner.end();
                case 1:
                  N.delete(n);
                }
            });
          }
          function x(n) {
            n.removeAttribute('data-ng-animate'), N.delete(n);
          }
          function O(n, t, e) {
            e = d[0].body;
            var a, r = $(l), i = n === e || 'HTML' === n.nodeName, o = n === r, s = !1, u = L.get(n);
            for ((n = J.data(n, '$ngAnimatePin')) && (t = $(n)); t && (o || (o = t === r), 1 === t.nodeType);) {
              if (n = N.get(t) || {}, !s) {
                var c = L.get(t);
                if (!0 === c && !1 !== u) {
                  u = !0;
                  break;
                }
                !1 === c && (u = !1), s = n.structural;
              }
              if ((B(a) || !0 === a) && (n = J.data(t, '$$ngAnimateChildren'), I(n) && (a = n)), s && !1 === a)
                break;
              if (i || (i = t === e), i && o)
                break;
              t = o || !(n = J.data(t, '$ngAnimatePin')) ? t.parentNode : $(n);
            }
            return (!s || a) && !0 !== u && o && i;
          }
          function P(n, t, e) {
            e = e || {}, e.state = t, n.setAttribute('data-ng-animate', t), e = (t = N.get(n)) ? R(t, e) : e, N.set(n, e);
          }
          var N = new v(), L = new v(), Q = null, U = r.$watch(function () {
              return 0 === y.totalPendingRequests;
            }, function (n) {
              n && (U(), r.$$postDigest(function () {
                r.$$postDigest(function () {
                  null === Q && (Q = !0);
                });
              }));
            }), V = Object.create(null);
          v = t.customFilter();
          var W = t.classNameFilter();
          A = function () {
            return !0;
          };
          var z = v || A, G = W ? function (n, t) {
              var e = [
                n.getAttribute('class'),
                t.addClass,
                t.removeClass
              ].join(' ');
              return W.test(e);
            } : A, X = c(D), Y = n.Node.prototype.contains || function (n) {
              return this === n || !!(16 & this.compareDocumentPosition(n));
            }, Z = {
              on: function (n, t, e) {
                var a = s(t);
                V[n] = V[n] || [], V[n].push({
                  node: a,
                  callback: e
                }), J(t).on('$destroy', function () {
                  N.get(a) || Z.off(n, t, e);
                });
              },
              off: function (n, t, e) {
                if (1 !== arguments.length || K(arguments[0])) {
                  var a = V[n];
                  a && (V[n] = 1 === arguments.length ? null : T(a, t, e));
                } else
                  for (a in t = arguments[0], V)
                    V[a] = T(V[a], t);
              },
              pin: function (n, t) {
                e(q(n), 'element', 'not an element'), e(q(t), 'parentElement', 'not an element'), n.data('$ngAnimatePin', t);
              },
              push: function (n, t, e, a) {
                return e = e || {}, e.domOperation = a, S(n, t, e);
              },
              enabled: function (n, t) {
                var e = arguments.length;
                if (0 === e)
                  t = !!Q;
                else if (q(n)) {
                  var a = $(n);
                  1 === e ? t = !L.get(a) : L.set(a, !t);
                } else
                  t = Q = !!n;
                return t;
              }
            };
          return Z;
        }
      ];
    }
  ]).provider('$$animation', [
    '$animateProvider',
    function (n) {
      var t = this.drivers = [];
      this.$get = [
        '$$jqLite',
        '$rootScope',
        '$injector',
        '$$AnimateRunner',
        '$$Map',
        '$$rAFScheduler',
        function (n, e, r, i, o, s) {
          function u(n) {
            function t(n) {
              if (n.processed)
                return n;
              n.processed = !0;
              var e = n.domNode, i = e.parentNode;
              r.set(e, n);
              for (var o; i;) {
                if (o = r.get(i)) {
                  o.processed || (o = t(o));
                  break;
                }
                i = i.parentNode;
              }
              return (o || a).children.push(n), n;
            }
            var e, a = { children: [] }, r = new o();
            for (e = 0; e < n.length; e++) {
              var i = n[e];
              r.set(i.domNode, n[e] = {
                domNode: i.domNode,
                fn: i.fn,
                children: []
              });
            }
            for (e = 0; e < n.length; e++)
              t(n[e]);
            return function (n) {
              var t, e = [], a = [];
              for (t = 0; t < n.children.length; t++)
                a.push(n.children[t]);
              n = a.length;
              var r = 0, i = [];
              for (t = 0; t < a.length; t++) {
                var o = a[t];
                0 >= n && (n = r, r = 0, e.push(i), i = []), i.push(o.fn), o.children.forEach(function (n) {
                  r++, a.push(n);
                }), n--;
              }
              return i.length && e.push(i), e;
            }(a);
          }
          var l = [], d = c(n);
          return function (o, c, v) {
            function p(n) {
              n = n.hasAttribute('ng-animate-ref') ? [n] : n.querySelectorAll('[ng-animate-ref]');
              var t = [];
              return M(n, function (n) {
                var e = n.getAttribute('ng-animate-ref');
                e && e.length && t.push(n);
              }), t;
            }
            function h(n) {
              var t = [], e = {};
              M(n, function (n, a) {
                var r = $(n.element), i = 0 <= [
                    'enter',
                    'move'
                  ].indexOf(n.event), r = n.structural ? p(r) : [];
                if (r.length) {
                  var o = i ? 'to' : 'from';
                  M(r, function (n) {
                    var t = n.getAttribute('ng-animate-ref');
                    e[t] = e[t] || {}, e[t][o] = {
                      animationID: a,
                      element: J(n)
                    };
                  });
                } else
                  t.push(n);
              });
              var a = {}, r = {};
              return M(e, function (e, i) {
                var o = e.from, s = e.to;
                if (o && s) {
                  var u = n[o.animationID], l = n[s.animationID], c = o.animationID.toString();
                  if (!r[c]) {
                    var f = r[c] = {
                      structural: !0,
                      beforeStart: function () {
                        u.beforeStart(), l.beforeStart();
                      },
                      close: function () {
                        u.close(), l.close();
                      },
                      classes: g(u.classes, l.classes),
                      from: u,
                      to: l,
                      anchors: []
                    };
                    f.classes.length ? t.push(f) : (t.push(u), t.push(l));
                  }
                  r[c].anchors.push({
                    out: o.element,
                    in: s.element
                  });
                } else
                  o = o ? o.animationID : s.animationID, s = o.toString(), a[s] || (a[s] = !0, t.push(n[o]));
              }), t;
            }
            function g(n, t) {
              n = n.split(' '), t = t.split(' ');
              for (var e = [], a = 0; a < n.length; a++) {
                var r = n[a];
                if ('ng-' !== r.substring(0, 3))
                  for (var i = 0; i < t.length; i++)
                    if (r === t[i]) {
                      e.push(r);
                      break;
                    }
              }
              return e.join(' ');
            }
            function C(n) {
              for (var e = t.length - 1; 0 <= e; e--) {
                var a = r.get(t[e])(n);
                if (a)
                  return a;
              }
            }
            function y(n, t) {
              function e(n) {
                (n = n.data('$$animationRunner')) && n.setHost(t);
              }
              n.from && n.to ? (e(n.from.element), e(n.to.element)) : e(n.element);
            }
            function D() {
              var n = o.data('$$animationRunner');
              !n || 'leave' === c && v.$$domOperationFired || n.end();
            }
            function A(t) {
              o.off('$destroy', D), o.removeData('$$animationRunner'), d(o, v), m(o, v), v.domOperation(), T && n.removeClass(o, T), o.removeClass('ng-animate'), k.complete(!t);
            }
            v = f(v);
            var b = 0 <= [
                'enter',
                'move',
                'leave'
              ].indexOf(c), k = new i({
                end: function () {
                  A();
                },
                cancel: function () {
                  A(!0);
                }
              });
            if (!t.length)
              return A(), k;
            o.data('$$animationRunner', k);
            var w = a(o.attr('class'), a(v.addClass, v.removeClass)), T = v.tempClasses;
            T && (w += ' ' + T, v.tempClasses = null);
            var S;
            return b && (S = 'ng-' + c + '-prepare', n.addClass(o, S)), l.push({
              element: o,
              classes: w,
              event: c,
              structural: b,
              options: v,
              beforeStart: function () {
                o.addClass('ng-animate'), T && n.addClass(o, T), S && (n.removeClass(o, S), S = null);
              },
              close: A
            }), o.on('$destroy', D), 1 < l.length ? k : (e.$$postDigest(function () {
              var n = [];
              M(l, function (t) {
                t.element.data('$$animationRunner') ? n.push(t) : t.close();
              }), l.length = 0;
              var t = h(n), e = [];
              M(t, function (n) {
                e.push({
                  domNode: $(n.from ? n.from.element : n.element),
                  fn: function () {
                    n.beforeStart();
                    var t, e = n.close;
                    if ((n.anchors ? n.from.element || n.to.element : n.element).data('$$animationRunner')) {
                      var a = C(n);
                      a && (t = a.start);
                    }
                    t ? (t = t(), t.done(function (n) {
                      e(!n);
                    }), y(n, t)) : e();
                  }
                });
              }), s(u(e));
            }), k);
          };
        }
      ];
    }
  ]).provider('$animateCss', [
    '$animateProvider',
    function (n) {
      var t = S(), e = S();
      this.$get = [
        '$window',
        '$$jqLite',
        '$$AnimateRunner',
        '$timeout',
        '$$forceReflow',
        '$sniffer',
        '$$rAFScheduler',
        '$$animateQueue',
        function (n, a, o, s, u, l, p, h) {
          function g(n, t) {
            var e = n.parentNode;
            return (e.$$ngAnimateParentKey || (e.$$ngAnimateParentKey = ++I)) + '-' + n.getAttribute('class') + '-' + t;
          }
          function A(r, o, s, u) {
            var l;
            return 0 < t.count(s) && ((l = e.get(s)) || (o = i(o, '-stagger'), a.addClass(r, o), l = b(n, r, u), l.animationDuration = Math.max(l.animationDuration, 0), l.transitionDuration = Math.max(l.transitionDuration, 0), a.removeClass(r, o), e.put(s, l))), l || {};
          }
          function k(n) {
            q.push(n), p.waitUntilQuiet(function () {
              t.flush(), e.flush();
              for (var n = u(), a = 0; a < q.length; a++)
                q[a](n);
              q.length = 0;
            });
          }
          function S(e, a, r) {
            return a = t.get(r), a || (a = b(n, e, X), 'infinite' === a.animationIterationCount && (a.animationIterationCount = 1)), t.put(r, a), e = a, r = e.animationDelay, a = e.transitionDelay, e.maxDelay = r && a ? Math.max(r, a) : r || a, e.maxDuration = Math.max(e.animationDuration * e.animationIterationCount, e.transitionDuration), e;
          }
          var R = c(a), I = 0, q = [];
          return function (n, e) {
            function u() {
              p();
            }
            function c() {
              p(!0);
            }
            function p(t) {
              if (!(J || G && z)) {
                J = !0, z = !1, H.$$skipPreparationClasses || a.removeClass(n, mn), a.removeClass(n, vn), y(B, !1), C(B, !1), M(rn, function (n) {
                  B.style[n[0]] = '';
                }), R(n, H), m(n, H), Object.keys(K).length && M(K, function (n, t) {
                  n ? B.style.setProperty(t, n) : B.style.removeProperty(t);
                }), H.onDone && H.onDone(), un && un.length && n.off(un.join(' '), q);
                var e = n.data('$$animateCss');
                e && (s.cancel(e[0].timer), n.removeData('$$animateCss')), X && X.complete(!t);
              }
            }
            function b(n) {
              yn.blockTransition && C(B, n), yn.blockKeyframeAnimation && y(B, !!n);
            }
            function I() {
              return X = new o({
                end: u,
                cancel: c
              }), k(Q), p(), {
                $$willAnimate: !1,
                start: function () {
                  return X;
                },
                end: u
              };
            }
            function q(n) {
              n.stopPropagation();
              var t = n.originalEvent || n;
              n = t.$manualTimeStamp || Date.now(), t = parseFloat(t.elapsedTime.toFixed(3)), Math.max(n - an, 0) >= nn && t >= tn && (G = !0, p());
            }
            function L() {
              function t() {
                if (!J) {
                  if (b(!1), M(rn, function (n) {
                      B.style[n[0]] = n[1];
                    }), R(n, H), a.addClass(n, vn), yn.recalculateTimingStyles) {
                    if (dn = B.getAttribute('class') + ' ' + mn, pn = g(B, dn), gn = S(B, dn, pn), Cn = gn.maxDelay, _ = Math.max(Cn, 0), 0 === (tn = gn.maxDuration))
                      return void p();
                    yn.hasTransitions = 0 < gn.transitionDuration, yn.hasAnimations = 0 < gn.animationDuration;
                  }
                  if (yn.applyAnimationDelay && (Cn = 'boolean' != typeof H.delay && w(H.delay) ? parseFloat(H.delay) : Cn, _ = Math.max(Cn, 0), gn.animationDelay = Cn, Dn = [
                      U,
                      Cn + 's'
                    ], rn.push(Dn), B.style[Dn[0]] = Dn[1]), nn = 1000 * _, en = 1000 * tn, H.easing) {
                    var t, r = H.easing;
                    yn.hasTransitions && (t = x + 'TimingFunction', rn.push([
                      t,
                      r
                    ]), B.style[t] = r), yn.hasAnimations && (t = P + 'TimingFunction', rn.push([
                      t,
                      r
                    ]), B.style[t] = r);
                  }
                  gn.transitionDuration && un.push(O), gn.animationDuration && un.push(N), an = Date.now();
                  var i = nn + 1.5 * en;
                  t = an + i;
                  var r = n.data('$$animateCss') || [], o = !0;
                  if (r.length) {
                    var u = r[0];
                    (o = t > u.expectedEndTime) ? s.cancel(u.timer) : r.push(p);
                  }
                  o && (i = s(e, i, !1), r[0] = {
                    timer: i,
                    expectedEndTime: t
                  }, r.push(p), n.data('$$animateCss', r)), un.length && n.on(un.join(' '), q), H.to && (H.cleanupStyles && j(K, B, Object.keys(H.to)), v(n, H));
                }
              }
              function e() {
                var t = n.data('$$animateCss');
                if (t) {
                  for (var e = 1; e < t.length; e++)
                    t[e]();
                  n.removeData('$$animateCss');
                }
              }
              if (!J)
                if (B.parentNode) {
                  var r = function (n) {
                      if (G)
                        z && n && (z = !1, p());
                      else if (z = !n, gn.animationDuration)
                        if (n = y(B, z), z)
                          rn.push(n);
                        else {
                          var t = rn, e = t.indexOf(n);
                          0 <= n && t.splice(e, 1);
                        }
                    }, i = 0 < $n && (gn.transitionDuration && 0 === hn.transitionDuration || gn.animationDuration && 0 === hn.animationDuration) && Math.max(hn.animationDelay, hn.transitionDelay);
                  i ? s(t, Math.floor(i * $n * 1000), !1) : t(), Z.resume = function () {
                    r(!0);
                  }, Z.pause = function () {
                    r(!1);
                  };
                } else
                  p();
            }
            var H = e || {};
            H.$$prepared || (H = f(F(H)));
            var K = {}, B = $(n);
            if (!B || !B.parentNode || !h.enabled())
              return I();
            var J, z, G, X, Z, _, nn, tn, en, an, rn = [], on = n.attr('class'), sn = r(H), un = [];
            if (0 === H.duration || !l.animations && !l.transitions)
              return I();
            var ln = H.event && E(H.event) ? H.event.join(' ') : H.event, cn = '', fn = '';
            ln && H.structural ? cn = i(ln, 'ng-', !0) : ln && (cn = ln), H.addClass && (fn += i(H.addClass, '-add')), H.removeClass && (fn.length && (fn += ' '), fn += i(H.removeClass, '-remove')), H.applyClassesEarly && fn.length && R(n, H);
            var mn = [
                cn,
                fn
              ].join(' ').trim(), dn = on + ' ' + mn, vn = i(mn, '-active'), on = sn.to && 0 < Object.keys(sn.to).length;
            if (!(0 < (H.keyframeStyle || '').length || on || mn))
              return I();
            var pn, hn;
            0 < H.stagger ? (sn = parseFloat(H.stagger), hn = {
              transitionDelay: sn,
              animationDelay: sn,
              transitionDuration: 0,
              animationDuration: 0
            }) : (pn = g(B, dn), hn = A(B, mn, pn, Y)), H.$$skipPreparationClasses || a.addClass(n, mn), H.transitionStyle && (sn = [
              x,
              H.transitionStyle
            ], D(B, sn), rn.push(sn)), 0 <= H.duration && (sn = 0 < B.style[x].length, sn = T(H.duration, sn), D(B, sn), rn.push(sn)), H.keyframeStyle && (sn = [
              P,
              H.keyframeStyle
            ], D(B, sn), rn.push(sn));
            var $n = hn ? 0 <= H.staggerIndex ? H.staggerIndex : t.count(pn) : 0;
            (ln = 0 === $n) && !H.skipBlocking && C(B, 9999);
            var gn = S(B, dn, pn), Cn = gn.maxDelay;
            _ = Math.max(Cn, 0), tn = gn.maxDuration;
            var yn = {};
            if (yn.hasTransitions = 0 < gn.transitionDuration, yn.hasAnimations = 0 < gn.animationDuration, yn.hasTransitionAll = yn.hasTransitions && 'all' === gn.transitionProperty, yn.applyTransitionDuration = on && (yn.hasTransitions && !yn.hasTransitionAll || yn.hasAnimations && !yn.hasTransitions), yn.applyAnimationDuration = H.duration && yn.hasAnimations, yn.applyTransitionDelay = w(H.delay) && (yn.applyTransitionDuration || yn.hasTransitions), yn.applyAnimationDelay = w(H.delay) && yn.hasAnimations, yn.recalculateTimingStyles = 0 < fn.length, (yn.applyTransitionDuration || yn.applyAnimationDuration) && (tn = H.duration ? parseFloat(H.duration) : tn, yn.applyTransitionDuration && (yn.hasTransitions = !0, gn.transitionDuration = tn, sn = 0 < B.style[x + 'Property'].length, rn.push(T(tn, sn))), yn.applyAnimationDuration && (yn.hasAnimations = !0, gn.animationDuration = tn, rn.push([
                V,
                tn + 's'
              ]))), 0 === tn && !yn.recalculateTimingStyles)
              return I();
            if (null != H.delay) {
              var Dn;
              'boolean' != typeof H.delay && (Dn = parseFloat(H.delay), _ = Math.max(Dn, 0)), yn.applyTransitionDelay && rn.push([
                W,
                Dn + 's'
              ]), yn.applyAnimationDelay && rn.push([
                U,
                Dn + 's'
              ]);
            }
            return null == H.duration && 0 < gn.transitionDuration && (yn.recalculateTimingStyles = yn.recalculateTimingStyles || ln), nn = 1000 * _, en = 1000 * tn, H.skipBlocking || (yn.blockTransition = 0 < gn.transitionDuration, yn.blockKeyframeAnimation = 0 < gn.animationDuration && 0 < hn.animationDelay && 0 === hn.animationDuration), H.from && (H.cleanupStyles && j(K, B, Object.keys(H.from)), d(n, H)), yn.blockTransition || yn.blockKeyframeAnimation ? b(tn) : H.skipBlocking || C(B, !1), {
              $$willAnimate: !0,
              end: u,
              start: function () {
                if (!J)
                  return Z = {
                    end: u,
                    cancel: c,
                    resume: null,
                    pause: null
                  }, X = new o(Z), k(L), X;
              }
            };
          };
        }
      ];
    }
  ]).provider('$$animateCssDriver', [
    '$$animationProvider',
    function (n) {
      n.drivers.push('$$animateCssDriver'), this.$get = [
        '$animateCss',
        '$rootScope',
        '$$AnimateRunner',
        '$rootElement',
        '$sniffer',
        '$$jqLite',
        '$document',
        function (n, t, e, a, r, i, o) {
          function s(n) {
            return n.replace(/\bng-\S+\b/g, '');
          }
          function u(n, t) {
            return K(n) && (n = n.split(' ')), K(t) && (t = t.split(' ')), n.filter(function (n) {
              return -1 === t.indexOf(n);
            }).join(' ');
          }
          function l(t, a, r) {
            function i(n) {
              var t = {}, e = $(n).getBoundingClientRect();
              return M([
                'width',
                'height',
                'top',
                'left'
              ], function (n) {
                var a = e[n];
                switch (n) {
                case 'top':
                  a += m.scrollTop;
                  break;
                case 'left':
                  a += m.scrollLeft;
                }
                t[n] = Math.floor(a) + 'px';
              }), t;
            }
            function o() {
              var t = s(r.attr('class') || ''), e = u(t, f), t = u(f, t), e = n(c, {
                  to: i(r),
                  addClass: 'ng-anchor-in ' + e,
                  removeClass: 'ng-anchor-out ' + t,
                  delay: !0
                });
              return e.$$willAnimate ? e : null;
            }
            function l() {
              c.remove(), a.removeClass('ng-animate-shim'), r.removeClass('ng-animate-shim');
            }
            var c = J($(a).cloneNode(!0)), f = s(c.attr('class') || '');
            a.addClass('ng-animate-shim'), r.addClass('ng-animate-shim'), c.addClass('ng-anchor'), d.append(c);
            var v;
            if (!(t = function () {
                var t = n(c, {
                  addClass: 'ng-anchor-out',
                  delay: !0,
                  from: i(a)
                });
                return t.$$willAnimate ? t : null;
              }()) && !(v = o()))
              return l();
            var p = t || v;
            return {
              start: function () {
                function n() {
                  a && a.end();
                }
                var t, a = p.start();
                return a.done(function () {
                  if (a = null, !v && (v = o()))
                    return a = v.start(), a.done(function () {
                      a = null, l(), t.complete();
                    }), a;
                  l(), t.complete();
                }), t = new e({
                  end: n,
                  cancel: n
                });
              }
            };
          }
          function c(n, t, a, r) {
            var i = f(n), o = f(t), s = [];
            if (M(r, function (n) {
                (n = l(a, n.out, n.in)) && s.push(n);
              }), i || o || 0 !== s.length)
              return {
                start: function () {
                  function n() {
                    M(t, function (n) {
                      n.end();
                    });
                  }
                  var t = [];
                  i && t.push(i.start()), o && t.push(o.start()), M(s, function (n) {
                    t.push(n.start());
                  });
                  var a = new e({
                    end: n,
                    cancel: n
                  });
                  return e.all(t, function (n) {
                    a.complete(n);
                  }), a;
                }
              };
          }
          function f(t) {
            var e = t.element, a = t.options || {};
            return t.structural && (a.event = t.event, a.structural = !0, a.applyClassesEarly = !0, 'leave' === t.event && (a.onDone = a.domOperation)), a.preparationClasses && (a.event = A(a.event, a.preparationClasses)), t = n(e, a), t.$$willAnimate ? t : null;
          }
          if (!r.animations && !r.transitions)
            return Q;
          var m = o[0].body;
          t = $(a);
          var d = J(t.parentNode && 11 === t.parentNode.nodeType || m.contains(t) ? t : m);
          return function (n) {
            return n.from && n.to ? c(n.from, n.to, n.classes, n.anchors) : f(n);
          };
        }
      ];
    }
  ]).provider('$$animateJs', [
    '$animateProvider',
    function (n) {
      this.$get = [
        '$injector',
        '$$AnimateRunner',
        '$$jqLite',
        function (t, e, a) {
          function r(e) {
            e = E(e) ? e : e.split(' ');
            for (var a = [], r = {}, i = 0; i < e.length; i++) {
              var o = e[i], s = n.$$registeredAnimations[o];
              s && !r[o] && (a.push(t.get(s)), r[o] = !0);
            }
            return a;
          }
          var i = c(a);
          return function (n, t, a, o) {
            function s() {
              o.domOperation(), i(n, o);
            }
            function u(n, t, a, r, i) {
              switch (a) {
              case 'animate':
                t = [
                  t,
                  r.from,
                  r.to,
                  i
                ];
                break;
              case 'setClass':
                t = [
                  t,
                  h,
                  $,
                  i
                ];
                break;
              case 'addClass':
                t = [
                  t,
                  h,
                  i
                ];
                break;
              case 'removeClass':
                t = [
                  t,
                  $,
                  i
                ];
                break;
              default:
                t = [
                  t,
                  i
                ];
              }
              if (t.push(r), n = n.apply(n, t))
                if (L(n.start) && (n = n.start()), n instanceof e)
                  n.done(i);
                else if (L(n))
                  return n;
              return Q;
            }
            function l(n, t, a, r, i) {
              var o = [];
              return M(r, function (r) {
                var s = r[i];
                s && o.push(function () {
                  var r, i, o = !1, l = function (n) {
                      o || (o = !0, (i || Q)(n), r.complete(!n));
                    };
                  return r = new e({
                    end: function () {
                      l();
                    },
                    cancel: function () {
                      l(!0);
                    }
                  }), i = u(s, n, t, a, function (n) {
                    l(!1 === n);
                  }), r;
                });
              }), o;
            }
            function c(n, t, a, r, i) {
              var o = l(n, t, a, r, i);
              if (0 === o.length) {
                var s, u;
                'beforeSetClass' === i ? (s = l(n, 'removeClass', a, r, 'beforeRemoveClass'), u = l(n, 'addClass', a, r, 'beforeAddClass')) : 'setClass' === i && (s = l(n, 'removeClass', a, r, 'removeClass'), u = l(n, 'addClass', a, r, 'addClass')), s && (o = o.concat(s)), u && (o = o.concat(u));
              }
              if (0 !== o.length)
                return function (n) {
                  var t = [];
                  return o.length && M(o, function (n) {
                    t.push(n());
                  }), t.length ? e.all(t, n) : n(), function (n) {
                    M(t, function (t) {
                      n ? t.cancel() : t.end();
                    });
                  };
                };
            }
            var d = !1;
            3 === arguments.length && H(a) && (o = a, a = null), o = f(o), a || (a = n.attr('class') || '', o.addClass && (a += ' ' + o.addClass), o.removeClass && (a += ' ' + o.removeClass));
            var v, p, h = o.addClass, $ = o.removeClass, g = r(a);
            if (g.length) {
              var C, y;
              'leave' === t ? (y = 'leave', C = 'afterLeave') : (y = 'before' + t.charAt(0).toUpperCase() + t.substr(1), C = t), 'enter' !== t && 'move' !== t && (v = c(n, t, o, g, y)), p = c(n, t, o, g, C);
            }
            if (v || p) {
              var D;
              return {
                $$willAnimate: !0,
                end: function () {
                  return D ? D.end() : (d = !0, s(), m(n, o), D = new e(), D.complete(!0)), D;
                },
                start: function () {
                  function t(t) {
                    d = !0, s(), m(n, o), D.complete(t);
                  }
                  if (D)
                    return D;
                  D = new e();
                  var a, r = [];
                  return v && r.push(function (n) {
                    a = v(n);
                  }), r.length ? r.push(function (n) {
                    s(), n(!0);
                  }) : s(), p && r.push(function (n) {
                    a = p(n);
                  }), D.setHost({
                    end: function () {
                      d || ((a || Q)(void 0), t(void 0));
                    },
                    cancel: function () {
                      d || ((a || Q)(!0), t(!0));
                    }
                  }), e.chain(r, t), D;
                }
              };
            }
          };
        }
      ];
    }
  ]).provider('$$animateJsDriver', [
    '$$animationProvider',
    function (n) {
      n.drivers.push('$$animateJsDriver'), this.$get = [
        '$$animateJs',
        '$$AnimateRunner',
        function (n, t) {
          function e(t) {
            return n(t.element, t.event, t.classes, t.options);
          }
          return function (n) {
            if (!n.from || !n.to)
              return e(n);
            var a = e(n.from), r = e(n.to);
            return a || r ? {
              start: function () {
                function n() {
                  return function () {
                    M(e, function (n) {
                      n.end();
                    });
                  };
                }
                var e = [];
                a && e.push(a.start()), r && e.push(r.start()), t.all(e, function (n) {
                  i.complete(n);
                });
                var i = new t({
                  end: n(),
                  cancel: n()
                });
                return i;
              }
            } : void 0;
          };
        }
      ];
    }
  ]);
}(window, window.angular);