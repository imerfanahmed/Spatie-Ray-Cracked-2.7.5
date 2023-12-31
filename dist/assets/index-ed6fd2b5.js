import {
  j as b,
  c as Me,
  g as Dr,
  u as Dn,
  r as h,
  i as ht,
  R as Nt,
  a as Ir,
  b as Mr,
  e as Pr,
  d as Vr,
  E as Rr,
} from "./index-12d27707.js";
function _({ htmlFor: e, children: t }) {
  return b.jsx("label", {
    htmlFor: e,
    className: "font-semibold text-sm text-gray-500 dark:text-gray-400",
    children: t,
  });
}
function Tr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var In = Tr,
  Lr = typeof Me == "object" && Me && Me.Object === Object && Me,
  kr = Lr,
  $r = kr,
  jr = typeof self == "object" && self && self.Object === Object && self,
  Br = $r || jr || Function("return this")(),
  Mn = Br,
  Nr = Mn,
  Hr = function () {
    return Nr.Date.now();
  },
  _r = Hr,
  Ur = /\s/;
function zr(e) {
  for (var t = e.length; t-- && Ur.test(e.charAt(t)); );
  return t;
}
var Wr = zr,
  Gr = Wr,
  Yr = /^\s+/;
function qr(e) {
  return e && e.slice(0, Gr(e) + 1).replace(Yr, "");
}
var Kr = qr,
  Xr = Mn,
  Zr = Xr.Symbol,
  Pn = Zr,
  Ht = Pn,
  Vn = Object.prototype,
  Jr = Vn.hasOwnProperty,
  Qr = Vn.toString,
  ye = Ht ? Ht.toStringTag : void 0;
function ei(e) {
  var t = Jr.call(e, ye),
    r = e[ye];
  try {
    e[ye] = void 0;
    var i = !0;
  } catch {}
  var n = Qr.call(e);
  return i && (t ? (e[ye] = r) : delete e[ye]), n;
}
var ti = ei,
  ni = Object.prototype,
  ri = ni.toString;
function ii(e) {
  return ri.call(e);
}
var ai = ii,
  _t = Pn,
  oi = ti,
  ui = ai,
  si = "[object Null]",
  li = "[object Undefined]",
  Ut = _t ? _t.toStringTag : void 0;
function ci(e) {
  return e == null
    ? e === void 0
      ? li
      : si
    : Ut && Ut in Object(e)
    ? oi(e)
    : ui(e);
}
var di = ci;
function fi(e) {
  return e != null && typeof e == "object";
}
var pi = fi,
  mi = di,
  hi = pi,
  vi = "[object Symbol]";
function gi(e) {
  return typeof e == "symbol" || (hi(e) && mi(e) == vi);
}
var bi = gi,
  Ei = Kr,
  zt = In,
  yi = bi,
  Wt = 0 / 0,
  Ci = /^[-+]0x[0-9a-f]+$/i,
  Si = /^0b[01]+$/i,
  xi = /^0o[0-7]+$/i,
  Oi = parseInt;
