import {
  require_prop_types
} from "./chunk-EGE5PBXS.js";
import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __commonJS,
  __toESM
} from "./chunk-UXIASGQL.js";

// node_modules/@formspree/core/dist/index.js
var require_dist = __commonJS({
  "node_modules/@formspree/core/dist/index.js"(exports, module) {
    var g2 = Object.defineProperty;
    var j2 = Object.getOwnPropertyDescriptor;
    var L = Object.getOwnPropertyNames;
    var V = Object.prototype.hasOwnProperty;
    var Y = (e, r) => {
      for (var t in r)
        g2(e, t, { get: r[t], enumerable: true });
    };
    var K2 = (e, r, t, o) => {
      if (r && typeof r == "object" || typeof r == "function")
        for (let s of L(r))
          !V.call(e, s) && s !== t && g2(e, s, { get: () => r[s], enumerable: !(o = j2(r, s)) || o.enumerable });
      return e;
    };
    var $ = (e) => K2(g2({}, "__esModule", { value: true }), e);
    var h = (e, r, t) => new Promise((o, s) => {
      var i = (a) => {
        try {
          l(t.next(a));
        } catch (m) {
          s(m);
        }
      }, c = (a) => {
        try {
          l(t.throw(a));
        } catch (m) {
          s(m);
        }
      }, l = (a) => a.done ? o(a.value) : Promise.resolve(a.value).then(i, c);
      l((t = t.apply(e, r)).next());
    });
    var W2 = {};
    Y(W2, { SubmissionError: () => p, appendExtraData: () => E2, createClient: () => F2, getDefaultClient: () => U2, isSubmissionError: () => A2 });
    module.exports = $(W2);
    var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var J = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
    function I2(e) {
      e = String(e);
      for (var r, t, o, s, i = "", c = 0, l = e.length % 3; c < e.length; ) {
        if ((t = e.charCodeAt(c++)) > 255 || (o = e.charCodeAt(c++)) > 255 || (s = e.charCodeAt(c++)) > 255)
          throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");
        r = t << 16 | o << 8 | s, i += u.charAt(r >> 18 & 63) + u.charAt(r >> 12 & 63) + u.charAt(r >> 6 & 63) + u.charAt(r & 63);
      }
      return l ? i.slice(0, l - 3) + "===".substring(l) : i;
    }
    function O2(e) {
      if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !J.test(e))
        throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
      e += "==".slice(2 - (e.length & 3));
      for (var r, t = "", o, s, i = 0; i < e.length; )
        r = u.indexOf(e.charAt(i++)) << 18 | u.indexOf(e.charAt(i++)) << 12 | (o = u.indexOf(e.charAt(i++))) << 6 | (s = u.indexOf(e.charAt(i++))), t += o === 64 ? String.fromCharCode(r >> 16 & 255) : s === 64 ? String.fromCharCode(r >> 16 & 255, r >> 8 & 255) : String.fromCharCode(r >> 16 & 255, r >> 8 & 255, r & 255);
      return t;
    }
    var G = () => navigator.webdriver || !!document.documentElement.getAttribute(O2("d2ViZHJpdmVy")) || !!window.callPhantom || !!window._phantom;
    var y = class {
      constructor() {
        this.loadedAt = Date.now(), this.webdriver = G();
      }
      data() {
        return { loadedAt: this.loadedAt, webdriver: this.webdriver };
      }
    };
    var S = class {
      constructor(r) {
        this.kind = "success";
        this.next = r.next;
      }
    };
    function w2(e) {
      return "next" in e && typeof e.next == "string";
    }
    var b2 = class {
      constructor(r, t) {
        this.paymentIntentClientSecret = r;
        this.resubmitKey = t;
        this.kind = "stripePluginPending";
      }
    };
    function _2(e) {
      if ("stripe" in e && "resubmitKey" in e && typeof e.resubmitKey == "string") {
        let { stripe: r } = e;
        return typeof r == "object" && r != null && "paymentIntentClientSecret" in r && typeof r.paymentIntentClientSecret == "string";
      }
      return false;
    }
    function A2(e) {
      return e.kind === "error";
    }
    var p = class {
      constructor(...r) {
        this.kind = "error";
        this.formErrors = [];
        this.fieldErrors = /* @__PURE__ */ new Map();
        var t;
        for (let o of r) {
          if (!o.field) {
            this.formErrors.push({ code: o.code && z2(o.code) ? o.code : "UNSPECIFIED", message: o.message });
            continue;
          }
          let s = (t = this.fieldErrors.get(o.field)) != null ? t : [];
          s.push({ code: o.code && Q(o.code) ? o.code : "UNSPECIFIED", message: o.message }), this.fieldErrors.set(o.field, s);
        }
      }
      getFormErrors() {
        return [...this.formErrors];
      }
      getFieldErrors(r) {
        var t;
        return (t = this.fieldErrors.get(r)) != null ? t : [];
      }
      getAllFieldErrors() {
        return Array.from(this.fieldErrors);
      }
    };
    function z2(e) {
      return e in B;
    }
    var B = { BLOCKED: "BLOCKED", EMPTY: "EMPTY", FILES_TOO_BIG: "FILES_TOO_BIG", FORM_NOT_FOUND: "FORM_NOT_FOUND", INACTIVE: "INACTIVE", NO_FILE_UPLOADS: "NO_FILE_UPLOADS", PROJECT_NOT_FOUND: "PROJECT_NOT_FOUND", TOO_MANY_FILES: "TOO_MANY_FILES" };
    function Q(e) {
      return e in Z;
    }
    var Z = { REQUIRED_FIELD_EMPTY: "REQUIRED_FIELD_EMPTY", REQUIRED_FIELD_MISSING: "REQUIRED_FIELD_MISSING", STRIPE_CLIENT_ERROR: "STRIPE_CLIENT_ERROR", STRIPE_SCA_ERROR: "STRIPE_SCA_ERROR", TYPE_EMAIL: "TYPE_EMAIL", TYPE_NUMERIC: "TYPE_NUMERIC", TYPE_TEXT: "TYPE_TEXT" };
    function P2(e) {
      return "errors" in e && Array.isArray(e.errors) && e.errors.every((r) => typeof r.message == "string") || "error" in e && typeof e.error == "string";
    }
    var D2 = "3.0.1";
    var v2 = (e) => I2(JSON.stringify(e));
    var N2 = (e) => {
      let r = `@formspree/core@${D2}`;
      return e ? `${e} ${r}` : r;
    };
    function E2(e, r, t) {
      e instanceof FormData ? e.append(r, t) : e[r] = t;
    }
    function M2(e) {
      return e !== null && typeof e == "object";
    }
    var R2 = class {
      constructor(r = {}) {
        this.project = r.project, this.stripe = r.stripe, typeof window != "undefined" && (this.session = new y());
      }
      submitForm(s, i) {
        return h(this, arguments, function* (r, t, o = {}) {
          let c = o.endpoint || "https://formspree.io", l = this.project ? `${c}/p/${this.project}/f/${r}` : `${c}/f/${r}`, a = { Accept: "application/json", "Formspree-Client": N2(o.clientName) };
          this.session && (a["Formspree-Session-Data"] = v2(this.session.data())), t instanceof FormData || (a["Content-Type"] = "application/json");
          function m(f) {
            return h(this, null, function* () {
              try {
                let n = yield (yield fetch(l, { method: "POST", mode: "cors", body: f instanceof FormData ? f : JSON.stringify(f), headers: a })).json();
                if (M2(n)) {
                  if (P2(n))
                    return Array.isArray(n.errors) ? new p(...n.errors) : new p({ message: n.error });
                  if (_2(n))
                    return new b2(n.stripe.paymentIntentClientSecret, n.resubmitKey);
                  if (w2(n))
                    return new S({ next: n.next });
                }
                return new p({ message: "Unexpected response format" });
              } catch (d2) {
                let n = d2 instanceof Error ? d2.message : `Unknown error while posting to Formspree: ${JSON.stringify(d2)}`;
                return new p({ message: n });
              }
            });
          }
          if (this.stripe && o.createPaymentMethod) {
            let f = yield o.createPaymentMethod();
            if (f.error)
              return new p({ code: "STRIPE_CLIENT_ERROR", field: "paymentMethod", message: "Error creating payment method" });
            E2(t, "paymentMethod", f.paymentMethod.id);
            let d2 = yield m(t);
            if (d2.kind === "error")
              return d2;
            if (d2.kind === "stripePluginPending") {
              let n = yield this.stripe.handleCardAction(d2.paymentIntentClientSecret);
              if (n.error)
                return new p({ code: "STRIPE_CLIENT_ERROR", field: "paymentMethod", message: "Stripe SCA error" });
              t instanceof FormData ? t.delete("paymentMethod") : delete t.paymentMethod, E2(t, "paymentIntent", n.paymentIntent.id), E2(t, "resubmitKey", d2.resubmitKey);
              let x2 = yield m(t);
              return k(x2), x2;
            }
            return d2;
          }
          let T2 = yield m(t);
          return k(T2), T2;
        });
      }
    };
    function k(e) {
      let { kind: r } = e;
      if (r !== "success" && r !== "error")
        throw new Error(`Unexpected submission result (kind: ${r})`);
    }
    var F2 = (e) => new R2(e);
    var U2 = () => (C2 || (C2 = F2()), C2);
    var C2;
  }
});

