function Mp(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const l in n)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(n, l);
          i && Object.defineProperty(e, l, i.get ? i : { enumerable: !0, get: () => n[l] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) n(l);
  new MutationObserver((l) => {
    for (const i of l) if (i.type === "childList") for (const c of i.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && n(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(l) {
    const i = {};
    return l.integrity && (i.integrity = l.integrity), l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? (i.credentials = "include") : l.crossOrigin === "anonymous" ? (i.credentials = "omit") : (i.credentials = "same-origin"), i;
  }
  function n(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = r(l);
    fetch(l.href, i);
  }
})();
function Fp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Lu = { exports: {} },
  lo = {},
  Iu = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fn = Symbol.for("react.element"),
  Ap = Symbol.for("react.portal"),
  Up = Symbol.for("react.fragment"),
  Bp = Symbol.for("react.strict_mode"),
  Wp = Symbol.for("react.profiler"),
  Vp = Symbol.for("react.provider"),
  Hp = Symbol.for("react.context"),
  Qp = Symbol.for("react.forward_ref"),
  Kp = Symbol.for("react.suspense"),
  Gp = Symbol.for("react.memo"),
  Yp = Symbol.for("react.lazy"),
  Gs = Symbol.iterator;
function Xp(e) {
  return e === null || typeof e != "object" ? null : ((e = (Gs && e[Gs]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var zu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Du = Object.assign,
  $u = {};
function Ar(e, t, r) {
  (this.props = e), (this.context = t), (this.refs = $u), (this.updater = r || zu);
}
Ar.prototype.isReactComponent = {};
Ar.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ar.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Mu() {}
Mu.prototype = Ar.prototype;
function Mc(e, t, r) {
  (this.props = e), (this.context = t), (this.refs = $u), (this.updater = r || zu);
}
var Fc = (Mc.prototype = new Mu());
Fc.constructor = Mc;
Du(Fc, Ar.prototype);
Fc.isPureReactComponent = !0;
var Ys = Array.isArray,
  Fu = Object.prototype.hasOwnProperty,
  Ac = { current: null },
  Au = { key: !0, ref: !0, __self: !0, __source: !0 };
function Uu(e, t, r) {
  var n,
    l = {},
    i = null,
    c = null;
  if (t != null) for (n in (t.ref !== void 0 && (c = t.ref), t.key !== void 0 && (i = "" + t.key), t)) Fu.call(t, n) && !Au.hasOwnProperty(n) && (l[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1) l.children = r;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (n in ((s = e.defaultProps), s)) l[n] === void 0 && (l[n] = s[n]);
  return { $$typeof: Fn, type: e, key: i, ref: c, props: l, _owner: Ac.current };
}
function Jp(e, t) {
  return { $$typeof: Fn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Uc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fn;
}
function Zp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Xs = /\/+/g;
function Go(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Zp("" + e.key) : t.toString(36);
}
function dl(e, t, r, n, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var c = !1;
  if (e === null) c = !0;
  else
    switch (i) {
      case "string":
      case "number":
        c = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Fn:
          case Ap:
            c = !0;
        }
    }
  if (c)
    return (
      (c = e),
      (l = l(c)),
      (e = n === "" ? "." + Go(c, 0) : n),
      Ys(l)
        ? ((r = ""),
          e != null && (r = e.replace(Xs, "$&/") + "/"),
          dl(l, t, r, "", function (u) {
            return u;
          }))
        : l != null && (Uc(l) && (l = Jp(l, r + (!l.key || (c && c.key === l.key) ? "" : ("" + l.key).replace(Xs, "$&/") + "/") + e)), t.push(l)),
      1
    );
  if (((c = 0), (n = n === "" ? "." : n + ":"), Ys(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = n + Go(i, s);
      c += dl(i, t, r, a, l);
    }
  else if (((a = Xp(e)), typeof a == "function")) for (e = a.call(e), s = 0; !(i = e.next()).done; ) (i = i.value), (a = n + Go(i, s++)), (c += dl(i, t, r, a, l));
  else if (i === "object") throw ((t = String(e)), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."));
  return c;
}
function Yn(e, t, r) {
  if (e == null) return e;
  var n = [],
    l = 0;
  return (
    dl(e, n, "", "", function (i) {
      return t.call(r, i, l++);
    }),
    n
  );
}
function qp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null },
  pl = { transition: null },
  em = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: pl, ReactCurrentOwner: Ac };
I.Children = {
  map: Yn,
  forEach: function (e, t, r) {
    Yn(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Yn(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Yn(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Uc(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
I.Component = Ar;
I.Fragment = Up;
I.Profiler = Wp;
I.PureComponent = Mc;
I.StrictMode = Bp;
I.Suspense = Kp;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = em;
I.cloneElement = function (e, t, r) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = Du({}, e.props),
    l = e.key,
    i = e.ref,
    c = e._owner;
  if (t != null) {
    if ((t.ref !== void 0 && ((i = t.ref), (c = Ac.current)), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)) var s = e.type.defaultProps;
    for (a in t) Fu.call(t, a) && !Au.hasOwnProperty(a) && (n[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) n.children = r;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    n.children = s;
  }
  return { $$typeof: Fn, type: e.type, key: l, ref: i, props: n, _owner: c };
};
I.createContext = function (e) {
  return (e = { $$typeof: Hp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }), (e.Provider = { $$typeof: Vp, _context: e }), (e.Consumer = e);
};
I.createElement = Uu;
I.createFactory = function (e) {
  var t = Uu.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: Qp, render: e };
};
I.isValidElement = Uc;
I.lazy = function (e) {
  return { $$typeof: Yp, _payload: { _status: -1, _result: e }, _init: qp };
};
I.memo = function (e, t) {
  return { $$typeof: Gp, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = pl.transition;
  pl.transition = {};
  try {
    e();
  } finally {
    pl.transition = t;
  }
};
I.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
I.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
I.useContext = function (e) {
  return xe.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
I.useId = function () {
  return xe.current.useId();
};
I.useImperativeHandle = function (e, t, r) {
  return xe.current.useImperativeHandle(e, t, r);
};
I.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
I.useReducer = function (e, t, r) {
  return xe.current.useReducer(e, t, r);
};
I.useRef = function (e) {
  return xe.current.useRef(e);
};
I.useState = function (e) {
  return xe.current.useState(e);
};
I.useSyncExternalStore = function (e, t, r) {
  return xe.current.useSyncExternalStore(e, t, r);
};
I.useTransition = function () {
  return xe.current.useTransition();
};
I.version = "18.2.0";
Iu.exports = I;
var w = Iu.exports;
const Bu = Fp(w),
  tm = Mp({ __proto__: null, default: Bu }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rm = w,
  nm = Symbol.for("react.element"),
  lm = Symbol.for("react.fragment"),
  om = Object.prototype.hasOwnProperty,
  im = rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  cm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wu(e, t, r) {
  var n,
    l = {},
    i = null,
    c = null;
  r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (c = t.ref);
  for (n in t) om.call(t, n) && !cm.hasOwnProperty(n) && (l[n] = t[n]);
  if (e && e.defaultProps) for (n in ((t = e.defaultProps), t)) l[n] === void 0 && (l[n] = t[n]);
  return { $$typeof: nm, type: e, key: i, ref: c, props: l, _owner: im.current };
}
lo.Fragment = lm;
lo.jsx = Wu;
lo.jsxs = Wu;
Lu.exports = lo;
var o = Lu.exports,
  Li = {},
  Vu = { exports: {} },
  _e = {},
  Hu = { exports: {} },
  Qu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(b, R) {
    var L = b.length;
    b.push(R);
    e: for (; 0 < L; ) {
      var X = (L - 1) >>> 1,
        te = b[X];
      if (0 < l(te, R)) (b[X] = R), (b[L] = te), (L = X);
      else break e;
    }
  }
  function r(b) {
    return b.length === 0 ? null : b[0];
  }
  function n(b) {
    if (b.length === 0) return null;
    var R = b[0],
      L = b.pop();
    if (L !== R) {
      b[0] = L;
      e: for (var X = 0, te = b.length, Kn = te >>> 1; X < Kn; ) {
        var Vt = 2 * (X + 1) - 1,
          Ko = b[Vt],
          Ht = Vt + 1,
          Gn = b[Ht];
        if (0 > l(Ko, L)) Ht < te && 0 > l(Gn, Ko) ? ((b[X] = Gn), (b[Ht] = L), (X = Ht)) : ((b[X] = Ko), (b[Vt] = L), (X = Vt));
        else if (Ht < te && 0 > l(Gn, L)) (b[X] = Gn), (b[Ht] = L), (X = Ht);
        else break e;
      }
    }
    return R;
  }
  function l(b, R) {
    var L = b.sortIndex - R.sortIndex;
    return L !== 0 ? L : b.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var c = Date,
      s = c.now();
    e.unstable_now = function () {
      return c.now() - s;
    };
  }
  var a = [],
    u = [],
    f = 1,
    d = null,
    p = 3,
    v = !1,
    x = !1,
    g = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(b) {
    for (var R = r(u); R !== null; ) {
      if (R.callback === null) n(u);
      else if (R.startTime <= b) n(u), (R.sortIndex = R.expirationTime), t(a, R);
      else break;
      R = r(u);
    }
  }
  function S(b) {
    if (((g = !1), y(b), !x))
      if (r(a) !== null) (x = !0), Ho(C);
      else {
        var R = r(u);
        R !== null && Qo(S, R.startTime - b);
      }
  }
  function C(b, R) {
    (x = !1), g && ((g = !1), m(O), (O = -1)), (v = !0);
    var L = p;
    try {
      for (y(R), d = r(a); d !== null && (!(d.expirationTime > R) || (b && !oe())); ) {
        var X = d.callback;
        if (typeof X == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var te = X(d.expirationTime <= R);
          (R = e.unstable_now()), typeof te == "function" ? (d.callback = te) : d === r(a) && n(a), y(R);
        } else n(a);
        d = r(a);
      }
      if (d !== null) var Kn = !0;
      else {
        var Vt = r(u);
        Vt !== null && Qo(S, Vt.startTime - R), (Kn = !1);
      }
      return Kn;
    } finally {
      (d = null), (p = L), (v = !1);
    }
  }
  var P = !1,
    N = null,
    O = -1,
    D = 5,
    T = -1;
  function oe() {
    return !(e.unstable_now() - T < D);
  }
  function Hr() {
    if (N !== null) {
      var b = e.unstable_now();
      T = b;
      var R = !0;
      try {
        R = N(!0, b);
      } finally {
        R ? Qr() : ((P = !1), (N = null));
      }
    } else P = !1;
  }
  var Qr;
  if (typeof h == "function")
    Qr = function () {
      h(Hr);
    };
  else if (typeof MessageChannel < "u") {
    var Ks = new MessageChannel(),
      $p = Ks.port2;
    (Ks.port1.onmessage = Hr),
      (Qr = function () {
        $p.postMessage(null);
      });
  } else
    Qr = function () {
      j(Hr, 0);
    };
  function Ho(b) {
    (N = b), P || ((P = !0), Qr());
  }
  function Qo(b, R) {
    O = j(function () {
      b(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || v || ((x = !0), Ho(C));
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (D = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(a);
    }),
    (e.unstable_next = function (b) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = p;
      }
      var L = p;
      p = R;
      try {
        return b();
      } finally {
        p = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, R) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var L = p;
      p = b;
      try {
        return R();
      } finally {
        p = L;
      }
    }),
    (e.unstable_scheduleCallback = function (b, R, L) {
      var X = e.unstable_now();
      switch ((typeof L == "object" && L !== null ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? X + L : X)) : (L = X), b)) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (te = L + te), (b = { id: f++, callback: R, priorityLevel: b, startTime: L, expirationTime: te, sortIndex: -1 }), L > X ? ((b.sortIndex = L), t(u, b), r(a) === null && b === r(u) && (g ? (m(O), (O = -1)) : (g = !0), Qo(S, L - X))) : ((b.sortIndex = te), t(a, b), x || v || ((x = !0), Ho(C))), b;
    }),
    (e.unstable_shouldYield = oe),
    (e.unstable_wrapCallback = function (b) {
      var R = p;
      return function () {
        var L = p;
        p = R;
        try {
          return b.apply(this, arguments);
        } finally {
          p = L;
        }
      };
    });
})(Qu);
Hu.exports = Qu;
var sm = Hu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ku = w,
  Ne = sm;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Gu = new Set(),
  yn = {};
function ir(e, t) {
  Tr(e, t), Tr(e + "Capture", t);
}
function Tr(e, t) {
  for (yn[e] = t, e = 0; e < t.length; e++) Gu.add(t[e]);
}
var ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Ii = Object.prototype.hasOwnProperty,
  am = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Js = {},
  Zs = {};
function um(e) {
  return Ii.call(Zs, e) ? !0 : Ii.call(Js, e) ? !1 : am.test(e) ? (Zs[e] = !0) : ((Js[e] = !0), !1);
}
function fm(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n ? !1 : r !== null ? !r.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function dm(e, t, r, n) {
  if (t === null || typeof t > "u" || fm(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ye(e, t, r, n, l, i, c) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4), (this.attributeName = n), (this.attributeNamespace = l), (this.mustUseProperty = r), (this.propertyName = e), (this.type = t), (this.sanitizeURL = i), (this.removeEmptyString = c);
}
var se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  se[e] = new ye(e, 0, !1, e, null, !1, !1);
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  se[t] = new ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  se[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  se[e] = new ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
  se[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  se[e] = new ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  se[e] = new ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  se[e] = new ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  se[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bc = /[\-:]([a-z])/g;
function Wc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bc, Wc);
    se[t] = new ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Bc, Wc);
  se[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Bc, Wc);
  se[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  se[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
se.xlinkHref = new ye("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  se[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Vc(e, t, r, n) {
  var l = se.hasOwnProperty(t) ? se[t] : null;
  (l !== null ? l.type !== 0 : n || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) && (dm(t, r, l, n) && (r = null), n || l === null ? um(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : l.mustUseProperty ? (e[l.propertyName] = r === null ? (l.type === 3 ? !1 : "") : r) : ((t = l.attributeName), (n = l.attributeNamespace), r === null ? e.removeAttribute(t) : ((l = l.type), (r = l === 3 || (l === 4 && r === !0) ? "" : "" + r), n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var dt = Ku.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Xn = Symbol.for("react.element"),
  fr = Symbol.for("react.portal"),
  dr = Symbol.for("react.fragment"),
  Hc = Symbol.for("react.strict_mode"),
  zi = Symbol.for("react.profiler"),
  Yu = Symbol.for("react.provider"),
  Xu = Symbol.for("react.context"),
  Qc = Symbol.for("react.forward_ref"),
  Di = Symbol.for("react.suspense"),
  $i = Symbol.for("react.suspense_list"),
  Kc = Symbol.for("react.memo"),
  mt = Symbol.for("react.lazy"),
  Ju = Symbol.for("react.offscreen"),
  qs = Symbol.iterator;
function Kr(e) {
  return e === null || typeof e != "object" ? null : ((e = (qs && e[qs]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var K = Object.assign,
  Yo;
function rn(e) {
  if (Yo === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Yo = (t && t[1]) || "";
    }
  return (
    `
` +
    Yo +
    e
  );
}
var Xo = !1;
function Jo(e, t) {
  if (!e || Xo) return "";
  Xo = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var l = u.stack.split(`
`),
          i = n.stack.split(`
`),
          c = l.length - 1,
          s = i.length - 1;
        1 <= c && 0 <= s && l[c] !== i[s];

      )
        s--;
      for (; 1 <= c && 0 <= s; c--, s--)
        if (l[c] !== i[s]) {
          if (c !== 1 || s !== 1)
            do
              if ((c--, s--, 0 > s || l[c] !== i[s])) {
                var a =
                  `
` + l[c].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= c && 0 <= s);
          break;
        }
    }
  } finally {
    (Xo = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? rn(e) : "";
}
function pm(e) {
  switch (e.tag) {
    case 5:
      return rn(e.type);
    case 16:
      return rn("Lazy");
    case 13:
      return rn("Suspense");
    case 19:
      return rn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Jo(e.type, !1)), e;
    case 11:
      return (e = Jo(e.type.render, !1)), e;
    case 1:
      return (e = Jo(e.type, !0)), e;
    default:
      return "";
  }
}
function Mi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case dr:
      return "Fragment";
    case fr:
      return "Portal";
    case zi:
      return "Profiler";
    case Hc:
      return "StrictMode";
    case Di:
      return "Suspense";
    case $i:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Xu:
        return (e.displayName || "Context") + ".Consumer";
      case Yu:
        return (e._context.displayName || "Context") + ".Provider";
      case Qc:
        var t = e.render;
        return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
      case Kc:
        return (t = e.displayName || null), t !== null ? t : Mi(e.type) || "Memo";
      case mt:
        (t = e._payload), (e = e._init);
        try {
          return Mi(e(t));
        } catch {}
    }
  return null;
}
function mm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Mi(t);
    case 8:
      return t === Hc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function It(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Zu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function hm(e) {
  var t = Zu(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var l = r.get,
      i = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (c) {
          (n = "" + c), i.call(this, c);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (c) {
          n = "" + c;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Jn(e) {
  e._valueTracker || (e._valueTracker = hm(e));
}
function qu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return e && (n = Zu(e) ? (e.checked ? "true" : "false") : e.value), (e = n), e !== r ? (t.setValue(e), !0) : !1;
}
function El(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fi(e, t) {
  var r = t.checked;
  return K({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function ea(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = It(t.value != null ? t.value : r)), (e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null });
}
function ef(e, t) {
  (t = t.checked), t != null && Vc(e, "checked", t, !1);
}
function Ai(e, t) {
  ef(e, t);
  var r = It(t.value),
    n = t.type;
  if (r != null) n === "number" ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ui(e, t.type, r) : t.hasOwnProperty("defaultValue") && Ui(e, t.type, It(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ta(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!((n !== "submit" && n !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), r || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (r = e.name), r !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), r !== "" && (e.name = r);
}
function Ui(e, t, r) {
  (t !== "number" || El(e.ownerDocument) !== e) && (r == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var nn = Array.isArray;
function kr(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < r.length; l++) t["$" + r[l]] = !0;
    for (r = 0; r < e.length; r++) (l = t.hasOwnProperty("$" + e[r].value)), e[r].selected !== l && (e[r].selected = l), l && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + It(r), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === r) {
        (e[l].selected = !0), n && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return K({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ra(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(E(92));
      if (nn(r)) {
        if (1 < r.length) throw Error(E(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: It(r) };
}
function tf(e, t) {
  var r = It(t.value),
    n = It(t.defaultValue);
  r != null && ((r = "" + r), r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function na(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function rf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Wi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? rf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Zn,
  nf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Zn = Zn || document.createElement("div"), Zn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Zn.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function vn(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var sn = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
  xm = ["Webkit", "ms", "Moz", "O"];
Object.keys(sn).forEach(function (e) {
  xm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (sn[t] = sn[e]);
  });
});
function lf(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || (sn.hasOwnProperty(e) && sn[e]) ? ("" + t).trim() : t + "px";
}
function of(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        l = lf(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, l) : (e[r] = l);
    }
}
var ym = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Vi(e, t) {
  if (t) {
    if (ym[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Hi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Qi = null;
function Gc(e) {
  return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ki = null,
  Er = null,
  Cr = null;
function la(e) {
  if ((e = Bn(e))) {
    if (typeof Ki != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = ao(t)), Ki(e.stateNode, e.type, t));
  }
}
function cf(e) {
  Er ? (Cr ? Cr.push(e) : (Cr = [e])) : (Er = e);
}
function sf() {
  if (Er) {
    var e = Er,
      t = Cr;
    if (((Cr = Er = null), la(e), t)) for (e = 0; e < t.length; e++) la(t[e]);
  }
}
function af(e, t) {
  return e(t);
}
function uf() {}
var Zo = !1;
function ff(e, t, r) {
  if (Zo) return e(t, r);
  Zo = !0;
  try {
    return af(e, t, r);
  } finally {
    (Zo = !1), (Er !== null || Cr !== null) && (uf(), sf());
  }
}
function gn(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = ao(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) || ((e = e.type), (n = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(E(231, t, typeof r));
  return r;
}
var Gi = !1;
if (ct)
  try {
    var Gr = {};
    Object.defineProperty(Gr, "passive", {
      get: function () {
        Gi = !0;
      },
    }),
      window.addEventListener("test", Gr, Gr),
      window.removeEventListener("test", Gr, Gr);
  } catch {
    Gi = !1;
  }
function vm(e, t, r, n, l, i, c, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (f) {
    this.onError(f);
  }
}
var an = !1,
  Cl = null,
  Nl = !1,
  Yi = null,
  gm = {
    onError: function (e) {
      (an = !0), (Cl = e);
    },
  };
function jm(e, t, r, n, l, i, c, s, a) {
  (an = !1), (Cl = null), vm.apply(gm, arguments);
}
function wm(e, t, r, n, l, i, c, s, a) {
  if ((jm.apply(this, arguments), an)) {
    if (an) {
      var u = Cl;
      (an = !1), (Cl = null);
    } else throw Error(E(198));
    Nl || ((Nl = !0), (Yi = u));
  }
}
function cr(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function df(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function oa(e) {
  if (cr(e) !== e) throw Error(E(188));
}
function Sm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = cr(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var l = r.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((n = l.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === r) return oa(l), e;
        if (i === n) return oa(l), t;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (r.return !== n.return) (r = l), (n = i);
    else {
      for (var c = !1, s = l.child; s; ) {
        if (s === r) {
          (c = !0), (r = l), (n = i);
          break;
        }
        if (s === n) {
          (c = !0), (n = l), (r = i);
          break;
        }
        s = s.sibling;
      }
      if (!c) {
        for (s = i.child; s; ) {
          if (s === r) {
            (c = !0), (r = i), (n = l);
            break;
          }
          if (s === n) {
            (c = !0), (n = i), (r = l);
            break;
          }
          s = s.sibling;
        }
        if (!c) throw Error(E(189));
      }
    }
    if (r.alternate !== n) throw Error(E(190));
  }
  if (r.tag !== 3) throw Error(E(188));
  return r.stateNode.current === r ? e : t;
}
function pf(e) {
  return (e = Sm(e)), e !== null ? mf(e) : null;
}
function mf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = mf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var hf = Ne.unstable_scheduleCallback,
  ia = Ne.unstable_cancelCallback,
  km = Ne.unstable_shouldYield,
  Em = Ne.unstable_requestPaint,
  J = Ne.unstable_now,
  Cm = Ne.unstable_getCurrentPriorityLevel,
  Yc = Ne.unstable_ImmediatePriority,
  xf = Ne.unstable_UserBlockingPriority,
  Pl = Ne.unstable_NormalPriority,
  Nm = Ne.unstable_LowPriority,
  yf = Ne.unstable_IdlePriority,
  oo = null,
  Je = null;
function Pm(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function")
    try {
      Je.onCommitFiberRoot(oo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var We = Math.clz32 ? Math.clz32 : Om,
  _m = Math.log,
  bm = Math.LN2;
function Om(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_m(e) / bm) | 0)) | 0;
}
var qn = 64,
  el = 4194304;
function ln(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function _l(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    c = r & 268435455;
  if (c !== 0) {
    var s = c & ~l;
    s !== 0 ? (n = ln(s)) : ((i &= c), i !== 0 && (n = ln(i)));
  } else (c = r & ~l), c !== 0 ? (n = ln(c)) : i !== 0 && (n = ln(i));
  if (n === 0) return 0;
  if (t !== 0 && t !== n && !(t & l) && ((l = n & -n), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))) return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= n; 0 < t; ) (r = 31 - We(t)), (l = 1 << r), (n |= e[r]), (t &= ~l);
  return n;
}
function Tm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Rm(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var c = 31 - We(i),
      s = 1 << c,
      a = l[c];
    a === -1 ? (!(s & r) || s & n) && (l[c] = Tm(s, t)) : a <= t && (e.expiredLanes |= s), (i &= ~s);
  }
}
function Xi(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function vf() {
  var e = qn;
  return (qn <<= 1), !(qn & 4194240) && (qn = 64), e;
}
function qo(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function An(e, t, r) {
  (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - We(t)), (e[t] = r);
}
function Lm(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var l = 31 - We(r),
      i = 1 << l;
    (t[l] = 0), (n[l] = -1), (e[l] = -1), (r &= ~i);
  }
}
function Xc(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - We(r),
      l = 1 << n;
    (l & t) | (e[n] & t) && (e[n] |= t), (r &= ~l);
  }
}
var $ = 0;
function gf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var jf,
  Jc,
  wf,
  Sf,
  kf,
  Ji = !1,
  tl = [],
  kt = null,
  Et = null,
  Ct = null,
  jn = new Map(),
  wn = new Map(),
  xt = [],
  Im = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ca(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      kt = null;
      break;
    case "dragenter":
    case "dragleave":
      Et = null;
      break;
    case "mouseover":
    case "mouseout":
      Ct = null;
      break;
    case "pointerover":
    case "pointerout":
      jn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      wn.delete(t.pointerId);
  }
}
function Yr(e, t, r, n, l, i) {
  return e === null || e.nativeEvent !== i ? ((e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: i, targetContainers: [l] }), t !== null && ((t = Bn(t)), t !== null && Jc(t)), e) : ((e.eventSystemFlags |= n), (t = e.targetContainers), l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function zm(e, t, r, n, l) {
  switch (t) {
    case "focusin":
      return (kt = Yr(kt, e, t, r, n, l)), !0;
    case "dragenter":
      return (Et = Yr(Et, e, t, r, n, l)), !0;
    case "mouseover":
      return (Ct = Yr(Ct, e, t, r, n, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return jn.set(i, Yr(jn.get(i) || null, e, t, r, n, l)), !0;
    case "gotpointercapture":
      return (i = l.pointerId), wn.set(i, Yr(wn.get(i) || null, e, t, r, n, l)), !0;
  }
  return !1;
}
function Ef(e) {
  var t = Yt(e.target);
  if (t !== null) {
    var r = cr(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = df(r)), t !== null)) {
          (e.blockedOn = t),
            kf(e.priority, function () {
              wf(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ml(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Zi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (Qi = n), r.target.dispatchEvent(n), (Qi = null);
    } else return (t = Bn(r)), t !== null && Jc(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function sa(e, t, r) {
  ml(e) && r.delete(t);
}
function Dm() {
  (Ji = !1), kt !== null && ml(kt) && (kt = null), Et !== null && ml(Et) && (Et = null), Ct !== null && ml(Ct) && (Ct = null), jn.forEach(sa), wn.forEach(sa);
}
function Xr(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), Ji || ((Ji = !0), Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, Dm)));
}
function Sn(e) {
  function t(l) {
    return Xr(l, e);
  }
  if (0 < tl.length) {
    Xr(tl[0], e);
    for (var r = 1; r < tl.length; r++) {
      var n = tl[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (kt !== null && Xr(kt, e), Et !== null && Xr(Et, e), Ct !== null && Xr(Ct, e), jn.forEach(t), wn.forEach(t), r = 0; r < xt.length; r++) (n = xt[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < xt.length && ((r = xt[0]), r.blockedOn === null); ) Ef(r), r.blockedOn === null && xt.shift();
}
var Nr = dt.ReactCurrentBatchConfig,
  bl = !0;
function $m(e, t, r, n) {
  var l = $,
    i = Nr.transition;
  Nr.transition = null;
  try {
    ($ = 1), Zc(e, t, r, n);
  } finally {
    ($ = l), (Nr.transition = i);
  }
}
function Mm(e, t, r, n) {
  var l = $,
    i = Nr.transition;
  Nr.transition = null;
  try {
    ($ = 4), Zc(e, t, r, n);
  } finally {
    ($ = l), (Nr.transition = i);
  }
}
function Zc(e, t, r, n) {
  if (bl) {
    var l = Zi(e, t, r, n);
    if (l === null) ai(e, t, n, Ol, r), ca(e, n);
    else if (zm(l, e, t, r, n)) n.stopPropagation();
    else if ((ca(e, n), t & 4 && -1 < Im.indexOf(e))) {
      for (; l !== null; ) {
        var i = Bn(l);
        if ((i !== null && jf(i), (i = Zi(e, t, r, n)), i === null && ai(e, t, n, Ol, r), i === l)) break;
        l = i;
      }
      l !== null && n.stopPropagation();
    } else ai(e, t, n, null, r);
  }
}
var Ol = null;
function Zi(e, t, r, n) {
  if (((Ol = null), (e = Gc(n)), (e = Yt(e)), e !== null))
    if (((t = cr(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = df(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ol = e), null;
}
function Cf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Cm()) {
        case Yc:
          return 1;
        case xf:
          return 4;
        case Pl:
        case Nm:
          return 16;
        case yf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gt = null,
  qc = null,
  hl = null;
function Nf() {
  if (hl) return hl;
  var e,
    t = qc,
    r = t.length,
    n,
    l = "value" in gt ? gt.value : gt.textContent,
    i = l.length;
  for (e = 0; e < r && t[e] === l[e]; e++);
  var c = r - e;
  for (n = 1; n <= c && t[r - n] === l[i - n]; n++);
  return (hl = l.slice(e, 1 < n ? 1 - n : void 0));
}
function xl(e) {
  var t = e.keyCode;
  return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function rl() {
  return !0;
}
function aa() {
  return !1;
}
function be(e) {
  function t(r, n, l, i, c) {
    (this._reactName = r), (this._targetInst = l), (this.type = n), (this.nativeEvent = i), (this.target = c), (this.currentTarget = null);
    for (var s in e) e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(i) : i[s]));
    return (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? rl : aa), (this.isPropagationStopped = aa), this;
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), (this.isDefaultPrevented = rl));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), (this.isPropagationStopped = rl));
      },
      persist: function () {},
      isPersistent: rl,
    }),
    t
  );
}
var Ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  es = be(Ur),
  Un = K({}, Ur, { view: 0, detail: 0 }),
  Fm = be(Un),
  ei,
  ti,
  Jr,
  io = K({}, Un, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ts,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e ? e.movementX : (e !== Jr && (Jr && e.type === "mousemove" ? ((ei = e.screenX - Jr.screenX), (ti = e.screenY - Jr.screenY)) : (ti = ei = 0), (Jr = e)), ei);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ti;
    },
  }),
  ua = be(io),
  Am = K({}, io, { dataTransfer: 0 }),
  Um = be(Am),
  Bm = K({}, Un, { relatedTarget: 0 }),
  ri = be(Bm),
  Wm = K({}, Ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vm = be(Wm),
  Hm = K({}, Ur, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Qm = be(Hm),
  Km = K({}, Ur, { data: 0 }),
  fa = be(Km),
  Gm = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
  Ym = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
  Xm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Jm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Xm[e]) ? !!t[e] : !1;
}
function ts() {
  return Jm;
}
var Zm = K({}, Un, {
    key: function (e) {
      if (e.key) {
        var t = Gm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? ((e = xl(e)), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ym[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ts,
    charCode: function (e) {
      return e.type === "keypress" ? xl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? xl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  qm = be(Zm),
  eh = K({}, io, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
  da = be(eh),
  th = K({}, Un, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ts }),
  rh = be(th),
  nh = K({}, Ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lh = be(nh),
  oh = K({}, io, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ih = be(oh),
  ch = [9, 13, 27, 32],
  rs = ct && "CompositionEvent" in window,
  un = null;
ct && "documentMode" in document && (un = document.documentMode);
var sh = ct && "TextEvent" in window && !un,
  Pf = ct && (!rs || (un && 8 < un && 11 >= un)),
  pa = " ",
  ma = !1;
function _f(e, t) {
  switch (e) {
    case "keyup":
      return ch.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function bf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var pr = !1;
function ah(e, t) {
  switch (e) {
    case "compositionend":
      return bf(t);
    case "keypress":
      return t.which !== 32 ? null : ((ma = !0), pa);
    case "textInput":
      return (e = t.data), e === pa && ma ? null : e;
    default:
      return null;
  }
}
function uh(e, t) {
  if (pr) return e === "compositionend" || (!rs && _f(e, t)) ? ((e = Nf()), (hl = qc = gt = null), (pr = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Pf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var fh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ha(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!fh[e.type] : t === "textarea";
}
function Of(e, t, r, n) {
  cf(n), (t = Tl(t, "onChange")), 0 < t.length && ((r = new es("onChange", "change", null, r, n)), e.push({ event: r, listeners: t }));
}
var fn = null,
  kn = null;
function dh(e) {
  Uf(e, 0);
}
function co(e) {
  var t = xr(e);
  if (qu(t)) return e;
}
function ph(e, t) {
  if (e === "change") return t;
}
var Tf = !1;
if (ct) {
  var ni;
  if (ct) {
    var li = "oninput" in document;
    if (!li) {
      var xa = document.createElement("div");
      xa.setAttribute("oninput", "return;"), (li = typeof xa.oninput == "function");
    }
    ni = li;
  } else ni = !1;
  Tf = ni && (!document.documentMode || 9 < document.documentMode);
}
function ya() {
  fn && (fn.detachEvent("onpropertychange", Rf), (kn = fn = null));
}
function Rf(e) {
  if (e.propertyName === "value" && co(kn)) {
    var t = [];
    Of(t, kn, e, Gc(e)), ff(dh, t);
  }
}
function mh(e, t, r) {
  e === "focusin" ? (ya(), (fn = t), (kn = r), fn.attachEvent("onpropertychange", Rf)) : e === "focusout" && ya();
}
function hh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return co(kn);
}
function xh(e, t) {
  if (e === "click") return co(t);
}
function yh(e, t) {
  if (e === "input" || e === "change") return co(t);
}
function vh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == "function" ? Object.is : vh;
function En(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var l = r[n];
    if (!Ii.call(t, l) || !He(e[l], t[l])) return !1;
  }
  return !0;
}
function va(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ga(e, t) {
  var r = va(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = va(r);
  }
}
function Lf(e, t) {
  return e && t ? (e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Lf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1) : !1;
}
function If() {
  for (var e = window, t = El(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = El(e.document);
  }
  return t;
}
function ns(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) || t === "textarea" || e.contentEditable === "true");
}
function gh(e) {
  var t = If(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && Lf(r.ownerDocument.documentElement, r)) {
    if (n !== null && ns(r)) {
      if (((t = n.start), (e = n.end), e === void 0 && (e = t), "selectionStart" in r)) (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (((e = ((t = r.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var l = r.textContent.length,
          i = Math.min(n.start, l);
        (n = n.end === void 0 ? i : Math.min(n.end, l)), !e.extend && i > n && ((l = n), (n = i), (i = l)), (l = ga(r, i));
        var c = ga(r, n);
        l && c && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== c.node || e.focusOffset !== c.offset) && ((t = t.createRange()), t.setStart(l.node, l.offset), e.removeAllRanges(), i > n ? (e.addRange(t), e.extend(c.node, c.offset)) : (t.setEnd(c.node, c.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) (e = t[r]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var jh = ct && "documentMode" in document && 11 >= document.documentMode,
  mr = null,
  qi = null,
  dn = null,
  ec = !1;
function ja(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  ec || mr == null || mr !== El(n) || ((n = mr), "selectionStart" in n && ns(n) ? (n = { start: n.selectionStart, end: n.selectionEnd }) : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()), (n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset })), (dn && En(dn, n)) || ((dn = n), (n = Tl(qi, "onSelect")), 0 < n.length && ((t = new es("onSelect", "select", null, t, r)), e.push({ event: t, listeners: n }), (t.target = mr))));
}
function nl(e, t) {
  var r = {};
  return (r[e.toLowerCase()] = t.toLowerCase()), (r["Webkit" + e] = "webkit" + t), (r["Moz" + e] = "moz" + t), r;
}
var hr = { animationend: nl("Animation", "AnimationEnd"), animationiteration: nl("Animation", "AnimationIteration"), animationstart: nl("Animation", "AnimationStart"), transitionend: nl("Transition", "TransitionEnd") },
  oi = {},
  zf = {};
ct && ((zf = document.createElement("div").style), "AnimationEvent" in window || (delete hr.animationend.animation, delete hr.animationiteration.animation, delete hr.animationstart.animation), "TransitionEvent" in window || delete hr.transitionend.transition);
function so(e) {
  if (oi[e]) return oi[e];
  if (!hr[e]) return e;
  var t = hr[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in zf) return (oi[e] = t[r]);
  return e;
}
var Df = so("animationend"),
  $f = so("animationiteration"),
  Mf = so("animationstart"),
  Ff = so("transitionend"),
  Af = new Map(),
  wa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Mt(e, t) {
  Af.set(e, t), ir(t, [e]);
}
for (var ii = 0; ii < wa.length; ii++) {
  var ci = wa[ii],
    wh = ci.toLowerCase(),
    Sh = ci[0].toUpperCase() + ci.slice(1);
  Mt(wh, "on" + Sh);
}
Mt(Df, "onAnimationEnd");
Mt($f, "onAnimationIteration");
Mt(Mf, "onAnimationStart");
Mt("dblclick", "onDoubleClick");
Mt("focusin", "onFocus");
Mt("focusout", "onBlur");
Mt(Ff, "onTransitionEnd");
Tr("onMouseEnter", ["mouseout", "mouseover"]);
Tr("onMouseLeave", ["mouseout", "mouseover"]);
Tr("onPointerEnter", ["pointerout", "pointerover"]);
Tr("onPointerLeave", ["pointerout", "pointerover"]);
ir("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
ir("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
ir("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
ir("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
ir("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var on = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  kh = new Set("cancel close invalid load scroll toggle".split(" ").concat(on));
function Sa(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), wm(n, t, void 0, e), (e.currentTarget = null);
}
function Uf(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      l = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var c = n.length - 1; 0 <= c; c--) {
          var s = n[c],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== i && l.isPropagationStopped())) break e;
          Sa(l, s, u), (i = a);
        }
      else
        for (c = 0; c < n.length; c++) {
          if (((s = n[c]), (a = s.instance), (u = s.currentTarget), (s = s.listener), a !== i && l.isPropagationStopped())) break e;
          Sa(l, s, u), (i = a);
        }
    }
  }
  if (Nl) throw ((e = Yi), (Nl = !1), (Yi = null), e);
}
function U(e, t) {
  var r = t[oc];
  r === void 0 && (r = t[oc] = new Set());
  var n = e + "__bubble";
  r.has(n) || (Bf(t, e, 2, !1), r.add(n));
}
function si(e, t, r) {
  var n = 0;
  t && (n |= 4), Bf(r, e, n, t);
}
var ll = "_reactListening" + Math.random().toString(36).slice(2);
function Cn(e) {
  if (!e[ll]) {
    (e[ll] = !0),
      Gu.forEach(function (r) {
        r !== "selectionchange" && (kh.has(r) || si(r, !1, e), si(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ll] || ((t[ll] = !0), si("selectionchange", !1, t));
  }
}
function Bf(e, t, r, n) {
  switch (Cf(t)) {
    case 1:
      var l = $m;
      break;
    case 4:
      l = Mm;
      break;
    default:
      l = Zc;
  }
  (r = l.bind(null, t, r, e)), (l = void 0), !Gi || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0), n ? (l !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: l }) : e.addEventListener(t, r, !0)) : l !== void 0 ? e.addEventListener(t, r, { passive: l }) : e.addEventListener(t, r, !1);
}
function ai(e, t, r, n, l) {
  var i = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var c = n.tag;
      if (c === 3 || c === 4) {
        var s = n.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (c === 4)
          for (c = n.return; c !== null; ) {
            var a = c.tag;
            if ((a === 3 || a === 4) && ((a = c.stateNode.containerInfo), a === l || (a.nodeType === 8 && a.parentNode === l))) return;
            c = c.return;
          }
        for (; s !== null; ) {
          if (((c = Yt(s)), c === null)) return;
          if (((a = c.tag), a === 5 || a === 6)) {
            n = i = c;
            continue e;
          }
          s = s.parentNode;
        }
      }
      n = n.return;
    }
  ff(function () {
    var u = i,
      f = Gc(r),
      d = [];
    e: {
      var p = Af.get(e);
      if (p !== void 0) {
        var v = es,
          x = e;
        switch (e) {
          case "keypress":
            if (xl(r) === 0) break e;
          case "keydown":
          case "keyup":
            v = qm;
            break;
          case "focusin":
            (x = "focus"), (v = ri);
            break;
          case "focusout":
            (x = "blur"), (v = ri);
            break;
          case "beforeblur":
          case "afterblur":
            v = ri;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = ua;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Um;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = rh;
            break;
          case Df:
          case $f:
          case Mf:
            v = Vm;
            break;
          case Ff:
            v = lh;
            break;
          case "scroll":
            v = Fm;
            break;
          case "wheel":
            v = ih;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Qm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = da;
        }
        var g = (t & 4) !== 0,
          j = !g && e === "scroll",
          m = g ? (p !== null ? p + "Capture" : null) : p;
        g = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var S = y.stateNode;
          if ((y.tag === 5 && S !== null && ((y = S), m !== null && ((S = gn(h, m)), S != null && g.push(Nn(h, S, y)))), j)) break;
          h = h.return;
        }
        0 < g.length && ((p = new v(p, x, null, r, f)), d.push({ event: p, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (((p = e === "mouseover" || e === "pointerover"), (v = e === "mouseout" || e === "pointerout"), p && r !== Qi && (x = r.relatedTarget || r.fromElement) && (Yt(x) || x[st]))) break e;
        if ((v || p) && ((p = f.window === f ? f : (p = f.ownerDocument) ? p.defaultView || p.parentWindow : window), v ? ((x = r.relatedTarget || r.toElement), (v = u), (x = x ? Yt(x) : null), x !== null && ((j = cr(x)), x !== j || (x.tag !== 5 && x.tag !== 6)) && (x = null)) : ((v = null), (x = u)), v !== x)) {
          if (((g = ua), (S = "onMouseLeave"), (m = "onMouseEnter"), (h = "mouse"), (e === "pointerout" || e === "pointerover") && ((g = da), (S = "onPointerLeave"), (m = "onPointerEnter"), (h = "pointer")), (j = v == null ? p : xr(v)), (y = x == null ? p : xr(x)), (p = new g(S, h + "leave", v, r, f)), (p.target = j), (p.relatedTarget = y), (S = null), Yt(f) === u && ((g = new g(m, h + "enter", x, r, f)), (g.target = y), (g.relatedTarget = j), (S = g)), (j = S), v && x))
            t: {
              for (g = v, m = x, h = 0, y = g; y; y = ar(y)) h++;
              for (y = 0, S = m; S; S = ar(S)) y++;
              for (; 0 < h - y; ) (g = ar(g)), h--;
              for (; 0 < y - h; ) (m = ar(m)), y--;
              for (; h--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t;
                (g = ar(g)), (m = ar(m));
              }
              g = null;
            }
          else g = null;
          v !== null && ka(d, p, v, g, !1), x !== null && j !== null && ka(d, j, x, g, !0);
        }
      }
      e: {
        if (((p = u ? xr(u) : window), (v = p.nodeName && p.nodeName.toLowerCase()), v === "select" || (v === "input" && p.type === "file"))) var C = ph;
        else if (ha(p))
          if (Tf) C = yh;
          else {
            C = hh;
            var P = mh;
          }
        else (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = xh);
        if (C && (C = C(e, u))) {
          Of(d, C, r, f);
          break e;
        }
        P && P(e, p, u), e === "focusout" && (P = p._wrapperState) && P.controlled && p.type === "number" && Ui(p, "number", p.value);
      }
      switch (((P = u ? xr(u) : window), e)) {
        case "focusin":
          (ha(P) || P.contentEditable === "true") && ((mr = P), (qi = u), (dn = null));
          break;
        case "focusout":
          dn = qi = mr = null;
          break;
        case "mousedown":
          ec = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ec = !1), ja(d, r, f);
          break;
        case "selectionchange":
          if (jh) break;
        case "keydown":
        case "keyup":
          ja(d, r, f);
      }
      var N;
      if (rs)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else pr ? _f(e, r) && (O = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (O = "onCompositionStart");
      O && (Pf && r.locale !== "ko" && (pr || O !== "onCompositionStart" ? O === "onCompositionEnd" && pr && (N = Nf()) : ((gt = f), (qc = "value" in gt ? gt.value : gt.textContent), (pr = !0))), (P = Tl(u, O)), 0 < P.length && ((O = new fa(O, e, null, r, f)), d.push({ event: O, listeners: P }), N ? (O.data = N) : ((N = bf(r)), N !== null && (O.data = N)))), (N = sh ? ah(e, r) : uh(e, r)) && ((u = Tl(u, "onBeforeInput")), 0 < u.length && ((f = new fa("onBeforeInput", "beforeinput", null, r, f)), d.push({ event: f, listeners: u }), (f.data = N)));
    }
    Uf(d, t);
  });
}
function Nn(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Tl(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 && i !== null && ((l = i), (i = gn(e, r)), i != null && n.unshift(Nn(e, i, l)), (i = gn(e, t)), i != null && n.push(Nn(e, i, l))), (e = e.return);
  }
  return n;
}
function ar(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ka(e, t, r, n, l) {
  for (var i = t._reactName, c = []; r !== null && r !== n; ) {
    var s = r,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === n) break;
    s.tag === 5 && u !== null && ((s = u), l ? ((a = gn(r, i)), a != null && c.unshift(Nn(r, a, s))) : l || ((a = gn(r, i)), a != null && c.push(Nn(r, a, s)))), (r = r.return);
  }
  c.length !== 0 && e.push({ event: t, listeners: c });
}
var Eh = /\r\n?/g,
  Ch = /\u0000|\uFFFD/g;
function Ea(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Eh,
      `
`
    )
    .replace(Ch, "");
}
function ol(e, t, r) {
  if (((t = Ea(t)), Ea(e) !== t && r)) throw Error(E(425));
}
function Rl() {}
var tc = null,
  rc = null;
function nc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null);
}
var lc = typeof setTimeout == "function" ? setTimeout : void 0,
  Nh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ca = typeof Promise == "function" ? Promise : void 0,
  Ph =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ca < "u"
      ? function (e) {
          return Ca.resolve(null).then(e).catch(_h);
        }
      : lc;
function _h(e) {
  setTimeout(function () {
    throw e;
  });
}
function ui(e, t) {
  var r = t,
    n = 0;
  do {
    var l = r.nextSibling;
    if ((e.removeChild(r), l && l.nodeType === 8))
      if (((r = l.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(l), Sn(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = l;
  } while (r);
  Sn(t);
}
function Nt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Na(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Br = Math.random().toString(36).slice(2),
  Xe = "__reactFiber$" + Br,
  Pn = "__reactProps$" + Br,
  st = "__reactContainer$" + Br,
  oc = "__reactEvents$" + Br,
  bh = "__reactListeners$" + Br,
  Oh = "__reactHandles$" + Br;
function Yt(e) {
  var t = e[Xe];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[st] || r[Xe])) {
      if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
        for (e = Na(e); e !== null; ) {
          if ((r = e[Xe])) return r;
          e = Na(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Bn(e) {
  return (e = e[Xe] || e[st]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function xr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function ao(e) {
  return e[Pn] || null;
}
var ic = [],
  yr = -1;
function Ft(e) {
  return { current: e };
}
function B(e) {
  0 > yr || ((e.current = ic[yr]), (ic[yr] = null), yr--);
}
function A(e, t) {
  yr++, (ic[yr] = e.current), (e.current = t);
}
var zt = {},
  pe = Ft(zt),
  je = Ft(!1),
  er = zt;
function Rr(e, t) {
  var r = e.type.contextTypes;
  if (!r) return zt;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in r) l[i] = t[i];
  return n && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = l)), l;
}
function we(e) {
  return (e = e.childContextTypes), e != null;
}
function Ll() {
  B(je), B(pe);
}
function Pa(e, t, r) {
  if (pe.current !== zt) throw Error(E(168));
  A(pe, t), A(je, r);
}
function Wf(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function")) return r;
  n = n.getChildContext();
  for (var l in n) if (!(l in t)) throw Error(E(108, mm(e) || "Unknown", l));
  return K({}, r, n);
}
function Il(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || zt), (er = pe.current), A(pe, e), A(je, je.current), !0;
}
function _a(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(E(169));
  r ? ((e = Wf(e, t, er)), (n.__reactInternalMemoizedMergedChildContext = e), B(je), B(pe), A(pe, e)) : B(je), A(je, r);
}
var nt = null,
  uo = !1,
  fi = !1;
function Vf(e) {
  nt === null ? (nt = [e]) : nt.push(e);
}
function Th(e) {
  (uo = !0), Vf(e);
}
function At() {
  if (!fi && nt !== null) {
    fi = !0;
    var e = 0,
      t = $;
    try {
      var r = nt;
      for ($ = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (nt = null), (uo = !1);
    } catch (l) {
      throw (nt !== null && (nt = nt.slice(e + 1)), hf(Yc, At), l);
    } finally {
      ($ = t), (fi = !1);
    }
  }
  return null;
}
var vr = [],
  gr = 0,
  zl = null,
  Dl = 0,
  Te = [],
  Re = 0,
  tr = null,
  lt = 1,
  ot = "";
function Qt(e, t) {
  (vr[gr++] = Dl), (vr[gr++] = zl), (zl = e), (Dl = t);
}
function Hf(e, t, r) {
  (Te[Re++] = lt), (Te[Re++] = ot), (Te[Re++] = tr), (tr = e);
  var n = lt;
  e = ot;
  var l = 32 - We(n) - 1;
  (n &= ~(1 << l)), (r += 1);
  var i = 32 - We(t) + l;
  if (30 < i) {
    var c = l - (l % 5);
    (i = (n & ((1 << c) - 1)).toString(32)), (n >>= c), (l -= c), (lt = (1 << (32 - We(t) + l)) | (r << l) | n), (ot = i + e);
  } else (lt = (1 << i) | (r << l) | n), (ot = e);
}
function ls(e) {
  e.return !== null && (Qt(e, 1), Hf(e, 1, 0));
}
function os(e) {
  for (; e === zl; ) (zl = vr[--gr]), (vr[gr] = null), (Dl = vr[--gr]), (vr[gr] = null);
  for (; e === tr; ) (tr = Te[--Re]), (Te[Re] = null), (ot = Te[--Re]), (Te[Re] = null), (lt = Te[--Re]), (Te[Re] = null);
}
var Ce = null,
  Ee = null,
  V = !1,
  Ue = null;
function Qf(e, t) {
  var r = Le(5, null, null, 0);
  (r.elementType = "DELETED"), (r.stateNode = t), (r.return = e), (t = e.deletions), t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function ba(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (Ce = e), (Ee = Nt(t.firstChild)), !0) : !1;
    case 6:
      return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (Ce = e), (Ee = null), !0) : !1;
    case 13:
      return (t = t.nodeType !== 8 ? null : t), t !== null ? ((r = tr !== null ? { id: lt, overflow: ot } : null), (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }), (r = Le(18, null, null, 0)), (r.stateNode = t), (r.return = e), (e.child = r), (Ce = e), (Ee = null), !0) : !1;
    default:
      return !1;
  }
}
function cc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function sc(e) {
  if (V) {
    var t = Ee;
    if (t) {
      var r = t;
      if (!ba(e, t)) {
        if (cc(e)) throw Error(E(418));
        t = Nt(r.nextSibling);
        var n = Ce;
        t && ba(e, t) ? Qf(n, r) : ((e.flags = (e.flags & -4097) | 2), (V = !1), (Ce = e));
      }
    } else {
      if (cc(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (Ce = e);
    }
  }
}
function Oa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ce = e;
}
function il(e) {
  if (e !== Ce) return !1;
  if (!V) return Oa(e), (V = !0), !1;
  var t;
  if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !nc(e.type, e.memoizedProps))), t && (t = Ee))) {
    if (cc(e)) throw (Kf(), Error(E(418)));
    for (; t; ) Qf(e, t), (t = Nt(t.nextSibling));
  }
  if ((Oa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Ee = Nt(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = Ce ? Nt(e.stateNode.nextSibling) : null;
  return !0;
}
function Kf() {
  for (var e = Ee; e; ) e = Nt(e.nextSibling);
}
function Lr() {
  (Ee = Ce = null), (V = !1);
}
function is(e) {
  Ue === null ? (Ue = [e]) : Ue.push(e);
}
var Rh = dt.ReactCurrentBatchConfig;
function Fe(e, t) {
  if (e && e.defaultProps) {
    (t = K({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var $l = Ft(null),
  Ml = null,
  jr = null,
  cs = null;
function ss() {
  cs = jr = Ml = null;
}
function as(e) {
  var t = $l.current;
  B($l), (e._currentValue = t);
}
function ac(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (((e.childLanes & t) !== t ? ((e.childLanes |= t), n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r)) break;
    e = e.return;
  }
}
function Pr(e, t) {
  (Ml = e), (cs = jr = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (ge = !0), (e.firstContext = null));
}
function ze(e) {
  var t = e._currentValue;
  if (cs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), jr === null)) {
      if (Ml === null) throw Error(E(308));
      (jr = e), (Ml.dependencies = { lanes: 0, firstContext: e });
    } else jr = jr.next = e;
  return t;
}
var Xt = null;
function us(e) {
  Xt === null ? (Xt = [e]) : Xt.push(e);
}
function Gf(e, t, r, n) {
  var l = t.interleaved;
  return l === null ? ((r.next = r), us(t)) : ((r.next = l.next), (l.next = r)), (t.interleaved = r), at(e, n);
}
function at(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) (e.childLanes |= t), (r = e.alternate), r !== null && (r.childLanes |= t), (r = e), (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var ht = !1;
function fs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Yf(e, t) {
  (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function it(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Pt(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), z & 2)) {
    var l = n.pending;
    return l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (n.pending = t), at(e, r);
  }
  return (l = n.interleaved), l === null ? ((t.next = t), us(n)) : ((t.next = l.next), (l.next = t)), (n.interleaved = t), at(e, r);
}
function yl(e, t, r) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Xc(e, r);
  }
}
function Ta(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var l = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var c = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
        i === null ? (l = i = c) : (i = i.next = c), (r = r.next);
      } while (r !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (r = { baseState: n.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: n.shared, effects: n.effects }), (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate), e === null ? (r.firstBaseUpdate = t) : (e.next = t), (r.lastBaseUpdate = t);
}
function Fl(e, t, r, n) {
  var l = e.updateQueue;
  ht = !1;
  var i = l.firstBaseUpdate,
    c = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), c === null ? (i = u) : (c.next = u), (c = a);
    var f = e.alternate;
    f !== null && ((f = f.updateQueue), (s = f.lastBaseUpdate), s !== c && (s === null ? (f.firstBaseUpdate = u) : (s.next = u), (f.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var d = l.baseState;
    (c = 0), (f = u = a = null), (s = i);
    do {
      var p = s.lane,
        v = s.eventTime;
      if ((n & p) === p) {
        f !== null && (f = f.next = { eventTime: v, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
        e: {
          var x = e,
            g = s;
          switch (((p = t), (v = r), g.tag)) {
            case 1:
              if (((x = g.payload), typeof x == "function")) {
                d = x.call(v, d, p);
                break e;
              }
              d = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (((x = g.payload), (p = typeof x == "function" ? x.call(v, d, p) : x), p == null)) break e;
              d = K({}, d, p);
              break e;
            case 2:
              ht = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && ((e.flags |= 64), (p = l.effects), p === null ? (l.effects = [s]) : p.push(s));
      } else (v = { eventTime: v, lane: p, tag: s.tag, payload: s.payload, callback: s.callback, next: null }), f === null ? ((u = f = v), (a = d)) : (f = f.next = v), (c |= p);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (p = s), (s = p.next), (p.next = null), (l.lastBaseUpdate = p), (l.shared.pending = null);
      }
    } while (!0);
    if ((f === null && (a = d), (l.baseState = a), (l.firstBaseUpdate = u), (l.lastBaseUpdate = f), (t = l.shared.interleaved), t !== null)) {
      l = t;
      do (c |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (nr |= c), (e.lanes = c), (e.memoizedState = d);
  }
}
function Ra(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        l = n.callback;
      if (l !== null) {
        if (((n.callback = null), (n = r), typeof l != "function")) throw Error(E(191, l));
        l.call(n);
      }
    }
}
var Xf = new Ku.Component().refs;
function uc(e, t, r, n) {
  (t = e.memoizedState), (r = r(n, t)), (r = r == null ? t : K({}, t, r)), (e.memoizedState = r), e.lanes === 0 && (e.updateQueue.baseState = r);
}
var fo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? cr(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = he(),
      l = bt(e),
      i = it(n, l);
    (i.payload = t), r != null && (i.callback = r), (t = Pt(e, i, l)), t !== null && (Ve(t, e, l, n), yl(t, e, l));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = he(),
      l = bt(e),
      i = it(n, l);
    (i.tag = 1), (i.payload = t), r != null && (i.callback = r), (t = Pt(e, i, l)), t !== null && (Ve(t, e, l, n), yl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = he(),
      n = bt(e),
      l = it(r, n);
    (l.tag = 2), t != null && (l.callback = t), (t = Pt(e, l, n)), t !== null && (Ve(t, e, n, r), yl(t, e, n));
  },
};
function La(e, t, r, n, l, i, c) {
  return (e = e.stateNode), typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, c) : t.prototype && t.prototype.isPureReactComponent ? !En(r, n) || !En(l, i) : !0;
}
function Jf(e, t, r) {
  var n = !1,
    l = zt,
    i = t.contextType;
  return typeof i == "object" && i !== null ? (i = ze(i)) : ((l = we(t) ? er : pe.current), (n = t.contextTypes), (i = (n = n != null) ? Rr(e, l) : zt)), (t = new t(r, i)), (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null), (t.updater = fo), (e.stateNode = t), (t._reactInternals = e), n && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = l), (e.__reactInternalMemoizedMaskedChildContext = i)), t;
}
function Ia(e, t, r, n) {
  (e = t.state), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && fo.enqueueReplaceState(t, t.state, null);
}
function fc(e, t, r, n) {
  var l = e.stateNode;
  (l.props = r), (l.state = e.memoizedState), (l.refs = Xf), fs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? (l.context = ze(i)) : ((i = we(t) ? er : pe.current), (l.context = Rr(e, i))), (l.state = e.memoizedState), (i = t.getDerivedStateFromProps), typeof i == "function" && (uc(e, t, i, r), (l.state = e.memoizedState)), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || (typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function") || ((t = l.state), typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && fo.enqueueReplaceState(l, l.state, null), Fl(e, r, l, n), (l.state = e.memoizedState)), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Zr(e, t, r) {
  if (((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(E(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(E(147, e));
      var l = n,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
        ? t.ref
        : ((t = function (c) {
            var s = l.refs;
            s === Xf && (s = l.refs = {}), c === null ? delete s[i] : (s[i] = c);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!r._owner) throw Error(E(290, e));
  }
  return e;
}
function cl(e, t) {
  throw ((e = Object.prototype.toString.call(t)), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
}
function za(e) {
  var t = e._init;
  return t(e._payload);
}
function Zf(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [h]), (m.flags |= 16)) : y.push(h);
    }
  }
  function r(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function n(m, h) {
    for (m = new Map(); h !== null; ) h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function l(m, h) {
    return (m = Ot(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, h, y) {
    return (m.index = y), e ? ((y = m.alternate), y !== null ? ((y = y.index), y < h ? ((m.flags |= 2), h) : y) : ((m.flags |= 2), h)) : ((m.flags |= 1048576), h);
  }
  function c(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, h, y, S) {
    return h === null || h.tag !== 6 ? ((h = vi(y, m.mode, S)), (h.return = m), h) : ((h = l(h, y)), (h.return = m), h);
  }
  function a(m, h, y, S) {
    var C = y.type;
    return C === dr ? f(m, h, y.props.children, S, y.key) : h !== null && (h.elementType === C || (typeof C == "object" && C !== null && C.$$typeof === mt && za(C) === h.type)) ? ((S = l(h, y.props)), (S.ref = Zr(m, h, y)), (S.return = m), S) : ((S = kl(y.type, y.key, y.props, null, m.mode, S)), (S.ref = Zr(m, h, y)), (S.return = m), S);
  }
  function u(m, h, y, S) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? ((h = gi(y, m.mode, S)), (h.return = m), h) : ((h = l(h, y.children || [])), (h.return = m), h);
  }
  function f(m, h, y, S, C) {
    return h === null || h.tag !== 7 ? ((h = qt(y, m.mode, S, C)), (h.return = m), h) : ((h = l(h, y)), (h.return = m), h);
  }
  function d(m, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number") return (h = vi("" + h, m.mode, y)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Xn:
          return (y = kl(h.type, h.key, h.props, null, m.mode, y)), (y.ref = Zr(m, null, h)), (y.return = m), y;
        case fr:
          return (h = gi(h, m.mode, y)), (h.return = m), h;
        case mt:
          var S = h._init;
          return d(m, S(h._payload), y);
      }
      if (nn(h) || Kr(h)) return (h = qt(h, m.mode, y, null)), (h.return = m), h;
      cl(m, h);
    }
    return null;
  }
  function p(m, h, y, S) {
    var C = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number") return C !== null ? null : s(m, h, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Xn:
          return y.key === C ? a(m, h, y, S) : null;
        case fr:
          return y.key === C ? u(m, h, y, S) : null;
        case mt:
          return (C = y._init), p(m, h, C(y._payload), S);
      }
      if (nn(y) || Kr(y)) return C !== null ? null : f(m, h, y, S, null);
      cl(m, y);
    }
    return null;
  }
  function v(m, h, y, S, C) {
    if ((typeof S == "string" && S !== "") || typeof S == "number") return (m = m.get(y) || null), s(h, m, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Xn:
          return (m = m.get(S.key === null ? y : S.key) || null), a(h, m, S, C);
        case fr:
          return (m = m.get(S.key === null ? y : S.key) || null), u(h, m, S, C);
        case mt:
          var P = S._init;
          return v(m, h, y, P(S._payload), C);
      }
      if (nn(S) || Kr(S)) return (m = m.get(y) || null), f(h, m, S, C, null);
      cl(h, S);
    }
    return null;
  }
  function x(m, h, y, S) {
    for (var C = null, P = null, N = h, O = (h = 0), D = null; N !== null && O < y.length; O++) {
      N.index > O ? ((D = N), (N = null)) : (D = N.sibling);
      var T = p(m, N, y[O], S);
      if (T === null) {
        N === null && (N = D);
        break;
      }
      e && N && T.alternate === null && t(m, N), (h = i(T, h, O)), P === null ? (C = T) : (P.sibling = T), (P = T), (N = D);
    }
    if (O === y.length) return r(m, N), V && Qt(m, O), C;
    if (N === null) {
      for (; O < y.length; O++) (N = d(m, y[O], S)), N !== null && ((h = i(N, h, O)), P === null ? (C = N) : (P.sibling = N), (P = N));
      return V && Qt(m, O), C;
    }
    for (N = n(m, N); O < y.length; O++) (D = v(N, m, O, y[O], S)), D !== null && (e && D.alternate !== null && N.delete(D.key === null ? O : D.key), (h = i(D, h, O)), P === null ? (C = D) : (P.sibling = D), (P = D));
    return (
      e &&
        N.forEach(function (oe) {
          return t(m, oe);
        }),
      V && Qt(m, O),
      C
    );
  }
  function g(m, h, y, S) {
    var C = Kr(y);
    if (typeof C != "function") throw Error(E(150));
    if (((y = C.call(y)), y == null)) throw Error(E(151));
    for (var P = (C = null), N = h, O = (h = 0), D = null, T = y.next(); N !== null && !T.done; O++, T = y.next()) {
      N.index > O ? ((D = N), (N = null)) : (D = N.sibling);
      var oe = p(m, N, T.value, S);
      if (oe === null) {
        N === null && (N = D);
        break;
      }
      e && N && oe.alternate === null && t(m, N), (h = i(oe, h, O)), P === null ? (C = oe) : (P.sibling = oe), (P = oe), (N = D);
    }
    if (T.done) return r(m, N), V && Qt(m, O), C;
    if (N === null) {
      for (; !T.done; O++, T = y.next()) (T = d(m, T.value, S)), T !== null && ((h = i(T, h, O)), P === null ? (C = T) : (P.sibling = T), (P = T));
      return V && Qt(m, O), C;
    }
    for (N = n(m, N); !T.done; O++, T = y.next()) (T = v(N, m, O, T.value, S)), T !== null && (e && T.alternate !== null && N.delete(T.key === null ? O : T.key), (h = i(T, h, O)), P === null ? (C = T) : (P.sibling = T), (P = T));
    return (
      e &&
        N.forEach(function (Hr) {
          return t(m, Hr);
        }),
      V && Qt(m, O),
      C
    );
  }
  function j(m, h, y, S) {
    if ((typeof y == "object" && y !== null && y.type === dr && y.key === null && (y = y.props.children), typeof y == "object" && y !== null)) {
      switch (y.$$typeof) {
        case Xn:
          e: {
            for (var C = y.key, P = h; P !== null; ) {
              if (P.key === C) {
                if (((C = y.type), C === dr)) {
                  if (P.tag === 7) {
                    r(m, P.sibling), (h = l(P, y.props.children)), (h.return = m), (m = h);
                    break e;
                  }
                } else if (P.elementType === C || (typeof C == "object" && C !== null && C.$$typeof === mt && za(C) === P.type)) {
                  r(m, P.sibling), (h = l(P, y.props)), (h.ref = Zr(m, P, y)), (h.return = m), (m = h);
                  break e;
                }
                r(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            y.type === dr ? ((h = qt(y.props.children, m.mode, S, y.key)), (h.return = m), (m = h)) : ((S = kl(y.type, y.key, y.props, null, m.mode, S)), (S.ref = Zr(m, h, y)), (S.return = m), (m = S));
          }
          return c(m);
        case fr:
          e: {
            for (P = y.key; h !== null; ) {
              if (h.key === P)
                if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                  r(m, h.sibling), (h = l(h, y.children || [])), (h.return = m), (m = h);
                  break e;
                } else {
                  r(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = gi(y, m.mode, S)), (h.return = m), (m = h);
          }
          return c(m);
        case mt:
          return (P = y._init), j(m, h, P(y._payload), S);
      }
      if (nn(y)) return x(m, h, y, S);
      if (Kr(y)) return g(m, h, y, S);
      cl(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number" ? ((y = "" + y), h !== null && h.tag === 6 ? (r(m, h.sibling), (h = l(h, y)), (h.return = m), (m = h)) : (r(m, h), (h = vi(y, m.mode, S)), (h.return = m), (m = h)), c(m)) : r(m, h);
  }
  return j;
}
var Ir = Zf(!0),
  qf = Zf(!1),
  Wn = {},
  Ze = Ft(Wn),
  _n = Ft(Wn),
  bn = Ft(Wn);
function Jt(e) {
  if (e === Wn) throw Error(E(174));
  return e;
}
function ds(e, t) {
  switch ((A(bn, t), A(_n, e), A(Ze, Wn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Wi(t, e));
  }
  B(Ze), A(Ze, t);
}
function zr() {
  B(Ze), B(_n), B(bn);
}
function ed(e) {
  Jt(bn.current);
  var t = Jt(Ze.current),
    r = Wi(t, e.type);
  t !== r && (A(_n, e), A(Ze, r));
}
function ps(e) {
  _n.current === e && (B(Ze), B(_n));
}
var H = Ft(0);
function Al(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r !== null && ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var di = [];
function ms() {
  for (var e = 0; e < di.length; e++) di[e]._workInProgressVersionPrimary = null;
  di.length = 0;
}
var vl = dt.ReactCurrentDispatcher,
  pi = dt.ReactCurrentBatchConfig,
  rr = 0,
  Q = null,
  q = null,
  re = null,
  Ul = !1,
  pn = !1,
  On = 0,
  Lh = 0;
function ae() {
  throw Error(E(321));
}
function hs(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++) if (!He(e[r], t[r])) return !1;
  return !0;
}
function xs(e, t, r, n, l, i) {
  if (((rr = i), (Q = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (vl.current = e === null || e.memoizedState === null ? $h : Mh), (e = r(n, l)), pn)) {
    i = 0;
    do {
      if (((pn = !1), (On = 0), 25 <= i)) throw Error(E(301));
      (i += 1), (re = q = null), (t.updateQueue = null), (vl.current = Fh), (e = r(n, l));
    } while (pn);
  }
  if (((vl.current = Bl), (t = q !== null && q.next !== null), (rr = 0), (re = q = Q = null), (Ul = !1), t)) throw Error(E(300));
  return e;
}
function ys() {
  var e = On !== 0;
  return (On = 0), e;
}
function Ye() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return re === null ? (Q.memoizedState = re = e) : (re = re.next = e), re;
}
function De() {
  if (q === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = re === null ? Q.memoizedState : re.next;
  if (t !== null) (re = t), (q = e);
  else {
    if (e === null) throw Error(E(310));
    (q = e), (e = { memoizedState: q.memoizedState, baseState: q.baseState, baseQueue: q.baseQueue, queue: q.queue, next: null }), re === null ? (Q.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function Tn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function mi(e) {
  var t = De(),
    r = t.queue;
  if (r === null) throw Error(E(311));
  r.lastRenderedReducer = e;
  var n = q,
    l = n.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (l !== null) {
      var c = l.next;
      (l.next = i.next), (i.next = c);
    }
    (n.baseQueue = l = i), (r.pending = null);
  }
  if (l !== null) {
    (i = l.next), (n = n.baseState);
    var s = (c = null),
      a = null,
      u = i;
    do {
      var f = u.lane;
      if ((rr & f) === f) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var d = { lane: f, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        a === null ? ((s = a = d), (c = n)) : (a = a.next = d), (Q.lanes |= f), (nr |= f);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (c = n) : (a.next = s), He(n, t.memoizedState) || (ge = !0), (t.memoizedState = n), (t.baseState = c), (t.baseQueue = a), (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (Q.lanes |= i), (nr |= i), (l = l.next);
    while (l !== e);
  } else l === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function hi(e) {
  var t = De(),
    r = t.queue;
  if (r === null) throw Error(E(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    l = r.pending,
    i = t.memoizedState;
  if (l !== null) {
    r.pending = null;
    var c = (l = l.next);
    do (i = e(i, c.action)), (c = c.next);
    while (c !== l);
    He(i, t.memoizedState) || (ge = !0), (t.memoizedState = i), t.baseQueue === null && (t.baseState = i), (r.lastRenderedState = i);
  }
  return [i, n];
}
function td() {}
function rd(e, t) {
  var r = Q,
    n = De(),
    l = t(),
    i = !He(n.memoizedState, l);
  if ((i && ((n.memoizedState = l), (ge = !0)), (n = n.queue), vs(od.bind(null, r, n, e), [e]), n.getSnapshot !== t || i || (re !== null && re.memoizedState.tag & 1))) {
    if (((r.flags |= 2048), Rn(9, ld.bind(null, r, n, l, t), void 0, null), ne === null)) throw Error(E(349));
    rr & 30 || nd(r, t, l);
  }
  return l;
}
function nd(e, t, r) {
  (e.flags |= 16384), (e = { getSnapshot: t, value: r }), (t = Q.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (Q.updateQueue = t), (t.stores = [e])) : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function ld(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), id(t) && cd(e);
}
function od(e, t, r) {
  return r(function () {
    id(t) && cd(e);
  });
}
function id(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !He(e, r);
  } catch {
    return !0;
  }
}
function cd(e) {
  var t = at(e, 1);
  t !== null && Ve(t, e, 1, -1);
}
function Da(e) {
  var t = Ye();
  return typeof e == "function" && (e = e()), (t.memoizedState = t.baseState = e), (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Tn, lastRenderedState: e }), (t.queue = e), (e = e.dispatch = Dh.bind(null, Q, e)), [t.memoizedState, e];
}
function Rn(e, t, r, n) {
  return (e = { tag: e, create: t, destroy: r, deps: n, next: null }), (t = Q.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (Q.updateQueue = t), (t.lastEffect = e.next = e)) : ((r = t.lastEffect), r === null ? (t.lastEffect = e.next = e) : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))), e;
}
function sd() {
  return De().memoizedState;
}
function gl(e, t, r, n) {
  var l = Ye();
  (Q.flags |= e), (l.memoizedState = Rn(1 | t, r, void 0, n === void 0 ? null : n));
}
function po(e, t, r, n) {
  var l = De();
  n = n === void 0 ? null : n;
  var i = void 0;
  if (q !== null) {
    var c = q.memoizedState;
    if (((i = c.destroy), n !== null && hs(n, c.deps))) {
      l.memoizedState = Rn(t, r, i, n);
      return;
    }
  }
  (Q.flags |= e), (l.memoizedState = Rn(1 | t, r, i, n));
}
function $a(e, t) {
  return gl(8390656, 8, e, t);
}
function vs(e, t) {
  return po(2048, 8, e, t);
}
function ad(e, t) {
  return po(4, 2, e, t);
}
function ud(e, t) {
  return po(4, 4, e, t);
}
function fd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function dd(e, t, r) {
  return (r = r != null ? r.concat([e]) : null), po(4, 4, fd.bind(null, t, e), r);
}
function gs() {}
function pd(e, t) {
  var r = De();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && hs(t, n[1]) ? n[0] : ((r.memoizedState = [e, t]), e);
}
function md(e, t) {
  var r = De();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && hs(t, n[1]) ? n[0] : ((e = e()), (r.memoizedState = [e, t]), e);
}
function hd(e, t, r) {
  return rr & 21 ? (He(r, t) || ((r = vf()), (Q.lanes |= r), (nr |= r), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (ge = !0)), (e.memoizedState = r));
}
function Ih(e, t) {
  var r = $;
  ($ = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = pi.transition;
  pi.transition = {};
  try {
    e(!1), t();
  } finally {
    ($ = r), (pi.transition = n);
  }
}
function xd() {
  return De().memoizedState;
}
function zh(e, t, r) {
  var n = bt(e);
  if (((r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }), yd(e))) vd(t, r);
  else if (((r = Gf(e, t, r, n)), r !== null)) {
    var l = he();
    Ve(r, e, n, l), gd(r, t, n);
  }
}
function Dh(e, t, r) {
  var n = bt(e),
    l = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (yd(e)) vd(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var c = t.lastRenderedState,
          s = i(c, r);
        if (((l.hasEagerState = !0), (l.eagerState = s), He(s, c))) {
          var a = t.interleaved;
          a === null ? ((l.next = l), us(t)) : ((l.next = a.next), (a.next = l)), (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (r = Gf(e, t, l, n)), r !== null && ((l = he()), Ve(r, e, n, l), gd(r, t, n));
  }
}
function yd(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function vd(e, t) {
  pn = Ul = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t);
}
function gd(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Xc(e, r);
  }
}
var Bl = { readContext: ze, useCallback: ae, useContext: ae, useEffect: ae, useImperativeHandle: ae, useInsertionEffect: ae, useLayoutEffect: ae, useMemo: ae, useReducer: ae, useRef: ae, useState: ae, useDebugValue: ae, useDeferredValue: ae, useTransition: ae, useMutableSource: ae, useSyncExternalStore: ae, useId: ae, unstable_isNewReconciler: !1 },
  $h = {
    readContext: ze,
    useCallback: function (e, t) {
      return (Ye().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ze,
    useEffect: $a,
    useImperativeHandle: function (e, t, r) {
      return (r = r != null ? r.concat([e]) : null), gl(4194308, 4, fd.bind(null, t, e), r);
    },
    useLayoutEffect: function (e, t) {
      return gl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return gl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Ye();
      return (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, r) {
      var n = Ye();
      return (t = r !== void 0 ? r(t) : t), (n.memoizedState = n.baseState = t), (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }), (n.queue = e), (e = e.dispatch = zh.bind(null, Q, e)), [n.memoizedState, e];
    },
    useRef: function (e) {
      var t = Ye();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Da,
    useDebugValue: gs,
    useDeferredValue: function (e) {
      return (Ye().memoizedState = e);
    },
    useTransition: function () {
      var e = Da(!1),
        t = e[0];
      return (e = Ih.bind(null, e[1])), (Ye().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = Q,
        l = Ye();
      if (V) {
        if (r === void 0) throw Error(E(407));
        r = r();
      } else {
        if (((r = t()), ne === null)) throw Error(E(349));
        rr & 30 || nd(n, t, r);
      }
      l.memoizedState = r;
      var i = { value: r, getSnapshot: t };
      return (l.queue = i), $a(od.bind(null, n, i, e), [e]), (n.flags |= 2048), Rn(9, ld.bind(null, n, i, r, t), void 0, null), r;
    },
    useId: function () {
      var e = Ye(),
        t = ne.identifierPrefix;
      if (V) {
        var r = ot,
          n = lt;
        (r = (n & ~(1 << (32 - We(n) - 1))).toString(32) + r), (t = ":" + t + "R" + r), (r = On++), 0 < r && (t += "H" + r.toString(32)), (t += ":");
      } else (r = Lh++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Mh = {
    readContext: ze,
    useCallback: pd,
    useContext: ze,
    useEffect: vs,
    useImperativeHandle: dd,
    useInsertionEffect: ad,
    useLayoutEffect: ud,
    useMemo: md,
    useReducer: mi,
    useRef: sd,
    useState: function () {
      return mi(Tn);
    },
    useDebugValue: gs,
    useDeferredValue: function (e) {
      var t = De();
      return hd(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = mi(Tn)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: td,
    useSyncExternalStore: rd,
    useId: xd,
    unstable_isNewReconciler: !1,
  },
  Fh = {
    readContext: ze,
    useCallback: pd,
    useContext: ze,
    useEffect: vs,
    useImperativeHandle: dd,
    useInsertionEffect: ad,
    useLayoutEffect: ud,
    useMemo: md,
    useReducer: hi,
    useRef: sd,
    useState: function () {
      return hi(Tn);
    },
    useDebugValue: gs,
    useDeferredValue: function (e) {
      var t = De();
      return q === null ? (t.memoizedState = e) : hd(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = hi(Tn)[0],
        t = De().memoizedState;
      return [e, t];
    },
    useMutableSource: td,
    useSyncExternalStore: rd,
    useId: xd,
    unstable_isNewReconciler: !1,
  };
function Dr(e, t) {
  try {
    var r = "",
      n = t;
    do (r += pm(n)), (n = n.return);
    while (n);
    var l = r;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function xi(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function dc(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var Ah = typeof WeakMap == "function" ? WeakMap : Map;
function jd(e, t, r) {
  (r = it(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      Vl || ((Vl = !0), (Sc = n)), dc(e, t);
    }),
    r
  );
}
function wd(e, t, r) {
  (r = it(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var l = t.value;
    (r.payload = function () {
      return n(l);
    }),
      (r.callback = function () {
        dc(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        dc(e, t), typeof n != "function" && (_t === null ? (_t = new Set([this])) : _t.add(this));
        var c = t.stack;
        this.componentDidCatch(t.value, { componentStack: c !== null ? c : "" });
      }),
    r
  );
}
function Ma(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new Ah();
    var l = new Set();
    n.set(t, l);
  } else (l = n.get(t)), l === void 0 && ((l = new Set()), n.set(t, l));
  l.has(r) || (l.add(r), (e = ex.bind(null, e, t, r)), t.then(e, e));
}
function Fa(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Aa(e, t, r, n, l) {
  return e.mode & 1 ? ((e.flags |= 65536), (e.lanes = l), e) : (e === t ? (e.flags |= 65536) : ((e.flags |= 128), (r.flags |= 131072), (r.flags &= -52805), r.tag === 1 && (r.alternate === null ? (r.tag = 17) : ((t = it(-1, 1)), (t.tag = 2), Pt(r, t, 1))), (r.lanes |= 1)), e);
}
var Uh = dt.ReactCurrentOwner,
  ge = !1;
function me(e, t, r, n) {
  t.child = e === null ? qf(t, null, r, n) : Ir(t, e.child, r, n);
}
function Ua(e, t, r, n, l) {
  r = r.render;
  var i = t.ref;
  return Pr(t, l), (n = xs(e, t, r, n, i, l)), (r = ys()), e !== null && !ge ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), ut(e, t, l)) : (V && r && ls(t), (t.flags |= 1), me(e, t, n, l), t.child);
}
function Ba(e, t, r, n, l) {
  if (e === null) {
    var i = r.type;
    return typeof i == "function" && !Ps(i) && i.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? ((t.tag = 15), (t.type = i), Sd(e, t, i, n, l)) : ((e = kl(r.type, null, n, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var c = i.memoizedProps;
    if (((r = r.compare), (r = r !== null ? r : En), r(c, n) && e.ref === t.ref)) return ut(e, t, l);
  }
  return (t.flags |= 1), (e = Ot(i, n)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Sd(e, t, r, n, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (En(i, n) && e.ref === t.ref)
      if (((ge = !1), (t.pendingProps = n = i), (e.lanes & l) !== 0)) e.flags & 131072 && (ge = !0);
      else return (t.lanes = e.lanes), ut(e, t, l);
  }
  return pc(e, t, r, n, l);
}
function kd(e, t, r) {
  var n = t.pendingProps,
    l = n.children,
    i = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), A(Sr, ke), (ke |= r);
    else {
      if (!(r & 1073741824)) return (e = i !== null ? i.baseLanes | r : r), (t.lanes = t.childLanes = 1073741824), (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }), (t.updateQueue = null), A(Sr, ke), (ke |= e), null;
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (n = i !== null ? i.baseLanes : r), A(Sr, ke), (ke |= n);
    }
  else i !== null ? ((n = i.baseLanes | r), (t.memoizedState = null)) : (n = r), A(Sr, ke), (ke |= n);
  return me(e, t, l, r), t.child;
}
function Ed(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function pc(e, t, r, n, l) {
  var i = we(r) ? er : pe.current;
  return (i = Rr(t, i)), Pr(t, l), (r = xs(e, t, r, n, i, l)), (n = ys()), e !== null && !ge ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), ut(e, t, l)) : (V && n && ls(t), (t.flags |= 1), me(e, t, r, l), t.child);
}
function Wa(e, t, r, n, l) {
  if (we(r)) {
    var i = !0;
    Il(t);
  } else i = !1;
  if ((Pr(t, l), t.stateNode === null)) jl(e, t), Jf(t, r, n), fc(t, r, n, l), (n = !0);
  else if (e === null) {
    var c = t.stateNode,
      s = t.memoizedProps;
    c.props = s;
    var a = c.context,
      u = r.contextType;
    typeof u == "object" && u !== null ? (u = ze(u)) : ((u = we(r) ? er : pe.current), (u = Rr(t, u)));
    var f = r.getDerivedStateFromProps,
      d = typeof f == "function" || typeof c.getSnapshotBeforeUpdate == "function";
    d || (typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function") || ((s !== n || a !== u) && Ia(t, c, n, u)), (ht = !1);
    var p = t.memoizedState;
    (c.state = p), Fl(t, n, c, l), (a = t.memoizedState), s !== n || p !== a || je.current || ht ? (typeof f == "function" && (uc(t, r, f, n), (a = t.memoizedState)), (s = ht || La(t, r, s, n, p, a, u)) ? (d || (typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function") || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = n), (t.memoizedState = a)), (c.props = n), (c.state = a), (c.context = u), (n = s)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), (n = !1));
  } else {
    (c = t.stateNode), Yf(e, t), (s = t.memoizedProps), (u = t.type === t.elementType ? s : Fe(t.type, s)), (c.props = u), (d = t.pendingProps), (p = c.context), (a = r.contextType), typeof a == "object" && a !== null ? (a = ze(a)) : ((a = we(r) ? er : pe.current), (a = Rr(t, a)));
    var v = r.getDerivedStateFromProps;
    (f = typeof v == "function" || typeof c.getSnapshotBeforeUpdate == "function") || (typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function") || ((s !== d || p !== a) && Ia(t, c, n, a)), (ht = !1), (p = t.memoizedState), (c.state = p), Fl(t, n, c, l);
    var x = t.memoizedState;
    s !== d || p !== x || je.current || ht
      ? (typeof v == "function" && (uc(t, r, v, n), (x = t.memoizedState)),
        (u = ht || La(t, r, u, n, p, x, a) || !1) ? (f || (typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function") || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(n, x, a), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(n, x, a)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || (s === e.memoizedProps && p === e.memoizedState) || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || (s === e.memoizedProps && p === e.memoizedState) || (t.flags |= 1024), (t.memoizedProps = n), (t.memoizedState = x)),
        (c.props = n),
        (c.state = x),
        (c.context = a),
        (n = u))
      : (typeof c.componentDidUpdate != "function" || (s === e.memoizedProps && p === e.memoizedState) || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || (s === e.memoizedProps && p === e.memoizedState) || (t.flags |= 1024), (n = !1));
  }
  return mc(e, t, r, n, i, l);
}
function mc(e, t, r, n, l, i) {
  Ed(e, t);
  var c = (t.flags & 128) !== 0;
  if (!n && !c) return l && _a(t, r, !1), ut(e, t, i);
  (n = t.stateNode), (Uh.current = t);
  var s = c && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (t.flags |= 1), e !== null && c ? ((t.child = Ir(t, e.child, null, i)), (t.child = Ir(t, null, s, i))) : me(e, t, s, i), (t.memoizedState = n.state), l && _a(t, r, !0), t.child;
}
function Cd(e) {
  var t = e.stateNode;
  t.pendingContext ? Pa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Pa(e, t.context, !1), ds(e, t.containerInfo);
}
function Va(e, t, r, n, l) {
  return Lr(), is(l), (t.flags |= 256), me(e, t, r, n), t.child;
}
var hc = { dehydrated: null, treeContext: null, retryLane: 0 };
function xc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Nd(e, t, r) {
  var n = t.pendingProps,
    l = H.current,
    i = !1,
    c = (t.flags & 128) !== 0,
    s;
  if (((s = c) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1), A(H, l & 1), e === null)) return sc(t), (e = t.memoizedState), e !== null && ((e = e.dehydrated), e !== null) ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null) : ((c = n.children), (e = n.fallback), i ? ((n = t.mode), (i = t.child), (c = { mode: "hidden", children: c }), !(n & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = c)) : (i = xo(c, n, 0, null)), (e = qt(e, n, r, null)), (i.return = t), (e.return = t), (i.sibling = e), (t.child = i), (t.child.memoizedState = xc(r)), (t.memoizedState = hc), e) : js(t, c));
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null))) return Bh(e, t, c, n, s, l, r);
  if (i) {
    (i = n.fallback), (c = t.mode), (l = e.child), (s = l.sibling);
    var a = { mode: "hidden", children: n.children };
    return !(c & 1) && t.child !== l ? ((n = t.child), (n.childLanes = 0), (n.pendingProps = a), (t.deletions = null)) : ((n = Ot(l, a)), (n.subtreeFlags = l.subtreeFlags & 14680064)), s !== null ? (i = Ot(s, i)) : ((i = qt(i, c, r, null)), (i.flags |= 2)), (i.return = t), (n.return = t), (n.sibling = i), (t.child = n), (n = i), (i = t.child), (c = e.child.memoizedState), (c = c === null ? xc(r) : { baseLanes: c.baseLanes | r, cachePool: null, transitions: c.transitions }), (i.memoizedState = c), (i.childLanes = e.childLanes & ~r), (t.memoizedState = hc), n;
  }
  return (i = e.child), (e = i.sibling), (n = Ot(i, { mode: "visible", children: n.children })), !(t.mode & 1) && (n.lanes = r), (n.return = t), (n.sibling = null), e !== null && ((r = t.deletions), r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)), (t.child = n), (t.memoizedState = null), n;
}
function js(e, t) {
  return (t = xo({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function sl(e, t, r, n) {
  return n !== null && is(n), Ir(t, e.child, null, r), (e = js(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function Bh(e, t, r, n, l, i, c) {
  if (r) return t.flags & 256 ? ((t.flags &= -257), (n = xi(Error(E(422)))), sl(e, t, c, n)) : t.memoizedState !== null ? ((t.child = e.child), (t.flags |= 128), null) : ((i = n.fallback), (l = t.mode), (n = xo({ mode: "visible", children: n.children }, l, 0, null)), (i = qt(i, l, c, null)), (i.flags |= 2), (n.return = t), (i.return = t), (n.sibling = i), (t.child = n), t.mode & 1 && Ir(t, e.child, null, c), (t.child.memoizedState = xc(c)), (t.memoizedState = hc), i);
  if (!(t.mode & 1)) return sl(e, t, c, null);
  if (l.data === "$!") {
    if (((n = l.nextSibling && l.nextSibling.dataset), n)) var s = n.dgst;
    return (n = s), (i = Error(E(419))), (n = xi(i, n, void 0)), sl(e, t, c, n);
  }
  if (((s = (c & e.childLanes) !== 0), ge || s)) {
    if (((n = ne), n !== null)) {
      switch (c & -c) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (n.suspendedLanes | c) ? 0 : l), l !== 0 && l !== i.retryLane && ((i.retryLane = l), at(e, l), Ve(n, e, l, -1));
    }
    return Ns(), (n = xi(Error(E(421)))), sl(e, t, c, n);
  }
  return l.data === "$?" ? ((t.flags |= 128), (t.child = e.child), (t = tx.bind(null, e)), (l._reactRetry = t), null) : ((e = i.treeContext), (Ee = Nt(l.nextSibling)), (Ce = t), (V = !0), (Ue = null), e !== null && ((Te[Re++] = lt), (Te[Re++] = ot), (Te[Re++] = tr), (lt = e.id), (ot = e.overflow), (tr = t)), (t = js(t, n.children)), (t.flags |= 4096), t);
}
function Ha(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), ac(e.return, t, r);
}
function yi(e, t, r, n, l) {
  var i = e.memoizedState;
  i === null ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: l }) : ((i.isBackwards = t), (i.rendering = null), (i.renderingStartTime = 0), (i.last = n), (i.tail = r), (i.tailMode = l));
}
function Pd(e, t, r) {
  var n = t.pendingProps,
    l = n.revealOrder,
    i = n.tail;
  if ((me(e, t, n.children, r), (n = H.current), n & 2)) (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ha(e, r, t);
        else if (e.tag === 19) Ha(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((A(H, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (r = t.child, l = null; r !== null; ) (e = r.alternate), e !== null && Al(e) === null && (l = r), (r = r.sibling);
        (r = l), r === null ? ((l = t.child), (t.child = null)) : ((l = r.sibling), (r.sibling = null)), yi(t, !1, l, r, i);
        break;
      case "backwards":
        for (r = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Al(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = r), (r = l), (l = e);
        }
        yi(t, !0, r, null, i);
        break;
      case "together":
        yi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function jl(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ut(e, t, r) {
  if ((e !== null && (t.dependencies = e.dependencies), (nr |= t.lanes), !(r & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, r = Ot(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) (e = e.sibling), (r = r.sibling = Ot(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function Wh(e, t, r) {
  switch (t.tag) {
    case 3:
      Cd(t), Lr();
      break;
    case 5:
      ed(t);
      break;
    case 1:
      we(t.type) && Il(t);
      break;
    case 4:
      ds(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        l = t.memoizedProps.value;
      A($l, n._currentValue), (n._currentValue = l);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null)) return n.dehydrated !== null ? (A(H, H.current & 1), (t.flags |= 128), null) : r & t.child.childLanes ? Nd(e, t, r) : (A(H, H.current & 1), (e = ut(e, t, r)), e !== null ? e.sibling : null);
      A(H, H.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return Pd(e, t, r);
        t.flags |= 128;
      }
      if (((l = t.memoizedState), l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)), A(H, H.current), n)) break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), kd(e, t, r);
  }
  return ut(e, t, r);
}
var _d, yc, bd, Od;
_d = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
yc = function () {};
bd = function (e, t, r, n) {
  var l = e.memoizedProps;
  if (l !== n) {
    (e = t.stateNode), Jt(Ze.current);
    var i = null;
    switch (r) {
      case "input":
        (l = Fi(e, l)), (n = Fi(e, n)), (i = []);
        break;
      case "select":
        (l = K({}, l, { value: void 0 })), (n = K({}, n, { value: void 0 })), (i = []);
        break;
      case "textarea":
        (l = Bi(e, l)), (n = Bi(e, n)), (i = []);
        break;
      default:
        typeof l.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Rl);
    }
    Vi(r, n);
    var c;
    r = null;
    for (u in l)
      if (!n.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
        if (u === "style") {
          var s = l[u];
          for (c in s) s.hasOwnProperty(c) && (r || (r = {}), (r[c] = ""));
        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (yn.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in n) {
      var a = n[u];
      if (((s = l != null ? l[u] : void 0), n.hasOwnProperty(u) && a !== s && (a != null || s != null)))
        if (u === "style")
          if (s) {
            for (c in s) !s.hasOwnProperty(c) || (a && a.hasOwnProperty(c)) || (r || (r = {}), (r[c] = ""));
            for (c in a) a.hasOwnProperty(c) && s[c] !== a[c] && (r || (r = {}), (r[c] = a[c]));
          } else r || (i || (i = []), i.push(u, r)), (r = a);
        else u === "dangerouslySetInnerHTML" ? ((a = a ? a.__html : void 0), (s = s ? s.__html : void 0), a != null && s !== a && (i = i || []).push(u, a)) : u === "children" ? (typeof a != "string" && typeof a != "number") || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (yn.hasOwnProperty(u) ? (a != null && u === "onScroll" && U("scroll", e), i || s === a || (i = [])) : (i = i || []).push(u, a));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Od = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function qr(e, t) {
  if (!V)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; ) r.alternate !== null && (n = r), (r = r.sibling);
        n === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (n.sibling = null);
    }
}
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t) for (var l = e.child; l !== null; ) (r |= l.lanes | l.childLanes), (n |= l.subtreeFlags & 14680064), (n |= l.flags & 14680064), (l.return = e), (l = l.sibling);
  else for (l = e.child; l !== null; ) (r |= l.lanes | l.childLanes), (n |= l.subtreeFlags), (n |= l.flags), (l.return = e), (l = l.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function Vh(e, t, r) {
  var n = t.pendingProps;
  switch ((os(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ue(t), null;
    case 1:
      return we(t.type) && Ll(), ue(t), null;
    case 3:
      return (n = t.stateNode), zr(), B(je), B(pe), ms(), n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)), (e === null || e.child === null) && (il(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), Ue !== null && (Cc(Ue), (Ue = null)))), yc(e, t), ue(t), null;
    case 5:
      ps(t);
      var l = Jt(bn.current);
      if (((r = t.type), e !== null && t.stateNode != null)) bd(e, t, r, n, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(E(166));
          return ue(t), null;
        }
        if (((e = Jt(Ze.current)), il(t))) {
          (n = t.stateNode), (r = t.type);
          var i = t.memoizedProps;
          switch (((n[Xe] = t), (n[Pn] = i), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              U("cancel", n), U("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", n);
              break;
            case "video":
            case "audio":
              for (l = 0; l < on.length; l++) U(on[l], n);
              break;
            case "source":
              U("error", n);
              break;
            case "img":
            case "image":
            case "link":
              U("error", n), U("load", n);
              break;
            case "details":
              U("toggle", n);
              break;
            case "input":
              ea(n, i), U("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }), U("invalid", n);
              break;
            case "textarea":
              ra(n, i), U("invalid", n);
          }
          Vi(r, i), (l = null);
          for (var c in i)
            if (i.hasOwnProperty(c)) {
              var s = i[c];
              c === "children" ? (typeof s == "string" ? n.textContent !== s && (i.suppressHydrationWarning !== !0 && ol(n.textContent, s, e), (l = ["children", s])) : typeof s == "number" && n.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && ol(n.textContent, s, e), (l = ["children", "" + s]))) : yn.hasOwnProperty(c) && s != null && c === "onScroll" && U("scroll", n);
            }
          switch (r) {
            case "input":
              Jn(n), ta(n, i, !0);
              break;
            case "textarea":
              Jn(n), na(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = Rl);
          }
          (n = l), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (c = l.nodeType === 9 ? l : l.ownerDocument), e === "http://www.w3.org/1999/xhtml" && (e = rf(r)), e === "http://www.w3.org/1999/xhtml" ? (r === "script" ? ((e = c.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild))) : typeof n.is == "string" ? (e = c.createElement(r, { is: n.is })) : ((e = c.createElement(r)), r === "select" && ((c = e), n.multiple ? (c.multiple = !0) : n.size && (c.size = n.size)))) : (e = c.createElementNS(e, r)), (e[Xe] = t), (e[Pn] = n), _d(e, t, !1, !1), (t.stateNode = e);
          e: {
            switch (((c = Hi(r, n)), r)) {
              case "dialog":
                U("cancel", e), U("close", e), (l = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (l = n);
                break;
              case "video":
              case "audio":
                for (l = 0; l < on.length; l++) U(on[l], e);
                l = n;
                break;
              case "source":
                U("error", e), (l = n);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (l = n);
                break;
              case "details":
                U("toggle", e), (l = n);
                break;
              case "input":
                ea(e, n), (l = Fi(e, n)), U("invalid", e);
                break;
              case "option":
                l = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }), (l = K({}, n, { value: void 0 })), U("invalid", e);
                break;
              case "textarea":
                ra(e, n), (l = Bi(e, n)), U("invalid", e);
                break;
              default:
                l = n;
            }
            Vi(r, l), (s = l);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style" ? of(e, a) : i === "dangerouslySetInnerHTML" ? ((a = a ? a.__html : void 0), a != null && nf(e, a)) : i === "children" ? (typeof a == "string" ? (r !== "textarea" || a !== "") && vn(e, a) : typeof a == "number" && vn(e, "" + a)) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (yn.hasOwnProperty(i) ? a != null && i === "onScroll" && U("scroll", e) : a != null && Vc(e, i, a, c));
              }
            switch (r) {
              case "input":
                Jn(e), ta(e, n, !1);
                break;
              case "textarea":
                Jn(e), na(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + It(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple), (i = n.value), i != null ? kr(e, !!n.multiple, i, !1) : n.defaultValue != null && kr(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Rl);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) Od(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(E(166));
        if (((r = Jt(bn.current)), Jt(Ze.current), il(t))) {
          if (((n = t.stateNode), (r = t.memoizedProps), (n[Xe] = t), (i = n.nodeValue !== r) && ((e = Ce), e !== null)))
            switch (e.tag) {
              case 3:
                ol(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ol(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)), (n[Xe] = t), (t.stateNode = n);
      }
      return ue(t), null;
    case 13:
      if ((B(H), (n = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (V && Ee !== null && t.mode & 1 && !(t.flags & 128)) Kf(), Lr(), (t.flags |= 98560), (i = !1);
        else if (((i = il(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(E(317));
            i[Xe] = t;
          } else Lr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (i = !1);
        } else Ue !== null && (Cc(Ue), (Ue = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? ((t.lanes = r), t) : ((n = n !== null), n !== (e !== null && e.memoizedState !== null) && n && ((t.child.flags |= 8192), t.mode & 1 && (e === null || H.current & 1 ? ee === 0 && (ee = 3) : Ns())), t.updateQueue !== null && (t.flags |= 4), ue(t), null);
    case 4:
      return zr(), yc(e, t), e === null && Cn(t.stateNode.containerInfo), ue(t), null;
    case 10:
      return as(t.type._context), ue(t), null;
    case 17:
      return we(t.type) && Ll(), ue(t), null;
    case 19:
      if ((B(H), (i = t.memoizedState), i === null)) return ue(t), null;
      if (((n = (t.flags & 128) !== 0), (c = i.rendering), c === null))
        if (n) qr(i, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((c = Al(e)), c !== null)) {
                for (t.flags |= 128, qr(i, !1), n = c.updateQueue, n !== null && ((t.updateQueue = n), (t.flags |= 4)), t.subtreeFlags = 0, n = r, r = t.child; r !== null; )
                  (i = r), (e = n), (i.flags &= 14680066), (c = i.alternate), c === null ? ((i.childLanes = 0), (i.lanes = e), (i.child = null), (i.subtreeFlags = 0), (i.memoizedProps = null), (i.memoizedState = null), (i.updateQueue = null), (i.dependencies = null), (i.stateNode = null)) : ((i.childLanes = c.childLanes), (i.lanes = c.lanes), (i.child = c.child), (i.subtreeFlags = 0), (i.deletions = null), (i.memoizedProps = c.memoizedProps), (i.memoizedState = c.memoizedState), (i.updateQueue = c.updateQueue), (i.type = c.type), (e = c.dependencies), (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })), (r = r.sibling);
                return A(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && J() > $r && ((t.flags |= 128), (n = !0), qr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Al(c)), e !== null)) {
            if (((t.flags |= 128), (n = !0), (r = e.updateQueue), r !== null && ((t.updateQueue = r), (t.flags |= 4)), qr(i, !0), i.tail === null && i.tailMode === "hidden" && !c.alternate && !V)) return ue(t), null;
          } else 2 * J() - i.renderingStartTime > $r && r !== 1073741824 && ((t.flags |= 128), (n = !0), qr(i, !1), (t.lanes = 4194304));
        i.isBackwards ? ((c.sibling = t.child), (t.child = c)) : ((r = i.last), r !== null ? (r.sibling = c) : (t.child = c), (i.last = c));
      }
      return i.tail !== null ? ((t = i.tail), (i.rendering = t), (i.tail = t.sibling), (i.renderingStartTime = J()), (t.sibling = null), (r = H.current), A(H, n ? (r & 1) | 2 : r & 1), t) : (ue(t), null);
    case 22:
    case 23:
      return Cs(), (n = t.memoizedState !== null), e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192), n && t.mode & 1 ? ke & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ue(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Hh(e, t) {
  switch ((os(t), t.tag)) {
    case 1:
      return we(t.type) && Ll(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return zr(), B(je), B(pe), ms(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
    case 5:
      return ps(t), null;
    case 13:
      if ((B(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        Lr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return B(H), null;
    case 4:
      return zr(), null;
    case 10:
      return as(t.type._context), null;
    case 22:
    case 23:
      return Cs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var al = !1,
  de = !1,
  Qh = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function wr(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        G(e, t, n);
      }
    else r.current = null;
}
function vc(e, t, r) {
  try {
    r();
  } catch (n) {
    G(e, t, n);
  }
}
var Qa = !1;
function Kh(e, t) {
  if (((tc = bl), (e = If()), ns(e))) {
    if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var l = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var c = 0,
            s = -1,
            a = -1,
            u = 0,
            f = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (var v; d !== r || (l !== 0 && d.nodeType !== 3) || (s = c + l), d !== i || (n !== 0 && d.nodeType !== 3) || (a = c + n), d.nodeType === 3 && (c += d.nodeValue.length), (v = d.firstChild) !== null; ) (p = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if ((p === r && ++u === l && (s = c), p === i && ++f === n && (a = c), (v = d.nextSibling) !== null)) break;
              (d = p), (p = d.parentNode);
            }
            d = v;
          }
          r = s === -1 || a === -1 ? null : { start: s, end: a };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (rc = { focusedElem: e, selectionRange: r }, bl = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var g = x.memoizedProps,
                    j = x.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Fe(t.type, g), j);
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1 ? (y.textContent = "") : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (S) {
          G(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (x = Qa), (Qa = !1), x;
}
function mn(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var l = (n = n.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && vc(t, r, i);
      }
      l = l.next;
    } while (l !== n);
  }
}
function mo(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function gc(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Td(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Td(t)), (e.child = null), (e.deletions = null), (e.sibling = null), e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Xe], delete t[Pn], delete t[oc], delete t[bh], delete t[Oh])), (e.stateNode = null), (e.return = null), (e.dependencies = null), (e.memoizedProps = null), (e.memoizedState = null), (e.pendingProps = null), (e.stateNode = null), (e.updateQueue = null);
}
function Rd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ka(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Rd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function jc(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) (e = e.stateNode), t ? (r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t)) : (r.nodeType === 8 ? ((t = r.parentNode), t.insertBefore(e, r)) : ((t = r), t.appendChild(e)), (r = r._reactRootContainer), r != null || t.onclick !== null || (t.onclick = Rl));
  else if (n !== 4 && ((e = e.child), e !== null)) for (jc(e, t, r), e = e.sibling; e !== null; ) jc(e, t, r), (e = e.sibling);
}
function wc(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null)) for (wc(e, t, r), e = e.sibling; e !== null; ) wc(e, t, r), (e = e.sibling);
}
var ie = null,
  Ae = !1;
function pt(e, t, r) {
  for (r = r.child; r !== null; ) Ld(e, t, r), (r = r.sibling);
}
function Ld(e, t, r) {
  if (Je && typeof Je.onCommitFiberUnmount == "function")
    try {
      Je.onCommitFiberUnmount(oo, r);
    } catch {}
  switch (r.tag) {
    case 5:
      de || wr(r, t);
    case 6:
      var n = ie,
        l = Ae;
      (ie = null), pt(e, t, r), (ie = n), (Ae = l), ie !== null && (Ae ? ((e = ie), (r = r.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : ie.removeChild(r.stateNode));
      break;
    case 18:
      ie !== null && (Ae ? ((e = ie), (r = r.stateNode), e.nodeType === 8 ? ui(e.parentNode, r) : e.nodeType === 1 && ui(e, r), Sn(e)) : ui(ie, r.stateNode));
      break;
    case 4:
      (n = ie), (l = Ae), (ie = r.stateNode.containerInfo), (Ae = !0), pt(e, t, r), (ie = n), (Ae = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!de && ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))) {
        l = n = n.next;
        do {
          var i = l,
            c = i.destroy;
          (i = i.tag), c !== void 0 && (i & 2 || i & 4) && vc(r, t, c), (l = l.next);
        } while (l !== n);
      }
      pt(e, t, r);
      break;
    case 1:
      if (!de && (wr(r, t), (n = r.stateNode), typeof n.componentWillUnmount == "function"))
        try {
          (n.props = r.memoizedProps), (n.state = r.memoizedState), n.componentWillUnmount();
        } catch (s) {
          G(r, t, s);
        }
      pt(e, t, r);
      break;
    case 21:
      pt(e, t, r);
      break;
    case 22:
      r.mode & 1 ? ((de = (n = de) || r.memoizedState !== null), pt(e, t, r), (de = n)) : pt(e, t, r);
      break;
    default:
      pt(e, t, r);
  }
}
function Ga(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new Qh()),
      t.forEach(function (n) {
        var l = rx.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(l, l));
      });
  }
}
function Me(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var l = r[n];
      try {
        var i = e,
          c = t,
          s = c;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ie = s.stateNode), (Ae = !1);
              break e;
            case 3:
              (ie = s.stateNode.containerInfo), (Ae = !0);
              break e;
            case 4:
              (ie = s.stateNode.containerInfo), (Ae = !0);
              break e;
          }
          s = s.return;
        }
        if (ie === null) throw Error(E(160));
        Ld(i, c, l), (ie = null), (Ae = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (u) {
        G(l, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Id(t, e), (t = t.sibling);
}
function Id(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Me(t, e), Qe(e), n & 4)) {
        try {
          mn(3, e, e.return), mo(3, e);
        } catch (g) {
          G(e, e.return, g);
        }
        try {
          mn(5, e, e.return);
        } catch (g) {
          G(e, e.return, g);
        }
      }
      break;
    case 1:
      Me(t, e), Qe(e), n & 512 && r !== null && wr(r, r.return);
      break;
    case 5:
      if ((Me(t, e), Qe(e), n & 512 && r !== null && wr(r, r.return), e.flags & 32)) {
        var l = e.stateNode;
        try {
          vn(l, "");
        } catch (g) {
          G(e, e.return, g);
        }
      }
      if (n & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          c = r !== null ? r.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && ef(l, i), Hi(s, c);
            var u = Hi(s, i);
            for (c = 0; c < a.length; c += 2) {
              var f = a[c],
                d = a[c + 1];
              f === "style" ? of(l, d) : f === "dangerouslySetInnerHTML" ? nf(l, d) : f === "children" ? vn(l, d) : Vc(l, f, d, u);
            }
            switch (s) {
              case "input":
                Ai(l, i);
                break;
              case "textarea":
                tf(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null ? kr(l, !!i.multiple, v, !1) : p !== !!i.multiple && (i.defaultValue != null ? kr(l, !!i.multiple, i.defaultValue, !0) : kr(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Pn] = i;
          } catch (g) {
            G(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Me(t, e), Qe(e), n & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (g) {
          G(e, e.return, g);
        }
      }
      break;
    case 3:
      if ((Me(t, e), Qe(e), n & 4 && r !== null && r.memoizedState.isDehydrated))
        try {
          Sn(t.containerInfo);
        } catch (g) {
          G(e, e.return, g);
        }
      break;
    case 4:
      Me(t, e), Qe(e);
      break;
    case 13:
      Me(t, e), Qe(e), (l = e.child), l.flags & 8192 && ((i = l.memoizedState !== null), (l.stateNode.isHidden = i), !i || (l.alternate !== null && l.alternate.memoizedState !== null) || (ks = J())), n & 4 && Ga(e);
      break;
    case 22:
      if (((f = r !== null && r.memoizedState !== null), e.mode & 1 ? ((de = (u = de) || f), Me(t, e), (de = u)) : Me(t, e), Qe(e), n & 8192)) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !f && e.mode & 1))
          for (_ = e, f = e.child; f !== null; ) {
            for (d = _ = f; _ !== null; ) {
              switch (((p = _), (v = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mn(4, p, p.return);
                  break;
                case 1:
                  wr(p, p.return);
                  var x = p.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (n = p), (r = p.return);
                    try {
                      (t = n), (x.props = t.memoizedProps), (x.state = t.memoizedState), x.componentWillUnmount();
                    } catch (g) {
                      G(n, r, g);
                    }
                  }
                  break;
                case 5:
                  wr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Xa(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = p), (_ = v)) : Xa(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (l = d.stateNode), u ? ((i = l.style), typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : (i.display = "none")) : ((s = d.stateNode), (a = d.memoizedProps.style), (c = a != null && a.hasOwnProperty("display") ? a.display : null), (s.style.display = lf("display", c)));
              } catch (g) {
                G(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                G(e, e.return, g);
              }
          } else if (((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) && d.child !== null) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Me(t, e), Qe(e), n & 4 && Ga(e);
      break;
    case 21:
      break;
    default:
      Me(t, e), Qe(e);
  }
}
function Qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (Rd(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(E(160));
      }
      switch (n.tag) {
        case 5:
          var l = n.stateNode;
          n.flags & 32 && (vn(l, ""), (n.flags &= -33));
          var i = Ka(e);
          wc(e, i, l);
          break;
        case 3:
        case 4:
          var c = n.stateNode.containerInfo,
            s = Ka(e);
          jc(e, s, c);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      G(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Gh(e, t, r) {
  (_ = e), zd(e);
}
function zd(e, t, r) {
  for (var n = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      i = l.child;
    if (l.tag === 22 && n) {
      var c = l.memoizedState !== null || al;
      if (!c) {
        var s = l.alternate,
          a = (s !== null && s.memoizedState !== null) || de;
        s = al;
        var u = de;
        if (((al = c), (de = a) && !u)) for (_ = l; _ !== null; ) (c = _), (a = c.child), c.tag === 22 && c.memoizedState !== null ? Ja(l) : a !== null ? ((a.return = c), (_ = a)) : Ja(l);
        for (; i !== null; ) (_ = i), zd(i), (i = i.sibling);
        (_ = l), (al = s), (de = u);
      }
      Ya(e);
    } else l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (_ = i)) : Ya(e);
  }
}
function Ya(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              de || mo(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !de)
                if (r === null) n.componentDidMount();
                else {
                  var l = t.elementType === t.type ? r.memoizedProps : Fe(t.type, r.memoizedProps);
                  n.componentDidUpdate(l, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Ra(t, i, n);
              break;
            case 3:
              var c = t.updateQueue;
              if (c !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                Ra(t, c, r);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (r === null && t.flags & 4) {
                r = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && r.focus();
                    break;
                  case "img":
                    a.src && (r.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && Sn(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        de || (t.flags & 512 && gc(t));
      } catch (p) {
        G(t, t.return, p);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (_ = r);
      break;
    }
    _ = t.return;
  }
}
function Xa(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (_ = r);
      break;
    }
    _ = t.return;
  }
}
function Ja(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            mo(4, t);
          } catch (a) {
            G(t, r, a);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var l = t.return;
            try {
              n.componentDidMount();
            } catch (a) {
              G(t, l, a);
            }
          }
          var i = t.return;
          try {
            gc(t);
          } catch (a) {
            G(t, i, a);
          }
          break;
        case 5:
          var c = t.return;
          try {
            gc(t);
          } catch (a) {
            G(t, c, a);
          }
      }
    } catch (a) {
      G(t, t.return, a);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (_ = s);
      break;
    }
    _ = t.return;
  }
}
var Yh = Math.ceil,
  Wl = dt.ReactCurrentDispatcher,
  ws = dt.ReactCurrentOwner,
  Ie = dt.ReactCurrentBatchConfig,
  z = 0,
  ne = null,
  Z = null,
  ce = 0,
  ke = 0,
  Sr = Ft(0),
  ee = 0,
  Ln = null,
  nr = 0,
  ho = 0,
  Ss = 0,
  hn = null,
  ve = null,
  ks = 0,
  $r = 1 / 0,
  rt = null,
  Vl = !1,
  Sc = null,
  _t = null,
  ul = !1,
  jt = null,
  Hl = 0,
  xn = 0,
  kc = null,
  wl = -1,
  Sl = 0;
function he() {
  return z & 6 ? J() : wl !== -1 ? wl : (wl = J());
}
function bt(e) {
  return e.mode & 1 ? (z & 2 && ce !== 0 ? ce & -ce : Rh.transition !== null ? (Sl === 0 && (Sl = vf()), Sl) : ((e = $), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cf(e.type))), e)) : 1;
}
function Ve(e, t, r, n) {
  if (50 < xn) throw ((xn = 0), (kc = null), Error(E(185)));
  An(e, r, n), (!(z & 2) || e !== ne) && (e === ne && (!(z & 2) && (ho |= r), ee === 4 && yt(e, ce)), Se(e, n), r === 1 && z === 0 && !(t.mode & 1) && (($r = J() + 500), uo && At()));
}
function Se(e, t) {
  var r = e.callbackNode;
  Rm(e, t);
  var n = _l(e, e === ne ? ce : 0);
  if (n === 0) r !== null && ia(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && ia(r), t === 1))
      e.tag === 0 ? Th(Za.bind(null, e)) : Vf(Za.bind(null, e)),
        Ph(function () {
          !(z & 6) && At();
        }),
        (r = null);
    else {
      switch (gf(n)) {
        case 1:
          r = Yc;
          break;
        case 4:
          r = xf;
          break;
        case 16:
          r = Pl;
          break;
        case 536870912:
          r = yf;
          break;
        default:
          r = Pl;
      }
      r = Wd(r, Dd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function Dd(e, t) {
  if (((wl = -1), (Sl = 0), z & 6)) throw Error(E(327));
  var r = e.callbackNode;
  if (_r() && e.callbackNode !== r) return null;
  var n = _l(e, e === ne ? ce : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = Ql(e, n);
  else {
    t = n;
    var l = z;
    z |= 2;
    var i = Md();
    (ne !== e || ce !== t) && ((rt = null), ($r = J() + 500), Zt(e, t));
    do
      try {
        Zh();
        break;
      } catch (s) {
        $d(e, s);
      }
    while (!0);
    ss(), (Wl.current = i), (z = l), Z !== null ? (t = 0) : ((ne = null), (ce = 0), (t = ee));
  }
  if (t !== 0) {
    if ((t === 2 && ((l = Xi(e)), l !== 0 && ((n = l), (t = Ec(e, l)))), t === 1)) throw ((r = Ln), Zt(e, 0), yt(e, n), Se(e, J()), r);
    if (t === 6) yt(e, n);
    else {
      if (((l = e.current.alternate), !(n & 30) && !Xh(l) && ((t = Ql(e, n)), t === 2 && ((i = Xi(e)), i !== 0 && ((n = i), (t = Ec(e, i)))), t === 1))) throw ((r = Ln), Zt(e, 0), yt(e, n), Se(e, J()), r);
      switch (((e.finishedWork = l), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Kt(e, ve, rt);
          break;
        case 3:
          if ((yt(e, n), (n & 130023424) === n && ((t = ks + 500 - J()), 10 < t))) {
            if (_l(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & n) !== n)) {
              he(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = lc(Kt.bind(null, e, ve, rt), t);
            break;
          }
          Kt(e, ve, rt);
          break;
        case 4:
          if ((yt(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, l = -1; 0 < n; ) {
            var c = 31 - We(n);
            (i = 1 << c), (c = t[c]), c > l && (l = c), (n &= ~i);
          }
          if (((n = l), (n = J() - n), (n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Yh(n / 1960)) - n), 10 < n)) {
            e.timeoutHandle = lc(Kt.bind(null, e, ve, rt), n);
            break;
          }
          Kt(e, ve, rt);
          break;
        case 5:
          Kt(e, ve, rt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Se(e, J()), e.callbackNode === r ? Dd.bind(null, e) : null;
}
function Ec(e, t) {
  var r = hn;
  return e.current.memoizedState.isDehydrated && (Zt(e, t).flags |= 256), (e = Ql(e, t)), e !== 2 && ((t = ve), (ve = r), t !== null && Cc(t)), e;
}
function Cc(e) {
  ve === null ? (ve = e) : ve.push.apply(ve, e);
}
function Xh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var l = r[n],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!He(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null)) (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function yt(e, t) {
  for (t &= ~Ss, t &= ~ho, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - We(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function Za(e) {
  if (z & 6) throw Error(E(327));
  _r();
  var t = _l(e, 0);
  if (!(t & 1)) return Se(e, J()), null;
  var r = Ql(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Xi(e);
    n !== 0 && ((t = n), (r = Ec(e, n)));
  }
  if (r === 1) throw ((r = Ln), Zt(e, 0), yt(e, t), Se(e, J()), r);
  if (r === 6) throw Error(E(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Kt(e, ve, rt), Se(e, J()), null;
}
function Es(e, t) {
  var r = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    (z = r), z === 0 && (($r = J() + 500), uo && At());
  }
}
function lr(e) {
  jt !== null && jt.tag === 0 && !(z & 6) && _r();
  var t = z;
  z |= 1;
  var r = Ie.transition,
    n = $;
  try {
    if (((Ie.transition = null), ($ = 1), e)) return e();
  } finally {
    ($ = n), (Ie.transition = r), (z = t), !(z & 6) && At();
  }
}
function Cs() {
  (ke = Sr.current), B(Sr);
}
function Zt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Nh(r)), Z !== null))
    for (r = Z.return; r !== null; ) {
      var n = r;
      switch ((os(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && Ll();
          break;
        case 3:
          zr(), B(je), B(pe), ms();
          break;
        case 5:
          ps(n);
          break;
        case 4:
          zr();
          break;
        case 13:
          B(H);
          break;
        case 19:
          B(H);
          break;
        case 10:
          as(n.type._context);
          break;
        case 22:
        case 23:
          Cs();
      }
      r = r.return;
    }
  if (((ne = e), (Z = e = Ot(e.current, null)), (ce = ke = t), (ee = 0), (Ln = null), (Ss = ho = nr = 0), (ve = hn = null), Xt !== null)) {
    for (t = 0; t < Xt.length; t++)
      if (((r = Xt[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var l = n.next,
          i = r.pending;
        if (i !== null) {
          var c = i.next;
          (i.next = l), (n.next = c);
        }
        r.pending = n;
      }
    Xt = null;
  }
  return e;
}
function $d(e, t) {
  do {
    var r = Z;
    try {
      if ((ss(), (vl.current = Bl), Ul)) {
        for (var n = Q.memoizedState; n !== null; ) {
          var l = n.queue;
          l !== null && (l.pending = null), (n = n.next);
        }
        Ul = !1;
      }
      if (((rr = 0), (re = q = Q = null), (pn = !1), (On = 0), (ws.current = null), r === null || r.return === null)) {
        (ee = 1), (Ln = t), (Z = null);
        break;
      }
      e: {
        var i = e,
          c = r.return,
          s = r,
          a = t;
        if (((t = ce), (s.flags |= 32768), a !== null && typeof a == "object" && typeof a.then == "function")) {
          var u = a,
            f = s,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = f.alternate;
            p ? ((f.updateQueue = p.updateQueue), (f.memoizedState = p.memoizedState), (f.lanes = p.lanes)) : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var v = Fa(c);
          if (v !== null) {
            (v.flags &= -257), Aa(v, c, s, i, t), v.mode & 1 && Ma(i, u, t), (t = v), (a = u);
            var x = t.updateQueue;
            if (x === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ma(i, u, t), Ns();
              break e;
            }
            a = Error(E(426));
          }
        } else if (V && s.mode & 1) {
          var j = Fa(c);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), Aa(j, c, s, i, t), is(Dr(a, s));
            break e;
          }
        }
        (i = a = Dr(a, s)), ee !== 4 && (ee = 2), hn === null ? (hn = [i]) : hn.push(i), (i = c);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = jd(i, a, t);
              Ta(i, m);
              break e;
            case 1:
              s = a;
              var h = i.type,
                y = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || (y !== null && typeof y.componentDidCatch == "function" && (_t === null || !_t.has(y))))) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var S = wd(i, s, t);
                Ta(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ad(r);
    } catch (C) {
      (t = C), Z === r && r !== null && (Z = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Md() {
  var e = Wl.current;
  return (Wl.current = Bl), e === null ? Bl : e;
}
function Ns() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4), ne === null || (!(nr & 268435455) && !(ho & 268435455)) || yt(ne, ce);
}
function Ql(e, t) {
  var r = z;
  z |= 2;
  var n = Md();
  (ne !== e || ce !== t) && ((rt = null), Zt(e, t));
  do
    try {
      Jh();
      break;
    } catch (l) {
      $d(e, l);
    }
  while (!0);
  if ((ss(), (z = r), (Wl.current = n), Z !== null)) throw Error(E(261));
  return (ne = null), (ce = 0), ee;
}
function Jh() {
  for (; Z !== null; ) Fd(Z);
}
function Zh() {
  for (; Z !== null && !km(); ) Fd(Z);
}
function Fd(e) {
  var t = Bd(e.alternate, e, ke);
  (e.memoizedProps = e.pendingProps), t === null ? Ad(e) : (Z = t), (ws.current = null);
}
function Ad(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = Hh(r, t)), r !== null)) {
        (r.flags &= 32767), (Z = r);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (Z = null);
        return;
      }
    } else if (((r = Vh(r, t, ke)), r !== null)) {
      Z = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function Kt(e, t, r) {
  var n = $,
    l = Ie.transition;
  try {
    (Ie.transition = null), ($ = 1), qh(e, t, r, n);
  } finally {
    (Ie.transition = l), ($ = n);
  }
  return null;
}
function qh(e, t, r, n) {
  do _r();
  while (jt !== null);
  if (z & 6) throw Error(E(327));
  r = e.finishedWork;
  var l = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (Lm(e, i),
    e === ne && ((Z = ne = null), (ce = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      ul ||
      ((ul = !0),
      Wd(Pl, function () {
        return _r(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    (i = Ie.transition), (Ie.transition = null);
    var c = $;
    $ = 1;
    var s = z;
    (z |= 4), (ws.current = null), Kh(e, r), Id(r, e), gh(rc), (bl = !!tc), (rc = tc = null), (e.current = r), Gh(r), Em(), (z = s), ($ = c), (Ie.transition = i);
  } else e.current = r;
  if ((ul && ((ul = !1), (jt = e), (Hl = l)), (i = e.pendingLanes), i === 0 && (_t = null), Pm(r.stateNode), Se(e, J()), t !== null)) for (n = e.onRecoverableError, r = 0; r < t.length; r++) (l = t[r]), n(l.value, { componentStack: l.stack, digest: l.digest });
  if (Vl) throw ((Vl = !1), (e = Sc), (Sc = null), e);
  return Hl & 1 && e.tag !== 0 && _r(), (i = e.pendingLanes), i & 1 ? (e === kc ? xn++ : ((xn = 0), (kc = e))) : (xn = 0), At(), null;
}
function _r() {
  if (jt !== null) {
    var e = gf(Hl),
      t = Ie.transition,
      r = $;
    try {
      if (((Ie.transition = null), ($ = 16 > e ? 16 : e), jt === null)) var n = !1;
      else {
        if (((e = jt), (jt = null), (Hl = 0), z & 6)) throw Error(E(331));
        var l = z;
        for (z |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            c = i.child;
          if (_.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (_ = u; _ !== null; ) {
                  var f = _;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mn(8, f, i);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (_ = d);
                  else
                    for (; _ !== null; ) {
                      f = _;
                      var p = f.sibling,
                        v = f.return;
                      if ((Td(f), f === u)) {
                        _ = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = v), (_ = p);
                        break;
                      }
                      _ = v;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var g = x.child;
                if (g !== null) {
                  x.child = null;
                  do {
                    var j = g.sibling;
                    (g.sibling = null), (g = j);
                  } while (g !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && c !== null) (c.return = i), (_ = c);
          else
            e: for (; _ !== null; ) {
              if (((i = _), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    mn(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (_ = m);
                break e;
              }
              _ = i.return;
            }
        }
        var h = e.current;
        for (_ = h; _ !== null; ) {
          c = _;
          var y = c.child;
          if (c.subtreeFlags & 2064 && y !== null) (y.return = c), (_ = y);
          else
            e: for (c = h; _ !== null; ) {
              if (((s = _), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mo(9, s);
                  }
                } catch (C) {
                  G(s, s.return, C);
                }
              if (s === c) {
                _ = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), (_ = S);
                break e;
              }
              _ = s.return;
            }
        }
        if (((z = l), At(), Je && typeof Je.onPostCommitFiberRoot == "function"))
          try {
            Je.onPostCommitFiberRoot(oo, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      ($ = r), (Ie.transition = t);
    }
  }
  return !1;
}
function qa(e, t, r) {
  (t = Dr(r, t)), (t = jd(e, t, 1)), (e = Pt(e, t, 1)), (t = he()), e !== null && (An(e, 1, t), Se(e, t));
}
function G(e, t, r) {
  if (e.tag === 3) qa(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        qa(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || (typeof n.componentDidCatch == "function" && (_t === null || !_t.has(n)))) {
          (e = Dr(r, e)), (e = wd(t, e, 1)), (t = Pt(t, e, 1)), (e = he()), t !== null && (An(t, 1, e), Se(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ex(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), (t = he()), (e.pingedLanes |= e.suspendedLanes & r), ne === e && (ce & r) === r && (ee === 4 || (ee === 3 && (ce & 130023424) === ce && 500 > J() - ks) ? Zt(e, 0) : (Ss |= r)), Se(e, t);
}
function Ud(e, t) {
  t === 0 && (e.mode & 1 ? ((t = el), (el <<= 1), !(el & 130023424) && (el = 4194304)) : (t = 1));
  var r = he();
  (e = at(e, t)), e !== null && (An(e, t, r), Se(e, r));
}
function tx(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), Ud(e, r);
}
function rx(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        l = e.memoizedState;
      l !== null && (r = l.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  n !== null && n.delete(t), Ud(e, r);
}
var Bd;
Bd = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || je.current) ge = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (ge = !1), Wh(e, t, r);
      ge = !!(e.flags & 131072);
    }
  else (ge = !1), V && t.flags & 1048576 && Hf(t, Dl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      jl(e, t), (e = t.pendingProps);
      var l = Rr(t, pe.current);
      Pr(t, r), (l = xs(null, t, n, e, l, r));
      var i = ys();
      return (t.flags |= 1), typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), we(n) ? ((i = !0), Il(t)) : (i = !1), (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null), fs(t), (l.updater = fo), (t.stateNode = l), (l._reactInternals = t), fc(t, n, e, r), (t = mc(null, t, n, !0, i, r))) : ((t.tag = 0), V && i && ls(t), me(null, t, l, r), (t = t.child)), t;
    case 16:
      n = t.elementType;
      e: {
        switch ((jl(e, t), (e = t.pendingProps), (l = n._init), (n = l(n._payload)), (t.type = n), (l = t.tag = lx(n)), (e = Fe(n, e)), l)) {
          case 0:
            t = pc(null, t, n, e, r);
            break e;
          case 1:
            t = Wa(null, t, n, e, r);
            break e;
          case 11:
            t = Ua(null, t, n, e, r);
            break e;
          case 14:
            t = Ba(null, t, n, Fe(n.type, e), r);
            break e;
        }
        throw Error(E(306, n, ""));
      }
      return t;
    case 0:
      return (n = t.type), (l = t.pendingProps), (l = t.elementType === n ? l : Fe(n, l)), pc(e, t, n, l, r);
    case 1:
      return (n = t.type), (l = t.pendingProps), (l = t.elementType === n ? l : Fe(n, l)), Wa(e, t, n, l, r);
    case 3:
      e: {
        if ((Cd(t), e === null)) throw Error(E(387));
        (n = t.pendingProps), (i = t.memoizedState), (l = i.element), Yf(e, t), Fl(t, n, null, r);
        var c = t.memoizedState;
        if (((n = c.element), i.isDehydrated))
          if (((i = { element: n, isDehydrated: !1, cache: c.cache, pendingSuspenseBoundaries: c.pendingSuspenseBoundaries, transitions: c.transitions }), (t.updateQueue.baseState = i), (t.memoizedState = i), t.flags & 256)) {
            (l = Dr(Error(E(423)), t)), (t = Va(e, t, n, r, l));
            break e;
          } else if (n !== l) {
            (l = Dr(Error(E(424)), t)), (t = Va(e, t, n, r, l));
            break e;
          } else for (Ee = Nt(t.stateNode.containerInfo.firstChild), Ce = t, V = !0, Ue = null, r = qf(t, null, n, r), t.child = r; r; ) (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Lr(), n === l)) {
            t = ut(e, t, r);
            break e;
          }
          me(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ed(t), e === null && sc(t), (n = t.type), (l = t.pendingProps), (i = e !== null ? e.memoizedProps : null), (c = l.children), nc(n, l) ? (c = null) : i !== null && nc(n, i) && (t.flags |= 32), Ed(e, t), me(e, t, c, r), t.child;
    case 6:
      return e === null && sc(t), null;
    case 13:
      return Nd(e, t, r);
    case 4:
      return ds(t, t.stateNode.containerInfo), (n = t.pendingProps), e === null ? (t.child = Ir(t, null, n, r)) : me(e, t, n, r), t.child;
    case 11:
      return (n = t.type), (l = t.pendingProps), (l = t.elementType === n ? l : Fe(n, l)), Ua(e, t, n, l, r);
    case 7:
      return me(e, t, t.pendingProps, r), t.child;
    case 8:
      return me(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return me(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (((n = t.type._context), (l = t.pendingProps), (i = t.memoizedProps), (c = l.value), A($l, n._currentValue), (n._currentValue = c), i !== null))
          if (He(i.value, c)) {
            if (i.children === l.children && !je.current) {
              t = ut(e, t, r);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                c = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === n) {
                    if (i.tag === 1) {
                      (a = it(-1, r & -r)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null ? (a.next = a) : ((a.next = f.next), (f.next = a)), (u.pending = a);
                      }
                    }
                    (i.lanes |= r), (a = i.alternate), a !== null && (a.lanes |= r), ac(i.return, r, t), (s.lanes |= r);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) c = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((c = i.return), c === null)) throw Error(E(341));
                (c.lanes |= r), (s = c.alternate), s !== null && (s.lanes |= r), ac(c, r, t), (c = i.sibling);
              } else c = i.child;
              if (c !== null) c.return = i;
              else
                for (c = i; c !== null; ) {
                  if (c === t) {
                    c = null;
                    break;
                  }
                  if (((i = c.sibling), i !== null)) {
                    (i.return = c.return), (c = i);
                    break;
                  }
                  c = c.return;
                }
              i = c;
            }
        me(e, t, l.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (l = t.type), (n = t.pendingProps.children), Pr(t, r), (l = ze(l)), (n = n(l)), (t.flags |= 1), me(e, t, n, r), t.child;
    case 14:
      return (n = t.type), (l = Fe(n, t.pendingProps)), (l = Fe(n.type, l)), Ba(e, t, n, l, r);
    case 15:
      return Sd(e, t, t.type, t.pendingProps, r);
    case 17:
      return (n = t.type), (l = t.pendingProps), (l = t.elementType === n ? l : Fe(n, l)), jl(e, t), (t.tag = 1), we(n) ? ((e = !0), Il(t)) : (e = !1), Pr(t, r), Jf(t, n, l), fc(t, n, l, r), mc(null, t, n, !0, e, r);
    case 19:
      return Pd(e, t, r);
    case 22:
      return kd(e, t, r);
  }
  throw Error(E(156, t.tag));
};
function Wd(e, t) {
  return hf(e, t);
}
function nx(e, t, r, n) {
  (this.tag = e), (this.key = r), (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null), (this.index = 0), (this.ref = null), (this.pendingProps = t), (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null), (this.mode = n), (this.subtreeFlags = this.flags = 0), (this.deletions = null), (this.childLanes = this.lanes = 0), (this.alternate = null);
}
function Le(e, t, r, n) {
  return new nx(e, t, r, n);
}
function Ps(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function lx(e) {
  if (typeof e == "function") return Ps(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Qc)) return 11;
    if (e === Kc) return 14;
  }
  return 2;
}
function Ot(e, t) {
  var r = e.alternate;
  return r === null ? ((r = Le(e.tag, t, e.key, e.mode)), (r.elementType = e.elementType), (r.type = e.type), (r.stateNode = e.stateNode), (r.alternate = e), (e.alternate = r)) : ((r.pendingProps = t), (r.type = e.type), (r.flags = 0), (r.subtreeFlags = 0), (r.deletions = null)), (r.flags = e.flags & 14680064), (r.childLanes = e.childLanes), (r.lanes = e.lanes), (r.child = e.child), (r.memoizedProps = e.memoizedProps), (r.memoizedState = e.memoizedState), (r.updateQueue = e.updateQueue), (t = e.dependencies), (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), (r.sibling = e.sibling), (r.index = e.index), (r.ref = e.ref), r;
}
function kl(e, t, r, n, l, i) {
  var c = 2;
  if (((n = e), typeof e == "function")) Ps(e) && (c = 1);
  else if (typeof e == "string") c = 5;
  else
    e: switch (e) {
      case dr:
        return qt(r.children, l, i, t);
      case Hc:
        (c = 8), (l |= 8);
        break;
      case zi:
        return (e = Le(12, r, t, l | 2)), (e.elementType = zi), (e.lanes = i), e;
      case Di:
        return (e = Le(13, r, t, l)), (e.elementType = Di), (e.lanes = i), e;
      case $i:
        return (e = Le(19, r, t, l)), (e.elementType = $i), (e.lanes = i), e;
      case Ju:
        return xo(r, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Yu:
              c = 10;
              break e;
            case Xu:
              c = 9;
              break e;
            case Qc:
              c = 11;
              break e;
            case Kc:
              c = 14;
              break e;
            case mt:
              (c = 16), (n = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (t = Le(c, r, t, l)), (t.elementType = e), (t.type = n), (t.lanes = i), t;
}
function qt(e, t, r, n) {
  return (e = Le(7, e, n, t)), (e.lanes = r), e;
}
function xo(e, t, r, n) {
  return (e = Le(22, e, n, t)), (e.elementType = Ju), (e.lanes = r), (e.stateNode = { isHidden: !1 }), e;
}
function vi(e, t, r) {
  return (e = Le(6, e, null, t)), (e.lanes = r), e;
}
function gi(e, t, r) {
  return (t = Le(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = r), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
}
function ox(e, t, r, n, l) {
  (this.tag = t), (this.containerInfo = e), (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null), (this.timeoutHandle = -1), (this.callbackNode = this.pendingContext = this.context = null), (this.callbackPriority = 0), (this.eventTimes = qo(0)), (this.expirationTimes = qo(-1)), (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0), (this.entanglements = qo(0)), (this.identifierPrefix = n), (this.onRecoverableError = l), (this.mutableSourceEagerHydrationData = null);
}
function _s(e, t, r, n, l, i, c, s, a) {
  return (e = new ox(e, t, r, s, a)), t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0), (i = Le(3, null, null, t)), (e.current = i), (i.stateNode = e), (i.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }), fs(i), e;
}
function ix(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: fr, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function Vd(e) {
  if (!e) return zt;
  e = e._reactInternals;
  e: {
    if (cr(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (we(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (we(r)) return Wf(e, r, t);
  }
  return t;
}
function Hd(e, t, r, n, l, i, c, s, a) {
  return (e = _s(r, n, !0, e, l, i, c, s, a)), (e.context = Vd(null)), (r = e.current), (n = he()), (l = bt(r)), (i = it(n, l)), (i.callback = t ?? null), Pt(r, i, l), (e.current.lanes = l), An(e, l, n), Se(e, n), e;
}
function yo(e, t, r, n) {
  var l = t.current,
    i = he(),
    c = bt(l);
  return (r = Vd(r)), t.context === null ? (t.context = r) : (t.pendingContext = r), (t = it(i, c)), (t.payload = { element: e }), (n = n === void 0 ? null : n), n !== null && (t.callback = n), (e = Pt(l, t, c)), e !== null && (Ve(e, l, c, i), yl(e, l, c)), c;
}
function Kl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function eu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function bs(e, t) {
  eu(e, t), (e = e.alternate) && eu(e, t);
}
function cx() {
  return null;
}
var Qd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Os(e) {
  this._internalRoot = e;
}
vo.prototype.render = Os.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  yo(e, t, null, null);
};
vo.prototype.unmount = Os.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    lr(function () {
      yo(null, e, null, null);
    }),
      (t[st] = null);
  }
};
function vo(e) {
  this._internalRoot = e;
}
vo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Sf();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < xt.length && t !== 0 && t < xt[r].priority; r++);
    xt.splice(r, 0, e), r === 0 && Ef(e);
  }
};
function Ts(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function go(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")));
}
function tu() {}
function sx(e, t, r, n, l) {
  if (l) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var u = Kl(c);
        i.call(u);
      };
    }
    var c = Hd(t, n, e, 0, null, !1, !1, "", tu);
    return (e._reactRootContainer = c), (e[st] = c.current), Cn(e.nodeType === 8 ? e.parentNode : e), lr(), c;
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof n == "function") {
    var s = n;
    n = function () {
      var u = Kl(a);
      s.call(u);
    };
  }
  var a = _s(e, 0, !1, null, null, !1, !1, "", tu);
  return (
    (e._reactRootContainer = a),
    (e[st] = a.current),
    Cn(e.nodeType === 8 ? e.parentNode : e),
    lr(function () {
      yo(t, a, r, n);
    }),
    a
  );
}
function jo(e, t, r, n, l) {
  var i = r._reactRootContainer;
  if (i) {
    var c = i;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var a = Kl(c);
        s.call(a);
      };
    }
    yo(t, c, e, l);
  } else c = sx(r, t, e, l, n);
  return Kl(c);
}
jf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = ln(t.pendingLanes);
        r !== 0 && (Xc(t, r | 1), Se(t, J()), !(z & 6) && (($r = J() + 500), At()));
      }
      break;
    case 13:
      lr(function () {
        var n = at(e, 1);
        if (n !== null) {
          var l = he();
          Ve(n, e, 1, l);
        }
      }),
        bs(e, 1);
  }
};
Jc = function (e) {
  if (e.tag === 13) {
    var t = at(e, 134217728);
    if (t !== null) {
      var r = he();
      Ve(t, e, 134217728, r);
    }
    bs(e, 134217728);
  }
};
wf = function (e) {
  if (e.tag === 13) {
    var t = bt(e),
      r = at(e, t);
    if (r !== null) {
      var n = he();
      Ve(r, e, t, n);
    }
    bs(e, t);
  }
};
Sf = function () {
  return $;
};
kf = function (e, t) {
  var r = $;
  try {
    return ($ = e), t();
  } finally {
    $ = r;
  }
};
Ki = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Ai(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var l = ao(n);
            if (!l) throw Error(E(90));
            qu(n), Ai(n, l);
          }
        }
      }
      break;
    case "textarea":
      tf(e, r);
      break;
    case "select":
      (t = r.value), t != null && kr(e, !!r.multiple, t, !1);
  }
};
af = Es;
uf = lr;
var ax = { usingClientEntryPoint: !1, Events: [Bn, xr, ao, cf, sf, Es] },
  en = { findFiberByHostInstance: Yt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
  ux = {
    bundleType: en.bundleType,
    version: en.version,
    rendererPackageName: en.rendererPackageName,
    rendererConfig: en.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = pf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: en.findFiberByHostInstance || cx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fl.isDisabled && fl.supportsFiber)
    try {
      (oo = fl.inject(ux)), (Je = fl);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ax;
_e.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ts(t)) throw Error(E(200));
  return ix(e, t, null, r);
};
_e.createRoot = function (e, t) {
  if (!Ts(e)) throw Error(E(299));
  var r = !1,
    n = "",
    l = Qd;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), (t = _s(e, 1, !1, null, null, r, !1, n, l)), (e[st] = t.current), Cn(e.nodeType === 8 ? e.parentNode : e), new Os(t);
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(E(188)) : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = pf(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return lr(e);
};
_e.hydrate = function (e, t, r) {
  if (!go(t)) throw Error(E(200));
  return jo(null, e, t, !0, r);
};
_e.hydrateRoot = function (e, t, r) {
  if (!Ts(e)) throw Error(E(405));
  var n = (r != null && r.hydratedSources) || null,
    l = !1,
    i = "",
    c = Qd;
  if ((r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (i = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), (t = Hd(t, null, e, 1, r ?? null, l, !1, i, c)), (e[st] = t.current), Cn(e), n)) for (e = 0; e < n.length; e++) (r = n[e]), (l = r._getVersion), (l = l(r._source)), t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [r, l]) : t.mutableSourceEagerHydrationData.push(r, l);
  return new vo(t);
};
_e.render = function (e, t, r) {
  if (!go(t)) throw Error(E(200));
  return jo(null, e, t, !1, r);
};
_e.unmountComponentAtNode = function (e) {
  if (!go(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (lr(function () {
        jo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[st] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = Es;
_e.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!go(r)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return jo(e, t, r, !1, n);
};
_e.version = "18.2.0-next-9e3b772b8-20220608";
function Kd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kd);
    } catch (e) {
      console.error(e);
    }
}
Kd(), (Vu.exports = _e);
var Gd = Vu.exports,
  ru = Gd;
(Li.createRoot = ru.createRoot), (Li.hydrateRoot = ru.hydrateRoot);
/**
 * @remix-run/router v1.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function In() {
  return (
    (In = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    In.apply(this, arguments)
  );
}
var wt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(wt || (wt = {}));
const nu = "popstate";
function fx(e) {
  e === void 0 && (e = {});
  function t(n, l) {
    let { pathname: i, search: c, hash: s } = n.location;
    return Nc("", { pathname: i, search: c, hash: s }, (l.state && l.state.usr) || null, (l.state && l.state.key) || "default");
  }
  function r(n, l) {
    return typeof l == "string" ? l : Gl(l);
  }
  return px(t, r, null, e);
}
function Y(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Rs(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function dx() {
  return Math.random().toString(36).substr(2, 8);
}
function lu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Nc(e, t, r, n) {
  return r === void 0 && (r = null), In({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? Wr(t) : t, { state: r, key: (t && t.key) || n || dx() });
}
function Gl(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t;
}
function Wr(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))), e && (t.pathname = e);
  }
  return t;
}
function px(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = n,
    c = l.history,
    s = wt.Pop,
    a = null,
    u = f();
  u == null && ((u = 0), c.replaceState(In({}, c.state, { idx: u }), ""));
  function f() {
    return (c.state || { idx: null }).idx;
  }
  function d() {
    s = wt.Pop;
    let j = f(),
      m = j == null ? null : j - u;
    (u = j), a && a({ action: s, location: g.location, delta: m });
  }
  function p(j, m) {
    s = wt.Push;
    let h = Nc(g.location, j, m);
    r && r(h, j), (u = f() + 1);
    let y = lu(h, u),
      S = g.createHref(h);
    try {
      c.pushState(y, "", S);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      l.location.assign(S);
    }
    i && a && a({ action: s, location: g.location, delta: 1 });
  }
  function v(j, m) {
    s = wt.Replace;
    let h = Nc(g.location, j, m);
    r && r(h, j), (u = f());
    let y = lu(h, u),
      S = g.createHref(h);
    c.replaceState(y, "", S), i && a && a({ action: s, location: g.location, delta: 0 });
  }
  function x(j) {
    let m = l.location.origin !== "null" ? l.location.origin : l.location.href,
      h = typeof j == "string" ? j : Gl(j);
    return Y(m, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, m);
  }
  let g = {
    get action() {
      return s;
    },
    get location() {
      return e(l, c);
    },
    listen(j) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(nu, d),
        (a = j),
        () => {
          l.removeEventListener(nu, d), (a = null);
        }
      );
    },
    createHref(j) {
      return t(l, j);
    },
    createURL: x,
    encodeLocation(j) {
      let m = x(j);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: p,
    replace: v,
    go(j) {
      return c.go(j);
    },
  };
  return g;
}
var ou;
(function (e) {
  (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(ou || (ou = {}));
function mx(e, t, r) {
  r === void 0 && (r = "/");
  let n = typeof t == "string" ? Wr(t) : t,
    l = zn(n.pathname || "/", r);
  if (l == null) return null;
  let i = Yd(e);
  hx(i);
  let c = null;
  for (let s = 0; c == null && s < i.length; ++s) c = Ex(i[s], Nx(l));
  return c;
}
function Yd(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let l = (i, c, s) => {
    let a = { relativePath: s === void 0 ? i.path || "" : s, caseSensitive: i.caseSensitive === !0, childrenIndex: c, route: i };
    a.relativePath.startsWith("/") && (Y(a.relativePath.startsWith(n), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), (a.relativePath = a.relativePath.slice(n.length)));
    let u = Tt([n, a.relativePath]),
      f = r.concat(a);
    i.children && i.children.length > 0 && (Y(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), Yd(i.children, t, f, u)), !(i.path == null && !i.index) && t.push({ path: u, score: Sx(u, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, c) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) l(i, c);
      else for (let a of Xd(i.path)) l(i, c, a);
    }),
    t
  );
}
function Xd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    l = r.endsWith("?"),
    i = r.replace(/\?$/, "");
  if (n.length === 0) return l ? [i, ""] : [i];
  let c = Xd(n.join("/")),
    s = [];
  return s.push(...c.map((a) => (a === "" ? i : [i, a].join("/")))), l && s.push(...c), s.map((a) => (e.startsWith("/") && a === "" ? "/" : a));
}
function hx(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : kx(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const xx = /^:\w+$/,
  yx = 3,
  vx = 2,
  gx = 1,
  jx = 10,
  wx = -2,
  iu = (e) => e === "*";
function Sx(e, t) {
  let r = e.split("/"),
    n = r.length;
  return r.some(iu) && (n += wx), t && (n += vx), r.filter((l) => !iu(l)).reduce((l, i) => l + (xx.test(i) ? yx : i === "" ? gx : jx), n);
}
function kx(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, l) => n === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function Ex(e, t) {
  let { routesMeta: r } = e,
    n = {},
    l = "/",
    i = [];
  for (let c = 0; c < r.length; ++c) {
    let s = r[c],
      a = c === r.length - 1,
      u = l === "/" ? t : t.slice(l.length) || "/",
      f = Pc({ path: s.relativePath, caseSensitive: s.caseSensitive, end: a }, u);
    if (!f) return null;
    Object.assign(n, f.params);
    let d = s.route;
    i.push({ params: n, pathname: Tt([l, f.pathname]), pathnameBase: Ox(Tt([l, f.pathnameBase])), route: d }), f.pathnameBase !== "/" && (l = Tt([l, f.pathnameBase]));
  }
  return i;
}
function Pc(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = Cx(e.path, e.caseSensitive, e.end),
    l = t.match(r);
  if (!l) return null;
  let i = l[0],
    c = i.replace(/(.)\/+$/, "$1"),
    s = l.slice(1);
  return {
    params: n.reduce((u, f, d) => {
      let { paramName: p, isOptional: v } = f;
      if (p === "*") {
        let g = s[d] || "";
        c = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const x = s[d];
      return v && !x ? (u[p] = void 0) : (u[p] = Px(x || "", p)), u;
    }, {}),
    pathname: i,
    pathnameBase: c,
    pattern: e,
  };
}
function Cx(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), Rs(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let n = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)(\?)?/g, (c, s, a) => (n.push({ paramName: s, isOptional: a != null }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (n.push({ paramName: "*" }), (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$")) : r ? (l += "\\/*$") : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), n];
}
function Nx(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return Rs(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function Px(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (r) {
    return Rs(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + r + ").")), e;
  }
}
function zn(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function _x(e, t) {
  t === void 0 && (t = "/");
  let { pathname: r, search: n = "", hash: l = "" } = typeof e == "string" ? Wr(e) : e;
  return { pathname: r ? (r.startsWith("/") ? r : bx(r, t)) : t, search: Tx(n), hash: Rx(l) };
}
function bx(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? r.length > 1 && r.pop() : l !== "." && r.push(l);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function ji(e, t, r, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Jd(e) {
  return e.filter((t, r) => r === 0 || (t.route.path && t.route.path.length > 0));
}
function Zd(e, t, r, n) {
  n === void 0 && (n = !1);
  let l;
  typeof e == "string" ? (l = Wr(e)) : ((l = In({}, e)), Y(!l.pathname || !l.pathname.includes("?"), ji("?", "pathname", "search", l)), Y(!l.pathname || !l.pathname.includes("#"), ji("#", "pathname", "hash", l)), Y(!l.search || !l.search.includes("#"), ji("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    c = i ? "/" : l.pathname,
    s;
  if (c == null) s = r;
  else if (n) {
    let d = t[t.length - 1].replace(/^\//, "").split("/");
    if (c.startsWith("..")) {
      let p = c.split("/");
      for (; p[0] === ".."; ) p.shift(), d.pop();
      l.pathname = p.join("/");
    }
    s = "/" + d.join("/");
  } else {
    let d = t.length - 1;
    if (c.startsWith("..")) {
      let p = c.split("/");
      for (; p[0] === ".."; ) p.shift(), (d -= 1);
      l.pathname = p.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let a = _x(l, s),
    u = c && c !== "/" && c.endsWith("/"),
    f = (i || c === ".") && r.endsWith("/");
  return !a.pathname.endsWith("/") && (u || f) && (a.pathname += "/"), a;
}
const Tt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Ox = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Tx = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Rx = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Lx(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const qd = ["post", "put", "patch", "delete"];
new Set(qd);
const Ix = ["get", ...qd];
new Set(Ix);
/**
 * React Router v6.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yl() {
  return (
    (Yl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Yl.apply(this, arguments)
  );
}
const wo = w.createContext(null),
  ep = w.createContext(null),
  sr = w.createContext(null),
  So = w.createContext(null),
  Ut = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  tp = w.createContext(null);
function zx(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  Vn() || Y(!1);
  let { basename: n, navigator: l } = w.useContext(sr),
    { hash: i, pathname: c, search: s } = ko(e, { relative: r }),
    a = c;
  return n !== "/" && (a = c === "/" ? n : Tt([n, c])), l.createHref({ pathname: a, search: s, hash: i });
}
function Vn() {
  return w.useContext(So) != null;
}
function Hn() {
  return Vn() || Y(!1), w.useContext(So).location;
}
function rp(e) {
  w.useContext(sr).static || w.useLayoutEffect(e);
}
function et() {
  let { isDataRoute: e } = w.useContext(Ut);
  return e ? Gx() : Dx();
}
function Dx() {
  Vn() || Y(!1);
  let e = w.useContext(wo),
    { basename: t, navigator: r } = w.useContext(sr),
    { matches: n } = w.useContext(Ut),
    { pathname: l } = Hn(),
    i = JSON.stringify(Jd(n).map((a) => a.pathnameBase)),
    c = w.useRef(!1);
  return (
    rp(() => {
      c.current = !0;
    }),
    w.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !c.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let f = Zd(a, JSON.parse(i), l, u.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Tt([t, f.pathname])), (u.replace ? r.replace : r.push)(f, u.state, u);
      },
      [t, r, i, l, e]
    )
  );
}
function Ls() {
  let { matches: e } = w.useContext(Ut),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function ko(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { matches: n } = w.useContext(Ut),
    { pathname: l } = Hn(),
    i = JSON.stringify(Jd(n).map((c, s) => (s === n.length - 1 ? c.pathname : c.pathnameBase)));
  return w.useMemo(() => Zd(e, JSON.parse(i), l, r === "path"), [e, i, l, r]);
}
function $x(e, t) {
  return Mx(e, t);
}
function Mx(e, t, r) {
  Vn() || Y(!1);
  let { navigator: n } = w.useContext(sr),
    { matches: l } = w.useContext(Ut),
    i = l[l.length - 1],
    c = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : "/";
  i && i.route;
  let a = Hn(),
    u;
  if (t) {
    var f;
    let g = typeof t == "string" ? Wr(t) : t;
    s === "/" || ((f = g.pathname) != null && f.startsWith(s)) || Y(!1), (u = g);
  } else u = a;
  let d = u.pathname || "/",
    p = s === "/" ? d : d.slice(s.length) || "/",
    v = mx(e, { pathname: p }),
    x = Wx(v && v.map((g) => Object.assign({}, g, { params: Object.assign({}, c, g.params), pathname: Tt([s, n.encodeLocation ? n.encodeLocation(g.pathname).pathname : g.pathname]), pathnameBase: g.pathnameBase === "/" ? s : Tt([s, n.encodeLocation ? n.encodeLocation(g.pathnameBase).pathname : g.pathnameBase]) })), l, r);
  return t && x ? w.createElement(So.Provider, { value: { location: Yl({ pathname: "/", search: "", hash: "", state: null, key: "default" }, u), navigationType: wt.Pop } }, x) : x;
}
function Fx() {
  let e = Kx(),
    t = Lx(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? w.createElement("pre", { style: l }, r) : null, i);
}
const Ax = w.createElement(Fx, null);
class Ux extends w.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location || (r.revalidation !== "idle" && t.revalidation === "idle") ? { error: t.error, location: t.location, revalidation: t.revalidation } : { error: t.error || r.error, location: r.location, revalidation: t.revalidation || r.revalidation };
  }
  componentDidCatch(t, r) {
    console.error("React Router caught the following error during render", t, r);
  }
  render() {
    return this.state.error ? w.createElement(Ut.Provider, { value: this.props.routeContext }, w.createElement(tp.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
  }
}
function Bx(e) {
  let { routeContext: t, match: r, children: n } = e,
    l = w.useContext(wo);
  return l && l.static && l.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = r.route.id), w.createElement(Ut.Provider, { value: t }, n);
}
function Wx(e, t, r) {
  var n;
  if ((t === void 0 && (t = []), r === void 0 && (r = null), e == null)) {
    var l;
    if ((l = r) != null && l.errors) e = r.matches;
    else return null;
  }
  let i = e,
    c = (n = r) == null ? void 0 : n.errors;
  if (c != null) {
    let s = i.findIndex((a) => a.route.id && (c == null ? void 0 : c[a.route.id]));
    s >= 0 || Y(!1), (i = i.slice(0, Math.min(i.length, s + 1)));
  }
  return i.reduceRight((s, a, u) => {
    let f = a.route.id ? (c == null ? void 0 : c[a.route.id]) : null,
      d = null;
    r && (d = a.route.errorElement || Ax);
    let p = t.concat(i.slice(0, u + 1)),
      v = () => {
        let x;
        return f ? (x = d) : a.route.Component ? (x = w.createElement(a.route.Component, null)) : a.route.element ? (x = a.route.element) : (x = s), w.createElement(Bx, { match: a, routeContext: { outlet: s, matches: p, isDataRoute: r != null }, children: x });
      };
    return r && (a.route.ErrorBoundary || a.route.errorElement || u === 0) ? w.createElement(Ux, { location: r.location, revalidation: r.revalidation, component: d, error: f, children: v(), routeContext: { outlet: null, matches: p, isDataRoute: !0 } }) : v();
  }, null);
}
var np = (function (e) {
    return (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator"), (e.UseNavigateStable = "useNavigate"), e;
  })(np || {}),
  Xl = (function (e) {
    return (e.UseBlocker = "useBlocker"), (e.UseLoaderData = "useLoaderData"), (e.UseActionData = "useActionData"), (e.UseRouteError = "useRouteError"), (e.UseNavigation = "useNavigation"), (e.UseRouteLoaderData = "useRouteLoaderData"), (e.UseMatches = "useMatches"), (e.UseRevalidator = "useRevalidator"), (e.UseNavigateStable = "useNavigate"), (e.UseRouteId = "useRouteId"), e;
  })(Xl || {});
function Vx(e) {
  let t = w.useContext(wo);
  return t || Y(!1), t;
}
function Hx(e) {
  let t = w.useContext(ep);
  return t || Y(!1), t;
}
function Qx(e) {
  let t = w.useContext(Ut);
  return t || Y(!1), t;
}
function lp(e) {
  let t = Qx(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || Y(!1), r.route.id;
}
function Kx() {
  var e;
  let t = w.useContext(tp),
    r = Hx(Xl.UseRouteError),
    n = lp(Xl.UseRouteError);
  return t || ((e = r.errors) == null ? void 0 : e[n]);
}
function Gx() {
  let { router: e } = Vx(np.UseNavigateStable),
    t = lp(Xl.UseNavigateStable),
    r = w.useRef(!1);
  return (
    rp(() => {
      r.current = !0;
    }),
    w.useCallback(
      function (l, i) {
        i === void 0 && (i = {}), r.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, Yl({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function Ke(e) {
  Y(!1);
}
function Yx(e) {
  let { basename: t = "/", children: r = null, location: n, navigationType: l = wt.Pop, navigator: i, static: c = !1 } = e;
  Vn() && Y(!1);
  let s = t.replace(/^\/*/, "/"),
    a = w.useMemo(() => ({ basename: s, navigator: i, static: c }), [s, i, c]);
  typeof n == "string" && (n = Wr(n));
  let { pathname: u = "/", search: f = "", hash: d = "", state: p = null, key: v = "default" } = n,
    x = w.useMemo(() => {
      let g = zn(u, s);
      return g == null ? null : { location: { pathname: g, search: f, hash: d, state: p, key: v }, navigationType: l };
    }, [s, u, f, d, p, v, l]);
  return x == null ? null : w.createElement(sr.Provider, { value: a }, w.createElement(So.Provider, { children: r, value: x }));
}
function Xx(e) {
  let { children: t, location: r } = e;
  return $x(_c(t), r);
}
new Promise(() => {});
function _c(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    w.Children.forEach(e, (n, l) => {
      if (!w.isValidElement(n)) return;
      let i = [...t, l];
      if (n.type === w.Fragment) {
        r.push.apply(r, _c(n.props.children, i));
        return;
      }
      n.type !== Ke && Y(!1), !n.props.index || !n.props.children || Y(!1);
      let c = { id: n.props.id || i.join("-"), caseSensitive: n.props.caseSensitive, element: n.props.element, Component: n.props.Component, index: n.props.index, path: n.props.path, loader: n.props.loader, action: n.props.action, errorElement: n.props.errorElement, ErrorBoundary: n.props.ErrorBoundary, hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null, shouldRevalidate: n.props.shouldRevalidate, handle: n.props.handle, lazy: n.props.lazy };
      n.props.children && (c.children = _c(n.props.children, i)), r.push(c);
    }),
    r
  );
}
/**
 * React Router DOM v6.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Jl() {
  return (
    (Jl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Jl.apply(this, arguments)
  );
}
function op(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    l,
    i;
  for (i = 0; i < n.length; i++) (l = n[i]), !(t.indexOf(l) >= 0) && (r[l] = e[l]);
  return r;
}
function Jx(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Zx(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Jx(e);
}
const qx = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
  ey = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
  ty = w.createContext({ isTransitioning: !1 }),
  ry = "startTransition",
  cu = tm[ry];
function ny(e) {
  let { basename: t, children: r, future: n, window: l } = e,
    i = w.useRef();
  i.current == null && (i.current = fx({ window: l, v5Compat: !0 }));
  let c = i.current,
    [s, a] = w.useState({ action: c.action, location: c.location }),
    { v7_startTransition: u } = n || {},
    f = w.useCallback(
      (d) => {
        u && cu ? cu(() => a(d)) : a(d);
      },
      [a, u]
    );
  return w.useLayoutEffect(() => c.listen(f), [c, f]), w.createElement(Yx, { basename: t, children: r, location: s.location, navigationType: s.action, navigator: c });
}
const ly = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  oy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  iy = w.forwardRef(function (t, r) {
    let { onClick: n, relative: l, reloadDocument: i, replace: c, state: s, target: a, to: u, preventScrollReset: f, unstable_viewTransition: d } = t,
      p = op(t, qx),
      { basename: v } = w.useContext(sr),
      x,
      g = !1;
    if (typeof u == "string" && oy.test(u) && ((x = u), ly))
      try {
        let y = new URL(window.location.href),
          S = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
          C = zn(S.pathname, v);
        S.origin === y.origin && C != null ? (u = C + S.search + S.hash) : (g = !0);
      } catch {}
    let j = zx(u, { relative: l }),
      m = sy(u, { replace: c, state: s, target: a, preventScrollReset: f, relative: l, unstable_viewTransition: d });
    function h(y) {
      n && n(y), y.defaultPrevented || m(y);
    }
    return w.createElement("a", Jl({}, p, { href: x || j, onClick: g || i ? n : h, ref: r, target: a }));
  }),
  Ge = w.forwardRef(function (t, r) {
    let { "aria-current": n = "page", caseSensitive: l = !1, className: i = "", end: c = !1, style: s, to: a, unstable_viewTransition: u, children: f } = t,
      d = op(t, ey),
      p = ko(a, { relative: d.relative }),
      v = Hn(),
      x = w.useContext(ep),
      { navigator: g } = w.useContext(sr),
      j = x != null && ay(p) && u === !0,
      m = g.encodeLocation ? g.encodeLocation(p).pathname : p.pathname,
      h = v.pathname,
      y = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
    l || ((h = h.toLowerCase()), (y = y ? y.toLowerCase() : null), (m = m.toLowerCase()));
    const S = m !== "/" && m.endsWith("/") ? m.length - 1 : m.length;
    let C = h === m || (!c && h.startsWith(m) && h.charAt(S) === "/"),
      P = y != null && (y === m || (!c && y.startsWith(m) && y.charAt(m.length) === "/")),
      N = { isActive: C, isPending: P, isTransitioning: j },
      O = C ? n : void 0,
      D;
    typeof i == "function" ? (D = i(N)) : (D = [i, C ? "active" : null, P ? "pending" : null, j ? "transitioning" : null].filter(Boolean).join(" "));
    let T = typeof s == "function" ? s(N) : s;
    return w.createElement(iy, Jl({}, d, { "aria-current": O, className: D, ref: r, style: T, to: a, unstable_viewTransition: u }), typeof f == "function" ? f(N) : f);
  });
var bc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"), (e.UseSubmit = "useSubmit"), (e.UseSubmitFetcher = "useSubmitFetcher"), (e.UseFetcher = "useFetcher"), (e.useViewTransitionState = "useViewTransitionState");
})(bc || (bc = {}));
var su;
(function (e) {
  (e.UseFetcher = "useFetcher"), (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(su || (su = {}));
function cy(e) {
  let t = w.useContext(wo);
  return t || Y(!1), t;
}
function sy(e, t) {
  let { target: r, replace: n, state: l, preventScrollReset: i, relative: c, unstable_viewTransition: s } = t === void 0 ? {} : t,
    a = et(),
    u = Hn(),
    f = ko(e, { relative: c });
  return w.useCallback(
    (d) => {
      if (Zx(d, r)) {
        d.preventDefault();
        let p = n !== void 0 ? n : Gl(u) === Gl(f);
        a(e, { replace: p, state: l, preventScrollReset: i, relative: c, unstable_viewTransition: s });
      }
    },
    [u, a, f, n, l, r, e, i, c, s]
  );
}
function ay(e, t) {
  t === void 0 && (t = {});
  let r = w.useContext(ty);
  r == null && Y(!1);
  let { basename: n } = cy(bc.useViewTransitionState),
    l = ko(e, { relative: t.relative });
  if (!r.isTransitioning) return !1;
  let i = zn(r.currentLocation.pathname, n) || r.currentLocation.pathname,
    c = zn(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return Pc(l.pathname, c) != null || Pc(l.pathname, i) != null;
}
const tn = ({ children: e }) => o.jsx("li", { className: "cursor-pointer hover:underline  transition-all  underline-offset-4 decoration-emerald-500 p-2.5 min-w-[123px] px-4 space-x-2.5 text-black text-base font-medium ", children: e }),
  ur = ({ text: e, color: t, hoverBG: r }) => o.jsx("button", { className: `h-11 p-2.5 cursor-pointer transition duration-200   ease ${r === "emerald" ? "hover:text-white border hover:border-white hover:bg-emerald-500" : "hover:text-emerald-500 hover:bg-white hover:border hover:border-emerald-500"}   ${t === "emerald" ? "text-white bg-emerald-500" : "text-black border border-emerald-500"} rounded-10px rounded min-w-[93px]  mx-2 text-base font-medium `, children: e }),
  Oc = ({ text: e, color: t, hoverBG: r }) => o.jsx("button", { className: `h-11 p-2.5 cursor-pointer transition duration-200   ease ${r === "orange" ? "hover:text-white border hover:border-white hover:bg-orange-500" : "hover:text-orange-500 hover:bg-white hover:border hover:border-orange-500"}   ${t === "orange" ? "text-white bg-orange-500" : "text-black border border-orange-500"} rounded-10px rounded min-w-[93px]  mx-2 text-base font-medium `, children: e });
var ip = { exports: {} },
  cp = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mr = w;
function uy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var fy = typeof Object.is == "function" ? Object.is : uy,
  dy = Mr.useState,
  py = Mr.useEffect,
  my = Mr.useLayoutEffect,
  hy = Mr.useDebugValue;
function xy(e, t) {
  var r = t(),
    n = dy({ inst: { value: r, getSnapshot: t } }),
    l = n[0].inst,
    i = n[1];
  return (
    my(
      function () {
        (l.value = r), (l.getSnapshot = t), wi(l) && i({ inst: l });
      },
      [e, r, t]
    ),
    py(
      function () {
        return (
          wi(l) && i({ inst: l }),
          e(function () {
            wi(l) && i({ inst: l });
          })
        );
      },
      [e]
    ),
    hy(r),
    r
  );
}
function wi(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !fy(e, r);
  } catch {
    return !0;
  }
}
function yy(e, t) {
  return t();
}
var vy = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? yy : xy;
cp.useSyncExternalStore = Mr.useSyncExternalStore !== void 0 ? Mr.useSyncExternalStore : vy;
ip.exports = cp;
var gy = ip.exports,
  sp = { exports: {} },
  ap = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eo = w,
  jy = gy;
function wy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Sy = typeof Object.is == "function" ? Object.is : wy,
  ky = jy.useSyncExternalStore,
  Ey = Eo.useRef,
  Cy = Eo.useEffect,
  Ny = Eo.useMemo,
  Py = Eo.useDebugValue;
ap.useSyncExternalStoreWithSelector = function (e, t, r, n, l) {
  var i = Ey(null);
  if (i.current === null) {
    var c = { hasValue: !1, value: null };
    i.current = c;
  } else c = i.current;
  i = Ny(
    function () {
      function a(v) {
        if (!u) {
          if (((u = !0), (f = v), (v = n(v)), l !== void 0 && c.hasValue)) {
            var x = c.value;
            if (l(x, v)) return (d = x);
          }
          return (d = v);
        }
        if (((x = d), Sy(f, v))) return x;
        var g = n(v);
        return l !== void 0 && l(x, g) ? x : ((f = v), (d = g));
      }
      var u = !1,
        f,
        d,
        p = r === void 0 ? null : r;
      return [
        function () {
          return a(t());
        },
        p === null
          ? void 0
          : function () {
              return a(p());
            },
      ];
    },
    [t, r, n, l]
  );
  var s = ky(e, i[0], i[1]);
  return (
    Cy(
      function () {
        (c.hasValue = !0), (c.value = s);
      },
      [s]
    ),
    Py(s),
    s
  );
};
sp.exports = ap;
var _y = sp.exports;
function by(e) {
  e();
}
let up = by;
const Oy = (e) => (up = e),
  Ty = () => up,
  au = Symbol.for("react-redux-context"),
  uu = typeof globalThis < "u" ? globalThis : {};
function Ry() {
  var e;
  if (!w.createContext) return {};
  const t = (e = uu[au]) != null ? e : (uu[au] = new Map());
  let r = t.get(w.createContext);
  return r || ((r = w.createContext(null)), t.set(w.createContext, r)), r;
}
const Dt = Ry();
function Is(e = Dt) {
  return function () {
    return w.useContext(e);
  };
}
const fp = Is(),
  Ly = () => {
    throw new Error("uSES not initialized!");
  };
let dp = Ly;
const Iy = (e) => {
    dp = e;
  },
  zy = (e, t) => e === t;
function Dy(e = Dt) {
  const t = e === Dt ? fp : Is(e);
  return function (n, l = {}) {
    const { equalityFn: i = zy, stabilityCheck: c = void 0, noopCheck: s = void 0 } = typeof l == "function" ? { equalityFn: l } : l,
      { store: a, subscription: u, getServerState: f, stabilityCheck: d, noopCheck: p } = t();
    w.useRef(!0);
    const v = w.useCallback(
        {
          [n.name](g) {
            return n(g);
          },
        }[n.name],
        [n, d, c]
      ),
      x = dp(u.addNestedSub, a.getState, f || a.getState, v, i);
    return w.useDebugValue(x), x;
  };
}
const tt = Dy();
var pp = { exports: {} },
  M = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var le = typeof Symbol == "function" && Symbol.for,
  zs = le ? Symbol.for("react.element") : 60103,
  Ds = le ? Symbol.for("react.portal") : 60106,
  Co = le ? Symbol.for("react.fragment") : 60107,
  No = le ? Symbol.for("react.strict_mode") : 60108,
  Po = le ? Symbol.for("react.profiler") : 60114,
  _o = le ? Symbol.for("react.provider") : 60109,
  bo = le ? Symbol.for("react.context") : 60110,
  $s = le ? Symbol.for("react.async_mode") : 60111,
  Oo = le ? Symbol.for("react.concurrent_mode") : 60111,
  To = le ? Symbol.for("react.forward_ref") : 60112,
  Ro = le ? Symbol.for("react.suspense") : 60113,
  $y = le ? Symbol.for("react.suspense_list") : 60120,
  Lo = le ? Symbol.for("react.memo") : 60115,
  Io = le ? Symbol.for("react.lazy") : 60116,
  My = le ? Symbol.for("react.block") : 60121,
  Fy = le ? Symbol.for("react.fundamental") : 60117,
  Ay = le ? Symbol.for("react.responder") : 60118,
  Uy = le ? Symbol.for("react.scope") : 60119;
function Oe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case zs:
        switch (((e = e.type), e)) {
          case $s:
          case Oo:
          case Co:
          case Po:
          case No:
          case Ro:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case bo:
              case To:
              case Io:
              case Lo:
              case _o:
                return e;
              default:
                return t;
            }
        }
      case Ds:
        return t;
    }
  }
}
function mp(e) {
  return Oe(e) === Oo;
}
M.AsyncMode = $s;
M.ConcurrentMode = Oo;
M.ContextConsumer = bo;
M.ContextProvider = _o;
M.Element = zs;
M.ForwardRef = To;
M.Fragment = Co;
M.Lazy = Io;
M.Memo = Lo;
M.Portal = Ds;
M.Profiler = Po;
M.StrictMode = No;
M.Suspense = Ro;
M.isAsyncMode = function (e) {
  return mp(e) || Oe(e) === $s;
};
M.isConcurrentMode = mp;
M.isContextConsumer = function (e) {
  return Oe(e) === bo;
};
M.isContextProvider = function (e) {
  return Oe(e) === _o;
};
M.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === zs;
};
M.isForwardRef = function (e) {
  return Oe(e) === To;
};
M.isFragment = function (e) {
  return Oe(e) === Co;
};
M.isLazy = function (e) {
  return Oe(e) === Io;
};
M.isMemo = function (e) {
  return Oe(e) === Lo;
};
M.isPortal = function (e) {
  return Oe(e) === Ds;
};
M.isProfiler = function (e) {
  return Oe(e) === Po;
};
M.isStrictMode = function (e) {
  return Oe(e) === No;
};
M.isSuspense = function (e) {
  return Oe(e) === Ro;
};
M.isValidElementType = function (e) {
  return typeof e == "string" || typeof e == "function" || e === Co || e === Oo || e === Po || e === No || e === Ro || e === $y || (typeof e == "object" && e !== null && (e.$$typeof === Io || e.$$typeof === Lo || e.$$typeof === _o || e.$$typeof === bo || e.$$typeof === To || e.$$typeof === Fy || e.$$typeof === Ay || e.$$typeof === Uy || e.$$typeof === My));
};
M.typeOf = Oe;
pp.exports = M;
var By = pp.exports,
  hp = By,
  Wy = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  Vy = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  xp = {};
xp[hp.ForwardRef] = Wy;
xp[hp.Memo] = Vy;
var F = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ms = Symbol.for("react.element"),
  Fs = Symbol.for("react.portal"),
  zo = Symbol.for("react.fragment"),
  Do = Symbol.for("react.strict_mode"),
  $o = Symbol.for("react.profiler"),
  Mo = Symbol.for("react.provider"),
  Fo = Symbol.for("react.context"),
  Hy = Symbol.for("react.server_context"),
  Ao = Symbol.for("react.forward_ref"),
  Uo = Symbol.for("react.suspense"),
  Bo = Symbol.for("react.suspense_list"),
  Wo = Symbol.for("react.memo"),
  Vo = Symbol.for("react.lazy"),
  Qy = Symbol.for("react.offscreen"),
  yp;
yp = Symbol.for("react.module.reference");
function $e(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ms:
        switch (((e = e.type), e)) {
          case zo:
          case $o:
          case Do:
          case Uo:
          case Bo:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Hy:
              case Fo:
              case Ao:
              case Vo:
              case Wo:
              case Mo:
                return e;
              default:
                return t;
            }
        }
      case Fs:
        return t;
    }
  }
}
F.ContextConsumer = Fo;
F.ContextProvider = Mo;
F.Element = Ms;
F.ForwardRef = Ao;
F.Fragment = zo;
F.Lazy = Vo;
F.Memo = Wo;
F.Portal = Fs;
F.Profiler = $o;
F.StrictMode = Do;
F.Suspense = Uo;
F.SuspenseList = Bo;
F.isAsyncMode = function () {
  return !1;
};
F.isConcurrentMode = function () {
  return !1;
};
F.isContextConsumer = function (e) {
  return $e(e) === Fo;
};
F.isContextProvider = function (e) {
  return $e(e) === Mo;
};
F.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ms;
};
F.isForwardRef = function (e) {
  return $e(e) === Ao;
};
F.isFragment = function (e) {
  return $e(e) === zo;
};
F.isLazy = function (e) {
  return $e(e) === Vo;
};
F.isMemo = function (e) {
  return $e(e) === Wo;
};
F.isPortal = function (e) {
  return $e(e) === Fs;
};
F.isProfiler = function (e) {
  return $e(e) === $o;
};
F.isStrictMode = function (e) {
  return $e(e) === Do;
};
F.isSuspense = function (e) {
  return $e(e) === Uo;
};
F.isSuspenseList = function (e) {
  return $e(e) === Bo;
};
F.isValidElementType = function (e) {
  return typeof e == "string" || typeof e == "function" || e === zo || e === $o || e === Do || e === Uo || e === Bo || e === Qy || (typeof e == "object" && e !== null && (e.$$typeof === Vo || e.$$typeof === Wo || e.$$typeof === Mo || e.$$typeof === Fo || e.$$typeof === Ao || e.$$typeof === yp || e.getModuleId !== void 0));
};
F.typeOf = $e;
function Ky() {
  const e = Ty();
  let t = null,
    r = null;
  return {
    clear() {
      (t = null), (r = null);
    },
    notify() {
      e(() => {
        let n = t;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      let n = [],
        l = t;
      for (; l; ) n.push(l), (l = l.next);
      return n;
    },
    subscribe(n) {
      let l = !0,
        i = (r = { callback: n, next: null, prev: r });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !l || t === null || ((l = !1), i.next ? (i.next.prev = i.prev) : (r = i.prev), i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
const fu = { notify() {}, get: () => [] };
function Gy(e, t) {
  let r,
    n = fu,
    l = 0,
    i = !1;
  function c(g) {
    f();
    const j = n.subscribe(g);
    let m = !1;
    return () => {
      m || ((m = !0), j(), d());
    };
  }
  function s() {
    n.notify();
  }
  function a() {
    x.onStateChange && x.onStateChange();
  }
  function u() {
    return i;
  }
  function f() {
    l++, r || ((r = t ? t.addNestedSub(a) : e.subscribe(a)), (n = Ky()));
  }
  function d() {
    l--, r && l === 0 && (r(), (r = void 0), n.clear(), (n = fu));
  }
  function p() {
    i || ((i = !0), f());
  }
  function v() {
    i && ((i = !1), d());
  }
  const x = { addNestedSub: c, notifyNestedSubs: s, handleChangeWrapper: a, isSubscribed: u, trySubscribe: p, tryUnsubscribe: v, getListeners: () => n };
  return x;
}
const Yy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  Xy = Yy ? w.useLayoutEffect : w.useEffect;
function Jy({ store: e, context: t, children: r, serverState: n, stabilityCheck: l = "once", noopCheck: i = "once" }) {
  const c = w.useMemo(() => {
      const u = Gy(e);
      return { store: e, subscription: u, getServerState: n ? () => n : void 0, stabilityCheck: l, noopCheck: i };
    }, [e, n, l, i]),
    s = w.useMemo(() => e.getState(), [e]);
  Xy(() => {
    const { subscription: u } = c;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      s !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [c, s]);
  const a = t || Dt;
  return w.createElement(a.Provider, { value: c }, r);
}
function vp(e = Dt) {
  const t = e === Dt ? fp : Is(e);
  return function () {
    const { store: n } = t();
    return n;
  };
}
const Zy = vp();
function qy(e = Dt) {
  const t = e === Dt ? Zy : vp(e);
  return function () {
    return t().dispatch;
  };
}
const Qn = qy();
Iy(_y.useSyncExternalStoreWithSelector);
Oy(Gd.unstable_batchedUpdates);
function Be(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (r.length
        ? " " +
          r
            .map(function (l) {
              return "'" + l + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function $t(e) {
  return !!e && !!e[W];
}
function ft(e) {
  var t;
  return (
    !!e &&
    ((function (r) {
      if (!r || typeof r != "object") return !1;
      var n = Object.getPrototypeOf(r);
      if (n === null) return !0;
      var l = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
      return l === Object || (typeof l == "function" && Function.toString.call(l) === s0);
    })(e) ||
      Array.isArray(e) ||
      !!e[vu] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[vu]) ||
      As(e) ||
      Us(e))
  );
}
function or(e, t, r) {
  r === void 0 && (r = !1),
    Vr(e) === 0
      ? (r ? Object.keys : Or)(e).forEach(function (n) {
          (r && typeof n == "symbol") || t(n, e[n], e);
        })
      : e.forEach(function (n, l) {
          return t(l, n, e);
        });
}
function Vr(e) {
  var t = e[W];
  return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : As(e) ? 2 : Us(e) ? 3 : 0;
}
function br(e, t) {
  return Vr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function e0(e, t) {
  return Vr(e) === 2 ? e.get(t) : e[t];
}
function gp(e, t, r) {
  var n = Vr(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r);
}
function jp(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function As(e) {
  return i0 && e instanceof Map;
}
function Us(e) {
  return c0 && e instanceof Set;
}
function Gt(e) {
  return e.o || e.t;
}
function Bs(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Sp(e);
  delete t[W];
  for (var r = Or(t), n = 0; n < r.length; n++) {
    var l = r[n],
      i = t[l];
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)), (i.get || i.set) && (t[l] = { configurable: !0, writable: !0, enumerable: i.enumerable, value: e[l] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Ws(e, t) {
  return (
    t === void 0 && (t = !1),
    Vs(e) ||
      $t(e) ||
      !ft(e) ||
      (Vr(e) > 1 && (e.set = e.add = e.clear = e.delete = t0),
      Object.freeze(e),
      t &&
        or(
          e,
          function (r, n) {
            return Ws(n, !0);
          },
          !0
        )),
    e
  );
}
function t0() {
  Be(2);
}
function Vs(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function qe(e) {
  var t = Ic[e];
  return t || Be(18, e), t;
}
function r0(e, t) {
  Ic[e] || (Ic[e] = t);
}
function Tc() {
  return Dn;
}
function Si(e, t) {
  t && (qe("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function Zl(e) {
  Rc(e), e.p.forEach(n0), (e.p = null);
}
function Rc(e) {
  e === Dn && (Dn = e.l);
}
function du(e) {
  return (Dn = { p: [], l: Dn, h: e, m: !0, _: 0 });
}
function n0(e) {
  var t = e[W];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function ki(e, t) {
  t._ = t.p.length;
  var r = t.p[0],
    n = e !== void 0 && e !== r;
  return t.h.O || qe("ES5").S(t, e, n), n ? (r[W].P && (Zl(t), Be(4)), ft(e) && ((e = ql(t, e)), t.l || eo(t, e)), t.u && qe("Patches").M(r[W].t, e, t.u, t.s)) : (e = ql(t, r, [])), Zl(t), t.u && t.v(t.u, t.s), e !== wp ? e : void 0;
}
function ql(e, t, r) {
  if (Vs(t)) return t;
  var n = t[W];
  if (!n)
    return (
      or(
        t,
        function (s, a) {
          return pu(e, n, t, s, a, r);
        },
        !0
      ),
      t
    );
  if (n.A !== e) return t;
  if (!n.P) return eo(e, n.t, !0), n.t;
  if (!n.I) {
    (n.I = !0), n.A._--;
    var l = n.i === 4 || n.i === 5 ? (n.o = Bs(n.k)) : n.o,
      i = l,
      c = !1;
    n.i === 3 && ((i = new Set(l)), l.clear(), (c = !0)),
      or(i, function (s, a) {
        return pu(e, n, l, s, a, r, c);
      }),
      eo(e, l, !1),
      r && e.u && qe("Patches").N(n, r, e.u, e.s);
  }
  return n.o;
}
function pu(e, t, r, n, l, i, c) {
  if ($t(l)) {
    var s = ql(e, l, i && t && t.i !== 3 && !br(t.R, n) ? i.concat(n) : void 0);
    if ((gp(r, n, s), !$t(s))) return;
    e.m = !1;
  } else c && r.add(l);
  if (ft(l) && !Vs(l)) {
    if (!e.h.D && e._ < 1) return;
    ql(e, l), (t && t.A.l) || eo(e, l);
  }
}
function eo(e, t, r) {
  r === void 0 && (r = !1), !e.l && e.h.D && e.m && Ws(t, r);
}
function Ei(e, t) {
  var r = e[W];
  return (r ? Gt(r) : e)[t];
}
function mu(e, t) {
  if (t in e)
    for (var r = Object.getPrototypeOf(e); r; ) {
      var n = Object.getOwnPropertyDescriptor(r, t);
      if (n) return n;
      r = Object.getPrototypeOf(r);
    }
}
function vt(e) {
  e.P || ((e.P = !0), e.l && vt(e.l));
}
function Ci(e) {
  e.o || (e.o = Bs(e.t));
}
function Lc(e, t, r) {
  var n = As(t)
    ? qe("MapSet").F(t, r)
    : Us(t)
    ? qe("MapSet").T(t, r)
    : e.O
    ? (function (l, i) {
        var c = Array.isArray(l),
          s = { i: c ? 1 : 0, A: i ? i.A : Tc(), P: !1, I: !1, R: {}, l: i, t: l, k: null, o: null, j: null, C: !1 },
          a = s,
          u = $n;
        c && ((a = [s]), (u = cn));
        var f = Proxy.revocable(a, u),
          d = f.revoke,
          p = f.proxy;
        return (s.k = p), (s.j = d), p;
      })(t, r)
    : qe("ES5").J(t, r);
  return (r ? r.A : Tc()).p.push(n), n;
}
function l0(e) {
  return (
    $t(e) || Be(22, e),
    (function t(r) {
      if (!ft(r)) return r;
      var n,
        l = r[W],
        i = Vr(r);
      if (l) {
        if (!l.P && (l.i < 4 || !qe("ES5").K(l))) return l.t;
        (l.I = !0), (n = hu(r, i)), (l.I = !1);
      } else n = hu(r, i);
      return (
        or(n, function (c, s) {
          (l && e0(l.t, c) === s) || gp(n, c, t(s));
        }),
        i === 3 ? new Set(n) : n
      );
    })(e)
  );
}
function hu(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Bs(e);
}
function o0() {
  function e(i, c) {
    var s = l[i];
    return (
      s
        ? (s.enumerable = c)
        : (l[i] = s =
            {
              configurable: !0,
              enumerable: c,
              get: function () {
                var a = this[W];
                return $n.get(a, i);
              },
              set: function (a) {
                var u = this[W];
                $n.set(u, i, a);
              },
            }),
      s
    );
  }
  function t(i) {
    for (var c = i.length - 1; c >= 0; c--) {
      var s = i[c][W];
      if (!s.P)
        switch (s.i) {
          case 5:
            n(s) && vt(s);
            break;
          case 4:
            r(s) && vt(s);
        }
    }
  }
  function r(i) {
    for (var c = i.t, s = i.k, a = Or(s), u = a.length - 1; u >= 0; u--) {
      var f = a[u];
      if (f !== W) {
        var d = c[f];
        if (d === void 0 && !br(c, f)) return !0;
        var p = s[f],
          v = p && p[W];
        if (v ? v.t !== d : !jp(p, d)) return !0;
      }
    }
    var x = !!c[W];
    return a.length !== Or(c).length + (x ? 0 : 1);
  }
  function n(i) {
    var c = i.k;
    if (c.length !== i.t.length) return !0;
    var s = Object.getOwnPropertyDescriptor(c, c.length - 1);
    if (s && !s.get) return !0;
    for (var a = 0; a < c.length; a++) if (!c.hasOwnProperty(a)) return !0;
    return !1;
  }
  var l = {};
  r0("ES5", {
    J: function (i, c) {
      var s = Array.isArray(i),
        a = (function (f, d) {
          if (f) {
            for (var p = Array(d.length), v = 0; v < d.length; v++) Object.defineProperty(p, "" + v, e(v, !0));
            return p;
          }
          var x = Sp(d);
          delete x[W];
          for (var g = Or(x), j = 0; j < g.length; j++) {
            var m = g[j];
            x[m] = e(m, f || !!x[m].enumerable);
          }
          return Object.create(Object.getPrototypeOf(d), x);
        })(s, i),
        u = { i: s ? 5 : 4, A: c ? c.A : Tc(), P: !1, I: !1, R: {}, l: c, t: i, k: a, o: null, g: !1, C: !1 };
      return Object.defineProperty(a, W, { value: u, writable: !0 }), a;
    },
    S: function (i, c, s) {
      s
        ? $t(c) && c[W].A === i && t(i.p)
        : (i.u &&
            (function a(u) {
              if (u && typeof u == "object") {
                var f = u[W];
                if (f) {
                  var d = f.t,
                    p = f.k,
                    v = f.R,
                    x = f.i;
                  if (x === 4)
                    or(p, function (y) {
                      y !== W && (d[y] !== void 0 || br(d, y) ? v[y] || a(p[y]) : ((v[y] = !0), vt(f)));
                    }),
                      or(d, function (y) {
                        p[y] !== void 0 || br(p, y) || ((v[y] = !1), vt(f));
                      });
                  else if (x === 5) {
                    if ((n(f) && (vt(f), (v.length = !0)), p.length < d.length)) for (var g = p.length; g < d.length; g++) v[g] = !1;
                    else for (var j = d.length; j < p.length; j++) v[j] = !0;
                    for (var m = Math.min(p.length, d.length), h = 0; h < m; h++) p.hasOwnProperty(h) || (v[h] = !0), v[h] === void 0 && a(p[h]);
                  }
                }
              }
            })(i.p[0]),
          t(i.p));
    },
    K: function (i) {
      return i.i === 4 ? r(i) : n(i);
    },
  });
}
var xu,
  Dn,
  Hs = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  i0 = typeof Map < "u",
  c0 = typeof Set < "u",
  yu = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  wp = Hs ? Symbol.for("immer-nothing") : (((xu = {})["immer-nothing"] = !0), xu),
  vu = Hs ? Symbol.for("immer-draftable") : "__$immer_draftable",
  W = Hs ? Symbol.for("immer-state") : "__$immer_state",
  s0 = "" + Object.prototype.constructor,
  Or =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames,
  Sp =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Or(e).forEach(function (r) {
          t[r] = Object.getOwnPropertyDescriptor(e, r);
        }),
        t
      );
    },
  Ic = {},
  $n = {
    get: function (e, t) {
      if (t === W) return e;
      var r = Gt(e);
      if (!br(r, t))
        return (function (l, i, c) {
          var s,
            a = mu(i, c);
          return a ? ("value" in a ? a.value : (s = a.get) === null || s === void 0 ? void 0 : s.call(l.k)) : void 0;
        })(e, r, t);
      var n = r[t];
      return e.I || !ft(n) ? n : n === Ei(e.t, t) ? (Ci(e), (e.o[t] = Lc(e.A.h, n, e))) : n;
    },
    has: function (e, t) {
      return t in Gt(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(Gt(e));
    },
    set: function (e, t, r) {
      var n = mu(Gt(e), t);
      if (n != null && n.set) return n.set.call(e.k, r), !0;
      if (!e.P) {
        var l = Ei(Gt(e), t),
          i = l == null ? void 0 : l[W];
        if (i && i.t === r) return (e.o[t] = r), (e.R[t] = !1), !0;
        if (jp(r, l) && (r !== void 0 || br(e.t, t))) return !0;
        Ci(e), vt(e);
      }
      return (e.o[t] === r && (r !== void 0 || t in e.o)) || (Number.isNaN(r) && Number.isNaN(e.o[t])) || ((e.o[t] = r), (e.R[t] = !0)), !0;
    },
    deleteProperty: function (e, t) {
      return Ei(e.t, t) !== void 0 || t in e.t ? ((e.R[t] = !1), Ci(e), vt(e)) : delete e.R[t], e.o && delete e.o[t], !0;
    },
    getOwnPropertyDescriptor: function (e, t) {
      var r = Gt(e),
        n = Reflect.getOwnPropertyDescriptor(r, t);
      return n && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: n.enumerable, value: r[t] };
    },
    defineProperty: function () {
      Be(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Be(12);
    },
  },
  cn = {};
or($n, function (e, t) {
  cn[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (cn.deleteProperty = function (e, t) {
    return cn.set.call(this, e, t, void 0);
  }),
  (cn.set = function (e, t, r) {
    return $n.set.call(this, e[0], t, r, e[0]);
  });
var a0 = (function () {
    function e(r) {
      var n = this;
      (this.O = yu),
        (this.D = !0),
        (this.produce = function (l, i, c) {
          if (typeof l == "function" && typeof i != "function") {
            var s = i;
            i = l;
            var a = n;
            return function (g) {
              var j = this;
              g === void 0 && (g = s);
              for (var m = arguments.length, h = Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++) h[y - 1] = arguments[y];
              return a.produce(g, function (S) {
                var C;
                return (C = i).call.apply(C, [j, S].concat(h));
              });
            };
          }
          var u;
          if ((typeof i != "function" && Be(6), c !== void 0 && typeof c != "function" && Be(7), ft(l))) {
            var f = du(n),
              d = Lc(n, l, void 0),
              p = !0;
            try {
              (u = i(d)), (p = !1);
            } finally {
              p ? Zl(f) : Rc(f);
            }
            return typeof Promise < "u" && u instanceof Promise
              ? u.then(
                  function (g) {
                    return Si(f, c), ki(g, f);
                  },
                  function (g) {
                    throw (Zl(f), g);
                  }
                )
              : (Si(f, c), ki(u, f));
          }
          if (!l || typeof l != "object") {
            if (((u = i(l)) === void 0 && (u = l), u === wp && (u = void 0), n.D && Ws(u, !0), c)) {
              var v = [],
                x = [];
              qe("Patches").M(l, u, v, x), c(v, x);
            }
            return u;
          }
          Be(21, l);
        }),
        (this.produceWithPatches = function (l, i) {
          if (typeof l == "function")
            return function (u) {
              for (var f = arguments.length, d = Array(f > 1 ? f - 1 : 0), p = 1; p < f; p++) d[p - 1] = arguments[p];
              return n.produceWithPatches(u, function (v) {
                return l.apply(void 0, [v].concat(d));
              });
            };
          var c,
            s,
            a = n.produce(l, i, function (u, f) {
              (c = u), (s = f);
            });
          return typeof Promise < "u" && a instanceof Promise
            ? a.then(function (u) {
                return [u, c, s];
              })
            : [a, c, s];
        }),
        typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies),
        typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (r) {
        ft(r) || Be(8), $t(r) && (r = l0(r));
        var n = du(this),
          l = Lc(this, r, void 0);
        return (l[W].C = !0), Rc(n), l;
      }),
      (t.finishDraft = function (r, n) {
        var l = r && r[W],
          i = l.A;
        return Si(i, n), ki(void 0, i);
      }),
      (t.setAutoFreeze = function (r) {
        this.D = r;
      }),
      (t.setUseProxies = function (r) {
        r && !yu && Be(20), (this.O = r);
      }),
      (t.applyPatches = function (r, n) {
        var l;
        for (l = n.length - 1; l >= 0; l--) {
          var i = n[l];
          if (i.path.length === 0 && i.op === "replace") {
            r = i.value;
            break;
          }
        }
        l > -1 && (n = n.slice(l + 1));
        var c = qe("Patches").$;
        return $t(r)
          ? c(r, n)
          : this.produce(r, function (s) {
              return c(s, n);
            });
      }),
      e
    );
  })(),
  Pe = new a0(),
  kp = Pe.produce;
Pe.produceWithPatches.bind(Pe);
Pe.setAutoFreeze.bind(Pe);
Pe.setUseProxies.bind(Pe);
Pe.applyPatches.bind(Pe);
Pe.createDraft.bind(Pe);
Pe.finishDraft.bind(Pe);
function Mn(e) {
  "@babel/helpers - typeof";
  return (
    (Mn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }),
    Mn(e)
  );
}
function u0(e, t) {
  if (Mn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Mn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function f0(e) {
  var t = u0(e, "string");
  return Mn(t) === "symbol" ? t : String(t);
}
function d0(e, t, r) {
  return (t = f0(t)), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function gu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ju(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gu(Object(r), !0).forEach(function (n) {
          d0(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : gu(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function fe(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var wu = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Ni = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  to = {
    INIT: "@@redux/INIT" + Ni(),
    REPLACE: "@@redux/REPLACE" + Ni(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Ni();
    },
  };
function p0(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Ep(e, t, r) {
  var n;
  if ((typeof t == "function" && typeof r == "function") || (typeof r == "function" && typeof arguments[3] == "function")) throw new Error(fe(0));
  if ((typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)), typeof r < "u")) {
    if (typeof r != "function") throw new Error(fe(1));
    return r(Ep)(e, t);
  }
  if (typeof e != "function") throw new Error(fe(2));
  var l = e,
    i = t,
    c = [],
    s = c,
    a = !1;
  function u() {
    s === c && (s = c.slice());
  }
  function f() {
    if (a) throw new Error(fe(3));
    return i;
  }
  function d(g) {
    if (typeof g != "function") throw new Error(fe(4));
    if (a) throw new Error(fe(5));
    var j = !0;
    return (
      u(),
      s.push(g),
      function () {
        if (j) {
          if (a) throw new Error(fe(6));
          (j = !1), u();
          var h = s.indexOf(g);
          s.splice(h, 1), (c = null);
        }
      }
    );
  }
  function p(g) {
    if (!p0(g)) throw new Error(fe(7));
    if (typeof g.type > "u") throw new Error(fe(8));
    if (a) throw new Error(fe(9));
    try {
      (a = !0), (i = l(i, g));
    } finally {
      a = !1;
    }
    for (var j = (c = s), m = 0; m < j.length; m++) {
      var h = j[m];
      h();
    }
    return g;
  }
  function v(g) {
    if (typeof g != "function") throw new Error(fe(10));
    (l = g), p({ type: to.REPLACE });
  }
  function x() {
    var g,
      j = d;
    return (
      (g = {
        subscribe: function (h) {
          if (typeof h != "object" || h === null) throw new Error(fe(11));
          function y() {
            h.next && h.next(f());
          }
          y();
          var S = j(y);
          return { unsubscribe: S };
        },
      }),
      (g[wu] = function () {
        return this;
      }),
      g
    );
  }
  return p({ type: to.INIT }), (n = { dispatch: p, subscribe: d, getState: f, replaceReducer: v }), (n[wu] = x), n;
}
function m0(e) {
  Object.keys(e).forEach(function (t) {
    var r = e[t],
      n = r(void 0, { type: to.INIT });
    if (typeof n > "u") throw new Error(fe(12));
    if (typeof r(void 0, { type: to.PROBE_UNKNOWN_ACTION() }) > "u") throw new Error(fe(13));
  });
}
function h0(e) {
  for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
    var l = t[n];
    typeof e[l] == "function" && (r[l] = e[l]);
  }
  var i = Object.keys(r),
    c;
  try {
    m0(r);
  } catch (s) {
    c = s;
  }
  return function (a, u) {
    if ((a === void 0 && (a = {}), c)) throw c;
    for (var f = !1, d = {}, p = 0; p < i.length; p++) {
      var v = i[p],
        x = r[v],
        g = a[v],
        j = x(g, u);
      if (typeof j > "u") throw (u && u.type, new Error(fe(14)));
      (d[v] = j), (f = f || j !== g);
    }
    return (f = f || i.length !== Object.keys(a).length), f ? d : a;
  };
}
function ro() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return t.length === 0
    ? function (n) {
        return n;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (n, l) {
        return function () {
          return n(l.apply(void 0, arguments));
        };
      });
}
function x0() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return function (n) {
    return function () {
      var l = n.apply(void 0, arguments),
        i = function () {
          throw new Error(fe(15));
        },
        c = {
          getState: l.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        s = t.map(function (a) {
          return a(c);
        });
      return (i = ro.apply(void 0, s)(l.dispatch)), ju(ju({}, l), {}, { dispatch: i });
    };
  };
}
function Cp(e) {
  var t = function (n) {
    var l = n.dispatch,
      i = n.getState;
    return function (c) {
      return function (s) {
        return typeof s == "function" ? s(l, i, e) : c(s);
      };
    };
  };
  return t;
}
var Np = Cp();
Np.withExtraArgument = Cp;
const Su = Np;
var Pp = (function () {
    var e = function (t, r) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (n, l) {
              n.__proto__ = l;
            }) ||
          function (n, l) {
            for (var i in l) Object.prototype.hasOwnProperty.call(l, i) && (n[i] = l[i]);
          }),
        e(t, r)
      );
    };
    return function (t, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
      e(t, r);
      function n() {
        this.constructor = t;
      }
      t.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
    };
  })(),
  y0 = function (e, t) {
    var r = {
        label: 0,
        sent: function () {
          if (i[0] & 1) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      },
      n,
      l,
      i,
      c;
    return (
      (c = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol == "function" &&
        (c[Symbol.iterator] = function () {
          return this;
        }),
      c
    );
    function s(u) {
      return function (f) {
        return a([u, f]);
      };
    }
    function a(u) {
      if (n) throw new TypeError("Generator is already executing.");
      for (; r; )
        try {
          if (((n = 1), l && (i = u[0] & 2 ? l.return : u[0] ? l.throw || ((i = l.return) && i.call(l), 0) : l.next) && !(i = i.call(l, u[1])).done)) return i;
          switch (((l = 0), i && (u = [u[0] & 2, i.value]), u[0])) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return r.label++, { value: u[1], done: !1 };
            case 5:
              r.label++, (l = u[1]), (u = [0]);
              continue;
            case 7:
              (u = r.ops.pop()), r.trys.pop();
              continue;
            default:
              if (((i = r.trys), !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2))) {
                r = 0;
                continue;
              }
              if (u[0] === 3 && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                r.label = u[1];
                break;
              }
              if (u[0] === 6 && r.label < i[1]) {
                (r.label = i[1]), (i = u);
                break;
              }
              if (i && r.label < i[2]) {
                (r.label = i[2]), r.ops.push(u);
                break;
              }
              i[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          u = t.call(e, r);
        } catch (f) {
          (u = [6, f]), (l = 0);
        } finally {
          n = i = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  },
  Fr = function (e, t) {
    for (var r = 0, n = t.length, l = e.length; r < n; r++, l++) e[l] = t[r];
    return e;
  },
  v0 = Object.defineProperty,
  g0 = Object.defineProperties,
  j0 = Object.getOwnPropertyDescriptors,
  ku = Object.getOwnPropertySymbols,
  w0 = Object.prototype.hasOwnProperty,
  S0 = Object.prototype.propertyIsEnumerable,
  Eu = function (e, t, r) {
    return t in e ? v0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r);
  },
  Rt = function (e, t) {
    for (var r in t || (t = {})) w0.call(t, r) && Eu(e, r, t[r]);
    if (ku)
      for (var n = 0, l = ku(t); n < l.length; n++) {
        var r = l[n];
        S0.call(t, r) && Eu(e, r, t[r]);
      }
    return e;
  },
  Pi = function (e, t) {
    return g0(e, j0(t));
  },
  k0 = function (e, t, r) {
    return new Promise(function (n, l) {
      var i = function (a) {
          try {
            s(r.next(a));
          } catch (u) {
            l(u);
          }
        },
        c = function (a) {
          try {
            s(r.throw(a));
          } catch (u) {
            l(u);
          }
        },
        s = function (a) {
          return a.done ? n(a.value) : Promise.resolve(a.value).then(i, c);
        };
      s((r = r.apply(e, t)).next());
    });
  },
  E0 =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0) return typeof arguments[0] == "object" ? ro : ro.apply(null, arguments);
        };
function C0(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var r = t; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r);
  return t === r;
}
function Lt(e, t) {
  function r() {
    for (var n = [], l = 0; l < arguments.length; l++) n[l] = arguments[l];
    if (t) {
      var i = t.apply(void 0, n);
      if (!i) throw new Error("prepareAction did not return an object");
      return Rt(Rt({ type: e, payload: i.payload }, "meta" in i && { meta: i.meta }), "error" in i && { error: i.error });
    }
    return { type: e, payload: n[0] };
  }
  return (
    (r.toString = function () {
      return "" + e;
    }),
    (r.type = e),
    (r.match = function (n) {
      return n.type === e;
    }),
    r
  );
}
var N0 = (function (e) {
    Pp(t, e);
    function t() {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
      var l = e.apply(this, r) || this;
      return Object.setPrototypeOf(l, t.prototype), l;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        return e.prototype.concat.apply(this, r);
      }),
      (t.prototype.prepend = function () {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        return r.length === 1 && Array.isArray(r[0]) ? new (t.bind.apply(t, Fr([void 0], r[0].concat(this))))() : new (t.bind.apply(t, Fr([void 0], r.concat(this))))();
      }),
      t
    );
  })(Array),
  P0 = (function (e) {
    Pp(t, e);
    function t() {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
      var l = e.apply(this, r) || this;
      return Object.setPrototypeOf(l, t.prototype), l;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        return e.prototype.concat.apply(this, r);
      }),
      (t.prototype.prepend = function () {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        return r.length === 1 && Array.isArray(r[0]) ? new (t.bind.apply(t, Fr([void 0], r[0].concat(this))))() : new (t.bind.apply(t, Fr([void 0], r.concat(this))))();
      }),
      t
    );
  })(Array);
function zc(e) {
  return ft(e) ? kp(e, function () {}) : e;
}
function _0(e) {
  return typeof e == "boolean";
}
function b0() {
  return function (t) {
    return O0(t);
  };
}
function O0(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    r = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck, e.actionCreatorCheck;
  var n = new N0();
  return r && (_0(r) ? n.push(Su) : n.push(Su.withExtraArgument(r.extraArgument))), n;
}
var T0 = !0;
function R0(e) {
  var t = b0(),
    r = e || {},
    n = r.reducer,
    l = n === void 0 ? void 0 : n,
    i = r.middleware,
    c = i === void 0 ? t() : i,
    s = r.devTools,
    a = s === void 0 ? !0 : s,
    u = r.preloadedState,
    f = u === void 0 ? void 0 : u,
    d = r.enhancers,
    p = d === void 0 ? void 0 : d,
    v;
  if (typeof l == "function") v = l;
  else if (C0(l)) v = h0(l);
  else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  var x = c;
  typeof x == "function" && (x = x(t));
  var g = x0.apply(void 0, x),
    j = ro;
  a && (j = E0(Rt({ trace: !T0 }, typeof a == "object" && a)));
  var m = new P0(g),
    h = m;
  Array.isArray(p) ? (h = Fr([g], p)) : typeof p == "function" && (h = p(m));
  var y = j.apply(void 0, h);
  return Ep(v, f, y);
}
function _p(e) {
  var t = {},
    r = [],
    n,
    l = {
      addCase: function (i, c) {
        var s = typeof i == "string" ? i : i.type;
        if (!s) throw new Error("`builder.addCase` cannot be called with an empty action type");
        if (s in t) throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
        return (t[s] = c), l;
      },
      addMatcher: function (i, c) {
        return r.push({ matcher: i, reducer: c }), l;
      },
      addDefaultCase: function (i) {
        return (n = i), l;
      },
    };
  return e(l), [t, r, n];
}
function L0(e) {
  return typeof e == "function";
}
function I0(e, t, r, n) {
  r === void 0 && (r = []);
  var l = typeof t == "function" ? _p(t) : [t, r, n],
    i = l[0],
    c = l[1],
    s = l[2],
    a;
  if (L0(e))
    a = function () {
      return zc(e());
    };
  else {
    var u = zc(e);
    a = function () {
      return u;
    };
  }
  function f(d, p) {
    d === void 0 && (d = a());
    var v = Fr(
      [i[p.type]],
      c
        .filter(function (x) {
          var g = x.matcher;
          return g(p);
        })
        .map(function (x) {
          var g = x.reducer;
          return g;
        })
    );
    return (
      v.filter(function (x) {
        return !!x;
      }).length === 0 && (v = [s]),
      v.reduce(function (x, g) {
        if (g)
          if ($t(x)) {
            var j = x,
              m = g(j, p);
            return m === void 0 ? x : m;
          } else {
            if (ft(x))
              return kp(x, function (h) {
                return g(h, p);
              });
            var m = g(x, p);
            if (m === void 0) {
              if (x === null) return x;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return m;
          }
        return x;
      }, d)
    );
  }
  return (f.getInitialState = a), f;
}
function z0(e, t) {
  return e + "/" + t;
}
function bp(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var r = typeof e.initialState == "function" ? e.initialState : zc(e.initialState),
    n = e.reducers || {},
    l = Object.keys(n),
    i = {},
    c = {},
    s = {};
  l.forEach(function (f) {
    var d = n[f],
      p = z0(t, f),
      v,
      x;
    "reducer" in d ? ((v = d.reducer), (x = d.prepare)) : (v = d), (i[f] = v), (c[p] = v), (s[f] = x ? Lt(p, x) : Lt(p));
  });
  function a() {
    var f = typeof e.extraReducers == "function" ? _p(e.extraReducers) : [e.extraReducers],
      d = f[0],
      p = d === void 0 ? {} : d,
      v = f[1],
      x = v === void 0 ? [] : v,
      g = f[2],
      j = g === void 0 ? void 0 : g,
      m = Rt(Rt({}, p), c);
    return I0(r, function (h) {
      for (var y in m) h.addCase(y, m[y]);
      for (var S = 0, C = x; S < C.length; S++) {
        var P = C[S];
        h.addMatcher(P.matcher, P.reducer);
      }
      j && h.addDefaultCase(j);
    });
  }
  var u;
  return {
    name: t,
    reducer: function (f, d) {
      return u || (u = a()), u(f, d);
    },
    actions: s,
    caseReducers: i,
    getInitialState: function () {
      return u || (u = a()), u.getInitialState();
    },
  };
}
var D0 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  $0 = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", r = e; r--; ) t += D0[(Math.random() * 64) | 0];
    return t;
  },
  M0 = ["name", "message", "stack", "code"],
  _i = (function () {
    function e(t, r) {
      (this.payload = t), (this.meta = r);
    }
    return e;
  })(),
  Cu = (function () {
    function e(t, r) {
      (this.payload = t), (this.meta = r);
    }
    return e;
  })(),
  F0 = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, r = 0, n = M0; r < n.length; r++) {
        var l = n[r];
        typeof e[l] == "string" && (t[l] = e[l]);
      }
      return t;
    }
    return { message: String(e) };
  };
(function () {
  function e(t, r, n) {
    var l = Lt(t + "/fulfilled", function (u, f, d, p) {
        return { payload: u, meta: Pi(Rt({}, p || {}), { arg: d, requestId: f, requestStatus: "fulfilled" }) };
      }),
      i = Lt(t + "/pending", function (u, f, d) {
        return { payload: void 0, meta: Pi(Rt({}, d || {}), { arg: f, requestId: u, requestStatus: "pending" }) };
      }),
      c = Lt(t + "/rejected", function (u, f, d, p, v) {
        return { payload: p, error: ((n && n.serializeError) || F0)(u || "Rejected"), meta: Pi(Rt({}, v || {}), { arg: d, requestId: f, rejectedWithValue: !!p, requestStatus: "rejected", aborted: (u == null ? void 0 : u.name) === "AbortError", condition: (u == null ? void 0 : u.name) === "ConditionError" }) };
      }),
      s =
        typeof AbortController < "u"
          ? AbortController
          : (function () {
              function u() {
                this.signal = {
                  aborted: !1,
                  addEventListener: function () {},
                  dispatchEvent: function () {
                    return !1;
                  },
                  onabort: function () {},
                  removeEventListener: function () {},
                  reason: void 0,
                  throwIfAborted: function () {},
                };
              }
              return (u.prototype.abort = function () {}), u;
            })();
    function a(u) {
      return function (f, d, p) {
        var v = n != null && n.idGenerator ? n.idGenerator(u) : $0(),
          x = new s(),
          g;
        function j(h) {
          (g = h), x.abort();
        }
        var m = (function () {
          return k0(this, null, function () {
            var h, y, S, C, P, N, O;
            return y0(this, function (D) {
              switch (D.label) {
                case 0:
                  return D.trys.push([0, 4, , 5]), (C = (h = n == null ? void 0 : n.condition) == null ? void 0 : h.call(n, u, { getState: d, extra: p })), U0(C) ? [4, C] : [3, 2];
                case 1:
                  (C = D.sent()), (D.label = 2);
                case 2:
                  if (C === !1 || x.signal.aborted) throw { name: "ConditionError", message: "Aborted due to condition callback returning false." };
                  return (
                    (P = new Promise(function (T, oe) {
                      return x.signal.addEventListener("abort", function () {
                        return oe({ name: "AbortError", message: g || "Aborted" });
                      });
                    })),
                    f(i(v, u, (y = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : y.call(n, { requestId: v, arg: u }, { getState: d, extra: p }))),
                    [
                      4,
                      Promise.race([
                        P,
                        Promise.resolve(
                          r(u, {
                            dispatch: f,
                            getState: d,
                            extra: p,
                            requestId: v,
                            signal: x.signal,
                            abort: j,
                            rejectWithValue: function (T, oe) {
                              return new _i(T, oe);
                            },
                            fulfillWithValue: function (T, oe) {
                              return new Cu(T, oe);
                            },
                          })
                        ).then(function (T) {
                          if (T instanceof _i) throw T;
                          return T instanceof Cu ? l(T.payload, v, u, T.meta) : l(T, v, u);
                        }),
                      ]),
                    ]
                  );
                case 3:
                  return (S = D.sent()), [3, 5];
                case 4:
                  return (N = D.sent()), (S = N instanceof _i ? c(null, v, u, N.payload, N.meta) : c(N, v, u)), [3, 5];
                case 5:
                  return (O = n && !n.dispatchConditionRejection && c.match(S) && S.meta.condition), O || f(S), [2, S];
              }
            });
          });
        })();
        return Object.assign(m, {
          abort: j,
          requestId: v,
          arg: u,
          unwrap: function () {
            return m.then(A0);
          },
        });
      };
    }
    return Object.assign(a, { pending: i, rejected: c, fulfilled: l, typePrefix: t });
  }
  return (
    (e.withTypes = function () {
      return e;
    }),
    e
  );
})();
function A0(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function U0(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Qs = "listenerMiddleware";
Lt(Qs + "/add");
Lt(Qs + "/removeAll");
Lt(Qs + "/remove");
var Nu;
typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
o0();
const Op = bp({
    name: "auth",
    initialState: { isLoggedIn: !1, firstName: "", token: localStorage.getItem("token"), expire: localStorage.getItem("expire") },
    reducers: {
      login: (e, t) => {
        (e.isLoggedIn = !0), (e.firstName = t.payload.firstName), (e.token = t.payload.token), t.payload.expire && (e.expire = t.payload.expire);
      },
      logout: (e, t) => {
        (e.isLoggedIn = !1), (e.firstName = ""), (e.token = null), (e.expire = null);
      },
    },
  }),
  B0 = Op.reducer,
  St = Op.actions,
  Bt = () => {
    const e = Qn(),
      t = tt((c) => c.auth);
    et();
    const [r, n] = w.useState(!1),
      l = () => {
        n(!1);
      },
      i = async () => {
        try {
          const s = await (await fetch("https://good-news-backend.onrender.com/blogsAPI/signout", { method: "POST", credentials: "include", headers: { "Content-Type": "application/json", authorization: t.token } })).json();
          s.logout === !0 ? (localStorage.removeItem("token"), localStorage.removeItem("expire"), e(St.logout()), window.location.reload()) : console.log(s);
        } catch (c) {
          console.log(c);
        }
      };
    return o.jsx("header", {
      className: "bg-emerald-100 bg-gradient-to-r from-white to-emerald-200     py-5",
      children: o.jsxs("div", {
        className: "container  px-2 md:px-7  mx-auto    flex justify-between items-center",
        children: [
          o.jsx(Ge, { to: "/", children: o.jsxs("h1", { className: "flex items-start space-x-1", children: [o.jsx("span", { className: "text-black text-xl font-bold ", children: "Daily" }), o.jsx("span", { className: "text-orange-600 text-xl font-bold ", children: "Good News" })] }) }),
          o.jsxs("nav", { className: "lg:flex hidden items-center space-x-30", children: [t.isLoggedIn && o.jsxs("p", { className: "mr-5", children: ["Hello ", t.firstName, "!"] }), t.isLoggedIn && o.jsx(Ge, { to: "/update", children: o.jsx(ur, { text: "Update Profile", color: "emerald" }) }), !t.isLoggedIn && o.jsx(Ge, { to: "/login", children: o.jsx(ur, { text: "Login", hoverBG: "emerald" }) }), !t.isLoggedIn && o.jsx(Ge, { to: "/signup", children: o.jsx(ur, { text: "Sign Up", color: "emerald" }) }), t.isLoggedIn && o.jsx(Ge, { onClick: i, children: o.jsx(Oc, { text: "Logout", color: "orange" }) })] }),
          o.jsx("div", { className: "lg:hidden flex items-center", children: o.jsx("button", { onClick: () => n(!r), className: "text-black text-xl focus:outline-none transition-transform transform", children: r ? o.jsx("span", { children: "×" }) : o.jsx("span", { children: "☰" }) }) }),
          r &&
            o.jsx("nav", {
              className: "lg:hidden fixed z-50 top-16 left-0 h-full w-full bg-fgreen bg-gradient-to-b from-white to-emerald-100 ",
              children: o.jsxs("ul", {
                className: " text-center p-4 flex flex-col items-center space-y-4",
                children: [o.jsx(tn, { onClick: l, children: t.isLoggedIn && o.jsxs("p", { className: " text-center", children: ["Hello ", t.firstName, "!"] }) }), t.isLoggedIn && o.jsx(tn, { onClick: l, children: o.jsx(Ge, { to: "/update", children: o.jsx(ur, { text: "Update Profile", color: "emerald" }) }) }), !t.isLoggedIn && o.jsx(tn, { onClick: l, children: o.jsx(Ge, { to: "/login", children: o.jsx(ur, { text: "Login", hoverBG: "emerald" }) }) }), !t.isLoggedIn && o.jsx(tn, { onClick: l, children: o.jsx(Ge, { to: "/signup", children: o.jsx(ur, { text: "Sign Up", color: "emerald" }) }) }), t.isLoggedIn && o.jsx(tn, { onClick: l, children: o.jsx(Ge, { onClick: i, children: o.jsx(Oc, { text: "Logout", color: "orange" }) }) })],
              }),
            }),
        ],
      }),
    });
  };
function Wt() {
  return o.jsxs("div", { className: "bg-emerald-100 bg-gradient-to-r from-white to-emerald-100 p-5 text-center  ", children: [o.jsxs("strong", { children: ["© 2023 thedailygoodnews.net | Powered by:", " ", o.jsx("a", { className: "underline", href: "https://github.com/syedshaon", target: "_blank", children: "Mashi" })] }), o.jsx("br", {}), "Copyright: Any unauthorized use or reproduction of The Daily Good News content for commercial purposes is strictly prohibited and constitutes copyright infringement liable to legal action."] });
}
function bi() {
  tt((s) => s.auth);
  const [e, t] = w.useState([]),
    [r, n] = w.useState(""),
    [l, i] = w.useState(null);
  et();
  const c = async () => {
    try {
      const s = await fetch("https://good-news-backend.onrender.com/blogsAPI/posts", { method: "GET", headers: { "Content-Type": "application/json" } }),
        a = await s.json();
      if (!s.ok) {
        console.log(a.message);
        return;
      }
      if (a.message) {
        n(a.message);
        return;
      }
      t(a.posts);
    } catch (s) {
      console.log(s);
    }
  };
  return (
    w.useEffect(() => {
      c();
    }, []),
    o.jsxs(o.Fragment, {
      children: [
        o.jsx(Bt, {}),
        o.jsxs("div", {
          className: "container mx-auto mt-8 mb-16 min-h-[800px]",
          children: [
            o.jsx("h1", { className: "text-3xl font-bold mb-4", children: e.length ? "Posts Loading Soon." : "" }),
            l && o.jsx("h3", { className: "response text-orange-500 text-xl font-bold container mx-auto text-center", children: l }),
            o.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2  gap-4", children: e.length > 0 ? e.map((s) => o.jsx(Ge, { to: `/posts/${s._id}`, children: o.jsxs("div", { className: "bg-white p-4 rounded shadow", children: [o.jsx("h2", { className: "text-xl text-center font-bold mb-2", children: s.title }), o.jsxs("p", { className: "text-center text-sm", children: ["Posted By: ", s.author.firstName, " ", s.author.lastName, " , On: ", s.timestamp ? new Date(s.timestamp).toISOString().split("T")[0] : "N/A"] }), o.jsx("div", { className: "mt-2   ", children: o.jsx("div", { className: "text    ", dangerouslySetInnerHTML: { __html: s.text } }) })] }) }, s._id)) : o.jsx("h1", { className: "text-3xl text-center font-bold mb-4", children: "No News Published Yet!" }) }),
          ],
        }),
        o.jsx(Wt, {}),
      ],
    })
  );
}
function W0({ fetchComments: e }) {
  et();
  const t = useSelector((f) => f.auth),
    { postId: r } = Ls(),
    [n, l] = w.useState(""),
    [i, c] = w.useState(null),
    s = (f) => {
      l(f.target.value);
    },
    a = (f) => {
      f.preventDefault(), u({ text: n, postId: r });
    },
    u = async (f) => {
      try {
        const d = await fetch("https://good-news-backend.onrender.com/blogsAPI/comments", { method: "POST", headers: { "Content-Type": "application/json", authorization: t.token }, body: JSON.stringify(f) });
        if (!d.ok) {
          const x = await d.json();
          c(x.message);
          return;
        }
        const p = await d.json();
        c(p.message);
        const v = setTimeout(() => {
          e(), l(""), c(null);
        }, 2500);
        return () => clearTimeout(v);
      } catch (d) {
        c("Error sending data to backend: " + d.message);
      }
    };
  return t.isLoggedIn
    ? o.jsx(o.Fragment, {
        children: o.jsxs("div", {
          className: "  relative lg:py-20",
          children: [
            i && o.jsx("h3", { className: "response text-orange-500 text-xl font-bold container mx-auto text-center", children: i }),
            o.jsx("div", {
              className: `flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl\r
      xl:px-5 lg:flex-row`,
              children: o.jsx("div", {
                className: "flex flex-col items-center justify-center w-full   ",
                children: o.jsx("div", {
                  className: "relative  mt-5 mr-0 mb-0 ml-0  z-10  lg:mt-0 container",
                  children: o.jsxs("form", {
                    onSubmit: a,
                    className: "flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10   rounded-xl relative z-10",
                    children: [
                      o.jsx("p", { className: "w-full text-4xl font-medium text-center leading-snug font-serif", children: "Add new Comment. " }),
                      o.jsxs("div", {
                        className: "w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8",
                        children: [
                          o.jsx("div", {
                            className: "relative",
                            children: o.jsx("textarea", {
                              value: n,
                              onChange: s,
                              required: !0,
                              name: "formText",
                              placeholder: "Write Your Comment Here.",
                              type: "text",
                              className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                            }),
                          }),
                          o.jsx("div", {
                            className: "relative",
                            children: o.jsx("button", {
                              className: `w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-emerald-500\r
                  rounded-lg transition duration-200 hover:bg-emerald-600 ease`,
                              children: "Submit",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        }),
      })
    : o.jsx("h2", { className: "text-orange-500 p-5 pb-5 text-xl mb-40 border-orange-500 border-b-8", children: " Please Log In to Add Comments." });
}
function V0({ responseCommentsFromBackEnd: e, post: t }) {
  const r = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", timeZone: "UTC" };
  return o.jsx(o.Fragment, {
    children: o.jsxs("div", {
      className: "container mx-auto mt-8 mb-16 p-3 rounded shadow",
      children: [e && o.jsx("h3", { className: "response text-orange-500 text-xl font-bold container mx-auto ", children: e }), o.jsxs("div", { className: "  gap-4  ", children: [o.jsx("h2", { className: "text-orange-500  text-xl border-orange-500 border-b-8", children: t.length > 0 ? "Previous Comments" : "No Comments yet. Add One?" }), t.length > 0 && t.map((n) => o.jsxs("div", { className: "bg-white p-4 rounded shadow", children: [o.jsx("p", { className: "mt-2   ", children: n.text }), o.jsxs("p", { className: "text-left text-sm italic", children: ["By: ", n.visitor.firstName, " ", n.visitor.lastName, " , On: ", n.timestamp ? new Date(n.timestamp).toLocaleString("en-US", r) : "N/A"] })] }, n._id))] })],
    }),
  });
}
function H0() {
  const e = tt((j) => j.auth),
    [t, r] = w.useState([]),
    [n, l] = w.useState(""),
    [i, c] = w.useState(null);
  et();
  const [s, a] = w.useState([]),
    [u, f] = w.useState(""),
    [d, p] = w.useState(null),
    { postId: v } = Ls(),
    x = async () => {
      try {
        const j = await fetch("https://good-news-backend.onrender.com/blogsAPI/posts/" + v, { method: "GET", headers: { "Content-Type": "application/json" } }),
          m = await j.json();
        if (!j.ok) {
          console.log(m.message);
          return;
        }
        if (m.message) {
          l(m.message);
          return;
        }
        r(m.post);
      } catch (j) {
        console.log(j);
      }
    },
    g = async () => {
      try {
        const j = await fetch("https://good-news-backend.onrender.com/blogsAPI/comments/" + v, { method: "GET", headers: { "Content-Type": "application/json", authorization: e.token } }),
          m = await j.json();
        if (!j.ok) {
          console.log(m.message), p(m.message);
          return;
        }
        if (m.message) {
          a(m.message);
          return;
        }
        f(m.posts);
      } catch (j) {
        console.log(j);
      }
    };
  return (
    w.useEffect(() => {
      x(), g();
    }, []),
    o.jsxs(o.Fragment, {
      children: [
        o.jsx(Bt, {}),
        o.jsxs("div", {
          className: "container mx-auto mt-8 mb-16  rounded shadow",
          children: [i && o.jsx("h3", { className: "response text-orange-500 text-xl font-bold container mx-auto ", children: i }), o.jsx("div", { className: "grid grid-cols-1  gap-4  ", children: t && o.jsxs("div", { className: "bg-white p-4 ", children: [o.jsx("h2", { className: "text-xl font-bold mb-2", children: t.title }), t.author && o.jsxs("p", { className: " text-sm", children: ["Posted By: ", t.author.firstName, " ", t.author.lastName, " , On: ", t.timestamp ? new Date(t.timestamp).toISOString().split("T")[0] : "N/A"] }), o.jsx("div", { className: "mt-2   ", children: o.jsx("div", { className: "text col-span-3  ", dangerouslySetInnerHTML: { __html: t.text } }) })] }) }), o.jsx(V0, { responseCommentsFromBackEnd: d, post: u }), o.jsx(W0, { fetchComments: g })],
        }),
        o.jsx(Wt, {}),
      ],
    })
  );
}
function Oi() {
  const e = Qn(),
    t = tt((f) => f.auth),
    r = et();
  w.useEffect(() => {
    t.isLoggedIn && r("/");
  }, [t.isLoggedIn]);
  const [n, l] = w.useState({ email: "", password: "" }),
    [i, c] = w.useState(null),
    s = (f) => {
      const { name: d, value: p } = f.target;
      l({ ...n, [d]: p });
    },
    a = (f) => {
      f.preventDefault(), u(n);
    },
    u = async (f) => {
      try {
        const d = await fetch("https://good-news-backend.onrender.com/blogsAPI/signin", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f), credentials: "include" });
        if (!d.ok) {
          const x = await d.json();
          c(x.message);
          return;
        }
        const p = await d.json();
        localStorage.setItem("token", p.token), localStorage.setItem("expire", p.expire), e(St.login({ firstName: p.firstName, token: p.token, expire: p.expire })), c("Logged In Successfully. Redirecting to homepage....");
        const v = setTimeout(() => {
          r("/");
        }, 1500);
        return () => clearTimeout(v);
      } catch (d) {
        c("Error sending data to backend: " + d.message);
      }
    };
  return (
    !t.isLoggedIn &&
    o.jsxs("div", {
      children: [
        o.jsx(Bt, {}),
        o.jsxs("div", {
          className: "bg-emerald-100 h-screen relative lg:py-20",
          children: [
            i && o.jsx("h3", { className: "response text-orange-500 text-xl font-bold container mx-auto text-center", children: i }),
            o.jsx("div", {
              className: `flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl\r
      xl:px-5 lg:flex-row`,
              children: o.jsx("div", {
                className: "flex flex-col items-center justify-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row",
                children: o.jsxs("div", {
                  className: "w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12",
                  children: [
                    o.jsxs("form", {
                      onSubmit: a,
                      className: `flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl\r
            relative z-10`,
                      children: [
                        o.jsx("p", { className: "w-full text-4xl font-medium text-center leading-snug font-serif", children: "Sign In" }),
                        o.jsxs("div", {
                          className: "w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8",
                          children: [
                            o.jsxs("div", {
                              className: "relative",
                              children: [
                                o.jsx("p", { className: "bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute", children: "Email" }),
                                o.jsx("input", {
                                  value: n.email,
                                  onChange: s,
                                  name: "email",
                                  placeholder: "123@ex.com",
                                  type: "email",
                                  className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                                }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: "relative",
                              children: [
                                o.jsx("p", {
                                  className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                  children: "Password",
                                }),
                                o.jsx("input", {
                                  value: n.password,
                                  onChange: s,
                                  name: "password",
                                  placeholder: "Password",
                                  type: "password",
                                  className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                                }),
                              ],
                            }),
                            o.jsx("div", {
                              className: "relative",
                              children: o.jsx("button", {
                                className: `w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-emerald-500\r
                  rounded-lg transition duration-200 hover:bg-emerald-600 ease`,
                                children: "Submit",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsx("svg", {
                      viewBox: "0 0 91 91",
                      className: `absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-orange-300\r
            fill-current`,
                      children: o.jsx("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fillRule: "evenodd",
                        children: o.jsx("g", {
                          fillRule: "nonzero",
                          children: o.jsxs("g", {
                            children: [
                              o.jsxs("g", { children: [o.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 12)", children: [o.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 24)", children: [o.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 36)", children: [o.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 49)", children: [o.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 61)", children: [o.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 73)", children: [o.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 85)", children: [o.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    o.jsx("svg", {
                      viewBox: "0 0 91 91",
                      className: `absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-emerald-500\r
            fill-current`,
                      children: o.jsx("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fillRule: "evenodd",
                        children: o.jsx("g", {
                          fillRule: "nonzero",
                          children: o.jsxs("g", {
                            children: [
                              o.jsxs("g", { children: [o.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 12)", children: [o.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 24)", children: [o.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 36)", children: [o.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 49)", children: [o.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 61)", children: [o.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 73)", children: [o.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 85)", children: [o.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        o.jsx(Wt, {}),
      ],
    })
  );
}
function Q0() {
  const e = et(),
    t = tt((d) => d.auth);
  w.useEffect(() => {
    t.isLoggedIn && e("/");
  }, [t.isLoggedIn]);
  const [r, n] = w.useState({ firstName: "", lastName: "", email: "", password: "", rpassword: "" }),
    [l, i] = w.useState(!1),
    [c, s] = w.useState(null),
    a = (d) => {
      const { name: p, value: v } = d.target;
      n({ ...r, [p]: v });
    },
    u = (d) => {
      d.preventDefault(), f(r);
    },
    f = async (d) => {
      try {
        const p = await fetch("https://good-news-backend.onrender.com/blogsAPI/signup", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
        if (!p.ok) {
          const g = await p.json();
          s(g.message);
          return;
        }
        const v = await p.json();
        console.log("Response from backend:", v.message), s(v.message);
        const x = setTimeout(() => {
          e("/login");
        }, 2500);
        return () => clearTimeout(x);
      } catch (p) {
        s("Error sending data to backend: " + p.message);
      }
    };
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx(Bt, {}),
      o.jsxs("div", {
        className: "bg-emerald-100 h-screen relative lg:py-20",
        children: [
          c && o.jsx("h3", { className: "response text-orange-500 text-xl font-bold container mx-auto text-center", children: c }),
          o.jsx("div", {
            className: `flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl\r
      xl:px-5 lg:flex-row`,
            children: o.jsx("div", {
              className: "flex flex-col items-center justify-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row",
              children: o.jsxs("div", {
                className: "w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12",
                children: [
                  o.jsxs("form", {
                    onSubmit: u,
                    className: "flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10",
                    children: [
                      o.jsx("p", { className: "w-full text-4xl font-medium text-center leading-snug font-serif", children: "Sign up for an account " }),
                      o.jsxs("div", {
                        className: "w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8",
                        children: [
                          o.jsxs("div", {
                            className: "relative",
                            children: [
                              o.jsx("p", {
                                className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                children: "First Name",
                              }),
                              o.jsx("input", {
                                value: r.firstName,
                                onChange: a,
                                required: !0,
                                name: "firstName",
                                placeholder: "John",
                                type: "text",
                                className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "relative",
                            children: [
                              o.jsx("p", {
                                className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                children: "Last Name",
                              }),
                              o.jsx("input", {
                                value: r.lastName,
                                onChange: a,
                                required: !0,
                                name: "lastName",
                                placeholder: "Doe",
                                type: "text",
                                className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "relative",
                            children: [
                              o.jsx("p", { className: "bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute", children: "Email" }),
                              o.jsx("input", {
                                value: r.email,
                                onChange: a,
                                required: !0,
                                name: "email",
                                placeholder: "123@ex.com",
                                type: "email",
                                className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "relative",
                            children: [
                              o.jsx("p", {
                                className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                children: "Password",
                              }),
                              o.jsx("input", {
                                value: r.password,
                                onChange: (d) => {
                                  n({ ...r, password: d.target.value }), d.target.value === r.rpassword ? i(!1) : i(!0);
                                },
                                required: !0,
                                name: "password",
                                placeholder: "Password",
                                type: "password",
                                className: l ? "border-orange-500 border-2 placeholder-gray-400  w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white   rounded-md" : "false border placeholder-gray-400   w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md",
                              }),
                            ],
                          }),
                          o.jsxs("div", {
                            className: "relative",
                            children: [
                              o.jsx("p", {
                                className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                children: "Repeat Password",
                              }),
                              o.jsx("input", {
                                value: r.rpassword,
                                onChange: (d) => {
                                  n({ ...r, rpassword: d.target.value }), d.target.value === r.password ? i(!1) : i(!0);
                                },
                                required: !0,
                                name: "rpassword",
                                placeholder: "Repeat Password",
                                type: "password",
                                className: l ? "border-orange-500 border-2  placeholder-gray-400  w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white   rounded-md" : "false border placeholder-gray-400   w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md",
                              }),
                            ],
                          }),
                          o.jsx("div", {
                            className: "relative",
                            children: o.jsx("button", {
                              className: `w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-emerald-500\r
                  rounded-lg transition duration-200 hover:bg-emerald-600 ease`,
                              children: "Submit",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsx("svg", {
                    viewBox: "0 0 91 91",
                    className: `absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-orange-300\r
            fill-current`,
                    children: o.jsx("g", {
                      stroke: "none",
                      strokeWidth: "1",
                      fillRule: "evenodd",
                      children: o.jsx("g", {
                        fillRule: "nonzero",
                        children: o.jsxs("g", {
                          children: [
                            o.jsxs("g", { children: [o.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 12)", children: [o.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 24)", children: [o.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 36)", children: [o.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 49)", children: [o.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 61)", children: [o.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 73)", children: [o.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 85)", children: [o.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  o.jsx("svg", {
                    viewBox: "0 0 91 91",
                    className: `absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-emerald-500\r
            fill-current`,
                    children: o.jsx("g", {
                      stroke: "none",
                      strokeWidth: "1",
                      fillRule: "evenodd",
                      children: o.jsx("g", {
                        fillRule: "nonzero",
                        children: o.jsxs("g", {
                          children: [
                            o.jsxs("g", { children: [o.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 12)", children: [o.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 24)", children: [o.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 36)", children: [o.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 49)", children: [o.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 61)", children: [o.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 73)", children: [o.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 85)", children: [o.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      o.jsx(Wt, {}),
    ],
  });
}
function K0() {
  return o.jsxs("div", {
    children: [
      o.jsx(Bt, {}),
      o.jsx("div", {
        className: "teams container min-h-[800px] flex justify-center items-center px-2 md:px-7  ",
        children: o.jsxs("div", { class: "text-center", children: [o.jsx("h1", { class: "mb-4 text-6xl font-semibold text-orange-600", children: "404" }), o.jsx("p", { class: "mb-4 text-lg text-gray-600", children: "Oops! Looks like you're lost." }), o.jsx("div", { class: "animate-bounce", children: o.jsx("svg", { class: "mx-auto h-16 w-16 text-orange-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: o.jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }) }) }), o.jsxs("p", { class: "mt-4 text-gray-600", children: ["Let's get you back", " ", o.jsx("a", { href: "/", class: "text-emerald-500", children: "home" }), "."] })] }),
      }),
      o.jsx(Wt, {}),
    ],
  });
}
function G0() {
  const e = et(),
    t = tt((x) => x.auth),
    r = Qn(),
    [n, l] = w.useState({ firstName: "", lastName: "", email: "", password: "", rpassword: "" }),
    [i, c] = w.useState(!1),
    [s, a] = w.useState(null),
    u = (x) => {
      const { name: g, value: j } = x.target;
      l({ ...n, [g]: j });
    },
    f = async () => {
      if (confirm("Do you want to delete your account?"))
        try {
          const g = await fetch("https://good-news-backend.onrender.com/blogsAPI/delete", { method: "DELETE", credentials: "include", headers: { "Content-Type": "application/json", authorization: t.token } }),
            j = await g.json();
          if ((a(j.message), !g.ok)) return;
          j.delete && (localStorage.removeItem("token"), r(St.logout()), e("/"));
        } catch (g) {
          console.error("Error fetching data:", g);
        }
      else console.log("User canceled.");
    },
    d = async () => {
      try {
        const x = await fetch("https://good-news-backend.onrender.com/blogsAPI/update", { method: "GET", credentials: "include", headers: { "Content-Type": "application/json", authorization: t.token } }),
          g = await x.json();
        if (!x.ok) {
          console.log(g.message);
          return;
        }
        l({ firstName: g.firstName, lastName: g.lastName, email: g.email, password: "", rpassword: "" });
      } catch (x) {
        console.log(x);
      }
    };
  w.useEffect(() => {
    d();
  }, []);
  const p = (x) => {
      x.preventDefault(), v(n);
    },
    v = async (x) => {
      try {
        const g = await fetch("https://good-news-backend.onrender.com/blogsAPI/update", { method: "PUT", headers: { "Content-Type": "application/json", authorization: t.token }, body: JSON.stringify(x) });
        if (!g.ok) {
          const h = await g.json();
          a(h.message);
          return;
        }
        const j = await g.json();
        a(j.message), localStorage.removeItem("token"), localStorage.removeItem("expire"), r(St.logout());
        const m = setTimeout(() => {
          e("/");
        }, 1500);
        return () => clearTimeout(m);
      } catch (g) {
        a("Error sending data to backend: " + g.message);
      }
    };
  return (
    t.isLoggedIn &&
    o.jsxs(o.Fragment, {
      children: [
        o.jsx(Bt, {}),
        o.jsxs("div", {
          className: "bg-emerald-100 h-screen relative pt-10 lg:py-20",
          children: [
            o.jsx("div", { className: "  mx-auto text-center", children: o.jsx("span", { onClick: f, children: o.jsx(Oc, { color: "orange", text: "Delete  My Account." }) }) }),
            s && o.jsx("h3", { className: "response my-10 text-orange-500 text-xl font-bold container mx-auto text-center", children: s }),
            o.jsx("div", {
              className: `flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl\r
      xl:px-5 lg:flex-row`,
              children: o.jsx("div", {
                className: "flex flex-col items-center justify-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row",
                children: o.jsxs("div", {
                  className: "w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12",
                  children: [
                    o.jsxs("form", {
                      onSubmit: p,
                      className: "flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10",
                      children: [
                        o.jsx("p", { className: "w-full text-4xl font-medium text-center leading-snug font-serif", children: "Update Your account " }),
                        o.jsxs("div", {
                          className: "w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8",
                          children: [
                            o.jsxs("div", {
                              className: "relative",
                              children: [
                                o.jsx("p", {
                                  className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                  children: "First Name",
                                }),
                                o.jsx("input", {
                                  value: n.firstName,
                                  onChange: u,
                                  required: !0,
                                  name: "firstName",
                                  placeholder: "John",
                                  type: "text",
                                  className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                                }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: "relative",
                              children: [
                                o.jsx("p", {
                                  className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                  children: "Last Name",
                                }),
                                o.jsx("input", {
                                  value: n.lastName,
                                  onChange: u,
                                  required: !0,
                                  name: "lastName",
                                  placeholder: "Doe",
                                  type: "text",
                                  className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                                }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: "relative",
                              children: [
                                o.jsx("p", { className: "bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute", children: "Email" }),
                                o.jsx("input", {
                                  value: n.email,
                                  onChange: u,
                                  required: !0,
                                  name: "email",
                                  placeholder: "123@ex.com",
                                  type: "email",
                                  className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                                }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: "relative",
                              children: [
                                o.jsx("p", {
                                  className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                  children: "Password",
                                }),
                                o.jsx("input", {
                                  value: n.password,
                                  onChange: (x) => {
                                    l({ ...n, password: x.target.value }), x.target.value === n.rpassword ? c(!1) : c(!0);
                                  },
                                  required: !0,
                                  name: "password",
                                  placeholder: "Password",
                                  type: "password",
                                  className: i ? "border-orange-500 border-2 placeholder-gray-400  w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white   rounded-md" : "false border placeholder-gray-400   w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md",
                                }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: "relative",
                              children: [
                                o.jsx("p", {
                                  className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                  children: "Repeat Password",
                                }),
                                o.jsx("input", {
                                  value: n.rpassword,
                                  onChange: (x) => {
                                    l({ ...n, rpassword: x.target.value }), x.target.value === n.password ? c(!1) : c(!0);
                                  },
                                  required: !0,
                                  name: "rpassword",
                                  placeholder: "Repeat Password",
                                  type: "password",
                                  className: i ? "border-orange-500 border-2  placeholder-gray-400  w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white   rounded-md" : "false border placeholder-gray-400   w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md",
                                }),
                              ],
                            }),
                            o.jsx("div", {
                              className: "relative",
                              children: o.jsx("button", {
                                className: `w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-emerald-500\r
                  rounded-lg transition duration-200 hover:bg-emerald-600 ease`,
                                children: "Submit",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsx("svg", {
                      viewBox: "0 0 91 91",
                      className: `absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-orange-300\r
            fill-current`,
                      children: o.jsx("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fillRule: "evenodd",
                        children: o.jsx("g", {
                          fillRule: "nonzero",
                          children: o.jsxs("g", {
                            children: [
                              o.jsxs("g", { children: [o.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 12)", children: [o.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 24)", children: [o.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 36)", children: [o.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 49)", children: [o.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 61)", children: [o.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 73)", children: [o.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 85)", children: [o.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    o.jsx("svg", {
                      viewBox: "0 0 91 91",
                      className: `absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-emerald-500\r
            fill-current`,
                      children: o.jsx("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fillRule: "evenodd",
                        children: o.jsx("g", {
                          fillRule: "nonzero",
                          children: o.jsxs("g", {
                            children: [
                              o.jsxs("g", { children: [o.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 12)", children: [o.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 24)", children: [o.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 36)", children: [o.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 49)", children: [o.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 61)", children: [o.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 73)", children: [o.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                              o.jsxs("g", { transform: "translate(0 85)", children: [o.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        o.jsx(Wt, {}),
      ],
    })
  );
}
var Tp = { exports: {} },
  Y0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  X0 = Y0,
  J0 = X0;
function Rp() {}
function Lp() {}
Lp.resetWarningCache = Rp;
var Z0 = function () {
  function e(n, l, i, c, s, a) {
    if (a !== J0) {
      var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: Lp, resetWarningCache: Rp };
  return (r.PropTypes = r), r;
};
Tp.exports = Z0();
var k = Tp.exports,
  Dc = function () {
    return (
      (Dc =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
          }
          return e;
        }),
      Dc.apply(this, arguments)
    );
  },
  Ip = {
    onActivate: k.func,
    onAddUndo: k.func,
    onBeforeAddUndo: k.func,
    onBeforeExecCommand: k.func,
    onBeforeGetContent: k.func,
    onBeforeRenderUI: k.func,
    onBeforeSetContent: k.func,
    onBeforePaste: k.func,
    onBlur: k.func,
    onChange: k.func,
    onClearUndos: k.func,
    onClick: k.func,
    onContextMenu: k.func,
    onCommentChange: k.func,
    onCopy: k.func,
    onCut: k.func,
    onDblclick: k.func,
    onDeactivate: k.func,
    onDirty: k.func,
    onDrag: k.func,
    onDragDrop: k.func,
    onDragEnd: k.func,
    onDragGesture: k.func,
    onDragOver: k.func,
    onDrop: k.func,
    onExecCommand: k.func,
    onFocus: k.func,
    onFocusIn: k.func,
    onFocusOut: k.func,
    onGetContent: k.func,
    onHide: k.func,
    onInit: k.func,
    onKeyDown: k.func,
    onKeyPress: k.func,
    onKeyUp: k.func,
    onLoadContent: k.func,
    onMouseDown: k.func,
    onMouseEnter: k.func,
    onMouseLeave: k.func,
    onMouseMove: k.func,
    onMouseOut: k.func,
    onMouseOver: k.func,
    onMouseUp: k.func,
    onNodeChange: k.func,
    onObjectResizeStart: k.func,
    onObjectResized: k.func,
    onObjectSelected: k.func,
    onPaste: k.func,
    onPostProcess: k.func,
    onPostRender: k.func,
    onPreProcess: k.func,
    onProgressState: k.func,
    onRedo: k.func,
    onRemove: k.func,
    onReset: k.func,
    onSaveContent: k.func,
    onSelectionChange: k.func,
    onSetAttrib: k.func,
    onSetContent: k.func,
    onShow: k.func,
    onSubmit: k.func,
    onUndo: k.func,
    onVisualAid: k.func,
    onSkinLoadError: k.func,
    onThemeLoadError: k.func,
    onModelLoadError: k.func,
    onPluginLoadError: k.func,
    onIconsLoadError: k.func,
    onLanguageLoadError: k.func,
    onScriptsLoad: k.func,
    onScriptsLoadError: k.func,
  },
  q0 = Dc({ apiKey: k.string, id: k.string, inline: k.bool, init: k.object, initialValue: k.string, onEditorChange: k.func, value: k.string, tagName: k.string, cloudChannel: k.string, plugins: k.oneOfType([k.string, k.array]), toolbar: k.oneOfType([k.string, k.array]), disabled: k.bool, textareaName: k.string, tinymceScriptSrc: k.oneOfType([k.string, k.arrayOf(k.string), k.arrayOf(k.shape({ src: k.string, async: k.bool, defer: k.bool }))]), rollback: k.oneOfType([k.number, k.oneOf([!1])]), scriptLoading: k.shape({ async: k.bool, defer: k.bool, delay: k.number }) }, Ip),
  Ti = function (e) {
    return typeof e == "function";
  },
  Pu = function (e) {
    return e in Ip;
  },
  _u = function (e) {
    return e.substr(2);
  },
  e2 = function (e, t, r, n, l, i, c) {
    var s = Object.keys(l).filter(Pu),
      a = Object.keys(i).filter(Pu),
      u = s.filter(function (d) {
        return i[d] === void 0;
      }),
      f = a.filter(function (d) {
        return l[d] === void 0;
      });
    u.forEach(function (d) {
      var p = _u(d),
        v = c[p];
      r(p, v), delete c[p];
    }),
      f.forEach(function (d) {
        var p = n(e, d),
          v = _u(d);
        (c[v] = p), t(v, p);
      });
  },
  t2 = function (e, t, r, n, l) {
    return e2(
      l,
      e.on.bind(e),
      e.off.bind(e),
      function (i, c) {
        return function (s) {
          var a;
          return (a = i(c)) === null || a === void 0 ? void 0 : a(s, e);
        };
      },
      t,
      r,
      n
    );
  },
  bu = 0,
  zp = function (e) {
    var t = Date.now(),
      r = Math.floor(Math.random() * 1e9);
    return bu++, e + "_" + r + bu + String(t);
  },
  Ou = function (e) {
    return e !== null && (e.tagName.toLowerCase() === "textarea" || e.tagName.toLowerCase() === "input");
  },
  Tu = function (e) {
    return typeof e > "u" || e === "" ? [] : Array.isArray(e) ? e : e.split(" ");
  },
  r2 = function (e, t) {
    return Tu(e).concat(Tu(t));
  },
  n2 = function () {
    return window.InputEvent && typeof InputEvent.prototype.getTargetRanges == "function";
  },
  l2 = function (e) {
    if (!("isConnected" in Node.prototype)) {
      for (var t = e, r = e.parentNode; r != null; ) (t = r), (r = t.parentNode);
      return t === e.ownerDocument;
    }
    return e.isConnected;
  },
  Ru = function (e, t) {
    e !== void 0 && (e.mode != null && typeof e.mode == "object" && typeof e.mode.set == "function" ? e.mode.set(t) : e.setMode(t));
  },
  $c = function () {
    return (
      ($c =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
          }
          return e;
        }),
      $c.apply(this, arguments)
    );
  },
  o2 = function (e, t, r) {
    var n,
      l,
      i = e.createElement("script");
    (i.referrerPolicy = "origin"), (i.type = "application/javascript"), (i.id = t.id), (i.src = t.src), (i.async = (n = t.async) !== null && n !== void 0 ? n : !1), (i.defer = (l = t.defer) !== null && l !== void 0 ? l : !1);
    var c = function () {
        i.removeEventListener("load", c), i.removeEventListener("error", s), r(t.src);
      },
      s = function (a) {
        i.removeEventListener("load", c), i.removeEventListener("error", s), r(t.src, a);
      };
    i.addEventListener("load", c), i.addEventListener("error", s), e.head && e.head.appendChild(i);
  },
  i2 = function (e) {
    var t = {},
      r = function (c, s) {
        var a = t[c];
        (a.done = !0), (a.error = s);
        for (var u = 0, f = a.handlers; u < f.length; u++) {
          var d = f[u];
          d(c, s);
        }
        a.handlers = [];
      },
      n = function (c, s, a) {
        var u = function (h) {
          return a !== void 0 ? a(h) : console.error(h);
        };
        if (c.length === 0) {
          u(new Error("At least one script must be provided"));
          return;
        }
        for (
          var f = 0,
            d = !1,
            p = function (h, y) {
              d || (y ? ((d = !0), u(y)) : ++f === c.length && s());
            },
            v = 0,
            x = c;
          v < x.length;
          v++
        ) {
          var g = x[v],
            j = t[g.src];
          if (j) j.done ? p(g.src, j.error) : j.handlers.push(p);
          else {
            var m = zp("tiny-");
            (t[g.src] = { id: m, src: g.src, done: !1, error: null, handlers: [p] }), o2(e, $c({ id: m }, g), r);
          }
        }
      },
      l = function () {
        for (var c, s = 0, a = Object.values(t); s < a.length; s++) {
          var u = a[s],
            f = e.getElementById(u.id);
          f != null && f.tagName === "SCRIPT" && ((c = f.parentNode) === null || c === void 0 || c.removeChild(f));
        }
        t = {};
      },
      i = function () {
        return e;
      };
    return { loadScripts: n, deleteScripts: l, getDocument: i };
  },
  c2 = function () {
    var e = [],
      t = function (l) {
        var i = e.find(function (c) {
          return c.getDocument() === l;
        });
        return i === void 0 && ((i = i2(l)), e.push(i)), i;
      },
      r = function (l, i, c, s, a) {
        var u = function () {
          return t(l).loadScripts(i, s, a);
        };
        c > 0 ? setTimeout(u, c) : u();
      },
      n = function () {
        for (var l = e.pop(); l != null; l = e.pop()) l.deleteScripts();
      };
    return { loadList: r, reinitialize: n };
  },
  s2 = c2(),
  Ri = function (e) {
    var t = e;
    return t && t.tinymce ? t.tinymce : null;
  },
  a2 = (function () {
    var e = function (t, r) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (n, l) {
              n.__proto__ = l;
            }) ||
          function (n, l) {
            for (var i in l) Object.prototype.hasOwnProperty.call(l, i) && (n[i] = l[i]);
          }),
        e(t, r)
      );
    };
    return function (t, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
      e(t, r);
      function n() {
        this.constructor = t;
      }
      t.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
    };
  })(),
  no = function () {
    return (
      (no =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
          }
          return e;
        }),
      no.apply(this, arguments)
    );
  },
  u2 = (function (e) {
    a2(t, e);
    function t(r) {
      var n,
        l,
        i,
        c = e.call(this, r) || this;
      return (
        (c.rollbackTimer = void 0),
        (c.valueCursor = void 0),
        (c.rollbackChange = function () {
          var s = c.editor,
            a = c.props.value;
          s &&
            a &&
            a !== c.currentContent &&
            s.undoManager.ignore(function () {
              if ((s.setContent(a), c.valueCursor && (!c.inline || s.hasFocus())))
                try {
                  s.selection.moveToBookmark(c.valueCursor);
                } catch {}
            }),
            (c.rollbackTimer = void 0);
        }),
        (c.handleBeforeInput = function (s) {
          if (c.props.value !== void 0 && c.props.value === c.currentContent && c.editor && (!c.inline || c.editor.hasFocus()))
            try {
              c.valueCursor = c.editor.selection.getBookmark(3);
            } catch {}
        }),
        (c.handleBeforeInputSpecial = function (s) {
          (s.key === "Enter" || s.key === "Backspace" || s.key === "Delete") && c.handleBeforeInput(s);
        }),
        (c.handleEditorChange = function (s) {
          var a = c.editor;
          if (a && a.initialized) {
            var u = a.getContent();
            c.props.value !== void 0 && c.props.value !== u && c.props.rollback !== !1 && (c.rollbackTimer || (c.rollbackTimer = window.setTimeout(c.rollbackChange, typeof c.props.rollback == "number" ? c.props.rollback : 200))), u !== c.currentContent && ((c.currentContent = u), Ti(c.props.onEditorChange) && c.props.onEditorChange(u, a));
          }
        }),
        (c.handleEditorChangeSpecial = function (s) {
          (s.key === "Backspace" || s.key === "Delete") && c.handleEditorChange(s);
        }),
        (c.initialise = function (s) {
          var a, u, f;
          s === void 0 && (s = 0);
          var d = c.elementRef.current;
          if (d) {
            if (!l2(d)) {
              if (s === 0)
                setTimeout(function () {
                  return c.initialise(1);
                }, 1);
              else if (s < 100)
                setTimeout(function () {
                  return c.initialise(s + 1);
                }, 100);
              else throw new Error("tinymce can only be initialised when in a document");
              return;
            }
            var p = Ri(c.view);
            if (!p) throw new Error("tinymce should have been loaded into global scope");
            var v = no(no({}, c.props.init), {
              selector: void 0,
              target: d,
              readonly: c.props.disabled,
              inline: c.inline,
              plugins: r2((a = c.props.init) === null || a === void 0 ? void 0 : a.plugins, c.props.plugins),
              toolbar: (u = c.props.toolbar) !== null && u !== void 0 ? u : (f = c.props.init) === null || f === void 0 ? void 0 : f.toolbar,
              setup: function (x) {
                (c.editor = x),
                  c.bindHandlers({}),
                  c.inline &&
                    !Ou(d) &&
                    x.once("PostRender", function (g) {
                      x.setContent(c.getInitialValue(), { no_events: !0 });
                    }),
                  c.props.init && Ti(c.props.init.setup) && c.props.init.setup(x);
              },
              init_instance_callback: function (x) {
                var g,
                  j,
                  m = c.getInitialValue();
                (c.currentContent = (g = c.currentContent) !== null && g !== void 0 ? g : x.getContent()), c.currentContent !== m && ((c.currentContent = m), x.setContent(m), x.undoManager.clear(), x.undoManager.add(), x.setDirty(!1));
                var h = (j = c.props.disabled) !== null && j !== void 0 ? j : !1;
                Ru(c.editor, h ? "readonly" : "design"), c.props.init && Ti(c.props.init.init_instance_callback) && c.props.init.init_instance_callback(x);
              },
            });
            c.inline || (d.style.visibility = ""), Ou(d) && (d.value = c.getInitialValue()), p.init(v);
          }
        }),
        (c.id = c.props.id || zp("tiny-react")),
        (c.elementRef = w.createRef()),
        (c.inline = (i = (n = c.props.inline) !== null && n !== void 0 ? n : (l = c.props.init) === null || l === void 0 ? void 0 : l.inline) !== null && i !== void 0 ? i : !1),
        (c.boundHandlers = {}),
        c
      );
    }
    return (
      Object.defineProperty(t.prototype, "view", {
        get: function () {
          var r, n;
          return (n = (r = this.elementRef.current) === null || r === void 0 ? void 0 : r.ownerDocument.defaultView) !== null && n !== void 0 ? n : window;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.componentDidUpdate = function (r) {
        var n = this,
          l,
          i;
        if ((this.rollbackTimer && (clearTimeout(this.rollbackTimer), (this.rollbackTimer = void 0)), this.editor && (this.bindHandlers(r), this.editor.initialized))) {
          if (((this.currentContent = (l = this.currentContent) !== null && l !== void 0 ? l : this.editor.getContent()), typeof this.props.initialValue == "string" && this.props.initialValue !== r.initialValue)) this.editor.setContent(this.props.initialValue), this.editor.undoManager.clear(), this.editor.undoManager.add(), this.editor.setDirty(!1);
          else if (typeof this.props.value == "string" && this.props.value !== this.currentContent) {
            var c = this.editor;
            c.undoManager.transact(function () {
              var a;
              if (!n.inline || c.hasFocus())
                try {
                  a = c.selection.getBookmark(3);
                } catch {}
              var u = n.valueCursor;
              if ((c.setContent(n.props.value), !n.inline || c.hasFocus()))
                for (var f = 0, d = [a, u]; f < d.length; f++) {
                  var p = d[f];
                  if (p)
                    try {
                      c.selection.moveToBookmark(p), (n.valueCursor = p);
                      break;
                    } catch {}
                }
            });
          }
          if (this.props.disabled !== r.disabled) {
            var s = (i = this.props.disabled) !== null && i !== void 0 ? i : !1;
            Ru(this.editor, s ? "readonly" : "design");
          }
        }
      }),
      (t.prototype.componentDidMount = function () {
        var r = this,
          n,
          l,
          i,
          c,
          s;
        if (Ri(this.view) !== null) this.initialise();
        else if (Array.isArray(this.props.tinymceScriptSrc) && this.props.tinymceScriptSrc.length === 0) (l = (n = this.props).onScriptsLoadError) === null || l === void 0 || l.call(n, new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));
        else if (!((i = this.elementRef.current) === null || i === void 0) && i.ownerDocument) {
          var a = function () {
              var f, d;
              (d = (f = r.props).onScriptsLoad) === null || d === void 0 || d.call(f), r.initialise();
            },
            u = function (f) {
              var d, p;
              (p = (d = r.props).onScriptsLoadError) === null || p === void 0 || p.call(d, f);
            };
          s2.loadList(this.elementRef.current.ownerDocument, this.getScriptSources(), (s = (c = this.props.scriptLoading) === null || c === void 0 ? void 0 : c.delay) !== null && s !== void 0 ? s : 0, a, u);
        }
      }),
      (t.prototype.componentWillUnmount = function () {
        var r = this,
          n = this.editor;
        n &&
          (n.off(this.changeEvents(), this.handleEditorChange),
          n.off(this.beforeInputEvent(), this.handleBeforeInput),
          n.off("keypress", this.handleEditorChangeSpecial),
          n.off("keydown", this.handleBeforeInputSpecial),
          n.off("NewBlock", this.handleEditorChange),
          Object.keys(this.boundHandlers).forEach(function (l) {
            n.off(l, r.boundHandlers[l]);
          }),
          (this.boundHandlers = {}),
          n.remove(),
          (this.editor = void 0));
      }),
      (t.prototype.render = function () {
        return this.inline ? this.renderInline() : this.renderIframe();
      }),
      (t.prototype.changeEvents = function () {
        var r,
          n,
          l,
          i = (l = (n = (r = Ri(this.view)) === null || r === void 0 ? void 0 : r.Env) === null || n === void 0 ? void 0 : n.browser) === null || l === void 0 ? void 0 : l.isIE();
        return i ? "change keyup compositionend setcontent CommentChange" : "change input compositionend setcontent CommentChange";
      }),
      (t.prototype.beforeInputEvent = function () {
        return n2() ? "beforeinput SelectionChange" : "SelectionChange";
      }),
      (t.prototype.renderInline = function () {
        var r = this.props.tagName,
          n = r === void 0 ? "div" : r;
        return w.createElement(n, { ref: this.elementRef, id: this.id });
      }),
      (t.prototype.renderIframe = function () {
        return w.createElement("textarea", { ref: this.elementRef, style: { visibility: "hidden" }, name: this.props.textareaName, id: this.id });
      }),
      (t.prototype.getScriptSources = function () {
        var r,
          n,
          l = (r = this.props.scriptLoading) === null || r === void 0 ? void 0 : r.async,
          i = (n = this.props.scriptLoading) === null || n === void 0 ? void 0 : n.defer;
        if (this.props.tinymceScriptSrc !== void 0)
          return typeof this.props.tinymceScriptSrc == "string"
            ? [{ src: this.props.tinymceScriptSrc, async: l, defer: i }]
            : this.props.tinymceScriptSrc.map(function (u) {
                return typeof u == "string" ? { src: u, async: l, defer: i } : u;
              });
        var c = this.props.cloudChannel,
          s = this.props.apiKey ? this.props.apiKey : "no-api-key",
          a = "https://cdn.tiny.cloud/1/".concat(s, "/tinymce/").concat(c, "/tinymce.min.js");
        return [{ src: a, async: l, defer: i }];
      }),
      (t.prototype.getInitialValue = function () {
        return typeof this.props.initialValue == "string" ? this.props.initialValue : typeof this.props.value == "string" ? this.props.value : "";
      }),
      (t.prototype.bindHandlers = function (r) {
        var n = this;
        if (this.editor !== void 0) {
          t2(this.editor, r, this.props, this.boundHandlers, function (s) {
            return n.props[s];
          });
          var l = function (s) {
              return s.onEditorChange !== void 0 || s.value !== void 0;
            },
            i = l(r),
            c = l(this.props);
          !i && c ? (this.editor.on(this.changeEvents(), this.handleEditorChange), this.editor.on(this.beforeInputEvent(), this.handleBeforeInput), this.editor.on("keydown", this.handleBeforeInputSpecial), this.editor.on("keyup", this.handleEditorChangeSpecial), this.editor.on("NewBlock", this.handleEditorChange)) : i && !c && (this.editor.off(this.changeEvents(), this.handleEditorChange), this.editor.off(this.beforeInputEvent(), this.handleBeforeInput), this.editor.off("keydown", this.handleBeforeInputSpecial), this.editor.off("keyup", this.handleEditorChangeSpecial), this.editor.off("NewBlock", this.handleEditorChange));
        }
      }),
      (t.propTypes = q0),
      (t.defaultProps = { cloudChannel: "6" }),
      t
    );
  })(w.Component);
function Dp({ handleEditorChange: e, initialValue: t }) {
  const r = w.useRef(null);
  return o.jsx(o.Fragment, { children: o.jsx(u2, { tinymceScriptSrc: "/tinymce/tinymce.min.js", onInit: (n, l) => (r.current = l), initialValue: t, init: { height: 500, menubar: !1, plugins: ["advlist", "autolink", "lists", "link", "charmap", "anchor", "searchreplace", "visualblocks", "code", "fullscreen", "insertdatetime", "table", "preview", "help", "wordcount"], toolbar: "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help", content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }" }, onEditorChange: e }) });
}
function f2() {
  const e = et(),
    t = tt((v) => v.auth),
    [r, n] = w.useState({ title: "", published: "draft" }),
    [l, i] = w.useState(null),
    c = (v) => {
      const { name: x, value: g } = v.target;
      n({ ...r, [x]: g });
    },
    s = "<p>Write Post Content Here.</p>",
    [a, u] = w.useState(""),
    f = (v, x) => {
      u(v);
    },
    d = (v) => {
      v.preventDefault(), p({ title: r.title, text: a, published: r.published });
    },
    p = async (v) => {
      try {
        const x = await fetch("https://good-news-backend.onrender.com/blogsAPI/posts", { method: "POST", headers: { "Content-Type": "application/json", authorization: t.token }, body: JSON.stringify(v) });
        if (!x.ok) {
          const m = await x.json();
          i(m.message);
          return;
        }
        const g = await x.json();
        i(g.message);
        const j = setTimeout(() => {
          e("/");
        }, 2500);
        return () => clearTimeout(j);
      } catch (x) {
        i("Error sending data to backend: " + x.message);
      }
    };
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx(Bt, {}),
      o.jsxs("div", {
        className: "bg-emerald-100 h-screen relative lg:py-20",
        children: [
          l && o.jsx("h3", { className: "response text-orange-500 text-xl font-bold container mx-auto text-center", children: l }),
          o.jsx("div", {
            className: `flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl\r
      xl:px-5 lg:flex-row`,
            children: o.jsx("div", {
              className: "flex flex-col items-center justify-center w-full   ",
              children: o.jsxs("div", {
                className: "relative  mt-5 mr-0 mb-0 ml-0  z-10  lg:mt-0 container",
                children: [
                  o.jsxs("form", {
                    onSubmit: d,
                    className: "flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10",
                    children: [
                      o.jsx("p", { className: "w-full text-4xl font-medium text-center leading-snug font-serif", children: "Create a New Post. " }),
                      o.jsxs("div", {
                        className: "w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8",
                        children: [
                          o.jsx("div", {
                            className: "relative",
                            children: o.jsx("input", {
                              value: r.title,
                              onChange: c,
                              required: !0,
                              name: "title",
                              placeholder: "Write Post Title Here.",
                              type: "text",
                              className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                            }),
                          }),
                          o.jsx("div", { className: "relative", children: o.jsx(Dp, { initialValue: s, handleEditorChange: f }) }),
                          o.jsxs("div", { className: "flex items-center space-x-2", children: [o.jsx("p", { className: "text-lg", children: "Ready to publish the post?" }), o.jsx("input", { name: "published", type: "radio", id: "option1", value: "published", checked: r.published === "published", onChange: c, className: "text-blue-500 focus:ring-blue-400" }), o.jsx("label", { htmlFor: "option1", className: "text-gray-700", children: "Publish" }), o.jsx("input", { name: "published", type: "radio", id: "option2", value: "draft", checked: r.published === "draft", onChange: c, className: "text-blue-500 focus:ring-blue-400" }), o.jsx("label", { htmlFor: "option2", className: "text-gray-700", children: "Save as Draft" })] }),
                          o.jsx("div", {
                            className: "relative",
                            children: o.jsx("button", {
                              className: `w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-emerald-500\r
                  rounded-lg transition duration-200 hover:bg-emerald-600 ease`,
                              children: "Submit",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsx("svg", {
                    viewBox: "0 0 91 91",
                    className: `absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-orange-300\r
            fill-current`,
                    children: o.jsx("g", {
                      stroke: "none",
                      strokeWidth: "1",
                      fillRule: "evenodd",
                      children: o.jsx("g", {
                        fillRule: "nonzero",
                        children: o.jsxs("g", {
                          children: [
                            o.jsxs("g", { children: [o.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 12)", children: [o.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 24)", children: [o.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 36)", children: [o.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 49)", children: [o.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 61)", children: [o.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 73)", children: [o.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 85)", children: [o.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  o.jsx("svg", {
                    viewBox: "0 0 91 91",
                    className: `absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-emerald-500\r
            fill-current`,
                    children: o.jsx("g", {
                      stroke: "none",
                      strokeWidth: "1",
                      fillRule: "evenodd",
                      children: o.jsx("g", {
                        fillRule: "nonzero",
                        children: o.jsxs("g", {
                          children: [
                            o.jsxs("g", { children: [o.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 12)", children: [o.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 24)", children: [o.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 36)", children: [o.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 49)", children: [o.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 61)", children: [o.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 73)", children: [o.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 85)", children: [o.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      o.jsx(Wt, {}),
    ],
  });
}
function d2() {
  const e = et(),
    t = tt((j) => j.auth);
  Qn();
  const [r, n] = w.useState({ title: "", published: "draft" }),
    [l, i] = w.useState(""),
    [c, s] = w.useState(""),
    a = (j, m) => {
      s(j), console.log(c);
    },
    [u, f] = w.useState(null),
    d = (j) => {
      const { name: m, value: h } = j.target;
      n({ ...r, [m]: h });
    },
    { postId: p } = Ls(),
    v = async () => {
      try {
        const j = await fetch("https://good-news-backend.onrender.com/blogsAPI/posts/" + p, { method: "GET", headers: { "Content-Type": "application/json", authorization: t.token } }),
          m = await j.json();
        if ((console.log(m), !j.ok)) {
          console.log(m.message);
          return;
        }
        n({ title: m.title, published: m.published }), i(m.text), s(m.text);
      } catch (j) {
        console.log(j);
      }
    };
  w.useEffect(() => {
    v();
  }, []);
  const x = (j) => {
      j.preventDefault(), g({ title: r.title, text: c, published: r.published });
    },
    g = async (j) => {
      console.log(j);
      try {
        const m = await fetch("https://good-news-backend.onrender.com/blogsAPI/posts/" + p, { method: "PUT", headers: { "Content-Type": "application/json", authorization: t.token }, body: JSON.stringify(j) });
        if (!m.ok) {
          const S = await m.json();
          f(S.message);
          return;
        }
        const h = await m.json();
        f(h.message);
        const y = setTimeout(() => {
          e("/");
        }, 2500);
        return () => clearTimeout(y);
      } catch (m) {
        f("Error sending data to backend: " + m.message);
      }
    };
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx(Bt, {}),
      o.jsxs("div", {
        className: "bg-emerald-100 h-screen relative lg:py-20",
        children: [
          u && o.jsx("h3", { className: "response text-orange-500 text-xl font-bold container mx-auto text-center", children: u }),
          o.jsx("div", {
            className: `flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl\r
      xl:px-5 lg:flex-row`,
            children: o.jsx("div", {
              className: "flex flex-col items-center justify-center w-full   ",
              children: o.jsxs("div", {
                className: "relative  mt-5 mr-0 mb-0 ml-0  z-10  lg:mt-0 container",
                children: [
                  o.jsxs("form", {
                    onSubmit: x,
                    className: "flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10",
                    children: [
                      o.jsx("p", { className: "w-full text-4xl font-medium text-center leading-snug font-serif", children: "Edit Post. " }),
                      o.jsxs("div", {
                        className: "w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8",
                        children: [
                          o.jsx("div", {
                            className: "relative",
                            children: o.jsx("input", {
                              value: r.title,
                              onChange: d,
                              required: !0,
                              name: "title",
                              placeholder: "Write Post Title Here.",
                              type: "text",
                              className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                            }),
                          }),
                          o.jsx("div", { className: "relative", children: o.jsx(Dp, { initialValue: l, handleEditorChange: a }) }),
                          o.jsxs("div", { className: "flex items-center space-x-2", children: [o.jsx("p", { className: "text-lg", children: "Ready to publish the post?" }), o.jsx("input", { name: "published", type: "radio", id: "option1", value: "published", checked: r.published === "published", onChange: d, className: "text-blue-500 focus:ring-blue-400" }), o.jsx("label", { htmlFor: "option1", className: "text-gray-700", children: "Publish" }), o.jsx("input", { name: "published", type: "radio", id: "option2", value: "draft", checked: r.published === "draft", onChange: d, className: "text-blue-500 focus:ring-blue-400" }), o.jsx("label", { htmlFor: "option2", className: "text-gray-700", children: "Save as Draft" })] }),
                          o.jsx("div", {
                            className: "relative",
                            children: o.jsx("button", {
                              className: `w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-emerald-500\r
                  rounded-lg transition duration-200 hover:bg-emerald-600 ease`,
                              children: "Update",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsx("svg", {
                    viewBox: "0 0 91 91",
                    className: `absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-orange-300\r
            fill-current`,
                    children: o.jsx("g", {
                      stroke: "none",
                      strokeWidth: "1",
                      fillRule: "evenodd",
                      children: o.jsx("g", {
                        fillRule: "nonzero",
                        children: o.jsxs("g", {
                          children: [
                            o.jsxs("g", { children: [o.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 12)", children: [o.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 24)", children: [o.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 36)", children: [o.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 49)", children: [o.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 61)", children: [o.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 73)", children: [o.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 85)", children: [o.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  o.jsx("svg", {
                    viewBox: "0 0 91 91",
                    className: `absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-emerald-500\r
            fill-current`,
                    children: o.jsx("g", {
                      stroke: "none",
                      strokeWidth: "1",
                      fillRule: "evenodd",
                      children: o.jsx("g", {
                        fillRule: "nonzero",
                        children: o.jsxs("g", {
                          children: [
                            o.jsxs("g", { children: [o.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 12)", children: [o.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 24)", children: [o.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 36)", children: [o.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 49)", children: [o.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 61)", children: [o.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 73)", children: [o.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                            o.jsxs("g", { transform: "translate(0 85)", children: [o.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), o.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), o.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      o.jsx(Wt, {}),
    ],
  });
}
const p2 = () => {
  const e = tt((t) => t.auth.isLoggedIn);
  return o.jsx(ny, { children: o.jsxs(Xx, { children: [o.jsx(Ke, { path: "/", element: o.jsx(bi, {}) }), o.jsx(Ke, { path: "/posts/:postId", element: o.jsx(H0, {}) }), o.jsx(Ke, { path: "/login", element: o.jsx(Oi, {}) }), o.jsx(Ke, { path: "/signup", element: o.jsx(Q0, {}) }), o.jsx(Ke, { path: "/update", element: e ? o.jsx(G0, {}) : o.jsx(bi, {}) }), o.jsx(Ke, { path: "/new_post", element: e ? o.jsx(f2, {}) : o.jsx(Oi, {}) }), o.jsx(Ke, { path: "/editpost/:postId", element: e ? o.jsx(d2, {}) : o.jsx(Oi, {}) }), o.jsx(Ke, { path: "/products/:productId", element: o.jsx(bi, {}) }), o.jsx(Ke, { path: "*", element: o.jsx(K0, {}) })] }) });
};
function m2() {
  const e = Qn(),
    t = tt((l) => l.auth),
    r = async () => {
      if (localStorage.getItem("token"))
        try {
          const i = await (await fetch("https://good-news-backend.onrender.com/blogsAPI/validateLoginStatus", { method: "POST", headers: { "Content-Type": "application/json", authorization: localStorage.getItem("token") } })).json();
          console.log("Console Logging Intentionally. Coming from validateLoginStatus"), console.log(i), i.firstName ? e(St.login({ firstName: i.firstName, token: localStorage.getItem("token"), expire: localStorage.getItem("expire") })) : (localStorage.removeItem("token"), e(St.logout()));
        } catch {}
    };
  w.useEffect(() => {
    r();
  }, []);
  const n = async () => {
    let i = (new Date(t.expire) - new Date()) / (60 * 1e3);
    if ((console.log("JWT token will get refreshed in " + (i - 1) + "minutes."), t.token && i < 1)) {
      console.log("RefreshJwtToken ran");
      try {
        const s = await (await fetch("https://good-news-backend.onrender.com/blogsAPI/refresh", { method: "GET", headers: { "Content-Type": "application/json" }, credentials: "include" })).json();
        console.log("Console Logging Intentionally. Coming from RefreshJwtToken"), console.log(s), s.firstName ? e(St.login({ firstName: s.firstName, token: s.token, expire: s.expire })) : (localStorage.removeItem("token"), localStorage.removeItem("expire"), e(St.logout()));
      } catch {}
    }
  };
  return (
    w.useEffect(() => {
      console.log("CONSOLE LOGGING INTENTIONALLY :> "), n();
      const l = setInterval(n, 60 * 1e3);
      return () => clearInterval(l);
    }, [t.expire, t.isLoggedIn]),
    o.jsx(o.Fragment, { children: o.jsx(p2, {}) })
  );
}
const h2 = { number: 0, showCounter: !0 },
  x2 = bp({
    name: "counter",
    initialState: h2,
    reducers: {
      increment(e) {
        e.counter++;
      },
      decrement(e) {
        e.counter--;
      },
      increase(e, t) {
        e.counter += t.payload;
      },
      decrease(e, t) {
        e.counter -= t.payload;
      },
      reset(e) {
        e.counter = 0;
      },
      toggleCounter(e) {
        e.showCounter = !e.showCounter;
      },
    },
  }),
  y2 = x2.reducer,
  v2 = R0({ reducer: { math: y2, auth: B0 } });
Li.createRoot(document.getElementById("root")).render(o.jsx(Bu.StrictMode, { children: o.jsx(Jy, { store: v2, children: o.jsx(m2, {}) }) }));