function Fi(e) {
  if (typeof e == "number") return e;
  if (yi(e)) return Wt;
  if (zt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = zt(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = Ei(e);
  var r = Si.test(e);
  return r || xi.test(e) ? Oi(e.slice(2), r ? 2 : 8) : Ci.test(e) ? Wt : +e;
}
var wi = Fi,
  Ai = In,
  ot = _r,
  Gt = wi,
  Di = "Expected a function",
  Ii = Math.max,
  Mi = Math.min;
function Pi(e, t, r) {
  var i,
    n,
    a,
    u,
    o,
    s,
    l = 0,
    c = !1,
    d = !1,
    g = !0;
  if (typeof e != "function") throw new TypeError(Di);
  (t = Gt(t) || 0),
    Ai(r) &&
      ((c = !!r.leading),
      (d = "maxWait" in r),
      (a = d ? Ii(Gt(r.maxWait) || 0, t) : a),
      (g = "trailing" in r ? !!r.trailing : g));
  function E(y) {
    var C = i,
      D = n;
    return (i = n = void 0), (l = y), (u = e.apply(D, C)), u;
  }
  function v(y) {
    return (l = y), (o = setTimeout(f, t)), c ? E(y) : u;
  }
  function p(y) {
    var C = y - s,
      D = y - l,
      R = t - C;
    return d ? Mi(R, a - D) : R;
  }
  function m(y) {
    var C = y - s,
      D = y - l;
    return s === void 0 || C >= t || C < 0 || (d && D >= a);
  }
  function f() {
    var y = ot();
    if (m(y)) return S(y);
    o = setTimeout(f, p(y));
  }
  function S(y) {
    return (o = void 0), g && i ? E(y) : ((i = n = void 0), u);
  }
  function x() {
    o !== void 0 && clearTimeout(o), (l = 0), (i = s = n = o = void 0);
  }
  function A() {
    return o === void 0 ? u : S(ot());
  }
  function I() {
    var y = ot(),
      C = m(y);
    if (((i = arguments), (n = this), (s = y), C)) {
      if (o === void 0) return v(s);
      if (d) return clearTimeout(o), (o = setTimeout(f, t)), E(s);
    }
    return o === void 0 && (o = setTimeout(f, t)), u;
  }
  return (I.cancel = x), (I.flush = A), I;
}
var Vi = Pi;
const Rn = Dr(Vi),
  Yt = "CmdOrCtrl+Shift+";
function Ri() {
  return b.jsxs(b.Fragment, {
    children: [
      b.jsx("h1", { className: "markup-h1 mt-4", children: "Shortcuts" }),
      b.jsxs("div", {
        className: "grid gap-2",
        children: [
          b.jsx(_, {
            htmlFor: "toggleVisibilityGlobalHotkey",
            children: "Toggle visibility from anywhere",
          }),
          b.jsx(ut, { id: "toggleVisibilityGlobalHotkey" }),
        ],
      }),
      b.jsxs("div", {
        className: "grid gap-2",
        children: [
          b.jsx(_, {
            htmlFor: "newScreenGlobalHotkey",
            children: "Clear Ray from anywhere",
          }),
          b.jsx(ut, { id: "newScreenGlobalHotkey" }),
        ],
      }),
      b.jsxs("div", {
        className: "grid gap-2",
        children: [
          b.jsx(_, {
            htmlFor: "toggleAlwaysOnTopHotkey",
            children: "Toggle always on top",
          }),
          b.jsx(ut, { id: "toggleAlwaysOnTopHotkey" }),
        ],
      }),
    ],
  });
}
function ut({ id: e }) {
  const [t, r] = Dn(e),
    i = t.replace(Yt, ""),
    [n, a] = h.useState(i),
    u = h.useCallback(
      Rn((s) => {
        i !== s && r(s ? `${Yt}${s}` : "");
      }, 250),
      [i],
    );
  function o(s) {
    a(s.target.value), u(s.target.value);
  }
  return b.jsxs("div", {
    className: `
                flex items-center w-full px-4 h-10
                bg-gray-100 outline-none rounded-sm
                text-gray-700 focus:text-indigo-700 focus:bg-indigo-50
            `,
    children: [
      b.jsxs("label", {
        htmlFor: e,
        className:
          "flex-none text-sm text-gray-500 select-none cursor-not-allowed pr-1",
        children: [ht ? "Command" : "Control", " + Shift +", " "],
      }),
      b.jsx("input", {
        id: e,
        value: n,
        className: "outline-none bg-transparent flex-grow pb-0.5 uppercase",
        type: "text",
        maxLength: 1,
        onChange: o,
      }),
    ],
  });
}
function me(e) {
  "@babel/helpers - typeof";
  return (
    (me =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    me(e)
  );
}
function Ti(e, t) {
  if (me(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(e, t || "default");
    if (me(i) !== "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Tn(e) {
  var t = Ti(e, "string");
  return me(t) === "symbol" ? t : String(t);
}
function xe(e, t, r) {
  return (
    (t = Tn(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function qt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t &&
      (i = i.filter(function (n) {
        return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      r.push.apply(r, i);
  }
  return r;
}
function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qt(Object(r), !0).forEach(function (i) {
          xe(e, i, r[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : qt(Object(r)).forEach(function (i) {
          Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(r, i));
        });
  }
  return e;
}
function Li(e) {
  if (Array.isArray(e)) return e;
}
function ki(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var i,
      n,
      a,
      u,
      o = [],
      s = !0,
      l = !1;
    try {
      if (((a = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        s = !1;
      } else
        for (
          ;
          !(s = (i = a.call(r)).done) && (o.push(i.value), o.length !== t);
          s = !0
        );
    } catch (c) {
      (l = !0), (n = c);
    } finally {
      try {
        if (!s && r.return != null && ((u = r.return()), Object(u) !== u))
          return;
      } finally {
        if (l) throw n;
      }
    }
    return o;
  }
}
function vt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
  return i;
}
function Ln(e, t) {
  if (e) {
    if (typeof e == "string") return vt(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return vt(e, t);
  }
}
function $i() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oe(e, t) {
  return Li(e) || ki(e, t) || Ln(e, t) || $i();
}
function ji(e, t) {
  if (e == null) return {};
  var r = {},
    i = Object.keys(e),
    n,
    a;
  for (a = 0; a < i.length; a++)
    (n = i[a]), !(t.indexOf(n) >= 0) && (r[n] = e[n]);
  return r;
}
function ue(e, t) {
  if (e == null) return {};
  var r = ji(e, t),
    i,
    n;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      (i = a[n]),
        !(t.indexOf(i) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, i) &&
          (r[i] = e[i]);
  }
  return r;
}
var Bi = [
  "defaultInputValue",
  "defaultMenuIsOpen",
  "defaultValue",
  "inputValue",
  "menuIsOpen",
  "onChange",
  "onInputChange",
  "onMenuClose",
  "onMenuOpen",
  "value",
];
function Ni(e) {
  var t = e.defaultInputValue,
    r = t === void 0 ? "" : t,
    i = e.defaultMenuIsOpen,
    n = i === void 0 ? !1 : i,
    a = e.defaultValue,
    u = a === void 0 ? null : a,
    o = e.inputValue,
    s = e.menuIsOpen,
    l = e.onChange,
    c = e.onInputChange,
    d = e.onMenuClose,
    g = e.onMenuOpen,
    E = e.value,
    v = ue(e, Bi),
    p = h.useState(o !== void 0 ? o : r),
    m = oe(p, 2),
    f = m[0],
    S = m[1],
    x = h.useState(s !== void 0 ? s : n),
    A = oe(x, 2),
    I = A[0],
    y = A[1],
    C = h.useState(E !== void 0 ? E : u),
    D = oe(C, 2),
    R = D[0],
    q = D[1],
    Z = h.useCallback(
      function (ee, se) {
        typeof l == "function" && l(ee, se), q(ee);
      },
      [l],
    ),
    U = h.useCallback(
      function (ee, se) {
        var le;
        typeof c == "function" && (le = c(ee, se)), S(le !== void 0 ? le : ee);
      },
      [c],
    ),
    J = h.useCallback(
      function () {
        typeof g == "function" && g(), y(!0);
      },
      [g],
    ),
    k = h.useCallback(
      function () {
        typeof d == "function" && d(), y(!1);
      },
      [d],
    ),
    $ = o !== void 0 ? o : f,
    K = s !== void 0 ? s : I,
    Q = E !== void 0 ? E : R;
  return O(
    O({}, v),
    {},
    {
      inputValue: $,
      menuIsOpen: K,
      onChange: Z,
      onInputChange: U,
      onMenuClose: k,
      onMenuOpen: J,
      value: Q,
    },
  );
}
function w() {
  return (
    (w = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r)
              Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
          }
          return e;
        }),
    w.apply(this, arguments)
  );
}
function Hi(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kt(e, t) {
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(e, Tn(i.key), i);
  }
}
function _i(e, t, r) {
  return (
    t && Kt(e.prototype, t),
    r && Kt(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function gt(e, t) {
  return (
    (gt = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (i, n) {
          return (i.__proto__ = n), i;
        }),
    gt(e, t)
  );
}
function Ui(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && gt(e, t);
}
function Be(e) {
  return (
    (Be = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Be(e)
  );
}
function zi() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Wi(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Gi(e, t) {
  if (t && (me(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return Wi(e);
}
function Yi(e) {
  var t = zi();
  return function () {
    var i = Be(e),
      n;
    if (t) {
      var a = Be(this).constructor;
      n = Reflect.construct(i, arguments, a);
    } else n = i.apply(this, arguments);
    return Gi(this, n);
  };
}
function qi(e) {
  if (Array.isArray(e)) return vt(e);
}
function Ki(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function Xi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kn(e) {
  return qi(e) || Ki(e) || Ln(e) || Xi();
}
function Zi(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Ji(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Qi = (function () {
    function e(r) {
      var i = this;
      (this._insertTag = function (n) {
        var a;
        i.tags.length === 0
          ? i.insertionPoint
            ? (a = i.insertionPoint.nextSibling)
            : i.prepend
            ? (a = i.container.firstChild)
            : (a = i.before)
          : (a = i.tags[i.tags.length - 1].nextSibling),
          i.container.insertBefore(n, a),
          i.tags.push(n);
      }),
        (this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = r.nonce),
        (this.key = r.key),
        (this.container = r.container),
        (this.prepend = r.prepend),
        (this.insertionPoint = r.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (i) {
        i.forEach(this._insertTag);
      }),
      (t.insert = function (i) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Ji(this));
        var n = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var a = Zi(n);
          try {
            a.insertRule(i, a.cssRules.length);
          } catch {}
        } else n.appendChild(document.createTextNode(i));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (i) {
          return i.parentNode && i.parentNode.removeChild(i);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  H = "-ms-",
  Ne = "-moz-",
  M = "-webkit-",
  $n = "comm",
  Ft = "rule",
  wt = "decl",
  ea = "@import",
  jn = "@keyframes",
  ta = "@layer",
  na = Math.abs,
  Ge = String.fromCharCode,
  ra = Object.assign;
function ia(e, t) {
  return B(e, 0) ^ 45
    ? (((((((t << 2) ^ B(e, 0)) << 2) ^ B(e, 1)) << 2) ^ B(e, 2)) << 2) ^
        B(e, 3)
    : 0;
}
function Bn(e) {
  return e.trim();
}
function aa(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function P(e, t, r) {
  return e.replace(t, r);
}
function bt(e, t) {
  return e.indexOf(t);
}
function B(e, t) {
  return e.charCodeAt(t) | 0;
}
function Oe(e, t, r) {
  return e.slice(t, r);
}
function re(e) {
  return e.length;
}
function At(e) {
  return e.length;
}
function Pe(e, t) {
  return t.push(e), e;
}
function oa(e, t) {
  return e.map(t).join("");
}
var Ye = 1,
  ge = 1,
  Nn = 0,
  W = 0,
  L = 0,
  be = "";
function qe(e, t, r, i, n, a, u) {
  return {
    value: e,
    root: t,
    parent: r,
    type: i,
    props: n,
    children: a,
    line: Ye,
    column: ge,
    length: u,
    return: "",
  };
}
function Ce(e, t) {
  return ra(qe("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ua() {
  return L;
}
function sa() {
  return (L = W > 0 ? B(be, --W) : 0), ge--, L === 10 && ((ge = 1), Ye--), L;
}
function G() {
  return (L = W < Nn ? B(be, W++) : 0), ge++, L === 10 && ((ge = 1), Ye++), L;
}
function ae() {
  return B(be, W);
}
function ke() {
  return W;
}
function De(e, t) {
  return Oe(be, e, t);
}
function Fe(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Hn(e) {
  return (Ye = ge = 1), (Nn = re((be = e))), (W = 0), [];
}
function _n(e) {
  return (be = ""), e;
}
function $e(e) {
  return Bn(De(W - 1, Et(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function la(e) {
  for (; (L = ae()) && L < 33; ) G();
  return Fe(e) > 2 || Fe(L) > 3 ? "" : " ";
}
function ca(e, t) {
  for (
    ;
    --t &&
    G() &&
    !(L < 48 || L > 102 || (L > 57 && L < 65) || (L > 70 && L < 97));

  );
  return De(e, ke() + (t < 6 && ae() == 32 && G() == 32));
}
function Et(e) {
  for (; G(); )
    switch (L) {
      case e:
        return W;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Et(L);
        break;
      case 40:
        e === 41 && Et(e);
        break;
      case 92:
        G();
        break;
    }
  return W;
}
function da(e, t) {
  for (; G() && e + L !== 47 + 10; )
    if (e + L === 42 + 42 && ae() === 47) break;
  return "/*" + De(t, W - 1) + "*" + Ge(e === 47 ? e : G());
}
function fa(e) {
  for (; !Fe(ae()); ) G();
  return De(e, W);
}
function pa(e) {
  return _n(je("", null, null, null, [""], (e = Hn(e)), 0, [0], e));
}
function je(e, t, r, i, n, a, u, o, s) {
  for (
    var l = 0,
      c = 0,
      d = u,
      g = 0,
      E = 0,
      v = 0,
      p = 1,
      m = 1,
      f = 1,
      S = 0,
      x = "",
      A = n,
      I = a,
      y = i,
      C = x;
    m;

  )
    switch (((v = S), (S = G()))) {
      case 40:
        if (v != 108 && B(C, d - 1) == 58) {
          bt((C += P($e(S), "&", "&\f")), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += $e(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += la(v);
        break;
      case 92:
        C += ca(ke() - 1, 7);
        continue;
      case 47:
        switch (ae()) {
          case 42:
          case 47:
            Pe(ma(da(G(), ke()), t, r), s);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * p:
        o[l++] = re(C) * f;
      case 125 * p:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            m = 0;
          case 59 + c:
            f == -1 && (C = P(C, /\f/g, "")),
              E > 0 &&
                re(C) - d &&
                Pe(
                  E > 32
                    ? Zt(C + ";", i, r, d - 1)
                    : Zt(P(C, " ", "") + ";", i, r, d - 2),
                  s,
                );
            break;
          case 59:
            C += ";";
          default:
            if (
              (Pe((y = Xt(C, t, r, l, c, n, o, x, (A = []), (I = []), d)), a),
              S === 123)
            )
              if (c === 0) je(C, t, y, y, A, a, d, o, I);
              else
                switch (g === 99 && B(C, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    je(
                      e,
                      y,
                      y,
                      i && Pe(Xt(e, y, y, 0, 0, n, o, x, n, (A = []), d), I),
                      n,
                      I,
                      d,
                      o,
                      i ? A : I,
                    );
                    break;
                  default:
                    je(C, y, y, y, [""], I, 0, o, I);
                }
        }
        (l = c = E = 0), (p = f = 1), (x = C = ""), (d = u);
        break;
      case 58:
        (d = 1 + re(C)), (E = v);
      default:
        if (p < 1) {
          if (S == 123) --p;
          else if (S == 125 && p++ == 0 && sa() == 125) continue;
        }
        switch (((C += Ge(S)), S * p)) {
          case 38:
            f = c > 0 ? 1 : ((C += "\f"), -1);
            break;
          case 44:
            (o[l++] = (re(C) - 1) * f), (f = 1);
            break;
          case 64:
            ae() === 45 && (C += $e(G())),
              (g = ae()),
              (c = d = re((x = C += fa(ke())))),
              S++;
            break;
          case 45:
            v === 45 && re(C) == 2 && (p = 0);
        }
    }
  return a;
}
function Xt(e, t, r, i, n, a, u, o, s, l, c) {
  for (
    var d = n - 1, g = n === 0 ? a : [""], E = At(g), v = 0, p = 0, m = 0;
    v < i;
    ++v
  )
    for (var f = 0, S = Oe(e, d + 1, (d = na((p = u[v])))), x = e; f < E; ++f)
      (x = Bn(p > 0 ? g[f] + " " + S : P(S, /&\f/g, g[f]))) && (s[m++] = x);
  return qe(e, t, r, n === 0 ? Ft : o, s, l, c);
}
function ma(e, t, r) {
  return qe(e, t, r, $n, Ge(ua()), Oe(e, 2, -2), 0);
}
function Zt(e, t, r, i) {
  return qe(e, t, r, wt, Oe(e, 0, i), Oe(e, i + 1, -1), i);
}
function ve(e, t) {
  for (var r = "", i = At(e), n = 0; n < i; n++) r += t(e[n], n, e, t) || "";
  return r;
}
function ha(e, t, r, i) {
  switch (e.type) {
    case ta:
      if (e.children.length) break;
    case ea:
    case wt:
      return (e.return = e.return || e.value);
    case $n:
      return "";
    case jn:
      return (e.return = e.value + "{" + ve(e.children, i) + "}");
    case Ft:
      e.value = e.props.join(",");
  }
  return re((r = ve(e.children, i)))
    ? (e.return = e.value + "{" + r + "}")
    : "";
}
function va(e) {
  var t = At(e);
  return function (r, i, n, a) {
    for (var u = "", o = 0; o < t; o++) u += e[o](r, i, n, a) || "";
    return u;
  };
}
function ga(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function ba(e) {
  var t = Object.create(null);
  return function (r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ea = function (t, r, i) {
    for (
      var n = 0, a = 0;
      (n = a), (a = ae()), n === 38 && a === 12 && (r[i] = 1), !Fe(a);

    )
      G();
    return De(t, W);
  },
  ya = function (t, r) {
    var i = -1,
      n = 44;
    do
      switch (Fe(n)) {
        case 0:
          n === 38 && ae() === 12 && (r[i] = 1), (t[i] += Ea(W - 1, r, i));
          break;
        case 2:
          t[i] += $e(n);
          break;
        case 4:
          if (n === 44) {
            (t[++i] = ae() === 58 ? "&\f" : ""), (r[i] = t[i].length);
            break;
          }
        default:
          t[i] += Ge(n);
      }
    while ((n = G()));
    return t;
  },
  Ca = function (t, r) {
    return _n(ya(Hn(t), r));
  },
  Jt = new WeakMap(),
  Sa = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var r = t.value,
          i = t.parent,
          n = t.column === i.column && t.line === i.line;
        i.type !== "rule";

      )
        if (((i = i.parent), !i)) return;
      if (
        !(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Jt.get(i)) &&
        !n
      ) {
        Jt.set(t, !0);
        for (
          var a = [], u = Ca(r, a), o = i.props, s = 0, l = 0;
          s < u.length;
          s++
        )
          for (var c = 0; c < o.length; c++, l++)
            t.props[l] = a[s] ? u[s].replace(/&\f/g, o[c]) : o[c] + " " + u[s];
      }
    }
  },
  xa = function (t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 &&
        r.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Un(e, t) {
  switch (ia(e, t)) {
    case 5103:
      return M + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return M + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return M + e + Ne + e + H + e + e;
    case 6828:
    case 4268:
      return M + e + H + e + e;
    case 6165:
      return M + e + H + "flex-" + e + e;
    case 5187:
      return (
        M + e + P(e, /(\w+).+(:[^]+)/, M + "box-$1$2" + H + "flex-$1$2") + e
      );
    case 5443:
      return M + e + H + "flex-item-" + P(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        M + e + H + "flex-line-pack" + P(e, /align-content|flex-|-self/, "") + e
      );
    case 5548:
      return M + e + H + P(e, "shrink", "negative") + e;
    case 5292:
      return M + e + H + P(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        M +
        "box-" +
        P(e, "-grow", "") +
        M +
        e +
        H +
        P(e, "grow", "positive") +
        e
      );
    case 4554:
      return M + P(e, /([^-])(transform)/g, "$1" + M + "$2") + e;
    case 6187:
      return (
        P(P(P(e, /(zoom-|grab)/, M + "$1"), /(image-set)/, M + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return P(e, /(image-set\([^]*)/, M + "$1$`$1");
    case 4968:
      return (
        P(
          P(e, /(.+:)(flex-)?(.*)/, M + "box-pack:$3" + H + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        M +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return P(e, /(.+)-inline(.+)/, M + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (re(e) - 1 - t > 6)
        switch (B(e, t + 1)) {
          case 109:
            if (B(e, t + 4) !== 45) break;
          case 102:
            return (
              P(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  M +
                  "$2-$3$1" +
                  Ne +
                  (B(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~bt(e, "stretch")
              ? Un(P(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (B(e, t + 1) !== 115) break;
    case 6444:
      switch (B(e, re(e) - 3 - (~bt(e, "!important") && 10))) {
        case 107:
          return P(e, ":", ":" + M) + e;
        case 101:
          return (
            P(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                M +
                (B(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                M +
                "$2$3$1" +
                H +
                "$2box$3",
            ) + e
          );
      }
      break;
    case 5936:
      switch (B(e, t + 11)) {
        case 114:
          return M + e + H + P(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return M + e + H + P(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return M + e + H + P(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return M + e + H + e + e;
  }
  return e;
}
var Oa = function (t, r, i, n) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case wt:
          t.return = Un(t.value, t.length);
          break;
        case jn:
          return ve([Ce(t, { value: P(t.value, "@", "@" + M) })], n);
        case Ft:
          if (t.length)
            return oa(t.props, function (a) {
              switch (aa(a, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return ve(
                    [Ce(t, { props: [P(a, /:(read-\w+)/, ":" + Ne + "$1")] })],
                    n,
                  );
                case "::placeholder":
                  return ve(
                    [
                      Ce(t, {
                        props: [P(a, /:(plac\w+)/, ":" + M + "input-$1")],
                      }),
                      Ce(t, { props: [P(a, /:(plac\w+)/, ":" + Ne + "$1")] }),
                      Ce(t, { props: [P(a, /:(plac\w+)/, H + "input-$1")] }),
                    ],
                    n,
                  );
              }
              return "";
            });
      }
  },
  Fa = [Oa],
  wa = function (t) {
    var r = t.key;
    if (r === "css") {
      var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(i, function (p) {
        var m = p.getAttribute("data-emotion");
        m.indexOf(" ") !== -1 &&
          (document.head.appendChild(p), p.setAttribute("data-s", ""));
      });
    }
    var n = t.stylisPlugins || Fa,
      a = {},
      u,
      o = [];
    (u = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
        function (p) {
          for (
            var m = p.getAttribute("data-emotion").split(" "), f = 1;
            f < m.length;
            f++
          )
            a[m[f]] = !0;
          o.push(p);
        },
      );
    var s,
      l = [Sa, xa];
    {
      var c,
        d = [
          ha,
          ga(function (p) {
            c.insert(p);
          }),
        ],
        g = va(l.concat(n, d)),
        E = function (m) {
          return ve(pa(m), g);
        };
      s = function (m, f, S, x) {
        (c = S),
          E(m ? m + "{" + f.styles + "}" : f.styles),
          x && (v.inserted[f.name] = !0);
      };
    }
    var v = {
      key: r,
      sheet: new Qi({
        key: r,
        container: u,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: a,
      registered: {},
      insert: s,
    };
    return v.sheet.hydrate(o), v;
  },
  zn = { exports: {} },
  V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var j = typeof Symbol == "function" && Symbol.for,
  Dt = j ? Symbol.for("react.element") : 60103,
  It = j ? Symbol.for("react.portal") : 60106,
  Ke = j ? Symbol.for("react.fragment") : 60107,
  Xe = j ? Symbol.for("react.strict_mode") : 60108,
  Ze = j ? Symbol.for("react.profiler") : 60114,
  Je = j ? Symbol.for("react.provider") : 60109,
  Qe = j ? Symbol.for("react.context") : 60110,
  Mt = j ? Symbol.for("react.async_mode") : 60111,
  et = j ? Symbol.for("react.concurrent_mode") : 60111,
  tt = j ? Symbol.for("react.forward_ref") : 60112,
  nt = j ? Symbol.for("react.suspense") : 60113,
  Aa = j ? Symbol.for("react.suspense_list") : 60120,
  rt = j ? Symbol.for("react.memo") : 60115,
  it = j ? Symbol.for("react.lazy") : 60116,
  Da = j ? Symbol.for("react.block") : 60121,
  Ia = j ? Symbol.for("react.fundamental") : 60117,
  Ma = j ? Symbol.for("react.responder") : 60118,
  Pa = j ? Symbol.for("react.scope") : 60119;
function Y(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Dt:
        switch (((e = e.type), e)) {
          case Mt:
          case et:
          case Ke:
          case Ze:
          case Xe:
          case nt:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Qe:
              case tt:
              case it:
              case rt:
              case Je:
                return e;
              default:
                return t;
            }
        }
      case It:
        return t;
    }
  }
}
function Wn(e) {
  return Y(e) === et;
}
V.AsyncMode = Mt;
V.ConcurrentMode = et;
V.ContextConsumer = Qe;
V.ContextProvider = Je;
V.Element = Dt;
V.ForwardRef = tt;
V.Fragment = Ke;
V.Lazy = it;
V.Memo = rt;
V.Portal = It;
V.Profiler = Ze;
V.StrictMode = Xe;
V.Suspense = nt;
V.isAsyncMode = function (e) {
  return Wn(e) || Y(e) === Mt;
};
V.isConcurrentMode = Wn;
V.isContextConsumer = function (e) {
  return Y(e) === Qe;
};
V.isContextProvider = function (e) {
  return Y(e) === Je;
};
V.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Dt;
};
V.isForwardRef = function (e) {
  return Y(e) === tt;
};
V.isFragment = function (e) {
  return Y(e) === Ke;
};
V.isLazy = function (e) {
  return Y(e) === it;
};
V.isMemo = function (e) {
  return Y(e) === rt;
};
V.isPortal = function (e) {
  return Y(e) === It;
};
V.isProfiler = function (e) {
  return Y(e) === Ze;
};
V.isStrictMode = function (e) {
  return Y(e) === Xe;
};
V.isSuspense = function (e) {
  return Y(e) === nt;
};
V.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ke ||
    e === et ||
    e === Ze ||
    e === Xe ||
    e === nt ||
    e === Aa ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === it ||
        e.$$typeof === rt ||
        e.$$typeof === Je ||
        e.$$typeof === Qe ||
        e.$$typeof === tt ||
        e.$$typeof === Ia ||
        e.$$typeof === Ma ||
        e.$$typeof === Pa ||
        e.$$typeof === Da))
  );
};
V.typeOf = Y;
zn.exports = V;
var Va = zn.exports,
  Gn = Va,
  Ra = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Ta = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Yn = {};
Yn[Gn.ForwardRef] = Ra;
Yn[Gn.Memo] = Ta;
var La = !0;
function ka(e, t, r) {
  var i = "";
  return (
    r.split(" ").forEach(function (n) {
      e[n] !== void 0 ? t.push(e[n] + ";") : (i += n + " ");
    }),
    i
  );
}
var qn = function (t, r, i) {
    var n = t.key + "-" + r.name;
    (i === !1 || La === !1) &&
      t.registered[n] === void 0 &&
      (t.registered[n] = r.styles);
  },
  $a = function (t, r, i) {
    qn(t, r, i);
    var n = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var a = r;
      do t.insert(r === a ? "." + n : "", a, t.sheet, !0), (a = a.next);
      while (a !== void 0);
    }
  };
function ja(e) {
  for (var t = 0, r, i = 0, n = e.length; n >= 4; ++i, n -= 4)
    (r =
      (e.charCodeAt(i) & 255) |
      ((e.charCodeAt(++i) & 255) << 8) |
      ((e.charCodeAt(++i) & 255) << 16) |
      ((e.charCodeAt(++i) & 255) << 24)),
      (r = (r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)),
      (r ^= r >>> 24),
      (t =
        ((r & 65535) * 1540483477 + (((r >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (n) {
    case 3:
      t ^= (e.charCodeAt(i + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(i + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(i) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var Ba = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Na = /[A-Z]|^ms/g,
  Ha = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Kn = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Qt = function (t) {
    return t != null && typeof t != "boolean";
  },
  st = ba(function (e) {
    return Kn(e) ? e : e.replace(Na, "-$&").toLowerCase();
  }),
  en = function (t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string")
          return r.replace(Ha, function (i, n, a) {
            return (ie = { name: n, styles: a, next: ie }), n;
          });
    }
    return Ba[t] !== 1 && !Kn(t) && typeof r == "number" && r !== 0
      ? r + "px"
      : r;
  };
function we(e, t, r) {
  if (r == null) return "";
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return (ie = { name: r.name, styles: r.styles, next: ie }), r.name;
      if (r.styles !== void 0) {
        var i = r.next;
        if (i !== void 0)
          for (; i !== void 0; )
            (ie = { name: i.name, styles: i.styles, next: ie }), (i = i.next);
        var n = r.styles + ";";
        return n;
      }
      return _a(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var a = ie,
          u = r(e);
        return (ie = a), we(e, t, u);
      }
      break;
    }
  }
  if (t == null) return r;
  var o = t[r];
  return o !== void 0 ? o : r;
}
function _a(e, t, r) {
  var i = "";
  if (Array.isArray(r))
    for (var n = 0; n < r.length; n++) i += we(e, t, r[n]) + ";";
  else
    for (var a in r) {
      var u = r[a];
      if (typeof u != "object")
        t != null && t[u] !== void 0
          ? (i += a + "{" + t[u] + "}")
          : Qt(u) && (i += st(a) + ":" + en(a, u) + ";");
      else if (
        Array.isArray(u) &&
        typeof u[0] == "string" &&
        (t == null || t[u[0]] === void 0)
      )
        for (var o = 0; o < u.length; o++)
          Qt(u[o]) && (i += st(a) + ":" + en(a, u[o]) + ";");
      else {
        var s = we(e, t, u);
        switch (a) {
          case "animation":
          case "animationName": {
            i += st(a) + ":" + s + ";";
            break;
          }
          default:
            i += a + "{" + s + "}";
        }
      }
    }
  return i;
}
var tn = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  ie,
  Xn = function (t, r, i) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var n = !0,
      a = "";
    ie = void 0;
    var u = t[0];
    u == null || u.raw === void 0
      ? ((n = !1), (a += we(i, r, u)))
      : (a += u[0]);
    for (var o = 1; o < t.length; o++) (a += we(i, r, t[o])), n && (a += u[o]);
    tn.lastIndex = 0;
    for (var s = "", l; (l = tn.exec(a)) !== null; ) s += "-" + l[1];
    var c = ja(a) + s;
    return { name: c, styles: a, next: ie };
  },
  Ua = function (t) {
    return t();
  },
  za = Nt["useInsertionEffect"] ? Nt["useInsertionEffect"] : !1,
  Wa = za || Ua,
  Pt = {}.hasOwnProperty,
  Zn = h.createContext(typeof HTMLElement < "u" ? wa({ key: "css" }) : null);
Zn.Provider;
var Ga = function (t) {
    return h.forwardRef(function (r, i) {
      var n = h.useContext(Zn);
      return t(r, n, i);
    });
  },
  Ya = h.createContext({}),
  yt = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  qa = function (t, r) {
    var i = {};
    for (var n in r) Pt.call(r, n) && (i[n] = r[n]);
    return (i[yt] = t), i;
  },
  Ka = function (t) {
    var r = t.cache,
      i = t.serialized,
      n = t.isStringTag;
    return (
      qn(r, i, n),
      Wa(function () {
        return $a(r, i, n);
      }),
      null
    );
  },
  Xa = Ga(function (e, t, r) {
    var i = e.css;
    typeof i == "string" && t.registered[i] !== void 0 && (i = t.registered[i]);
    var n = e[yt],
      a = [i],
      u = "";
    typeof e.className == "string"
      ? (u = ka(t.registered, a, e.className))
      : e.className != null && (u = e.className + " ");
    var o = Xn(a, void 0, h.useContext(Ya));
    u += t.key + "-" + o.name;
    var s = {};
    for (var l in e) Pt.call(e, l) && l !== "css" && l !== yt && (s[l] = e[l]);
    return (
      (s.ref = r),
      (s.className = u),
      h.createElement(
        h.Fragment,
        null,
        h.createElement(Ka, {
          cache: t,
          serialized: o,
          isStringTag: typeof n == "string",
        }),
        h.createElement(n, s),
      )
    );
  }),
  Za = Xa,
  F = function (t, r) {
    var i = arguments;
    if (r == null || !Pt.call(r, "css"))
      return h.createElement.apply(void 0, i);
    var n = i.length,
      a = new Array(n);
    (a[0] = Za), (a[1] = qa(t, r));
    for (var u = 2; u < n; u++) a[u] = i[u];
    return h.createElement.apply(null, a);
  };
function Vt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Xn(t);
}
var Ja = function () {
  var t = Vt.apply(void 0, arguments),
    r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
};
function Qa(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
    )
  );
}
const eo = Math.min,
  to = Math.max,
  He = Math.round,
  Ve = Math.floor,
  _e = (e) => ({ x: e, y: e });
function no(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  };
}
function Jn(e) {
  return er(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function X(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Qn(e) {
  var t;
  return (t = (er(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function er(e) {
  return e instanceof Node || e instanceof X(e).Node;
}
function Ct(e) {
  return e instanceof Element || e instanceof X(e).Element;
}
function Rt(e) {
  return e instanceof HTMLElement || e instanceof X(e).HTMLElement;
}
function nn(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof X(e).ShadowRoot;
}
function tr(e) {
  const { overflow: t, overflowX: r, overflowY: i, display: n } = Tt(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + i + r) &&
    !["inline", "contents"].includes(n)
  );
}
function ro() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function io(e) {
  return ["html", "body", "#document"].includes(Jn(e));
}
function Tt(e) {
  return X(e).getComputedStyle(e);
}
function ao(e) {
  if (Jn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (nn(e) && e.host) || Qn(e);
  return nn(t) ? t.host : t;
}
function nr(e) {
  const t = ao(e);
  return io(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Rt(t) && tr(t)
    ? t
    : nr(t);
}
function St(e, t) {
  var r;
  t === void 0 && (t = []);
  const i = nr(e),
    n = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = X(i);
  return n
    ? t.concat(a, a.visualViewport || [], tr(i) ? i : [])
    : t.concat(i, St(i));
}
function oo(e) {
  const t = Tt(e);
  let r = parseFloat(t.width) || 0,
    i = parseFloat(t.height) || 0;
  const n = Rt(e),
    a = n ? e.offsetWidth : r,
    u = n ? e.offsetHeight : i,
    o = He(r) !== a || He(i) !== u;
  return o && ((r = a), (i = u)), { width: r, height: i, $: o };
}
function Lt(e) {
  return Ct(e) ? e : e.contextElement;
}
function lt(e) {
  const t = Lt(e);
  if (!Rt(t)) return _e(1);
  const r = t.getBoundingClientRect(),
    { width: i, height: n, $: a } = oo(t);
  let u = (a ? He(r.width) : r.width) / i,
    o = (a ? He(r.height) : r.height) / n;
  return (
    (!u || !Number.isFinite(u)) && (u = 1),
    (!o || !Number.isFinite(o)) && (o = 1),
    { x: u, y: o }
  );
}
const uo = _e(0);
function so(e) {
  const t = X(e);
  return !ro() || !t.visualViewport
    ? uo
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function lo(e, t, r) {
  return t === void 0 && (t = !1), !r || (t && r !== X(e)) ? !1 : t;
}
function rn(e, t, r, i) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(),
    a = Lt(e);
  let u = _e(1);
  t && (i ? Ct(i) && (u = lt(i)) : (u = lt(e)));
  const o = lo(a, r, i) ? so(a) : _e(0);
  let s = (n.left + o.x) / u.x,
    l = (n.top + o.y) / u.y,
    c = n.width / u.x,
    d = n.height / u.y;
  if (a) {
    const g = X(a),
      E = i && Ct(i) ? X(i) : i;
    let v = g.frameElement;
    for (; v && i && E !== g; ) {
      const p = lt(v),
        m = v.getBoundingClientRect(),
        f = Tt(v),
        S = m.left + (v.clientLeft + parseFloat(f.paddingLeft)) * p.x,
        x = m.top + (v.clientTop + parseFloat(f.paddingTop)) * p.y;
      (s *= p.x),
        (l *= p.y),
        (c *= p.x),
        (d *= p.y),
        (s += S),
        (l += x),
        (v = X(v).frameElement);
    }
  }
  return no({ width: c, height: d, x: s, y: l });
}
function co(e, t) {
  let r = null,
    i;
  const n = Qn(e);
  function a() {
    clearTimeout(i), r && r.disconnect(), (r = null);
  }
  function u(o, s) {
    o === void 0 && (o = !1), s === void 0 && (s = 1), a();
    const { left: l, top: c, width: d, height: g } = e.getBoundingClientRect();
    if ((o || t(), !d || !g)) return;
    const E = Ve(c),
      v = Ve(n.clientWidth - (l + d)),
      p = Ve(n.clientHeight - (c + g)),
      m = Ve(l),
      S = {
        rootMargin: -E + "px " + -v + "px " + -p + "px " + -m + "px",
        threshold: to(0, eo(1, s)) || 1,
      };
    let x = !0;
    function A(I) {
      const y = I[0].intersectionRatio;
      if (y !== s) {
        if (!x) return u();
        y
          ? u(!1, y)
          : (i = setTimeout(() => {
              u(!1, 1e-7);
            }, 100));
      }
      x = !1;
    }
    try {
      r = new IntersectionObserver(A, { ...S, root: n.ownerDocument });
    } catch {
      r = new IntersectionObserver(A, S);
    }
    r.observe(e);
  }
  return u(!0), a;
}
function fo(e, t, r, i) {
  i === void 0 && (i = {});
  const {
      ancestorScroll: n = !0,
      ancestorResize: a = !0,
      elementResize: u = typeof ResizeObserver == "function",
      layoutShift: o = typeof IntersectionObserver == "function",
      animationFrame: s = !1,
    } = i,
    l = Lt(e),
    c = n || a ? [...(l ? St(l) : []), ...St(t)] : [];
  c.forEach((f) => {
    n && f.addEventListener("scroll", r, { passive: !0 }),
      a && f.addEventListener("resize", r);
  });
  const d = l && o ? co(l, r) : null;
  let g = -1,
    E = null;
  u &&
    ((E = new ResizeObserver((f) => {
      let [S] = f;
      S &&
        S.target === l &&
        E &&
        (E.unobserve(t),
        cancelAnimationFrame(g),
        (g = requestAnimationFrame(() => {
          E && E.observe(t);
        }))),
        r();
    })),
    l && !s && E.observe(l),
    E.observe(t));
  let v,
    p = s ? rn(e) : null;
  s && m();
  function m() {
    const f = rn(e);
    p &&
      (f.x !== p.x ||
        f.y !== p.y ||
        f.width !== p.width ||
        f.height !== p.height) &&
      r(),
      (p = f),
      (v = requestAnimationFrame(m));
  }
  return (
    r(),
    () => {
      c.forEach((f) => {
        n && f.removeEventListener("scroll", r),
          a && f.removeEventListener("resize", r);
      }),
        d && d(),
        E && E.disconnect(),
        (E = null),
        s && cancelAnimationFrame(v);
    }
  );
}
var xt = h.useLayoutEffect,
  po = [
    "className",
    "clearValue",
    "cx",
    "getStyles",
    "getClassNames",
    "getValue",
    "hasValue",
    "isMulti",
    "isRtl",
    "options",
    "selectOption",
    "selectProps",
    "setValue",
    "theme",
  ],
  Ue = function () {};
function mo(e, t) {
  return t ? (t[0] === "-" ? e + t : e + "__" + t) : e;
}
function ho(e, t) {
  for (
    var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), n = 2;
    n < r;
    n++
  )
    i[n - 2] = arguments[n];
  var a = [].concat(i);
  if (t && e)
    for (var u in t) t.hasOwnProperty(u) && t[u] && a.push("".concat(mo(e, u)));
  return a
    .filter(function (o) {
      return o;
    })
    .map(function (o) {
      return String(o).trim();
    })
    .join(" ");
}
var an = function (t) {
    return Oo(t)
      ? t.filter(Boolean)
      : me(t) === "object" && t !== null
      ? [t]
      : [];
  },
  rr = function (t) {
    t.className,
      t.clearValue,
      t.cx,
      t.getStyles,
      t.getClassNames,
      t.getValue,
      t.hasValue,
      t.isMulti,
      t.isRtl,
      t.options,
      t.selectOption,
      t.selectProps,
      t.setValue,
      t.theme;
    var r = ue(t, po);
    return O({}, r);
  },
  T = function (t, r, i) {
    var n = t.cx,
      a = t.getStyles,
      u = t.getClassNames,
      o = t.className;
    return { css: a(r, t), className: n(i ?? {}, u(r, t), o) };
  };
function at(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function vo(e) {
  return at(e) ? window.innerHeight : e.clientHeight;
}
function ir(e) {
  return at(e) ? window.pageYOffset : e.scrollTop;
}
function ze(e, t) {
  if (at(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function go(e) {
  var t = getComputedStyle(e),
    r = t.position === "absolute",
    i = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var n = e; (n = n.parentElement); )
    if (
      ((t = getComputedStyle(n)),
      !(r && t.position === "static") &&
        i.test(t.overflow + t.overflowY + t.overflowX))
    )
      return n;
  return document.documentElement;
}
function bo(e, t, r, i) {
  return r * ((e = e / i - 1) * e * e + 1) + t;
}
function Re(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200,
    i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Ue,
    n = ir(e),
    a = t - n,
    u = 10,
    o = 0;
  function s() {
    o += u;
    var l = bo(o, n, a, r);
    ze(e, l), o < r ? window.requestAnimationFrame(s) : i(e);
  }
  s();
}
function on(e, t) {
  var r = e.getBoundingClientRect(),
    i = t.getBoundingClientRect(),
    n = t.offsetHeight / 3;
  i.bottom + n > r.bottom
    ? ze(
        e,
        Math.min(
          t.offsetTop + t.clientHeight - e.offsetHeight + n,
          e.scrollHeight,
        ),
      )
    : i.top - n < r.top && ze(e, Math.max(t.offsetTop - n, 0));
}
function Eo(e) {
  var t = e.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width,
  };
}
function un() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function yo() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  } catch {
    return !1;
  }
}
var ar = !1,
  Co = {
    get passive() {
      return (ar = !0);
    },
  },
  Te = typeof window < "u" ? window : {};
Te.addEventListener &&
  Te.removeEventListener &&
  (Te.addEventListener("p", Ue, Co), Te.removeEventListener("p", Ue, !1));
var So = ar;
function xo(e) {
  return e != null;
}
function Oo(e) {
  return Array.isArray(e);
}
function Le(e, t, r) {
  return e ? t : r;
}
var Fo = function (t) {
    for (
      var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1;
      n < r;
      n++
    )
      i[n - 1] = arguments[n];
    var a = Object.entries(t).filter(function (u) {
      var o = oe(u, 1),
        s = o[0];
      return !i.includes(s);
    });
    return a.reduce(function (u, o) {
      var s = oe(o, 2),
        l = s[0],
        c = s[1];
      return (u[l] = c), u;
    }, {});
  },
  wo = ["children", "innerProps"],
  Ao = ["children", "innerProps"];
function Do(e) {
  var t = e.maxHeight,
    r = e.menuEl,
    i = e.minHeight,
    n = e.placement,
    a = e.shouldScroll,
    u = e.isFixedPosition,
    o = e.controlHeight,
    s = go(r),
    l = { placement: "bottom", maxHeight: t };
  if (!r || !r.offsetParent) return l;
  var c = s.getBoundingClientRect(),
    d = c.height,
    g = r.getBoundingClientRect(),
    E = g.bottom,
    v = g.height,
    p = g.top,
    m = r.offsetParent.getBoundingClientRect(),
    f = m.top,
    S = u ? window.innerHeight : vo(s),
    x = ir(s),
    A = parseInt(getComputedStyle(r).marginBottom, 10),
    I = parseInt(getComputedStyle(r).marginTop, 10),
    y = f - I,
    C = S - p,
    D = y + x,
    R = d - x - p,
    q = E - S + x + A,
    Z = x + p - I,
    U = 160;
  switch (n) {
    case "auto":
    case "bottom":
      if (C >= v) return { placement: "bottom", maxHeight: t };
      if (R >= v && !u)
        return a && Re(s, q, U), { placement: "bottom", maxHeight: t };
      if ((!u && R >= i) || (u && C >= i)) {
        a && Re(s, q, U);
        var J = u ? C - A : R - A;
        return { placement: "bottom", maxHeight: J };
      }
      if (n === "auto" || u) {
        var k = t,
          $ = u ? y : D;
        return (
          $ >= i && (k = Math.min($ - A - o, t)),
          { placement: "top", maxHeight: k }
        );
      }
      if (n === "bottom")
        return a && ze(s, q), { placement: "bottom", maxHeight: t };
      break;
    case "top":
      if (y >= v) return { placement: "top", maxHeight: t };
      if (D >= v && !u)
        return a && Re(s, Z, U), { placement: "top", maxHeight: t };
      if ((!u && D >= i) || (u && y >= i)) {
        var K = t;
        return (
          ((!u && D >= i) || (u && y >= i)) && (K = u ? y - I : D - I),
          a && Re(s, Z, U),
          { placement: "top", maxHeight: K }
        );
      }
      return { placement: "bottom", maxHeight: t };
    default:
      throw new Error('Invalid placement provided "'.concat(n, '".'));
  }
  return l;
}
function Io(e) {
  var t = { bottom: "top", top: "bottom" };
  return e ? t[e] : "bottom";
}
var or = function (t) {
    return t === "auto" ? "bottom" : t;
  },
  Mo = function (t, r) {
    var i,
      n = t.placement,
      a = t.theme,
      u = a.borderRadius,
      o = a.spacing,
      s = a.colors;
    return O(
      ((i = { label: "menu" }),
      xe(i, Io(n), "100%"),
      xe(i, "position", "absolute"),
      xe(i, "width", "100%"),
      xe(i, "zIndex", 1),
      i),
      r
        ? {}
        : {
            backgroundColor: s.neutral0,
            borderRadius: u,
            boxShadow:
              "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
            marginBottom: o.menuGutter,
            marginTop: o.menuGutter,
          },
    );
  },
  ur = h.createContext(null),
  Po = function (t) {
    var r = t.children,
      i = t.minMenuHeight,
      n = t.maxMenuHeight,
      a = t.menuPlacement,
      u = t.menuPosition,
      o = t.menuShouldScrollIntoView,
      s = t.theme,
      l = h.useContext(ur) || {},
      c = l.setPortalPlacement,
      d = h.useRef(null),
      g = h.useState(n),
      E = oe(g, 2),
      v = E[0],
      p = E[1],
      m = h.useState(null),
      f = oe(m, 2),
      S = f[0],
      x = f[1],
      A = s.spacing.controlHeight;
    return (
      xt(
        function () {
          var I = d.current;
          if (I) {
            var y = u === "fixed",
              C = o && !y,
              D = Do({
                maxHeight: n,
                menuEl: I,
                minHeight: i,
                placement: a,
                shouldScroll: C,
                isFixedPosition: y,
                controlHeight: A,
              });
            p(D.maxHeight), x(D.placement), c == null || c(D.placement);
          }
        },
        [n, a, u, o, i, c, A],
      ),
      r({
        ref: d,
        placerProps: O(O({}, t), {}, { placement: S || or(a), maxHeight: v }),
      })
    );
  },
  Vo = function (t) {
    var r = t.children,
      i = t.innerRef,
      n = t.innerProps;
    return F("div", w({}, T(t, "menu", { menu: !0 }), { ref: i }, n), r);
  },
  Ro = Vo,
  To = function (t, r) {
    var i = t.maxHeight,
      n = t.theme.spacing.baseUnit;
    return O(
      {
        maxHeight: i,
        overflowY: "auto",
        position: "relative",
        WebkitOverflowScrolling: "touch",
      },
      r ? {} : { paddingBottom: n, paddingTop: n },
    );
  },
  Lo = function (t) {
    var r = t.children,
      i = t.innerProps,
      n = t.innerRef,
      a = t.isMulti;
    return F(
      "div",
      w(
        {},
        T(t, "menuList", { "menu-list": !0, "menu-list--is-multi": a }),
        { ref: n },
        i,
      ),
      r,
    );
  },
  sr = function (t, r) {
    var i = t.theme,
      n = i.spacing.baseUnit,
      a = i.colors;
    return O(
      { textAlign: "center" },
      r
        ? {}
        : {
            color: a.neutral40,
            padding: "".concat(n * 2, "px ").concat(n * 3, "px"),
          },
    );
  },
  ko = sr,
  $o = sr,
  jo = function (t) {
    var r = t.children,
      i = r === void 0 ? "No options" : r,
      n = t.innerProps,
      a = ue(t, wo);
    return F(
      "div",
      w(
        {},
        T(O(O({}, a), {}, { children: i, innerProps: n }), "noOptionsMessage", {
          "menu-notice": !0,
          "menu-notice--no-options": !0,
        }),
        n,
      ),
      i,
    );
  },
  Bo = function (t) {
    var r = t.children,
      i = r === void 0 ? "Loading..." : r,
      n = t.innerProps,
      a = ue(t, Ao);
    return F(
      "div",
      w(
        {},
        T(O(O({}, a), {}, { children: i, innerProps: n }), "loadingMessage", {
          "menu-notice": !0,
          "menu-notice--loading": !0,
        }),
        n,
      ),
      i,
    );
  },
  No = function (t) {
    var r = t.rect,
      i = t.offset,
      n = t.position;
    return { left: r.left, position: n, top: i, width: r.width, zIndex: 1 };
  },
  Ho = function (t) {
    var r = t.appendTo,
      i = t.children,
      n = t.controlElement,
      a = t.innerProps,
      u = t.menuPlacement,
      o = t.menuPosition,
      s = h.useRef(null),
      l = h.useRef(null),
      c = h.useState(or(u)),
      d = oe(c, 2),
      g = d[0],
      E = d[1],
      v = h.useMemo(function () {
        return { setPortalPlacement: E };
      }, []),
      p = h.useState(null),
      m = oe(p, 2),
      f = m[0],
      S = m[1],
      x = h.useCallback(
        function () {
          if (n) {
            var C = Eo(n),
              D = o === "fixed" ? 0 : window.pageYOffset,
              R = C[g] + D;
            (R !== (f == null ? void 0 : f.offset) ||
              C.left !== (f == null ? void 0 : f.rect.left) ||
              C.width !== (f == null ? void 0 : f.rect.width)) &&
              S({ offset: R, rect: C });
          }
        },
        [
          n,
          o,
          g,
          f == null ? void 0 : f.offset,
          f == null ? void 0 : f.rect.left,
          f == null ? void 0 : f.rect.width,
        ],
      );
    xt(
      function () {
        x();
      },
      [x],
    );
    var A = h.useCallback(
      function () {
        typeof l.current == "function" && (l.current(), (l.current = null)),
          n &&
            s.current &&
            (l.current = fo(n, s.current, x, {
              elementResize: "ResizeObserver" in window,
            }));
      },
      [n, x],
    );
    xt(
      function () {
        A();
      },
      [A],
    );
    var I = h.useCallback(
      function (C) {
        (s.current = C), A();
      },
      [A],
    );
    if ((!r && o !== "fixed") || !f) return null;
    var y = F(
      "div",
      w(
        { ref: I },
        T(
          O(O({}, t), {}, { offset: f.offset, position: o, rect: f.rect }),
          "menuPortal",
          { "menu-portal": !0 },
        ),
        a,
      ),
      i,
    );
    return F(ur.Provider, { value: v }, r ? Ir.createPortal(y, r) : y);
  },
  _o = function (t) {
    var r = t.isDisabled,
      i = t.isRtl;
    return {
      label: "container",
      direction: i ? "rtl" : void 0,
      pointerEvents: r ? "none" : void 0,
      position: "relative",
    };
  },
  Uo = function (t) {
    var r = t.children,
      i = t.innerProps,
      n = t.isDisabled,
      a = t.isRtl;
    return F(
      "div",
      w({}, T(t, "container", { "--is-disabled": n, "--is-rtl": a }), i),
      r,
    );
  },
  zo = function (t, r) {
    var i = t.theme.spacing,
      n = t.isMulti,
      a = t.hasValue,
      u = t.selectProps.controlShouldRenderValue;
    return O(
      {
        alignItems: "center",
        display: n && a && u ? "flex" : "grid",
        flex: 1,
        flexWrap: "wrap",
        WebkitOverflowScrolling: "touch",
        position: "relative",
        overflow: "hidden",
      },
      r
        ? {}
        : {
            padding: ""
              .concat(i.baseUnit / 2, "px ")
              .concat(i.baseUnit * 2, "px"),
          },
    );
  },
  Wo = function (t) {
    var r = t.children,
      i = t.innerProps,
      n = t.isMulti,
      a = t.hasValue;
    return F(
      "div",
      w(
        {},
        T(t, "valueContainer", {
          "value-container": !0,
          "value-container--is-multi": n,
          "value-container--has-value": a,
        }),
        i,
      ),
      r,
    );
  },
  Go = function () {
    return {
      alignItems: "center",
      alignSelf: "stretch",
      display: "flex",
      flexShrink: 0,
    };
  },
  Yo = function (t) {
    var r = t.children,
      i = t.innerProps;
    return F(
      "div",
      w({}, T(t, "indicatorsContainer", { indicators: !0 }), i),
      r,
    );
  },
  sn,
  qo = ["size"],
  Ko = ["innerProps", "isRtl", "size"],
  Xo = {
    name: "8mmkcg",
    styles:
      "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0",
  },
  lr = function (t) {
    var r = t.size,
      i = ue(t, qo);
    return F(
      "svg",
      w(
        {
          height: r,
          width: r,
          viewBox: "0 0 20 20",
          "aria-hidden": "true",
          focusable: "false",
          css: Xo,
        },
        i,
      ),
    );
  },
  kt = function (t) {
    return F(
      lr,
      w({ size: 20 }, t),
      F("path", {
        d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z",
      }),
    );
  },
  cr = function (t) {
    return F(
      lr,
      w({ size: 20 }, t),
      F("path", {
        d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",
      }),
    );
  },
  dr = function (t, r) {
    var i = t.isFocused,
      n = t.theme,
      a = n.spacing.baseUnit,
      u = n.colors;
    return O(
      {
        label: "indicatorContainer",
        display: "flex",
        transition: "color 150ms",
      },
      r
        ? {}
        : {
            color: i ? u.neutral60 : u.neutral20,
            padding: a * 2,
            ":hover": { color: i ? u.neutral80 : u.neutral40 },
          },
    );
  },
  Zo = dr,
  Jo = function (t) {
    var r = t.children,
      i = t.innerProps;
    return F(
      "div",
      w(
        {},
        T(t, "dropdownIndicator", { indicator: !0, "dropdown-indicator": !0 }),
        i,
      ),
      r || F(cr, null),
    );
  },
  Qo = dr,
  eu = function (t) {
    var r = t.children,
      i = t.innerProps;
    return F(
      "div",
      w(
        {},
        T(t, "clearIndicator", { indicator: !0, "clear-indicator": !0 }),
        i,
      ),
      r || F(kt, null),
    );
  },
  tu = function (t, r) {
    var i = t.isDisabled,
      n = t.theme,
      a = n.spacing.baseUnit,
      u = n.colors;
    return O(
      { label: "indicatorSeparator", alignSelf: "stretch", width: 1 },
      r
        ? {}
        : {
            backgroundColor: i ? u.neutral10 : u.neutral20,
            marginBottom: a * 2,
            marginTop: a * 2,
          },
    );
  },
  nu = function (t) {
    var r = t.innerProps;
    return F(
      "span",
      w({}, r, T(t, "indicatorSeparator", { "indicator-separator": !0 })),
    );
  },
  ru = Ja(
    sn ||
      (sn = Qa([
        `
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`,
      ])),
  ),
  iu = function (t, r) {
    var i = t.isFocused,
      n = t.size,
      a = t.theme,
      u = a.colors,
      o = a.spacing.baseUnit;
    return O(
      {
        label: "loadingIndicator",
        display: "flex",
        transition: "color 150ms",
        alignSelf: "center",
        fontSize: n,
        lineHeight: 1,
        marginRight: n,
        textAlign: "center",
        verticalAlign: "middle",
      },
      r ? {} : { color: i ? u.neutral60 : u.neutral20, padding: o * 2 },
    );
  },
  ct = function (t) {
    var r = t.delay,
      i = t.offset;
    return F("span", {
      css: Vt(
        {
          animation: ""
            .concat(ru, " 1s ease-in-out ")
            .concat(r, "ms infinite;"),
          backgroundColor: "currentColor",
          borderRadius: "1em",
          display: "inline-block",
          marginLeft: i ? "1em" : void 0,
          height: "1em",
          verticalAlign: "top",
          width: "1em",
        },
        "",
        "",
      ),
    });
  },
  au = function (t) {
    var r = t.innerProps,
      i = t.isRtl,
      n = t.size,
      a = n === void 0 ? 4 : n,
      u = ue(t, Ko);
    return F(
      "div",
      w(
        {},
        T(
          O(O({}, u), {}, { innerProps: r, isRtl: i, size: a }),
          "loadingIndicator",
          { indicator: !0, "loading-indicator": !0 },
        ),
        r,
      ),
      F(ct, { delay: 0, offset: i }),
      F(ct, { delay: 160, offset: !0 }),
      F(ct, { delay: 320, offset: !i }),
    );
  },
  ou = function (t, r) {
    var i = t.isDisabled,
      n = t.isFocused,
      a = t.theme,
      u = a.colors,
      o = a.borderRadius,
      s = a.spacing;
    return O(
      {
        label: "control",
        alignItems: "center",
        cursor: "default",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        minHeight: s.controlHeight,
        outline: "0 !important",
        position: "relative",
        transition: "all 100ms",
      },
      r
        ? {}
        : {
            backgroundColor: i ? u.neutral5 : u.neutral0,
            borderColor: i ? u.neutral10 : n ? u.primary : u.neutral20,
            borderRadius: o,
            borderStyle: "solid",
            borderWidth: 1,
            boxShadow: n ? "0 0 0 1px ".concat(u.primary) : void 0,
            "&:hover": { borderColor: n ? u.primary : u.neutral30 },
          },
    );
  },
  uu = function (t) {
    var r = t.children,
      i = t.isDisabled,
      n = t.isFocused,
      a = t.innerRef,
      u = t.innerProps,
      o = t.menuIsOpen;
    return F(
      "div",
      w(
        { ref: a },
        T(t, "control", {
          control: !0,
          "control--is-disabled": i,
          "control--is-focused": n,
          "control--menu-is-open": o,
        }),
        u,
      ),
      r,
    );
  },
  su = uu,
  lu = ["data"],
  cu = function (t, r) {
    var i = t.theme.spacing;
    return r
      ? {}
      : { paddingBottom: i.baseUnit * 2, paddingTop: i.baseUnit * 2 };
  },
  du = function (t) {
    var r = t.children,
      i = t.cx,
      n = t.getStyles,
      a = t.getClassNames,
      u = t.Heading,
      o = t.headingProps,
      s = t.innerProps,
      l = t.label,
      c = t.theme,
      d = t.selectProps;
    return F(
      "div",
      w({}, T(t, "group", { group: !0 }), s),
      F(
        u,
        w({}, o, {
          selectProps: d,
          theme: c,
          getStyles: n,
          getClassNames: a,
          cx: i,
        }),
        l,
      ),
      F("div", null, r),
    );
  },
  fu = function (t, r) {
    var i = t.theme,
      n = i.colors,
      a = i.spacing;
    return O(
      { label: "group", cursor: "default", display: "block" },
      r
        ? {}
        : {
            color: n.neutral40,
            fontSize: "75%",
            fontWeight: 500,
            marginBottom: "0.25em",
            paddingLeft: a.baseUnit * 3,
            paddingRight: a.baseUnit * 3,
            textTransform: "uppercase",
          },
    );
  },
  pu = function (t) {
    var r = rr(t);
    r.data;
    var i = ue(r, lu);
    return F("div", w({}, T(t, "groupHeading", { "group-heading": !0 }), i));
  },
  mu = du,
  hu = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
  vu = function (t, r) {
    var i = t.isDisabled,
      n = t.value,
      a = t.theme,
      u = a.spacing,
      o = a.colors;
    return O(
      O(
        {
          visibility: i ? "hidden" : "visible",
          transform: n ? "translateZ(0)" : "",
        },
        gu,
      ),
      r
        ? {}
        : {
            margin: u.baseUnit / 2,
            paddingBottom: u.baseUnit / 2,
            paddingTop: u.baseUnit / 2,
            color: o.neutral80,
          },
    );
  },
  fr = {
    gridArea: "1 / 2",
    font: "inherit",
    minWidth: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0,
  },
  gu = {
    flex: "1 1 auto",
    display: "inline-grid",
    gridArea: "1 / 1 / 2 / 3",
    gridTemplateColumns: "0 min-content",
    "&:after": O(
      {
        content: 'attr(data-value) " "',
        visibility: "hidden",
        whiteSpace: "pre",
      },
      fr,
    ),
  },
  bu = function (t) {
    return O(
      {
        label: "input",
        color: "inherit",
        background: 0,
        opacity: t ? 0 : 1,
        width: "100%",
      },
      fr,
    );
  },
  Eu = function (t) {
    var r = t.cx,
      i = t.value,
      n = rr(t),
      a = n.innerRef,
      u = n.isDisabled,
      o = n.isHidden,
      s = n.inputClassName,
      l = ue(n, hu);
    return F(
      "div",
      w({}, T(t, "input", { "input-container": !0 }), {
        "data-value": i || "",
      }),
      F(
        "input",
        w(
          { className: r({ input: !0 }, s), ref: a, style: bu(o), disabled: u },
          l,
        ),
      ),
    );
  },
  yu = Eu,
  Cu = function (t, r) {
    var i = t.theme,
      n = i.spacing,
      a = i.borderRadius,
      u = i.colors;
    return O(
      { label: "multiValue", display: "flex", minWidth: 0 },
      r
        ? {}
        : {
            backgroundColor: u.neutral10,
            borderRadius: a / 2,
            margin: n.baseUnit / 2,
          },
    );
  },
  Su = function (t, r) {
    var i = t.theme,
      n = i.borderRadius,
      a = i.colors,
      u = t.cropWithEllipsis;
    return O(
      {
        overflow: "hidden",
        textOverflow: u || u === void 0 ? "ellipsis" : void 0,
        whiteSpace: "nowrap",
      },
      r
        ? {}
        : {
            borderRadius: n / 2,
            color: a.neutral80,
            fontSize: "85%",
            padding: 3,
            paddingLeft: 6,
          },
    );
  },
  xu = function (t, r) {
    var i = t.theme,
      n = i.spacing,
      a = i.borderRadius,
      u = i.colors,
      o = t.isFocused;
    return O(
      { alignItems: "center", display: "flex" },
      r
        ? {}
        : {
            borderRadius: a / 2,
            backgroundColor: o ? u.dangerLight : void 0,
            paddingLeft: n.baseUnit,
            paddingRight: n.baseUnit,
            ":hover": { backgroundColor: u.dangerLight, color: u.danger },
          },
    );
  },
  pr = function (t) {
    var r = t.children,
      i = t.innerProps;
    return F("div", i, r);
  },
  Ou = pr,
  Fu = pr;
function wu(e) {
  var t = e.children,
    r = e.innerProps;
  return F("div", w({ role: "button" }, r), t || F(kt, { size: 14 }));
}
var Au = function (t) {
    var r = t.children,
      i = t.components,
      n = t.data,
      a = t.innerProps,
      u = t.isDisabled,
      o = t.removeProps,
      s = t.selectProps,
      l = i.Container,
      c = i.Label,
      d = i.Remove;
    return F(
      l,
      {
        data: n,
        innerProps: O(
          O(
            {},
            T(t, "multiValue", {
              "multi-value": !0,
              "multi-value--is-disabled": u,
            }),
          ),
          a,
        ),
        selectProps: s,
      },
      F(
        c,
        {
          data: n,
          innerProps: O(
            {},
            T(t, "multiValueLabel", { "multi-value__label": !0 }),
          ),
          selectProps: s,
        },
        r,
      ),
      F(d, {
        data: n,
        innerProps: O(
          O({}, T(t, "multiValueRemove", { "multi-value__remove": !0 })),
          {},
          { "aria-label": "Remove ".concat(r || "option") },
          o,
        ),
        selectProps: s,
      }),
    );
  },
  Du = Au,
  Iu = function (t, r) {
    var i = t.isDisabled,
      n = t.isFocused,
      a = t.isSelected,
      u = t.theme,
      o = u.spacing,
      s = u.colors;
    return O(
      {
        label: "option",
        cursor: "default",
        display: "block",
        fontSize: "inherit",
        width: "100%",
        userSelect: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      },
      r
        ? {}
        : {
            backgroundColor: a ? s.primary : n ? s.primary25 : "transparent",
            color: i ? s.neutral20 : a ? s.neutral0 : "inherit",
            padding: ""
              .concat(o.baseUnit * 2, "px ")
              .concat(o.baseUnit * 3, "px"),
            ":active": {
              backgroundColor: i ? void 0 : a ? s.primary : s.primary50,
            },
          },
    );
  },
  Mu = function (t) {
    var r = t.children,
      i = t.isDisabled,
      n = t.isFocused,
      a = t.isSelected,
      u = t.innerRef,
      o = t.innerProps;
    return F(
      "div",
      w(
        {},
        T(t, "option", {
          option: !0,
          "option--is-disabled": i,
          "option--is-focused": n,
          "option--is-selected": a,
        }),
        { ref: u, "aria-disabled": i },
        o,
      ),
      r,
    );
  },
  Pu = Mu,
  Vu = function (t, r) {
    var i = t.theme,
      n = i.spacing,
      a = i.colors;
    return O(
      { label: "placeholder", gridArea: "1 / 1 / 2 / 3" },
      r
        ? {}
        : {
            color: a.neutral50,
            marginLeft: n.baseUnit / 2,
            marginRight: n.baseUnit / 2,
          },
    );
  },
  Ru = function (t) {
    var r = t.children,
      i = t.innerProps;
    return F("div", w({}, T(t, "placeholder", { placeholder: !0 }), i), r);
  },
  Tu = Ru,
  Lu = function (t, r) {
    var i = t.isDisabled,
      n = t.theme,
      a = n.spacing,
      u = n.colors;
    return O(
      {
        label: "singleValue",
        gridArea: "1 / 1 / 2 / 3",
        maxWidth: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      r
        ? {}
        : {
            color: i ? u.neutral40 : u.neutral80,
            marginLeft: a.baseUnit / 2,
            marginRight: a.baseUnit / 2,
          },
    );
  },
  ku = function (t) {
    var r = t.children,
      i = t.isDisabled,
      n = t.innerProps;
    return F(
      "div",
      w(
        {},
        T(t, "singleValue", {
          "single-value": !0,
          "single-value--is-disabled": i,
        }),
        n,
      ),
      r,
    );
  },
  $u = ku,
  ju = {
    ClearIndicator: eu,
    Control: su,
    DropdownIndicator: Jo,
    DownChevron: cr,
    CrossIcon: kt,
    Group: mu,
    GroupHeading: pu,
    IndicatorsContainer: Yo,
    IndicatorSeparator: nu,
    Input: yu,
    LoadingIndicator: au,
    Menu: Ro,
    MenuList: Lo,
    MenuPortal: Ho,
    LoadingMessage: Bo,
    NoOptionsMessage: jo,
    MultiValue: Du,
    MultiValueContainer: Ou,
    MultiValueLabel: Fu,
    MultiValueRemove: wu,
    Option: Pu,
    Placeholder: Tu,
    SelectContainer: Uo,
    SingleValue: $u,
    ValueContainer: Wo,
  },
  Bu = function (t) {
    return O(O({}, ju), t.components);
  },
  ln =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function Nu(e, t) {
  return !!(e === t || (ln(e) && ln(t)));
}
function Hu(e, t) {
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; r++) if (!Nu(e[r], t[r])) return !1;
  return !0;
}
function _u(e, t) {
  t === void 0 && (t = Hu);
  var r = null;
  function i() {
    for (var n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a];
    if (r && r.lastThis === this && t(n, r.lastArgs)) return r.lastResult;
    var u = e.apply(this, n);
    return (r = { lastResult: u, lastArgs: n, lastThis: this }), u;
  }
  return (
    (i.clear = function () {
      r = null;
    }),
    i
  );
}
var Uu = {
    name: "7pg0cj-a11yText",
    styles:
      "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap",
  },
  zu = function (t) {
    return F("span", w({ css: Uu }, t));
  },
  cn = zu,
  Wu = {
    guidance: function (t) {
      var r = t.isSearchable,
        i = t.isMulti,
        n = t.isDisabled,
        a = t.tabSelectsValue,
        u = t.context;
      switch (u) {
        case "menu":
          return "Use Up and Down to choose options"
            .concat(
              n ? "" : ", press Enter to select the currently focused option",
              ", press Escape to exit the menu",
            )
            .concat(
              a ? ", press Tab to select the option and exit the menu" : "",
              ".",
            );
        case "input":
          return ""
            .concat(t["aria-label"] || "Select", " is focused ")
            .concat(
              r ? ",type to refine list" : "",
              ", press Down to open the menu, ",
            )
            .concat(i ? " press left to focus selected values" : "");
        case "value":
          return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
        default:
          return "";
      }
    },
    onChange: function (t) {
      var r = t.action,
        i = t.label,
        n = i === void 0 ? "" : i,
        a = t.labels,
        u = t.isDisabled;
      switch (r) {
        case "deselect-option":
        case "pop-value":
        case "remove-value":
          return "option ".concat(n, ", deselected.");
        case "clear":
          return "All selected options have been cleared.";
        case "initial-input-focus":
          return "option"
            .concat(a.length > 1 ? "s" : "", " ")
            .concat(a.join(","), ", selected.");
        case "select-option":
          return u
            ? "option ".concat(n, " is disabled. Select another option.")
            : "option ".concat(n, ", selected.");
        default:
          return "";
      }
    },
    onFocus: function (t) {
      var r = t.context,
        i = t.focused,
        n = t.options,
        a = t.label,
        u = a === void 0 ? "" : a,
        o = t.selectValue,
        s = t.isDisabled,
        l = t.isSelected,
        c = function (v, p) {
          return v && v.length
            ? "".concat(v.indexOf(p) + 1, " of ").concat(v.length)
            : "";
        };
      if (r === "value" && o)
        return "value ".concat(u, " focused, ").concat(c(o, i), ".");
      if (r === "menu") {
        var d = s ? " disabled" : "",
          g = "".concat(l ? "selected" : "focused").concat(d);
        return "option ".concat(u, " ").concat(g, ", ").concat(c(n, i), ".");
      }
      return "";
    },
    onFilter: function (t) {
      var r = t.inputValue,
        i = t.resultsMessage;
      return "".concat(i).concat(r ? " for search term " + r : "", ".");
    },
  },
  Gu = function (t) {
    var r = t.ariaSelection,
      i = t.focusedOption,
      n = t.focusedValue,
      a = t.focusableOptions,
      u = t.isFocused,
      o = t.selectValue,
      s = t.selectProps,
      l = t.id,
      c = s.ariaLiveMessages,
      d = s.getOptionLabel,
      g = s.inputValue,
      E = s.isMulti,
      v = s.isOptionDisabled,
      p = s.isSearchable,
      m = s.menuIsOpen,
      f = s.options,
      S = s.screenReaderStatus,
      x = s.tabSelectsValue,
      A = s["aria-label"],
      I = s["aria-live"],
      y = h.useMemo(
        function () {
          return O(O({}, Wu), c || {});
        },
        [c],
      ),
      C = h.useMemo(
        function () {
          var k = "";
          if (r && y.onChange) {
            var $ = r.option,
              K = r.options,
              Q = r.removedValue,
              ee = r.removedValues,
              se = r.value,
              le = function (ne) {
                return Array.isArray(ne) ? null : ne;
              },
              pe = Q || $ || le(se),
              N = pe ? d(pe) : "",
              z = K || ee || void 0,
              ce = z ? z.map(d) : [],
              de = O({ isDisabled: pe && v(pe, o), label: N, labels: ce }, r);
            k = y.onChange(de);
          }
          return k;
        },
        [r, y, v, o, d],
      ),
      D = h.useMemo(
        function () {
          var k = "",
            $ = i || n,
            K = !!(i && o && o.includes(i));
          if ($ && y.onFocus) {
            var Q = {
              focused: $,
              label: d($),
              isDisabled: v($, o),
              isSelected: K,
              options: a,
              context: $ === i ? "menu" : "value",
              selectValue: o,
            };
            k = y.onFocus(Q);
          }
          return k;
        },
        [i, n, d, v, y, a, o],
      ),
      R = h.useMemo(
        function () {
          var k = "";
          if (m && f.length && y.onFilter) {
            var $ = S({ count: a.length });
            k = y.onFilter({ inputValue: g, resultsMessage: $ });
          }
          return k;
        },
        [a, g, m, y, f, S],
      ),
      q = h.useMemo(
        function () {
          var k = "";
          if (y.guidance) {
            var $ = n ? "value" : m ? "menu" : "input";
            k = y.guidance({
              "aria-label": A,
              context: $,
              isDisabled: i && v(i, o),
              isMulti: E,
              isSearchable: p,
              tabSelectsValue: x,
            });
          }
          return k;
        },
        [A, i, n, E, v, p, m, y, o, x],
      ),
      Z = "".concat(D, " ").concat(R, " ").concat(q),
      U = F(
        h.Fragment,
        null,
        F("span", { id: "aria-selection" }, C),
        F("span", { id: "aria-context" }, Z),
      ),
      J = (r == null ? void 0 : r.action) === "initial-input-focus";
    return F(
      h.Fragment,
      null,
      F(cn, { id: l }, J && U),
      F(
        cn,
        {
          "aria-live": I,
          "aria-atomic": "false",
          "aria-relevant": "additions text",
        },
        u && !J && U,
      ),
    );
  },
  Yu = Gu,
  Ot = [
    { base: "A", letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ" },
    { base: "AA", letters: "Ꜳ" },
    { base: "AE", letters: "ÆǼǢ" },
    { base: "AO", letters: "Ꜵ" },
    { base: "AU", letters: "Ꜷ" },
    { base: "AV", letters: "ꜸꜺ" },
    { base: "AY", letters: "Ꜽ" },
    { base: "B", letters: "BⒷＢḂḄḆɃƂƁ" },
    { base: "C", letters: "CⒸＣĆĈĊČÇḈƇȻꜾ" },
    { base: "D", letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ" },
    { base: "DZ", letters: "ǱǄ" },
    { base: "Dz", letters: "ǲǅ" },
    { base: "E", letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ" },
    { base: "F", letters: "FⒻＦḞƑꝻ" },
    { base: "G", letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ" },
    { base: "H", letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ" },
    { base: "I", letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ" },
    { base: "J", letters: "JⒿＪĴɈ" },
    { base: "K", letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ" },
    { base: "L", letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ" },
    { base: "LJ", letters: "Ǉ" },
    { base: "Lj", letters: "ǈ" },
    { base: "M", letters: "MⓂＭḾṀṂⱮƜ" },
    { base: "N", letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ" },
    { base: "NJ", letters: "Ǌ" },
    { base: "Nj", letters: "ǋ" },
    { base: "O", letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ" },
    { base: "OI", letters: "Ƣ" },
    { base: "OO", letters: "Ꝏ" },
    { base: "OU", letters: "Ȣ" },
    { base: "P", letters: "PⓅＰṔṖƤⱣꝐꝒꝔ" },
    { base: "Q", letters: "QⓆＱꝖꝘɊ" },
    { base: "R", letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ" },
    { base: "S", letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ" },
    { base: "T", letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ" },
    { base: "TZ", letters: "Ꜩ" },
    { base: "U", letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ" },
    { base: "V", letters: "VⓋＶṼṾƲꝞɅ" },
    { base: "VY", letters: "Ꝡ" },
    { base: "W", letters: "WⓌＷẀẂŴẆẄẈⱲ" },
    { base: "X", letters: "XⓍＸẊẌ" },
    { base: "Y", letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ" },
    { base: "Z", letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ" },
    { base: "a", letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ" },
    { base: "aa", letters: "ꜳ" },
    { base: "ae", letters: "æǽǣ" },
    { base: "ao", letters: "ꜵ" },
    { base: "au", letters: "ꜷ" },
    { base: "av", letters: "ꜹꜻ" },
    { base: "ay", letters: "ꜽ" },
    { base: "b", letters: "bⓑｂḃḅḇƀƃɓ" },
    { base: "c", letters: "cⓒｃćĉċčçḉƈȼꜿↄ" },
    { base: "d", letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ" },
    { base: "dz", letters: "ǳǆ" },
    { base: "e", letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ" },
    { base: "f", letters: "fⓕｆḟƒꝼ" },
    { base: "g", letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ" },
    { base: "h", letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ" },
    { base: "hv", letters: "ƕ" },
    { base: "i", letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı" },
    { base: "j", letters: "jⓙｊĵǰɉ" },
    { base: "k", letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ" },
    { base: "l", letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ" },
    { base: "lj", letters: "ǉ" },
    { base: "m", letters: "mⓜｍḿṁṃɱɯ" },
    { base: "n", letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ" },
    { base: "nj", letters: "ǌ" },
    { base: "o", letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ" },
    { base: "oi", letters: "ƣ" },
    { base: "ou", letters: "ȣ" },
    { base: "oo", letters: "ꝏ" },
    { base: "p", letters: "pⓟｐṕṗƥᵽꝑꝓꝕ" },
    { base: "q", letters: "qⓠｑɋꝗꝙ" },
    { base: "r", letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ" },
    { base: "s", letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ" },
    { base: "t", letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ" },
    { base: "tz", letters: "ꜩ" },
    { base: "u", letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ" },
    { base: "v", letters: "vⓥｖṽṿʋꝟʌ" },
    { base: "vy", letters: "ꝡ" },
    { base: "w", letters: "wⓦｗẁẃŵẇẅẘẉⱳ" },
    { base: "x", letters: "xⓧｘẋẍ" },
    { base: "y", letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ" },
    { base: "z", letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ" },
  ],
  qu = new RegExp(
    "[" +
      Ot.map(function (e) {
        return e.letters;
      }).join("") +
      "]",
    "g",
  ),
  mr = {};
for (var dt = 0; dt < Ot.length; dt++)
  for (var ft = Ot[dt], pt = 0; pt < ft.letters.length; pt++)
    mr[ft.letters[pt]] = ft.base;
var hr = function (t) {
    return t.replace(qu, function (r) {
      return mr[r];
    });
  },
  Ku = _u(hr),
  dn = function (t) {
    return t.replace(/^\s+|\s+$/g, "");
  },
  Xu = function (t) {
    return "".concat(t.label, " ").concat(t.value);
  },
  Zu = function (t) {
    return function (r, i) {
      if (r.data.__isNew__) return !0;
      var n = O(
          {
            ignoreCase: !0,
            ignoreAccents: !0,
            stringify: Xu,
            trim: !0,
            matchFrom: "any",
          },
          t,
        ),
        a = n.ignoreCase,
        u = n.ignoreAccents,
        o = n.stringify,
        s = n.trim,
        l = n.matchFrom,
        c = s ? dn(i) : i,
        d = s ? dn(o(r)) : o(r);
      return (
        a && ((c = c.toLowerCase()), (d = d.toLowerCase())),
        u && ((c = Ku(c)), (d = hr(d))),
        l === "start" ? d.substr(0, c.length) === c : d.indexOf(c) > -1
      );
    };
  },
  Ju = ["innerRef"];
function Qu(e) {
  var t = e.innerRef,
    r = ue(e, Ju),
    i = Fo(r, "onExited", "in", "enter", "exit", "appear");
  return F(
    "input",
    w({ ref: t }, i, {
      css: Vt(
        {
          label: "dummyInput",
          background: 0,
          border: 0,
          caretColor: "transparent",
          fontSize: "inherit",
          gridArea: "1 / 1 / 2 / 3",
          outline: 0,
          padding: 0,
          width: 1,
          color: "transparent",
          left: -100,
          opacity: 0,
          position: "relative",
          transform: "scale(.01)",
        },
        "",
        "",
      ),
    }),
  );
}
var es = function (t) {
  t.preventDefault(), t.stopPropagation();
};
function ts(e) {
  var t = e.isEnabled,
    r = e.onBottomArrive,
    i = e.onBottomLeave,
    n = e.onTopArrive,
    a = e.onTopLeave,
    u = h.useRef(!1),
    o = h.useRef(!1),
    s = h.useRef(0),
    l = h.useRef(null),
    c = h.useCallback(
      function (m, f) {
        if (l.current !== null) {
          var S = l.current,
            x = S.scrollTop,
            A = S.scrollHeight,
            I = S.clientHeight,
            y = l.current,
            C = f > 0,
            D = A - I - x,
            R = !1;
          D > f && u.current && (i && i(m), (u.current = !1)),
            C && o.current && (a && a(m), (o.current = !1)),
            C && f > D
              ? (r && !u.current && r(m),
                (y.scrollTop = A),
                (R = !0),
                (u.current = !0))
              : !C &&
                -f > x &&
                (n && !o.current && n(m),
                (y.scrollTop = 0),
                (R = !0),
                (o.current = !0)),
            R && es(m);
        }
      },
      [r, i, n, a],
    ),
    d = h.useCallback(
      function (m) {
        c(m, m.deltaY);
      },
      [c],
    ),
    g = h.useCallback(function (m) {
      s.current = m.changedTouches[0].clientY;
    }, []),
    E = h.useCallback(
      function (m) {
        var f = s.current - m.changedTouches[0].clientY;
        c(m, f);
      },
      [c],
    ),
    v = h.useCallback(
      function (m) {
        if (m) {
          var f = So ? { passive: !1 } : !1;
          m.addEventListener("wheel", d, f),
            m.addEventListener("touchstart", g, f),
            m.addEventListener("touchmove", E, f);
        }
      },
      [E, g, d],
    ),
    p = h.useCallback(
      function (m) {
        m &&
          (m.removeEventListener("wheel", d, !1),
          m.removeEventListener("touchstart", g, !1),
          m.removeEventListener("touchmove", E, !1));
      },
      [E, g, d],
    );
  return (
    h.useEffect(
      function () {
        if (t) {
          var m = l.current;
          return (
            v(m),
            function () {
              p(m);
            }
          );
        }
      },
      [t, v, p],
    ),
    function (m) {
      l.current = m;
    }
  );
}
var fn = ["boxSizing", "height", "overflow", "paddingRight", "position"],
  pn = {
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
    height: "100%",
  };
function mn(e) {
  e.preventDefault();
}
function hn(e) {
  e.stopPropagation();
}
function vn() {
  var e = this.scrollTop,
    t = this.scrollHeight,
    r = e + this.offsetHeight;
  e === 0 ? (this.scrollTop = 1) : r === t && (this.scrollTop = e - 1);
}
function gn() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var bn = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  Se = 0,
  he = { capture: !1, passive: !1 };
function ns(e) {
  var t = e.isEnabled,
    r = e.accountForScrollbars,
    i = r === void 0 ? !0 : r,
    n = h.useRef({}),
    a = h.useRef(null),
    u = h.useCallback(
      function (s) {
        if (bn) {
          var l = document.body,
            c = l && l.style;
          if (
            (i &&
              fn.forEach(function (v) {
                var p = c && c[v];
                n.current[v] = p;
              }),
            i && Se < 1)
          ) {
            var d = parseInt(n.current.paddingRight, 10) || 0,
              g = document.body ? document.body.clientWidth : 0,
              E = window.innerWidth - g + d || 0;
            Object.keys(pn).forEach(function (v) {
              var p = pn[v];
              c && (c[v] = p);
            }),
              c && (c.paddingRight = "".concat(E, "px"));
          }
          l &&
            gn() &&
            (l.addEventListener("touchmove", mn, he),
            s &&
              (s.addEventListener("touchstart", vn, he),
              s.addEventListener("touchmove", hn, he))),
            (Se += 1);
        }
      },
      [i],
    ),
    o = h.useCallback(
      function (s) {
        if (bn) {
          var l = document.body,
            c = l && l.style;
          (Se = Math.max(Se - 1, 0)),
            i &&
              Se < 1 &&
              fn.forEach(function (d) {
                var g = n.current[d];
                c && (c[d] = g);
              }),
            l &&
              gn() &&
              (l.removeEventListener("touchmove", mn, he),
              s &&
                (s.removeEventListener("touchstart", vn, he),
                s.removeEventListener("touchmove", hn, he)));
        }
      },
      [i],
    );
  return (
    h.useEffect(
      function () {
        if (t) {
          var s = a.current;
          return (
            u(s),
            function () {
              o(s);
            }
          );
        }
      },
      [t, u, o],
    ),
    function (s) {
      a.current = s;
    }
  );
}
var rs = function () {
    return document.activeElement && document.activeElement.blur();
  },
  is = {
    name: "1kfdb0e",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0",
  };
function as(e) {
  var t = e.children,
    r = e.lockEnabled,
    i = e.captureEnabled,
    n = i === void 0 ? !0 : i,
    a = e.onBottomArrive,
    u = e.onBottomLeave,
    o = e.onTopArrive,
    s = e.onTopLeave,
    l = ts({
      isEnabled: n,
      onBottomArrive: a,
      onBottomLeave: u,
      onTopArrive: o,
      onTopLeave: s,
    }),
    c = ns({ isEnabled: r }),
    d = function (E) {
      l(E), c(E);
    };
  return F(h.Fragment, null, r && F("div", { onClick: rs, css: is }), t(d));
}
var os = {
    name: "1a0ro4n-requiredInput",
    styles:
      "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%",
  },
  us = function (t) {
    var r = t.name,
      i = t.onFocus;
    return F("input", {
      required: !0,
      name: r,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: i,
      css: os,
      value: "",
      onChange: function () {},
    });
  },
  ss = us,
  ls = function (t) {
    return t.label;
  },
  cs = function (t) {
    return t.label;
  },
  ds = function (t) {
    return t.value;
  },
  fs = function (t) {
    return !!t.isDisabled;
  },
  ps = {
    clearIndicator: Qo,
    container: _o,
    control: ou,
    dropdownIndicator: Zo,
    group: cu,
    groupHeading: fu,
    indicatorsContainer: Go,
    indicatorSeparator: tu,
    input: vu,
    loadingIndicator: iu,
    loadingMessage: $o,
    menu: Mo,
    menuList: To,
    menuPortal: No,
    multiValue: Cu,
    multiValueLabel: Su,
    multiValueRemove: xu,
    noOptionsMessage: ko,
    option: Iu,
    placeholder: Vu,
    singleValue: Lu,
    valueContainer: zo,
  },
  ms = {
    primary: "#2684FF",
    primary75: "#4C9AFF",
    primary50: "#B2D4FF",
    primary25: "#DEEBFF",
    danger: "#DE350B",
    dangerLight: "#FFBDAD",
    neutral0: "hsl(0, 0%, 100%)",
    neutral5: "hsl(0, 0%, 95%)",
    neutral10: "hsl(0, 0%, 90%)",
    neutral20: "hsl(0, 0%, 80%)",
    neutral30: "hsl(0, 0%, 70%)",
    neutral40: "hsl(0, 0%, 60%)",
    neutral50: "hsl(0, 0%, 50%)",
    neutral60: "hsl(0, 0%, 40%)",
    neutral70: "hsl(0, 0%, 30%)",
    neutral80: "hsl(0, 0%, 20%)",
    neutral90: "hsl(0, 0%, 10%)",
  },
  hs = 4,
  vr = 4,
  vs = 38,
  gs = vr * 2,
  bs = { baseUnit: vr, controlHeight: vs, menuGutter: gs },
  mt = { borderRadius: hs, colors: ms, spacing: bs },
  Es = {
    "aria-live": "polite",
    backspaceRemovesValue: !0,
    blurInputOnSelect: un(),
    captureMenuScroll: !un(),
    classNames: {},
    closeMenuOnSelect: !0,
    closeMenuOnScroll: !1,
    components: {},
    controlShouldRenderValue: !0,
    escapeClearsValue: !1,
    filterOption: Zu(),
    formatGroupLabel: ls,
    getOptionLabel: cs,
    getOptionValue: ds,
    isDisabled: !1,
    isLoading: !1,
    isMulti: !1,
    isRtl: !1,
    isSearchable: !0,
    isOptionDisabled: fs,
    loadingMessage: function () {
      return "Loading...";
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: !1,
    menuPlacement: "bottom",
    menuPosition: "absolute",
    menuShouldBlockScroll: !1,
    menuShouldScrollIntoView: !yo(),
    noOptionsMessage: function () {
      return "No options";
    },
    openMenuOnFocus: !1,
    openMenuOnClick: !0,
    options: [],
    pageSize: 5,
    placeholder: "Select...",
    screenReaderStatus: function (t) {
      var r = t.count;
      return "".concat(r, " result").concat(r !== 1 ? "s" : "", " available");
    },
    styles: {},
    tabIndex: 0,
    tabSelectsValue: !0,
    unstyled: !1,
  };
function En(e, t, r, i) {
  var n = yr(e, t, r),
    a = Cr(e, t, r),
    u = Er(e, t),
    o = We(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: n,
    isSelected: a,
    label: u,
    value: o,
    index: i,
  };
}
function gr(e, t) {
  return e.options
    .map(function (r, i) {
      if ("options" in r) {
        var n = r.options
          .map(function (u, o) {
            return En(e, u, t, o);
          })
          .filter(function (u) {
            return yn(e, u);
          });
        return n.length > 0
          ? { type: "group", data: r, options: n, index: i }
          : void 0;
      }
      var a = En(e, r, t, i);
      return yn(e, a) ? a : void 0;
    })
    .filter(xo);
}
function br(e) {
  return e.reduce(function (t, r) {
    return (
      r.type === "group"
        ? t.push.apply(
            t,
            kn(
              r.options.map(function (i) {
                return i.data;
              }),
            ),
          )
        : t.push(r.data),
      t
    );
  }, []);
}
function ys(e, t) {
  return br(gr(e, t));
}
function yn(e, t) {
  var r = e.inputValue,
    i = r === void 0 ? "" : r,
    n = t.data,
    a = t.isSelected,
    u = t.label,
    o = t.value;
  return (!xr(e) || !a) && Sr(e, { label: u, value: o, data: n }, i);
}
function Cs(e, t) {
  var r = e.focusedValue,
    i = e.selectValue,
    n = i.indexOf(r);
  if (n > -1) {
    var a = t.indexOf(r);
    if (a > -1) return r;
    if (n < t.length) return t[n];
  }
  return null;
}
function Ss(e, t) {
  var r = e.focusedOption;
  return r && t.indexOf(r) > -1 ? r : t[0];
}
var Er = function (t, r) {
    return t.getOptionLabel(r);
  },
  We = function (t, r) {
    return t.getOptionValue(r);
  };
function yr(e, t, r) {
  return typeof e.isOptionDisabled == "function"
    ? e.isOptionDisabled(t, r)
    : !1;
}
function Cr(e, t, r) {
  if (r.indexOf(t) > -1) return !0;
  if (typeof e.isOptionSelected == "function") return e.isOptionSelected(t, r);
  var i = We(e, t);
  return r.some(function (n) {
    return We(e, n) === i;
  });
}
function Sr(e, t, r) {
  return e.filterOption ? e.filterOption(t, r) : !0;
}
var xr = function (t) {
    var r = t.hideSelectedOptions,
      i = t.isMulti;
    return r === void 0 ? i : r;
  },
  xs = 1,
  Or = (function (e) {
    Ui(r, e);
    var t = Yi(r);
    function r(i) {
      var n;
      if (
        (Hi(this, r),
        (n = t.call(this, i)),
        (n.state = {
          ariaSelection: null,
          focusedOption: null,
          focusedValue: null,
          inputIsHidden: !1,
          isFocused: !1,
          selectValue: [],
          clearFocusValueOnUpdate: !1,
          prevWasFocused: !1,
          inputIsHiddenAfterUpdate: void 0,
          prevProps: void 0,
        }),
        (n.blockOptionHover = !1),
        (n.isComposing = !1),
        (n.commonProps = void 0),
        (n.initialTouchX = 0),
        (n.initialTouchY = 0),
        (n.instancePrefix = ""),
        (n.openAfterFocus = !1),
        (n.scrollToFocusedOptionOnUpdate = !1),
        (n.userIsDragging = void 0),
        (n.controlRef = null),
        (n.getControlRef = function (o) {
          n.controlRef = o;
        }),
        (n.focusedOptionRef = null),
        (n.getFocusedOptionRef = function (o) {
          n.focusedOptionRef = o;
        }),
        (n.menuListRef = null),
        (n.getMenuListRef = function (o) {
          n.menuListRef = o;
        }),
        (n.inputRef = null),
        (n.getInputRef = function (o) {
          n.inputRef = o;
        }),
        (n.focus = n.focusInput),
        (n.blur = n.blurInput),
        (n.onChange = function (o, s) {
          var l = n.props,
            c = l.onChange,
            d = l.name;
          (s.name = d), n.ariaOnChange(o, s), c(o, s);
        }),
        (n.setValue = function (o, s, l) {
          var c = n.props,
            d = c.closeMenuOnSelect,
            g = c.isMulti,
            E = c.inputValue;
          n.onInputChange("", { action: "set-value", prevInputValue: E }),
            d &&
              (n.setState({ inputIsHiddenAfterUpdate: !g }), n.onMenuClose()),
            n.setState({ clearFocusValueOnUpdate: !0 }),
            n.onChange(o, { action: s, option: l });
        }),
        (n.selectOption = function (o) {
          var s = n.props,
            l = s.blurInputOnSelect,
            c = s.isMulti,
            d = s.name,
            g = n.state.selectValue,
            E = c && n.isOptionSelected(o, g),
            v = n.isOptionDisabled(o, g);
          if (E) {
            var p = n.getOptionValue(o);
            n.setValue(
              g.filter(function (m) {
                return n.getOptionValue(m) !== p;
              }),
              "deselect-option",
              o,
            );
          } else if (!v)
            c
              ? n.setValue([].concat(kn(g), [o]), "select-option", o)
              : n.setValue(o, "select-option");
          else {
            n.ariaOnChange(o, { action: "select-option", option: o, name: d });
            return;
          }
          l && n.blurInput();
        }),
        (n.removeValue = function (o) {
          var s = n.props.isMulti,
            l = n.state.selectValue,
            c = n.getOptionValue(o),
            d = l.filter(function (E) {
              return n.getOptionValue(E) !== c;
            }),
            g = Le(s, d, d[0] || null);
          n.onChange(g, { action: "remove-value", removedValue: o }),
            n.focusInput();
        }),
        (n.clearValue = function () {
          var o = n.state.selectValue;
          n.onChange(Le(n.props.isMulti, [], null), {
            action: "clear",
            removedValues: o,
          });
        }),
        (n.popValue = function () {
          var o = n.props.isMulti,
            s = n.state.selectValue,
            l = s[s.length - 1],
            c = s.slice(0, s.length - 1),
            d = Le(o, c, c[0] || null);
          n.onChange(d, { action: "pop-value", removedValue: l });
        }),
        (n.getValue = function () {
          return n.state.selectValue;
        }),
        (n.cx = function () {
          for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
            s[l] = arguments[l];
          return ho.apply(void 0, [n.props.classNamePrefix].concat(s));
        }),
        (n.getOptionLabel = function (o) {
          return Er(n.props, o);
        }),
        (n.getOptionValue = function (o) {
          return We(n.props, o);
        }),
        (n.getStyles = function (o, s) {
          var l = n.props.unstyled,
            c = ps[o](s, l);
          c.boxSizing = "border-box";
          var d = n.props.styles[o];
          return d ? d(c, s) : c;
        }),
        (n.getClassNames = function (o, s) {
          var l, c;
          return (l = (c = n.props.classNames)[o]) === null || l === void 0
            ? void 0
            : l.call(c, s);
        }),
        (n.getElementId = function (o) {
          return "".concat(n.instancePrefix, "-").concat(o);
        }),
        (n.getComponents = function () {
          return Bu(n.props);
        }),
        (n.buildCategorizedOptions = function () {
          return gr(n.props, n.state.selectValue);
        }),
        (n.getCategorizedOptions = function () {
          return n.props.menuIsOpen ? n.buildCategorizedOptions() : [];
        }),
        (n.buildFocusableOptions = function () {
          return br(n.buildCategorizedOptions());
        }),
        (n.getFocusableOptions = function () {
          return n.props.menuIsOpen ? n.buildFocusableOptions() : [];
        }),
        (n.ariaOnChange = function (o, s) {
          n.setState({ ariaSelection: O({ value: o }, s) });
        }),
        (n.onMenuMouseDown = function (o) {
          o.button === 0 &&
            (o.stopPropagation(), o.preventDefault(), n.focusInput());
        }),
        (n.onMenuMouseMove = function (o) {
          n.blockOptionHover = !1;
        }),
        (n.onControlMouseDown = function (o) {
          if (!o.defaultPrevented) {
            var s = n.props.openMenuOnClick;
            n.state.isFocused
              ? n.props.menuIsOpen
                ? o.target.tagName !== "INPUT" &&
                  o.target.tagName !== "TEXTAREA" &&
                  n.onMenuClose()
                : s && n.openMenu("first")
              : (s && (n.openAfterFocus = !0), n.focusInput()),
              o.target.tagName !== "INPUT" &&
                o.target.tagName !== "TEXTAREA" &&
                o.preventDefault();
          }
        }),
        (n.onDropdownIndicatorMouseDown = function (o) {
          if (
            !(o && o.type === "mousedown" && o.button !== 0) &&
            !n.props.isDisabled
          ) {
            var s = n.props,
              l = s.isMulti,
              c = s.menuIsOpen;
            n.focusInput(),
              c
                ? (n.setState({ inputIsHiddenAfterUpdate: !l }),
                  n.onMenuClose())
                : n.openMenu("first"),
              o.preventDefault();
          }
        }),
        (n.onClearIndicatorMouseDown = function (o) {
          (o && o.type === "mousedown" && o.button !== 0) ||
            (n.clearValue(),
            o.preventDefault(),
            (n.openAfterFocus = !1),
            o.type === "touchend"
              ? n.focusInput()
              : setTimeout(function () {
                  return n.focusInput();
                }));
        }),
        (n.onScroll = function (o) {
          typeof n.props.closeMenuOnScroll == "boolean"
            ? o.target instanceof HTMLElement &&
              at(o.target) &&
              n.props.onMenuClose()
            : typeof n.props.closeMenuOnScroll == "function" &&
              n.props.closeMenuOnScroll(o) &&
              n.props.onMenuClose();
        }),
        (n.onCompositionStart = function () {
          n.isComposing = !0;
        }),
        (n.onCompositionEnd = function () {
          n.isComposing = !1;
        }),
        (n.onTouchStart = function (o) {
          var s = o.touches,
            l = s && s.item(0);
          l &&
            ((n.initialTouchX = l.clientX),
            (n.initialTouchY = l.clientY),
            (n.userIsDragging = !1));
        }),
        (n.onTouchMove = function (o) {
          var s = o.touches,
            l = s && s.item(0);
          if (l) {
            var c = Math.abs(l.clientX - n.initialTouchX),
              d = Math.abs(l.clientY - n.initialTouchY),
              g = 5;
            n.userIsDragging = c > g || d > g;
          }
        }),
        (n.onTouchEnd = function (o) {
          n.userIsDragging ||
            (n.controlRef &&
              !n.controlRef.contains(o.target) &&
              n.menuListRef &&
              !n.menuListRef.contains(o.target) &&
              n.blurInput(),
            (n.initialTouchX = 0),
            (n.initialTouchY = 0));
        }),
        (n.onControlTouchEnd = function (o) {
          n.userIsDragging || n.onControlMouseDown(o);
        }),
        (n.onClearIndicatorTouchEnd = function (o) {
          n.userIsDragging || n.onClearIndicatorMouseDown(o);
        }),
        (n.onDropdownIndicatorTouchEnd = function (o) {
          n.userIsDragging || n.onDropdownIndicatorMouseDown(o);
        }),
        (n.handleInputChange = function (o) {
          var s = n.props.inputValue,
            l = o.currentTarget.value;
          n.setState({ inputIsHiddenAfterUpdate: !1 }),
            n.onInputChange(l, { action: "input-change", prevInputValue: s }),
            n.props.menuIsOpen || n.onMenuOpen();
        }),
        (n.onInputFocus = function (o) {
          n.props.onFocus && n.props.onFocus(o),
            n.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
            (n.openAfterFocus || n.props.openMenuOnFocus) &&
              n.openMenu("first"),
            (n.openAfterFocus = !1);
        }),
        (n.onInputBlur = function (o) {
          var s = n.props.inputValue;
          if (n.menuListRef && n.menuListRef.contains(document.activeElement)) {
            n.inputRef.focus();
            return;
          }
          n.props.onBlur && n.props.onBlur(o),
            n.onInputChange("", { action: "input-blur", prevInputValue: s }),
            n.onMenuClose(),
            n.setState({ focusedValue: null, isFocused: !1 });
        }),
        (n.onOptionHover = function (o) {
          n.blockOptionHover ||
            n.state.focusedOption === o ||
            n.setState({ focusedOption: o });
        }),
        (n.shouldHideSelectedOptions = function () {
          return xr(n.props);
        }),
        (n.onValueInputFocus = function (o) {
          o.preventDefault(), o.stopPropagation(), n.focus();
        }),
        (n.onKeyDown = function (o) {
          var s = n.props,
            l = s.isMulti,
            c = s.backspaceRemovesValue,
            d = s.escapeClearsValue,
            g = s.inputValue,
            E = s.isClearable,
            v = s.isDisabled,
            p = s.menuIsOpen,
            m = s.onKeyDown,
            f = s.tabSelectsValue,
            S = s.openMenuOnFocus,
            x = n.state,
            A = x.focusedOption,
            I = x.focusedValue,
            y = x.selectValue;
          if (!v && !(typeof m == "function" && (m(o), o.defaultPrevented))) {
            switch (((n.blockOptionHover = !0), o.key)) {
              case "ArrowLeft":
                if (!l || g) return;
                n.focusValue("previous");
                break;
              case "ArrowRight":
                if (!l || g) return;
                n.focusValue("next");
                break;
              case "Delete":
              case "Backspace":
                if (g) return;
                if (I) n.removeValue(I);
                else {
                  if (!c) return;
                  l ? n.popValue() : E && n.clearValue();
                }
                break;
              case "Tab":
                if (
                  n.isComposing ||
                  o.shiftKey ||
                  !p ||
                  !f ||
                  !A ||
                  (S && n.isOptionSelected(A, y))
                )
                  return;
                n.selectOption(A);
                break;
              case "Enter":
                if (o.keyCode === 229) break;
                if (p) {
                  if (!A || n.isComposing) return;
                  n.selectOption(A);
                  break;
                }
                return;
              case "Escape":
                p
                  ? (n.setState({ inputIsHiddenAfterUpdate: !1 }),
                    n.onInputChange("", {
                      action: "menu-close",
                      prevInputValue: g,
                    }),
                    n.onMenuClose())
                  : E && d && n.clearValue();
                break;
              case " ":
                if (g) return;
                if (!p) {
                  n.openMenu("first");
                  break;
                }
                if (!A) return;
                n.selectOption(A);
                break;
              case "ArrowUp":
                p ? n.focusOption("up") : n.openMenu("last");
                break;
              case "ArrowDown":
                p ? n.focusOption("down") : n.openMenu("first");
                break;
              case "PageUp":
                if (!p) return;
                n.focusOption("pageup");
                break;
              case "PageDown":
                if (!p) return;
                n.focusOption("pagedown");
                break;
              case "Home":
                if (!p) return;
                n.focusOption("first");
                break;
              case "End":
                if (!p) return;
                n.focusOption("last");
                break;
              default:
                return;
            }
            o.preventDefault();
          }
        }),
        (n.instancePrefix = "react-select-" + (n.props.instanceId || ++xs)),
        (n.state.selectValue = an(i.value)),
        i.menuIsOpen && n.state.selectValue.length)
      ) {
        var a = n.buildFocusableOptions(),
          u = a.indexOf(n.state.selectValue[0]);
        n.state.focusedOption = a[u];
      }
      return n;
    }
    return (
      _i(
        r,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.startListeningComposition(),
                this.startListeningToTouch(),
                this.props.closeMenuOnScroll &&
                  document &&
                  document.addEventListener &&
                  document.addEventListener("scroll", this.onScroll, !0),
                this.props.autoFocus && this.focusInput(),
                this.props.menuIsOpen &&
                  this.state.focusedOption &&
                  this.menuListRef &&
                  this.focusedOptionRef &&
                  on(this.menuListRef, this.focusedOptionRef);
            },
          },
          {
            key: "componentDidUpdate",
            value: function (n) {
              var a = this.props,
                u = a.isDisabled,
                o = a.menuIsOpen,
                s = this.state.isFocused;
              ((s && !u && n.isDisabled) || (s && o && !n.menuIsOpen)) &&
                this.focusInput(),
                s && u && !n.isDisabled
                  ? this.setState({ isFocused: !1 }, this.onMenuClose)
                  : !s &&
                    !u &&
                    n.isDisabled &&
                    this.inputRef === document.activeElement &&
                    this.setState({ isFocused: !0 }),
                this.menuListRef &&
                  this.focusedOptionRef &&
                  this.scrollToFocusedOptionOnUpdate &&
                  (on(this.menuListRef, this.focusedOptionRef),
                  (this.scrollToFocusedOptionOnUpdate = !1));
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.stopListeningComposition(),
                this.stopListeningToTouch(),
                document.removeEventListener("scroll", this.onScroll, !0);
            },
          },
          {
            key: "onMenuOpen",
            value: function () {
              this.props.onMenuOpen();
            },
          },
          {
            key: "onMenuClose",
            value: function () {
              this.onInputChange("", {
                action: "menu-close",
                prevInputValue: this.props.inputValue,
              }),
                this.props.onMenuClose();
            },
          },
          {
            key: "onInputChange",
            value: function (n, a) {
              this.props.onInputChange(n, a);
            },
          },
          {
            key: "focusInput",
            value: function () {
              this.inputRef && this.inputRef.focus();
            },
          },
          {
            key: "blurInput",
            value: function () {
              this.inputRef && this.inputRef.blur();
            },
          },
          {
            key: "openMenu",
            value: function (n) {
              var a = this,
                u = this.state,
                o = u.selectValue,
                s = u.isFocused,
                l = this.buildFocusableOptions(),
                c = n === "first" ? 0 : l.length - 1;
              if (!this.props.isMulti) {
                var d = l.indexOf(o[0]);
                d > -1 && (c = d);
              }
              (this.scrollToFocusedOptionOnUpdate = !(s && this.menuListRef)),
                this.setState(
                  {
                    inputIsHiddenAfterUpdate: !1,
                    focusedValue: null,
                    focusedOption: l[c],
                  },
                  function () {
                    return a.onMenuOpen();
                  },
                );
            },
          },
          {
            key: "focusValue",
            value: function (n) {
              var a = this.state,
                u = a.selectValue,
                o = a.focusedValue;
              if (this.props.isMulti) {
                this.setState({ focusedOption: null });
                var s = u.indexOf(o);
                o || (s = -1);
                var l = u.length - 1,
                  c = -1;
                if (u.length) {
                  switch (n) {
                    case "previous":
                      s === 0 ? (c = 0) : s === -1 ? (c = l) : (c = s - 1);
                      break;
                    case "next":
                      s > -1 && s < l && (c = s + 1);
                      break;
                  }
                  this.setState({
                    inputIsHidden: c !== -1,
                    focusedValue: u[c],
                  });
                }
              }
            },
          },
          {
            key: "focusOption",
            value: function () {
              var n =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : "first",
                a = this.props.pageSize,
                u = this.state.focusedOption,
                o = this.getFocusableOptions();
              if (o.length) {
                var s = 0,
                  l = o.indexOf(u);
                u || (l = -1),
                  n === "up"
                    ? (s = l > 0 ? l - 1 : o.length - 1)
                    : n === "down"
                    ? (s = (l + 1) % o.length)
                    : n === "pageup"
                    ? ((s = l - a), s < 0 && (s = 0))
                    : n === "pagedown"
                    ? ((s = l + a), s > o.length - 1 && (s = o.length - 1))
                    : n === "last" && (s = o.length - 1),
                  (this.scrollToFocusedOptionOnUpdate = !0),
                  this.setState({ focusedOption: o[s], focusedValue: null });
              }
            },
          },
          {
            key: "getTheme",
            value: function () {
              return this.props.theme
                ? typeof this.props.theme == "function"
                  ? this.props.theme(mt)
                  : O(O({}, mt), this.props.theme)
                : mt;
            },
          },
          {
            key: "getCommonProps",
            value: function () {
              var n = this.clearValue,
                a = this.cx,
                u = this.getStyles,
                o = this.getClassNames,
                s = this.getValue,
                l = this.selectOption,
                c = this.setValue,
                d = this.props,
                g = d.isMulti,
                E = d.isRtl,
                v = d.options,
                p = this.hasValue();
              return {
                clearValue: n,
                cx: a,
                getStyles: u,
                getClassNames: o,
                getValue: s,
                hasValue: p,
                isMulti: g,
                isRtl: E,
                options: v,
                selectOption: l,
                selectProps: d,
                setValue: c,
                theme: this.getTheme(),
              };
            },
          },
          {
            key: "hasValue",
            value: function () {
              var n = this.state.selectValue;
              return n.length > 0;
            },
          },
          {
            key: "hasOptions",
            value: function () {
              return !!this.getFocusableOptions().length;
            },
          },
          {
            key: "isClearable",
            value: function () {
              var n = this.props,
                a = n.isClearable,
                u = n.isMulti;
              return a === void 0 ? u : a;
            },
          },
          {
            key: "isOptionDisabled",
            value: function (n, a) {
              return yr(this.props, n, a);
            },
          },
          {
            key: "isOptionSelected",
            value: function (n, a) {
              return Cr(this.props, n, a);
            },
          },
          {
            key: "filterOption",
            value: function (n, a) {
              return Sr(this.props, n, a);
            },
          },
          {
            key: "formatOptionLabel",
            value: function (n, a) {
              if (typeof this.props.formatOptionLabel == "function") {
                var u = this.props.inputValue,
                  o = this.state.selectValue;
                return this.props.formatOptionLabel(n, {
                  context: a,
                  inputValue: u,
                  selectValue: o,
                });
              } else return this.getOptionLabel(n);
            },
          },
          {
            key: "formatGroupLabel",
            value: function (n) {
              return this.props.formatGroupLabel(n);
            },
          },
          {
            key: "startListeningComposition",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener(
                  "compositionstart",
                  this.onCompositionStart,
                  !1,
                ),
                document.addEventListener(
                  "compositionend",
                  this.onCompositionEnd,
                  !1,
                ));
            },
          },
          {
            key: "stopListeningComposition",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener(
                  "compositionstart",
                  this.onCompositionStart,
                ),
                document.removeEventListener(
                  "compositionend",
                  this.onCompositionEnd,
                ));
            },
          },
          {
            key: "startListeningToTouch",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener("touchstart", this.onTouchStart, !1),
                document.addEventListener("touchmove", this.onTouchMove, !1),
                document.addEventListener("touchend", this.onTouchEnd, !1));
            },
          },
          {
            key: "stopListeningToTouch",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener("touchstart", this.onTouchStart),
                document.removeEventListener("touchmove", this.onTouchMove),
                document.removeEventListener("touchend", this.onTouchEnd));
            },
          },
          {
            key: "renderInput",
            value: function () {
              var n = this.props,
                a = n.isDisabled,
                u = n.isSearchable,
                o = n.inputId,
                s = n.inputValue,
                l = n.tabIndex,
                c = n.form,
                d = n.menuIsOpen,
                g = n.required,
                E = this.getComponents(),
                v = E.Input,
                p = this.state,
                m = p.inputIsHidden,
                f = p.ariaSelection,
                S = this.commonProps,
                x = o || this.getElementId("input"),
                A = O(
                  O(
                    O(
                      {
                        "aria-autocomplete": "list",
                        "aria-expanded": d,
                        "aria-haspopup": !0,
                        "aria-errormessage": this.props["aria-errormessage"],
                        "aria-invalid": this.props["aria-invalid"],
                        "aria-label": this.props["aria-label"],
                        "aria-labelledby": this.props["aria-labelledby"],
                        "aria-required": g,
                        role: "combobox",
                      },
                      d && {
                        "aria-controls": this.getElementId("listbox"),
                        "aria-owns": this.getElementId("listbox"),
                      },
                    ),
                    !u && { "aria-readonly": !0 },
                  ),
                  this.hasValue()
                    ? (f == null ? void 0 : f.action) ===
                        "initial-input-focus" && {
                        "aria-describedby": this.getElementId("live-region"),
                      }
                    : { "aria-describedby": this.getElementId("placeholder") },
                );
              return u
                ? h.createElement(
                    v,
                    w(
                      {},
                      S,
                      {
                        autoCapitalize: "none",
                        autoComplete: "off",
                        autoCorrect: "off",
                        id: x,
                        innerRef: this.getInputRef,
                        isDisabled: a,
                        isHidden: m,
                        onBlur: this.onInputBlur,
                        onChange: this.handleInputChange,
                        onFocus: this.onInputFocus,
                        spellCheck: "false",
                        tabIndex: l,
                        form: c,
                        type: "text",
                        value: s,
                      },
                      A,
                    ),
                  )
                : h.createElement(
                    Qu,
                    w(
                      {
                        id: x,
                        innerRef: this.getInputRef,
                        onBlur: this.onInputBlur,
                        onChange: Ue,
                        onFocus: this.onInputFocus,
                        disabled: a,
                        tabIndex: l,
                        inputMode: "none",
                        form: c,
                        value: "",
                      },
                      A,
                    ),
                  );
            },
          },
          {
            key: "renderPlaceholderOrValue",
            value: function () {
              var n = this,
                a = this.getComponents(),
                u = a.MultiValue,
                o = a.MultiValueContainer,
                s = a.MultiValueLabel,
                l = a.MultiValueRemove,
                c = a.SingleValue,
                d = a.Placeholder,
                g = this.commonProps,
                E = this.props,
                v = E.controlShouldRenderValue,
                p = E.isDisabled,
                m = E.isMulti,
                f = E.inputValue,
                S = E.placeholder,
                x = this.state,
                A = x.selectValue,
                I = x.focusedValue,
                y = x.isFocused;
              if (!this.hasValue() || !v)
                return f
                  ? null
                  : h.createElement(
                      d,
                      w({}, g, {
                        key: "placeholder",
                        isDisabled: p,
                        isFocused: y,
                        innerProps: { id: this.getElementId("placeholder") },
                      }),
                      S,
                    );
              if (m)
                return A.map(function (D, R) {
                  var q = D === I,
                    Z = ""
                      .concat(n.getOptionLabel(D), "-")
                      .concat(n.getOptionValue(D));
                  return h.createElement(
                    u,
                    w({}, g, {
                      components: { Container: o, Label: s, Remove: l },
                      isFocused: q,
                      isDisabled: p,
                      key: Z,
                      index: R,
                      removeProps: {
                        onClick: function () {
                          return n.removeValue(D);
                        },
                        onTouchEnd: function () {
                          return n.removeValue(D);
                        },
                        onMouseDown: function (J) {
                          J.preventDefault();
                        },
                      },
                      data: D,
                    }),
                    n.formatOptionLabel(D, "value"),
                  );
                });
              if (f) return null;
              var C = A[0];
              return h.createElement(
                c,
                w({}, g, { data: C, isDisabled: p }),
                this.formatOptionLabel(C, "value"),
              );
            },
          },
          {
            key: "renderClearIndicator",
            value: function () {
              var n = this.getComponents(),
                a = n.ClearIndicator,
                u = this.commonProps,
                o = this.props,
                s = o.isDisabled,
                l = o.isLoading,
                c = this.state.isFocused;
              if (!this.isClearable() || !a || s || !this.hasValue() || l)
                return null;
              var d = {
                onMouseDown: this.onClearIndicatorMouseDown,
                onTouchEnd: this.onClearIndicatorTouchEnd,
                "aria-hidden": "true",
              };
              return h.createElement(
                a,
                w({}, u, { innerProps: d, isFocused: c }),
              );
            },
          },
          {
            key: "renderLoadingIndicator",
            value: function () {
              var n = this.getComponents(),
                a = n.LoadingIndicator,
                u = this.commonProps,
                o = this.props,
                s = o.isDisabled,
                l = o.isLoading,
                c = this.state.isFocused;
              if (!a || !l) return null;
              var d = { "aria-hidden": "true" };
              return h.createElement(
                a,
                w({}, u, { innerProps: d, isDisabled: s, isFocused: c }),
              );
            },
          },
          {
            key: "renderIndicatorSeparator",
            value: function () {
              var n = this.getComponents(),
                a = n.DropdownIndicator,
                u = n.IndicatorSeparator;
              if (!a || !u) return null;
              var o = this.commonProps,
                s = this.props.isDisabled,
                l = this.state.isFocused;
              return h.createElement(
                u,
                w({}, o, { isDisabled: s, isFocused: l }),
              );
            },
          },
          {
            key: "renderDropdownIndicator",
            value: function () {
              var n = this.getComponents(),
                a = n.DropdownIndicator;
              if (!a) return null;
              var u = this.commonProps,
                o = this.props.isDisabled,
                s = this.state.isFocused,
                l = {
                  onMouseDown: this.onDropdownIndicatorMouseDown,
                  onTouchEnd: this.onDropdownIndicatorTouchEnd,
                  "aria-hidden": "true",
                };
              return h.createElement(
                a,
                w({}, u, { innerProps: l, isDisabled: o, isFocused: s }),
              );
            },
          },
          {
            key: "renderMenu",
            value: function () {
              var n = this,
                a = this.getComponents(),
                u = a.Group,
                o = a.GroupHeading,
                s = a.Menu,
                l = a.MenuList,
                c = a.MenuPortal,
                d = a.LoadingMessage,
                g = a.NoOptionsMessage,
                E = a.Option,
                v = this.commonProps,
                p = this.state.focusedOption,
                m = this.props,
                f = m.captureMenuScroll,
                S = m.inputValue,
                x = m.isLoading,
                A = m.loadingMessage,
                I = m.minMenuHeight,
                y = m.maxMenuHeight,
                C = m.menuIsOpen,
                D = m.menuPlacement,
                R = m.menuPosition,
                q = m.menuPortalTarget,
                Z = m.menuShouldBlockScroll,
                U = m.menuShouldScrollIntoView,
                J = m.noOptionsMessage,
                k = m.onMenuScrollToTop,
                $ = m.onMenuScrollToBottom;
              if (!C) return null;
              var K = function (z, ce) {
                  var de = z.type,
                    te = z.data,
                    ne = z.isDisabled,
                    Ee = z.isSelected,
                    Ie = z.label,
                    Fr = z.value,
                    $t = p === te,
                    jt = ne
                      ? void 0
                      : function () {
                          return n.onOptionHover(te);
                        },
                    wr = ne
                      ? void 0
                      : function () {
                          return n.selectOption(te);
                        },
                    Bt = "".concat(n.getElementId("option"), "-").concat(ce),
                    Ar = {
                      id: Bt,
                      onClick: wr,
                      onMouseMove: jt,
                      onMouseOver: jt,
                      tabIndex: -1,
                    };
                  return h.createElement(
                    E,
                    w({}, v, {
                      innerProps: Ar,
                      data: te,
                      isDisabled: ne,
                      isSelected: Ee,
                      key: Bt,
                      label: Ie,
                      type: de,
                      value: Fr,
                      isFocused: $t,
                      innerRef: $t ? n.getFocusedOptionRef : void 0,
                    }),
                    n.formatOptionLabel(z.data, "menu"),
                  );
                },
                Q;
              if (this.hasOptions())
                Q = this.getCategorizedOptions().map(function (N) {
                  if (N.type === "group") {
                    var z = N.data,
                      ce = N.options,
                      de = N.index,
                      te = "".concat(n.getElementId("group"), "-").concat(de),
                      ne = "".concat(te, "-heading");
                    return h.createElement(
                      u,
                      w({}, v, {
                        key: te,
                        data: z,
                        options: ce,
                        Heading: o,
                        headingProps: { id: ne, data: N.data },
                        label: n.formatGroupLabel(N.data),
                      }),
                      N.options.map(function (Ee) {
                        return K(Ee, "".concat(de, "-").concat(Ee.index));
                      }),
                    );
                  } else if (N.type === "option")
                    return K(N, "".concat(N.index));
                });
              else if (x) {
                var ee = A({ inputValue: S });
                if (ee === null) return null;
                Q = h.createElement(d, v, ee);
              } else {
                var se = J({ inputValue: S });
                if (se === null) return null;
                Q = h.createElement(g, v, se);
              }
              var le = {
                  minMenuHeight: I,
                  maxMenuHeight: y,
                  menuPlacement: D,
                  menuPosition: R,
                  menuShouldScrollIntoView: U,
                },
                pe = h.createElement(Po, w({}, v, le), function (N) {
                  var z = N.ref,
                    ce = N.placerProps,
                    de = ce.placement,
                    te = ce.maxHeight;
                  return h.createElement(
                    s,
                    w({}, v, le, {
                      innerRef: z,
                      innerProps: {
                        onMouseDown: n.onMenuMouseDown,
                        onMouseMove: n.onMenuMouseMove,
                        id: n.getElementId("listbox"),
                      },
                      isLoading: x,
                      placement: de,
                    }),
                    h.createElement(
                      as,
                      {
                        captureEnabled: f,
                        onTopArrive: k,
                        onBottomArrive: $,
                        lockEnabled: Z,
                      },
                      function (ne) {
                        return h.createElement(
                          l,
                          w({}, v, {
                            innerRef: function (Ie) {
                              n.getMenuListRef(Ie), ne(Ie);
                            },
                            isLoading: x,
                            maxHeight: te,
                            focusedOption: p,
                          }),
                          Q,
                        );
                      },
                    ),
                  );
                });
              return q || R === "fixed"
                ? h.createElement(
                    c,
                    w({}, v, {
                      appendTo: q,
                      controlElement: this.controlRef,
                      menuPlacement: D,
                      menuPosition: R,
                    }),
                    pe,
                  )
                : pe;
            },
          },
          {
            key: "renderFormField",
            value: function () {
              var n = this,
                a = this.props,
                u = a.delimiter,
                o = a.isDisabled,
                s = a.isMulti,
                l = a.name,
                c = a.required,
                d = this.state.selectValue;
              if (c && !this.hasValue() && !o)
                return h.createElement(ss, {
                  name: l,
                  onFocus: this.onValueInputFocus,
                });
              if (!(!l || o))
                if (s)
                  if (u) {
                    var g = d
                      .map(function (p) {
                        return n.getOptionValue(p);
                      })
                      .join(u);
                    return h.createElement("input", {
                      name: l,
                      type: "hidden",
                      value: g,
                    });
                  } else {
                    var E =
                      d.length > 0
                        ? d.map(function (p, m) {
                            return h.createElement("input", {
                              key: "i-".concat(m),
                              name: l,
                              type: "hidden",
                              value: n.getOptionValue(p),
                            });
                          })
                        : h.createElement("input", {
                            name: l,
                            type: "hidden",
                            value: "",
                          });
                    return h.createElement("div", null, E);
                  }
                else {
                  var v = d[0] ? this.getOptionValue(d[0]) : "";
                  return h.createElement("input", {
                    name: l,
                    type: "hidden",
                    value: v,
                  });
                }
            },
          },
          {
            key: "renderLiveRegion",
            value: function () {
              var n = this.commonProps,
                a = this.state,
                u = a.ariaSelection,
                o = a.focusedOption,
                s = a.focusedValue,
                l = a.isFocused,
                c = a.selectValue,
                d = this.getFocusableOptions();
              return h.createElement(
                Yu,
                w({}, n, {
                  id: this.getElementId("live-region"),
                  ariaSelection: u,
                  focusedOption: o,
                  focusedValue: s,
                  isFocused: l,
                  selectValue: c,
                  focusableOptions: d,
                }),
              );
            },
          },
          {
            key: "render",
            value: function () {
              var n = this.getComponents(),
                a = n.Control,
                u = n.IndicatorsContainer,
                o = n.SelectContainer,
                s = n.ValueContainer,
                l = this.props,
                c = l.className,
                d = l.id,
                g = l.isDisabled,
                E = l.menuIsOpen,
                v = this.state.isFocused,
                p = (this.commonProps = this.getCommonProps());
              return h.createElement(
                o,
                w({}, p, {
                  className: c,
                  innerProps: { id: d, onKeyDown: this.onKeyDown },
                  isDisabled: g,
                  isFocused: v,
                }),
                this.renderLiveRegion(),
                h.createElement(
                  a,
                  w({}, p, {
                    innerRef: this.getControlRef,
                    innerProps: {
                      onMouseDown: this.onControlMouseDown,
                      onTouchEnd: this.onControlTouchEnd,
                    },
                    isDisabled: g,
                    isFocused: v,
                    menuIsOpen: E,
                  }),
                  h.createElement(
                    s,
                    w({}, p, { isDisabled: g }),
                    this.renderPlaceholderOrValue(),
                    this.renderInput(),
                  ),
                  h.createElement(
                    u,
                    w({}, p, { isDisabled: g }),
                    this.renderClearIndicator(),
                    this.renderLoadingIndicator(),
                    this.renderIndicatorSeparator(),
                    this.renderDropdownIndicator(),
                  ),
                ),
                this.renderMenu(),
                this.renderFormField(),
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (n, a) {
              var u = a.prevProps,
                o = a.clearFocusValueOnUpdate,
                s = a.inputIsHiddenAfterUpdate,
                l = a.ariaSelection,
                c = a.isFocused,
                d = a.prevWasFocused,
                g = n.options,
                E = n.value,
                v = n.menuIsOpen,
                p = n.inputValue,
                m = n.isMulti,
                f = an(E),
                S = {};
              if (
                u &&
                (E !== u.value ||
                  g !== u.options ||
                  v !== u.menuIsOpen ||
                  p !== u.inputValue)
              ) {
                var x = v ? ys(n, f) : [],
                  A = o ? Cs(a, f) : null,
                  I = Ss(a, x);
                S = {
                  selectValue: f,
                  focusedOption: I,
                  focusedValue: A,
                  clearFocusValueOnUpdate: !1,
                };
              }
              var y =
                  s != null && n !== u
                    ? { inputIsHidden: s, inputIsHiddenAfterUpdate: void 0 }
                    : {},
                C = l,
                D = c && d;
              return (
                c &&
                  !D &&
                  ((C = {
                    value: Le(m, f, f[0] || null),
                    options: f,
                    action: "initial-input-focus",
                  }),
                  (D = !d)),
                (l == null ? void 0 : l.action) === "initial-input-focus" &&
                  (C = null),
                O(
                  O(O({}, S), y),
                  {},
                  { prevProps: n, ariaSelection: C, prevWasFocused: D },
                )
              );
            },
          },
        ],
      ),
      r
    );
  })(h.Component);
Or.defaultProps = Es;
var Os = h.forwardRef(function (e, t) {
    var r = Ni(e);
    return h.createElement(Or, w({ ref: t }, r));
  }),
  Fs = Os;
function fe(e) {
  return b.jsx(Fs, { styles: ws, ...e });
}
const ws = {
  control: (e, t) => ({
    ...e,
    width: "100%",
    padding: "0",
    minHeight: "2.5rem",
    borderWidth: 0,
    borderRadius: "0.125rem",
    boxShadow: "none",
    backgroundColor: t.isFocused
      ? "rgba(238, 242, 255, 1)"
      : "rgba(243, 244, 246, 1)",
    color: t.isFocused ? "rgba(67, 56, 202, 1)" : "rgba(55, 65, 81, 1)",
  }),
  valueContainer: (e) => ({ ...e, padding: "0 1rem" }),
  singleValue: (e) => ({ ...e, color: "inherit" }),
  indicatorSeparator: (e) => ({ ...e, display: "none" }),
  dropdownIndicator: (e, t) => ({
    ...e,
    marginRight: "3px",
    width: "32px",
    color: t.isFocused ? "rgba(67, 56, 202, 1)" : "rgba(107, 114, 128, 1)",
  }),
  menu: (e) => ({
    ...e,
    backgroundColor: "rgba(238, 242, 255, 1)",
    boxShadow:
      " 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    borderWidth: 1,
    borderColor: "rgba(243, 244, 246, 1)",
    marginTop: "3px",
  }),
  option: (e, t) => ({
    ...e,
    backgroundColor: t.isSelected
      ? "rgba(67, 56, 202, 1)"
      : t.isFocused
      ? "rgb(183, 201, 255, 1)"
      : "rgba(238, 242, 255, 1)",
    color: t.isSelected ? "rgba(255, 255, 255, 1)" : "rgba(55, 65, 81, 1)",
    "&:hover": {
      color: t.isSelected ? "rgba(255, 255, 255, 1)" : "rgba(67, 56, 202, 1)",
      backgroundColor: t.isSelected
        ? "rgba(67, 56, 202, 1)"
        : "rgba(67, 56, 202, 0.05)",
    },
  }),
};
function Ae({ onChange: e = () => {}, ...t }) {
  return b.jsx("input", {
    ...t,
    className: `
                app-region-no-drag
                w-full px-4 h-10
                bg-gray-100 outline-none rounded-sm
                text-gray-700 focus:text-indigo-700 focus:bg-indigo-50
            `,
    onChange: (r) => e(r.target.value),
  });
}
const Cn = [
    { label: "Follow OS preference", value: "automatic" },
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
  ],
  Sn = [
    { label: "Enabled", value: "Enabled" },
    { label: "Disabled", value: "Disabled" },
  ],
  xn = [
    { label: "For every server", value: "server" },
    { label: "For every project", value: "project" },
    { label: "Never", value: "never" },
  ],
  On = [
    { label: ht ? "On menubar" : "On system tray", value: "menubar" },
    {
      label: ht
        ? "On both dock and menubar"
        : "On both task bar and system tray",
      value: "both",
    },
  ],
  Fn = [
    { label: "Yes", value: !0 },
    { label: "No", value: !1 },
  ],
  wn = [
    { label: "Hide", value: !1 },
    { label: "Show", value: !0 },
  ],
  An = [
    { label: "Yes", value: !0 },
    { label: "No", value: !1 },
  ];
function As() {
  const [e, t] = Mr();
  return b.jsxs(b.Fragment, {
    children: [
      b.jsx("h1", { className: "markup-h1", children: "Behaviour" }),
      b.jsxs("div", {
        className: "grid gap-2",
        children: [
          b.jsx(_, { children: "Open new window" }),
          b.jsx(fe, {
            options: xn,
            value: xn.find((r) => r.value === e.newWindow),
            onChange: (r) => {
              t("newWindow", r == null ? void 0 : r.value);
            },
            isSearchable: !1,
          }),
        ],
      }),
      b.jsxs("div", {
        className: "grid gap-2",
        children: [
          b.jsx(_, { children: "Show app" }),
          b.jsx(fe, {
            options: On,
            value: On.find((r) => r.value === e.appVisibility),
            onChange: (r) => t("appVisibility", r == null ? void 0 : r.value),
            isSearchable: !1,
          }),
        ],
      }),
      b.jsxs("div", {
        className: "grid gap-2",
        children: [
          b.jsx(_, { children: "Always on top" }),
          b.jsx(fe, {
            options: Fn,
            value: Fn.find((r) => r.value === e.floating),
            onChange: (r) => t("floating", r == null ? void 0 : r.value),
            isSearchable: !1,
          }),
        ],
      }),
      b.jsxs("div", {
        className: "grid gap-2",
        children: [
          b.jsx(_, { children: "History limit" }),
          b.jsx(Ae, {
            type: "number",
            value: e.historyLimit,
            onChange: (r) => t("historyLimit", +r),
          }),
        ],
      }),
      b.jsxs("div", {
        className: "grid gap-2",
        children: [
          b.jsx(_, { children: "Editor" }),
          b.jsx(fe, {
            options: Object.keys(Pr).map((r) => ({ label: r, value: r })),
            value: e.editor ? { label: e.editor, value: e.editor } : null,
            onChange: (r) => t("editor", r == null ? void 0 : r.value),
          }),
        ],
      }),
      b.jsx("div", {
        className:
          "overflow-hidden max-h-0 aria-expanded:max-h-10 transition-[max-height] transition-200",
        "aria-expanded": e.editor === "Custom URL",
        children: b.jsx(Ae, {
          placeholder: "%path %line",
          value: e.customEditor,
          onChange: (r) => t("customEditor", r),
        }),
      }),
      b.jsxs("div", {
        className: "ml-auto text-gray-400 text-sm select-none text-right",
        children: [
          e.editor === "Custom URL" &&
            b.jsx("p", {
              className: "mb-1",
              children: "'%path' and '%line' will be replaced in your URL",
            }),
          b.jsxs("p", {
            children: [
              "Some editors might need",
              " ",
              b.jsx("a", {
                href: "https://spatie.be/docs/ray/v1/environment-specific-configuration/windows-10#phpstorm",
                className: "hover:text-gray-300 underline",
                children: "a few extra steps",
              }),
              " ",
              "to get this working.",
            ],
          }),
        ],
      }),
      b.jsx("h1", { className: "markup-h1 mt-4", children: "UI" }),
      b.jsxs("div", {
        className: "grid gap-2",
        children: [
          b.jsx(_, { children: "Theme" }),
          b.jsx(fe, {
            options: Cn,
            value: Cn.find((r) => r.value === e.theme),
            onChange: (r) => t("theme", r == null ? void 0 : r.value),
            isSearchable: !1,
          }),
        ],
      }),
      b.jsxs("div", {
        className: "grid gap-2",
        children: [
          b.jsx(_, { children: "Colorblind mode" }),
          b.jsx(fe, {
            options: Sn,
            value: Sn.find((r) => r.value === e.colorblindMode),
            onChange: (r) => t("colorblindMode", r == null ? void 0 : r.value),
            isSearchable: !1,
          }),
        ],
      }),
      b.jsxs("div", {
        className: "grid gap-2",
        children: [
          b.jsx(_, { children: "Scroll on new log" }),
          b.jsx(fe, {
            options: An,
            value: An.find((r) => r.value === e.scrollOnLog),
            onChange: (r) => t("scrollOnLog", r == null ? void 0 : r.value),
            isSearchable: !1,
          }),
        ],
      }),
      b.jsxs("div", {
        className: "grid gap-2",
        children: [
          b.jsx(_, { children: "Item timestamp" }),
          b.jsx(fe, {
            options: wn,
            value: wn.find((r) => r.value === e.displayTimes),
            onChange: (r) => t("displayTimes", r == null ? void 0 : r.value),
            isSearchable: !1,
          }),
        ],
      }),
    ],
  });
}
function Ds() {
  const [e, t] = Dn("port"),
    [r, i] = h.useState(e),
    n = h.useRef(e);
  h.useEffect(() => {
    (n.current = e), i(e);
  }, [e]);
  const a = h.useCallback(
    Rn((u) => {
      t(u);
    }, 500),
    [],
  );
  return (
    h.useEffect(() => {
      n.current !== r && ((n.current = r), a(r));
    }, [r]),
    b.jsxs(b.Fragment, {
      children: [
        b.jsx("h1", { className: "markup-h1 mt-4", children: "Communication" }),
        b.jsxs("div", {
          className: "grid gap-2",
          children: [
            b.jsx(_, { htmlFor: "port", children: "Port" }),
            b.jsx(Ae, {
              id: "port",
              value: r,
              type: "number",
              min: 1,
              max: 65535,
              onChange: i,
            }),
          ],
        }),
      ],
    })
  );
}
function Is() {
  const e = Vr();
  return b.jsxs(b.Fragment, {
    children: [
      b.jsxs("div", {
        className: "mt-4 md:flex items-center justify-between",
        children: [
          b.jsx("h1", {
            className: "markup-h1",
            children: "License information",
          }),
          e.isValid &&
            b.jsxs("div", {
              className: "space-x-4 text-sm",
              children: [
                b.jsx(Rr, {
                  href: "https://spatie.be/products/ray",
                  children: "Manage your licenses",
                }),
                b.jsx("button", {
                  className:
                    "text-indigo-500 hover:text-indigo-600 underline cursor-pointer",
                  onClick: e.decouple,
                  children: "Decouple license",
                }),
              ],
            }),
        ],
      }),
      e.isValid
        ? b.jsxs(b.Fragment, {
            children: [
              b.jsxs("div", {
                className: "grid gap-2",
                children: [
                  b.jsx(_, { htmlFor: "license-key", children: "Licensed to" }),
                  b.jsx(Ae, {
                    id: "licensed-to",
                    placeholder: e.licensed_to,
                    disabled: !0,
                    readOnly: !0,
                  }),
                ],
              }),
              b.jsxs("div", {
                className: "grid gap-2",
                children: [
                  b.jsx(_, { htmlFor: "expires-at", children: "Expires on" }),
                  b.jsx(Ae, {
                    id: "expires-at",
                    placeholder: e.expiry_date,
                    disabled: !0,
                    readOnly: !0,
                  }),
                ],
              }),
            ],
          })
        : b.jsx("div", {
            children: b.jsxs("p", {
              children: [
                "This application is in trial mode.",
                " ",
                b.jsx("button", {
                  className: "text-indigo-500 hover:text-indigo-600 underline",
                  onClick: e.openWindow,
                  children: "Learn more…",
                }),
              ],
            }),
          }),
    ],
  });
}
function Ps() {
  return b.jsx("main", {
    className: "px-4",
    children: b.jsxs("div", {
      className: "relative mx-auto max-w-xl grid gap-4 my-12",
      children: [b.jsx(As, {}), b.jsx(Ri, {}), b.jsx(Ds, {}), b.jsx(Is, {})],
    }),
  });
}
function Vs() {
  return b.jsx("span", {
    className:
      "text-sm font-bold absolute inset-0 flex justify-center items-center text-center",
    children: "Preferences",
  });
}
export { Vs as Header, Ps as default };