// node_modules/@stripe/stripe-js/dist/pure.js
var require_pure = __commonJS({
  "node_modules/@stripe/stripe-js/dist/pure.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _typeof2(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof2 = function(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof2(obj);
    }
    var V3_URL = "https://js.stripe.com/v3";
    var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
    var EXISTING_SCRIPT_MESSAGE = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used";
    var findScript = function findScript2() {
      var scripts = document.querySelectorAll('script[src^="'.concat(V3_URL, '"]'));
      for (var i = 0; i < scripts.length; i++) {
        var script = scripts[i];
        if (!V3_URL_REGEX.test(script.src)) {
          continue;
        }
        return script;
      }
      return null;
    };
    var injectScript = function injectScript2(params) {
      var queryString = params && !params.advancedFraudSignals ? "?advancedFraudSignals=false" : "";
      var script = document.createElement("script");
      script.src = "".concat(V3_URL).concat(queryString);
      var headOrBody = document.head || document.body;
      if (!headOrBody) {
        throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
      }
      headOrBody.appendChild(script);
      return script;
    };
    var registerWrapper = function registerWrapper2(stripe, startTime) {
      if (!stripe || !stripe._registerWrapper) {
        return;
      }
      stripe._registerWrapper({
        name: "stripe-js",
        version: "1.54.2",
        startTime
      });
    };
    var stripePromise = null;
    var loadScript = function loadScript2(params) {
      if (stripePromise !== null) {
        return stripePromise;
      }
      stripePromise = new Promise(function(resolve, reject) {
        if (typeof window === "undefined" || typeof document === "undefined") {
          resolve(null);
          return;
        }
        if (window.Stripe && params) {
          console.warn(EXISTING_SCRIPT_MESSAGE);
        }
        if (window.Stripe) {
          resolve(window.Stripe);
          return;
        }
        try {
          var script = findScript();
          if (script && params) {
            console.warn(EXISTING_SCRIPT_MESSAGE);
          } else if (!script) {
            script = injectScript(params);
          }
          script.addEventListener("load", function() {
            if (window.Stripe) {
              resolve(window.Stripe);
            } else {
              reject(new Error("Stripe.js not available"));
            }
          });
          script.addEventListener("error", function() {
            reject(new Error("Failed to load Stripe.js"));
          });
        } catch (error) {
          reject(error);
          return;
        }
      });
      return stripePromise;
    };
    var initStripe = function initStripe2(maybeStripe, args, startTime) {
      if (maybeStripe === null) {
        return null;
      }
      var stripe = maybeStripe.apply(void 0, args);
      registerWrapper(stripe, startTime);
      return stripe;
    };
    var validateLoadParams = function validateLoadParams2(params) {
      var errorMessage = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(params), "\n");
      if (params === null || _typeof2(params) !== "object") {
        throw new Error(errorMessage);
      }
      if (Object.keys(params).length === 1 && typeof params.advancedFraudSignals === "boolean") {
        return params;
      }
      throw new Error(errorMessage);
    };
    var loadParams;
    var loadStripeCalled = false;
    var loadStripe = function loadStripe2() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      loadStripeCalled = true;
      var startTime = Date.now();
      return loadScript(loadParams).then(function(maybeStripe) {
        return initStripe(maybeStripe, args, startTime);
      });
    };
    loadStripe.setLoadParameters = function(params) {
      if (loadStripeCalled && loadParams) {
        var validatedParams = validateLoadParams(params);
        var parameterKeys = Object.keys(validatedParams);
        var sameParameters = parameterKeys.reduce(function(previousValue, currentValue) {
          var _loadParams;
          return previousValue && params[currentValue] === ((_loadParams = loadParams) === null || _loadParams === void 0 ? void 0 : _loadParams[currentValue]);
        }, true);
        if (sameParameters) {
          return;
        }
      }
      if (loadStripeCalled) {
        throw new Error("You cannot change load parameters after calling loadStripe");
      }
      loadParams = validateLoadParams(params);
    };
    exports.loadStripe = loadStripe;
  }
});

