!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(((e = 'undefined' != typeof globalThis ? globalThis : e || self).path2dPolyfill = {}));
})(this, function (e) {
  'use strict';
  var t = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 },
    n = /([astvzqmhlc])([^astvzqmhlc]*)/gi,
    a = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
  var r = function (e) {
    var r = [],
      s = String(e).trim();
    return (
      ('M' !== s[0] && 'm' !== s[0]) ||
        s.replace(n, function (e, n, s) {
          var o = n.toLowerCase(),
            i = (function (e) {
              var t = e.match(a);
              return t ? t.map(Number) : [];
            })(s),
            l = n;
          if (('m' === o && i.length > 2 && (r.push([l].concat(i.splice(0, 2))), (o = 'l'), (l = 'm' === l ? 'l' : 'L')), i.length < t[o])) return '';
          for (r.push([l].concat(i.splice(0, t[o]))); i.length >= t[o] && i.length && t[o]; ) r.push([l].concat(i.splice(0, t[o])));
          return '';
        }),
      r
    );
  };
  function s(e, t) {
    for (var n = 0; n < t.length; n++) {
      var a = t[n];
      (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  function o(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return i(e);
      })(e) ||
      (function (e) {
        if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (!e) return;
        if ('string' == typeof e) return i(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        'Object' === n && e.constructor && (n = e.constructor.name);
        if ('Map' === n || 'Set' === n) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t);
      })(e) ||
      (function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      })()
    );
  }
  function i(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
    return a;
  }
  function l(e, t) {
    var n = e.x * Math.cos(t) - e.y * Math.sin(t),
      a = e.y * Math.cos(t) + e.x * Math.sin(t);
    (e.x = n), (e.y = a);
  }
  function u(e, t) {
    (e.x *= t), (e.y *= t);
  }
  var c = function (e) {
    if (
      void 0 !== e &&
      e.CanvasRenderingContext2D &&
      (!e.Path2D ||
        !(function (e) {
          var t = e.document.createElement('canvas').getContext('2d'),
            n = new e.Path2D('M0 0 L1 1');
          return (t.strokeStyle = 'red'), (t.lineWidth = 1), t.stroke(n), 255 === t.getImageData(0, 0, 1, 1).data[0];
        })(e))
    ) {
      var t = (function () {
          function e(t) {
            var n;
            ((function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, e),
            (this.segments = []),
            t && t instanceof e)
              ? (n = this.segments).push.apply(n, o(t.segments))
              : t && (this.segments = r(t));
          }
          var t, n, a;
          return (
            (t = e),
            (n = [
              {
                key: 'addPath',
                value: function (t) {
                  var n;
                  t && t instanceof e && (n = this.segments).push.apply(n, o(t.segments));
                },
              },
              {
                key: 'moveTo',
                value: function (e, t) {
                  this.segments.push(['M', e, t]);
                },
              },
              {
                key: 'lineTo',
                value: function (e, t) {
                  this.segments.push(['L', e, t]);
                },
              },
              {
                key: 'arc',
                value: function (e, t, n, a, r, s) {
                  this.segments.push(['AC', e, t, n, a, r, !!s]);
                },
              },
              {
                key: 'arcTo',
                value: function (e, t, n, a, r) {
                  this.segments.push(['AT', e, t, n, a, r]);
                },
              },
              {
                key: 'ellipse',
                value: function (e, t, n, a, r, s, o, i) {
                  this.segments.push(['E', e, t, n, a, r, s, o, !!i]);
                },
              },
              {
                key: 'closePath',
                value: function () {
                  this.segments.push(['Z']);
                },
              },
              {
                key: 'bezierCurveTo',
                value: function (e, t, n, a, r, s) {
                  this.segments.push(['C', e, t, n, a, r, s]);
                },
              },
              {
                key: 'quadraticCurveTo',
                value: function (e, t, n, a) {
                  this.segments.push(['Q', e, t, n, a]);
                },
              },
              {
                key: 'rect',
                value: function (e, t, n, a) {
                  this.segments.push(['R', e, t, n, a]);
                },
              },
            ]) && s(t.prototype, n),
            a && s(t, a),
            e
          );
        })(),
        n = e.CanvasRenderingContext2D.prototype.fill,
        a = e.CanvasRenderingContext2D.prototype.stroke;
      (e.CanvasRenderingContext2D.prototype.fill = function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
        var r = 'nonzero';
        if (0 === t.length || (1 === t.length && 'string' == typeof t[0])) n.apply(this, t);
        else {
          2 === arguments.length && (r = t[1]);
          var s = t[0];
          c(this, s.segments), n.call(this, r);
        }
      }),
        (e.CanvasRenderingContext2D.prototype.stroke = function (e) {
          e ? (c(this, e.segments), a.call(this)) : a.call(this);
        });
      var i = e.CanvasRenderingContext2D.prototype.isPointInPath;
      (e.CanvasRenderingContext2D.prototype.isPointInPath = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        if ('Path2D' === t[0].constructor.name) {
          var a = t[1],
            r = t[2],
            s = t[3] || 'nonzero',
            o = t[0];
          return c(this, o.segments), i.apply(this, [a, r, s]);
        }
        return i.apply(this, t);
      }),
        (e.Path2D = t);
    }
    function c(e, t) {
      var n,
        a,
        r,
        s,
        o,
        i,
        c,
        h,
        f,
        y,
        p,
        v,
        g,
        m,
        d,
        b,
        x,
        k,
        C,
        T,
        P,
        M,
        w,
        A,
        q,
        D,
        z,
        R,
        S,
        I = { x: 0, y: 0 },
        j = { x: 0, y: 0 };
      e.beginPath();
      for (var E = 0; E < t.length; ++E) {
        var L = t[E];
        switch (('S' !== (T = L[0]) && 's' !== T && 'C' !== T && 'c' !== T && ((M = null), (w = null)), 'T' !== T && 't' !== T && 'Q' !== T && 'q' !== T && ((A = null), (q = null)), T)) {
          case 'm':
          case 'M':
            'm' === T ? ((p += L[1]), (g += L[2])) : ((p = L[1]), (g = L[2])), ('M' !== T && I) || (I = { x: p, y: g }), e.moveTo(p, g);
            break;
          case 'l':
            (p += L[1]), (g += L[2]), e.lineTo(p, g);
            break;
          case 'L':
            (p = L[1]), (g = L[2]), e.lineTo(p, g);
            break;
          case 'H':
            (p = L[1]), e.lineTo(p, g);
            break;
          case 'h':
            (p += L[1]), e.lineTo(p, g);
            break;
          case 'V':
            (g = L[1]), e.lineTo(p, g);
            break;
          case 'v':
            (g += L[1]), e.lineTo(p, g);
            break;
          case 'a':
          case 'A':
            'a' === T ? ((p += L[6]), (g += L[7])) : ((p = L[6]), (g = L[7])),
              (b = L[1]),
              (x = L[2]),
              (c = (L[3] * Math.PI) / 180),
              (r = !!L[4]),
              (s = !!L[5]),
              (o = { x: p, y: g }),
              l((i = { x: (j.x - o.x) / 2, y: (j.y - o.y) / 2 }), -c),
              (h = (i.x * i.x) / (b * b) + (i.y * i.y) / (x * x)) > 1 && ((b *= h = Math.sqrt(h)), (x *= h)),
              (f = b * b * x * x),
              (y = b * b * i.y * i.y + x * x * i.x * i.x),
              u((P = { x: (b * i.y) / x, y: (-x * i.x) / b }), s !== r ? Math.sqrt((f - y) / y) || 0 : -Math.sqrt((f - y) / y) || 0),
              (a = Math.atan2((i.y - P.y) / x, (i.x - P.x) / b)),
              (n = Math.atan2(-(i.y + P.y) / x, -(i.x + P.x) / b)),
              l(P, c),
              (z = P),
              (R = (o.x + j.x) / 2),
              (S = (o.y + j.y) / 2),
              (z.x += R),
              (z.y += S),
              e.save(),
              e.translate(P.x, P.y),
              e.rotate(c),
              e.scale(b, x),
              e.arc(0, 0, 1, a, n, !s),
              e.restore();
            break;
          case 'C':
            (M = L[3]), (w = L[4]), (p = L[5]), (g = L[6]), e.bezierCurveTo(L[1], L[2], M, w, p, g);
            break;
          case 'c':
            e.bezierCurveTo(L[1] + p, L[2] + g, L[3] + p, L[4] + g, L[5] + p, L[6] + g), (M = L[3] + p), (w = L[4] + g), (p += L[5]), (g += L[6]);
            break;
          case 'S':
            (null !== M && null !== M) || ((M = p), (w = g)), e.bezierCurveTo(2 * p - M, 2 * g - w, L[1], L[2], L[3], L[4]), (M = L[1]), (w = L[2]), (p = L[3]), (g = L[4]);
            break;
          case 's':
            (null !== M && null !== M) || ((M = p), (w = g)), e.bezierCurveTo(2 * p - M, 2 * g - w, L[1] + p, L[2] + g, L[3] + p, L[4] + g), (M = L[1] + p), (w = L[2] + g), (p += L[3]), (g += L[4]);
            break;
          case 'Q':
            (A = L[1]), (q = L[2]), (p = L[3]), (g = L[4]), e.quadraticCurveTo(A, q, p, g);
            break;
          case 'q':
            (A = L[1] + p), (q = L[2] + g), (p += L[3]), (g += L[4]), e.quadraticCurveTo(A, q, p, g);
            break;
          case 'T':
            (null !== A && null !== A) || ((A = p), (q = g)), (A = 2 * p - A), (q = 2 * g - q), (p = L[1]), (g = L[2]), e.quadraticCurveTo(A, q, p, g);
            break;
          case 't':
            (null !== A && null !== A) || ((A = p), (q = g)), (A = 2 * p - A), (q = 2 * g - q), (p += L[1]), (g += L[2]), e.quadraticCurveTo(A, q, p, g);
            break;
          case 'z':
          case 'Z':
            (p = I.x), (g = I.y), (I = void 0), e.closePath();
            break;
          case 'AC':
            (p = L[1]), (g = L[2]), (d = L[3]), (a = L[4]), (n = L[5]), (D = L[6]), e.arc(p, g, d, a, n, D);
            break;
          case 'AT':
            (v = L[1]), (m = L[2]), (p = L[3]), (g = L[4]), (d = L[5]), e.arcTo(v, m, p, g, d);
            break;
          case 'E':
            (p = L[1]),
              (g = L[2]),
              (b = L[3]),
              (x = L[4]),
              (c = L[5]),
              (a = L[6]),
              (n = L[7]),
              (D = L[8]),
              e.save(),
              e.translate(p, g),
              e.rotate(c),
              e.scale(b, x),
              e.arc(0, 0, 1, a, n, D),
              e.restore();
            break;
          case 'R':
            (p = L[1]), (g = L[2]), (k = L[3]), (C = L[4]), (I = { x: p, y: g }), e.rect(p, g, k, C);
        }
        (j.x = p), (j.y = g);
      }
    }
  };
  'undefined' != typeof window && c(window);
  var h = { path2dPolyfill: c, parsePath: r };
  (e.default = h), Object.defineProperty(e, '__esModule', { value: !0 });
});
//# sourceMappingURL=index.js.map