// node_modules/@stripe/stripe-js/pure.js
var require_pure2 = __commonJS({
  "node_modules/@stripe/stripe-js/pure.js"(exports, module) {
    module.exports = require_pure();
  }
});

// node_modules/@stripe/react-stripe-js/dist/react-stripe.esm.js
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var usePrevious = function usePrevious2(value) {
  var ref = import_react.default.useRef(value);
  import_react.default.useEffect(function() {
    ref.current = value;
  }, [value]);
  return ref.current;
};
var isUnknownObject = function isUnknownObject2(raw) {
  return raw !== null && _typeof(raw) === "object";
};
var isPromise = function isPromise2(raw) {
  return isUnknownObject(raw) && typeof raw.then === "function";
};
var isStripe = function isStripe2(raw) {
  return isUnknownObject(raw) && typeof raw.elements === "function" && typeof raw.createToken === "function" && typeof raw.createPaymentMethod === "function" && typeof raw.confirmCardPayment === "function";
};
var PLAIN_OBJECT_STR = "[object Object]";
var isEqual = function isEqual2(left, right) {
  if (!isUnknownObject(left) || !isUnknownObject(right)) {
    return left === right;
  }
  var leftArray = Array.isArray(left);
  var rightArray = Array.isArray(right);
  if (leftArray !== rightArray)
    return false;
  var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
  var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
  if (leftPlainObject !== rightPlainObject)
    return false;
  if (!leftPlainObject && !leftArray)
    return left === right;
  var leftKeys = Object.keys(left);
  var rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length)
    return false;
  var keySet = {};
  for (var i = 0; i < leftKeys.length; i += 1) {
    keySet[leftKeys[i]] = true;
  }
  for (var _i = 0; _i < rightKeys.length; _i += 1) {
    keySet[rightKeys[_i]] = true;
  }
  var allKeys = Object.keys(keySet);
  if (allKeys.length !== leftKeys.length) {
    return false;
  }
  var l = left;
  var r = right;
  var pred = function pred2(key) {
    return isEqual2(l[key], r[key]);
  };
  return allKeys.every(pred);
};
var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates2(options, prevOptions, immutableKeys) {
  if (!isUnknownObject(options)) {
    return null;
  }
  return Object.keys(options).reduce(function(newOptions, key) {
    var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);
    if (immutableKeys.includes(key)) {
      if (isUpdated) {
        console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
      }
      return newOptions;
    }
    if (!isUpdated) {
      return newOptions;
    }
    return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
  }, null);
};
var INVALID_STRIPE_ERROR = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.";
var validateStripe = function validateStripe2(maybeStripe) {
  if (maybeStripe === null || isStripe(maybeStripe)) {
    return maybeStripe;
  }
  throw new Error(INVALID_STRIPE_ERROR);
};
var parseStripeProp = function parseStripeProp2(raw) {
  if (isPromise(raw)) {
    return {
      tag: "async",
      stripePromise: Promise.resolve(raw).then(validateStripe)
    };
  }
  var stripe = validateStripe(raw);
  if (stripe === null) {
    return {
      tag: "empty"
    };
  }
  return {
    tag: "sync",
    stripe
  };
};
var ElementsContext = import_react.default.createContext(null);
ElementsContext.displayName = "ElementsContext";
var parseElementsContext = function parseElementsContext2(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
  }
  return ctx;
};
var CartElementContext = import_react.default.createContext(null);
CartElementContext.displayName = "CartElementContext";
var parseCartElementContext = function parseCartElementContext2(ctx, useCase) {
  if (!ctx) {
    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
  }
  return ctx;
};
var Elements = function Elements2(_ref) {
  var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
  var parsed = import_react.default.useMemo(function() {
    return parseStripeProp(rawStripeProp);
  }, [rawStripeProp]);
  var _React$useState = import_react.default.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), cart = _React$useState2[0], setCart = _React$useState2[1];
  var _React$useState3 = import_react.default.useState(null), _React$useState4 = _slicedToArray(_React$useState3, 2), cartState = _React$useState4[0], setCartState = _React$useState4[1];
  var _React$useState5 = import_react.default.useState(function() {
    return {
      stripe: parsed.tag === "sync" ? parsed.stripe : null,
      elements: parsed.tag === "sync" ? parsed.stripe.elements(options) : null
    };
  }), _React$useState6 = _slicedToArray(_React$useState5, 2), ctx = _React$useState6[0], setContext = _React$useState6[1];
  import_react.default.useEffect(function() {
    var isMounted = true;
    var safeSetContext = function safeSetContext2(stripe) {
      setContext(function(ctx2) {
        if (ctx2.stripe)
          return ctx2;
        return {
          stripe,
          elements: stripe.elements(options)
        };
      });
    };
    if (parsed.tag === "async" && !ctx.stripe) {
      parsed.stripePromise.then(function(stripe) {
        if (stripe && isMounted) {
          safeSetContext(stripe);
        }
      });
    } else if (parsed.tag === "sync" && !ctx.stripe) {
      safeSetContext(parsed.stripe);
    }
    return function() {
      isMounted = false;
    };
  }, [parsed, ctx, options]);
  var prevStripe = usePrevious(rawStripeProp);
  import_react.default.useEffect(function() {
    if (prevStripe !== null && prevStripe !== rawStripeProp) {
      console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.");
    }
  }, [prevStripe, rawStripeProp]);
  var prevOptions = usePrevious(options);
  import_react.default.useEffect(function() {
    if (!ctx.elements) {
      return;
    }
    var updates = extractAllowedOptionsUpdates(options, prevOptions, ["clientSecret", "fonts"]);
    if (updates) {
      ctx.elements.update(updates);
    }
  }, [options, prevOptions, ctx.elements]);
  import_react.default.useEffect(function() {
    var anyStripe = ctx.stripe;
    if (!anyStripe || !anyStripe._registerWrapper || !anyStripe.registerAppInfo) {
      return;
    }
    anyStripe._registerWrapper({
      name: "react-stripe-js",
      version: "1.16.5"
    });
    anyStripe.registerAppInfo({
      name: "react-stripe-js",
      version: "1.16.5",
      url: "https://stripe.com/docs/stripe-js/react"
    });
  }, [ctx.stripe]);
  return import_react.default.createElement(ElementsContext.Provider, {
    value: ctx
  }, import_react.default.createElement(CartElementContext.Provider, {
    value: {
      cart,
      setCart,
      cartState,
      setCartState
    }
  }, children));
};
Elements.propTypes = {
  stripe: import_prop_types.default.any,
  options: import_prop_types.default.object
};
var useElementsContextWithUseCase = function useElementsContextWithUseCase2(useCaseMessage) {
  var ctx = import_react.default.useContext(ElementsContext);
  return parseElementsContext(ctx, useCaseMessage);
};
var useCartElementContextWithUseCase = function useCartElementContextWithUseCase2(useCaseMessage) {
  var ctx = import_react.default.useContext(CartElementContext);
  return parseCartElementContext(ctx, useCaseMessage);
};
var ElementsConsumer = function ElementsConsumer2(_ref2) {
  var children = _ref2.children;
  var ctx = useElementsContextWithUseCase("mounts <ElementsConsumer>");
  return children(ctx);
};
ElementsConsumer.propTypes = {
  children: import_prop_types.default.func.isRequired
};
var useAttachEvent = function useAttachEvent2(element, event, cb) {
  var cbDefined = !!cb;
  var cbRef = import_react.default.useRef(cb);
  import_react.default.useEffect(function() {
    cbRef.current = cb;
  }, [cb]);
  import_react.default.useEffect(function() {
    if (!cbDefined || !element) {
      return function() {
      };
    }
    var decoratedCb = function decoratedCb2() {
      if (cbRef.current) {
        cbRef.current.apply(cbRef, arguments);
      }
    };
    element.on(event, decoratedCb);
    return function() {
      element.off(event, decoratedCb);
    };
  }, [cbDefined, event, element, cbRef]);
};
var capitalized = function capitalized2(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var createElementComponent = function createElementComponent2(type, isServer2) {
  var displayName = "".concat(capitalized(type), "Element");
  var ClientElement = function ClientElement2(_ref) {
    var id = _ref.id, className = _ref.className, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, onBlur = _ref.onBlur, onFocus = _ref.onFocus, onReady = _ref.onReady, onChange = _ref.onChange, onEscape = _ref.onEscape, onClick = _ref.onClick, onLoadError = _ref.onLoadError, onLoaderStart = _ref.onLoaderStart, onNetworksChange = _ref.onNetworksChange, onCheckout = _ref.onCheckout, onLineItemClick = _ref.onLineItemClick, onConfirm = _ref.onConfirm, onCancel = _ref.onCancel, onShippingAddressChange = _ref.onShippingAddressChange, onShippingRateChange = _ref.onShippingRateChange;
    var _useElementsContextWi = useElementsContextWithUseCase("mounts <".concat(displayName, ">")), elements = _useElementsContextWi.elements;
    var _React$useState = import_react.default.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), element = _React$useState2[0], setElement = _React$useState2[1];
    var elementRef = import_react.default.useRef(null);
    var domNode = import_react.default.useRef(null);
    var _useCartElementContex = useCartElementContextWithUseCase("mounts <".concat(displayName, ">")), setCart = _useCartElementContex.setCart, setCartState = _useCartElementContex.setCartState;
    useAttachEvent(element, "blur", onBlur);
    useAttachEvent(element, "focus", onFocus);
    useAttachEvent(element, "escape", onEscape);
    useAttachEvent(element, "click", onClick);
    useAttachEvent(element, "loaderror", onLoadError);
    useAttachEvent(element, "loaderstart", onLoaderStart);
    useAttachEvent(element, "networkschange", onNetworksChange);
    useAttachEvent(element, "lineitemclick", onLineItemClick);
    useAttachEvent(element, "confirm", onConfirm);
    useAttachEvent(element, "cancel", onCancel);
    useAttachEvent(element, "shippingaddresschange", onShippingAddressChange);
    useAttachEvent(element, "shippingratechange", onShippingRateChange);
    var readyCallback;
    if (type === "cart") {
      readyCallback = function readyCallback2(event) {
        setCartState(event);
        onReady && onReady(event);
      };
    } else if (onReady) {
      if (type === "payButton") {
        readyCallback = onReady;
      } else {
        readyCallback = function readyCallback2() {
          onReady(element);
        };
      }
    }
    useAttachEvent(element, "ready", readyCallback);
    var changeCallback = type === "cart" ? function(event) {
      setCartState(event);
      onChange && onChange(event);
    } : onChange;
    useAttachEvent(element, "change", changeCallback);
    var checkoutCallback = type === "cart" ? function(event) {
      setCartState(event);
      onCheckout && onCheckout(event);
    } : onCheckout;
    useAttachEvent(element, "checkout", checkoutCallback);
    import_react.default.useLayoutEffect(function() {
      if (elementRef.current === null && elements && domNode.current !== null) {
        var newElement = elements.create(type, options);
        if (type === "cart" && setCart) {
          setCart(newElement);
        }
        elementRef.current = newElement;
        setElement(newElement);
        newElement.mount(domNode.current);
      }
    }, [elements, options, setCart]);
    var prevOptions = usePrevious(options);
    import_react.default.useEffect(function() {
      if (!elementRef.current) {
        return;
      }
      var updates = extractAllowedOptionsUpdates(options, prevOptions, ["paymentRequest"]);
      if (updates) {
        elementRef.current.update(updates);
      }
    }, [options, prevOptions]);
    import_react.default.useLayoutEffect(function() {
      return function() {
        if (elementRef.current) {
          elementRef.current.destroy();
          elementRef.current = null;
        }
      };
    }, []);
    return import_react.default.createElement("div", {
      id,
      className,
      ref: domNode
    });
  };
  var ServerElement = function ServerElement2(props) {
    useElementsContextWithUseCase("mounts <".concat(displayName, ">"));
    useCartElementContextWithUseCase("mounts <".concat(displayName, ">"));
    var id = props.id, className = props.className;
    return import_react.default.createElement("div", {
      id,
      className
    });
  };
  var Element = isServer2 ? ServerElement : ClientElement;
  Element.propTypes = {
    id: import_prop_types.default.string,
    className: import_prop_types.default.string,
    onChange: import_prop_types.default.func,
    onBlur: import_prop_types.default.func,
    onFocus: import_prop_types.default.func,
    onReady: import_prop_types.default.func,
    onEscape: import_prop_types.default.func,
    onClick: import_prop_types.default.func,
    onLoadError: import_prop_types.default.func,
    onLoaderStart: import_prop_types.default.func,
    onNetworksChange: import_prop_types.default.func,
    onCheckout: import_prop_types.default.func,
    onLineItemClick: import_prop_types.default.func,
    onConfirm: import_prop_types.default.func,
    onCancel: import_prop_types.default.func,
    onShippingAddressChange: import_prop_types.default.func,
    onShippingRateChange: import_prop_types.default.func,
    options: import_prop_types.default.object
  };
  Element.displayName = displayName;
  Element.__elementType = type;
  return Element;
};
var isServer = typeof window === "undefined";
var AuBankAccountElement = createElementComponent("auBankAccount", isServer);
var CardElement = createElementComponent("card", isServer);
var CardNumberElement = createElementComponent("cardNumber", isServer);
var CardExpiryElement = createElementComponent("cardExpiry", isServer);
var CardCvcElement = createElementComponent("cardCvc", isServer);
var FpxBankElement = createElementComponent("fpxBank", isServer);
var IbanElement = createElementComponent("iban", isServer);
var IdealBankElement = createElementComponent("idealBank", isServer);
var P24BankElement = createElementComponent("p24Bank", isServer);
var EpsBankElement = createElementComponent("epsBank", isServer);
var PaymentElement = createElementComponent("payment", isServer);
var PayButtonElement = createElementComponent("payButton", isServer);
var PaymentRequestButtonElement = createElementComponent("paymentRequestButton", isServer);
var LinkAuthenticationElement = createElementComponent("linkAuthentication", isServer);
var AddressElement = createElementComponent("address", isServer);
var ShippingAddressElement = createElementComponent("shippingAddress", isServer);
var CartElement = createElementComponent("cart", isServer);
var PaymentMethodMessagingElement = createElementComponent("paymentMethodMessaging", isServer);
var AffirmMessageElement = createElementComponent("affirmMessage", isServer);
var AfterpayClearpayMessageElement = createElementComponent("afterpayClearpayMessage", isServer);

// node_modules/@formspree/react/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
var import_core = __toESM(require_dist(), 1);
var import_pure = __toESM(require_pure2(), 1);
var import_react3 = __toESM(require_react(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_core2 = __toESM(require_dist(), 1);
var import_react5 = __toESM(require_react(), 1);
function T(e) {
  let { prefix: t, field: s, errors: r, ...i } = e;
  if (r == null)
    return null;
  let a = s ? r.getFieldErrors(s) : r.getFormErrors();
  return a.length === 0 ? null : import_react2.default.createElement("div", { ...i }, t ? `${t} ` : null, a.map((l) => l.message).join(", "));
}
var v = import_react3.default.createContext(null);
function _(e) {
  let { children: t, project: s, stripePK: r } = e, [i, a] = (0, import_react3.useState)((0, import_core.createClient)({ project: s })), l = (0, import_react3.useMemo)(() => r ? (0, import_pure.loadStripe)(r) : null, [r]);
  return (0, import_react3.useEffect)(() => {
    let n = true;
    return n && a((o) => o.project !== s ? (0, import_core.createClient)({ ...o, project: s }) : o), () => {
      n = false;
    };
  }, [s]), (0, import_react3.useEffect)(() => {
    let n = true;
    return l == null ? void 0 : l.then((o) => {
      n && o && a((m) => (0, import_core.createClient)({ ...m, stripe: o }));
    }), () => {
      n = false;
    };
  }, [l]), import_react3.default.createElement(v.Provider, { value: { client: i } }, l ? import_react3.default.createElement(Elements, { stripe: l }, t) : t);
}
function F() {
  return (0, import_react3.useContext)(v) ?? { client: (0, import_core.getDefaultClient)() };
}
var P = "2.5.1";
var N = `@formspree/react@${P}`;
function x(e, t = {}) {
  let s = F(), { client: r = s.client, extraData: i, onError: a, onSuccess: l, origin: n } = t, { stripe: o } = r, m = (0, import_react5.useMemo)(() => o == null ? void 0 : o.elements().getElement(CardElement), [o]);
  return async function(p) {
    let u = O(p) ? U(p) : p;
    if (typeof i == "object")
      for (let [h, y] of Object.entries(i)) {
        let c;
        typeof y == "function" ? c = await y() : c = y, c !== void 0 && (0, import_core2.appendExtraData)(u, h, c);
      }
    let f = await r.submitForm(e, u, { endpoint: n, clientName: N, createPaymentMethod: o && m ? () => o.createPaymentMethod({ type: "card", card: m, billing_details: z(u) }) : void 0 });
    (0, import_core2.isSubmissionError)(f) ? a == null ? void 0 : a(f) : l == null ? void 0 : l(f);
  };
}
function O(e) {
  return "preventDefault" in e && typeof e.preventDefault == "function";
}
function U(e) {
  e.preventDefault();
  let t = e.currentTarget;
  if (t.tagName != "FORM")
    throw new Error("submit was triggered for a non-form element");
  return new FormData(t);
}
function z(e) {
  let t = { address: I(e) };
  for (let s of ["name", "email", "phone"]) {
    let r = e instanceof FormData ? e.get(s) : e[s];
    r && typeof r == "string" && (t[s] = r);
  }
  return t;
}
function I(e) {
  let t = {};
  for (let [s, r] of [["address_line1", "line1"], ["address_line2", "line2"], ["address_city", "city"], ["address_country", "country"], ["address_state", "state"], ["address_postal_code", "postal_code"]]) {
    let i = e instanceof FormData ? e.get(s) : e[s];
    i && typeof i == "string" && (t[r] = i);
  }
  return t;
}
function W(e, t = {}) {
  let [s, r] = (0, import_react4.useState)(null), [i, a] = (0, import_react4.useState)(null), [l, n] = (0, import_react4.useState)(false), [o, m] = (0, import_react4.useState)(false);
  if (!e)
    throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');
  let S = x(e, { client: t.client, extraData: t.data, onError(p) {
    r(p), n(false), m(false);
  }, onSuccess(p) {
    r(null), a(p), n(false), m(true);
  }, origin: t.endpoint });
  return [{ errors: s, result: i, submitting: l, succeeded: o }, async function(u) {
    n(true), await S(u);
  }, function() {
    r(null), a(null), n(false), m(false);
  }];
}
export {
  CardElement,
  _ as FormspreeProvider,
  T as ValidationError,
  W as useForm,
  F as useFormspree,
  x as useSubmit
};
//# sourceMappingURL=@formspree_react.js.map
