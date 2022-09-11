'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var require$$1 = require('http');
var require$$2 = require('https');
var require$$3$1 = require('stream');
var require$$0$1 = require('tty');
var require$$3 = require('fs');
var require$$4 = require('net');
var require$$8 = require('zlib');
var require$$1$1 = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);
var require$$3__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$3$1);
var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
var require$$3__default = /*#__PURE__*/_interopDefaultLegacy(require$$3);
var require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
var require$$8__default = /*#__PURE__*/_interopDefaultLegacy(require$$8);
var require$$1__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$1$1);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n\n\n*{\n    font-family: \"Lexend\";\n}\n.flex{\n    display: flex;\n}\n.flex-col{\n    display: flex;\n    flex-direction: column;\n}\n.gap-10{\n    gap: 10px;\n}\n.justify-center{\n    justify-content: center;\n}\n.justify-between{\n    justify-content: space-between;\n}\n.justify-around{\n    justify-content: space-around;\n}\n.w-full{\n    width: 100%;\n}\n.w-1-2{\n    width: 50%;\n}\n.w-1-3{\n    width: 33.33%;\n}\n.w-1-4{\n    width: 25%;\n}\n.w-screen{\n    width: 100vw;\n}\n\n.h-screen{\n    height: 100vh;\n}\n.h-full{\n    height: 100%;\n}\n\n.align-items-center{\n    align-items: center;\n}\n.align-items-start{\n   \n    align-items: start;\n}\n.align-items-end{\n    align-items: end;\n}\n.align-items-baseline{\n    align-items: baseline;\n}\n.align-items-stretch{\n    align-items: stretch;\n}\n.align-content-start{\n    align-content: start;\n}\n.align-content-end{\n    align-content: end;\n}\n.align-content-center{\n    align-content: center;\n}\n\n.flex-row-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.flex-col-center{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#username{\n    width: \"200px\";\n    height: 40px;\n    border-radius: 5px;\n    border: 1px solid #ccc;\n    padding: 0 10px;\n    font-size: 16px;\n    color: #333;\n    outline: none;\n}\n#password{\n    width: \"200px\";\n    height: 40px;\n    border-radius: 5px;\n    border: 1px solid #ccc;\n    padding: 0 10px;\n    font-size: 16px;\n    color: #333;\n    outline: none;\n}\n\n.btn-emoji{\n    width: \"200px\";\n    height: 40px;\n    border-radius: 5px;\n    border: 1px solid #ccc;\n    padding: 0 10px;\n    font-size: 16px;\n    color: #333;\n    outline: none;\n    cursor: pointer;\n}\n.signup-button{\n    width: \"200px\";\n    height: 40px;\n    border-radius: 5px;\n    border: 1px solid #ccc;\n    padding: 0 10px;\n    font-size: 16px;\n    color: #fff;\n    outline: none;\n    cursor: pointer;\n    background-color: #2065d1;\n}";
styleInject(css_248z);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var axios$3 = {exports: {}};

var axios$2 = {exports: {}};

var bind$2 = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

var bind$1 = bind$2;

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

// eslint-disable-next-line func-names
var kindOf = (function(cache) {
  // eslint-disable-next-line func-names
  return function(thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
})(Object.create(null));

function kindOfTest(type) {
  type = type.toLowerCase();
  return function isKindOf(thing) {
    return kindOf(thing) === type;
  };
}

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer$1(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
var isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (kindOf(val) !== 'object') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
var isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
var isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(thing) {
  var pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
}

/**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
var isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind$1(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */

function inherits$1(constructor, superConstructor, props, descriptors) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */

function toFlatObject(sourceObj, destObj, filter) {
  var props;
  var i;
  var prop;
  var merged = {};

  destObj = destObj || {};

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if (!merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = Object.getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */
function endsWith(str, searchString, position) {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object
 * @param {*} [thing]
 * @returns {Array}
 */
function toArray(thing) {
  if (!thing) return null;
  var i = thing.length;
  if (isUndefined(i)) return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

// eslint-disable-next-line func-names
var isTypedArray$1 = (function(TypedArray) {
  // eslint-disable-next-line func-names
  return function(thing) {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));

var utils$b = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer$1,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM,
  inherits: inherits$1,
  toFlatObject: toFlatObject,
  kindOf: kindOf,
  kindOfTest: kindOfTest,
  endsWith: endsWith,
  toArray: toArray,
  isTypedArray: isTypedArray$1,
  isFileList: isFileList
};

var utils$a = utils$b;

function encode$1(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL$1 = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$a.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils$a.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils$a.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils$a.forEach(val, function parseValue(v) {
        if (utils$a.isDate(v)) {
          v = v.toISOString();
        } else if (utils$a.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode$1(key) + '=' + encode$1(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

var utils$9 = utils$b;

function InterceptorManager$1() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager$1.prototype.forEach = function forEach(fn) {
  utils$9.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager$1;

var utils$8 = utils$b;

var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$8.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

var utils$7 = utils$b;

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
function AxiosError$2(message, code, config, request, response) {
  Error.call(this);
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils$7.inherits(AxiosError$2, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

var prototype = AxiosError$2.prototype;
var descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED'
// eslint-disable-next-line func-names
].forEach(function(code) {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError$2, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError$2.from = function(error, code, config, request, response, customProps) {
  var axiosError = Object.create(prototype);

  utils$7.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  });

  AxiosError$2.call(axiosError, error.message, code, config, request, response);

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

var AxiosError_1 = AxiosError$2;

var transitional = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

var utils$6 = utils$b;

/**
 * Convert a data object to FormData
 * @param {Object} obj
 * @param {?Object} [formData]
 * @returns {Object}
 **/

function toFormData$1(obj, formData) {
  // eslint-disable-next-line no-param-reassign
  formData = formData || new FormData();

  var stack = [];

  function convertValue(value) {
    if (value === null) return '';

    if (utils$6.isDate(value)) {
      return value.toISOString();
    }

    if (utils$6.isArrayBuffer(value) || utils$6.isTypedArray(value)) {
      return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  function build(data, parentKey) {
    if (utils$6.isPlainObject(data) || utils$6.isArray(data)) {
      if (stack.indexOf(data) !== -1) {
        throw Error('Circular reference detected in ' + parentKey);
      }

      stack.push(data);

      utils$6.forEach(data, function each(value, key) {
        if (utils$6.isUndefined(value)) return;
        var fullKey = parentKey ? parentKey + '.' + key : key;
        var arr;

        if (value && !parentKey && typeof value === 'object') {
          if (utils$6.endsWith(key, '{}')) {
            // eslint-disable-next-line no-param-reassign
            value = JSON.stringify(value);
          } else if (utils$6.endsWith(key, '[]') && (arr = utils$6.toArray(value))) {
            // eslint-disable-next-line func-names
            arr.forEach(function(el) {
              !utils$6.isUndefined(el) && formData.append(fullKey, convertValue(el));
            });
            return;
          }
        }

        build(value, fullKey);
      });

      stack.pop();
    } else {
      formData.append(parentKey, convertValue(data));
    }
  }

  build(obj);

  return formData;
}

var toFormData_1 = toFormData$1;

var settle;
var hasRequiredSettle;

function requireSettle () {
	if (hasRequiredSettle) return settle;
	hasRequiredSettle = 1;

	var AxiosError = AxiosError_1;

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	settle = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(new AxiosError(
	      'Request failed with status code ' + response.status,
	      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
	      response.config,
	      response.request,
	      response
	    ));
	  }
	};
	return settle;
}

var cookies;
var hasRequiredCookies;

function requireCookies () {
	if (hasRequiredCookies) return cookies;
	hasRequiredCookies = 1;

	var utils = utils$b;

	cookies = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs support document.cookie
	    (function standardBrowserEnv() {
	      return {
	        write: function write(name, value, expires, path, domain, secure) {
	          var cookie = [];
	          cookie.push(name + '=' + encodeURIComponent(value));

	          if (utils.isNumber(expires)) {
	            cookie.push('expires=' + new Date(expires).toGMTString());
	          }

	          if (utils.isString(path)) {
	            cookie.push('path=' + path);
	          }

	          if (utils.isString(domain)) {
	            cookie.push('domain=' + domain);
	          }

	          if (secure === true) {
	            cookie.push('secure');
	          }

	          document.cookie = cookie.join('; ');
	        },

	        read: function read(name) {
	          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	          return (match ? decodeURIComponent(match[3]) : null);
	        },

	        remove: function remove(name) {
	          this.write(name, '', Date.now() - 86400000);
	        }
	      };
	    })() :

	  // Non standard browser env (web workers, react-native) lack needed support.
	    (function nonStandardBrowserEnv() {
	      return {
	        write: function write() {},
	        read: function read() { return null; },
	        remove: function remove() {}
	      };
	    })()
	);
	return cookies;
}

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL$1 = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

var isAbsoluteURL = isAbsoluteURL$1;
var combineURLs = combineURLs$1;

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

var parseHeaders;
var hasRequiredParseHeaders;

function requireParseHeaders () {
	if (hasRequiredParseHeaders) return parseHeaders;
	hasRequiredParseHeaders = 1;

	var utils = utils$b;

	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	parseHeaders = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) { return parsed; }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });

	  return parsed;
	};
	return parseHeaders;
}

var isURLSameOrigin;
var hasRequiredIsURLSameOrigin;

function requireIsURLSameOrigin () {
	if (hasRequiredIsURLSameOrigin) return isURLSameOrigin;
	hasRequiredIsURLSameOrigin = 1;

	var utils = utils$b;

	isURLSameOrigin = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	    (function standardBrowserEnv() {
	      var msie = /(msie|trident)/i.test(navigator.userAgent);
	      var urlParsingNode = document.createElement('a');
	      var originURL;

	      /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	      function resolveURL(url) {
	        var href = url;

	        if (msie) {
	        // IE needs attribute set twice to normalize properties
	          urlParsingNode.setAttribute('href', href);
	          href = urlParsingNode.href;
	        }

	        urlParsingNode.setAttribute('href', href);

	        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	        return {
	          href: urlParsingNode.href,
	          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	          host: urlParsingNode.host,
	          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	          hostname: urlParsingNode.hostname,
	          port: urlParsingNode.port,
	          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	            urlParsingNode.pathname :
	            '/' + urlParsingNode.pathname
	        };
	      }

	      originURL = resolveURL(window.location.href);

	      /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	      return function isURLSameOrigin(requestURL) {
	        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	        return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	      };
	    })() :

	  // Non standard browser envs (web workers, react-native) lack needed support.
	    (function nonStandardBrowserEnv() {
	      return function isURLSameOrigin() {
	        return true;
	      };
	    })()
	);
	return isURLSameOrigin;
}

var CanceledError_1;
var hasRequiredCanceledError;

function requireCanceledError () {
	if (hasRequiredCanceledError) return CanceledError_1;
	hasRequiredCanceledError = 1;

	var AxiosError = AxiosError_1;
	var utils = utils$b;

	/**
	 * A `CanceledError` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function CanceledError(message) {
	  // eslint-disable-next-line no-eq-null,eqeqeq
	  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);
	  this.name = 'CanceledError';
	}

	utils.inherits(CanceledError, AxiosError, {
	  __CANCEL__: true
	});

	CanceledError_1 = CanceledError;
	return CanceledError_1;
}

var parseProtocol;
var hasRequiredParseProtocol;

function requireParseProtocol () {
	if (hasRequiredParseProtocol) return parseProtocol;
	hasRequiredParseProtocol = 1;

	parseProtocol = function parseProtocol(url) {
	  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
	  return match && match[1] || '';
	};
	return parseProtocol;
}

var xhr;
var hasRequiredXhr;

function requireXhr () {
	if (hasRequiredXhr) return xhr;
	hasRequiredXhr = 1;

	var utils = utils$b;
	var settle = requireSettle();
	var cookies = requireCookies();
	var buildURL = buildURL$1;
	var buildFullPath = buildFullPath$1;
	var parseHeaders = requireParseHeaders();
	var isURLSameOrigin = requireIsURLSameOrigin();
	var transitionalDefaults = transitional;
	var AxiosError = AxiosError_1;
	var CanceledError = requireCanceledError();
	var parseProtocol = requireParseProtocol();

	xhr = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	    var responseType = config.responseType;
	    var onCanceled;
	    function done() {
	      if (config.cancelToken) {
	        config.cancelToken.unsubscribe(onCanceled);
	      }

	      if (config.signal) {
	        config.signal.removeEventListener('abort', onCanceled);
	      }
	    }

	    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    var fullPath = buildFullPath(config.baseURL, config.url);

	    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    function onloadend() {
	      if (!request) {
	        return;
	      }
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
	        request.responseText : request.response;
	      var response = {
	        data: responseData,
	        status: request.status,
	        statusText: request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(function _resolve(value) {
	        resolve(value);
	        done();
	      }, function _reject(err) {
	        reject(err);
	        done();
	      }, response);

	      // Clean up request
	      request = null;
	    }

	    if ('onloadend' in request) {
	      // Use onloadend if available
	      request.onloadend = onloadend;
	    } else {
	      // Listen for ready state to emulate onloadend
	      request.onreadystatechange = function handleLoad() {
	        if (!request || request.readyState !== 4) {
	          return;
	        }

	        // The request errored out and we didn't get a response, this will be
	        // handled by onerror instead
	        // With one exception: request that using file: protocol, most browsers
	        // will return status as 0 even though it's a successful request
	        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	          return;
	        }
	        // readystate handler is calling before onerror or ontimeout handlers,
	        // so we should call onloadend on the next 'tick'
	        setTimeout(onloadend);
	      };
	    }

	    // Handle browser request cancellation (as opposed to a manual cancellation)
	    request.onabort = function handleAbort() {
	      if (!request) {
	        return;
	      }

	      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
	      var transitional = config.transitional || transitionalDefaults;
	      if (config.timeoutErrorMessage) {
	        timeoutErrorMessage = config.timeoutErrorMessage;
	      }
	      reject(new AxiosError(
	        timeoutErrorMessage,
	        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
	        config,
	        request));

	      // Clean up request
	      request = null;
	    };

	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
	        cookies.read(config.xsrfCookieName) :
	        undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }

	    // Add withCredentials to request if needed
	    if (!utils.isUndefined(config.withCredentials)) {
	      request.withCredentials = !!config.withCredentials;
	    }

	    // Add responseType to request if needed
	    if (responseType && responseType !== 'json') {
	      request.responseType = config.responseType;
	    }

	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }

	    if (config.cancelToken || config.signal) {
	      // Handle cancellation
	      // eslint-disable-next-line func-names
	      onCanceled = function(cancel) {
	        if (!request) {
	          return;
	        }
	        reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);
	        request.abort();
	        request = null;
	      };

	      config.cancelToken && config.cancelToken.subscribe(onCanceled);
	      if (config.signal) {
	        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
	      }
	    }

	    if (!requestData) {
	      requestData = null;
	    }

	    var protocol = parseProtocol(fullPath);

	    if (protocol && [ 'http', 'https', 'file' ].indexOf(protocol) === -1) {
	      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
	      return;
	    }


	    // Send the request
	    request.send(requestData);
	  });
	};
	return xhr;
}

var followRedirects = {exports: {}};

var url = {};

var punycode = {exports: {}};

/*! https://mths.be/punycode v1.3.2 by @mathias */

var hasRequiredPunycode;

function requirePunycode () {
	if (hasRequiredPunycode) return punycode.exports;
	hasRequiredPunycode = 1;
	(function (module, exports) {
(function(root) {

			/** Detect free variables */
			var freeExports = exports &&
				!exports.nodeType && exports;
			var freeModule = module &&
				!module.nodeType && module;
			var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;
			if (
				freeGlobal.global === freeGlobal ||
				freeGlobal.window === freeGlobal ||
				freeGlobal.self === freeGlobal
			) {
				root = freeGlobal;
			}

			/**
			 * The `punycode` object.
			 * @name punycode
			 * @type Object
			 */
			var punycode,

			/** Highest positive signed 32-bit float value */
			maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

			/** Bootstring parameters */
			base = 36,
			tMin = 1,
			tMax = 26,
			skew = 38,
			damp = 700,
			initialBias = 72,
			initialN = 128, // 0x80
			delimiter = '-', // '\x2D'

			/** Regular expressions */
			regexPunycode = /^xn--/,
			regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
			regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

			/** Error messages */
			errors = {
				'overflow': 'Overflow: input needs wider integers to process',
				'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
				'invalid-input': 'Invalid input'
			},

			/** Convenience shortcuts */
			baseMinusTMin = base - tMin,
			floor = Math.floor,
			stringFromCharCode = String.fromCharCode,

			/** Temporary variable */
			key;

			/*--------------------------------------------------------------------------*/

			/**
			 * A generic error utility function.
			 * @private
			 * @param {String} type The error type.
			 * @returns {Error} Throws a `RangeError` with the applicable error message.
			 */
			function error(type) {
				throw RangeError(errors[type]);
			}

			/**
			 * A generic `Array#map` utility function.
			 * @private
			 * @param {Array} array The array to iterate over.
			 * @param {Function} callback The function that gets called for every array
			 * item.
			 * @returns {Array} A new array of values returned by the callback function.
			 */
			function map(array, fn) {
				var length = array.length;
				var result = [];
				while (length--) {
					result[length] = fn(array[length]);
				}
				return result;
			}

			/**
			 * A simple `Array#map`-like wrapper to work with domain name strings or email
			 * addresses.
			 * @private
			 * @param {String} domain The domain name or email address.
			 * @param {Function} callback The function that gets called for every
			 * character.
			 * @returns {Array} A new string of characters returned by the callback
			 * function.
			 */
			function mapDomain(string, fn) {
				var parts = string.split('@');
				var result = '';
				if (parts.length > 1) {
					// In email addresses, only the domain name should be punycoded. Leave
					// the local part (i.e. everything up to `@`) intact.
					result = parts[0] + '@';
					string = parts[1];
				}
				// Avoid `split(regex)` for IE8 compatibility. See #17.
				string = string.replace(regexSeparators, '\x2E');
				var labels = string.split('.');
				var encoded = map(labels, fn).join('.');
				return result + encoded;
			}

			/**
			 * Creates an array containing the numeric code points of each Unicode
			 * character in the string. While JavaScript uses UCS-2 internally,
			 * this function will convert a pair of surrogate halves (each of which
			 * UCS-2 exposes as separate characters) into a single code point,
			 * matching UTF-16.
			 * @see `punycode.ucs2.encode`
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode.ucs2
			 * @name decode
			 * @param {String} string The Unicode input string (UCS-2).
			 * @returns {Array} The new array of code points.
			 */
			function ucs2decode(string) {
				var output = [],
				    counter = 0,
				    length = string.length,
				    value,
				    extra;
				while (counter < length) {
					value = string.charCodeAt(counter++);
					if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
						// high surrogate, and there is a next character
						extra = string.charCodeAt(counter++);
						if ((extra & 0xFC00) == 0xDC00) { // low surrogate
							output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
						} else {
							// unmatched surrogate; only append this code unit, in case the next
							// code unit is the high surrogate of a surrogate pair
							output.push(value);
							counter--;
						}
					} else {
						output.push(value);
					}
				}
				return output;
			}

			/**
			 * Creates a string based on an array of numeric code points.
			 * @see `punycode.ucs2.decode`
			 * @memberOf punycode.ucs2
			 * @name encode
			 * @param {Array} codePoints The array of numeric code points.
			 * @returns {String} The new Unicode string (UCS-2).
			 */
			function ucs2encode(array) {
				return map(array, function(value) {
					var output = '';
					if (value > 0xFFFF) {
						value -= 0x10000;
						output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
						value = 0xDC00 | value & 0x3FF;
					}
					output += stringFromCharCode(value);
					return output;
				}).join('');
			}

			/**
			 * Converts a basic code point into a digit/integer.
			 * @see `digitToBasic()`
			 * @private
			 * @param {Number} codePoint The basic numeric code point value.
			 * @returns {Number} The numeric value of a basic code point (for use in
			 * representing integers) in the range `0` to `base - 1`, or `base` if
			 * the code point does not represent a value.
			 */
			function basicToDigit(codePoint) {
				if (codePoint - 48 < 10) {
					return codePoint - 22;
				}
				if (codePoint - 65 < 26) {
					return codePoint - 65;
				}
				if (codePoint - 97 < 26) {
					return codePoint - 97;
				}
				return base;
			}

			/**
			 * Converts a digit/integer into a basic code point.
			 * @see `basicToDigit()`
			 * @private
			 * @param {Number} digit The numeric value of a basic code point.
			 * @returns {Number} The basic code point whose value (when used for
			 * representing integers) is `digit`, which needs to be in the range
			 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
			 * used; else, the lowercase form is used. The behavior is undefined
			 * if `flag` is non-zero and `digit` has no uppercase form.
			 */
			function digitToBasic(digit, flag) {
				//  0..25 map to ASCII a..z or A..Z
				// 26..35 map to ASCII 0..9
				return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
			}

			/**
			 * Bias adaptation function as per section 3.4 of RFC 3492.
			 * http://tools.ietf.org/html/rfc3492#section-3.4
			 * @private
			 */
			function adapt(delta, numPoints, firstTime) {
				var k = 0;
				delta = firstTime ? floor(delta / damp) : delta >> 1;
				delta += floor(delta / numPoints);
				for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
					delta = floor(delta / baseMinusTMin);
				}
				return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
			}

			/**
			 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
			 * symbols.
			 * @memberOf punycode
			 * @param {String} input The Punycode string of ASCII-only symbols.
			 * @returns {String} The resulting string of Unicode symbols.
			 */
			function decode(input) {
				// Don't use UCS-2
				var output = [],
				    inputLength = input.length,
				    out,
				    i = 0,
				    n = initialN,
				    bias = initialBias,
				    basic,
				    j,
				    index,
				    oldi,
				    w,
				    k,
				    digit,
				    t,
				    /** Cached calculation results */
				    baseMinusT;

				// Handle the basic code points: let `basic` be the number of input code
				// points before the last delimiter, or `0` if there is none, then copy
				// the first basic code points to the output.

				basic = input.lastIndexOf(delimiter);
				if (basic < 0) {
					basic = 0;
				}

				for (j = 0; j < basic; ++j) {
					// if it's not a basic code point
					if (input.charCodeAt(j) >= 0x80) {
						error('not-basic');
					}
					output.push(input.charCodeAt(j));
				}

				// Main decoding loop: start just after the last delimiter if any basic code
				// points were copied; start at the beginning otherwise.

				for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

					// `index` is the index of the next character to be consumed.
					// Decode a generalized variable-length integer into `delta`,
					// which gets added to `i`. The overflow checking is easier
					// if we increase `i` as we go, then subtract off its starting
					// value at the end to obtain `delta`.
					for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

						if (index >= inputLength) {
							error('invalid-input');
						}

						digit = basicToDigit(input.charCodeAt(index++));

						if (digit >= base || digit > floor((maxInt - i) / w)) {
							error('overflow');
						}

						i += digit * w;
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

						if (digit < t) {
							break;
						}

						baseMinusT = base - t;
						if (w > floor(maxInt / baseMinusT)) {
							error('overflow');
						}

						w *= baseMinusT;

					}

					out = output.length + 1;
					bias = adapt(i - oldi, out, oldi == 0);

					// `i` was supposed to wrap around from `out` to `0`,
					// incrementing `n` each time, so we'll fix that now:
					if (floor(i / out) > maxInt - n) {
						error('overflow');
					}

					n += floor(i / out);
					i %= out;

					// Insert `n` at position `i` of the output
					output.splice(i++, 0, n);

				}

				return ucs2encode(output);
			}

			/**
			 * Converts a string of Unicode symbols (e.g. a domain name label) to a
			 * Punycode string of ASCII-only symbols.
			 * @memberOf punycode
			 * @param {String} input The string of Unicode symbols.
			 * @returns {String} The resulting Punycode string of ASCII-only symbols.
			 */
			function encode(input) {
				var n,
				    delta,
				    handledCPCount,
				    basicLength,
				    bias,
				    j,
				    m,
				    q,
				    k,
				    t,
				    currentValue,
				    output = [],
				    /** `inputLength` will hold the number of code points in `input`. */
				    inputLength,
				    /** Cached calculation results */
				    handledCPCountPlusOne,
				    baseMinusT,
				    qMinusT;

				// Convert the input in UCS-2 to Unicode
				input = ucs2decode(input);

				// Cache the length
				inputLength = input.length;

				// Initialize the state
				n = initialN;
				delta = 0;
				bias = initialBias;

				// Handle the basic code points
				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue < 0x80) {
						output.push(stringFromCharCode(currentValue));
					}
				}

				handledCPCount = basicLength = output.length;

				// `handledCPCount` is the number of code points that have been handled;
				// `basicLength` is the number of basic code points.

				// Finish the basic string - if it is not empty - with a delimiter
				if (basicLength) {
					output.push(delimiter);
				}

				// Main encoding loop:
				while (handledCPCount < inputLength) {

					// All non-basic code points < n have been handled already. Find the next
					// larger one:
					for (m = maxInt, j = 0; j < inputLength; ++j) {
						currentValue = input[j];
						if (currentValue >= n && currentValue < m) {
							m = currentValue;
						}
					}

					// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
					// but guard against overflow
					handledCPCountPlusOne = handledCPCount + 1;
					if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
						error('overflow');
					}

					delta += (m - n) * handledCPCountPlusOne;
					n = m;

					for (j = 0; j < inputLength; ++j) {
						currentValue = input[j];

						if (currentValue < n && ++delta > maxInt) {
							error('overflow');
						}

						if (currentValue == n) {
							// Represent delta as a generalized variable-length integer
							for (q = delta, k = base; /* no condition */; k += base) {
								t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
								if (q < t) {
									break;
								}
								qMinusT = q - t;
								baseMinusT = base - t;
								output.push(
									stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
								);
								q = floor(qMinusT / baseMinusT);
							}

							output.push(stringFromCharCode(digitToBasic(q, 0)));
							bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
							delta = 0;
							++handledCPCount;
						}
					}

					++delta;
					++n;

				}
				return output.join('');
			}

			/**
			 * Converts a Punycode string representing a domain name or an email address
			 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
			 * it doesn't matter if you call it on a string that has already been
			 * converted to Unicode.
			 * @memberOf punycode
			 * @param {String} input The Punycoded domain name or email address to
			 * convert to Unicode.
			 * @returns {String} The Unicode representation of the given Punycode
			 * string.
			 */
			function toUnicode(input) {
				return mapDomain(input, function(string) {
					return regexPunycode.test(string)
						? decode(string.slice(4).toLowerCase())
						: string;
				});
			}

			/**
			 * Converts a Unicode string representing a domain name or an email address to
			 * Punycode. Only the non-ASCII parts of the domain name will be converted,
			 * i.e. it doesn't matter if you call it with a domain that's already in
			 * ASCII.
			 * @memberOf punycode
			 * @param {String} input The domain name or email address to convert, as a
			 * Unicode string.
			 * @returns {String} The Punycode representation of the given domain name or
			 * email address.
			 */
			function toASCII(input) {
				return mapDomain(input, function(string) {
					return regexNonASCII.test(string)
						? 'xn--' + encode(string)
						: string;
				});
			}

			/*--------------------------------------------------------------------------*/

			/** Define the public API */
			punycode = {
				/**
				 * A string representing the current Punycode.js version number.
				 * @memberOf punycode
				 * @type String
				 */
				'version': '1.3.2',
				/**
				 * An object of methods to convert from JavaScript's internal character
				 * representation (UCS-2) to Unicode code points, and back.
				 * @see <https://mathiasbynens.be/notes/javascript-encoding>
				 * @memberOf punycode
				 * @type Object
				 */
				'ucs2': {
					'decode': ucs2decode,
					'encode': ucs2encode
				},
				'decode': decode,
				'encode': encode,
				'toASCII': toASCII,
				'toUnicode': toUnicode
			};

			/** Expose `punycode` */
			// Some AMD build optimizers, like r.js, check for specific condition patterns
			// like the following:
			if (freeExports && freeModule) {
				if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
					freeModule.exports = punycode;
				} else { // in Narwhal or RingoJS v0.7.0-
					for (key in punycode) {
						punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
					}
				}
			} else { // in Rhino or a web browser
				root.punycode = punycode;
			}

		}(commonjsGlobal));
} (punycode, punycode.exports));
	return punycode.exports;
}

var util$1;
var hasRequiredUtil$1;

function requireUtil$1 () {
	if (hasRequiredUtil$1) return util$1;
	hasRequiredUtil$1 = 1;

	util$1 = {
	  isString: function(arg) {
	    return typeof(arg) === 'string';
	  },
	  isObject: function(arg) {
	    return typeof(arg) === 'object' && arg !== null;
	  },
	  isNull: function(arg) {
	    return arg === null;
	  },
	  isNullOrUndefined: function(arg) {
	    return arg == null;
	  }
	};
	return util$1;
}

var querystring = {};

var decode;
var hasRequiredDecode;

function requireDecode () {
	if (hasRequiredDecode) return decode;
	hasRequiredDecode = 1;

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	decode = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};
	return decode;
}

var encode;
var hasRequiredEncode;

function requireEncode () {
	if (hasRequiredEncode) return encode;
	hasRequiredEncode = 1;

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	encode = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};
	return encode;
}

var hasRequiredQuerystring;

function requireQuerystring () {
	if (hasRequiredQuerystring) return querystring;
	hasRequiredQuerystring = 1;

	querystring.decode = querystring.parse = requireDecode();
	querystring.encode = querystring.stringify = requireEncode();
	return querystring;
}

var hasRequiredUrl;

function requireUrl () {
	if (hasRequiredUrl) return url;
	hasRequiredUrl = 1;

	var punycode = requirePunycode();
	var util = requireUtil$1();

	url.parse = urlParse;
	url.resolve = urlResolve;
	url.resolveObject = urlResolveObject;
	url.format = urlFormat;

	url.Url = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,

	    // Special case for a simple path URL
	    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = requireQuerystring();

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && util.isObject(url) && url instanceof Url) return url;

	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!util.isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }

	  // Copy chrome, IE, opera backslash-handling behavior.
	  // Back slashes before the query string get converted to forward slashes
	  // See: https://code.google.com/p/chromium/issues/detail?id=25916
	  var queryIndex = url.indexOf('?'),
	      splitter =
	          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
	      uSplit = url.split(splitter),
	      slashRegex = /\\/g;
	  uSplit[0] = uSplit[0].replace(slashRegex, '/');
	  url = uSplit.join(splitter);

	  var rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  if (!slashesDenoteHost && url.split('#').length === 1) {
	    // Try fast path regexp
	    var simplePath = simplePathPattern.exec(rest);
	    if (simplePath) {
	      this.path = rest;
	      this.href = rest;
	      this.pathname = simplePath[1];
	      if (simplePath[2]) {
	        this.search = simplePath[2];
	        if (parseQueryString) {
	          this.query = querystring.parse(this.search.substr(1));
	        } else {
	          this.query = this.search.substr(1);
	        }
	      } else if (parseQueryString) {
	        this.search = '';
	        this.query = {};
	      }
	      return this;
	    }
	  }

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost();

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a punycoded representation of "domain".
	      // It only converts parts of the domain name that
	      // have non-ASCII characters, i.e. it doesn't matter if
	      // you call it with a domain that already is ASCII-only.
	      this.hostname = punycode.toASCII(this.hostname);
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {

	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      if (rest.indexOf(ae) === -1)
	        continue;
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }


	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};

	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (util.isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query &&
	      util.isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || (query && ('?' + query)) || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function(relative) {
	  if (util.isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  var tkeys = Object.keys(this);
	  for (var tk = 0; tk < tkeys.length; tk++) {
	    var tkey = tkeys[tk];
	    result[tkey] = this[tkey];
	  }

	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;

	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    var rkeys = Object.keys(relative);
	    for (var rk = 0; rk < rkeys.length; rk++) {
	      var rkey = rkeys[rk];
	      if (rkey !== 'protocol')
	        result[rkey] = relative[rkey];
	    }

	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      var keys = Object.keys(relative);
	      for (var v = 0; v < keys.length; v++) {
	        var k = keys[v];
	        result[k] = relative[k];
	      }
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!util.isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especially happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host || srcPath.length > 1) &&
	      (last === '.' || last === '..') || last === '');

	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last === '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');

	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especially happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  //to support request.http
	  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};
	return url;
}

var assert = {exports: {}};

var errors = {};

var util = {};

var types = {};

var shams$1;
var hasRequiredShams$1;

function requireShams$1 () {
	if (hasRequiredShams$1) return shams$1;
	hasRequiredShams$1 = 1;

	/* eslint complexity: [2, 18], max-statements: [2, 33] */
	shams$1 = function hasSymbols() {
		if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
		if (typeof Symbol.iterator === 'symbol') { return true; }

		var obj = {};
		var sym = Symbol('test');
		var symObj = Object(sym);
		if (typeof sym === 'string') { return false; }

		if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
		if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

		// temp disabled per https://github.com/ljharb/object.assign/issues/17
		// if (sym instanceof Symbol) { return false; }
		// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
		// if (!(symObj instanceof Symbol)) { return false; }

		// if (typeof Symbol.prototype.toString !== 'function') { return false; }
		// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

		var symVal = 42;
		obj[sym] = symVal;
		for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
		if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

		if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

		var syms = Object.getOwnPropertySymbols(obj);
		if (syms.length !== 1 || syms[0] !== sym) { return false; }

		if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

		if (typeof Object.getOwnPropertyDescriptor === 'function') {
			var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
			if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
		}

		return true;
	};
	return shams$1;
}

var shams;
var hasRequiredShams;

function requireShams () {
	if (hasRequiredShams) return shams;
	hasRequiredShams = 1;

	var hasSymbols = requireShams$1();

	shams = function hasToStringTagShams() {
		return hasSymbols() && !!Symbol.toStringTag;
	};
	return shams;
}

var hasSymbols;
var hasRequiredHasSymbols;

function requireHasSymbols () {
	if (hasRequiredHasSymbols) return hasSymbols;
	hasRequiredHasSymbols = 1;

	var origSymbol = typeof Symbol !== 'undefined' && Symbol;
	var hasSymbolSham = requireShams$1();

	hasSymbols = function hasNativeSymbols() {
		if (typeof origSymbol !== 'function') { return false; }
		if (typeof Symbol !== 'function') { return false; }
		if (typeof origSymbol('foo') !== 'symbol') { return false; }
		if (typeof Symbol('bar') !== 'symbol') { return false; }

		return hasSymbolSham();
	};
	return hasSymbols;
}

var implementation$3;
var hasRequiredImplementation$3;

function requireImplementation$3 () {
	if (hasRequiredImplementation$3) return implementation$3;
	hasRequiredImplementation$3 = 1;

	/* eslint no-invalid-this: 1 */

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var slice = Array.prototype.slice;
	var toStr = Object.prototype.toString;
	var funcType = '[object Function]';

	implementation$3 = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slice.call(arguments, 1);

	    var bound;
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                args.concat(slice.call(arguments))
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        } else {
	            return target.apply(
	                that,
	                args.concat(slice.call(arguments))
	            );
	        }
	    };

	    var boundLength = Math.max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs.push('$' + i);
	    }

	    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }

	    return bound;
	};
	return implementation$3;
}

var functionBind;
var hasRequiredFunctionBind;

function requireFunctionBind () {
	if (hasRequiredFunctionBind) return functionBind;
	hasRequiredFunctionBind = 1;

	var implementation = requireImplementation$3();

	functionBind = Function.prototype.bind || implementation;
	return functionBind;
}

var src$1;
var hasRequiredSrc$1;

function requireSrc$1 () {
	if (hasRequiredSrc$1) return src$1;
	hasRequiredSrc$1 = 1;

	var bind = requireFunctionBind();

	src$1 = bind.call(Function.call, Object.prototype.hasOwnProperty);
	return src$1;
}

var getIntrinsic;
var hasRequiredGetIntrinsic;

function requireGetIntrinsic () {
	if (hasRequiredGetIntrinsic) return getIntrinsic;
	hasRequiredGetIntrinsic = 1;

	var undefined$1;

	var $SyntaxError = SyntaxError;
	var $Function = Function;
	var $TypeError = TypeError;

	// eslint-disable-next-line consistent-return
	var getEvalledConstructor = function (expressionSyntax) {
		try {
			return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
		} catch (e) {}
	};

	var $gOPD = Object.getOwnPropertyDescriptor;
	if ($gOPD) {
		try {
			$gOPD({}, '');
		} catch (e) {
			$gOPD = null; // this is IE 8, which has a broken gOPD
		}
	}

	var throwTypeError = function () {
		throw new $TypeError();
	};
	var ThrowTypeError = $gOPD
		? (function () {
			try {
				// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
				arguments.callee; // IE 8 does not throw here
				return throwTypeError;
			} catch (calleeThrows) {
				try {
					// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
					return $gOPD(arguments, 'callee').get;
				} catch (gOPDthrows) {
					return throwTypeError;
				}
			}
		}())
		: throwTypeError;

	var hasSymbols = requireHasSymbols()();

	var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

	var needsEval = {};

	var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto(Uint8Array);

	var INTRINSICS = {
		'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
		'%Array%': Array,
		'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
		'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined$1,
		'%AsyncFromSyncIteratorPrototype%': undefined$1,
		'%AsyncFunction%': needsEval,
		'%AsyncGenerator%': needsEval,
		'%AsyncGeneratorFunction%': needsEval,
		'%AsyncIteratorPrototype%': needsEval,
		'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
		'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
		'%Boolean%': Boolean,
		'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
		'%Date%': Date,
		'%decodeURI%': decodeURI,
		'%decodeURIComponent%': decodeURIComponent,
		'%encodeURI%': encodeURI,
		'%encodeURIComponent%': encodeURIComponent,
		'%Error%': Error,
		'%eval%': eval, // eslint-disable-line no-eval
		'%EvalError%': EvalError,
		'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
		'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
		'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
		'%Function%': $Function,
		'%GeneratorFunction%': needsEval,
		'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
		'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
		'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
		'%isFinite%': isFinite,
		'%isNaN%': isNaN,
		'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
		'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
		'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
		'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
		'%Math%': Math,
		'%Number%': Number,
		'%Object%': Object,
		'%parseFloat%': parseFloat,
		'%parseInt%': parseInt,
		'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
		'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
		'%RangeError%': RangeError,
		'%ReferenceError%': ReferenceError,
		'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
		'%RegExp%': RegExp,
		'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
		'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
		'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
		'%String%': String,
		'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined$1,
		'%Symbol%': hasSymbols ? Symbol : undefined$1,
		'%SyntaxError%': $SyntaxError,
		'%ThrowTypeError%': ThrowTypeError,
		'%TypedArray%': TypedArray,
		'%TypeError%': $TypeError,
		'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
		'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
		'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
		'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
		'%URIError%': URIError,
		'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
		'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
		'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
	};

	var doEval = function doEval(name) {
		var value;
		if (name === '%AsyncFunction%') {
			value = getEvalledConstructor('async function () {}');
		} else if (name === '%GeneratorFunction%') {
			value = getEvalledConstructor('function* () {}');
		} else if (name === '%AsyncGeneratorFunction%') {
			value = getEvalledConstructor('async function* () {}');
		} else if (name === '%AsyncGenerator%') {
			var fn = doEval('%AsyncGeneratorFunction%');
			if (fn) {
				value = fn.prototype;
			}
		} else if (name === '%AsyncIteratorPrototype%') {
			var gen = doEval('%AsyncGenerator%');
			if (gen) {
				value = getProto(gen.prototype);
			}
		}

		INTRINSICS[name] = value;

		return value;
	};

	var LEGACY_ALIASES = {
		'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
		'%ArrayPrototype%': ['Array', 'prototype'],
		'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
		'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
		'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
		'%ArrayProto_values%': ['Array', 'prototype', 'values'],
		'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
		'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
		'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
		'%BooleanPrototype%': ['Boolean', 'prototype'],
		'%DataViewPrototype%': ['DataView', 'prototype'],
		'%DatePrototype%': ['Date', 'prototype'],
		'%ErrorPrototype%': ['Error', 'prototype'],
		'%EvalErrorPrototype%': ['EvalError', 'prototype'],
		'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
		'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
		'%FunctionPrototype%': ['Function', 'prototype'],
		'%Generator%': ['GeneratorFunction', 'prototype'],
		'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
		'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
		'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
		'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
		'%JSONParse%': ['JSON', 'parse'],
		'%JSONStringify%': ['JSON', 'stringify'],
		'%MapPrototype%': ['Map', 'prototype'],
		'%NumberPrototype%': ['Number', 'prototype'],
		'%ObjectPrototype%': ['Object', 'prototype'],
		'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
		'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
		'%PromisePrototype%': ['Promise', 'prototype'],
		'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
		'%Promise_all%': ['Promise', 'all'],
		'%Promise_reject%': ['Promise', 'reject'],
		'%Promise_resolve%': ['Promise', 'resolve'],
		'%RangeErrorPrototype%': ['RangeError', 'prototype'],
		'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
		'%RegExpPrototype%': ['RegExp', 'prototype'],
		'%SetPrototype%': ['Set', 'prototype'],
		'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
		'%StringPrototype%': ['String', 'prototype'],
		'%SymbolPrototype%': ['Symbol', 'prototype'],
		'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
		'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
		'%TypeErrorPrototype%': ['TypeError', 'prototype'],
		'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
		'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
		'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
		'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
		'%URIErrorPrototype%': ['URIError', 'prototype'],
		'%WeakMapPrototype%': ['WeakMap', 'prototype'],
		'%WeakSetPrototype%': ['WeakSet', 'prototype']
	};

	var bind = requireFunctionBind();
	var hasOwn = requireSrc$1();
	var $concat = bind.call(Function.call, Array.prototype.concat);
	var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
	var $replace = bind.call(Function.call, String.prototype.replace);
	var $strSlice = bind.call(Function.call, String.prototype.slice);
	var $exec = bind.call(Function.call, RegExp.prototype.exec);

	/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
	var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
	var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
	var stringToPath = function stringToPath(string) {
		var first = $strSlice(string, 0, 1);
		var last = $strSlice(string, -1);
		if (first === '%' && last !== '%') {
			throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
		} else if (last === '%' && first !== '%') {
			throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
		}
		var result = [];
		$replace(string, rePropName, function (match, number, quote, subString) {
			result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
		});
		return result;
	};
	/* end adaptation */

	var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
		var intrinsicName = name;
		var alias;
		if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
			alias = LEGACY_ALIASES[intrinsicName];
			intrinsicName = '%' + alias[0] + '%';
		}

		if (hasOwn(INTRINSICS, intrinsicName)) {
			var value = INTRINSICS[intrinsicName];
			if (value === needsEval) {
				value = doEval(intrinsicName);
			}
			if (typeof value === 'undefined' && !allowMissing) {
				throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
			}

			return {
				alias: alias,
				name: intrinsicName,
				value: value
			};
		}

		throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
	};

	getIntrinsic = function GetIntrinsic(name, allowMissing) {
		if (typeof name !== 'string' || name.length === 0) {
			throw new $TypeError('intrinsic name must be a non-empty string');
		}
		if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
			throw new $TypeError('"allowMissing" argument must be a boolean');
		}

		if ($exec(/^%?[^%]*%?$/g, name) === null) {
			throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
		}
		var parts = stringToPath(name);
		var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

		var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
		var intrinsicRealName = intrinsic.name;
		var value = intrinsic.value;
		var skipFurtherCaching = false;

		var alias = intrinsic.alias;
		if (alias) {
			intrinsicBaseName = alias[0];
			$spliceApply(parts, $concat([0, 1], alias));
		}

		for (var i = 1, isOwn = true; i < parts.length; i += 1) {
			var part = parts[i];
			var first = $strSlice(part, 0, 1);
			var last = $strSlice(part, -1);
			if (
				(
					(first === '"' || first === "'" || first === '`')
					|| (last === '"' || last === "'" || last === '`')
				)
				&& first !== last
			) {
				throw new $SyntaxError('property names with quotes must have matching quotes');
			}
			if (part === 'constructor' || !isOwn) {
				skipFurtherCaching = true;
			}

			intrinsicBaseName += '.' + part;
			intrinsicRealName = '%' + intrinsicBaseName + '%';

			if (hasOwn(INTRINSICS, intrinsicRealName)) {
				value = INTRINSICS[intrinsicRealName];
			} else if (value != null) {
				if (!(part in value)) {
					if (!allowMissing) {
						throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
					}
					return void undefined$1;
				}
				if ($gOPD && (i + 1) >= parts.length) {
					var desc = $gOPD(value, part);
					isOwn = !!desc;

					// By convention, when a data property is converted to an accessor
					// property to emulate a data property that does not suffer from
					// the override mistake, that accessor's getter is marked with
					// an `originalValue` property. Here, when we detect this, we
					// uphold the illusion by pretending to see that original data
					// property, i.e., returning the value rather than the getter
					// itself.
					if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
						value = desc.get;
					} else {
						value = value[part];
					}
				} else {
					isOwn = hasOwn(value, part);
					value = value[part];
				}

				if (isOwn && !skipFurtherCaching) {
					INTRINSICS[intrinsicRealName] = value;
				}
			}
		}
		return value;
	};
	return getIntrinsic;
}

var callBind = {exports: {}};

var hasRequiredCallBind;

function requireCallBind () {
	if (hasRequiredCallBind) return callBind.exports;
	hasRequiredCallBind = 1;
	(function (module) {

		var bind = requireFunctionBind();
		var GetIntrinsic = requireGetIntrinsic();

		var $apply = GetIntrinsic('%Function.prototype.apply%');
		var $call = GetIntrinsic('%Function.prototype.call%');
		var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

		var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
		var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
		var $max = GetIntrinsic('%Math.max%');

		if ($defineProperty) {
			try {
				$defineProperty({}, 'a', { value: 1 });
			} catch (e) {
				// IE 8 has a broken defineProperty
				$defineProperty = null;
			}
		}

		module.exports = function callBind(originalFunction) {
			var func = $reflectApply(bind, $call, arguments);
			if ($gOPD && $defineProperty) {
				var desc = $gOPD(func, 'length');
				if (desc.configurable) {
					// original length, plus the receiver, minus any additional arguments (after the receiver)
					$defineProperty(
						func,
						'length',
						{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
					);
				}
			}
			return func;
		};

		var applyBind = function applyBind() {
			return $reflectApply(bind, $apply, arguments);
		};

		if ($defineProperty) {
			$defineProperty(module.exports, 'apply', { value: applyBind });
		} else {
			module.exports.apply = applyBind;
		}
} (callBind));
	return callBind.exports;
}

var callBound;
var hasRequiredCallBound;

function requireCallBound () {
	if (hasRequiredCallBound) return callBound;
	hasRequiredCallBound = 1;

	var GetIntrinsic = requireGetIntrinsic();

	var callBind = requireCallBind();

	var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

	callBound = function callBoundIntrinsic(name, allowMissing) {
		var intrinsic = GetIntrinsic(name, !!allowMissing);
		if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
			return callBind(intrinsic);
		}
		return intrinsic;
	};
	return callBound;
}

var isArguments$1;
var hasRequiredIsArguments$1;

function requireIsArguments$1 () {
	if (hasRequiredIsArguments$1) return isArguments$1;
	hasRequiredIsArguments$1 = 1;

	var hasToStringTag = requireShams()();
	var callBound = requireCallBound();

	var $toString = callBound('Object.prototype.toString');

	var isStandardArguments = function isArguments(value) {
		if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
			return false;
		}
		return $toString(value) === '[object Arguments]';
	};

	var isLegacyArguments = function isArguments(value) {
		if (isStandardArguments(value)) {
			return true;
		}
		return value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			$toString(value) !== '[object Array]' &&
			$toString(value.callee) === '[object Function]';
	};

	var supportsStandardArguments = (function () {
		return isStandardArguments(arguments);
	}());

	isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

	isArguments$1 = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
	return isArguments$1;
}

var isGeneratorFunction;
var hasRequiredIsGeneratorFunction;

function requireIsGeneratorFunction () {
	if (hasRequiredIsGeneratorFunction) return isGeneratorFunction;
	hasRequiredIsGeneratorFunction = 1;

	var toStr = Object.prototype.toString;
	var fnToStr = Function.prototype.toString;
	var isFnRegex = /^\s*(?:function)?\*/;
	var hasToStringTag = requireShams()();
	var getProto = Object.getPrototypeOf;
	var getGeneratorFunc = function () { // eslint-disable-line consistent-return
		if (!hasToStringTag) {
			return false;
		}
		try {
			return Function('return function*() {}')();
		} catch (e) {
		}
	};
	var GeneratorFunction;

	isGeneratorFunction = function isGeneratorFunction(fn) {
		if (typeof fn !== 'function') {
			return false;
		}
		if (isFnRegex.test(fnToStr.call(fn))) {
			return true;
		}
		if (!hasToStringTag) {
			var str = toStr.call(fn);
			return str === '[object GeneratorFunction]';
		}
		if (!getProto) {
			return false;
		}
		if (typeof GeneratorFunction === 'undefined') {
			var generatorFunc = getGeneratorFunc();
			GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
		}
		return getProto(fn) === GeneratorFunction;
	};
	return isGeneratorFunction;
}

var isCallable;
var hasRequiredIsCallable;

function requireIsCallable () {
	if (hasRequiredIsCallable) return isCallable;
	hasRequiredIsCallable = 1;

	var fnToStr = Function.prototype.toString;
	var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
	var badArrayLike;
	var isCallableMarker;
	if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
		try {
			badArrayLike = Object.defineProperty({}, 'length', {
				get: function () {
					throw isCallableMarker;
				}
			});
			isCallableMarker = {};
			// eslint-disable-next-line no-throw-literal
			reflectApply(function () { throw 42; }, null, badArrayLike);
		} catch (_) {
			if (_ !== isCallableMarker) {
				reflectApply = null;
			}
		}
	} else {
		reflectApply = null;
	}

	var constructorRegex = /^\s*class\b/;
	var isES6ClassFn = function isES6ClassFunction(value) {
		try {
			var fnStr = fnToStr.call(value);
			return constructorRegex.test(fnStr);
		} catch (e) {
			return false; // not a function
		}
	};

	var tryFunctionObject = function tryFunctionToStr(value) {
		try {
			if (isES6ClassFn(value)) { return false; }
			fnToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var fnClass = '[object Function]';
	var genClass = '[object GeneratorFunction]';
	var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`
	/* globals document: false */
	var documentDotAll = typeof document === 'object' && typeof document.all === 'undefined' && document.all !== undefined ? document.all : {};

	isCallable = reflectApply
		? function isCallable(value) {
			if (value === documentDotAll) { return true; }
			if (!value) { return false; }
			if (typeof value !== 'function' && typeof value !== 'object') { return false; }
			if (typeof value === 'function' && !value.prototype) { return true; }
			try {
				reflectApply(value, null, badArrayLike);
			} catch (e) {
				if (e !== isCallableMarker) { return false; }
			}
			return !isES6ClassFn(value);
		}
		: function isCallable(value) {
			if (value === documentDotAll) { return true; }
			if (!value) { return false; }
			if (typeof value !== 'function' && typeof value !== 'object') { return false; }
			if (typeof value === 'function' && !value.prototype) { return true; }
			if (hasToStringTag) { return tryFunctionObject(value); }
			if (isES6ClassFn(value)) { return false; }
			var strClass = toStr.call(value);
			return strClass === fnClass || strClass === genClass;
		};
	return isCallable;
}

var forEach_1;
var hasRequiredForEach;

function requireForEach () {
	if (hasRequiredForEach) return forEach_1;
	hasRequiredForEach = 1;

	var isCallable = requireIsCallable();

	var toStr = Object.prototype.toString;
	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var forEachArray = function forEachArray(array, iterator, receiver) {
	    for (var i = 0, len = array.length; i < len; i++) {
	        if (hasOwnProperty.call(array, i)) {
	            if (receiver == null) {
	                iterator(array[i], i, array);
	            } else {
	                iterator.call(receiver, array[i], i, array);
	            }
	        }
	    }
	};

	var forEachString = function forEachString(string, iterator, receiver) {
	    for (var i = 0, len = string.length; i < len; i++) {
	        // no such thing as a sparse string.
	        if (receiver == null) {
	            iterator(string.charAt(i), i, string);
	        } else {
	            iterator.call(receiver, string.charAt(i), i, string);
	        }
	    }
	};

	var forEachObject = function forEachObject(object, iterator, receiver) {
	    for (var k in object) {
	        if (hasOwnProperty.call(object, k)) {
	            if (receiver == null) {
	                iterator(object[k], k, object);
	            } else {
	                iterator.call(receiver, object[k], k, object);
	            }
	        }
	    }
	};

	var forEach = function forEach(list, iterator, thisArg) {
	    if (!isCallable(iterator)) {
	        throw new TypeError('iterator must be a function');
	    }

	    var receiver;
	    if (arguments.length >= 3) {
	        receiver = thisArg;
	    }

	    if (toStr.call(list) === '[object Array]') {
	        forEachArray(list, iterator, receiver);
	    } else if (typeof list === 'string') {
	        forEachString(list, iterator, receiver);
	    } else {
	        forEachObject(list, iterator, receiver);
	    }
	};

	forEach_1 = forEach;
	return forEach_1;
}

var availableTypedArrays;
var hasRequiredAvailableTypedArrays;

function requireAvailableTypedArrays () {
	if (hasRequiredAvailableTypedArrays) return availableTypedArrays;
	hasRequiredAvailableTypedArrays = 1;

	var possibleNames = [
		'BigInt64Array',
		'BigUint64Array',
		'Float32Array',
		'Float64Array',
		'Int16Array',
		'Int32Array',
		'Int8Array',
		'Uint16Array',
		'Uint32Array',
		'Uint8Array',
		'Uint8ClampedArray'
	];

	var g = typeof globalThis === 'undefined' ? commonjsGlobal : globalThis;

	availableTypedArrays = function availableTypedArrays() {
		var out = [];
		for (var i = 0; i < possibleNames.length; i++) {
			if (typeof g[possibleNames[i]] === 'function') {
				out[out.length] = possibleNames[i];
			}
		}
		return out;
	};
	return availableTypedArrays;
}

var getOwnPropertyDescriptor;
var hasRequiredGetOwnPropertyDescriptor;

function requireGetOwnPropertyDescriptor () {
	if (hasRequiredGetOwnPropertyDescriptor) return getOwnPropertyDescriptor;
	hasRequiredGetOwnPropertyDescriptor = 1;

	var GetIntrinsic = requireGetIntrinsic();

	var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
	if ($gOPD) {
		try {
			$gOPD([], 'length');
		} catch (e) {
			// IE 8 has a broken gOPD
			$gOPD = null;
		}
	}

	getOwnPropertyDescriptor = $gOPD;
	return getOwnPropertyDescriptor;
}

var isTypedArray;
var hasRequiredIsTypedArray;

function requireIsTypedArray () {
	if (hasRequiredIsTypedArray) return isTypedArray;
	hasRequiredIsTypedArray = 1;

	var forEach = requireForEach();
	var availableTypedArrays = requireAvailableTypedArrays();
	var callBound = requireCallBound();

	var $toString = callBound('Object.prototype.toString');
	var hasToStringTag = requireShams()();

	var g = typeof globalThis === 'undefined' ? commonjsGlobal : globalThis;
	var typedArrays = availableTypedArrays();

	var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
		for (var i = 0; i < array.length; i += 1) {
			if (array[i] === value) {
				return i;
			}
		}
		return -1;
	};
	var $slice = callBound('String.prototype.slice');
	var toStrTags = {};
	var gOPD = requireGetOwnPropertyDescriptor();
	var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
	if (hasToStringTag && gOPD && getPrototypeOf) {
		forEach(typedArrays, function (typedArray) {
			var arr = new g[typedArray]();
			if (Symbol.toStringTag in arr) {
				var proto = getPrototypeOf(arr);
				var descriptor = gOPD(proto, Symbol.toStringTag);
				if (!descriptor) {
					var superProto = getPrototypeOf(proto);
					descriptor = gOPD(superProto, Symbol.toStringTag);
				}
				toStrTags[typedArray] = descriptor.get;
			}
		});
	}

	var tryTypedArrays = function tryAllTypedArrays(value) {
		var anyTrue = false;
		forEach(toStrTags, function (getter, typedArray) {
			if (!anyTrue) {
				try {
					anyTrue = getter.call(value) === typedArray;
				} catch (e) { /**/ }
			}
		});
		return anyTrue;
	};

	isTypedArray = function isTypedArray(value) {
		if (!value || typeof value !== 'object') { return false; }
		if (!hasToStringTag || !(Symbol.toStringTag in value)) {
			var tag = $slice($toString(value), 8, -1);
			return $indexOf(typedArrays, tag) > -1;
		}
		if (!gOPD) { return false; }
		return tryTypedArrays(value);
	};
	return isTypedArray;
}

var whichTypedArray;
var hasRequiredWhichTypedArray;

function requireWhichTypedArray () {
	if (hasRequiredWhichTypedArray) return whichTypedArray;
	hasRequiredWhichTypedArray = 1;

	var forEach = requireForEach();
	var availableTypedArrays = requireAvailableTypedArrays();
	var callBound = requireCallBound();

	var $toString = callBound('Object.prototype.toString');
	var hasToStringTag = requireShams()();

	var g = typeof globalThis === 'undefined' ? commonjsGlobal : globalThis;
	var typedArrays = availableTypedArrays();

	var $slice = callBound('String.prototype.slice');
	var toStrTags = {};
	var gOPD = requireGetOwnPropertyDescriptor();
	var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
	if (hasToStringTag && gOPD && getPrototypeOf) {
		forEach(typedArrays, function (typedArray) {
			if (typeof g[typedArray] === 'function') {
				var arr = new g[typedArray]();
				if (Symbol.toStringTag in arr) {
					var proto = getPrototypeOf(arr);
					var descriptor = gOPD(proto, Symbol.toStringTag);
					if (!descriptor) {
						var superProto = getPrototypeOf(proto);
						descriptor = gOPD(superProto, Symbol.toStringTag);
					}
					toStrTags[typedArray] = descriptor.get;
				}
			}
		});
	}

	var tryTypedArrays = function tryAllTypedArrays(value) {
		var foundName = false;
		forEach(toStrTags, function (getter, typedArray) {
			if (!foundName) {
				try {
					var name = getter.call(value);
					if (name === typedArray) {
						foundName = name;
					}
				} catch (e) {}
			}
		});
		return foundName;
	};

	var isTypedArray = requireIsTypedArray();

	whichTypedArray = function whichTypedArray(value) {
		if (!isTypedArray(value)) { return false; }
		if (!hasToStringTag || !(Symbol.toStringTag in value)) { return $slice($toString(value), 8, -1); }
		return tryTypedArrays(value);
	};
	return whichTypedArray;
}

var hasRequiredTypes;

function requireTypes () {
	if (hasRequiredTypes) return types;
	hasRequiredTypes = 1;
	(function (exports) {

		var isArgumentsObject = requireIsArguments$1();
		var isGeneratorFunction = requireIsGeneratorFunction();
		var whichTypedArray = requireWhichTypedArray();
		var isTypedArray = requireIsTypedArray();

		function uncurryThis(f) {
		  return f.call.bind(f);
		}

		var BigIntSupported = typeof BigInt !== 'undefined';
		var SymbolSupported = typeof Symbol !== 'undefined';

		var ObjectToString = uncurryThis(Object.prototype.toString);

		var numberValue = uncurryThis(Number.prototype.valueOf);
		var stringValue = uncurryThis(String.prototype.valueOf);
		var booleanValue = uncurryThis(Boolean.prototype.valueOf);

		if (BigIntSupported) {
		  var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
		}

		if (SymbolSupported) {
		  var symbolValue = uncurryThis(Symbol.prototype.valueOf);
		}

		function checkBoxedPrimitive(value, prototypeValueOf) {
		  if (typeof value !== 'object') {
		    return false;
		  }
		  try {
		    prototypeValueOf(value);
		    return true;
		  } catch(e) {
		    return false;
		  }
		}

		exports.isArgumentsObject = isArgumentsObject;
		exports.isGeneratorFunction = isGeneratorFunction;
		exports.isTypedArray = isTypedArray;

		// Taken from here and modified for better browser support
		// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
		function isPromise(input) {
			return (
				(
					typeof Promise !== 'undefined' &&
					input instanceof Promise
				) ||
				(
					input !== null &&
					typeof input === 'object' &&
					typeof input.then === 'function' &&
					typeof input.catch === 'function'
				)
			);
		}
		exports.isPromise = isPromise;

		function isArrayBufferView(value) {
		  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
		    return ArrayBuffer.isView(value);
		  }

		  return (
		    isTypedArray(value) ||
		    isDataView(value)
		  );
		}
		exports.isArrayBufferView = isArrayBufferView;


		function isUint8Array(value) {
		  return whichTypedArray(value) === 'Uint8Array';
		}
		exports.isUint8Array = isUint8Array;

		function isUint8ClampedArray(value) {
		  return whichTypedArray(value) === 'Uint8ClampedArray';
		}
		exports.isUint8ClampedArray = isUint8ClampedArray;

		function isUint16Array(value) {
		  return whichTypedArray(value) === 'Uint16Array';
		}
		exports.isUint16Array = isUint16Array;

		function isUint32Array(value) {
		  return whichTypedArray(value) === 'Uint32Array';
		}
		exports.isUint32Array = isUint32Array;

		function isInt8Array(value) {
		  return whichTypedArray(value) === 'Int8Array';
		}
		exports.isInt8Array = isInt8Array;

		function isInt16Array(value) {
		  return whichTypedArray(value) === 'Int16Array';
		}
		exports.isInt16Array = isInt16Array;

		function isInt32Array(value) {
		  return whichTypedArray(value) === 'Int32Array';
		}
		exports.isInt32Array = isInt32Array;

		function isFloat32Array(value) {
		  return whichTypedArray(value) === 'Float32Array';
		}
		exports.isFloat32Array = isFloat32Array;

		function isFloat64Array(value) {
		  return whichTypedArray(value) === 'Float64Array';
		}
		exports.isFloat64Array = isFloat64Array;

		function isBigInt64Array(value) {
		  return whichTypedArray(value) === 'BigInt64Array';
		}
		exports.isBigInt64Array = isBigInt64Array;

		function isBigUint64Array(value) {
		  return whichTypedArray(value) === 'BigUint64Array';
		}
		exports.isBigUint64Array = isBigUint64Array;

		function isMapToString(value) {
		  return ObjectToString(value) === '[object Map]';
		}
		isMapToString.working = (
		  typeof Map !== 'undefined' &&
		  isMapToString(new Map())
		);

		function isMap(value) {
		  if (typeof Map === 'undefined') {
		    return false;
		  }

		  return isMapToString.working
		    ? isMapToString(value)
		    : value instanceof Map;
		}
		exports.isMap = isMap;

		function isSetToString(value) {
		  return ObjectToString(value) === '[object Set]';
		}
		isSetToString.working = (
		  typeof Set !== 'undefined' &&
		  isSetToString(new Set())
		);
		function isSet(value) {
		  if (typeof Set === 'undefined') {
		    return false;
		  }

		  return isSetToString.working
		    ? isSetToString(value)
		    : value instanceof Set;
		}
		exports.isSet = isSet;

		function isWeakMapToString(value) {
		  return ObjectToString(value) === '[object WeakMap]';
		}
		isWeakMapToString.working = (
		  typeof WeakMap !== 'undefined' &&
		  isWeakMapToString(new WeakMap())
		);
		function isWeakMap(value) {
		  if (typeof WeakMap === 'undefined') {
		    return false;
		  }

		  return isWeakMapToString.working
		    ? isWeakMapToString(value)
		    : value instanceof WeakMap;
		}
		exports.isWeakMap = isWeakMap;

		function isWeakSetToString(value) {
		  return ObjectToString(value) === '[object WeakSet]';
		}
		isWeakSetToString.working = (
		  typeof WeakSet !== 'undefined' &&
		  isWeakSetToString(new WeakSet())
		);
		function isWeakSet(value) {
		  return isWeakSetToString(value);
		}
		exports.isWeakSet = isWeakSet;

		function isArrayBufferToString(value) {
		  return ObjectToString(value) === '[object ArrayBuffer]';
		}
		isArrayBufferToString.working = (
		  typeof ArrayBuffer !== 'undefined' &&
		  isArrayBufferToString(new ArrayBuffer())
		);
		function isArrayBuffer(value) {
		  if (typeof ArrayBuffer === 'undefined') {
		    return false;
		  }

		  return isArrayBufferToString.working
		    ? isArrayBufferToString(value)
		    : value instanceof ArrayBuffer;
		}
		exports.isArrayBuffer = isArrayBuffer;

		function isDataViewToString(value) {
		  return ObjectToString(value) === '[object DataView]';
		}
		isDataViewToString.working = (
		  typeof ArrayBuffer !== 'undefined' &&
		  typeof DataView !== 'undefined' &&
		  isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1))
		);
		function isDataView(value) {
		  if (typeof DataView === 'undefined') {
		    return false;
		  }

		  return isDataViewToString.working
		    ? isDataViewToString(value)
		    : value instanceof DataView;
		}
		exports.isDataView = isDataView;

		// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
		var SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
		function isSharedArrayBufferToString(value) {
		  return ObjectToString(value) === '[object SharedArrayBuffer]';
		}
		function isSharedArrayBuffer(value) {
		  if (typeof SharedArrayBufferCopy === 'undefined') {
		    return false;
		  }

		  if (typeof isSharedArrayBufferToString.working === 'undefined') {
		    isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
		  }

		  return isSharedArrayBufferToString.working
		    ? isSharedArrayBufferToString(value)
		    : value instanceof SharedArrayBufferCopy;
		}
		exports.isSharedArrayBuffer = isSharedArrayBuffer;

		function isAsyncFunction(value) {
		  return ObjectToString(value) === '[object AsyncFunction]';
		}
		exports.isAsyncFunction = isAsyncFunction;

		function isMapIterator(value) {
		  return ObjectToString(value) === '[object Map Iterator]';
		}
		exports.isMapIterator = isMapIterator;

		function isSetIterator(value) {
		  return ObjectToString(value) === '[object Set Iterator]';
		}
		exports.isSetIterator = isSetIterator;

		function isGeneratorObject(value) {
		  return ObjectToString(value) === '[object Generator]';
		}
		exports.isGeneratorObject = isGeneratorObject;

		function isWebAssemblyCompiledModule(value) {
		  return ObjectToString(value) === '[object WebAssembly.Module]';
		}
		exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;

		function isNumberObject(value) {
		  return checkBoxedPrimitive(value, numberValue);
		}
		exports.isNumberObject = isNumberObject;

		function isStringObject(value) {
		  return checkBoxedPrimitive(value, stringValue);
		}
		exports.isStringObject = isStringObject;

		function isBooleanObject(value) {
		  return checkBoxedPrimitive(value, booleanValue);
		}
		exports.isBooleanObject = isBooleanObject;

		function isBigIntObject(value) {
		  return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
		}
		exports.isBigIntObject = isBigIntObject;

		function isSymbolObject(value) {
		  return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
		}
		exports.isSymbolObject = isSymbolObject;

		function isBoxedPrimitive(value) {
		  return (
		    isNumberObject(value) ||
		    isStringObject(value) ||
		    isBooleanObject(value) ||
		    isBigIntObject(value) ||
		    isSymbolObject(value)
		  );
		}
		exports.isBoxedPrimitive = isBoxedPrimitive;

		function isAnyArrayBuffer(value) {
		  return typeof Uint8Array !== 'undefined' && (
		    isArrayBuffer(value) ||
		    isSharedArrayBuffer(value)
		  );
		}
		exports.isAnyArrayBuffer = isAnyArrayBuffer;

		['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function(method) {
		  Object.defineProperty(exports, method, {
		    enumerable: false,
		    value: function() {
		      throw new Error(method + ' is not supported in userland');
		    }
		  });
		});
} (types));
	return types;
}

var isBuffer;
var hasRequiredIsBuffer;

function requireIsBuffer () {
	if (hasRequiredIsBuffer) return isBuffer;
	hasRequiredIsBuffer = 1;
	isBuffer = function isBuffer(arg) {
	  return arg instanceof Buffer;
	};
	return isBuffer;
}

var inherits = {exports: {}};

var inherits_browser = {exports: {}};

var hasRequiredInherits_browser;

function requireInherits_browser () {
	if (hasRequiredInherits_browser) return inherits_browser.exports;
	hasRequiredInherits_browser = 1;
	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      ctor.prototype = Object.create(superCtor.prototype, {
	        constructor: {
	          value: ctor,
	          enumerable: false,
	          writable: true,
	          configurable: true
	        }
	      });
	    }
	  };
	} else {
	  // old school shim for old browsers
	  inherits_browser.exports = function inherits(ctor, superCtor) {
	    if (superCtor) {
	      ctor.super_ = superCtor;
	      var TempCtor = function () {};
	      TempCtor.prototype = superCtor.prototype;
	      ctor.prototype = new TempCtor();
	      ctor.prototype.constructor = ctor;
	    }
	  };
	}
	return inherits_browser.exports;
}

var hasRequiredInherits;

function requireInherits () {
	if (hasRequiredInherits) return inherits.exports;
	hasRequiredInherits = 1;
	(function (module) {
		try {
		  var util = requireUtil();
		  /* istanbul ignore next */
		  if (typeof util.inherits !== 'function') throw '';
		  module.exports = util.inherits;
		} catch (e) {
		  /* istanbul ignore next */
		  module.exports = requireInherits_browser();
		}
} (inherits));
	return inherits.exports;
}

var hasRequiredUtil;

function requireUtil () {
	if (hasRequiredUtil) return util;
	hasRequiredUtil = 1;
	(function (exports) {
		// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
		  function getOwnPropertyDescriptors(obj) {
		    var keys = Object.keys(obj);
		    var descriptors = {};
		    for (var i = 0; i < keys.length; i++) {
		      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
		    }
		    return descriptors;
		  };

		var formatRegExp = /%[sdj%]/g;
		exports.format = function(f) {
		  if (!isString(f)) {
		    var objects = [];
		    for (var i = 0; i < arguments.length; i++) {
		      objects.push(inspect(arguments[i]));
		    }
		    return objects.join(' ');
		  }

		  var i = 1;
		  var args = arguments;
		  var len = args.length;
		  var str = String(f).replace(formatRegExp, function(x) {
		    if (x === '%%') return '%';
		    if (i >= len) return x;
		    switch (x) {
		      case '%s': return String(args[i++]);
		      case '%d': return Number(args[i++]);
		      case '%j':
		        try {
		          return JSON.stringify(args[i++]);
		        } catch (_) {
		          return '[Circular]';
		        }
		      default:
		        return x;
		    }
		  });
		  for (var x = args[i]; i < len; x = args[++i]) {
		    if (isNull(x) || !isObject(x)) {
		      str += ' ' + x;
		    } else {
		      str += ' ' + inspect(x);
		    }
		  }
		  return str;
		};


		// Mark that a method should not be used.
		// Returns a modified function which warns once by default.
		// If --no-deprecation is set, then it is a no-op.
		exports.deprecate = function(fn, msg) {
		  if (typeof process !== 'undefined' && process.noDeprecation === true) {
		    return fn;
		  }

		  // Allow for deprecating things in the process of starting up.
		  if (typeof process === 'undefined') {
		    return function() {
		      return exports.deprecate(fn, msg).apply(this, arguments);
		    };
		  }

		  var warned = false;
		  function deprecated() {
		    if (!warned) {
		      if (process.throwDeprecation) {
		        throw new Error(msg);
		      } else if (process.traceDeprecation) {
		        console.trace(msg);
		      } else {
		        console.error(msg);
		      }
		      warned = true;
		    }
		    return fn.apply(this, arguments);
		  }

		  return deprecated;
		};


		var debugs = {};
		var debugEnvRegex = /^$/;

		if (process.env.NODE_DEBUG) {
		  var debugEnv = process.env.NODE_DEBUG;
		  debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
		    .replace(/\*/g, '.*')
		    .replace(/,/g, '$|^')
		    .toUpperCase();
		  debugEnvRegex = new RegExp('^' + debugEnv + '$', 'i');
		}
		exports.debuglog = function(set) {
		  set = set.toUpperCase();
		  if (!debugs[set]) {
		    if (debugEnvRegex.test(set)) {
		      var pid = process.pid;
		      debugs[set] = function() {
		        var msg = exports.format.apply(exports, arguments);
		        console.error('%s %d: %s', set, pid, msg);
		      };
		    } else {
		      debugs[set] = function() {};
		    }
		  }
		  return debugs[set];
		};


		/**
		 * Echos the value of a value. Trys to print the value out
		 * in the best way possible given the different types.
		 *
		 * @param {Object} obj The object to print out.
		 * @param {Object} opts Optional options object that alters the output.
		 */
		/* legacy: obj, showHidden, depth, colors*/
		function inspect(obj, opts) {
		  // default options
		  var ctx = {
		    seen: [],
		    stylize: stylizeNoColor
		  };
		  // legacy...
		  if (arguments.length >= 3) ctx.depth = arguments[2];
		  if (arguments.length >= 4) ctx.colors = arguments[3];
		  if (isBoolean(opts)) {
		    // legacy...
		    ctx.showHidden = opts;
		  } else if (opts) {
		    // got an "options" object
		    exports._extend(ctx, opts);
		  }
		  // set default options
		  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
		  if (isUndefined(ctx.depth)) ctx.depth = 2;
		  if (isUndefined(ctx.colors)) ctx.colors = false;
		  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
		  if (ctx.colors) ctx.stylize = stylizeWithColor;
		  return formatValue(ctx, obj, ctx.depth);
		}
		exports.inspect = inspect;


		// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
		inspect.colors = {
		  'bold' : [1, 22],
		  'italic' : [3, 23],
		  'underline' : [4, 24],
		  'inverse' : [7, 27],
		  'white' : [37, 39],
		  'grey' : [90, 39],
		  'black' : [30, 39],
		  'blue' : [34, 39],
		  'cyan' : [36, 39],
		  'green' : [32, 39],
		  'magenta' : [35, 39],
		  'red' : [31, 39],
		  'yellow' : [33, 39]
		};

		// Don't use 'blue' not visible on cmd.exe
		inspect.styles = {
		  'special': 'cyan',
		  'number': 'yellow',
		  'boolean': 'yellow',
		  'undefined': 'grey',
		  'null': 'bold',
		  'string': 'green',
		  'date': 'magenta',
		  // "name": intentionally not styling
		  'regexp': 'red'
		};


		function stylizeWithColor(str, styleType) {
		  var style = inspect.styles[styleType];

		  if (style) {
		    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
		           '\u001b[' + inspect.colors[style][1] + 'm';
		  } else {
		    return str;
		  }
		}


		function stylizeNoColor(str, styleType) {
		  return str;
		}


		function arrayToHash(array) {
		  var hash = {};

		  array.forEach(function(val, idx) {
		    hash[val] = true;
		  });

		  return hash;
		}


		function formatValue(ctx, value, recurseTimes) {
		  // Provide a hook for user-specified inspect functions.
		  // Check that value is an object with an inspect function on it
		  if (ctx.customInspect &&
		      value &&
		      isFunction(value.inspect) &&
		      // Filter out the util module, it's inspect function is special
		      value.inspect !== exports.inspect &&
		      // Also filter out any prototype objects using the circular check.
		      !(value.constructor && value.constructor.prototype === value)) {
		    var ret = value.inspect(recurseTimes, ctx);
		    if (!isString(ret)) {
		      ret = formatValue(ctx, ret, recurseTimes);
		    }
		    return ret;
		  }

		  // Primitive types cannot have properties
		  var primitive = formatPrimitive(ctx, value);
		  if (primitive) {
		    return primitive;
		  }

		  // Look up the keys of the object.
		  var keys = Object.keys(value);
		  var visibleKeys = arrayToHash(keys);

		  if (ctx.showHidden) {
		    keys = Object.getOwnPropertyNames(value);
		  }

		  // IE doesn't make error fields non-enumerable
		  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
		  if (isError(value)
		      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
		    return formatError(value);
		  }

		  // Some type of object without properties can be shortcutted.
		  if (keys.length === 0) {
		    if (isFunction(value)) {
		      var name = value.name ? ': ' + value.name : '';
		      return ctx.stylize('[Function' + name + ']', 'special');
		    }
		    if (isRegExp(value)) {
		      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
		    }
		    if (isDate(value)) {
		      return ctx.stylize(Date.prototype.toString.call(value), 'date');
		    }
		    if (isError(value)) {
		      return formatError(value);
		    }
		  }

		  var base = '', array = false, braces = ['{', '}'];

		  // Make Array say that they are Array
		  if (isArray(value)) {
		    array = true;
		    braces = ['[', ']'];
		  }

		  // Make functions say that they are functions
		  if (isFunction(value)) {
		    var n = value.name ? ': ' + value.name : '';
		    base = ' [Function' + n + ']';
		  }

		  // Make RegExps say that they are RegExps
		  if (isRegExp(value)) {
		    base = ' ' + RegExp.prototype.toString.call(value);
		  }

		  // Make dates with properties first say the date
		  if (isDate(value)) {
		    base = ' ' + Date.prototype.toUTCString.call(value);
		  }

		  // Make error with message first say the error
		  if (isError(value)) {
		    base = ' ' + formatError(value);
		  }

		  if (keys.length === 0 && (!array || value.length == 0)) {
		    return braces[0] + base + braces[1];
		  }

		  if (recurseTimes < 0) {
		    if (isRegExp(value)) {
		      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
		    } else {
		      return ctx.stylize('[Object]', 'special');
		    }
		  }

		  ctx.seen.push(value);

		  var output;
		  if (array) {
		    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
		  } else {
		    output = keys.map(function(key) {
		      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
		    });
		  }

		  ctx.seen.pop();

		  return reduceToSingleString(output, base, braces);
		}


		function formatPrimitive(ctx, value) {
		  if (isUndefined(value))
		    return ctx.stylize('undefined', 'undefined');
		  if (isString(value)) {
		    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
		                                             .replace(/'/g, "\\'")
		                                             .replace(/\\"/g, '"') + '\'';
		    return ctx.stylize(simple, 'string');
		  }
		  if (isNumber(value))
		    return ctx.stylize('' + value, 'number');
		  if (isBoolean(value))
		    return ctx.stylize('' + value, 'boolean');
		  // For some reason typeof null is "object", so special case here.
		  if (isNull(value))
		    return ctx.stylize('null', 'null');
		}


		function formatError(value) {
		  return '[' + Error.prototype.toString.call(value) + ']';
		}


		function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
		  var output = [];
		  for (var i = 0, l = value.length; i < l; ++i) {
		    if (hasOwnProperty(value, String(i))) {
		      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
		          String(i), true));
		    } else {
		      output.push('');
		    }
		  }
		  keys.forEach(function(key) {
		    if (!key.match(/^\d+$/)) {
		      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
		          key, true));
		    }
		  });
		  return output;
		}


		function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
		  var name, str, desc;
		  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
		  if (desc.get) {
		    if (desc.set) {
		      str = ctx.stylize('[Getter/Setter]', 'special');
		    } else {
		      str = ctx.stylize('[Getter]', 'special');
		    }
		  } else {
		    if (desc.set) {
		      str = ctx.stylize('[Setter]', 'special');
		    }
		  }
		  if (!hasOwnProperty(visibleKeys, key)) {
		    name = '[' + key + ']';
		  }
		  if (!str) {
		    if (ctx.seen.indexOf(desc.value) < 0) {
		      if (isNull(recurseTimes)) {
		        str = formatValue(ctx, desc.value, null);
		      } else {
		        str = formatValue(ctx, desc.value, recurseTimes - 1);
		      }
		      if (str.indexOf('\n') > -1) {
		        if (array) {
		          str = str.split('\n').map(function(line) {
		            return '  ' + line;
		          }).join('\n').substr(2);
		        } else {
		          str = '\n' + str.split('\n').map(function(line) {
		            return '   ' + line;
		          }).join('\n');
		        }
		      }
		    } else {
		      str = ctx.stylize('[Circular]', 'special');
		    }
		  }
		  if (isUndefined(name)) {
		    if (array && key.match(/^\d+$/)) {
		      return str;
		    }
		    name = JSON.stringify('' + key);
		    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
		      name = name.substr(1, name.length - 2);
		      name = ctx.stylize(name, 'name');
		    } else {
		      name = name.replace(/'/g, "\\'")
		                 .replace(/\\"/g, '"')
		                 .replace(/(^"|"$)/g, "'");
		      name = ctx.stylize(name, 'string');
		    }
		  }

		  return name + ': ' + str;
		}


		function reduceToSingleString(output, base, braces) {
		  var length = output.reduce(function(prev, cur) {
		    if (cur.indexOf('\n') >= 0) ;
		    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
		  }, 0);

		  if (length > 60) {
		    return braces[0] +
		           (base === '' ? '' : base + '\n ') +
		           ' ' +
		           output.join(',\n  ') +
		           ' ' +
		           braces[1];
		  }

		  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
		}


		// NOTE: These type checking functions intentionally don't use `instanceof`
		// because it is fragile and can be easily faked with `Object.create()`.
		exports.types = requireTypes();

		function isArray(ar) {
		  return Array.isArray(ar);
		}
		exports.isArray = isArray;

		function isBoolean(arg) {
		  return typeof arg === 'boolean';
		}
		exports.isBoolean = isBoolean;

		function isNull(arg) {
		  return arg === null;
		}
		exports.isNull = isNull;

		function isNullOrUndefined(arg) {
		  return arg == null;
		}
		exports.isNullOrUndefined = isNullOrUndefined;

		function isNumber(arg) {
		  return typeof arg === 'number';
		}
		exports.isNumber = isNumber;

		function isString(arg) {
		  return typeof arg === 'string';
		}
		exports.isString = isString;

		function isSymbol(arg) {
		  return typeof arg === 'symbol';
		}
		exports.isSymbol = isSymbol;

		function isUndefined(arg) {
		  return arg === void 0;
		}
		exports.isUndefined = isUndefined;

		function isRegExp(re) {
		  return isObject(re) && objectToString(re) === '[object RegExp]';
		}
		exports.isRegExp = isRegExp;
		exports.types.isRegExp = isRegExp;

		function isObject(arg) {
		  return typeof arg === 'object' && arg !== null;
		}
		exports.isObject = isObject;

		function isDate(d) {
		  return isObject(d) && objectToString(d) === '[object Date]';
		}
		exports.isDate = isDate;
		exports.types.isDate = isDate;

		function isError(e) {
		  return isObject(e) &&
		      (objectToString(e) === '[object Error]' || e instanceof Error);
		}
		exports.isError = isError;
		exports.types.isNativeError = isError;

		function isFunction(arg) {
		  return typeof arg === 'function';
		}
		exports.isFunction = isFunction;

		function isPrimitive(arg) {
		  return arg === null ||
		         typeof arg === 'boolean' ||
		         typeof arg === 'number' ||
		         typeof arg === 'string' ||
		         typeof arg === 'symbol' ||  // ES6 symbol
		         typeof arg === 'undefined';
		}
		exports.isPrimitive = isPrimitive;

		exports.isBuffer = requireIsBuffer();

		function objectToString(o) {
		  return Object.prototype.toString.call(o);
		}


		function pad(n) {
		  return n < 10 ? '0' + n.toString(10) : n.toString(10);
		}


		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
		              'Oct', 'Nov', 'Dec'];

		// 26 Feb 16:19:34
		function timestamp() {
		  var d = new Date();
		  var time = [pad(d.getHours()),
		              pad(d.getMinutes()),
		              pad(d.getSeconds())].join(':');
		  return [d.getDate(), months[d.getMonth()], time].join(' ');
		}


		// log is just a thin wrapper to console.log that prepends a timestamp
		exports.log = function() {
		  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
		};


		/**
		 * Inherit the prototype methods from one constructor into another.
		 *
		 * The Function.prototype.inherits from lang.js rewritten as a standalone
		 * function (not on Function.prototype). NOTE: If this file is to be loaded
		 * during bootstrapping this function needs to be rewritten using some native
		 * functions as prototype setup using normal JavaScript does not work as
		 * expected during bootstrapping (see mirror.js in r114903).
		 *
		 * @param {function} ctor Constructor function which needs to inherit the
		 *     prototype.
		 * @param {function} superCtor Constructor function to inherit prototype from.
		 */
		exports.inherits = requireInherits();

		exports._extend = function(origin, add) {
		  // Don't do anything if add isn't an object
		  if (!add || !isObject(add)) return origin;

		  var keys = Object.keys(add);
		  var i = keys.length;
		  while (i--) {
		    origin[keys[i]] = add[keys[i]];
		  }
		  return origin;
		};

		function hasOwnProperty(obj, prop) {
		  return Object.prototype.hasOwnProperty.call(obj, prop);
		}

		var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

		exports.promisify = function promisify(original) {
		  if (typeof original !== 'function')
		    throw new TypeError('The "original" argument must be of type Function');

		  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
		    var fn = original[kCustomPromisifiedSymbol];
		    if (typeof fn !== 'function') {
		      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
		    }
		    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
		      value: fn, enumerable: false, writable: false, configurable: true
		    });
		    return fn;
		  }

		  function fn() {
		    var promiseResolve, promiseReject;
		    var promise = new Promise(function (resolve, reject) {
		      promiseResolve = resolve;
		      promiseReject = reject;
		    });

		    var args = [];
		    for (var i = 0; i < arguments.length; i++) {
		      args.push(arguments[i]);
		    }
		    args.push(function (err, value) {
		      if (err) {
		        promiseReject(err);
		      } else {
		        promiseResolve(value);
		      }
		    });

		    try {
		      original.apply(this, args);
		    } catch (err) {
		      promiseReject(err);
		    }

		    return promise;
		  }

		  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

		  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
		    value: fn, enumerable: false, writable: false, configurable: true
		  });
		  return Object.defineProperties(
		    fn,
		    getOwnPropertyDescriptors(original)
		  );
		};

		exports.promisify.custom = kCustomPromisifiedSymbol;

		function callbackifyOnRejected(reason, cb) {
		  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
		  // Because `null` is a special error value in callbacks which means "no error
		  // occurred", we error-wrap so the callback consumer can distinguish between
		  // "the promise rejected with null" or "the promise fulfilled with undefined".
		  if (!reason) {
		    var newReason = new Error('Promise was rejected with a falsy value');
		    newReason.reason = reason;
		    reason = newReason;
		  }
		  return cb(reason);
		}

		function callbackify(original) {
		  if (typeof original !== 'function') {
		    throw new TypeError('The "original" argument must be of type Function');
		  }

		  // We DO NOT return the promise as it gives the user a false sense that
		  // the promise is actually somehow related to the callback's execution
		  // and that the callback throwing will reject the promise.
		  function callbackified() {
		    var args = [];
		    for (var i = 0; i < arguments.length; i++) {
		      args.push(arguments[i]);
		    }

		    var maybeCb = args.pop();
		    if (typeof maybeCb !== 'function') {
		      throw new TypeError('The last argument must be of type Function');
		    }
		    var self = this;
		    var cb = function() {
		      return maybeCb.apply(self, arguments);
		    };
		    // In true node style we process the callback on `nextTick` with all the
		    // implications (stack, `uncaughtException`, `async_hooks`)
		    original.apply(this, args)
		      .then(function(ret) { process.nextTick(cb.bind(null, null, ret)); },
		            function(rej) { process.nextTick(callbackifyOnRejected.bind(null, rej, cb)); });
		  }

		  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
		  Object.defineProperties(callbackified,
		                          getOwnPropertyDescriptors(original));
		  return callbackified;
		}
		exports.callbackify = callbackify;
} (util));
	return util;
}

var hasRequiredErrors;

function requireErrors () {
	if (hasRequiredErrors) return errors;
	hasRequiredErrors = 1;
	// longer be forced to treat every error message change as a semver-major
	// change. The NodeError classes here all expose a `code` property whose
	// value statically and permanently identifies the error. While the error
	// message may change, the code should not.

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	var codes = {}; // Lazy loaded

	var assert;
	var util;

	function createErrorType(code, message, Base) {
	  if (!Base) {
	    Base = Error;
	  }

	  function getMessage(arg1, arg2, arg3) {
	    if (typeof message === 'string') {
	      return message;
	    } else {
	      return message(arg1, arg2, arg3);
	    }
	  }

	  var NodeError =
	  /*#__PURE__*/
	  function (_Base) {
	    _inherits(NodeError, _Base);

	    function NodeError(arg1, arg2, arg3) {
	      var _this;

	      _classCallCheck(this, NodeError);

	      _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeError).call(this, getMessage(arg1, arg2, arg3)));
	      _this.code = code;
	      return _this;
	    }

	    return NodeError;
	  }(Base);

	  codes[code] = NodeError;
	} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js


	function oneOf(expected, thing) {
	  if (Array.isArray(expected)) {
	    var len = expected.length;
	    expected = expected.map(function (i) {
	      return String(i);
	    });

	    if (len > 2) {
	      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
	    } else if (len === 2) {
	      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
	    } else {
	      return "of ".concat(thing, " ").concat(expected[0]);
	    }
	  } else {
	    return "of ".concat(thing, " ").concat(String(expected));
	  }
	} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


	function startsWith(str, search, pos) {
	  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
	} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


	function endsWith(str, search, this_len) {
	  if (this_len === undefined || this_len > str.length) {
	    this_len = str.length;
	  }

	  return str.substring(this_len - search.length, this_len) === search;
	} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


	function includes(str, search, start) {
	  if (typeof start !== 'number') {
	    start = 0;
	  }

	  if (start + search.length > str.length) {
	    return false;
	  } else {
	    return str.indexOf(search, start) !== -1;
	  }
	}

	createErrorType('ERR_AMBIGUOUS_ARGUMENT', 'The "%s" argument is ambiguous. %s', TypeError);
	createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
	  if (assert === undefined) assert = requireAssert();
	  assert(typeof name === 'string', "'name' must be a string"); // determiner: 'must be' or 'must not be'

	  var determiner;

	  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
	    determiner = 'must not be';
	    expected = expected.replace(/^not /, '');
	  } else {
	    determiner = 'must be';
	  }

	  var msg;

	  if (endsWith(name, ' argument')) {
	    // For cases like 'first argument'
	    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
	  } else {
	    var type = includes(name, '.') ? 'property' : 'argument';
	    msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
	  } // TODO(BridgeAR): Improve the output by showing `null` and similar.


	  msg += ". Received type ".concat(_typeof(actual));
	  return msg;
	}, TypeError);
	createErrorType('ERR_INVALID_ARG_VALUE', function (name, value) {
	  var reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'is invalid';
	  if (util === undefined) util = requireUtil();
	  var inspected = util.inspect(value);

	  if (inspected.length > 128) {
	    inspected = "".concat(inspected.slice(0, 128), "...");
	  }

	  return "The argument '".concat(name, "' ").concat(reason, ". Received ").concat(inspected);
	}, TypeError);
	createErrorType('ERR_INVALID_RETURN_VALUE', function (input, name, value) {
	  var type;

	  if (value && value.constructor && value.constructor.name) {
	    type = "instance of ".concat(value.constructor.name);
	  } else {
	    type = "type ".concat(_typeof(value));
	  }

	  return "Expected ".concat(input, " to be returned from the \"").concat(name, "\"") + " function but got ".concat(type, ".");
	}, TypeError);
	createErrorType('ERR_MISSING_ARGS', function () {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  if (assert === undefined) assert = requireAssert();
	  assert(args.length > 0, 'At least one arg needs to be specified');
	  var msg = 'The ';
	  var len = args.length;
	  args = args.map(function (a) {
	    return "\"".concat(a, "\"");
	  });

	  switch (len) {
	    case 1:
	      msg += "".concat(args[0], " argument");
	      break;

	    case 2:
	      msg += "".concat(args[0], " and ").concat(args[1], " arguments");
	      break;

	    default:
	      msg += args.slice(0, len - 1).join(', ');
	      msg += ", and ".concat(args[len - 1], " arguments");
	      break;
	  }

	  return "".concat(msg, " must be specified");
	}, TypeError);
	errors.codes = codes;
	return errors;
}

var assertion_error;
var hasRequiredAssertion_error;

function requireAssertion_error () {
	if (hasRequiredAssertion_error) return assertion_error;
	hasRequiredAssertion_error = 1;

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

	function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

	function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

	function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	var _require = requireUtil(),
	    inspect = _require.inspect;

	var _require2 = requireErrors(),
	    ERR_INVALID_ARG_TYPE = _require2.codes.ERR_INVALID_ARG_TYPE; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


	function endsWith(str, search, this_len) {
	  if (this_len === undefined || this_len > str.length) {
	    this_len = str.length;
	  }

	  return str.substring(this_len - search.length, this_len) === search;
	} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat


	function repeat(str, count) {
	  count = Math.floor(count);
	  if (str.length == 0 || count == 0) return '';
	  var maxCount = str.length * count;
	  count = Math.floor(Math.log(count) / Math.log(2));

	  while (count) {
	    str += str;
	    count--;
	  }

	  str += str.substring(0, maxCount - str.length);
	  return str;
	}

	var blue = '';
	var green = '';
	var red = '';
	var white = '';
	var kReadableOperator = {
	  deepStrictEqual: 'Expected values to be strictly deep-equal:',
	  strictEqual: 'Expected values to be strictly equal:',
	  strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
	  deepEqual: 'Expected values to be loosely deep-equal:',
	  equal: 'Expected values to be loosely equal:',
	  notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
	  notStrictEqual: 'Expected "actual" to be strictly unequal to:',
	  notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
	  notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
	  notEqual: 'Expected "actual" to be loosely unequal to:',
	  notIdentical: 'Values identical but not reference-equal:'
	}; // Comparing short primitives should just show === / !== instead of using the
	// diff.

	var kMaxShortLength = 10;

	function copyError(source) {
	  var keys = Object.keys(source);
	  var target = Object.create(Object.getPrototypeOf(source));
	  keys.forEach(function (key) {
	    target[key] = source[key];
	  });
	  Object.defineProperty(target, 'message', {
	    value: source.message
	  });
	  return target;
	}

	function inspectValue(val) {
	  // The util.inspect default values could be changed. This makes sure the
	  // error messages contain the necessary information nevertheless.
	  return inspect(val, {
	    compact: false,
	    customInspect: false,
	    depth: 1000,
	    maxArrayLength: Infinity,
	    // Assert compares only enumerable properties (with a few exceptions).
	    showHidden: false,
	    // Having a long line as error is better than wrapping the line for
	    // comparison for now.
	    // TODO(BridgeAR): `breakLength` should be limited as soon as soon as we
	    // have meta information about the inspected properties (i.e., know where
	    // in what line the property starts and ends).
	    breakLength: Infinity,
	    // Assert does not detect proxies currently.
	    showProxy: false,
	    sorted: true,
	    // Inspect getters as we also check them when comparing entries.
	    getters: true
	  });
	}

	function createErrDiff(actual, expected, operator) {
	  var other = '';
	  var res = '';
	  var lastPos = 0;
	  var end = '';
	  var skipped = false;
	  var actualInspected = inspectValue(actual);
	  var actualLines = actualInspected.split('\n');
	  var expectedLines = inspectValue(expected).split('\n');
	  var i = 0;
	  var indicator = ''; // In case both values are objects explicitly mark them as not reference equal
	  // for the `strictEqual` operator.

	  if (operator === 'strictEqual' && _typeof(actual) === 'object' && _typeof(expected) === 'object' && actual !== null && expected !== null) {
	    operator = 'strictEqualObject';
	  } // If "actual" and "expected" fit on a single line and they are not strictly
	  // equal, check further special handling.


	  if (actualLines.length === 1 && expectedLines.length === 1 && actualLines[0] !== expectedLines[0]) {
	    var inputLength = actualLines[0].length + expectedLines[0].length; // If the character length of "actual" and "expected" together is less than
	    // kMaxShortLength and if neither is an object and at least one of them is
	    // not `zero`, use the strict equal comparison to visualize the output.

	    if (inputLength <= kMaxShortLength) {
	      if ((_typeof(actual) !== 'object' || actual === null) && (_typeof(expected) !== 'object' || expected === null) && (actual !== 0 || expected !== 0)) {
	        // -0 === +0
	        return "".concat(kReadableOperator[operator], "\n\n") + "".concat(actualLines[0], " !== ").concat(expectedLines[0], "\n");
	      }
	    } else if (operator !== 'strictEqualObject') {
	      // If the stderr is a tty and the input length is lower than the current
	      // columns per line, add a mismatch indicator below the output. If it is
	      // not a tty, use a default value of 80 characters.
	      var maxLength = process.stderr && process.stderr.isTTY ? process.stderr.columns : 80;

	      if (inputLength < maxLength) {
	        while (actualLines[0][i] === expectedLines[0][i]) {
	          i++;
	        } // Ignore the first characters.


	        if (i > 2) {
	          // Add position indicator for the first mismatch in case it is a
	          // single line and the input length is less than the column length.
	          indicator = "\n  ".concat(repeat(' ', i), "^");
	          i = 0;
	        }
	      }
	    }
	  } // Remove all ending lines that match (this optimizes the output for
	  // readability by reducing the number of total changed lines).


	  var a = actualLines[actualLines.length - 1];
	  var b = expectedLines[expectedLines.length - 1];

	  while (a === b) {
	    if (i++ < 2) {
	      end = "\n  ".concat(a).concat(end);
	    } else {
	      other = a;
	    }

	    actualLines.pop();
	    expectedLines.pop();
	    if (actualLines.length === 0 || expectedLines.length === 0) break;
	    a = actualLines[actualLines.length - 1];
	    b = expectedLines[expectedLines.length - 1];
	  }

	  var maxLines = Math.max(actualLines.length, expectedLines.length); // Strict equal with identical objects that are not identical by reference.
	  // E.g., assert.deepStrictEqual({ a: Symbol() }, { a: Symbol() })

	  if (maxLines === 0) {
	    // We have to get the result again. The lines were all removed before.
	    var _actualLines = actualInspected.split('\n'); // Only remove lines in case it makes sense to collapse those.
	    // TODO: Accept env to always show the full error.


	    if (_actualLines.length > 30) {
	      _actualLines[26] = "".concat(blue, "...").concat(white);

	      while (_actualLines.length > 27) {
	        _actualLines.pop();
	      }
	    }

	    return "".concat(kReadableOperator.notIdentical, "\n\n").concat(_actualLines.join('\n'), "\n");
	  }

	  if (i > 3) {
	    end = "\n".concat(blue, "...").concat(white).concat(end);
	    skipped = true;
	  }

	  if (other !== '') {
	    end = "\n  ".concat(other).concat(end);
	    other = '';
	  }

	  var printedLines = 0;
	  var msg = kReadableOperator[operator] + "\n".concat(green, "+ actual").concat(white, " ").concat(red, "- expected").concat(white);
	  var skippedMsg = " ".concat(blue, "...").concat(white, " Lines skipped");

	  for (i = 0; i < maxLines; i++) {
	    // Only extra expected lines exist
	    var cur = i - lastPos;

	    if (actualLines.length < i + 1) {
	      // If the last diverging line is more than one line above and the
	      // current line is at least line three, add some of the former lines and
	      // also add dots to indicate skipped entries.
	      if (cur > 1 && i > 2) {
	        if (cur > 4) {
	          res += "\n".concat(blue, "...").concat(white);
	          skipped = true;
	        } else if (cur > 3) {
	          res += "\n  ".concat(expectedLines[i - 2]);
	          printedLines++;
	        }

	        res += "\n  ".concat(expectedLines[i - 1]);
	        printedLines++;
	      } // Mark the current line as the last diverging one.


	      lastPos = i; // Add the expected line to the cache.

	      other += "\n".concat(red, "-").concat(white, " ").concat(expectedLines[i]);
	      printedLines++; // Only extra actual lines exist
	    } else if (expectedLines.length < i + 1) {
	      // If the last diverging line is more than one line above and the
	      // current line is at least line three, add some of the former lines and
	      // also add dots to indicate skipped entries.
	      if (cur > 1 && i > 2) {
	        if (cur > 4) {
	          res += "\n".concat(blue, "...").concat(white);
	          skipped = true;
	        } else if (cur > 3) {
	          res += "\n  ".concat(actualLines[i - 2]);
	          printedLines++;
	        }

	        res += "\n  ".concat(actualLines[i - 1]);
	        printedLines++;
	      } // Mark the current line as the last diverging one.


	      lastPos = i; // Add the actual line to the result.

	      res += "\n".concat(green, "+").concat(white, " ").concat(actualLines[i]);
	      printedLines++; // Lines diverge
	    } else {
	      var expectedLine = expectedLines[i];
	      var actualLine = actualLines[i]; // If the lines diverge, specifically check for lines that only diverge by
	      // a trailing comma. In that case it is actually identical and we should
	      // mark it as such.

	      var divergingLines = actualLine !== expectedLine && (!endsWith(actualLine, ',') || actualLine.slice(0, -1) !== expectedLine); // If the expected line has a trailing comma but is otherwise identical,
	      // add a comma at the end of the actual line. Otherwise the output could
	      // look weird as in:
	      //
	      //   [
	      //     1         // No comma at the end!
	      // +   2
	      //   ]
	      //

	      if (divergingLines && endsWith(expectedLine, ',') && expectedLine.slice(0, -1) === actualLine) {
	        divergingLines = false;
	        actualLine += ',';
	      }

	      if (divergingLines) {
	        // If the last diverging line is more than one line above and the
	        // current line is at least line three, add some of the former lines and
	        // also add dots to indicate skipped entries.
	        if (cur > 1 && i > 2) {
	          if (cur > 4) {
	            res += "\n".concat(blue, "...").concat(white);
	            skipped = true;
	          } else if (cur > 3) {
	            res += "\n  ".concat(actualLines[i - 2]);
	            printedLines++;
	          }

	          res += "\n  ".concat(actualLines[i - 1]);
	          printedLines++;
	        } // Mark the current line as the last diverging one.


	        lastPos = i; // Add the actual line to the result and cache the expected diverging
	        // line so consecutive diverging lines show up as +++--- and not +-+-+-.

	        res += "\n".concat(green, "+").concat(white, " ").concat(actualLine);
	        other += "\n".concat(red, "-").concat(white, " ").concat(expectedLine);
	        printedLines += 2; // Lines are identical
	      } else {
	        // Add all cached information to the result before adding other things
	        // and reset the cache.
	        res += other;
	        other = ''; // If the last diverging line is exactly one line above or if it is the
	        // very first line, add the line to the result.

	        if (cur === 1 || i === 0) {
	          res += "\n  ".concat(actualLine);
	          printedLines++;
	        }
	      }
	    } // Inspected object to big (Show ~20 rows max)


	    if (printedLines > 20 && i < maxLines - 2) {
	      return "".concat(msg).concat(skippedMsg, "\n").concat(res, "\n").concat(blue, "...").concat(white).concat(other, "\n") + "".concat(blue, "...").concat(white);
	    }
	  }

	  return "".concat(msg).concat(skipped ? skippedMsg : '', "\n").concat(res).concat(other).concat(end).concat(indicator);
	}

	var AssertionError =
	/*#__PURE__*/
	function (_Error) {
	  _inherits(AssertionError, _Error);

	  function AssertionError(options) {
	    var _this;

	    _classCallCheck(this, AssertionError);

	    if (_typeof(options) !== 'object' || options === null) {
	      throw new ERR_INVALID_ARG_TYPE('options', 'Object', options);
	    }

	    var message = options.message,
	        operator = options.operator,
	        stackStartFn = options.stackStartFn;
	    var actual = options.actual,
	        expected = options.expected;
	    var limit = Error.stackTraceLimit;
	    Error.stackTraceLimit = 0;

	    if (message != null) {
	      _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, String(message)));
	    } else {
	      if (process.stderr && process.stderr.isTTY) {
	        // Reset on each call to make sure we handle dynamically set environment
	        // variables correct.
	        if (process.stderr && process.stderr.getColorDepth && process.stderr.getColorDepth() !== 1) {
	          blue = "\x1B[34m";
	          green = "\x1B[32m";
	          white = "\x1B[39m";
	          red = "\x1B[31m";
	        } else {
	          blue = '';
	          green = '';
	          white = '';
	          red = '';
	        }
	      } // Prevent the error stack from being visible by duplicating the error
	      // in a very close way to the original in case both sides are actually
	      // instances of Error.


	      if (_typeof(actual) === 'object' && actual !== null && _typeof(expected) === 'object' && expected !== null && 'stack' in actual && actual instanceof Error && 'stack' in expected && expected instanceof Error) {
	        actual = copyError(actual);
	        expected = copyError(expected);
	      }

	      if (operator === 'deepStrictEqual' || operator === 'strictEqual') {
	        _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, createErrDiff(actual, expected, operator)));
	      } else if (operator === 'notDeepStrictEqual' || operator === 'notStrictEqual') {
	        // In case the objects are equal but the operator requires unequal, show
	        // the first object and say A equals B
	        var base = kReadableOperator[operator];
	        var res = inspectValue(actual).split('\n'); // In case "actual" is an object, it should not be reference equal.

	        if (operator === 'notStrictEqual' && _typeof(actual) === 'object' && actual !== null) {
	          base = kReadableOperator.notStrictEqualObject;
	        } // Only remove lines in case it makes sense to collapse those.
	        // TODO: Accept env to always show the full error.


	        if (res.length > 30) {
	          res[26] = "".concat(blue, "...").concat(white);

	          while (res.length > 27) {
	            res.pop();
	          }
	        } // Only print a single input.


	        if (res.length === 1) {
	          _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(base, " ").concat(res[0])));
	        } else {
	          _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(base, "\n\n").concat(res.join('\n'), "\n")));
	        }
	      } else {
	        var _res = inspectValue(actual);

	        var other = '';
	        var knownOperators = kReadableOperator[operator];

	        if (operator === 'notDeepEqual' || operator === 'notEqual') {
	          _res = "".concat(kReadableOperator[operator], "\n\n").concat(_res);

	          if (_res.length > 1024) {
	            _res = "".concat(_res.slice(0, 1021), "...");
	          }
	        } else {
	          other = "".concat(inspectValue(expected));

	          if (_res.length > 512) {
	            _res = "".concat(_res.slice(0, 509), "...");
	          }

	          if (other.length > 512) {
	            other = "".concat(other.slice(0, 509), "...");
	          }

	          if (operator === 'deepEqual' || operator === 'equal') {
	            _res = "".concat(knownOperators, "\n\n").concat(_res, "\n\nshould equal\n\n");
	          } else {
	            other = " ".concat(operator, " ").concat(other);
	          }
	        }

	        _this = _possibleConstructorReturn(this, _getPrototypeOf(AssertionError).call(this, "".concat(_res).concat(other)));
	      }
	    }

	    Error.stackTraceLimit = limit;
	    _this.generatedMessage = !message;
	    Object.defineProperty(_assertThisInitialized(_this), 'name', {
	      value: 'AssertionError [ERR_ASSERTION]',
	      enumerable: false,
	      writable: true,
	      configurable: true
	    });
	    _this.code = 'ERR_ASSERTION';
	    _this.actual = actual;
	    _this.expected = expected;
	    _this.operator = operator;

	    if (Error.captureStackTrace) {
	      // eslint-disable-next-line no-restricted-syntax
	      Error.captureStackTrace(_assertThisInitialized(_this), stackStartFn);
	    } // Create error message including the error code in the name.


	    _this.stack; // Reset the name.

	    _this.name = 'AssertionError';
	    return _possibleConstructorReturn(_this);
	  }

	  _createClass(AssertionError, [{
	    key: "toString",
	    value: function toString() {
	      return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
	    }
	  }, {
	    key: inspect.custom,
	    value: function value(recurseTimes, ctx) {
	      // This limits the `actual` and `expected` property default inspection to
	      // the minimum depth. Otherwise those values would be too verbose compared
	      // to the actual error message which contains a combined view of these two
	      // input values.
	      return inspect(this, _objectSpread({}, ctx, {
	        customInspect: false,
	        depth: 0
	      }));
	    }
	  }]);

	  return AssertionError;
	}(_wrapNativeSuper(Error));

	assertion_error = AssertionError;
	return assertion_error;
}

/**
 * Code refactored from Mozilla Developer Network:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */

var es6ObjectAssign;
var hasRequiredEs6ObjectAssign;

function requireEs6ObjectAssign () {
	if (hasRequiredEs6ObjectAssign) return es6ObjectAssign;
	hasRequiredEs6ObjectAssign = 1;

	function assign(target, firstSource) {
	  if (target === undefined || target === null) {
	    throw new TypeError('Cannot convert first argument to object');
	  }

	  var to = Object(target);
	  for (var i = 1; i < arguments.length; i++) {
	    var nextSource = arguments[i];
	    if (nextSource === undefined || nextSource === null) {
	      continue;
	    }

	    var keysArray = Object.keys(Object(nextSource));
	    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	      var nextKey = keysArray[nextIndex];
	      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	      if (desc !== undefined && desc.enumerable) {
	        to[nextKey] = nextSource[nextKey];
	      }
	    }
	  }
	  return to;
	}

	function polyfill() {
	  if (!Object.assign) {
	    Object.defineProperty(Object, 'assign', {
	      enumerable: false,
	      configurable: true,
	      writable: true,
	      value: assign
	    });
	  }
	}

	es6ObjectAssign = {
	  assign: assign,
	  polyfill: polyfill
	};
	return es6ObjectAssign;
}

var isArguments;
var hasRequiredIsArguments;

function requireIsArguments () {
	if (hasRequiredIsArguments) return isArguments;
	hasRequiredIsArguments = 1;

	var toStr = Object.prototype.toString;

	isArguments = function isArguments(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};
	return isArguments;
}

var implementation$2;
var hasRequiredImplementation$2;

function requireImplementation$2 () {
	if (hasRequiredImplementation$2) return implementation$2;
	hasRequiredImplementation$2 = 1;

	var keysShim;
	if (!Object.keys) {
		// modified from https://github.com/es-shims/es5-shim
		var has = Object.prototype.hasOwnProperty;
		var toStr = Object.prototype.toString;
		var isArgs = requireIsArguments(); // eslint-disable-line global-require
		var isEnumerable = Object.prototype.propertyIsEnumerable;
		var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
		var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
		var dontEnums = [
			'toString',
			'toLocaleString',
			'valueOf',
			'hasOwnProperty',
			'isPrototypeOf',
			'propertyIsEnumerable',
			'constructor'
		];
		var equalsConstructorPrototype = function (o) {
			var ctor = o.constructor;
			return ctor && ctor.prototype === o;
		};
		var excludedKeys = {
			$applicationCache: true,
			$console: true,
			$external: true,
			$frame: true,
			$frameElement: true,
			$frames: true,
			$innerHeight: true,
			$innerWidth: true,
			$onmozfullscreenchange: true,
			$onmozfullscreenerror: true,
			$outerHeight: true,
			$outerWidth: true,
			$pageXOffset: true,
			$pageYOffset: true,
			$parent: true,
			$scrollLeft: true,
			$scrollTop: true,
			$scrollX: true,
			$scrollY: true,
			$self: true,
			$webkitIndexedDB: true,
			$webkitStorageInfo: true,
			$window: true
		};
		var hasAutomationEqualityBug = (function () {
			/* global window */
			if (typeof window === 'undefined') { return false; }
			for (var k in window) {
				try {
					if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
						try {
							equalsConstructorPrototype(window[k]);
						} catch (e) {
							return true;
						}
					}
				} catch (e) {
					return true;
				}
			}
			return false;
		}());
		var equalsConstructorPrototypeIfNotBuggy = function (o) {
			/* global window */
			if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
				return equalsConstructorPrototype(o);
			}
			try {
				return equalsConstructorPrototype(o);
			} catch (e) {
				return false;
			}
		};

		keysShim = function keys(object) {
			var isObject = object !== null && typeof object === 'object';
			var isFunction = toStr.call(object) === '[object Function]';
			var isArguments = isArgs(object);
			var isString = isObject && toStr.call(object) === '[object String]';
			var theKeys = [];

			if (!isObject && !isFunction && !isArguments) {
				throw new TypeError('Object.keys called on a non-object');
			}

			var skipProto = hasProtoEnumBug && isFunction;
			if (isString && object.length > 0 && !has.call(object, 0)) {
				for (var i = 0; i < object.length; ++i) {
					theKeys.push(String(i));
				}
			}

			if (isArguments && object.length > 0) {
				for (var j = 0; j < object.length; ++j) {
					theKeys.push(String(j));
				}
			} else {
				for (var name in object) {
					if (!(skipProto && name === 'prototype') && has.call(object, name)) {
						theKeys.push(String(name));
					}
				}
			}

			if (hasDontEnumBug) {
				var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

				for (var k = 0; k < dontEnums.length; ++k) {
					if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
						theKeys.push(dontEnums[k]);
					}
				}
			}
			return theKeys;
		};
	}
	implementation$2 = keysShim;
	return implementation$2;
}

var objectKeys;
var hasRequiredObjectKeys;

function requireObjectKeys () {
	if (hasRequiredObjectKeys) return objectKeys;
	hasRequiredObjectKeys = 1;

	var slice = Array.prototype.slice;
	var isArgs = requireIsArguments();

	var origKeys = Object.keys;
	var keysShim = origKeys ? function keys(o) { return origKeys(o); } : requireImplementation$2();

	var originalKeys = Object.keys;

	keysShim.shim = function shimObjectKeys() {
		if (Object.keys) {
			var keysWorksWithArguments = (function () {
				// Safari 5.0 bug
				var args = Object.keys(arguments);
				return args && args.length === arguments.length;
			}(1, 2));
			if (!keysWorksWithArguments) {
				Object.keys = function keys(object) { // eslint-disable-line func-name-matching
					if (isArgs(object)) {
						return originalKeys(slice.call(object));
					}
					return originalKeys(object);
				};
			}
		} else {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};

	objectKeys = keysShim;
	return objectKeys;
}

var hasPropertyDescriptors_1;
var hasRequiredHasPropertyDescriptors;

function requireHasPropertyDescriptors () {
	if (hasRequiredHasPropertyDescriptors) return hasPropertyDescriptors_1;
	hasRequiredHasPropertyDescriptors = 1;

	var GetIntrinsic = requireGetIntrinsic();

	var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

	var hasPropertyDescriptors = function hasPropertyDescriptors() {
		if ($defineProperty) {
			try {
				$defineProperty({}, 'a', { value: 1 });
				return true;
			} catch (e) {
				// IE 8 has a broken defineProperty
				return false;
			}
		}
		return false;
	};

	hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
		// node v0.6 has a bug where array lengths can be Set but not Defined
		if (!hasPropertyDescriptors()) {
			return null;
		}
		try {
			return $defineProperty([], 'length', { value: 1 }).length !== 1;
		} catch (e) {
			// In Firefox 4-22, defining length on an array throws an exception.
			return true;
		}
	};

	hasPropertyDescriptors_1 = hasPropertyDescriptors;
	return hasPropertyDescriptors_1;
}

var defineProperties_1;
var hasRequiredDefineProperties;

function requireDefineProperties () {
	if (hasRequiredDefineProperties) return defineProperties_1;
	hasRequiredDefineProperties = 1;

	var keys = requireObjectKeys();
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

	var toStr = Object.prototype.toString;
	var concat = Array.prototype.concat;
	var origDefineProperty = Object.defineProperty;

	var isFunction = function (fn) {
		return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
	};

	var hasPropertyDescriptors = requireHasPropertyDescriptors()();

	var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;

	var defineProperty = function (object, name, value, predicate) {
		if (name in object && (!isFunction(predicate) || !predicate())) {
			return;
		}
		if (supportsDescriptors) {
			origDefineProperty(object, name, {
				configurable: true,
				enumerable: false,
				value: value,
				writable: true
			});
		} else {
			object[name] = value; // eslint-disable-line no-param-reassign
		}
	};

	var defineProperties = function (object, map) {
		var predicates = arguments.length > 2 ? arguments[2] : {};
		var props = keys(map);
		if (hasSymbols) {
			props = concat.call(props, Object.getOwnPropertySymbols(map));
		}
		for (var i = 0; i < props.length; i += 1) {
			defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
		}
	};

	defineProperties.supportsDescriptors = !!supportsDescriptors;

	defineProperties_1 = defineProperties;
	return defineProperties_1;
}

var implementation$1;
var hasRequiredImplementation$1;

function requireImplementation$1 () {
	if (hasRequiredImplementation$1) return implementation$1;
	hasRequiredImplementation$1 = 1;

	var numberIsNaN = function (value) {
		return value !== value;
	};

	implementation$1 = function is(a, b) {
		if (a === 0 && b === 0) {
			return 1 / a === 1 / b;
		}
		if (a === b) {
			return true;
		}
		if (numberIsNaN(a) && numberIsNaN(b)) {
			return true;
		}
		return false;
	};
	return implementation$1;
}

var polyfill$1;
var hasRequiredPolyfill$1;

function requirePolyfill$1 () {
	if (hasRequiredPolyfill$1) return polyfill$1;
	hasRequiredPolyfill$1 = 1;

	var implementation = requireImplementation$1();

	polyfill$1 = function getPolyfill() {
		return typeof Object.is === 'function' ? Object.is : implementation;
	};
	return polyfill$1;
}

var shim$1;
var hasRequiredShim$1;

function requireShim$1 () {
	if (hasRequiredShim$1) return shim$1;
	hasRequiredShim$1 = 1;

	var getPolyfill = requirePolyfill$1();
	var define = requireDefineProperties();

	shim$1 = function shimObjectIs() {
		var polyfill = getPolyfill();
		define(Object, { is: polyfill }, {
			is: function testObjectIs() {
				return Object.is !== polyfill;
			}
		});
		return polyfill;
	};
	return shim$1;
}

var objectIs;
var hasRequiredObjectIs;

function requireObjectIs () {
	if (hasRequiredObjectIs) return objectIs;
	hasRequiredObjectIs = 1;

	var define = requireDefineProperties();
	var callBind = requireCallBind();

	var implementation = requireImplementation$1();
	var getPolyfill = requirePolyfill$1();
	var shim = requireShim$1();

	var polyfill = callBind(getPolyfill(), Object);

	define(polyfill, {
		getPolyfill: getPolyfill,
		implementation: implementation,
		shim: shim
	});

	objectIs = polyfill;
	return objectIs;
}

var implementation;
var hasRequiredImplementation;

function requireImplementation () {
	if (hasRequiredImplementation) return implementation;
	hasRequiredImplementation = 1;

	/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

	implementation = function isNaN(value) {
		return value !== value;
	};
	return implementation;
}

var polyfill;
var hasRequiredPolyfill;

function requirePolyfill () {
	if (hasRequiredPolyfill) return polyfill;
	hasRequiredPolyfill = 1;

	var implementation = requireImplementation();

	polyfill = function getPolyfill() {
		if (Number.isNaN && Number.isNaN(NaN) && !Number.isNaN('a')) {
			return Number.isNaN;
		}
		return implementation;
	};
	return polyfill;
}

var shim;
var hasRequiredShim;

function requireShim () {
	if (hasRequiredShim) return shim;
	hasRequiredShim = 1;

	var define = requireDefineProperties();
	var getPolyfill = requirePolyfill();

	/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

	shim = function shimNumberIsNaN() {
		var polyfill = getPolyfill();
		define(Number, { isNaN: polyfill }, {
			isNaN: function testIsNaN() {
				return Number.isNaN !== polyfill;
			}
		});
		return polyfill;
	};
	return shim;
}

var isNan;
var hasRequiredIsNan;

function requireIsNan () {
	if (hasRequiredIsNan) return isNan;
	hasRequiredIsNan = 1;

	var callBind = requireCallBind();
	var define = requireDefineProperties();

	var implementation = requireImplementation();
	var getPolyfill = requirePolyfill();
	var shim = requireShim();

	var polyfill = callBind(getPolyfill(), Number);

	/* http://www.ecma-international.org/ecma-262/6.0/#sec-number.isnan */

	define(polyfill, {
		getPolyfill: getPolyfill,
		implementation: implementation,
		shim: shim
	});

	isNan = polyfill;
	return isNan;
}

var comparisons;
var hasRequiredComparisons;

function requireComparisons () {
	if (hasRequiredComparisons) return comparisons;
	hasRequiredComparisons = 1;

	function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

	function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

	function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

	function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	var regexFlagsSupported = /a/g.flags !== undefined;

	var arrayFromSet = function arrayFromSet(set) {
	  var array = [];
	  set.forEach(function (value) {
	    return array.push(value);
	  });
	  return array;
	};

	var arrayFromMap = function arrayFromMap(map) {
	  var array = [];
	  map.forEach(function (value, key) {
	    return array.push([key, value]);
	  });
	  return array;
	};

	var objectIs = Object.is ? Object.is : requireObjectIs();
	var objectGetOwnPropertySymbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function () {
	  return [];
	};
	var numberIsNaN = Number.isNaN ? Number.isNaN : requireIsNan();

	function uncurryThis(f) {
	  return f.call.bind(f);
	}

	var hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);
	var propertyIsEnumerable = uncurryThis(Object.prototype.propertyIsEnumerable);
	var objectToString = uncurryThis(Object.prototype.toString);

	var _require$types = requireUtil().types,
	    isAnyArrayBuffer = _require$types.isAnyArrayBuffer,
	    isArrayBufferView = _require$types.isArrayBufferView,
	    isDate = _require$types.isDate,
	    isMap = _require$types.isMap,
	    isRegExp = _require$types.isRegExp,
	    isSet = _require$types.isSet,
	    isNativeError = _require$types.isNativeError,
	    isBoxedPrimitive = _require$types.isBoxedPrimitive,
	    isNumberObject = _require$types.isNumberObject,
	    isStringObject = _require$types.isStringObject,
	    isBooleanObject = _require$types.isBooleanObject,
	    isBigIntObject = _require$types.isBigIntObject,
	    isSymbolObject = _require$types.isSymbolObject,
	    isFloat32Array = _require$types.isFloat32Array,
	    isFloat64Array = _require$types.isFloat64Array;

	function isNonIndex(key) {
	  if (key.length === 0 || key.length > 10) return true;

	  for (var i = 0; i < key.length; i++) {
	    var code = key.charCodeAt(i);
	    if (code < 48 || code > 57) return true;
	  } // The maximum size for an array is 2 ** 32 -1.


	  return key.length === 10 && key >= Math.pow(2, 32);
	}

	function getOwnNonIndexProperties(value) {
	  return Object.keys(value).filter(isNonIndex).concat(objectGetOwnPropertySymbols(value).filter(Object.prototype.propertyIsEnumerable.bind(value)));
	} // Taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
	// original notice:

	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */


	function compare(a, b) {
	  if (a === b) {
	    return 0;
	  }

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }

	  if (x < y) {
	    return -1;
	  }

	  if (y < x) {
	    return 1;
	  }

	  return 0;
	}
	var kStrict = true;
	var kLoose = false;
	var kNoIterator = 0;
	var kIsArray = 1;
	var kIsSet = 2;
	var kIsMap = 3; // Check if they have the same source and flags

	function areSimilarRegExps(a, b) {
	  return regexFlagsSupported ? a.source === b.source && a.flags === b.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(b);
	}

	function areSimilarFloatArrays(a, b) {
	  if (a.byteLength !== b.byteLength) {
	    return false;
	  }

	  for (var offset = 0; offset < a.byteLength; offset++) {
	    if (a[offset] !== b[offset]) {
	      return false;
	    }
	  }

	  return true;
	}

	function areSimilarTypedArrays(a, b) {
	  if (a.byteLength !== b.byteLength) {
	    return false;
	  }

	  return compare(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength)) === 0;
	}

	function areEqualArrayBuffers(buf1, buf2) {
	  return buf1.byteLength === buf2.byteLength && compare(new Uint8Array(buf1), new Uint8Array(buf2)) === 0;
	}

	function isEqualBoxedPrimitive(val1, val2) {
	  if (isNumberObject(val1)) {
	    return isNumberObject(val2) && objectIs(Number.prototype.valueOf.call(val1), Number.prototype.valueOf.call(val2));
	  }

	  if (isStringObject(val1)) {
	    return isStringObject(val2) && String.prototype.valueOf.call(val1) === String.prototype.valueOf.call(val2);
	  }

	  if (isBooleanObject(val1)) {
	    return isBooleanObject(val2) && Boolean.prototype.valueOf.call(val1) === Boolean.prototype.valueOf.call(val2);
	  }

	  if (isBigIntObject(val1)) {
	    return isBigIntObject(val2) && BigInt.prototype.valueOf.call(val1) === BigInt.prototype.valueOf.call(val2);
	  }

	  return isSymbolObject(val2) && Symbol.prototype.valueOf.call(val1) === Symbol.prototype.valueOf.call(val2);
	} // Notes: Type tags are historical [[Class]] properties that can be set by
	// FunctionTemplate::SetClassName() in C++ or Symbol.toStringTag in JS
	// and retrieved using Object.prototype.toString.call(obj) in JS
	// See https://tc39.github.io/ecma262/#sec-object.prototype.tostring
	// for a list of tags pre-defined in the spec.
	// There are some unspecified tags in the wild too (e.g. typed array tags).
	// Since tags can be altered, they only serve fast failures
	//
	// Typed arrays and buffers are checked by comparing the content in their
	// underlying ArrayBuffer. This optimization requires that it's
	// reasonable to interpret their underlying memory in the same way,
	// which is checked by comparing their type tags.
	// (e.g. a Uint8Array and a Uint16Array with the same memory content
	// could still be different because they will be interpreted differently).
	//
	// For strict comparison, objects should have
	// a) The same built-in type tags
	// b) The same prototypes.


	function innerDeepEqual(val1, val2, strict, memos) {
	  // All identical values are equivalent, as determined by ===.
	  if (val1 === val2) {
	    if (val1 !== 0) return true;
	    return strict ? objectIs(val1, val2) : true;
	  } // Check more closely if val1 and val2 are equal.


	  if (strict) {
	    if (_typeof(val1) !== 'object') {
	      return typeof val1 === 'number' && numberIsNaN(val1) && numberIsNaN(val2);
	    }

	    if (_typeof(val2) !== 'object' || val1 === null || val2 === null) {
	      return false;
	    }

	    if (Object.getPrototypeOf(val1) !== Object.getPrototypeOf(val2)) {
	      return false;
	    }
	  } else {
	    if (val1 === null || _typeof(val1) !== 'object') {
	      if (val2 === null || _typeof(val2) !== 'object') {
	        // eslint-disable-next-line eqeqeq
	        return val1 == val2;
	      }

	      return false;
	    }

	    if (val2 === null || _typeof(val2) !== 'object') {
	      return false;
	    }
	  }

	  var val1Tag = objectToString(val1);
	  var val2Tag = objectToString(val2);

	  if (val1Tag !== val2Tag) {
	    return false;
	  }

	  if (Array.isArray(val1)) {
	    // Check for sparse arrays and general fast path
	    if (val1.length !== val2.length) {
	      return false;
	    }

	    var keys1 = getOwnNonIndexProperties(val1);
	    var keys2 = getOwnNonIndexProperties(val2);

	    if (keys1.length !== keys2.length) {
	      return false;
	    }

	    return keyCheck(val1, val2, strict, memos, kIsArray, keys1);
	  } // [browserify] This triggers on certain types in IE (Map/Set) so we don't
	  // wan't to early return out of the rest of the checks. However we can check
	  // if the second value is one of these values and the first isn't.


	  if (val1Tag === '[object Object]') {
	    // return keyCheck(val1, val2, strict, memos, kNoIterator);
	    if (!isMap(val1) && isMap(val2) || !isSet(val1) && isSet(val2)) {
	      return false;
	    }
	  }

	  if (isDate(val1)) {
	    if (!isDate(val2) || Date.prototype.getTime.call(val1) !== Date.prototype.getTime.call(val2)) {
	      return false;
	    }
	  } else if (isRegExp(val1)) {
	    if (!isRegExp(val2) || !areSimilarRegExps(val1, val2)) {
	      return false;
	    }
	  } else if (isNativeError(val1) || val1 instanceof Error) {
	    // Do not compare the stack as it might differ even though the error itself
	    // is otherwise identical.
	    if (val1.message !== val2.message || val1.name !== val2.name) {
	      return false;
	    }
	  } else if (isArrayBufferView(val1)) {
	    if (!strict && (isFloat32Array(val1) || isFloat64Array(val1))) {
	      if (!areSimilarFloatArrays(val1, val2)) {
	        return false;
	      }
	    } else if (!areSimilarTypedArrays(val1, val2)) {
	      return false;
	    } // Buffer.compare returns true, so val1.length === val2.length. If they both
	    // only contain numeric keys, we don't need to exam further than checking
	    // the symbols.


	    var _keys = getOwnNonIndexProperties(val1);

	    var _keys2 = getOwnNonIndexProperties(val2);

	    if (_keys.length !== _keys2.length) {
	      return false;
	    }

	    return keyCheck(val1, val2, strict, memos, kNoIterator, _keys);
	  } else if (isSet(val1)) {
	    if (!isSet(val2) || val1.size !== val2.size) {
	      return false;
	    }

	    return keyCheck(val1, val2, strict, memos, kIsSet);
	  } else if (isMap(val1)) {
	    if (!isMap(val2) || val1.size !== val2.size) {
	      return false;
	    }

	    return keyCheck(val1, val2, strict, memos, kIsMap);
	  } else if (isAnyArrayBuffer(val1)) {
	    if (!areEqualArrayBuffers(val1, val2)) {
	      return false;
	    }
	  } else if (isBoxedPrimitive(val1) && !isEqualBoxedPrimitive(val1, val2)) {
	    return false;
	  }

	  return keyCheck(val1, val2, strict, memos, kNoIterator);
	}

	function getEnumerables(val, keys) {
	  return keys.filter(function (k) {
	    return propertyIsEnumerable(val, k);
	  });
	}

	function keyCheck(val1, val2, strict, memos, iterationType, aKeys) {
	  // For all remaining Object pairs, including Array, objects and Maps,
	  // equivalence is determined by having:
	  // a) The same number of owned enumerable properties
	  // b) The same set of keys/indexes (although not necessarily the same order)
	  // c) Equivalent values for every corresponding key/index
	  // d) For Sets and Maps, equal contents
	  // Note: this accounts for both named and indexed properties on Arrays.
	  if (arguments.length === 5) {
	    aKeys = Object.keys(val1);
	    var bKeys = Object.keys(val2); // The pair must have the same number of owned properties.

	    if (aKeys.length !== bKeys.length) {
	      return false;
	    }
	  } // Cheap key test


	  var i = 0;

	  for (; i < aKeys.length; i++) {
	    if (!hasOwnProperty(val2, aKeys[i])) {
	      return false;
	    }
	  }

	  if (strict && arguments.length === 5) {
	    var symbolKeysA = objectGetOwnPropertySymbols(val1);

	    if (symbolKeysA.length !== 0) {
	      var count = 0;

	      for (i = 0; i < symbolKeysA.length; i++) {
	        var key = symbolKeysA[i];

	        if (propertyIsEnumerable(val1, key)) {
	          if (!propertyIsEnumerable(val2, key)) {
	            return false;
	          }

	          aKeys.push(key);
	          count++;
	        } else if (propertyIsEnumerable(val2, key)) {
	          return false;
	        }
	      }

	      var symbolKeysB = objectGetOwnPropertySymbols(val2);

	      if (symbolKeysA.length !== symbolKeysB.length && getEnumerables(val2, symbolKeysB).length !== count) {
	        return false;
	      }
	    } else {
	      var _symbolKeysB = objectGetOwnPropertySymbols(val2);

	      if (_symbolKeysB.length !== 0 && getEnumerables(val2, _symbolKeysB).length !== 0) {
	        return false;
	      }
	    }
	  }

	  if (aKeys.length === 0 && (iterationType === kNoIterator || iterationType === kIsArray && val1.length === 0 || val1.size === 0)) {
	    return true;
	  } // Use memos to handle cycles.


	  if (memos === undefined) {
	    memos = {
	      val1: new Map(),
	      val2: new Map(),
	      position: 0
	    };
	  } else {
	    // We prevent up to two map.has(x) calls by directly retrieving the value
	    // and checking for undefined. The map can only contain numbers, so it is
	    // safe to check for undefined only.
	    var val2MemoA = memos.val1.get(val1);

	    if (val2MemoA !== undefined) {
	      var val2MemoB = memos.val2.get(val2);

	      if (val2MemoB !== undefined) {
	        return val2MemoA === val2MemoB;
	      }
	    }

	    memos.position++;
	  }

	  memos.val1.set(val1, memos.position);
	  memos.val2.set(val2, memos.position);
	  var areEq = objEquiv(val1, val2, strict, aKeys, memos, iterationType);
	  memos.val1.delete(val1);
	  memos.val2.delete(val2);
	  return areEq;
	}

	function setHasEqualElement(set, val1, strict, memo) {
	  // Go looking.
	  var setValues = arrayFromSet(set);

	  for (var i = 0; i < setValues.length; i++) {
	    var val2 = setValues[i];

	    if (innerDeepEqual(val1, val2, strict, memo)) {
	      // Remove the matching element to make sure we do not check that again.
	      set.delete(val2);
	      return true;
	    }
	  }

	  return false;
	} // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
	// Sadly it is not possible to detect corresponding values properly in case the
	// type is a string, number, bigint or boolean. The reason is that those values
	// can match lots of different string values (e.g., 1n == '+00001').


	function findLooseMatchingPrimitives(prim) {
	  switch (_typeof(prim)) {
	    case 'undefined':
	      return null;

	    case 'object':
	      // Only pass in null as object!
	      return undefined;

	    case 'symbol':
	      return false;

	    case 'string':
	      prim = +prim;
	    // Loose equal entries exist only if the string is possible to convert to
	    // a regular number and not NaN.
	    // Fall through

	    case 'number':
	      if (numberIsNaN(prim)) {
	        return false;
	      }

	  }

	  return true;
	}

	function setMightHaveLoosePrim(a, b, prim) {
	  var altValue = findLooseMatchingPrimitives(prim);
	  if (altValue != null) return altValue;
	  return b.has(altValue) && !a.has(altValue);
	}

	function mapMightHaveLoosePrim(a, b, prim, item, memo) {
	  var altValue = findLooseMatchingPrimitives(prim);

	  if (altValue != null) {
	    return altValue;
	  }

	  var curB = b.get(altValue);

	  if (curB === undefined && !b.has(altValue) || !innerDeepEqual(item, curB, false, memo)) {
	    return false;
	  }

	  return !a.has(altValue) && innerDeepEqual(item, curB, false, memo);
	}

	function setEquiv(a, b, strict, memo) {
	  // This is a lazily initiated Set of entries which have to be compared
	  // pairwise.
	  var set = null;
	  var aValues = arrayFromSet(a);

	  for (var i = 0; i < aValues.length; i++) {
	    var val = aValues[i]; // Note: Checking for the objects first improves the performance for object
	    // heavy sets but it is a minor slow down for primitives. As they are fast
	    // to check this improves the worst case scenario instead.

	    if (_typeof(val) === 'object' && val !== null) {
	      if (set === null) {
	        set = new Set();
	      } // If the specified value doesn't exist in the second set its an not null
	      // object (or non strict only: a not matching primitive) we'll need to go
	      // hunting for something thats deep-(strict-)equal to it. To make this
	      // O(n log n) complexity we have to copy these values in a new set first.


	      set.add(val);
	    } else if (!b.has(val)) {
	      if (strict) return false; // Fast path to detect missing string, symbol, undefined and null values.

	      if (!setMightHaveLoosePrim(a, b, val)) {
	        return false;
	      }

	      if (set === null) {
	        set = new Set();
	      }

	      set.add(val);
	    }
	  }

	  if (set !== null) {
	    var bValues = arrayFromSet(b);

	    for (var _i = 0; _i < bValues.length; _i++) {
	      var _val = bValues[_i]; // We have to check if a primitive value is already
	      // matching and only if it's not, go hunting for it.

	      if (_typeof(_val) === 'object' && _val !== null) {
	        if (!setHasEqualElement(set, _val, strict, memo)) return false;
	      } else if (!strict && !a.has(_val) && !setHasEqualElement(set, _val, strict, memo)) {
	        return false;
	      }
	    }

	    return set.size === 0;
	  }

	  return true;
	}

	function mapHasEqualEntry(set, map, key1, item1, strict, memo) {
	  // To be able to handle cases like:
	  //   Map([[{}, 'a'], [{}, 'b']]) vs Map([[{}, 'b'], [{}, 'a']])
	  // ... we need to consider *all* matching keys, not just the first we find.
	  var setValues = arrayFromSet(set);

	  for (var i = 0; i < setValues.length; i++) {
	    var key2 = setValues[i];

	    if (innerDeepEqual(key1, key2, strict, memo) && innerDeepEqual(item1, map.get(key2), strict, memo)) {
	      set.delete(key2);
	      return true;
	    }
	  }

	  return false;
	}

	function mapEquiv(a, b, strict, memo) {
	  var set = null;
	  var aEntries = arrayFromMap(a);

	  for (var i = 0; i < aEntries.length; i++) {
	    var _aEntries$i = _slicedToArray(aEntries[i], 2),
	        key = _aEntries$i[0],
	        item1 = _aEntries$i[1];

	    if (_typeof(key) === 'object' && key !== null) {
	      if (set === null) {
	        set = new Set();
	      }

	      set.add(key);
	    } else {
	      // By directly retrieving the value we prevent another b.has(key) check in
	      // almost all possible cases.
	      var item2 = b.get(key);

	      if (item2 === undefined && !b.has(key) || !innerDeepEqual(item1, item2, strict, memo)) {
	        if (strict) return false; // Fast path to detect missing string, symbol, undefined and null
	        // keys.

	        if (!mapMightHaveLoosePrim(a, b, key, item1, memo)) return false;

	        if (set === null) {
	          set = new Set();
	        }

	        set.add(key);
	      }
	    }
	  }

	  if (set !== null) {
	    var bEntries = arrayFromMap(b);

	    for (var _i2 = 0; _i2 < bEntries.length; _i2++) {
	      var _bEntries$_i = _slicedToArray(bEntries[_i2], 2),
	          key = _bEntries$_i[0],
	          item = _bEntries$_i[1];

	      if (_typeof(key) === 'object' && key !== null) {
	        if (!mapHasEqualEntry(set, a, key, item, strict, memo)) return false;
	      } else if (!strict && (!a.has(key) || !innerDeepEqual(a.get(key), item, false, memo)) && !mapHasEqualEntry(set, a, key, item, false, memo)) {
	        return false;
	      }
	    }

	    return set.size === 0;
	  }

	  return true;
	}

	function objEquiv(a, b, strict, keys, memos, iterationType) {
	  // Sets and maps don't have their entries accessible via normal object
	  // properties.
	  var i = 0;

	  if (iterationType === kIsSet) {
	    if (!setEquiv(a, b, strict, memos)) {
	      return false;
	    }
	  } else if (iterationType === kIsMap) {
	    if (!mapEquiv(a, b, strict, memos)) {
	      return false;
	    }
	  } else if (iterationType === kIsArray) {
	    for (; i < a.length; i++) {
	      if (hasOwnProperty(a, i)) {
	        if (!hasOwnProperty(b, i) || !innerDeepEqual(a[i], b[i], strict, memos)) {
	          return false;
	        }
	      } else if (hasOwnProperty(b, i)) {
	        return false;
	      } else {
	        // Array is sparse.
	        var keysA = Object.keys(a);

	        for (; i < keysA.length; i++) {
	          var key = keysA[i];

	          if (!hasOwnProperty(b, key) || !innerDeepEqual(a[key], b[key], strict, memos)) {
	            return false;
	          }
	        }

	        if (keysA.length !== Object.keys(b).length) {
	          return false;
	        }

	        return true;
	      }
	    }
	  } // The pair must have equivalent values for every corresponding key.
	  // Possibly expensive deep test:


	  for (i = 0; i < keys.length; i++) {
	    var _key = keys[i];

	    if (!innerDeepEqual(a[_key], b[_key], strict, memos)) {
	      return false;
	    }
	  }

	  return true;
	}

	function isDeepEqual(val1, val2) {
	  return innerDeepEqual(val1, val2, kLoose);
	}

	function isDeepStrictEqual(val1, val2) {
	  return innerDeepEqual(val1, val2, kStrict);
	}

	comparisons = {
	  isDeepEqual: isDeepEqual,
	  isDeepStrictEqual: isDeepStrictEqual
	};
	return comparisons;
}

var hasRequiredAssert;

function requireAssert () {
	if (hasRequiredAssert) return assert.exports;
	hasRequiredAssert = 1;

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _require = requireErrors(),
	    _require$codes = _require.codes,
	    ERR_AMBIGUOUS_ARGUMENT = _require$codes.ERR_AMBIGUOUS_ARGUMENT,
	    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
	    ERR_INVALID_ARG_VALUE = _require$codes.ERR_INVALID_ARG_VALUE,
	    ERR_INVALID_RETURN_VALUE = _require$codes.ERR_INVALID_RETURN_VALUE,
	    ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;

	var AssertionError = requireAssertion_error();

	var _require2 = requireUtil(),
	    inspect = _require2.inspect;

	var _require$types = requireUtil().types,
	    isPromise = _require$types.isPromise,
	    isRegExp = _require$types.isRegExp;

	var objectAssign = Object.assign ? Object.assign : requireEs6ObjectAssign().assign;
	var objectIs = Object.is ? Object.is : requireObjectIs();
	var isDeepEqual;
	var isDeepStrictEqual;

	function lazyLoadComparison() {
	  var comparison = requireComparisons();

	  isDeepEqual = comparison.isDeepEqual;
	  isDeepStrictEqual = comparison.isDeepStrictEqual;
	} // Escape control characters but not \n and \t to keep the line breaks and

	var warned = false; // The assert module provides functions that throw
	// AssertionError's when particular conditions are not met. The
	// assert module must conform to the following interface.

	var assert$1 = assert.exports = ok;
	var NO_EXCEPTION_SENTINEL = {}; // All of the following functions must throw an AssertionError
	// when a corresponding condition is not met, with a message that
	// may be undefined if not provided. All assertion methods provide
	// both the actual and expected values to the assertion error for
	// display purposes.

	function innerFail(obj) {
	  if (obj.message instanceof Error) throw obj.message;
	  throw new AssertionError(obj);
	}

	function fail(actual, expected, message, operator, stackStartFn) {
	  var argsLen = arguments.length;
	  var internalMessage;

	  if (argsLen === 0) {
	    internalMessage = 'Failed';
	  } else if (argsLen === 1) {
	    message = actual;
	    actual = undefined;
	  } else {
	    if (warned === false) {
	      warned = true;
	      var warn = process.emitWarning ? process.emitWarning : console.warn.bind(console);
	      warn('assert.fail() with more than one argument is deprecated. ' + 'Please use assert.strictEqual() instead or only pass a message.', 'DeprecationWarning', 'DEP0094');
	    }

	    if (argsLen === 2) operator = '!=';
	  }

	  if (message instanceof Error) throw message;
	  var errArgs = {
	    actual: actual,
	    expected: expected,
	    operator: operator === undefined ? 'fail' : operator,
	    stackStartFn: stackStartFn || fail
	  };

	  if (message !== undefined) {
	    errArgs.message = message;
	  }

	  var err = new AssertionError(errArgs);

	  if (internalMessage) {
	    err.message = internalMessage;
	    err.generatedMessage = true;
	  }

	  throw err;
	}

	assert$1.fail = fail; // The AssertionError is defined in internal/error.

	assert$1.AssertionError = AssertionError;

	function innerOk(fn, argLen, value, message) {
	  if (!value) {
	    var generatedMessage = false;

	    if (argLen === 0) {
	      generatedMessage = true;
	      message = 'No value argument passed to `assert.ok()`';
	    } else if (message instanceof Error) {
	      throw message;
	    }

	    var err = new AssertionError({
	      actual: value,
	      expected: true,
	      message: message,
	      operator: '==',
	      stackStartFn: fn
	    });
	    err.generatedMessage = generatedMessage;
	    throw err;
	  }
	} // Pure assertion tests whether a value is truthy, as determined
	// by !!value.


	function ok() {
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  innerOk.apply(void 0, [ok, args.length].concat(args));
	}

	assert$1.ok = ok; // The equality assertion tests shallow, coercive equality with ==.

	/* eslint-disable no-restricted-properties */

	assert$1.equal = function equal(actual, expected, message) {
	  if (arguments.length < 2) {
	    throw new ERR_MISSING_ARGS('actual', 'expected');
	  } // eslint-disable-next-line eqeqeq


	  if (actual != expected) {
	    innerFail({
	      actual: actual,
	      expected: expected,
	      message: message,
	      operator: '==',
	      stackStartFn: equal
	    });
	  }
	}; // The non-equality assertion tests for whether two objects are not
	// equal with !=.


	assert$1.notEqual = function notEqual(actual, expected, message) {
	  if (arguments.length < 2) {
	    throw new ERR_MISSING_ARGS('actual', 'expected');
	  } // eslint-disable-next-line eqeqeq


	  if (actual == expected) {
	    innerFail({
	      actual: actual,
	      expected: expected,
	      message: message,
	      operator: '!=',
	      stackStartFn: notEqual
	    });
	  }
	}; // The equivalence assertion tests a deep equality relation.


	assert$1.deepEqual = function deepEqual(actual, expected, message) {
	  if (arguments.length < 2) {
	    throw new ERR_MISSING_ARGS('actual', 'expected');
	  }

	  if (isDeepEqual === undefined) lazyLoadComparison();

	  if (!isDeepEqual(actual, expected)) {
	    innerFail({
	      actual: actual,
	      expected: expected,
	      message: message,
	      operator: 'deepEqual',
	      stackStartFn: deepEqual
	    });
	  }
	}; // The non-equivalence assertion tests for any deep inequality.


	assert$1.notDeepEqual = function notDeepEqual(actual, expected, message) {
	  if (arguments.length < 2) {
	    throw new ERR_MISSING_ARGS('actual', 'expected');
	  }

	  if (isDeepEqual === undefined) lazyLoadComparison();

	  if (isDeepEqual(actual, expected)) {
	    innerFail({
	      actual: actual,
	      expected: expected,
	      message: message,
	      operator: 'notDeepEqual',
	      stackStartFn: notDeepEqual
	    });
	  }
	};
	/* eslint-enable */


	assert$1.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
	  if (arguments.length < 2) {
	    throw new ERR_MISSING_ARGS('actual', 'expected');
	  }

	  if (isDeepEqual === undefined) lazyLoadComparison();

	  if (!isDeepStrictEqual(actual, expected)) {
	    innerFail({
	      actual: actual,
	      expected: expected,
	      message: message,
	      operator: 'deepStrictEqual',
	      stackStartFn: deepStrictEqual
	    });
	  }
	};

	assert$1.notDeepStrictEqual = notDeepStrictEqual;

	function notDeepStrictEqual(actual, expected, message) {
	  if (arguments.length < 2) {
	    throw new ERR_MISSING_ARGS('actual', 'expected');
	  }

	  if (isDeepEqual === undefined) lazyLoadComparison();

	  if (isDeepStrictEqual(actual, expected)) {
	    innerFail({
	      actual: actual,
	      expected: expected,
	      message: message,
	      operator: 'notDeepStrictEqual',
	      stackStartFn: notDeepStrictEqual
	    });
	  }
	}

	assert$1.strictEqual = function strictEqual(actual, expected, message) {
	  if (arguments.length < 2) {
	    throw new ERR_MISSING_ARGS('actual', 'expected');
	  }

	  if (!objectIs(actual, expected)) {
	    innerFail({
	      actual: actual,
	      expected: expected,
	      message: message,
	      operator: 'strictEqual',
	      stackStartFn: strictEqual
	    });
	  }
	};

	assert$1.notStrictEqual = function notStrictEqual(actual, expected, message) {
	  if (arguments.length < 2) {
	    throw new ERR_MISSING_ARGS('actual', 'expected');
	  }

	  if (objectIs(actual, expected)) {
	    innerFail({
	      actual: actual,
	      expected: expected,
	      message: message,
	      operator: 'notStrictEqual',
	      stackStartFn: notStrictEqual
	    });
	  }
	};

	var Comparison = function Comparison(obj, keys, actual) {
	  var _this = this;

	  _classCallCheck(this, Comparison);

	  keys.forEach(function (key) {
	    if (key in obj) {
	      if (actual !== undefined && typeof actual[key] === 'string' && isRegExp(obj[key]) && obj[key].test(actual[key])) {
	        _this[key] = actual[key];
	      } else {
	        _this[key] = obj[key];
	      }
	    }
	  });
	};

	function compareExceptionKey(actual, expected, key, message, keys, fn) {
	  if (!(key in actual) || !isDeepStrictEqual(actual[key], expected[key])) {
	    if (!message) {
	      // Create placeholder objects to create a nice output.
	      var a = new Comparison(actual, keys);
	      var b = new Comparison(expected, keys, actual);
	      var err = new AssertionError({
	        actual: a,
	        expected: b,
	        operator: 'deepStrictEqual',
	        stackStartFn: fn
	      });
	      err.actual = actual;
	      err.expected = expected;
	      err.operator = fn.name;
	      throw err;
	    }

	    innerFail({
	      actual: actual,
	      expected: expected,
	      message: message,
	      operator: fn.name,
	      stackStartFn: fn
	    });
	  }
	}

	function expectedException(actual, expected, msg, fn) {
	  if (typeof expected !== 'function') {
	    if (isRegExp(expected)) return expected.test(actual); // assert.doesNotThrow does not accept objects.

	    if (arguments.length === 2) {
	      throw new ERR_INVALID_ARG_TYPE('expected', ['Function', 'RegExp'], expected);
	    } // Handle primitives properly.


	    if (_typeof(actual) !== 'object' || actual === null) {
	      var err = new AssertionError({
	        actual: actual,
	        expected: expected,
	        message: msg,
	        operator: 'deepStrictEqual',
	        stackStartFn: fn
	      });
	      err.operator = fn.name;
	      throw err;
	    }

	    var keys = Object.keys(expected); // Special handle errors to make sure the name and the message are compared
	    // as well.

	    if (expected instanceof Error) {
	      keys.push('name', 'message');
	    } else if (keys.length === 0) {
	      throw new ERR_INVALID_ARG_VALUE('error', expected, 'may not be an empty object');
	    }

	    if (isDeepEqual === undefined) lazyLoadComparison();
	    keys.forEach(function (key) {
	      if (typeof actual[key] === 'string' && isRegExp(expected[key]) && expected[key].test(actual[key])) {
	        return;
	      }

	      compareExceptionKey(actual, expected, key, msg, keys, fn);
	    });
	    return true;
	  } // Guard instanceof against arrow functions as they don't have a prototype.


	  if (expected.prototype !== undefined && actual instanceof expected) {
	    return true;
	  }

	  if (Error.isPrototypeOf(expected)) {
	    return false;
	  }

	  return expected.call({}, actual) === true;
	}

	function getActual(fn) {
	  if (typeof fn !== 'function') {
	    throw new ERR_INVALID_ARG_TYPE('fn', 'Function', fn);
	  }

	  try {
	    fn();
	  } catch (e) {
	    return e;
	  }

	  return NO_EXCEPTION_SENTINEL;
	}

	function checkIsPromise(obj) {
	  // Accept native ES6 promises and promises that are implemented in a similar
	  // way. Do not accept thenables that use a function as `obj` and that have no
	  // `catch` handler.
	  // TODO: thenables are checked up until they have the correct methods,
	  // but according to documentation, the `then` method should receive
	  // the `fulfill` and `reject` arguments as well or it may be never resolved.
	  return isPromise(obj) || obj !== null && _typeof(obj) === 'object' && typeof obj.then === 'function' && typeof obj.catch === 'function';
	}

	function waitForActual(promiseFn) {
	  return Promise.resolve().then(function () {
	    var resultPromise;

	    if (typeof promiseFn === 'function') {
	      // Return a rejected promise if `promiseFn` throws synchronously.
	      resultPromise = promiseFn(); // Fail in case no promise is returned.

	      if (!checkIsPromise(resultPromise)) {
	        throw new ERR_INVALID_RETURN_VALUE('instance of Promise', 'promiseFn', resultPromise);
	      }
	    } else if (checkIsPromise(promiseFn)) {
	      resultPromise = promiseFn;
	    } else {
	      throw new ERR_INVALID_ARG_TYPE('promiseFn', ['Function', 'Promise'], promiseFn);
	    }

	    return Promise.resolve().then(function () {
	      return resultPromise;
	    }).then(function () {
	      return NO_EXCEPTION_SENTINEL;
	    }).catch(function (e) {
	      return e;
	    });
	  });
	}

	function expectsError(stackStartFn, actual, error, message) {
	  if (typeof error === 'string') {
	    if (arguments.length === 4) {
	      throw new ERR_INVALID_ARG_TYPE('error', ['Object', 'Error', 'Function', 'RegExp'], error);
	    }

	    if (_typeof(actual) === 'object' && actual !== null) {
	      if (actual.message === error) {
	        throw new ERR_AMBIGUOUS_ARGUMENT('error/message', "The error message \"".concat(actual.message, "\" is identical to the message."));
	      }
	    } else if (actual === error) {
	      throw new ERR_AMBIGUOUS_ARGUMENT('error/message', "The error \"".concat(actual, "\" is identical to the message."));
	    }

	    message = error;
	    error = undefined;
	  } else if (error != null && _typeof(error) !== 'object' && typeof error !== 'function') {
	    throw new ERR_INVALID_ARG_TYPE('error', ['Object', 'Error', 'Function', 'RegExp'], error);
	  }

	  if (actual === NO_EXCEPTION_SENTINEL) {
	    var details = '';

	    if (error && error.name) {
	      details += " (".concat(error.name, ")");
	    }

	    details += message ? ": ".concat(message) : '.';
	    var fnType = stackStartFn.name === 'rejects' ? 'rejection' : 'exception';
	    innerFail({
	      actual: undefined,
	      expected: error,
	      operator: stackStartFn.name,
	      message: "Missing expected ".concat(fnType).concat(details),
	      stackStartFn: stackStartFn
	    });
	  }

	  if (error && !expectedException(actual, error, message, stackStartFn)) {
	    throw actual;
	  }
	}

	function expectsNoError(stackStartFn, actual, error, message) {
	  if (actual === NO_EXCEPTION_SENTINEL) return;

	  if (typeof error === 'string') {
	    message = error;
	    error = undefined;
	  }

	  if (!error || expectedException(actual, error)) {
	    var details = message ? ": ".concat(message) : '.';
	    var fnType = stackStartFn.name === 'doesNotReject' ? 'rejection' : 'exception';
	    innerFail({
	      actual: actual,
	      expected: error,
	      operator: stackStartFn.name,
	      message: "Got unwanted ".concat(fnType).concat(details, "\n") + "Actual message: \"".concat(actual && actual.message, "\""),
	      stackStartFn: stackStartFn
	    });
	  }

	  throw actual;
	}

	assert$1.throws = function throws(promiseFn) {
	  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    args[_key2 - 1] = arguments[_key2];
	  }

	  expectsError.apply(void 0, [throws, getActual(promiseFn)].concat(args));
	};

	assert$1.rejects = function rejects(promiseFn) {
	  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	    args[_key3 - 1] = arguments[_key3];
	  }

	  return waitForActual(promiseFn).then(function (result) {
	    return expectsError.apply(void 0, [rejects, result].concat(args));
	  });
	};

	assert$1.doesNotThrow = function doesNotThrow(fn) {
	  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	    args[_key4 - 1] = arguments[_key4];
	  }

	  expectsNoError.apply(void 0, [doesNotThrow, getActual(fn)].concat(args));
	};

	assert$1.doesNotReject = function doesNotReject(fn) {
	  for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
	    args[_key5 - 1] = arguments[_key5];
	  }

	  return waitForActual(fn).then(function (result) {
	    return expectsNoError.apply(void 0, [doesNotReject, result].concat(args));
	  });
	};

	assert$1.ifError = function ifError(err) {
	  if (err !== null && err !== undefined) {
	    var message = 'ifError got unwanted exception: ';

	    if (_typeof(err) === 'object' && typeof err.message === 'string') {
	      if (err.message.length === 0 && err.constructor) {
	        message += err.constructor.name;
	      } else {
	        message += err.message;
	      }
	    } else {
	      message += inspect(err);
	    }

	    var newErr = new AssertionError({
	      actual: err,
	      expected: null,
	      operator: 'ifError',
	      message: message,
	      stackStartFn: ifError
	    }); // Make sure we actually have a stack trace!

	    var origStack = err.stack;

	    if (typeof origStack === 'string') {
	      // This will remove any duplicated frames from the error frames taken
	      // from within `ifError` and add the original error frames to the newly
	      // created ones.
	      var tmp2 = origStack.split('\n');
	      tmp2.shift(); // Filter all frames existing in err.stack.

	      var tmp1 = newErr.stack.split('\n');

	      for (var i = 0; i < tmp2.length; i++) {
	        // Find the first occurrence of the frame.
	        var pos = tmp1.indexOf(tmp2[i]);

	        if (pos !== -1) {
	          // Only keep new frames.
	          tmp1 = tmp1.slice(0, pos);
	          break;
	        }
	      }

	      newErr.stack = "".concat(tmp1.join('\n'), "\n").concat(tmp2.join('\n'));
	    }

	    throw newErr;
	  }
	}; // Expose a strict only variant of assert


	function strict() {
	  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	    args[_key6] = arguments[_key6];
	  }

	  innerOk.apply(void 0, [strict, args.length].concat(args));
	}

	assert$1.strict = objectAssign(strict, assert$1, {
	  equal: assert$1.strictEqual,
	  deepEqual: assert$1.deepStrictEqual,
	  notEqual: assert$1.notStrictEqual,
	  notDeepEqual: assert$1.notDeepStrictEqual
	});
	assert$1.strict.strict = assert$1.strict;
	return assert.exports;
}

var src = {exports: {}};

var browser = {exports: {}};

var debug = {exports: {}};

/**
 * Helpers.
 */

var ms;
var hasRequiredMs;

function requireMs () {
	if (hasRequiredMs) return ms;
	hasRequiredMs = 1;
	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} [options]
	 * @throws {Error} throw an error if val is not a non-empty string or a number
	 * @return {String|Number}
	 * @api public
	 */

	ms = function(val, options) {
	  options = options || {};
	  var type = typeof val;
	  if (type === 'string' && val.length > 0) {
	    return parse(val);
	  } else if (type === 'number' && isNaN(val) === false) {
	    return options.long ? fmtLong(val) : fmtShort(val);
	  }
	  throw new Error(
	    'val is not a non-empty string or a valid number. val=' +
	      JSON.stringify(val)
	  );
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = String(str);
	  if (str.length > 100) {
	    return;
	  }
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
	    str
	  );
	  if (!match) {
	    return;
	  }
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	    default:
	      return undefined;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtShort(ms) {
	  if (ms >= d) {
	    return Math.round(ms / d) + 'd';
	  }
	  if (ms >= h) {
	    return Math.round(ms / h) + 'h';
	  }
	  if (ms >= m) {
	    return Math.round(ms / m) + 'm';
	  }
	  if (ms >= s) {
	    return Math.round(ms / s) + 's';
	  }
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function fmtLong(ms) {
	  return plural(ms, d, 'day') ||
	    plural(ms, h, 'hour') ||
	    plural(ms, m, 'minute') ||
	    plural(ms, s, 'second') ||
	    ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) {
	    return;
	  }
	  if (ms < n * 1.5) {
	    return Math.floor(ms / n) + ' ' + name;
	  }
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}
	return ms;
}

var hasRequiredDebug$1;

function requireDebug$1 () {
	if (hasRequiredDebug$1) return debug.exports;
	hasRequiredDebug$1 = 1;
	(function (module, exports) {
		/**
		 * This is the common logic for both the Node.js and web browser
		 * implementations of `debug()`.
		 *
		 * Expose `debug()` as the module.
		 */

		exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
		exports.coerce = coerce;
		exports.disable = disable;
		exports.enable = enable;
		exports.enabled = enabled;
		exports.humanize = requireMs();

		/**
		 * The currently active debug mode names, and names to skip.
		 */

		exports.names = [];
		exports.skips = [];

		/**
		 * Map of special "%n" handling functions, for the debug "format" argument.
		 *
		 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
		 */

		exports.formatters = {};

		/**
		 * Previous log timestamp.
		 */

		var prevTime;

		/**
		 * Select a color.
		 * @param {String} namespace
		 * @return {Number}
		 * @api private
		 */

		function selectColor(namespace) {
		  var hash = 0, i;

		  for (i in namespace) {
		    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
		    hash |= 0; // Convert to 32bit integer
		  }

		  return exports.colors[Math.abs(hash) % exports.colors.length];
		}

		/**
		 * Create a debugger with the given `namespace`.
		 *
		 * @param {String} namespace
		 * @return {Function}
		 * @api public
		 */

		function createDebug(namespace) {

		  function debug() {
		    // disabled?
		    if (!debug.enabled) return;

		    var self = debug;

		    // set `diff` timestamp
		    var curr = +new Date();
		    var ms = curr - (prevTime || curr);
		    self.diff = ms;
		    self.prev = prevTime;
		    self.curr = curr;
		    prevTime = curr;

		    // turn the `arguments` into a proper Array
		    var args = new Array(arguments.length);
		    for (var i = 0; i < args.length; i++) {
		      args[i] = arguments[i];
		    }

		    args[0] = exports.coerce(args[0]);

		    if ('string' !== typeof args[0]) {
		      // anything else let's inspect with %O
		      args.unshift('%O');
		    }

		    // apply any `formatters` transformations
		    var index = 0;
		    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
		      // if we encounter an escaped % then don't increase the array index
		      if (match === '%%') return match;
		      index++;
		      var formatter = exports.formatters[format];
		      if ('function' === typeof formatter) {
		        var val = args[index];
		        match = formatter.call(self, val);

		        // now we need to remove `args[index]` since it's inlined in the `format`
		        args.splice(index, 1);
		        index--;
		      }
		      return match;
		    });

		    // apply env-specific formatting (colors, etc.)
		    exports.formatArgs.call(self, args);

		    var logFn = debug.log || exports.log || console.log.bind(console);
		    logFn.apply(self, args);
		  }

		  debug.namespace = namespace;
		  debug.enabled = exports.enabled(namespace);
		  debug.useColors = exports.useColors();
		  debug.color = selectColor(namespace);

		  // env-specific initialization logic for debug instances
		  if ('function' === typeof exports.init) {
		    exports.init(debug);
		  }

		  return debug;
		}

		/**
		 * Enables a debug mode by namespaces. This can include modes
		 * separated by a colon and wildcards.
		 *
		 * @param {String} namespaces
		 * @api public
		 */

		function enable(namespaces) {
		  exports.save(namespaces);

		  exports.names = [];
		  exports.skips = [];

		  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		  var len = split.length;

		  for (var i = 0; i < len; i++) {
		    if (!split[i]) continue; // ignore empty strings
		    namespaces = split[i].replace(/\*/g, '.*?');
		    if (namespaces[0] === '-') {
		      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
		    } else {
		      exports.names.push(new RegExp('^' + namespaces + '$'));
		    }
		  }
		}

		/**
		 * Disable debug output.
		 *
		 * @api public
		 */

		function disable() {
		  exports.enable('');
		}

		/**
		 * Returns true if the given mode name is enabled, false otherwise.
		 *
		 * @param {String} name
		 * @return {Boolean}
		 * @api public
		 */

		function enabled(name) {
		  var i, len;
		  for (i = 0, len = exports.skips.length; i < len; i++) {
		    if (exports.skips[i].test(name)) {
		      return false;
		    }
		  }
		  for (i = 0, len = exports.names.length; i < len; i++) {
		    if (exports.names[i].test(name)) {
		      return true;
		    }
		  }
		  return false;
		}

		/**
		 * Coerce `val`.
		 *
		 * @param {Mixed} val
		 * @return {Mixed}
		 * @api private
		 */

		function coerce(val) {
		  if (val instanceof Error) return val.stack || val.message;
		  return val;
		}
} (debug, debug.exports));
	return debug.exports;
}

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

var hasRequiredBrowser;

function requireBrowser () {
	if (hasRequiredBrowser) return browser.exports;
	hasRequiredBrowser = 1;
	(function (module, exports) {
		exports = module.exports = requireDebug$1();
		exports.log = log;
		exports.formatArgs = formatArgs;
		exports.save = save;
		exports.load = load;
		exports.useColors = useColors;
		exports.storage = 'undefined' != typeof chrome
		               && 'undefined' != typeof chrome.storage
		                  ? chrome.storage.local
		                  : localstorage();

		/**
		 * Colors.
		 */

		exports.colors = [
		  'lightseagreen',
		  'forestgreen',
		  'goldenrod',
		  'dodgerblue',
		  'darkorchid',
		  'crimson'
		];

		/**
		 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
		 * and the Firebug extension (any Firefox version) are known
		 * to support "%c" CSS customizations.
		 *
		 * TODO: add a `localStorage` variable to explicitly enable/disable colors
		 */

		function useColors() {
		  // NB: In an Electron preload script, document will be defined but not fully
		  // initialized. Since we know we're in Chrome, we'll just detect this case
		  // explicitly
		  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
		    return true;
		  }

		  // is webkit? http://stackoverflow.com/a/16459606/376773
		  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
		  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		    // is firebug? http://stackoverflow.com/a/398120/376773
		    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		    // is firefox >= v31?
		    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		    // double check webkit in userAgent just in case we are in a worker
		    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
		}

		/**
		 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
		 */

		exports.formatters.j = function(v) {
		  try {
		    return JSON.stringify(v);
		  } catch (err) {
		    return '[UnexpectedJSONParseError]: ' + err.message;
		  }
		};


		/**
		 * Colorize log arguments if enabled.
		 *
		 * @api public
		 */

		function formatArgs(args) {
		  var useColors = this.useColors;

		  args[0] = (useColors ? '%c' : '')
		    + this.namespace
		    + (useColors ? ' %c' : ' ')
		    + args[0]
		    + (useColors ? '%c ' : ' ')
		    + '+' + exports.humanize(this.diff);

		  if (!useColors) return;

		  var c = 'color: ' + this.color;
		  args.splice(1, 0, c, 'color: inherit');

		  // the final "%c" is somewhat tricky, because there could be other
		  // arguments passed either before or after the %c, so we need to
		  // figure out the correct index to insert the CSS into
		  var index = 0;
		  var lastC = 0;
		  args[0].replace(/%[a-zA-Z%]/g, function(match) {
		    if ('%%' === match) return;
		    index++;
		    if ('%c' === match) {
		      // we only are interested in the *last* %c
		      // (the user may have provided their own)
		      lastC = index;
		    }
		  });

		  args.splice(lastC, 0, c);
		}

		/**
		 * Invokes `console.log()` when available.
		 * No-op when `console.log` is not a "function".
		 *
		 * @api public
		 */

		function log() {
		  // this hackery is required for IE8/9, where
		  // the `console.log` function doesn't have 'apply'
		  return 'object' === typeof console
		    && console.log
		    && Function.prototype.apply.call(console.log, console, arguments);
		}

		/**
		 * Save `namespaces`.
		 *
		 * @param {String} namespaces
		 * @api private
		 */

		function save(namespaces) {
		  try {
		    if (null == namespaces) {
		      exports.storage.removeItem('debug');
		    } else {
		      exports.storage.debug = namespaces;
		    }
		  } catch(e) {}
		}

		/**
		 * Load `namespaces`.
		 *
		 * @return {String} returns the previously persisted debug modes
		 * @api private
		 */

		function load() {
		  var r;
		  try {
		    r = exports.storage.debug;
		  } catch(e) {}

		  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
		  if (!r && typeof process !== 'undefined' && 'env' in process) {
		    r = process.env.DEBUG;
		  }

		  return r;
		}

		/**
		 * Enable namespaces listed in `localStorage.debug` initially.
		 */

		exports.enable(load());

		/**
		 * Localstorage attempts to return the localstorage.
		 *
		 * This is necessary because safari throws
		 * when a user disables cookies/localstorage
		 * and you attempt to access it.
		 *
		 * @return {LocalStorage}
		 * @api private
		 */

		function localstorage() {
		  try {
		    return window.localStorage;
		  } catch (e) {}
		}
} (browser, browser.exports));
	return browser.exports;
}

var node = {exports: {}};

/**
 * Module dependencies.
 */

var hasRequiredNode;

function requireNode () {
	if (hasRequiredNode) return node.exports;
	hasRequiredNode = 1;
	(function (module, exports) {
		var tty = require$$0__default["default"];
		var util = requireUtil();

		/**
		 * This is the Node.js implementation of `debug()`.
		 *
		 * Expose `debug()` as the module.
		 */

		exports = module.exports = requireDebug$1();
		exports.init = init;
		exports.log = log;
		exports.formatArgs = formatArgs;
		exports.save = save;
		exports.load = load;
		exports.useColors = useColors;

		/**
		 * Colors.
		 */

		exports.colors = [6, 2, 3, 4, 5, 1];

		/**
		 * Build up the default `inspectOpts` object from the environment variables.
		 *
		 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
		 */

		exports.inspectOpts = Object.keys(process.env).filter(function (key) {
		  return /^debug_/i.test(key);
		}).reduce(function (obj, key) {
		  // camel-case
		  var prop = key
		    .substring(6)
		    .toLowerCase()
		    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

		  // coerce string value into JS value
		  var val = process.env[key];
		  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
		  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
		  else if (val === 'null') val = null;
		  else val = Number(val);

		  obj[prop] = val;
		  return obj;
		}, {});

		/**
		 * The file descriptor to write the `debug()` calls to.
		 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
		 *
		 *   $ DEBUG_FD=3 node script.js 3>debug.log
		 */

		var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

		if (1 !== fd && 2 !== fd) {
		  util.deprecate(function(){}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')();
		}

		var stream = 1 === fd ? process.stdout :
		             2 === fd ? process.stderr :
		             createWritableStdioStream(fd);

		/**
		 * Is stdout a TTY? Colored output is enabled when `true`.
		 */

		function useColors() {
		  return 'colors' in exports.inspectOpts
		    ? Boolean(exports.inspectOpts.colors)
		    : tty.isatty(fd);
		}

		/**
		 * Map %o to `util.inspect()`, all on a single line.
		 */

		exports.formatters.o = function(v) {
		  this.inspectOpts.colors = this.useColors;
		  return util.inspect(v, this.inspectOpts)
		    .split('\n').map(function(str) {
		      return str.trim()
		    }).join(' ');
		};

		/**
		 * Map %o to `util.inspect()`, allowing multiple lines if needed.
		 */

		exports.formatters.O = function(v) {
		  this.inspectOpts.colors = this.useColors;
		  return util.inspect(v, this.inspectOpts);
		};

		/**
		 * Adds ANSI color escape codes if enabled.
		 *
		 * @api public
		 */

		function formatArgs(args) {
		  var name = this.namespace;
		  var useColors = this.useColors;

		  if (useColors) {
		    var c = this.color;
		    var prefix = '  \u001b[3' + c + ';1m' + name + ' ' + '\u001b[0m';

		    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		    args.push('\u001b[3' + c + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
		  } else {
		    args[0] = new Date().toUTCString()
		      + ' ' + name + ' ' + args[0];
		  }
		}

		/**
		 * Invokes `util.format()` with the specified arguments and writes to `stream`.
		 */

		function log() {
		  return stream.write(util.format.apply(util, arguments) + '\n');
		}

		/**
		 * Save `namespaces`.
		 *
		 * @param {String} namespaces
		 * @api private
		 */

		function save(namespaces) {
		  if (null == namespaces) {
		    // If you set a process.env field to null or undefined, it gets cast to the
		    // string 'null' or 'undefined'. Just delete instead.
		    delete process.env.DEBUG;
		  } else {
		    process.env.DEBUG = namespaces;
		  }
		}

		/**
		 * Load `namespaces`.
		 *
		 * @return {String} returns the previously persisted debug modes
		 * @api private
		 */

		function load() {
		  return process.env.DEBUG;
		}

		/**
		 * Copied from `node/src/node.js`.
		 *
		 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
		 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
		 */

		function createWritableStdioStream (fd) {
		  var stream;
		  var tty_wrap = process.binding('tty_wrap');

		  // Note stream._type is used for test-module-load-list.js

		  switch (tty_wrap.guessHandleType(fd)) {
		    case 'TTY':
		      stream = new tty.WriteStream(fd);
		      stream._type = 'tty';

		      // Hack to have stream not keep the event loop alive.
		      // See https://github.com/joyent/node/issues/1726
		      if (stream._handle && stream._handle.unref) {
		        stream._handle.unref();
		      }
		      break;

		    case 'FILE':
		      var fs = require$$3__default["default"];
		      stream = new fs.SyncWriteStream(fd, { autoClose: false });
		      stream._type = 'fs';
		      break;

		    case 'PIPE':
		    case 'TCP':
		      var net = require$$4__default["default"];
		      stream = new net.Socket({
		        fd: fd,
		        readable: false,
		        writable: true
		      });

		      // FIXME Should probably have an option in net.Socket to create a
		      // stream from an existing fd which is writable only. But for now
		      // we'll just add this hack and set the `readable` member to false.
		      // Test: ./node test/fixtures/echo.js < /etc/passwd
		      stream.readable = false;
		      stream.read = null;
		      stream._type = 'pipe';

		      // FIXME Hack to have stream not keep the event loop alive.
		      // See https://github.com/joyent/node/issues/1726
		      if (stream._handle && stream._handle.unref) {
		        stream._handle.unref();
		      }
		      break;

		    default:
		      // Probably an error on in uv_guess_handle()
		      throw new Error('Implement me. Unknown stream file type!');
		  }

		  // For supporting legacy API we put the FD here.
		  stream.fd = fd;

		  stream._isStdio = true;

		  return stream;
		}

		/**
		 * Init logic for `debug` instances.
		 *
		 * Create a new `inspectOpts` object in case `useColors` is set
		 * differently for a particular `debug` instance.
		 */

		function init (debug) {
		  debug.inspectOpts = {};

		  var keys = Object.keys(exports.inspectOpts);
		  for (var i = 0; i < keys.length; i++) {
		    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
		  }
		}

		/**
		 * Enable namespaces listed in `process.env.DEBUG` initially.
		 */

		exports.enable(load());
} (node, node.exports));
	return node.exports;
}

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src.exports;
	hasRequiredSrc = 1;
	(function (module) {
		if (typeof process !== 'undefined' && process.type === 'renderer') {
		  module.exports = requireBrowser();
		} else {
		  module.exports = requireNode();
		}
} (src));
	return src.exports;
}

var debug_1;
var hasRequiredDebug;

function requireDebug () {
	if (hasRequiredDebug) return debug_1;
	hasRequiredDebug = 1;
	var debug;

	debug_1 = function () {
	  if (!debug) {
	    try {
	      /* eslint global-require: off */
	      debug = requireSrc()("follow-redirects");
	    }
	    catch (error) { /* */ }
	    if (typeof debug !== "function") {
	      debug = function () { /* */ };
	    }
	  }
	  debug.apply(null, arguments);
	};
	return debug_1;
}

var hasRequiredFollowRedirects;

function requireFollowRedirects () {
	if (hasRequiredFollowRedirects) return followRedirects.exports;
	hasRequiredFollowRedirects = 1;
	var url = requireUrl();
	var URL = url.URL;
	var http = require$$1__default["default"];
	var https = require$$2__default["default"];
	var Writable = require$$3__default$1["default"].Writable;
	var assert = requireAssert();
	var debug = requireDebug();

	// Create handlers that pass events from native requests
	var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
	var eventHandlers = Object.create(null);
	events.forEach(function (event) {
	  eventHandlers[event] = function (arg1, arg2, arg3) {
	    this._redirectable.emit(event, arg1, arg2, arg3);
	  };
	});

	// Error types with codes
	var RedirectionError = createErrorType(
	  "ERR_FR_REDIRECTION_FAILURE",
	  "Redirected request failed"
	);
	var TooManyRedirectsError = createErrorType(
	  "ERR_FR_TOO_MANY_REDIRECTS",
	  "Maximum number of redirects exceeded"
	);
	var MaxBodyLengthExceededError = createErrorType(
	  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
	  "Request body larger than maxBodyLength limit"
	);
	var WriteAfterEndError = createErrorType(
	  "ERR_STREAM_WRITE_AFTER_END",
	  "write after end"
	);

	// An HTTP(S) request that can be redirected
	function RedirectableRequest(options, responseCallback) {
	  // Initialize the request
	  Writable.call(this);
	  this._sanitizeOptions(options);
	  this._options = options;
	  this._ended = false;
	  this._ending = false;
	  this._redirectCount = 0;
	  this._redirects = [];
	  this._requestBodyLength = 0;
	  this._requestBodyBuffers = [];

	  // Attach a callback if passed
	  if (responseCallback) {
	    this.on("response", responseCallback);
	  }

	  // React to responses of native requests
	  var self = this;
	  this._onNativeResponse = function (response) {
	    self._processResponse(response);
	  };

	  // Perform the first request
	  this._performRequest();
	}
	RedirectableRequest.prototype = Object.create(Writable.prototype);

	RedirectableRequest.prototype.abort = function () {
	  abortRequest(this._currentRequest);
	  this.emit("abort");
	};

	// Writes buffered data to the current native request
	RedirectableRequest.prototype.write = function (data, encoding, callback) {
	  // Writing is not allowed if end has been called
	  if (this._ending) {
	    throw new WriteAfterEndError();
	  }

	  // Validate input and shift parameters if necessary
	  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
	    throw new TypeError("data should be a string, Buffer or Uint8Array");
	  }
	  if (typeof encoding === "function") {
	    callback = encoding;
	    encoding = null;
	  }

	  // Ignore empty buffers, since writing them doesn't invoke the callback
	  // https://github.com/nodejs/node/issues/22066
	  if (data.length === 0) {
	    if (callback) {
	      callback();
	    }
	    return;
	  }
	  // Only write when we don't exceed the maximum body length
	  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
	    this._requestBodyLength += data.length;
	    this._requestBodyBuffers.push({ data: data, encoding: encoding });
	    this._currentRequest.write(data, encoding, callback);
	  }
	  // Error when we exceed the maximum body length
	  else {
	    this.emit("error", new MaxBodyLengthExceededError());
	    this.abort();
	  }
	};

	// Ends the current native request
	RedirectableRequest.prototype.end = function (data, encoding, callback) {
	  // Shift parameters if necessary
	  if (typeof data === "function") {
	    callback = data;
	    data = encoding = null;
	  }
	  else if (typeof encoding === "function") {
	    callback = encoding;
	    encoding = null;
	  }

	  // Write data if needed and end
	  if (!data) {
	    this._ended = this._ending = true;
	    this._currentRequest.end(null, null, callback);
	  }
	  else {
	    var self = this;
	    var currentRequest = this._currentRequest;
	    this.write(data, encoding, function () {
	      self._ended = true;
	      currentRequest.end(null, null, callback);
	    });
	    this._ending = true;
	  }
	};

	// Sets a header value on the current native request
	RedirectableRequest.prototype.setHeader = function (name, value) {
	  this._options.headers[name] = value;
	  this._currentRequest.setHeader(name, value);
	};

	// Clears a header value on the current native request
	RedirectableRequest.prototype.removeHeader = function (name) {
	  delete this._options.headers[name];
	  this._currentRequest.removeHeader(name);
	};

	// Global timeout for all underlying requests
	RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
	  var self = this;

	  // Destroys the socket on timeout
	  function destroyOnTimeout(socket) {
	    socket.setTimeout(msecs);
	    socket.removeListener("timeout", socket.destroy);
	    socket.addListener("timeout", socket.destroy);
	  }

	  // Sets up a timer to trigger a timeout event
	  function startTimer(socket) {
	    if (self._timeout) {
	      clearTimeout(self._timeout);
	    }
	    self._timeout = setTimeout(function () {
	      self.emit("timeout");
	      clearTimer();
	    }, msecs);
	    destroyOnTimeout(socket);
	  }

	  // Stops a timeout from triggering
	  function clearTimer() {
	    // Clear the timeout
	    if (self._timeout) {
	      clearTimeout(self._timeout);
	      self._timeout = null;
	    }

	    // Clean up all attached listeners
	    self.removeListener("abort", clearTimer);
	    self.removeListener("error", clearTimer);
	    self.removeListener("response", clearTimer);
	    if (callback) {
	      self.removeListener("timeout", callback);
	    }
	    if (!self.socket) {
	      self._currentRequest.removeListener("socket", startTimer);
	    }
	  }

	  // Attach callback if passed
	  if (callback) {
	    this.on("timeout", callback);
	  }

	  // Start the timer if or when the socket is opened
	  if (this.socket) {
	    startTimer(this.socket);
	  }
	  else {
	    this._currentRequest.once("socket", startTimer);
	  }

	  // Clean up on events
	  this.on("socket", destroyOnTimeout);
	  this.on("abort", clearTimer);
	  this.on("error", clearTimer);
	  this.on("response", clearTimer);

	  return this;
	};

	// Proxy all other public ClientRequest methods
	[
	  "flushHeaders", "getHeader",
	  "setNoDelay", "setSocketKeepAlive",
	].forEach(function (method) {
	  RedirectableRequest.prototype[method] = function (a, b) {
	    return this._currentRequest[method](a, b);
	  };
	});

	// Proxy all public ClientRequest properties
	["aborted", "connection", "socket"].forEach(function (property) {
	  Object.defineProperty(RedirectableRequest.prototype, property, {
	    get: function () { return this._currentRequest[property]; },
	  });
	});

	RedirectableRequest.prototype._sanitizeOptions = function (options) {
	  // Ensure headers are always present
	  if (!options.headers) {
	    options.headers = {};
	  }

	  // Since http.request treats host as an alias of hostname,
	  // but the url module interprets host as hostname plus port,
	  // eliminate the host property to avoid confusion.
	  if (options.host) {
	    // Use hostname if set, because it has precedence
	    if (!options.hostname) {
	      options.hostname = options.host;
	    }
	    delete options.host;
	  }

	  // Complete the URL object when necessary
	  if (!options.pathname && options.path) {
	    var searchPos = options.path.indexOf("?");
	    if (searchPos < 0) {
	      options.pathname = options.path;
	    }
	    else {
	      options.pathname = options.path.substring(0, searchPos);
	      options.search = options.path.substring(searchPos);
	    }
	  }
	};


	// Executes the next native request (initial or redirect)
	RedirectableRequest.prototype._performRequest = function () {
	  // Load the native protocol
	  var protocol = this._options.protocol;
	  var nativeProtocol = this._options.nativeProtocols[protocol];
	  if (!nativeProtocol) {
	    this.emit("error", new TypeError("Unsupported protocol " + protocol));
	    return;
	  }

	  // If specified, use the agent corresponding to the protocol
	  // (HTTP and HTTPS use different types of agents)
	  if (this._options.agents) {
	    var scheme = protocol.slice(0, -1);
	    this._options.agent = this._options.agents[scheme];
	  }

	  // Create the native request and set up its event handlers
	  var request = this._currentRequest =
	        nativeProtocol.request(this._options, this._onNativeResponse);
	  request._redirectable = this;
	  for (var event of events) {
	    request.on(event, eventHandlers[event]);
	  }

	  // RFC7230§5.3.1: When making a request directly to an origin server, […]
	  // a client MUST send only the absolute path […] as the request-target.
	  this._currentUrl = /^\//.test(this._options.path) ?
	    url.format(this._options) :
	    // When making a request to a proxy, […]
	    // a client MUST send the target URI in absolute-form […].
	    this._currentUrl = this._options.path;

	  // End a redirected request
	  // (The first request must be ended explicitly with RedirectableRequest#end)
	  if (this._isRedirect) {
	    // Write the request entity and end
	    var i = 0;
	    var self = this;
	    var buffers = this._requestBodyBuffers;
	    (function writeNext(error) {
	      // Only write if this request has not been redirected yet
	      /* istanbul ignore else */
	      if (request === self._currentRequest) {
	        // Report any write errors
	        /* istanbul ignore if */
	        if (error) {
	          self.emit("error", error);
	        }
	        // Write the next buffer if there are still left
	        else if (i < buffers.length) {
	          var buffer = buffers[i++];
	          /* istanbul ignore else */
	          if (!request.finished) {
	            request.write(buffer.data, buffer.encoding, writeNext);
	          }
	        }
	        // End the request if `end` has been called on us
	        else if (self._ended) {
	          request.end();
	        }
	      }
	    }());
	  }
	};

	// Processes a response from the current native request
	RedirectableRequest.prototype._processResponse = function (response) {
	  // Store the redirected response
	  var statusCode = response.statusCode;
	  if (this._options.trackRedirects) {
	    this._redirects.push({
	      url: this._currentUrl,
	      headers: response.headers,
	      statusCode: statusCode,
	    });
	  }

	  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
	  // that further action needs to be taken by the user agent in order to
	  // fulfill the request. If a Location header field is provided,
	  // the user agent MAY automatically redirect its request to the URI
	  // referenced by the Location field value,
	  // even if the specific status code is not understood.

	  // If the response is not a redirect; return it as-is
	  var location = response.headers.location;
	  if (!location || this._options.followRedirects === false ||
	      statusCode < 300 || statusCode >= 400) {
	    response.responseUrl = this._currentUrl;
	    response.redirects = this._redirects;
	    this.emit("response", response);

	    // Clean up
	    this._requestBodyBuffers = [];
	    return;
	  }

	  // The response is a redirect, so abort the current request
	  abortRequest(this._currentRequest);
	  // Discard the remainder of the response to avoid waiting for data
	  response.destroy();

	  // RFC7231§6.4: A client SHOULD detect and intervene
	  // in cyclical redirections (i.e., "infinite" redirection loops).
	  if (++this._redirectCount > this._options.maxRedirects) {
	    this.emit("error", new TooManyRedirectsError());
	    return;
	  }

	  // Store the request headers if applicable
	  var requestHeaders;
	  var beforeRedirect = this._options.beforeRedirect;
	  if (beforeRedirect) {
	    requestHeaders = Object.assign({
	      // The Host header was set by nativeProtocol.request
	      Host: response.req.getHeader("host"),
	    }, this._options.headers);
	  }

	  // RFC7231§6.4: Automatic redirection needs to done with
	  // care for methods not known to be safe, […]
	  // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
	  // the request method from POST to GET for the subsequent request.
	  var method = this._options.method;
	  if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
	      // RFC7231§6.4.4: The 303 (See Other) status code indicates that
	      // the server is redirecting the user agent to a different resource […]
	      // A user agent can perform a retrieval request targeting that URI
	      // (a GET or HEAD request if using HTTP) […]
	      (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
	    this._options.method = "GET";
	    // Drop a possible entity and headers related to it
	    this._requestBodyBuffers = [];
	    removeMatchingHeaders(/^content-/i, this._options.headers);
	  }

	  // Drop the Host header, as the redirect might lead to a different host
	  var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

	  // If the redirect is relative, carry over the host of the last request
	  var currentUrlParts = url.parse(this._currentUrl);
	  var currentHost = currentHostHeader || currentUrlParts.host;
	  var currentUrl = /^\w+:/.test(location) ? this._currentUrl :
	    url.format(Object.assign(currentUrlParts, { host: currentHost }));

	  // Determine the URL of the redirection
	  var redirectUrl;
	  try {
	    redirectUrl = url.resolve(currentUrl, location);
	  }
	  catch (cause) {
	    this.emit("error", new RedirectionError(cause));
	    return;
	  }

	  // Create the redirected request
	  debug("redirecting to", redirectUrl);
	  this._isRedirect = true;
	  var redirectUrlParts = url.parse(redirectUrl);
	  Object.assign(this._options, redirectUrlParts);

	  // Drop confidential headers when redirecting to a less secure protocol
	  // or to a different domain that is not a superdomain
	  if (redirectUrlParts.protocol !== currentUrlParts.protocol &&
	     redirectUrlParts.protocol !== "https:" ||
	     redirectUrlParts.host !== currentHost &&
	     !isSubdomain(redirectUrlParts.host, currentHost)) {
	    removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
	  }

	  // Evaluate the beforeRedirect callback
	  if (typeof beforeRedirect === "function") {
	    var responseDetails = {
	      headers: response.headers,
	      statusCode: statusCode,
	    };
	    var requestDetails = {
	      url: currentUrl,
	      method: method,
	      headers: requestHeaders,
	    };
	    try {
	      beforeRedirect(this._options, responseDetails, requestDetails);
	    }
	    catch (err) {
	      this.emit("error", err);
	      return;
	    }
	    this._sanitizeOptions(this._options);
	  }

	  // Perform the redirected request
	  try {
	    this._performRequest();
	  }
	  catch (cause) {
	    this.emit("error", new RedirectionError(cause));
	  }
	};

	// Wraps the key/value object of protocols with redirect functionality
	function wrap(protocols) {
	  // Default settings
	  var exports = {
	    maxRedirects: 21,
	    maxBodyLength: 10 * 1024 * 1024,
	  };

	  // Wrap each protocol
	  var nativeProtocols = {};
	  Object.keys(protocols).forEach(function (scheme) {
	    var protocol = scheme + ":";
	    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
	    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

	    // Executes a request, following redirects
	    function request(input, options, callback) {
	      // Parse parameters
	      if (typeof input === "string") {
	        var urlStr = input;
	        try {
	          input = urlToOptions(new URL(urlStr));
	        }
	        catch (err) {
	          /* istanbul ignore next */
	          input = url.parse(urlStr);
	        }
	      }
	      else if (URL && (input instanceof URL)) {
	        input = urlToOptions(input);
	      }
	      else {
	        callback = options;
	        options = input;
	        input = { protocol: protocol };
	      }
	      if (typeof options === "function") {
	        callback = options;
	        options = null;
	      }

	      // Set defaults
	      options = Object.assign({
	        maxRedirects: exports.maxRedirects,
	        maxBodyLength: exports.maxBodyLength,
	      }, input, options);
	      options.nativeProtocols = nativeProtocols;

	      assert.equal(options.protocol, protocol, "protocol mismatch");
	      debug("options", options);
	      return new RedirectableRequest(options, callback);
	    }

	    // Executes a GET request, following redirects
	    function get(input, options, callback) {
	      var wrappedRequest = wrappedProtocol.request(input, options, callback);
	      wrappedRequest.end();
	      return wrappedRequest;
	    }

	    // Expose the properties on the wrapped protocol
	    Object.defineProperties(wrappedProtocol, {
	      request: { value: request, configurable: true, enumerable: true, writable: true },
	      get: { value: get, configurable: true, enumerable: true, writable: true },
	    });
	  });
	  return exports;
	}

	/* istanbul ignore next */
	function noop() { /* empty */ }

	// from https://github.com/nodejs/node/blob/master/lib/internal/url.js
	function urlToOptions(urlObject) {
	  var options = {
	    protocol: urlObject.protocol,
	    hostname: urlObject.hostname.startsWith("[") ?
	      /* istanbul ignore next */
	      urlObject.hostname.slice(1, -1) :
	      urlObject.hostname,
	    hash: urlObject.hash,
	    search: urlObject.search,
	    pathname: urlObject.pathname,
	    path: urlObject.pathname + urlObject.search,
	    href: urlObject.href,
	  };
	  if (urlObject.port !== "") {
	    options.port = Number(urlObject.port);
	  }
	  return options;
	}

	function removeMatchingHeaders(regex, headers) {
	  var lastValue;
	  for (var header in headers) {
	    if (regex.test(header)) {
	      lastValue = headers[header];
	      delete headers[header];
	    }
	  }
	  return (lastValue === null || typeof lastValue === "undefined") ?
	    undefined : String(lastValue).trim();
	}

	function createErrorType(code, defaultMessage) {
	  function CustomError(cause) {
	    Error.captureStackTrace(this, this.constructor);
	    if (!cause) {
	      this.message = defaultMessage;
	    }
	    else {
	      this.message = defaultMessage + ": " + cause.message;
	      this.cause = cause;
	    }
	  }
	  CustomError.prototype = new Error();
	  CustomError.prototype.constructor = CustomError;
	  CustomError.prototype.name = "Error [" + code + "]";
	  CustomError.prototype.code = code;
	  return CustomError;
	}

	function abortRequest(request) {
	  for (var event of events) {
	    request.removeListener(event, eventHandlers[event]);
	  }
	  request.on("error", noop);
	  request.abort();
	}

	function isSubdomain(subdomain, domain) {
	  const dot = subdomain.length - domain.length - 1;
	  return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
	}

	// Exports
	followRedirects.exports = wrap({ http: http, https: https });
	followRedirects.exports.wrap = wrap;
	return followRedirects.exports;
}

var data;
var hasRequiredData;

function requireData () {
	if (hasRequiredData) return data;
	hasRequiredData = 1;
	data = {
	  "version": "0.27.2"
	};
	return data;
}

var http_1;
var hasRequiredHttp;

function requireHttp () {
	if (hasRequiredHttp) return http_1;
	hasRequiredHttp = 1;

	var utils = utils$b;
	var settle = requireSettle();
	var buildFullPath = buildFullPath$1;
	var buildURL = buildURL$1;
	var http = require$$1__default["default"];
	var https = require$$2__default["default"];
	var httpFollow = requireFollowRedirects().http;
	var httpsFollow = requireFollowRedirects().https;
	var url = requireUrl();
	var zlib = require$$8__default["default"];
	var VERSION = requireData().version;
	var transitionalDefaults = transitional;
	var AxiosError = AxiosError_1;
	var CanceledError = requireCanceledError();

	var isHttps = /https:?/;

	var supportedProtocols = [ 'http:', 'https:', 'file:' ];

	/**
	 *
	 * @param {http.ClientRequestArgs} options
	 * @param {AxiosProxyConfig} proxy
	 * @param {string} location
	 */
	function setProxy(options, proxy, location) {
	  options.hostname = proxy.host;
	  options.host = proxy.host;
	  options.port = proxy.port;
	  options.path = location;

	  // Basic proxy authorization
	  if (proxy.auth) {
	    var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
	    options.headers['Proxy-Authorization'] = 'Basic ' + base64;
	  }

	  // If a proxy is used, any redirects must also pass through the proxy
	  options.beforeRedirect = function beforeRedirect(redirection) {
	    redirection.headers.host = redirection.host;
	    setProxy(redirection, proxy, redirection.href);
	  };
	}

	/*eslint consistent-return:0*/
	http_1 = function httpAdapter(config) {
	  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
	    var onCanceled;
	    function done() {
	      if (config.cancelToken) {
	        config.cancelToken.unsubscribe(onCanceled);
	      }

	      if (config.signal) {
	        config.signal.removeEventListener('abort', onCanceled);
	      }
	    }
	    var resolve = function resolve(value) {
	      done();
	      resolvePromise(value);
	    };
	    var rejected = false;
	    var reject = function reject(value) {
	      done();
	      rejected = true;
	      rejectPromise(value);
	    };
	    var data = config.data;
	    var headers = config.headers;
	    var headerNames = {};

	    Object.keys(headers).forEach(function storeLowerName(name) {
	      headerNames[name.toLowerCase()] = name;
	    });

	    // Set User-Agent (required by some servers)
	    // See https://github.com/axios/axios/issues/69
	    if ('user-agent' in headerNames) {
	      // User-Agent is specified; handle case where no UA header is desired
	      if (!headers[headerNames['user-agent']]) {
	        delete headers[headerNames['user-agent']];
	      }
	      // Otherwise, use specified value
	    } else {
	      // Only set header if it hasn't been set in config
	      headers['User-Agent'] = 'axios/' + VERSION;
	    }

	    // support for https://www.npmjs.com/package/form-data api
	    if (utils.isFormData(data) && utils.isFunction(data.getHeaders)) {
	      Object.assign(headers, data.getHeaders());
	    } else if (data && !utils.isStream(data)) {
	      if (Buffer.isBuffer(data)) ; else if (utils.isArrayBuffer(data)) {
	        data = Buffer.from(new Uint8Array(data));
	      } else if (utils.isString(data)) {
	        data = Buffer.from(data, 'utf-8');
	      } else {
	        return reject(new AxiosError(
	          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
	          AxiosError.ERR_BAD_REQUEST,
	          config
	        ));
	      }

	      if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
	        return reject(new AxiosError(
	          'Request body larger than maxBodyLength limit',
	          AxiosError.ERR_BAD_REQUEST,
	          config
	        ));
	      }

	      // Add Content-Length header if data exists
	      if (!headerNames['content-length']) {
	        headers['Content-Length'] = data.length;
	      }
	    }

	    // HTTP basic authentication
	    var auth = undefined;
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      auth = username + ':' + password;
	    }

	    // Parse url
	    var fullPath = buildFullPath(config.baseURL, config.url);
	    var parsed = url.parse(fullPath);
	    var protocol = parsed.protocol || supportedProtocols[0];

	    if (supportedProtocols.indexOf(protocol) === -1) {
	      return reject(new AxiosError(
	        'Unsupported protocol ' + protocol,
	        AxiosError.ERR_BAD_REQUEST,
	        config
	      ));
	    }

	    if (!auth && parsed.auth) {
	      var urlAuth = parsed.auth.split(':');
	      var urlUsername = urlAuth[0] || '';
	      var urlPassword = urlAuth[1] || '';
	      auth = urlUsername + ':' + urlPassword;
	    }

	    if (auth && headerNames.authorization) {
	      delete headers[headerNames.authorization];
	    }

	    var isHttpsRequest = isHttps.test(protocol);
	    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

	    try {
	      buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, '');
	    } catch (err) {
	      var customErr = new Error(err.message);
	      customErr.config = config;
	      customErr.url = config.url;
	      customErr.exists = true;
	      reject(customErr);
	    }

	    var options = {
	      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
	      method: config.method.toUpperCase(),
	      headers: headers,
	      agent: agent,
	      agents: { http: config.httpAgent, https: config.httpsAgent },
	      auth: auth
	    };

	    if (config.socketPath) {
	      options.socketPath = config.socketPath;
	    } else {
	      options.hostname = parsed.hostname;
	      options.port = parsed.port;
	    }

	    var proxy = config.proxy;
	    if (!proxy && proxy !== false) {
	      var proxyEnv = protocol.slice(0, -1) + '_proxy';
	      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
	      if (proxyUrl) {
	        var parsedProxyUrl = url.parse(proxyUrl);
	        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
	        var shouldProxy = true;

	        if (noProxyEnv) {
	          var noProxy = noProxyEnv.split(',').map(function trim(s) {
	            return s.trim();
	          });

	          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
	            if (!proxyElement) {
	              return false;
	            }
	            if (proxyElement === '*') {
	              return true;
	            }
	            if (proxyElement[0] === '.' &&
	                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
	              return true;
	            }

	            return parsed.hostname === proxyElement;
	          });
	        }

	        if (shouldProxy) {
	          proxy = {
	            host: parsedProxyUrl.hostname,
	            port: parsedProxyUrl.port,
	            protocol: parsedProxyUrl.protocol
	          };

	          if (parsedProxyUrl.auth) {
	            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
	            proxy.auth = {
	              username: proxyUrlAuth[0],
	              password: proxyUrlAuth[1]
	            };
	          }
	        }
	      }
	    }

	    if (proxy) {
	      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
	      setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
	    }

	    var transport;
	    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
	    if (config.transport) {
	      transport = config.transport;
	    } else if (config.maxRedirects === 0) {
	      transport = isHttpsProxy ? https : http;
	    } else {
	      if (config.maxRedirects) {
	        options.maxRedirects = config.maxRedirects;
	      }
	      if (config.beforeRedirect) {
	        options.beforeRedirect = config.beforeRedirect;
	      }
	      transport = isHttpsProxy ? httpsFollow : httpFollow;
	    }

	    if (config.maxBodyLength > -1) {
	      options.maxBodyLength = config.maxBodyLength;
	    }

	    if (config.insecureHTTPParser) {
	      options.insecureHTTPParser = config.insecureHTTPParser;
	    }

	    // Create the request
	    var req = transport.request(options, function handleResponse(res) {
	      if (req.aborted) return;

	      // uncompress the response body transparently if required
	      var stream = res;

	      // return the last request in case of redirects
	      var lastRequest = res.req || req;


	      // if no content, is HEAD request or decompress disabled we should not decompress
	      if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
	        switch (res.headers['content-encoding']) {
	        /*eslint default-case:0*/
	        case 'gzip':
	        case 'compress':
	        case 'deflate':
	        // add the unzipper to the body stream processing pipeline
	          stream = stream.pipe(zlib.createUnzip());

	          // remove the content-encoding in order to not confuse downstream operations
	          delete res.headers['content-encoding'];
	          break;
	        }
	      }

	      var response = {
	        status: res.statusCode,
	        statusText: res.statusMessage,
	        headers: res.headers,
	        config: config,
	        request: lastRequest
	      };

	      if (config.responseType === 'stream') {
	        response.data = stream;
	        settle(resolve, reject, response);
	      } else {
	        var responseBuffer = [];
	        var totalResponseBytes = 0;
	        stream.on('data', function handleStreamData(chunk) {
	          responseBuffer.push(chunk);
	          totalResponseBytes += chunk.length;

	          // make sure the content length is not over the maxContentLength if specified
	          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
	            // stream.destoy() emit aborted event before calling reject() on Node.js v16
	            rejected = true;
	            stream.destroy();
	            reject(new AxiosError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
	              AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
	          }
	        });

	        stream.on('aborted', function handlerStreamAborted() {
	          if (rejected) {
	            return;
	          }
	          stream.destroy();
	          reject(new AxiosError(
	            'maxContentLength size of ' + config.maxContentLength + ' exceeded',
	            AxiosError.ERR_BAD_RESPONSE,
	            config,
	            lastRequest
	          ));
	        });

	        stream.on('error', function handleStreamError(err) {
	          if (req.aborted) return;
	          reject(AxiosError.from(err, null, config, lastRequest));
	        });

	        stream.on('end', function handleStreamEnd() {
	          try {
	            var responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
	            if (config.responseType !== 'arraybuffer') {
	              responseData = responseData.toString(config.responseEncoding);
	              if (!config.responseEncoding || config.responseEncoding === 'utf8') {
	                responseData = utils.stripBOM(responseData);
	              }
	            }
	            response.data = responseData;
	          } catch (err) {
	            reject(AxiosError.from(err, null, config, response.request, response));
	          }
	          settle(resolve, reject, response);
	        });
	      }
	    });

	    // Handle errors
	    req.on('error', function handleRequestError(err) {
	      // @todo remove
	      // if (req.aborted && err.code !== AxiosError.ERR_FR_TOO_MANY_REDIRECTS) return;
	      reject(AxiosError.from(err, null, config, req));
	    });

	    // set tcp keep alive to prevent drop connection by peer
	    req.on('socket', function handleRequestSocket(socket) {
	      // default interval of sending ack packet is 1 minute
	      socket.setKeepAlive(true, 1000 * 60);
	    });

	    // Handle request timeout
	    if (config.timeout) {
	      // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
	      var timeout = parseInt(config.timeout, 10);

	      if (isNaN(timeout)) {
	        reject(new AxiosError(
	          'error trying to parse `config.timeout` to int',
	          AxiosError.ERR_BAD_OPTION_VALUE,
	          config,
	          req
	        ));

	        return;
	      }

	      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
	      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
	      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
	      // And then these socket which be hang up will devoring CPU little by little.
	      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
	      req.setTimeout(timeout, function handleRequestTimeout() {
	        req.abort();
	        var transitional = config.transitional || transitionalDefaults;
	        reject(new AxiosError(
	          'timeout of ' + timeout + 'ms exceeded',
	          transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
	          config,
	          req
	        ));
	      });
	    }

	    if (config.cancelToken || config.signal) {
	      // Handle cancellation
	      // eslint-disable-next-line func-names
	      onCanceled = function(cancel) {
	        if (req.aborted) return;

	        req.abort();
	        reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);
	      };

	      config.cancelToken && config.cancelToken.subscribe(onCanceled);
	      if (config.signal) {
	        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
	      }
	    }


	    // Send the request
	    if (utils.isStream(data)) {
	      data.on('error', function handleStreamError(err) {
	        reject(AxiosError.from(err, config, null, req));
	      }).pipe(req);
	    } else {
	      req.end(data);
	    }
	  });
	};
	return http_1;
}

var FormData$1 = {exports: {}};

var delayed_stream;
var hasRequiredDelayed_stream;

function requireDelayed_stream () {
	if (hasRequiredDelayed_stream) return delayed_stream;
	hasRequiredDelayed_stream = 1;
	var Stream = require$$3__default$1["default"].Stream;
	var util = requireUtil();

	delayed_stream = DelayedStream;
	function DelayedStream() {
	  this.source = null;
	  this.dataSize = 0;
	  this.maxDataSize = 1024 * 1024;
	  this.pauseStream = true;

	  this._maxDataSizeExceeded = false;
	  this._released = false;
	  this._bufferedEvents = [];
	}
	util.inherits(DelayedStream, Stream);

	DelayedStream.create = function(source, options) {
	  var delayedStream = new this();

	  options = options || {};
	  for (var option in options) {
	    delayedStream[option] = options[option];
	  }

	  delayedStream.source = source;

	  var realEmit = source.emit;
	  source.emit = function() {
	    delayedStream._handleEmit(arguments);
	    return realEmit.apply(source, arguments);
	  };

	  source.on('error', function() {});
	  if (delayedStream.pauseStream) {
	    source.pause();
	  }

	  return delayedStream;
	};

	Object.defineProperty(DelayedStream.prototype, 'readable', {
	  configurable: true,
	  enumerable: true,
	  get: function() {
	    return this.source.readable;
	  }
	});

	DelayedStream.prototype.setEncoding = function() {
	  return this.source.setEncoding.apply(this.source, arguments);
	};

	DelayedStream.prototype.resume = function() {
	  if (!this._released) {
	    this.release();
	  }

	  this.source.resume();
	};

	DelayedStream.prototype.pause = function() {
	  this.source.pause();
	};

	DelayedStream.prototype.release = function() {
	  this._released = true;

	  this._bufferedEvents.forEach(function(args) {
	    this.emit.apply(this, args);
	  }.bind(this));
	  this._bufferedEvents = [];
	};

	DelayedStream.prototype.pipe = function() {
	  var r = Stream.prototype.pipe.apply(this, arguments);
	  this.resume();
	  return r;
	};

	DelayedStream.prototype._handleEmit = function(args) {
	  if (this._released) {
	    this.emit.apply(this, args);
	    return;
	  }

	  if (args[0] === 'data') {
	    this.dataSize += args[1].length;
	    this._checkIfMaxDataSizeExceeded();
	  }

	  this._bufferedEvents.push(args);
	};

	DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
	  if (this._maxDataSizeExceeded) {
	    return;
	  }

	  if (this.dataSize <= this.maxDataSize) {
	    return;
	  }

	  this._maxDataSizeExceeded = true;
	  var message =
	    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
	  this.emit('error', new Error(message));
	};
	return delayed_stream;
}

var combined_stream;
var hasRequiredCombined_stream;

function requireCombined_stream () {
	if (hasRequiredCombined_stream) return combined_stream;
	hasRequiredCombined_stream = 1;
	var util = requireUtil();
	var Stream = require$$3__default$1["default"].Stream;
	var DelayedStream = requireDelayed_stream();

	combined_stream = CombinedStream;
	function CombinedStream() {
	  this.writable = false;
	  this.readable = true;
	  this.dataSize = 0;
	  this.maxDataSize = 2 * 1024 * 1024;
	  this.pauseStreams = true;

	  this._released = false;
	  this._streams = [];
	  this._currentStream = null;
	  this._insideLoop = false;
	  this._pendingNext = false;
	}
	util.inherits(CombinedStream, Stream);

	CombinedStream.create = function(options) {
	  var combinedStream = new this();

	  options = options || {};
	  for (var option in options) {
	    combinedStream[option] = options[option];
	  }

	  return combinedStream;
	};

	CombinedStream.isStreamLike = function(stream) {
	  return (typeof stream !== 'function')
	    && (typeof stream !== 'string')
	    && (typeof stream !== 'boolean')
	    && (typeof stream !== 'number')
	    && (!Buffer.isBuffer(stream));
	};

	CombinedStream.prototype.append = function(stream) {
	  var isStreamLike = CombinedStream.isStreamLike(stream);

	  if (isStreamLike) {
	    if (!(stream instanceof DelayedStream)) {
	      var newStream = DelayedStream.create(stream, {
	        maxDataSize: Infinity,
	        pauseStream: this.pauseStreams,
	      });
	      stream.on('data', this._checkDataSize.bind(this));
	      stream = newStream;
	    }

	    this._handleErrors(stream);

	    if (this.pauseStreams) {
	      stream.pause();
	    }
	  }

	  this._streams.push(stream);
	  return this;
	};

	CombinedStream.prototype.pipe = function(dest, options) {
	  Stream.prototype.pipe.call(this, dest, options);
	  this.resume();
	  return dest;
	};

	CombinedStream.prototype._getNext = function() {
	  this._currentStream = null;

	  if (this._insideLoop) {
	    this._pendingNext = true;
	    return; // defer call
	  }

	  this._insideLoop = true;
	  try {
	    do {
	      this._pendingNext = false;
	      this._realGetNext();
	    } while (this._pendingNext);
	  } finally {
	    this._insideLoop = false;
	  }
	};

	CombinedStream.prototype._realGetNext = function() {
	  var stream = this._streams.shift();


	  if (typeof stream == 'undefined') {
	    this.end();
	    return;
	  }

	  if (typeof stream !== 'function') {
	    this._pipeNext(stream);
	    return;
	  }

	  var getStream = stream;
	  getStream(function(stream) {
	    var isStreamLike = CombinedStream.isStreamLike(stream);
	    if (isStreamLike) {
	      stream.on('data', this._checkDataSize.bind(this));
	      this._handleErrors(stream);
	    }

	    this._pipeNext(stream);
	  }.bind(this));
	};

	CombinedStream.prototype._pipeNext = function(stream) {
	  this._currentStream = stream;

	  var isStreamLike = CombinedStream.isStreamLike(stream);
	  if (isStreamLike) {
	    stream.on('end', this._getNext.bind(this));
	    stream.pipe(this, {end: false});
	    return;
	  }

	  var value = stream;
	  this.write(value);
	  this._getNext();
	};

	CombinedStream.prototype._handleErrors = function(stream) {
	  var self = this;
	  stream.on('error', function(err) {
	    self._emitError(err);
	  });
	};

	CombinedStream.prototype.write = function(data) {
	  this.emit('data', data);
	};

	CombinedStream.prototype.pause = function() {
	  if (!this.pauseStreams) {
	    return;
	  }

	  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.pause) == 'function') this._currentStream.pause();
	  this.emit('pause');
	};

	CombinedStream.prototype.resume = function() {
	  if (!this._released) {
	    this._released = true;
	    this.writable = true;
	    this._getNext();
	  }

	  if(this.pauseStreams && this._currentStream && typeof(this._currentStream.resume) == 'function') this._currentStream.resume();
	  this.emit('resume');
	};

	CombinedStream.prototype.end = function() {
	  this._reset();
	  this.emit('end');
	};

	CombinedStream.prototype.destroy = function() {
	  this._reset();
	  this.emit('close');
	};

	CombinedStream.prototype._reset = function() {
	  this.writable = false;
	  this._streams = [];
	  this._currentStream = null;
	};

	CombinedStream.prototype._checkDataSize = function() {
	  this._updateDataSize();
	  if (this.dataSize <= this.maxDataSize) {
	    return;
	  }

	  var message =
	    'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
	  this._emitError(new Error(message));
	};

	CombinedStream.prototype._updateDataSize = function() {
	  this.dataSize = 0;

	  var self = this;
	  this._streams.forEach(function(stream) {
	    if (!stream.dataSize) {
	      return;
	    }

	    self.dataSize += stream.dataSize;
	  });

	  if (this._currentStream && this._currentStream.dataSize) {
	    this.dataSize += this._currentStream.dataSize;
	  }
	};

	CombinedStream.prototype._emitError = function(err) {
	  this._reset();
	  this.emit('error', err);
	};
	return combined_stream;
}

var mimeTypes = {};

var mimeDb = {exports: {}};

var require$$0 = {
	"application/1d-interleaved-parityfec": {
	source: "iana"
},
	"application/3gpdash-qoe-report+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/3gpp-ims+xml": {
	source: "iana",
	compressible: true
},
	"application/3gpphal+json": {
	source: "iana",
	compressible: true
},
	"application/3gpphalforms+json": {
	source: "iana",
	compressible: true
},
	"application/a2l": {
	source: "iana"
},
	"application/ace+cbor": {
	source: "iana"
},
	"application/activemessage": {
	source: "iana"
},
	"application/activity+json": {
	source: "iana",
	compressible: true
},
	"application/alto-costmap+json": {
	source: "iana",
	compressible: true
},
	"application/alto-costmapfilter+json": {
	source: "iana",
	compressible: true
},
	"application/alto-directory+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointcost+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointcostparams+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointprop+json": {
	source: "iana",
	compressible: true
},
	"application/alto-endpointpropparams+json": {
	source: "iana",
	compressible: true
},
	"application/alto-error+json": {
	source: "iana",
	compressible: true
},
	"application/alto-networkmap+json": {
	source: "iana",
	compressible: true
},
	"application/alto-networkmapfilter+json": {
	source: "iana",
	compressible: true
},
	"application/alto-updatestreamcontrol+json": {
	source: "iana",
	compressible: true
},
	"application/alto-updatestreamparams+json": {
	source: "iana",
	compressible: true
},
	"application/aml": {
	source: "iana"
},
	"application/andrew-inset": {
	source: "iana",
	extensions: [
		"ez"
	]
},
	"application/applefile": {
	source: "iana"
},
	"application/applixware": {
	source: "apache",
	extensions: [
		"aw"
	]
},
	"application/at+jwt": {
	source: "iana"
},
	"application/atf": {
	source: "iana"
},
	"application/atfx": {
	source: "iana"
},
	"application/atom+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atom"
	]
},
	"application/atomcat+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomcat"
	]
},
	"application/atomdeleted+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomdeleted"
	]
},
	"application/atomicmail": {
	source: "iana"
},
	"application/atomsvc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"atomsvc"
	]
},
	"application/atsc-dwd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dwd"
	]
},
	"application/atsc-dynamic-event-message": {
	source: "iana"
},
	"application/atsc-held+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"held"
	]
},
	"application/atsc-rdt+json": {
	source: "iana",
	compressible: true
},
	"application/atsc-rsat+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rsat"
	]
},
	"application/atxml": {
	source: "iana"
},
	"application/auth-policy+xml": {
	source: "iana",
	compressible: true
},
	"application/bacnet-xdd+zip": {
	source: "iana",
	compressible: false
},
	"application/batch-smtp": {
	source: "iana"
},
	"application/bdoc": {
	compressible: false,
	extensions: [
		"bdoc"
	]
},
	"application/beep+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/calendar+json": {
	source: "iana",
	compressible: true
},
	"application/calendar+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xcs"
	]
},
	"application/call-completion": {
	source: "iana"
},
	"application/cals-1840": {
	source: "iana"
},
	"application/captive+json": {
	source: "iana",
	compressible: true
},
	"application/cbor": {
	source: "iana"
},
	"application/cbor-seq": {
	source: "iana"
},
	"application/cccex": {
	source: "iana"
},
	"application/ccmp+xml": {
	source: "iana",
	compressible: true
},
	"application/ccxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ccxml"
	]
},
	"application/cdfx+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cdfx"
	]
},
	"application/cdmi-capability": {
	source: "iana",
	extensions: [
		"cdmia"
	]
},
	"application/cdmi-container": {
	source: "iana",
	extensions: [
		"cdmic"
	]
},
	"application/cdmi-domain": {
	source: "iana",
	extensions: [
		"cdmid"
	]
},
	"application/cdmi-object": {
	source: "iana",
	extensions: [
		"cdmio"
	]
},
	"application/cdmi-queue": {
	source: "iana",
	extensions: [
		"cdmiq"
	]
},
	"application/cdni": {
	source: "iana"
},
	"application/cea": {
	source: "iana"
},
	"application/cea-2018+xml": {
	source: "iana",
	compressible: true
},
	"application/cellml+xml": {
	source: "iana",
	compressible: true
},
	"application/cfw": {
	source: "iana"
},
	"application/city+json": {
	source: "iana",
	compressible: true
},
	"application/clr": {
	source: "iana"
},
	"application/clue+xml": {
	source: "iana",
	compressible: true
},
	"application/clue_info+xml": {
	source: "iana",
	compressible: true
},
	"application/cms": {
	source: "iana"
},
	"application/cnrp+xml": {
	source: "iana",
	compressible: true
},
	"application/coap-group+json": {
	source: "iana",
	compressible: true
},
	"application/coap-payload": {
	source: "iana"
},
	"application/commonground": {
	source: "iana"
},
	"application/conference-info+xml": {
	source: "iana",
	compressible: true
},
	"application/cose": {
	source: "iana"
},
	"application/cose-key": {
	source: "iana"
},
	"application/cose-key-set": {
	source: "iana"
},
	"application/cpl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cpl"
	]
},
	"application/csrattrs": {
	source: "iana"
},
	"application/csta+xml": {
	source: "iana",
	compressible: true
},
	"application/cstadata+xml": {
	source: "iana",
	compressible: true
},
	"application/csvm+json": {
	source: "iana",
	compressible: true
},
	"application/cu-seeme": {
	source: "apache",
	extensions: [
		"cu"
	]
},
	"application/cwt": {
	source: "iana"
},
	"application/cybercash": {
	source: "iana"
},
	"application/dart": {
	compressible: true
},
	"application/dash+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpd"
	]
},
	"application/dash-patch+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpp"
	]
},
	"application/dashdelta": {
	source: "iana"
},
	"application/davmount+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"davmount"
	]
},
	"application/dca-rft": {
	source: "iana"
},
	"application/dcd": {
	source: "iana"
},
	"application/dec-dx": {
	source: "iana"
},
	"application/dialog-info+xml": {
	source: "iana",
	compressible: true
},
	"application/dicom": {
	source: "iana"
},
	"application/dicom+json": {
	source: "iana",
	compressible: true
},
	"application/dicom+xml": {
	source: "iana",
	compressible: true
},
	"application/dii": {
	source: "iana"
},
	"application/dit": {
	source: "iana"
},
	"application/dns": {
	source: "iana"
},
	"application/dns+json": {
	source: "iana",
	compressible: true
},
	"application/dns-message": {
	source: "iana"
},
	"application/docbook+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"dbk"
	]
},
	"application/dots+cbor": {
	source: "iana"
},
	"application/dskpp+xml": {
	source: "iana",
	compressible: true
},
	"application/dssc+der": {
	source: "iana",
	extensions: [
		"dssc"
	]
},
	"application/dssc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdssc"
	]
},
	"application/dvcs": {
	source: "iana"
},
	"application/ecmascript": {
	source: "iana",
	compressible: true,
	extensions: [
		"es",
		"ecma"
	]
},
	"application/edi-consent": {
	source: "iana"
},
	"application/edi-x12": {
	source: "iana",
	compressible: false
},
	"application/edifact": {
	source: "iana",
	compressible: false
},
	"application/efi": {
	source: "iana"
},
	"application/elm+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/elm+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.cap+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/emergencycalldata.comment+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.control+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.deviceinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.ecall.msd": {
	source: "iana"
},
	"application/emergencycalldata.providerinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.serviceinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.subscriberinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/emergencycalldata.veds+xml": {
	source: "iana",
	compressible: true
},
	"application/emma+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"emma"
	]
},
	"application/emotionml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"emotionml"
	]
},
	"application/encaprtp": {
	source: "iana"
},
	"application/epp+xml": {
	source: "iana",
	compressible: true
},
	"application/epub+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"epub"
	]
},
	"application/eshop": {
	source: "iana"
},
	"application/exi": {
	source: "iana",
	extensions: [
		"exi"
	]
},
	"application/expect-ct-report+json": {
	source: "iana",
	compressible: true
},
	"application/express": {
	source: "iana",
	extensions: [
		"exp"
	]
},
	"application/fastinfoset": {
	source: "iana"
},
	"application/fastsoap": {
	source: "iana"
},
	"application/fdt+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"fdt"
	]
},
	"application/fhir+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/fhir+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/fido.trusted-apps+json": {
	compressible: true
},
	"application/fits": {
	source: "iana"
},
	"application/flexfec": {
	source: "iana"
},
	"application/font-sfnt": {
	source: "iana"
},
	"application/font-tdpfr": {
	source: "iana",
	extensions: [
		"pfr"
	]
},
	"application/font-woff": {
	source: "iana",
	compressible: false
},
	"application/framework-attributes+xml": {
	source: "iana",
	compressible: true
},
	"application/geo+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"geojson"
	]
},
	"application/geo+json-seq": {
	source: "iana"
},
	"application/geopackage+sqlite3": {
	source: "iana"
},
	"application/geoxacml+xml": {
	source: "iana",
	compressible: true
},
	"application/gltf-buffer": {
	source: "iana"
},
	"application/gml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"gml"
	]
},
	"application/gpx+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"gpx"
	]
},
	"application/gxf": {
	source: "apache",
	extensions: [
		"gxf"
	]
},
	"application/gzip": {
	source: "iana",
	compressible: false,
	extensions: [
		"gz"
	]
},
	"application/h224": {
	source: "iana"
},
	"application/held+xml": {
	source: "iana",
	compressible: true
},
	"application/hjson": {
	extensions: [
		"hjson"
	]
},
	"application/http": {
	source: "iana"
},
	"application/hyperstudio": {
	source: "iana",
	extensions: [
		"stk"
	]
},
	"application/ibe-key-request+xml": {
	source: "iana",
	compressible: true
},
	"application/ibe-pkg-reply+xml": {
	source: "iana",
	compressible: true
},
	"application/ibe-pp-data": {
	source: "iana"
},
	"application/iges": {
	source: "iana"
},
	"application/im-iscomposing+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/index": {
	source: "iana"
},
	"application/index.cmd": {
	source: "iana"
},
	"application/index.obj": {
	source: "iana"
},
	"application/index.response": {
	source: "iana"
},
	"application/index.vnd": {
	source: "iana"
},
	"application/inkml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ink",
		"inkml"
	]
},
	"application/iotp": {
	source: "iana"
},
	"application/ipfix": {
	source: "iana",
	extensions: [
		"ipfix"
	]
},
	"application/ipp": {
	source: "iana"
},
	"application/isup": {
	source: "iana"
},
	"application/its+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"its"
	]
},
	"application/java-archive": {
	source: "apache",
	compressible: false,
	extensions: [
		"jar",
		"war",
		"ear"
	]
},
	"application/java-serialized-object": {
	source: "apache",
	compressible: false,
	extensions: [
		"ser"
	]
},
	"application/java-vm": {
	source: "apache",
	compressible: false,
	extensions: [
		"class"
	]
},
	"application/javascript": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"js",
		"mjs"
	]
},
	"application/jf2feed+json": {
	source: "iana",
	compressible: true
},
	"application/jose": {
	source: "iana"
},
	"application/jose+json": {
	source: "iana",
	compressible: true
},
	"application/jrd+json": {
	source: "iana",
	compressible: true
},
	"application/jscalendar+json": {
	source: "iana",
	compressible: true
},
	"application/json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"json",
		"map"
	]
},
	"application/json-patch+json": {
	source: "iana",
	compressible: true
},
	"application/json-seq": {
	source: "iana"
},
	"application/json5": {
	extensions: [
		"json5"
	]
},
	"application/jsonml+json": {
	source: "apache",
	compressible: true,
	extensions: [
		"jsonml"
	]
},
	"application/jwk+json": {
	source: "iana",
	compressible: true
},
	"application/jwk-set+json": {
	source: "iana",
	compressible: true
},
	"application/jwt": {
	source: "iana"
},
	"application/kpml-request+xml": {
	source: "iana",
	compressible: true
},
	"application/kpml-response+xml": {
	source: "iana",
	compressible: true
},
	"application/ld+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"jsonld"
	]
},
	"application/lgr+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lgr"
	]
},
	"application/link-format": {
	source: "iana"
},
	"application/load-control+xml": {
	source: "iana",
	compressible: true
},
	"application/lost+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lostxml"
	]
},
	"application/lostsync+xml": {
	source: "iana",
	compressible: true
},
	"application/lpf+zip": {
	source: "iana",
	compressible: false
},
	"application/lxf": {
	source: "iana"
},
	"application/mac-binhex40": {
	source: "iana",
	extensions: [
		"hqx"
	]
},
	"application/mac-compactpro": {
	source: "apache",
	extensions: [
		"cpt"
	]
},
	"application/macwriteii": {
	source: "iana"
},
	"application/mads+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mads"
	]
},
	"application/manifest+json": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"webmanifest"
	]
},
	"application/marc": {
	source: "iana",
	extensions: [
		"mrc"
	]
},
	"application/marcxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mrcx"
	]
},
	"application/mathematica": {
	source: "iana",
	extensions: [
		"ma",
		"nb",
		"mb"
	]
},
	"application/mathml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mathml"
	]
},
	"application/mathml-content+xml": {
	source: "iana",
	compressible: true
},
	"application/mathml-presentation+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-associated-procedure-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-deregister+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-envelope+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-msk+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-msk-response+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-protection-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-reception-report+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-register+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-register-response+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-schedule+xml": {
	source: "iana",
	compressible: true
},
	"application/mbms-user-service-description+xml": {
	source: "iana",
	compressible: true
},
	"application/mbox": {
	source: "iana",
	extensions: [
		"mbox"
	]
},
	"application/media-policy-dataset+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpf"
	]
},
	"application/media_control+xml": {
	source: "iana",
	compressible: true
},
	"application/mediaservercontrol+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mscml"
	]
},
	"application/merge-patch+json": {
	source: "iana",
	compressible: true
},
	"application/metalink+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"metalink"
	]
},
	"application/metalink4+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"meta4"
	]
},
	"application/mets+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mets"
	]
},
	"application/mf4": {
	source: "iana"
},
	"application/mikey": {
	source: "iana"
},
	"application/mipc": {
	source: "iana"
},
	"application/missing-blocks+cbor-seq": {
	source: "iana"
},
	"application/mmt-aei+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"maei"
	]
},
	"application/mmt-usd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"musd"
	]
},
	"application/mods+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mods"
	]
},
	"application/moss-keys": {
	source: "iana"
},
	"application/moss-signature": {
	source: "iana"
},
	"application/mosskey-data": {
	source: "iana"
},
	"application/mosskey-request": {
	source: "iana"
},
	"application/mp21": {
	source: "iana",
	extensions: [
		"m21",
		"mp21"
	]
},
	"application/mp4": {
	source: "iana",
	extensions: [
		"mp4s",
		"m4p"
	]
},
	"application/mpeg4-generic": {
	source: "iana"
},
	"application/mpeg4-iod": {
	source: "iana"
},
	"application/mpeg4-iod-xmt": {
	source: "iana"
},
	"application/mrb-consumer+xml": {
	source: "iana",
	compressible: true
},
	"application/mrb-publish+xml": {
	source: "iana",
	compressible: true
},
	"application/msc-ivr+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/msc-mixer+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/msword": {
	source: "iana",
	compressible: false,
	extensions: [
		"doc",
		"dot"
	]
},
	"application/mud+json": {
	source: "iana",
	compressible: true
},
	"application/multipart-core": {
	source: "iana"
},
	"application/mxf": {
	source: "iana",
	extensions: [
		"mxf"
	]
},
	"application/n-quads": {
	source: "iana",
	extensions: [
		"nq"
	]
},
	"application/n-triples": {
	source: "iana",
	extensions: [
		"nt"
	]
},
	"application/nasdata": {
	source: "iana"
},
	"application/news-checkgroups": {
	source: "iana",
	charset: "US-ASCII"
},
	"application/news-groupinfo": {
	source: "iana",
	charset: "US-ASCII"
},
	"application/news-transmission": {
	source: "iana"
},
	"application/nlsml+xml": {
	source: "iana",
	compressible: true
},
	"application/node": {
	source: "iana",
	extensions: [
		"cjs"
	]
},
	"application/nss": {
	source: "iana"
},
	"application/oauth-authz-req+jwt": {
	source: "iana"
},
	"application/oblivious-dns-message": {
	source: "iana"
},
	"application/ocsp-request": {
	source: "iana"
},
	"application/ocsp-response": {
	source: "iana"
},
	"application/octet-stream": {
	source: "iana",
	compressible: false,
	extensions: [
		"bin",
		"dms",
		"lrf",
		"mar",
		"so",
		"dist",
		"distz",
		"pkg",
		"bpk",
		"dump",
		"elc",
		"deploy",
		"exe",
		"dll",
		"deb",
		"dmg",
		"iso",
		"img",
		"msi",
		"msp",
		"msm",
		"buffer"
	]
},
	"application/oda": {
	source: "iana",
	extensions: [
		"oda"
	]
},
	"application/odm+xml": {
	source: "iana",
	compressible: true
},
	"application/odx": {
	source: "iana"
},
	"application/oebps-package+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"opf"
	]
},
	"application/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"ogx"
	]
},
	"application/omdoc+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"omdoc"
	]
},
	"application/onenote": {
	source: "apache",
	extensions: [
		"onetoc",
		"onetoc2",
		"onetmp",
		"onepkg"
	]
},
	"application/opc-nodeset+xml": {
	source: "iana",
	compressible: true
},
	"application/oscore": {
	source: "iana"
},
	"application/oxps": {
	source: "iana",
	extensions: [
		"oxps"
	]
},
	"application/p21": {
	source: "iana"
},
	"application/p21+zip": {
	source: "iana",
	compressible: false
},
	"application/p2p-overlay+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"relo"
	]
},
	"application/parityfec": {
	source: "iana"
},
	"application/passport": {
	source: "iana"
},
	"application/patch-ops-error+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xer"
	]
},
	"application/pdf": {
	source: "iana",
	compressible: false,
	extensions: [
		"pdf"
	]
},
	"application/pdx": {
	source: "iana"
},
	"application/pem-certificate-chain": {
	source: "iana"
},
	"application/pgp-encrypted": {
	source: "iana",
	compressible: false,
	extensions: [
		"pgp"
	]
},
	"application/pgp-keys": {
	source: "iana",
	extensions: [
		"asc"
	]
},
	"application/pgp-signature": {
	source: "iana",
	extensions: [
		"asc",
		"sig"
	]
},
	"application/pics-rules": {
	source: "apache",
	extensions: [
		"prf"
	]
},
	"application/pidf+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/pidf-diff+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/pkcs10": {
	source: "iana",
	extensions: [
		"p10"
	]
},
	"application/pkcs12": {
	source: "iana"
},
	"application/pkcs7-mime": {
	source: "iana",
	extensions: [
		"p7m",
		"p7c"
	]
},
	"application/pkcs7-signature": {
	source: "iana",
	extensions: [
		"p7s"
	]
},
	"application/pkcs8": {
	source: "iana",
	extensions: [
		"p8"
	]
},
	"application/pkcs8-encrypted": {
	source: "iana"
},
	"application/pkix-attr-cert": {
	source: "iana",
	extensions: [
		"ac"
	]
},
	"application/pkix-cert": {
	source: "iana",
	extensions: [
		"cer"
	]
},
	"application/pkix-crl": {
	source: "iana",
	extensions: [
		"crl"
	]
},
	"application/pkix-pkipath": {
	source: "iana",
	extensions: [
		"pkipath"
	]
},
	"application/pkixcmp": {
	source: "iana",
	extensions: [
		"pki"
	]
},
	"application/pls+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"pls"
	]
},
	"application/poc-settings+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/postscript": {
	source: "iana",
	compressible: true,
	extensions: [
		"ai",
		"eps",
		"ps"
	]
},
	"application/ppsp-tracker+json": {
	source: "iana",
	compressible: true
},
	"application/problem+json": {
	source: "iana",
	compressible: true
},
	"application/problem+xml": {
	source: "iana",
	compressible: true
},
	"application/provenance+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"provx"
	]
},
	"application/prs.alvestrand.titrax-sheet": {
	source: "iana"
},
	"application/prs.cww": {
	source: "iana",
	extensions: [
		"cww"
	]
},
	"application/prs.cyn": {
	source: "iana",
	charset: "7-BIT"
},
	"application/prs.hpub+zip": {
	source: "iana",
	compressible: false
},
	"application/prs.nprend": {
	source: "iana"
},
	"application/prs.plucker": {
	source: "iana"
},
	"application/prs.rdf-xml-crypt": {
	source: "iana"
},
	"application/prs.xsf+xml": {
	source: "iana",
	compressible: true
},
	"application/pskc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"pskcxml"
	]
},
	"application/pvd+json": {
	source: "iana",
	compressible: true
},
	"application/qsig": {
	source: "iana"
},
	"application/raml+yaml": {
	compressible: true,
	extensions: [
		"raml"
	]
},
	"application/raptorfec": {
	source: "iana"
},
	"application/rdap+json": {
	source: "iana",
	compressible: true
},
	"application/rdf+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rdf",
		"owl"
	]
},
	"application/reginfo+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rif"
	]
},
	"application/relax-ng-compact-syntax": {
	source: "iana",
	extensions: [
		"rnc"
	]
},
	"application/remote-printing": {
	source: "iana"
},
	"application/reputon+json": {
	source: "iana",
	compressible: true
},
	"application/resource-lists+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rl"
	]
},
	"application/resource-lists-diff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rld"
	]
},
	"application/rfc+xml": {
	source: "iana",
	compressible: true
},
	"application/riscos": {
	source: "iana"
},
	"application/rlmi+xml": {
	source: "iana",
	compressible: true
},
	"application/rls-services+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rs"
	]
},
	"application/route-apd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rapd"
	]
},
	"application/route-s-tsid+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sls"
	]
},
	"application/route-usd+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rusd"
	]
},
	"application/rpki-ghostbusters": {
	source: "iana",
	extensions: [
		"gbr"
	]
},
	"application/rpki-manifest": {
	source: "iana",
	extensions: [
		"mft"
	]
},
	"application/rpki-publication": {
	source: "iana"
},
	"application/rpki-roa": {
	source: "iana",
	extensions: [
		"roa"
	]
},
	"application/rpki-updown": {
	source: "iana"
},
	"application/rsd+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"rsd"
	]
},
	"application/rss+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"rss"
	]
},
	"application/rtf": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtf"
	]
},
	"application/rtploopback": {
	source: "iana"
},
	"application/rtx": {
	source: "iana"
},
	"application/samlassertion+xml": {
	source: "iana",
	compressible: true
},
	"application/samlmetadata+xml": {
	source: "iana",
	compressible: true
},
	"application/sarif+json": {
	source: "iana",
	compressible: true
},
	"application/sarif-external-properties+json": {
	source: "iana",
	compressible: true
},
	"application/sbe": {
	source: "iana"
},
	"application/sbml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sbml"
	]
},
	"application/scaip+xml": {
	source: "iana",
	compressible: true
},
	"application/scim+json": {
	source: "iana",
	compressible: true
},
	"application/scvp-cv-request": {
	source: "iana",
	extensions: [
		"scq"
	]
},
	"application/scvp-cv-response": {
	source: "iana",
	extensions: [
		"scs"
	]
},
	"application/scvp-vp-request": {
	source: "iana",
	extensions: [
		"spq"
	]
},
	"application/scvp-vp-response": {
	source: "iana",
	extensions: [
		"spp"
	]
},
	"application/sdp": {
	source: "iana",
	extensions: [
		"sdp"
	]
},
	"application/secevent+jwt": {
	source: "iana"
},
	"application/senml+cbor": {
	source: "iana"
},
	"application/senml+json": {
	source: "iana",
	compressible: true
},
	"application/senml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"senmlx"
	]
},
	"application/senml-etch+cbor": {
	source: "iana"
},
	"application/senml-etch+json": {
	source: "iana",
	compressible: true
},
	"application/senml-exi": {
	source: "iana"
},
	"application/sensml+cbor": {
	source: "iana"
},
	"application/sensml+json": {
	source: "iana",
	compressible: true
},
	"application/sensml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sensmlx"
	]
},
	"application/sensml-exi": {
	source: "iana"
},
	"application/sep+xml": {
	source: "iana",
	compressible: true
},
	"application/sep-exi": {
	source: "iana"
},
	"application/session-info": {
	source: "iana"
},
	"application/set-payment": {
	source: "iana"
},
	"application/set-payment-initiation": {
	source: "iana",
	extensions: [
		"setpay"
	]
},
	"application/set-registration": {
	source: "iana"
},
	"application/set-registration-initiation": {
	source: "iana",
	extensions: [
		"setreg"
	]
},
	"application/sgml": {
	source: "iana"
},
	"application/sgml-open-catalog": {
	source: "iana"
},
	"application/shf+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"shf"
	]
},
	"application/sieve": {
	source: "iana",
	extensions: [
		"siv",
		"sieve"
	]
},
	"application/simple-filter+xml": {
	source: "iana",
	compressible: true
},
	"application/simple-message-summary": {
	source: "iana"
},
	"application/simplesymbolcontainer": {
	source: "iana"
},
	"application/sipc": {
	source: "iana"
},
	"application/slate": {
	source: "iana"
},
	"application/smil": {
	source: "iana"
},
	"application/smil+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"smi",
		"smil"
	]
},
	"application/smpte336m": {
	source: "iana"
},
	"application/soap+fastinfoset": {
	source: "iana"
},
	"application/soap+xml": {
	source: "iana",
	compressible: true
},
	"application/sparql-query": {
	source: "iana",
	extensions: [
		"rq"
	]
},
	"application/sparql-results+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"srx"
	]
},
	"application/spdx+json": {
	source: "iana",
	compressible: true
},
	"application/spirits-event+xml": {
	source: "iana",
	compressible: true
},
	"application/sql": {
	source: "iana"
},
	"application/srgs": {
	source: "iana",
	extensions: [
		"gram"
	]
},
	"application/srgs+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"grxml"
	]
},
	"application/sru+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sru"
	]
},
	"application/ssdl+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"ssdl"
	]
},
	"application/ssml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ssml"
	]
},
	"application/stix+json": {
	source: "iana",
	compressible: true
},
	"application/swid+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"swidtag"
	]
},
	"application/tamp-apex-update": {
	source: "iana"
},
	"application/tamp-apex-update-confirm": {
	source: "iana"
},
	"application/tamp-community-update": {
	source: "iana"
},
	"application/tamp-community-update-confirm": {
	source: "iana"
},
	"application/tamp-error": {
	source: "iana"
},
	"application/tamp-sequence-adjust": {
	source: "iana"
},
	"application/tamp-sequence-adjust-confirm": {
	source: "iana"
},
	"application/tamp-status-query": {
	source: "iana"
},
	"application/tamp-status-response": {
	source: "iana"
},
	"application/tamp-update": {
	source: "iana"
},
	"application/tamp-update-confirm": {
	source: "iana"
},
	"application/tar": {
	compressible: true
},
	"application/taxii+json": {
	source: "iana",
	compressible: true
},
	"application/td+json": {
	source: "iana",
	compressible: true
},
	"application/tei+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"tei",
		"teicorpus"
	]
},
	"application/tetra_isi": {
	source: "iana"
},
	"application/thraud+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"tfi"
	]
},
	"application/timestamp-query": {
	source: "iana"
},
	"application/timestamp-reply": {
	source: "iana"
},
	"application/timestamped-data": {
	source: "iana",
	extensions: [
		"tsd"
	]
},
	"application/tlsrpt+gzip": {
	source: "iana"
},
	"application/tlsrpt+json": {
	source: "iana",
	compressible: true
},
	"application/tnauthlist": {
	source: "iana"
},
	"application/token-introspection+jwt": {
	source: "iana"
},
	"application/toml": {
	compressible: true,
	extensions: [
		"toml"
	]
},
	"application/trickle-ice-sdpfrag": {
	source: "iana"
},
	"application/trig": {
	source: "iana",
	extensions: [
		"trig"
	]
},
	"application/ttml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ttml"
	]
},
	"application/tve-trigger": {
	source: "iana"
},
	"application/tzif": {
	source: "iana"
},
	"application/tzif-leap": {
	source: "iana"
},
	"application/ubjson": {
	compressible: false,
	extensions: [
		"ubj"
	]
},
	"application/ulpfec": {
	source: "iana"
},
	"application/urc-grpsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/urc-ressheet+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"rsheet"
	]
},
	"application/urc-targetdesc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"td"
	]
},
	"application/urc-uisocketdesc+xml": {
	source: "iana",
	compressible: true
},
	"application/vcard+json": {
	source: "iana",
	compressible: true
},
	"application/vcard+xml": {
	source: "iana",
	compressible: true
},
	"application/vemmi": {
	source: "iana"
},
	"application/vividence.scriptfile": {
	source: "apache"
},
	"application/vnd.1000minds.decision-model+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"1km"
	]
},
	"application/vnd.3gpp-prose+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp-prose-pc3ch+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp-v2x-local-service-information": {
	source: "iana"
},
	"application/vnd.3gpp.5gnas": {
	source: "iana"
},
	"application/vnd.3gpp.access-transfer-events+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.bsf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.gmop+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.gtpc": {
	source: "iana"
},
	"application/vnd.3gpp.interworking-data": {
	source: "iana"
},
	"application/vnd.3gpp.lpp": {
	source: "iana"
},
	"application/vnd.3gpp.mc-signalling-ear": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-payload": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-signalling": {
	source: "iana"
},
	"application/vnd.3gpp.mcdata-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcdata-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-floor-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-location-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-signed+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-ue-init-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcptt-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-affiliation-command+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-affiliation-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-location-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-service-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-transmission-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-ue-config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mcvideo-user-profile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.mid-call+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.ngap": {
	source: "iana"
},
	"application/vnd.3gpp.pfcp": {
	source: "iana"
},
	"application/vnd.3gpp.pic-bw-large": {
	source: "iana",
	extensions: [
		"plb"
	]
},
	"application/vnd.3gpp.pic-bw-small": {
	source: "iana",
	extensions: [
		"psb"
	]
},
	"application/vnd.3gpp.pic-bw-var": {
	source: "iana",
	extensions: [
		"pvb"
	]
},
	"application/vnd.3gpp.s1ap": {
	source: "iana"
},
	"application/vnd.3gpp.sms": {
	source: "iana"
},
	"application/vnd.3gpp.sms+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.srvcc-ext+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.srvcc-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.state-and-event-info+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp.ussd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp2.bcmcsinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.3gpp2.sms": {
	source: "iana"
},
	"application/vnd.3gpp2.tcap": {
	source: "iana",
	extensions: [
		"tcap"
	]
},
	"application/vnd.3lightssoftware.imagescal": {
	source: "iana"
},
	"application/vnd.3m.post-it-notes": {
	source: "iana",
	extensions: [
		"pwn"
	]
},
	"application/vnd.accpac.simply.aso": {
	source: "iana",
	extensions: [
		"aso"
	]
},
	"application/vnd.accpac.simply.imp": {
	source: "iana",
	extensions: [
		"imp"
	]
},
	"application/vnd.acucobol": {
	source: "iana",
	extensions: [
		"acu"
	]
},
	"application/vnd.acucorp": {
	source: "iana",
	extensions: [
		"atc",
		"acutc"
	]
},
	"application/vnd.adobe.air-application-installer-package+zip": {
	source: "apache",
	compressible: false,
	extensions: [
		"air"
	]
},
	"application/vnd.adobe.flash.movie": {
	source: "iana"
},
	"application/vnd.adobe.formscentral.fcdt": {
	source: "iana",
	extensions: [
		"fcdt"
	]
},
	"application/vnd.adobe.fxp": {
	source: "iana",
	extensions: [
		"fxp",
		"fxpl"
	]
},
	"application/vnd.adobe.partial-upload": {
	source: "iana"
},
	"application/vnd.adobe.xdp+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdp"
	]
},
	"application/vnd.adobe.xfdf": {
	source: "iana",
	extensions: [
		"xfdf"
	]
},
	"application/vnd.aether.imp": {
	source: "iana"
},
	"application/vnd.afpc.afplinedata": {
	source: "iana"
},
	"application/vnd.afpc.afplinedata-pagedef": {
	source: "iana"
},
	"application/vnd.afpc.cmoca-cmresource": {
	source: "iana"
},
	"application/vnd.afpc.foca-charset": {
	source: "iana"
},
	"application/vnd.afpc.foca-codedfont": {
	source: "iana"
},
	"application/vnd.afpc.foca-codepage": {
	source: "iana"
},
	"application/vnd.afpc.modca": {
	source: "iana"
},
	"application/vnd.afpc.modca-cmtable": {
	source: "iana"
},
	"application/vnd.afpc.modca-formdef": {
	source: "iana"
},
	"application/vnd.afpc.modca-mediummap": {
	source: "iana"
},
	"application/vnd.afpc.modca-objectcontainer": {
	source: "iana"
},
	"application/vnd.afpc.modca-overlay": {
	source: "iana"
},
	"application/vnd.afpc.modca-pagesegment": {
	source: "iana"
},
	"application/vnd.age": {
	source: "iana",
	extensions: [
		"age"
	]
},
	"application/vnd.ah-barcode": {
	source: "iana"
},
	"application/vnd.ahead.space": {
	source: "iana",
	extensions: [
		"ahead"
	]
},
	"application/vnd.airzip.filesecure.azf": {
	source: "iana",
	extensions: [
		"azf"
	]
},
	"application/vnd.airzip.filesecure.azs": {
	source: "iana",
	extensions: [
		"azs"
	]
},
	"application/vnd.amadeus+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.amazon.ebook": {
	source: "apache",
	extensions: [
		"azw"
	]
},
	"application/vnd.amazon.mobi8-ebook": {
	source: "iana"
},
	"application/vnd.americandynamics.acc": {
	source: "iana",
	extensions: [
		"acc"
	]
},
	"application/vnd.amiga.ami": {
	source: "iana",
	extensions: [
		"ami"
	]
},
	"application/vnd.amundsen.maze+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.android.ota": {
	source: "iana"
},
	"application/vnd.android.package-archive": {
	source: "apache",
	compressible: false,
	extensions: [
		"apk"
	]
},
	"application/vnd.anki": {
	source: "iana"
},
	"application/vnd.anser-web-certificate-issue-initiation": {
	source: "iana",
	extensions: [
		"cii"
	]
},
	"application/vnd.anser-web-funds-transfer-initiation": {
	source: "apache",
	extensions: [
		"fti"
	]
},
	"application/vnd.antix.game-component": {
	source: "iana",
	extensions: [
		"atx"
	]
},
	"application/vnd.apache.arrow.file": {
	source: "iana"
},
	"application/vnd.apache.arrow.stream": {
	source: "iana"
},
	"application/vnd.apache.thrift.binary": {
	source: "iana"
},
	"application/vnd.apache.thrift.compact": {
	source: "iana"
},
	"application/vnd.apache.thrift.json": {
	source: "iana"
},
	"application/vnd.api+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.aplextor.warrp+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.apothekende.reservation+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.apple.installer+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mpkg"
	]
},
	"application/vnd.apple.keynote": {
	source: "iana",
	extensions: [
		"key"
	]
},
	"application/vnd.apple.mpegurl": {
	source: "iana",
	extensions: [
		"m3u8"
	]
},
	"application/vnd.apple.numbers": {
	source: "iana",
	extensions: [
		"numbers"
	]
},
	"application/vnd.apple.pages": {
	source: "iana",
	extensions: [
		"pages"
	]
},
	"application/vnd.apple.pkpass": {
	compressible: false,
	extensions: [
		"pkpass"
	]
},
	"application/vnd.arastra.swi": {
	source: "iana"
},
	"application/vnd.aristanetworks.swi": {
	source: "iana",
	extensions: [
		"swi"
	]
},
	"application/vnd.artisan+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.artsquare": {
	source: "iana"
},
	"application/vnd.astraea-software.iota": {
	source: "iana",
	extensions: [
		"iota"
	]
},
	"application/vnd.audiograph": {
	source: "iana",
	extensions: [
		"aep"
	]
},
	"application/vnd.autopackage": {
	source: "iana"
},
	"application/vnd.avalon+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.avistar+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.balsamiq.bmml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"bmml"
	]
},
	"application/vnd.balsamiq.bmpr": {
	source: "iana"
},
	"application/vnd.banana-accounting": {
	source: "iana"
},
	"application/vnd.bbf.usp.error": {
	source: "iana"
},
	"application/vnd.bbf.usp.msg": {
	source: "iana"
},
	"application/vnd.bbf.usp.msg+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.bekitzur-stech+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.bint.med-content": {
	source: "iana"
},
	"application/vnd.biopax.rdf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.blink-idb-value-wrapper": {
	source: "iana"
},
	"application/vnd.blueice.multipass": {
	source: "iana",
	extensions: [
		"mpm"
	]
},
	"application/vnd.bluetooth.ep.oob": {
	source: "iana"
},
	"application/vnd.bluetooth.le.oob": {
	source: "iana"
},
	"application/vnd.bmi": {
	source: "iana",
	extensions: [
		"bmi"
	]
},
	"application/vnd.bpf": {
	source: "iana"
},
	"application/vnd.bpf3": {
	source: "iana"
},
	"application/vnd.businessobjects": {
	source: "iana",
	extensions: [
		"rep"
	]
},
	"application/vnd.byu.uapi+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cab-jscript": {
	source: "iana"
},
	"application/vnd.canon-cpdl": {
	source: "iana"
},
	"application/vnd.canon-lips": {
	source: "iana"
},
	"application/vnd.capasystems-pg+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cendio.thinlinc.clientconf": {
	source: "iana"
},
	"application/vnd.century-systems.tcp_stream": {
	source: "iana"
},
	"application/vnd.chemdraw+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"cdxml"
	]
},
	"application/vnd.chess-pgn": {
	source: "iana"
},
	"application/vnd.chipnuts.karaoke-mmd": {
	source: "iana",
	extensions: [
		"mmd"
	]
},
	"application/vnd.ciedi": {
	source: "iana"
},
	"application/vnd.cinderella": {
	source: "iana",
	extensions: [
		"cdy"
	]
},
	"application/vnd.cirpack.isdn-ext": {
	source: "iana"
},
	"application/vnd.citationstyles.style+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"csl"
	]
},
	"application/vnd.claymore": {
	source: "iana",
	extensions: [
		"cla"
	]
},
	"application/vnd.cloanto.rp9": {
	source: "iana",
	extensions: [
		"rp9"
	]
},
	"application/vnd.clonk.c4group": {
	source: "iana",
	extensions: [
		"c4g",
		"c4d",
		"c4f",
		"c4p",
		"c4u"
	]
},
	"application/vnd.cluetrust.cartomobile-config": {
	source: "iana",
	extensions: [
		"c11amc"
	]
},
	"application/vnd.cluetrust.cartomobile-config-pkg": {
	source: "iana",
	extensions: [
		"c11amz"
	]
},
	"application/vnd.coffeescript": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.document": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.document-template": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.presentation": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.presentation-template": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.spreadsheet": {
	source: "iana"
},
	"application/vnd.collabio.xodocuments.spreadsheet-template": {
	source: "iana"
},
	"application/vnd.collection+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.collection.doc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.collection.next+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.comicbook+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.comicbook-rar": {
	source: "iana"
},
	"application/vnd.commerce-battelle": {
	source: "iana"
},
	"application/vnd.commonspace": {
	source: "iana",
	extensions: [
		"csp"
	]
},
	"application/vnd.contact.cmsg": {
	source: "iana",
	extensions: [
		"cdbcmsg"
	]
},
	"application/vnd.coreos.ignition+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cosmocaller": {
	source: "iana",
	extensions: [
		"cmc"
	]
},
	"application/vnd.crick.clicker": {
	source: "iana",
	extensions: [
		"clkx"
	]
},
	"application/vnd.crick.clicker.keyboard": {
	source: "iana",
	extensions: [
		"clkk"
	]
},
	"application/vnd.crick.clicker.palette": {
	source: "iana",
	extensions: [
		"clkp"
	]
},
	"application/vnd.crick.clicker.template": {
	source: "iana",
	extensions: [
		"clkt"
	]
},
	"application/vnd.crick.clicker.wordbank": {
	source: "iana",
	extensions: [
		"clkw"
	]
},
	"application/vnd.criticaltools.wbs+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wbs"
	]
},
	"application/vnd.cryptii.pipe+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.crypto-shade-file": {
	source: "iana"
},
	"application/vnd.cryptomator.encrypted": {
	source: "iana"
},
	"application/vnd.cryptomator.vault": {
	source: "iana"
},
	"application/vnd.ctc-posml": {
	source: "iana",
	extensions: [
		"pml"
	]
},
	"application/vnd.ctct.ws+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.cups-pdf": {
	source: "iana"
},
	"application/vnd.cups-postscript": {
	source: "iana"
},
	"application/vnd.cups-ppd": {
	source: "iana",
	extensions: [
		"ppd"
	]
},
	"application/vnd.cups-raster": {
	source: "iana"
},
	"application/vnd.cups-raw": {
	source: "iana"
},
	"application/vnd.curl": {
	source: "iana"
},
	"application/vnd.curl.car": {
	source: "apache",
	extensions: [
		"car"
	]
},
	"application/vnd.curl.pcurl": {
	source: "apache",
	extensions: [
		"pcurl"
	]
},
	"application/vnd.cyan.dean.root+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.cybank": {
	source: "iana"
},
	"application/vnd.cyclonedx+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.cyclonedx+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.d2l.coursepackage1p0+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.d3m-dataset": {
	source: "iana"
},
	"application/vnd.d3m-problem": {
	source: "iana"
},
	"application/vnd.dart": {
	source: "iana",
	compressible: true,
	extensions: [
		"dart"
	]
},
	"application/vnd.data-vision.rdz": {
	source: "iana",
	extensions: [
		"rdz"
	]
},
	"application/vnd.datapackage+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dataresource+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dbf": {
	source: "iana",
	extensions: [
		"dbf"
	]
},
	"application/vnd.debian.binary-package": {
	source: "iana"
},
	"application/vnd.dece.data": {
	source: "iana",
	extensions: [
		"uvf",
		"uvvf",
		"uvd",
		"uvvd"
	]
},
	"application/vnd.dece.ttml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"uvt",
		"uvvt"
	]
},
	"application/vnd.dece.unspecified": {
	source: "iana",
	extensions: [
		"uvx",
		"uvvx"
	]
},
	"application/vnd.dece.zip": {
	source: "iana",
	extensions: [
		"uvz",
		"uvvz"
	]
},
	"application/vnd.denovo.fcselayout-link": {
	source: "iana",
	extensions: [
		"fe_launch"
	]
},
	"application/vnd.desmume.movie": {
	source: "iana"
},
	"application/vnd.dir-bi.plate-dl-nosuffix": {
	source: "iana"
},
	"application/vnd.dm.delegation+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dna": {
	source: "iana",
	extensions: [
		"dna"
	]
},
	"application/vnd.document+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.dolby.mlp": {
	source: "apache",
	extensions: [
		"mlp"
	]
},
	"application/vnd.dolby.mobile.1": {
	source: "iana"
},
	"application/vnd.dolby.mobile.2": {
	source: "iana"
},
	"application/vnd.doremir.scorecloud-binary-document": {
	source: "iana"
},
	"application/vnd.dpgraph": {
	source: "iana",
	extensions: [
		"dpg"
	]
},
	"application/vnd.dreamfactory": {
	source: "iana",
	extensions: [
		"dfac"
	]
},
	"application/vnd.drive+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ds-keypoint": {
	source: "apache",
	extensions: [
		"kpxx"
	]
},
	"application/vnd.dtg.local": {
	source: "iana"
},
	"application/vnd.dtg.local.flash": {
	source: "iana"
},
	"application/vnd.dtg.local.html": {
	source: "iana"
},
	"application/vnd.dvb.ait": {
	source: "iana",
	extensions: [
		"ait"
	]
},
	"application/vnd.dvb.dvbisl+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.dvbj": {
	source: "iana"
},
	"application/vnd.dvb.esgcontainer": {
	source: "iana"
},
	"application/vnd.dvb.ipdcdftnotifaccess": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgaccess": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgaccess2": {
	source: "iana"
},
	"application/vnd.dvb.ipdcesgpdd": {
	source: "iana"
},
	"application/vnd.dvb.ipdcroaming": {
	source: "iana"
},
	"application/vnd.dvb.iptv.alfec-base": {
	source: "iana"
},
	"application/vnd.dvb.iptv.alfec-enhancement": {
	source: "iana"
},
	"application/vnd.dvb.notif-aggregate-root+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-container+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-generic+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-msglist+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-registration-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-ia-registration-response+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.notif-init+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.dvb.pfr": {
	source: "iana"
},
	"application/vnd.dvb.service": {
	source: "iana",
	extensions: [
		"svc"
	]
},
	"application/vnd.dxr": {
	source: "iana"
},
	"application/vnd.dynageo": {
	source: "iana",
	extensions: [
		"geo"
	]
},
	"application/vnd.dzr": {
	source: "iana"
},
	"application/vnd.easykaraoke.cdgdownload": {
	source: "iana"
},
	"application/vnd.ecdis-update": {
	source: "iana"
},
	"application/vnd.ecip.rlp": {
	source: "iana"
},
	"application/vnd.eclipse.ditto+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ecowin.chart": {
	source: "iana",
	extensions: [
		"mag"
	]
},
	"application/vnd.ecowin.filerequest": {
	source: "iana"
},
	"application/vnd.ecowin.fileupdate": {
	source: "iana"
},
	"application/vnd.ecowin.series": {
	source: "iana"
},
	"application/vnd.ecowin.seriesrequest": {
	source: "iana"
},
	"application/vnd.ecowin.seriesupdate": {
	source: "iana"
},
	"application/vnd.efi.img": {
	source: "iana"
},
	"application/vnd.efi.iso": {
	source: "iana"
},
	"application/vnd.emclient.accessrequest+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.enliven": {
	source: "iana",
	extensions: [
		"nml"
	]
},
	"application/vnd.enphase.envoy": {
	source: "iana"
},
	"application/vnd.eprints.data+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.epson.esf": {
	source: "iana",
	extensions: [
		"esf"
	]
},
	"application/vnd.epson.msf": {
	source: "iana",
	extensions: [
		"msf"
	]
},
	"application/vnd.epson.quickanime": {
	source: "iana",
	extensions: [
		"qam"
	]
},
	"application/vnd.epson.salt": {
	source: "iana",
	extensions: [
		"slt"
	]
},
	"application/vnd.epson.ssf": {
	source: "iana",
	extensions: [
		"ssf"
	]
},
	"application/vnd.ericsson.quickcall": {
	source: "iana"
},
	"application/vnd.espass-espass+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.eszigno3+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"es3",
		"et3"
	]
},
	"application/vnd.etsi.aoc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.asic-e+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.etsi.asic-s+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.etsi.cug+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvcommand+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvdiscovery+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-bc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-cod+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsad-npvr+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvservice+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvsync+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.iptvueprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.mcid+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.mheg5": {
	source: "iana"
},
	"application/vnd.etsi.overload-control-policy-dataset+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.pstn+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.sci+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.simservs+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.timestamp-token": {
	source: "iana"
},
	"application/vnd.etsi.tsl+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.etsi.tsl.der": {
	source: "iana"
},
	"application/vnd.eu.kasparian.car+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.eudora.data": {
	source: "iana"
},
	"application/vnd.evolv.ecig.profile": {
	source: "iana"
},
	"application/vnd.evolv.ecig.settings": {
	source: "iana"
},
	"application/vnd.evolv.ecig.theme": {
	source: "iana"
},
	"application/vnd.exstream-empower+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.exstream-package": {
	source: "iana"
},
	"application/vnd.ezpix-album": {
	source: "iana",
	extensions: [
		"ez2"
	]
},
	"application/vnd.ezpix-package": {
	source: "iana",
	extensions: [
		"ez3"
	]
},
	"application/vnd.f-secure.mobile": {
	source: "iana"
},
	"application/vnd.familysearch.gedcom+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.fastcopy-disk-image": {
	source: "iana"
},
	"application/vnd.fdf": {
	source: "iana",
	extensions: [
		"fdf"
	]
},
	"application/vnd.fdsn.mseed": {
	source: "iana",
	extensions: [
		"mseed"
	]
},
	"application/vnd.fdsn.seed": {
	source: "iana",
	extensions: [
		"seed",
		"dataless"
	]
},
	"application/vnd.ffsns": {
	source: "iana"
},
	"application/vnd.ficlab.flb+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.filmit.zfc": {
	source: "iana"
},
	"application/vnd.fints": {
	source: "iana"
},
	"application/vnd.firemonkeys.cloudcell": {
	source: "iana"
},
	"application/vnd.flographit": {
	source: "iana",
	extensions: [
		"gph"
	]
},
	"application/vnd.fluxtime.clip": {
	source: "iana",
	extensions: [
		"ftc"
	]
},
	"application/vnd.font-fontforge-sfd": {
	source: "iana"
},
	"application/vnd.framemaker": {
	source: "iana",
	extensions: [
		"fm",
		"frame",
		"maker",
		"book"
	]
},
	"application/vnd.frogans.fnc": {
	source: "iana",
	extensions: [
		"fnc"
	]
},
	"application/vnd.frogans.ltf": {
	source: "iana",
	extensions: [
		"ltf"
	]
},
	"application/vnd.fsc.weblaunch": {
	source: "iana",
	extensions: [
		"fsc"
	]
},
	"application/vnd.fujifilm.fb.docuworks": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.docuworks.binder": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.docuworks.container": {
	source: "iana"
},
	"application/vnd.fujifilm.fb.jfi+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.fujitsu.oasys": {
	source: "iana",
	extensions: [
		"oas"
	]
},
	"application/vnd.fujitsu.oasys2": {
	source: "iana",
	extensions: [
		"oa2"
	]
},
	"application/vnd.fujitsu.oasys3": {
	source: "iana",
	extensions: [
		"oa3"
	]
},
	"application/vnd.fujitsu.oasysgp": {
	source: "iana",
	extensions: [
		"fg5"
	]
},
	"application/vnd.fujitsu.oasysprs": {
	source: "iana",
	extensions: [
		"bh2"
	]
},
	"application/vnd.fujixerox.art-ex": {
	source: "iana"
},
	"application/vnd.fujixerox.art4": {
	source: "iana"
},
	"application/vnd.fujixerox.ddd": {
	source: "iana",
	extensions: [
		"ddd"
	]
},
	"application/vnd.fujixerox.docuworks": {
	source: "iana",
	extensions: [
		"xdw"
	]
},
	"application/vnd.fujixerox.docuworks.binder": {
	source: "iana",
	extensions: [
		"xbd"
	]
},
	"application/vnd.fujixerox.docuworks.container": {
	source: "iana"
},
	"application/vnd.fujixerox.hbpl": {
	source: "iana"
},
	"application/vnd.fut-misnet": {
	source: "iana"
},
	"application/vnd.futoin+cbor": {
	source: "iana"
},
	"application/vnd.futoin+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.fuzzysheet": {
	source: "iana",
	extensions: [
		"fzs"
	]
},
	"application/vnd.genomatix.tuxedo": {
	source: "iana",
	extensions: [
		"txd"
	]
},
	"application/vnd.gentics.grd+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.geo+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.geocube+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.geogebra.file": {
	source: "iana",
	extensions: [
		"ggb"
	]
},
	"application/vnd.geogebra.slides": {
	source: "iana"
},
	"application/vnd.geogebra.tool": {
	source: "iana",
	extensions: [
		"ggt"
	]
},
	"application/vnd.geometry-explorer": {
	source: "iana",
	extensions: [
		"gex",
		"gre"
	]
},
	"application/vnd.geonext": {
	source: "iana",
	extensions: [
		"gxt"
	]
},
	"application/vnd.geoplan": {
	source: "iana",
	extensions: [
		"g2w"
	]
},
	"application/vnd.geospace": {
	source: "iana",
	extensions: [
		"g3w"
	]
},
	"application/vnd.gerber": {
	source: "iana"
},
	"application/vnd.globalplatform.card-content-mgt": {
	source: "iana"
},
	"application/vnd.globalplatform.card-content-mgt-response": {
	source: "iana"
},
	"application/vnd.gmx": {
	source: "iana",
	extensions: [
		"gmx"
	]
},
	"application/vnd.google-apps.document": {
	compressible: false,
	extensions: [
		"gdoc"
	]
},
	"application/vnd.google-apps.presentation": {
	compressible: false,
	extensions: [
		"gslides"
	]
},
	"application/vnd.google-apps.spreadsheet": {
	compressible: false,
	extensions: [
		"gsheet"
	]
},
	"application/vnd.google-earth.kml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"kml"
	]
},
	"application/vnd.google-earth.kmz": {
	source: "iana",
	compressible: false,
	extensions: [
		"kmz"
	]
},
	"application/vnd.gov.sk.e-form+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.gov.sk.e-form+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.gov.sk.xmldatacontainer+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.grafeq": {
	source: "iana",
	extensions: [
		"gqf",
		"gqs"
	]
},
	"application/vnd.gridmp": {
	source: "iana"
},
	"application/vnd.groove-account": {
	source: "iana",
	extensions: [
		"gac"
	]
},
	"application/vnd.groove-help": {
	source: "iana",
	extensions: [
		"ghf"
	]
},
	"application/vnd.groove-identity-message": {
	source: "iana",
	extensions: [
		"gim"
	]
},
	"application/vnd.groove-injector": {
	source: "iana",
	extensions: [
		"grv"
	]
},
	"application/vnd.groove-tool-message": {
	source: "iana",
	extensions: [
		"gtm"
	]
},
	"application/vnd.groove-tool-template": {
	source: "iana",
	extensions: [
		"tpl"
	]
},
	"application/vnd.groove-vcard": {
	source: "iana",
	extensions: [
		"vcg"
	]
},
	"application/vnd.hal+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hal+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"hal"
	]
},
	"application/vnd.handheld-entertainment+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"zmm"
	]
},
	"application/vnd.hbci": {
	source: "iana",
	extensions: [
		"hbci"
	]
},
	"application/vnd.hc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hcl-bireports": {
	source: "iana"
},
	"application/vnd.hdt": {
	source: "iana"
},
	"application/vnd.heroku+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hhe.lesson-player": {
	source: "iana",
	extensions: [
		"les"
	]
},
	"application/vnd.hl7cda+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.hl7v2+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.hp-hpgl": {
	source: "iana",
	extensions: [
		"hpgl"
	]
},
	"application/vnd.hp-hpid": {
	source: "iana",
	extensions: [
		"hpid"
	]
},
	"application/vnd.hp-hps": {
	source: "iana",
	extensions: [
		"hps"
	]
},
	"application/vnd.hp-jlyt": {
	source: "iana",
	extensions: [
		"jlt"
	]
},
	"application/vnd.hp-pcl": {
	source: "iana",
	extensions: [
		"pcl"
	]
},
	"application/vnd.hp-pclxl": {
	source: "iana",
	extensions: [
		"pclxl"
	]
},
	"application/vnd.httphone": {
	source: "iana"
},
	"application/vnd.hydrostatix.sof-data": {
	source: "iana",
	extensions: [
		"sfd-hdstx"
	]
},
	"application/vnd.hyper+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hyper-item+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hyperdrive+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.hzn-3d-crossword": {
	source: "iana"
},
	"application/vnd.ibm.afplinedata": {
	source: "iana"
},
	"application/vnd.ibm.electronic-media": {
	source: "iana"
},
	"application/vnd.ibm.minipay": {
	source: "iana",
	extensions: [
		"mpy"
	]
},
	"application/vnd.ibm.modcap": {
	source: "iana",
	extensions: [
		"afp",
		"listafp",
		"list3820"
	]
},
	"application/vnd.ibm.rights-management": {
	source: "iana",
	extensions: [
		"irm"
	]
},
	"application/vnd.ibm.secure-container": {
	source: "iana",
	extensions: [
		"sc"
	]
},
	"application/vnd.iccprofile": {
	source: "iana",
	extensions: [
		"icc",
		"icm"
	]
},
	"application/vnd.ieee.1905": {
	source: "iana"
},
	"application/vnd.igloader": {
	source: "iana",
	extensions: [
		"igl"
	]
},
	"application/vnd.imagemeter.folder+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.imagemeter.image+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.immervision-ivp": {
	source: "iana",
	extensions: [
		"ivp"
	]
},
	"application/vnd.immervision-ivu": {
	source: "iana",
	extensions: [
		"ivu"
	]
},
	"application/vnd.ims.imsccv1p1": {
	source: "iana"
},
	"application/vnd.ims.imsccv1p2": {
	source: "iana"
},
	"application/vnd.ims.imsccv1p3": {
	source: "iana"
},
	"application/vnd.ims.lis.v2.result+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolconsumerprofile+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolproxy+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolproxy.id+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolsettings+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ims.lti.v2.toolsettings.simple+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.informedcontrol.rms+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.informix-visionary": {
	source: "iana"
},
	"application/vnd.infotech.project": {
	source: "iana"
},
	"application/vnd.infotech.project+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.innopath.wamp.notification": {
	source: "iana"
},
	"application/vnd.insors.igm": {
	source: "iana",
	extensions: [
		"igm"
	]
},
	"application/vnd.intercon.formnet": {
	source: "iana",
	extensions: [
		"xpw",
		"xpx"
	]
},
	"application/vnd.intergeo": {
	source: "iana",
	extensions: [
		"i2g"
	]
},
	"application/vnd.intertrust.digibox": {
	source: "iana"
},
	"application/vnd.intertrust.nncp": {
	source: "iana"
},
	"application/vnd.intu.qbo": {
	source: "iana",
	extensions: [
		"qbo"
	]
},
	"application/vnd.intu.qfx": {
	source: "iana",
	extensions: [
		"qfx"
	]
},
	"application/vnd.iptc.g2.catalogitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.conceptitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.knowledgeitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.newsitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.newsmessage+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.packageitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.iptc.g2.planningitem+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ipunplugged.rcprofile": {
	source: "iana",
	extensions: [
		"rcprofile"
	]
},
	"application/vnd.irepository.package+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"irp"
	]
},
	"application/vnd.is-xpr": {
	source: "iana",
	extensions: [
		"xpr"
	]
},
	"application/vnd.isac.fcs": {
	source: "iana",
	extensions: [
		"fcs"
	]
},
	"application/vnd.iso11783-10+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.jam": {
	source: "iana",
	extensions: [
		"jam"
	]
},
	"application/vnd.japannet-directory-service": {
	source: "iana"
},
	"application/vnd.japannet-jpnstore-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-payment-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-registration": {
	source: "iana"
},
	"application/vnd.japannet-registration-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-setstore-wakeup": {
	source: "iana"
},
	"application/vnd.japannet-verification": {
	source: "iana"
},
	"application/vnd.japannet-verification-wakeup": {
	source: "iana"
},
	"application/vnd.jcp.javame.midlet-rms": {
	source: "iana",
	extensions: [
		"rms"
	]
},
	"application/vnd.jisp": {
	source: "iana",
	extensions: [
		"jisp"
	]
},
	"application/vnd.joost.joda-archive": {
	source: "iana",
	extensions: [
		"joda"
	]
},
	"application/vnd.jsk.isdn-ngn": {
	source: "iana"
},
	"application/vnd.kahootz": {
	source: "iana",
	extensions: [
		"ktz",
		"ktr"
	]
},
	"application/vnd.kde.karbon": {
	source: "iana",
	extensions: [
		"karbon"
	]
},
	"application/vnd.kde.kchart": {
	source: "iana",
	extensions: [
		"chrt"
	]
},
	"application/vnd.kde.kformula": {
	source: "iana",
	extensions: [
		"kfo"
	]
},
	"application/vnd.kde.kivio": {
	source: "iana",
	extensions: [
		"flw"
	]
},
	"application/vnd.kde.kontour": {
	source: "iana",
	extensions: [
		"kon"
	]
},
	"application/vnd.kde.kpresenter": {
	source: "iana",
	extensions: [
		"kpr",
		"kpt"
	]
},
	"application/vnd.kde.kspread": {
	source: "iana",
	extensions: [
		"ksp"
	]
},
	"application/vnd.kde.kword": {
	source: "iana",
	extensions: [
		"kwd",
		"kwt"
	]
},
	"application/vnd.kenameaapp": {
	source: "iana",
	extensions: [
		"htke"
	]
},
	"application/vnd.kidspiration": {
	source: "iana",
	extensions: [
		"kia"
	]
},
	"application/vnd.kinar": {
	source: "iana",
	extensions: [
		"kne",
		"knp"
	]
},
	"application/vnd.koan": {
	source: "iana",
	extensions: [
		"skp",
		"skd",
		"skt",
		"skm"
	]
},
	"application/vnd.kodak-descriptor": {
	source: "iana",
	extensions: [
		"sse"
	]
},
	"application/vnd.las": {
	source: "iana"
},
	"application/vnd.las.las+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.las.las+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lasxml"
	]
},
	"application/vnd.laszip": {
	source: "iana"
},
	"application/vnd.leap+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.liberty-request+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.llamagraphics.life-balance.desktop": {
	source: "iana",
	extensions: [
		"lbd"
	]
},
	"application/vnd.llamagraphics.life-balance.exchange+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"lbe"
	]
},
	"application/vnd.logipipe.circuit+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.loom": {
	source: "iana"
},
	"application/vnd.lotus-1-2-3": {
	source: "iana",
	extensions: [
		"123"
	]
},
	"application/vnd.lotus-approach": {
	source: "iana",
	extensions: [
		"apr"
	]
},
	"application/vnd.lotus-freelance": {
	source: "iana",
	extensions: [
		"pre"
	]
},
	"application/vnd.lotus-notes": {
	source: "iana",
	extensions: [
		"nsf"
	]
},
	"application/vnd.lotus-organizer": {
	source: "iana",
	extensions: [
		"org"
	]
},
	"application/vnd.lotus-screencam": {
	source: "iana",
	extensions: [
		"scm"
	]
},
	"application/vnd.lotus-wordpro": {
	source: "iana",
	extensions: [
		"lwp"
	]
},
	"application/vnd.macports.portpkg": {
	source: "iana",
	extensions: [
		"portpkg"
	]
},
	"application/vnd.mapbox-vector-tile": {
	source: "iana",
	extensions: [
		"mvt"
	]
},
	"application/vnd.marlin.drm.actiontoken+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.conftoken+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.license+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.marlin.drm.mdcf": {
	source: "iana"
},
	"application/vnd.mason+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.maxar.archive.3tz+zip": {
	source: "iana",
	compressible: false
},
	"application/vnd.maxmind.maxmind-db": {
	source: "iana"
},
	"application/vnd.mcd": {
	source: "iana",
	extensions: [
		"mcd"
	]
},
	"application/vnd.medcalcdata": {
	source: "iana",
	extensions: [
		"mc1"
	]
},
	"application/vnd.mediastation.cdkey": {
	source: "iana",
	extensions: [
		"cdkey"
	]
},
	"application/vnd.meridian-slingshot": {
	source: "iana"
},
	"application/vnd.mfer": {
	source: "iana",
	extensions: [
		"mwf"
	]
},
	"application/vnd.mfmp": {
	source: "iana",
	extensions: [
		"mfm"
	]
},
	"application/vnd.micro+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.micrografx.flo": {
	source: "iana",
	extensions: [
		"flo"
	]
},
	"application/vnd.micrografx.igx": {
	source: "iana",
	extensions: [
		"igx"
	]
},
	"application/vnd.microsoft.portable-executable": {
	source: "iana"
},
	"application/vnd.microsoft.windows.thumbnail-cache": {
	source: "iana"
},
	"application/vnd.miele+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.mif": {
	source: "iana",
	extensions: [
		"mif"
	]
},
	"application/vnd.minisoft-hp3000-save": {
	source: "iana"
},
	"application/vnd.mitsubishi.misty-guard.trustweb": {
	source: "iana"
},
	"application/vnd.mobius.daf": {
	source: "iana",
	extensions: [
		"daf"
	]
},
	"application/vnd.mobius.dis": {
	source: "iana",
	extensions: [
		"dis"
	]
},
	"application/vnd.mobius.mbk": {
	source: "iana",
	extensions: [
		"mbk"
	]
},
	"application/vnd.mobius.mqy": {
	source: "iana",
	extensions: [
		"mqy"
	]
},
	"application/vnd.mobius.msl": {
	source: "iana",
	extensions: [
		"msl"
	]
},
	"application/vnd.mobius.plc": {
	source: "iana",
	extensions: [
		"plc"
	]
},
	"application/vnd.mobius.txf": {
	source: "iana",
	extensions: [
		"txf"
	]
},
	"application/vnd.mophun.application": {
	source: "iana",
	extensions: [
		"mpn"
	]
},
	"application/vnd.mophun.certificate": {
	source: "iana",
	extensions: [
		"mpc"
	]
},
	"application/vnd.motorola.flexsuite": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.adsi": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.fis": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.gotap": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.kmr": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.ttc": {
	source: "iana"
},
	"application/vnd.motorola.flexsuite.wem": {
	source: "iana"
},
	"application/vnd.motorola.iprm": {
	source: "iana"
},
	"application/vnd.mozilla.xul+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xul"
	]
},
	"application/vnd.ms-3mfdocument": {
	source: "iana"
},
	"application/vnd.ms-artgalry": {
	source: "iana",
	extensions: [
		"cil"
	]
},
	"application/vnd.ms-asf": {
	source: "iana"
},
	"application/vnd.ms-cab-compressed": {
	source: "iana",
	extensions: [
		"cab"
	]
},
	"application/vnd.ms-color.iccprofile": {
	source: "apache"
},
	"application/vnd.ms-excel": {
	source: "iana",
	compressible: false,
	extensions: [
		"xls",
		"xlm",
		"xla",
		"xlc",
		"xlt",
		"xlw"
	]
},
	"application/vnd.ms-excel.addin.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlam"
	]
},
	"application/vnd.ms-excel.sheet.binary.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlsb"
	]
},
	"application/vnd.ms-excel.sheet.macroenabled.12": {
	source: "iana",
	extensions: [
		"xlsm"
	]
},
	"application/vnd.ms-excel.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"xltm"
	]
},
	"application/vnd.ms-fontobject": {
	source: "iana",
	compressible: true,
	extensions: [
		"eot"
	]
},
	"application/vnd.ms-htmlhelp": {
	source: "iana",
	extensions: [
		"chm"
	]
},
	"application/vnd.ms-ims": {
	source: "iana",
	extensions: [
		"ims"
	]
},
	"application/vnd.ms-lrm": {
	source: "iana",
	extensions: [
		"lrm"
	]
},
	"application/vnd.ms-office.activex+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-officetheme": {
	source: "iana",
	extensions: [
		"thmx"
	]
},
	"application/vnd.ms-opentype": {
	source: "apache",
	compressible: true
},
	"application/vnd.ms-outlook": {
	compressible: false,
	extensions: [
		"msg"
	]
},
	"application/vnd.ms-package.obfuscated-opentype": {
	source: "apache"
},
	"application/vnd.ms-pki.seccat": {
	source: "apache",
	extensions: [
		"cat"
	]
},
	"application/vnd.ms-pki.stl": {
	source: "apache",
	extensions: [
		"stl"
	]
},
	"application/vnd.ms-playready.initiator+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-powerpoint": {
	source: "iana",
	compressible: false,
	extensions: [
		"ppt",
		"pps",
		"pot"
	]
},
	"application/vnd.ms-powerpoint.addin.macroenabled.12": {
	source: "iana",
	extensions: [
		"ppam"
	]
},
	"application/vnd.ms-powerpoint.presentation.macroenabled.12": {
	source: "iana",
	extensions: [
		"pptm"
	]
},
	"application/vnd.ms-powerpoint.slide.macroenabled.12": {
	source: "iana",
	extensions: [
		"sldm"
	]
},
	"application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
	source: "iana",
	extensions: [
		"ppsm"
	]
},
	"application/vnd.ms-powerpoint.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"potm"
	]
},
	"application/vnd.ms-printdevicecapabilities+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-printing.printticket+xml": {
	source: "apache",
	compressible: true
},
	"application/vnd.ms-printschematicket+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.ms-project": {
	source: "iana",
	extensions: [
		"mpp",
		"mpt"
	]
},
	"application/vnd.ms-tnef": {
	source: "iana"
},
	"application/vnd.ms-windows.devicepairing": {
	source: "iana"
},
	"application/vnd.ms-windows.nwprinting.oob": {
	source: "iana"
},
	"application/vnd.ms-windows.printerpairing": {
	source: "iana"
},
	"application/vnd.ms-windows.wsd.oob": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.lic-chlg-req": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.lic-resp": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.meter-chlg-req": {
	source: "iana"
},
	"application/vnd.ms-wmdrm.meter-resp": {
	source: "iana"
},
	"application/vnd.ms-word.document.macroenabled.12": {
	source: "iana",
	extensions: [
		"docm"
	]
},
	"application/vnd.ms-word.template.macroenabled.12": {
	source: "iana",
	extensions: [
		"dotm"
	]
},
	"application/vnd.ms-works": {
	source: "iana",
	extensions: [
		"wps",
		"wks",
		"wcm",
		"wdb"
	]
},
	"application/vnd.ms-wpl": {
	source: "iana",
	extensions: [
		"wpl"
	]
},
	"application/vnd.ms-xpsdocument": {
	source: "iana",
	compressible: false,
	extensions: [
		"xps"
	]
},
	"application/vnd.msa-disk-image": {
	source: "iana"
},
	"application/vnd.mseq": {
	source: "iana",
	extensions: [
		"mseq"
	]
},
	"application/vnd.msign": {
	source: "iana"
},
	"application/vnd.multiad.creator": {
	source: "iana"
},
	"application/vnd.multiad.creator.cif": {
	source: "iana"
},
	"application/vnd.music-niff": {
	source: "iana"
},
	"application/vnd.musician": {
	source: "iana",
	extensions: [
		"mus"
	]
},
	"application/vnd.muvee.style": {
	source: "iana",
	extensions: [
		"msty"
	]
},
	"application/vnd.mynfc": {
	source: "iana",
	extensions: [
		"taglet"
	]
},
	"application/vnd.nacamar.ybrid+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.ncd.control": {
	source: "iana"
},
	"application/vnd.ncd.reference": {
	source: "iana"
},
	"application/vnd.nearst.inv+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.nebumind.line": {
	source: "iana"
},
	"application/vnd.nervana": {
	source: "iana"
},
	"application/vnd.netfpx": {
	source: "iana"
},
	"application/vnd.neurolanguage.nlu": {
	source: "iana",
	extensions: [
		"nlu"
	]
},
	"application/vnd.nimn": {
	source: "iana"
},
	"application/vnd.nintendo.nitro.rom": {
	source: "iana"
},
	"application/vnd.nintendo.snes.rom": {
	source: "iana"
},
	"application/vnd.nitf": {
	source: "iana",
	extensions: [
		"ntf",
		"nitf"
	]
},
	"application/vnd.noblenet-directory": {
	source: "iana",
	extensions: [
		"nnd"
	]
},
	"application/vnd.noblenet-sealer": {
	source: "iana",
	extensions: [
		"nns"
	]
},
	"application/vnd.noblenet-web": {
	source: "iana",
	extensions: [
		"nnw"
	]
},
	"application/vnd.nokia.catalogs": {
	source: "iana"
},
	"application/vnd.nokia.conml+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.conml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.iptv.config+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.isds-radio-presets": {
	source: "iana"
},
	"application/vnd.nokia.landmark+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.landmark+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.landmarkcollection+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.n-gage.ac+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"ac"
	]
},
	"application/vnd.nokia.n-gage.data": {
	source: "iana",
	extensions: [
		"ngdat"
	]
},
	"application/vnd.nokia.n-gage.symbian.install": {
	source: "iana",
	extensions: [
		"n-gage"
	]
},
	"application/vnd.nokia.ncd": {
	source: "iana"
},
	"application/vnd.nokia.pcd+wbxml": {
	source: "iana"
},
	"application/vnd.nokia.pcd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.nokia.radio-preset": {
	source: "iana",
	extensions: [
		"rpst"
	]
},
	"application/vnd.nokia.radio-presets": {
	source: "iana",
	extensions: [
		"rpss"
	]
},
	"application/vnd.novadigm.edm": {
	source: "iana",
	extensions: [
		"edm"
	]
},
	"application/vnd.novadigm.edx": {
	source: "iana",
	extensions: [
		"edx"
	]
},
	"application/vnd.novadigm.ext": {
	source: "iana",
	extensions: [
		"ext"
	]
},
	"application/vnd.ntt-local.content-share": {
	source: "iana"
},
	"application/vnd.ntt-local.file-transfer": {
	source: "iana"
},
	"application/vnd.ntt-local.ogw_remote-access": {
	source: "iana"
},
	"application/vnd.ntt-local.sip-ta_remote": {
	source: "iana"
},
	"application/vnd.ntt-local.sip-ta_tcp_stream": {
	source: "iana"
},
	"application/vnd.oasis.opendocument.chart": {
	source: "iana",
	extensions: [
		"odc"
	]
},
	"application/vnd.oasis.opendocument.chart-template": {
	source: "iana",
	extensions: [
		"otc"
	]
},
	"application/vnd.oasis.opendocument.database": {
	source: "iana",
	extensions: [
		"odb"
	]
},
	"application/vnd.oasis.opendocument.formula": {
	source: "iana",
	extensions: [
		"odf"
	]
},
	"application/vnd.oasis.opendocument.formula-template": {
	source: "iana",
	extensions: [
		"odft"
	]
},
	"application/vnd.oasis.opendocument.graphics": {
	source: "iana",
	compressible: false,
	extensions: [
		"odg"
	]
},
	"application/vnd.oasis.opendocument.graphics-template": {
	source: "iana",
	extensions: [
		"otg"
	]
},
	"application/vnd.oasis.opendocument.image": {
	source: "iana",
	extensions: [
		"odi"
	]
},
	"application/vnd.oasis.opendocument.image-template": {
	source: "iana",
	extensions: [
		"oti"
	]
},
	"application/vnd.oasis.opendocument.presentation": {
	source: "iana",
	compressible: false,
	extensions: [
		"odp"
	]
},
	"application/vnd.oasis.opendocument.presentation-template": {
	source: "iana",
	extensions: [
		"otp"
	]
},
	"application/vnd.oasis.opendocument.spreadsheet": {
	source: "iana",
	compressible: false,
	extensions: [
		"ods"
	]
},
	"application/vnd.oasis.opendocument.spreadsheet-template": {
	source: "iana",
	extensions: [
		"ots"
	]
},
	"application/vnd.oasis.opendocument.text": {
	source: "iana",
	compressible: false,
	extensions: [
		"odt"
	]
},
	"application/vnd.oasis.opendocument.text-master": {
	source: "iana",
	extensions: [
		"odm"
	]
},
	"application/vnd.oasis.opendocument.text-template": {
	source: "iana",
	extensions: [
		"ott"
	]
},
	"application/vnd.oasis.opendocument.text-web": {
	source: "iana",
	extensions: [
		"oth"
	]
},
	"application/vnd.obn": {
	source: "iana"
},
	"application/vnd.ocf+cbor": {
	source: "iana"
},
	"application/vnd.oci.image.manifest.v1+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oftn.l10n+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.contentaccessdownload+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.contentaccessstreaming+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.cspg-hexbinary": {
	source: "iana"
},
	"application/vnd.oipf.dae.svg+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.dae.xhtml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.mippvcontrolmessage+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.pae.gem": {
	source: "iana"
},
	"application/vnd.oipf.spdiscovery+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.spdlist+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.ueprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oipf.userprofile+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.olpc-sugar": {
	source: "iana",
	extensions: [
		"xo"
	]
},
	"application/vnd.oma-scws-config": {
	source: "iana"
},
	"application/vnd.oma-scws-http-request": {
	source: "iana"
},
	"application/vnd.oma-scws-http-response": {
	source: "iana"
},
	"application/vnd.oma.bcast.associated-procedure-parameter+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.drm-trigger+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.imd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.ltkm": {
	source: "iana"
},
	"application/vnd.oma.bcast.notification+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.provisioningtrigger": {
	source: "iana"
},
	"application/vnd.oma.bcast.sgboot": {
	source: "iana"
},
	"application/vnd.oma.bcast.sgdd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.sgdu": {
	source: "iana"
},
	"application/vnd.oma.bcast.simple-symbol-container": {
	source: "iana"
},
	"application/vnd.oma.bcast.smartcard-trigger+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.sprov+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.bcast.stkm": {
	source: "iana"
},
	"application/vnd.oma.cab-address-book+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-feature-handler+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-pcc+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-subs-invite+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.cab-user-prefs+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.dcd": {
	source: "iana"
},
	"application/vnd.oma.dcdc": {
	source: "iana"
},
	"application/vnd.oma.dd2+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dd2"
	]
},
	"application/vnd.oma.drm.risd+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.group-usage-list+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.lwm2m+cbor": {
	source: "iana"
},
	"application/vnd.oma.lwm2m+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.lwm2m+tlv": {
	source: "iana"
},
	"application/vnd.oma.pal+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.detailed-progress-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.final-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.groups+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.invocation-descriptor+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.poc.optimized-progress-report+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.push": {
	source: "iana"
},
	"application/vnd.oma.scidm.messages+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oma.xcap-directory+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.omads-email+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omads-file+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omads-folder+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.omaloc-supl-init": {
	source: "iana"
},
	"application/vnd.onepager": {
	source: "iana"
},
	"application/vnd.onepagertamp": {
	source: "iana"
},
	"application/vnd.onepagertamx": {
	source: "iana"
},
	"application/vnd.onepagertat": {
	source: "iana"
},
	"application/vnd.onepagertatp": {
	source: "iana"
},
	"application/vnd.onepagertatx": {
	source: "iana"
},
	"application/vnd.openblox.game+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"obgx"
	]
},
	"application/vnd.openblox.game-binary": {
	source: "iana"
},
	"application/vnd.openeye.oeb": {
	source: "iana"
},
	"application/vnd.openofficeorg.extension": {
	source: "apache",
	extensions: [
		"oxt"
	]
},
	"application/vnd.openstreetmap.data+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"osm"
	]
},
	"application/vnd.opentimestamps.ots": {
	source: "iana"
},
	"application/vnd.openxmlformats-officedocument.custom-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawing+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.extended-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.presentation": {
	source: "iana",
	compressible: false,
	extensions: [
		"pptx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slide": {
	source: "iana",
	extensions: [
		"sldx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
	source: "iana",
	extensions: [
		"ppsx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.template": {
	source: "iana",
	extensions: [
		"potx"
	]
},
	"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
	source: "iana",
	compressible: false,
	extensions: [
		"xlsx"
	]
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
	source: "iana",
	extensions: [
		"xltx"
	]
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.theme+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.themeoverride+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.vmldrawing": {
	source: "iana"
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
	source: "iana",
	compressible: false,
	extensions: [
		"docx"
	]
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
	source: "iana",
	extensions: [
		"dotx"
	]
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.core-properties+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.openxmlformats-package.relationships+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oracle.resource+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.orange.indata": {
	source: "iana"
},
	"application/vnd.osa.netdeploy": {
	source: "iana"
},
	"application/vnd.osgeo.mapguide.package": {
	source: "iana",
	extensions: [
		"mgp"
	]
},
	"application/vnd.osgi.bundle": {
	source: "iana"
},
	"application/vnd.osgi.dp": {
	source: "iana",
	extensions: [
		"dp"
	]
},
	"application/vnd.osgi.subsystem": {
	source: "iana",
	extensions: [
		"esa"
	]
},
	"application/vnd.otps.ct-kip+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.oxli.countgraph": {
	source: "iana"
},
	"application/vnd.pagerduty+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.palm": {
	source: "iana",
	extensions: [
		"pdb",
		"pqa",
		"oprc"
	]
},
	"application/vnd.panoply": {
	source: "iana"
},
	"application/vnd.paos.xml": {
	source: "iana"
},
	"application/vnd.patentdive": {
	source: "iana"
},
	"application/vnd.patientecommsdoc": {
	source: "iana"
},
	"application/vnd.pawaafile": {
	source: "iana",
	extensions: [
		"paw"
	]
},
	"application/vnd.pcos": {
	source: "iana"
},
	"application/vnd.pg.format": {
	source: "iana",
	extensions: [
		"str"
	]
},
	"application/vnd.pg.osasli": {
	source: "iana",
	extensions: [
		"ei6"
	]
},
	"application/vnd.piaccess.application-licence": {
	source: "iana"
},
	"application/vnd.picsel": {
	source: "iana",
	extensions: [
		"efif"
	]
},
	"application/vnd.pmi.widget": {
	source: "iana",
	extensions: [
		"wg"
	]
},
	"application/vnd.poc.group-advertisement+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.pocketlearn": {
	source: "iana",
	extensions: [
		"plf"
	]
},
	"application/vnd.powerbuilder6": {
	source: "iana",
	extensions: [
		"pbd"
	]
},
	"application/vnd.powerbuilder6-s": {
	source: "iana"
},
	"application/vnd.powerbuilder7": {
	source: "iana"
},
	"application/vnd.powerbuilder7-s": {
	source: "iana"
},
	"application/vnd.powerbuilder75": {
	source: "iana"
},
	"application/vnd.powerbuilder75-s": {
	source: "iana"
},
	"application/vnd.preminet": {
	source: "iana"
},
	"application/vnd.previewsystems.box": {
	source: "iana",
	extensions: [
		"box"
	]
},
	"application/vnd.proteus.magazine": {
	source: "iana",
	extensions: [
		"mgz"
	]
},
	"application/vnd.psfs": {
	source: "iana"
},
	"application/vnd.publishare-delta-tree": {
	source: "iana",
	extensions: [
		"qps"
	]
},
	"application/vnd.pvi.ptid1": {
	source: "iana",
	extensions: [
		"ptid"
	]
},
	"application/vnd.pwg-multiplexed": {
	source: "iana"
},
	"application/vnd.pwg-xhtml-print+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.qualcomm.brew-app-res": {
	source: "iana"
},
	"application/vnd.quarantainenet": {
	source: "iana"
},
	"application/vnd.quark.quarkxpress": {
	source: "iana",
	extensions: [
		"qxd",
		"qxt",
		"qwd",
		"qwt",
		"qxl",
		"qxb"
	]
},
	"application/vnd.quobject-quoxdocument": {
	source: "iana"
},
	"application/vnd.radisys.moml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-conf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-conn+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-dialog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-audit-stream+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-conf+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-base+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-fax-detect+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-group+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-speech+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.radisys.msml-dialog-transform+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.rainstor.data": {
	source: "iana"
},
	"application/vnd.rapid": {
	source: "iana"
},
	"application/vnd.rar": {
	source: "iana",
	extensions: [
		"rar"
	]
},
	"application/vnd.realvnc.bed": {
	source: "iana",
	extensions: [
		"bed"
	]
},
	"application/vnd.recordare.musicxml": {
	source: "iana",
	extensions: [
		"mxl"
	]
},
	"application/vnd.recordare.musicxml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"musicxml"
	]
},
	"application/vnd.renlearn.rlprint": {
	source: "iana"
},
	"application/vnd.resilient.logic": {
	source: "iana"
},
	"application/vnd.restful+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.rig.cryptonote": {
	source: "iana",
	extensions: [
		"cryptonote"
	]
},
	"application/vnd.rim.cod": {
	source: "apache",
	extensions: [
		"cod"
	]
},
	"application/vnd.rn-realmedia": {
	source: "apache",
	extensions: [
		"rm"
	]
},
	"application/vnd.rn-realmedia-vbr": {
	source: "apache",
	extensions: [
		"rmvb"
	]
},
	"application/vnd.route66.link66+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"link66"
	]
},
	"application/vnd.rs-274x": {
	source: "iana"
},
	"application/vnd.ruckus.download": {
	source: "iana"
},
	"application/vnd.s3sms": {
	source: "iana"
},
	"application/vnd.sailingtracker.track": {
	source: "iana",
	extensions: [
		"st"
	]
},
	"application/vnd.sar": {
	source: "iana"
},
	"application/vnd.sbm.cid": {
	source: "iana"
},
	"application/vnd.sbm.mid2": {
	source: "iana"
},
	"application/vnd.scribus": {
	source: "iana"
},
	"application/vnd.sealed.3df": {
	source: "iana"
},
	"application/vnd.sealed.csf": {
	source: "iana"
},
	"application/vnd.sealed.doc": {
	source: "iana"
},
	"application/vnd.sealed.eml": {
	source: "iana"
},
	"application/vnd.sealed.mht": {
	source: "iana"
},
	"application/vnd.sealed.net": {
	source: "iana"
},
	"application/vnd.sealed.ppt": {
	source: "iana"
},
	"application/vnd.sealed.tiff": {
	source: "iana"
},
	"application/vnd.sealed.xls": {
	source: "iana"
},
	"application/vnd.sealedmedia.softseal.html": {
	source: "iana"
},
	"application/vnd.sealedmedia.softseal.pdf": {
	source: "iana"
},
	"application/vnd.seemail": {
	source: "iana",
	extensions: [
		"see"
	]
},
	"application/vnd.seis+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.sema": {
	source: "iana",
	extensions: [
		"sema"
	]
},
	"application/vnd.semd": {
	source: "iana",
	extensions: [
		"semd"
	]
},
	"application/vnd.semf": {
	source: "iana",
	extensions: [
		"semf"
	]
},
	"application/vnd.shade-save-file": {
	source: "iana"
},
	"application/vnd.shana.informed.formdata": {
	source: "iana",
	extensions: [
		"ifm"
	]
},
	"application/vnd.shana.informed.formtemplate": {
	source: "iana",
	extensions: [
		"itp"
	]
},
	"application/vnd.shana.informed.interchange": {
	source: "iana",
	extensions: [
		"iif"
	]
},
	"application/vnd.shana.informed.package": {
	source: "iana",
	extensions: [
		"ipk"
	]
},
	"application/vnd.shootproof+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.shopkick+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.shp": {
	source: "iana"
},
	"application/vnd.shx": {
	source: "iana"
},
	"application/vnd.sigrok.session": {
	source: "iana"
},
	"application/vnd.simtech-mindmapper": {
	source: "iana",
	extensions: [
		"twd",
		"twds"
	]
},
	"application/vnd.siren+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.smaf": {
	source: "iana",
	extensions: [
		"mmf"
	]
},
	"application/vnd.smart.notebook": {
	source: "iana"
},
	"application/vnd.smart.teacher": {
	source: "iana",
	extensions: [
		"teacher"
	]
},
	"application/vnd.snesdev-page-table": {
	source: "iana"
},
	"application/vnd.software602.filler.form+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"fo"
	]
},
	"application/vnd.software602.filler.form-xml-zip": {
	source: "iana"
},
	"application/vnd.solent.sdkm+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"sdkm",
		"sdkd"
	]
},
	"application/vnd.spotfire.dxp": {
	source: "iana",
	extensions: [
		"dxp"
	]
},
	"application/vnd.spotfire.sfs": {
	source: "iana",
	extensions: [
		"sfs"
	]
},
	"application/vnd.sqlite3": {
	source: "iana"
},
	"application/vnd.sss-cod": {
	source: "iana"
},
	"application/vnd.sss-dtf": {
	source: "iana"
},
	"application/vnd.sss-ntf": {
	source: "iana"
},
	"application/vnd.stardivision.calc": {
	source: "apache",
	extensions: [
		"sdc"
	]
},
	"application/vnd.stardivision.draw": {
	source: "apache",
	extensions: [
		"sda"
	]
},
	"application/vnd.stardivision.impress": {
	source: "apache",
	extensions: [
		"sdd"
	]
},
	"application/vnd.stardivision.math": {
	source: "apache",
	extensions: [
		"smf"
	]
},
	"application/vnd.stardivision.writer": {
	source: "apache",
	extensions: [
		"sdw",
		"vor"
	]
},
	"application/vnd.stardivision.writer-global": {
	source: "apache",
	extensions: [
		"sgl"
	]
},
	"application/vnd.stepmania.package": {
	source: "iana",
	extensions: [
		"smzip"
	]
},
	"application/vnd.stepmania.stepchart": {
	source: "iana",
	extensions: [
		"sm"
	]
},
	"application/vnd.street-stream": {
	source: "iana"
},
	"application/vnd.sun.wadl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wadl"
	]
},
	"application/vnd.sun.xml.calc": {
	source: "apache",
	extensions: [
		"sxc"
	]
},
	"application/vnd.sun.xml.calc.template": {
	source: "apache",
	extensions: [
		"stc"
	]
},
	"application/vnd.sun.xml.draw": {
	source: "apache",
	extensions: [
		"sxd"
	]
},
	"application/vnd.sun.xml.draw.template": {
	source: "apache",
	extensions: [
		"std"
	]
},
	"application/vnd.sun.xml.impress": {
	source: "apache",
	extensions: [
		"sxi"
	]
},
	"application/vnd.sun.xml.impress.template": {
	source: "apache",
	extensions: [
		"sti"
	]
},
	"application/vnd.sun.xml.math": {
	source: "apache",
	extensions: [
		"sxm"
	]
},
	"application/vnd.sun.xml.writer": {
	source: "apache",
	extensions: [
		"sxw"
	]
},
	"application/vnd.sun.xml.writer.global": {
	source: "apache",
	extensions: [
		"sxg"
	]
},
	"application/vnd.sun.xml.writer.template": {
	source: "apache",
	extensions: [
		"stw"
	]
},
	"application/vnd.sus-calendar": {
	source: "iana",
	extensions: [
		"sus",
		"susp"
	]
},
	"application/vnd.svd": {
	source: "iana",
	extensions: [
		"svd"
	]
},
	"application/vnd.swiftview-ics": {
	source: "iana"
},
	"application/vnd.sycle+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.syft+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.symbian.install": {
	source: "apache",
	extensions: [
		"sis",
		"sisx"
	]
},
	"application/vnd.syncml+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"xsm"
	]
},
	"application/vnd.syncml.dm+wbxml": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"bdm"
	]
},
	"application/vnd.syncml.dm+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"xdm"
	]
},
	"application/vnd.syncml.dm.notification": {
	source: "iana"
},
	"application/vnd.syncml.dmddf+wbxml": {
	source: "iana"
},
	"application/vnd.syncml.dmddf+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"ddf"
	]
},
	"application/vnd.syncml.dmtnds+wbxml": {
	source: "iana"
},
	"application/vnd.syncml.dmtnds+xml": {
	source: "iana",
	charset: "UTF-8",
	compressible: true
},
	"application/vnd.syncml.ds.notification": {
	source: "iana"
},
	"application/vnd.tableschema+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.tao.intent-module-archive": {
	source: "iana",
	extensions: [
		"tao"
	]
},
	"application/vnd.tcpdump.pcap": {
	source: "iana",
	extensions: [
		"pcap",
		"cap",
		"dmp"
	]
},
	"application/vnd.think-cell.ppttc+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.tmd.mediaflex.api+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.tml": {
	source: "iana"
},
	"application/vnd.tmobile-livetv": {
	source: "iana",
	extensions: [
		"tmo"
	]
},
	"application/vnd.tri.onesource": {
	source: "iana"
},
	"application/vnd.trid.tpt": {
	source: "iana",
	extensions: [
		"tpt"
	]
},
	"application/vnd.triscape.mxs": {
	source: "iana",
	extensions: [
		"mxs"
	]
},
	"application/vnd.trueapp": {
	source: "iana",
	extensions: [
		"tra"
	]
},
	"application/vnd.truedoc": {
	source: "iana"
},
	"application/vnd.ubisoft.webplayer": {
	source: "iana"
},
	"application/vnd.ufdl": {
	source: "iana",
	extensions: [
		"ufd",
		"ufdl"
	]
},
	"application/vnd.uiq.theme": {
	source: "iana",
	extensions: [
		"utz"
	]
},
	"application/vnd.umajin": {
	source: "iana",
	extensions: [
		"umj"
	]
},
	"application/vnd.unity": {
	source: "iana",
	extensions: [
		"unityweb"
	]
},
	"application/vnd.uoml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"uoml"
	]
},
	"application/vnd.uplanet.alert": {
	source: "iana"
},
	"application/vnd.uplanet.alert-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.bearer-choice": {
	source: "iana"
},
	"application/vnd.uplanet.bearer-choice-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.cacheop": {
	source: "iana"
},
	"application/vnd.uplanet.cacheop-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.channel": {
	source: "iana"
},
	"application/vnd.uplanet.channel-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.list": {
	source: "iana"
},
	"application/vnd.uplanet.list-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.listcmd": {
	source: "iana"
},
	"application/vnd.uplanet.listcmd-wbxml": {
	source: "iana"
},
	"application/vnd.uplanet.signal": {
	source: "iana"
},
	"application/vnd.uri-map": {
	source: "iana"
},
	"application/vnd.valve.source.material": {
	source: "iana"
},
	"application/vnd.vcx": {
	source: "iana",
	extensions: [
		"vcx"
	]
},
	"application/vnd.vd-study": {
	source: "iana"
},
	"application/vnd.vectorworks": {
	source: "iana"
},
	"application/vnd.vel+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.verimatrix.vcas": {
	source: "iana"
},
	"application/vnd.veritone.aion+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.veryant.thin": {
	source: "iana"
},
	"application/vnd.ves.encrypted": {
	source: "iana"
},
	"application/vnd.vidsoft.vidconference": {
	source: "iana"
},
	"application/vnd.visio": {
	source: "iana",
	extensions: [
		"vsd",
		"vst",
		"vss",
		"vsw"
	]
},
	"application/vnd.visionary": {
	source: "iana",
	extensions: [
		"vis"
	]
},
	"application/vnd.vividence.scriptfile": {
	source: "iana"
},
	"application/vnd.vsf": {
	source: "iana",
	extensions: [
		"vsf"
	]
},
	"application/vnd.wap.sic": {
	source: "iana"
},
	"application/vnd.wap.slc": {
	source: "iana"
},
	"application/vnd.wap.wbxml": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"wbxml"
	]
},
	"application/vnd.wap.wmlc": {
	source: "iana",
	extensions: [
		"wmlc"
	]
},
	"application/vnd.wap.wmlscriptc": {
	source: "iana",
	extensions: [
		"wmlsc"
	]
},
	"application/vnd.webturbo": {
	source: "iana",
	extensions: [
		"wtb"
	]
},
	"application/vnd.wfa.dpp": {
	source: "iana"
},
	"application/vnd.wfa.p2p": {
	source: "iana"
},
	"application/vnd.wfa.wsc": {
	source: "iana"
},
	"application/vnd.windows.devicepairing": {
	source: "iana"
},
	"application/vnd.wmc": {
	source: "iana"
},
	"application/vnd.wmf.bootstrap": {
	source: "iana"
},
	"application/vnd.wolfram.mathematica": {
	source: "iana"
},
	"application/vnd.wolfram.mathematica.package": {
	source: "iana"
},
	"application/vnd.wolfram.player": {
	source: "iana",
	extensions: [
		"nbp"
	]
},
	"application/vnd.wordperfect": {
	source: "iana",
	extensions: [
		"wpd"
	]
},
	"application/vnd.wqd": {
	source: "iana",
	extensions: [
		"wqd"
	]
},
	"application/vnd.wrq-hp3000-labelled": {
	source: "iana"
},
	"application/vnd.wt.stf": {
	source: "iana",
	extensions: [
		"stf"
	]
},
	"application/vnd.wv.csp+wbxml": {
	source: "iana"
},
	"application/vnd.wv.csp+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.wv.ssp+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.xacml+json": {
	source: "iana",
	compressible: true
},
	"application/vnd.xara": {
	source: "iana",
	extensions: [
		"xar"
	]
},
	"application/vnd.xfdl": {
	source: "iana",
	extensions: [
		"xfdl"
	]
},
	"application/vnd.xfdl.webform": {
	source: "iana"
},
	"application/vnd.xmi+xml": {
	source: "iana",
	compressible: true
},
	"application/vnd.xmpie.cpkg": {
	source: "iana"
},
	"application/vnd.xmpie.dpkg": {
	source: "iana"
},
	"application/vnd.xmpie.plan": {
	source: "iana"
},
	"application/vnd.xmpie.ppkg": {
	source: "iana"
},
	"application/vnd.xmpie.xlim": {
	source: "iana"
},
	"application/vnd.yamaha.hv-dic": {
	source: "iana",
	extensions: [
		"hvd"
	]
},
	"application/vnd.yamaha.hv-script": {
	source: "iana",
	extensions: [
		"hvs"
	]
},
	"application/vnd.yamaha.hv-voice": {
	source: "iana",
	extensions: [
		"hvp"
	]
},
	"application/vnd.yamaha.openscoreformat": {
	source: "iana",
	extensions: [
		"osf"
	]
},
	"application/vnd.yamaha.openscoreformat.osfpvg+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"osfpvg"
	]
},
	"application/vnd.yamaha.remote-setup": {
	source: "iana"
},
	"application/vnd.yamaha.smaf-audio": {
	source: "iana",
	extensions: [
		"saf"
	]
},
	"application/vnd.yamaha.smaf-phrase": {
	source: "iana",
	extensions: [
		"spf"
	]
},
	"application/vnd.yamaha.through-ngn": {
	source: "iana"
},
	"application/vnd.yamaha.tunnel-udpencap": {
	source: "iana"
},
	"application/vnd.yaoweme": {
	source: "iana"
},
	"application/vnd.yellowriver-custom-menu": {
	source: "iana",
	extensions: [
		"cmp"
	]
},
	"application/vnd.youtube.yt": {
	source: "iana"
},
	"application/vnd.zul": {
	source: "iana",
	extensions: [
		"zir",
		"zirz"
	]
},
	"application/vnd.zzazz.deck+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"zaz"
	]
},
	"application/voicexml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"vxml"
	]
},
	"application/voucher-cms+json": {
	source: "iana",
	compressible: true
},
	"application/vq-rtcpxr": {
	source: "iana"
},
	"application/wasm": {
	source: "iana",
	compressible: true,
	extensions: [
		"wasm"
	]
},
	"application/watcherinfo+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wif"
	]
},
	"application/webpush-options+json": {
	source: "iana",
	compressible: true
},
	"application/whoispp-query": {
	source: "iana"
},
	"application/whoispp-response": {
	source: "iana"
},
	"application/widget": {
	source: "iana",
	extensions: [
		"wgt"
	]
},
	"application/winhlp": {
	source: "apache",
	extensions: [
		"hlp"
	]
},
	"application/wita": {
	source: "iana"
},
	"application/wordperfect5.1": {
	source: "iana"
},
	"application/wsdl+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wsdl"
	]
},
	"application/wspolicy+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"wspolicy"
	]
},
	"application/x-7z-compressed": {
	source: "apache",
	compressible: false,
	extensions: [
		"7z"
	]
},
	"application/x-abiword": {
	source: "apache",
	extensions: [
		"abw"
	]
},
	"application/x-ace-compressed": {
	source: "apache",
	extensions: [
		"ace"
	]
},
	"application/x-amf": {
	source: "apache"
},
	"application/x-apple-diskimage": {
	source: "apache",
	extensions: [
		"dmg"
	]
},
	"application/x-arj": {
	compressible: false,
	extensions: [
		"arj"
	]
},
	"application/x-authorware-bin": {
	source: "apache",
	extensions: [
		"aab",
		"x32",
		"u32",
		"vox"
	]
},
	"application/x-authorware-map": {
	source: "apache",
	extensions: [
		"aam"
	]
},
	"application/x-authorware-seg": {
	source: "apache",
	extensions: [
		"aas"
	]
},
	"application/x-bcpio": {
	source: "apache",
	extensions: [
		"bcpio"
	]
},
	"application/x-bdoc": {
	compressible: false,
	extensions: [
		"bdoc"
	]
},
	"application/x-bittorrent": {
	source: "apache",
	extensions: [
		"torrent"
	]
},
	"application/x-blorb": {
	source: "apache",
	extensions: [
		"blb",
		"blorb"
	]
},
	"application/x-bzip": {
	source: "apache",
	compressible: false,
	extensions: [
		"bz"
	]
},
	"application/x-bzip2": {
	source: "apache",
	compressible: false,
	extensions: [
		"bz2",
		"boz"
	]
},
	"application/x-cbr": {
	source: "apache",
	extensions: [
		"cbr",
		"cba",
		"cbt",
		"cbz",
		"cb7"
	]
},
	"application/x-cdlink": {
	source: "apache",
	extensions: [
		"vcd"
	]
},
	"application/x-cfs-compressed": {
	source: "apache",
	extensions: [
		"cfs"
	]
},
	"application/x-chat": {
	source: "apache",
	extensions: [
		"chat"
	]
},
	"application/x-chess-pgn": {
	source: "apache",
	extensions: [
		"pgn"
	]
},
	"application/x-chrome-extension": {
	extensions: [
		"crx"
	]
},
	"application/x-cocoa": {
	source: "nginx",
	extensions: [
		"cco"
	]
},
	"application/x-compress": {
	source: "apache"
},
	"application/x-conference": {
	source: "apache",
	extensions: [
		"nsc"
	]
},
	"application/x-cpio": {
	source: "apache",
	extensions: [
		"cpio"
	]
},
	"application/x-csh": {
	source: "apache",
	extensions: [
		"csh"
	]
},
	"application/x-deb": {
	compressible: false
},
	"application/x-debian-package": {
	source: "apache",
	extensions: [
		"deb",
		"udeb"
	]
},
	"application/x-dgc-compressed": {
	source: "apache",
	extensions: [
		"dgc"
	]
},
	"application/x-director": {
	source: "apache",
	extensions: [
		"dir",
		"dcr",
		"dxr",
		"cst",
		"cct",
		"cxt",
		"w3d",
		"fgd",
		"swa"
	]
},
	"application/x-doom": {
	source: "apache",
	extensions: [
		"wad"
	]
},
	"application/x-dtbncx+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"ncx"
	]
},
	"application/x-dtbook+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"dtb"
	]
},
	"application/x-dtbresource+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"res"
	]
},
	"application/x-dvi": {
	source: "apache",
	compressible: false,
	extensions: [
		"dvi"
	]
},
	"application/x-envoy": {
	source: "apache",
	extensions: [
		"evy"
	]
},
	"application/x-eva": {
	source: "apache",
	extensions: [
		"eva"
	]
},
	"application/x-font-bdf": {
	source: "apache",
	extensions: [
		"bdf"
	]
},
	"application/x-font-dos": {
	source: "apache"
},
	"application/x-font-framemaker": {
	source: "apache"
},
	"application/x-font-ghostscript": {
	source: "apache",
	extensions: [
		"gsf"
	]
},
	"application/x-font-libgrx": {
	source: "apache"
},
	"application/x-font-linux-psf": {
	source: "apache",
	extensions: [
		"psf"
	]
},
	"application/x-font-pcf": {
	source: "apache",
	extensions: [
		"pcf"
	]
},
	"application/x-font-snf": {
	source: "apache",
	extensions: [
		"snf"
	]
},
	"application/x-font-speedo": {
	source: "apache"
},
	"application/x-font-sunos-news": {
	source: "apache"
},
	"application/x-font-type1": {
	source: "apache",
	extensions: [
		"pfa",
		"pfb",
		"pfm",
		"afm"
	]
},
	"application/x-font-vfont": {
	source: "apache"
},
	"application/x-freearc": {
	source: "apache",
	extensions: [
		"arc"
	]
},
	"application/x-futuresplash": {
	source: "apache",
	extensions: [
		"spl"
	]
},
	"application/x-gca-compressed": {
	source: "apache",
	extensions: [
		"gca"
	]
},
	"application/x-glulx": {
	source: "apache",
	extensions: [
		"ulx"
	]
},
	"application/x-gnumeric": {
	source: "apache",
	extensions: [
		"gnumeric"
	]
},
	"application/x-gramps-xml": {
	source: "apache",
	extensions: [
		"gramps"
	]
},
	"application/x-gtar": {
	source: "apache",
	extensions: [
		"gtar"
	]
},
	"application/x-gzip": {
	source: "apache"
},
	"application/x-hdf": {
	source: "apache",
	extensions: [
		"hdf"
	]
},
	"application/x-httpd-php": {
	compressible: true,
	extensions: [
		"php"
	]
},
	"application/x-install-instructions": {
	source: "apache",
	extensions: [
		"install"
	]
},
	"application/x-iso9660-image": {
	source: "apache",
	extensions: [
		"iso"
	]
},
	"application/x-iwork-keynote-sffkey": {
	extensions: [
		"key"
	]
},
	"application/x-iwork-numbers-sffnumbers": {
	extensions: [
		"numbers"
	]
},
	"application/x-iwork-pages-sffpages": {
	extensions: [
		"pages"
	]
},
	"application/x-java-archive-diff": {
	source: "nginx",
	extensions: [
		"jardiff"
	]
},
	"application/x-java-jnlp-file": {
	source: "apache",
	compressible: false,
	extensions: [
		"jnlp"
	]
},
	"application/x-javascript": {
	compressible: true
},
	"application/x-keepass2": {
	extensions: [
		"kdbx"
	]
},
	"application/x-latex": {
	source: "apache",
	compressible: false,
	extensions: [
		"latex"
	]
},
	"application/x-lua-bytecode": {
	extensions: [
		"luac"
	]
},
	"application/x-lzh-compressed": {
	source: "apache",
	extensions: [
		"lzh",
		"lha"
	]
},
	"application/x-makeself": {
	source: "nginx",
	extensions: [
		"run"
	]
},
	"application/x-mie": {
	source: "apache",
	extensions: [
		"mie"
	]
},
	"application/x-mobipocket-ebook": {
	source: "apache",
	extensions: [
		"prc",
		"mobi"
	]
},
	"application/x-mpegurl": {
	compressible: false
},
	"application/x-ms-application": {
	source: "apache",
	extensions: [
		"application"
	]
},
	"application/x-ms-shortcut": {
	source: "apache",
	extensions: [
		"lnk"
	]
},
	"application/x-ms-wmd": {
	source: "apache",
	extensions: [
		"wmd"
	]
},
	"application/x-ms-wmz": {
	source: "apache",
	extensions: [
		"wmz"
	]
},
	"application/x-ms-xbap": {
	source: "apache",
	extensions: [
		"xbap"
	]
},
	"application/x-msaccess": {
	source: "apache",
	extensions: [
		"mdb"
	]
},
	"application/x-msbinder": {
	source: "apache",
	extensions: [
		"obd"
	]
},
	"application/x-mscardfile": {
	source: "apache",
	extensions: [
		"crd"
	]
},
	"application/x-msclip": {
	source: "apache",
	extensions: [
		"clp"
	]
},
	"application/x-msdos-program": {
	extensions: [
		"exe"
	]
},
	"application/x-msdownload": {
	source: "apache",
	extensions: [
		"exe",
		"dll",
		"com",
		"bat",
		"msi"
	]
},
	"application/x-msmediaview": {
	source: "apache",
	extensions: [
		"mvb",
		"m13",
		"m14"
	]
},
	"application/x-msmetafile": {
	source: "apache",
	extensions: [
		"wmf",
		"wmz",
		"emf",
		"emz"
	]
},
	"application/x-msmoney": {
	source: "apache",
	extensions: [
		"mny"
	]
},
	"application/x-mspublisher": {
	source: "apache",
	extensions: [
		"pub"
	]
},
	"application/x-msschedule": {
	source: "apache",
	extensions: [
		"scd"
	]
},
	"application/x-msterminal": {
	source: "apache",
	extensions: [
		"trm"
	]
},
	"application/x-mswrite": {
	source: "apache",
	extensions: [
		"wri"
	]
},
	"application/x-netcdf": {
	source: "apache",
	extensions: [
		"nc",
		"cdf"
	]
},
	"application/x-ns-proxy-autoconfig": {
	compressible: true,
	extensions: [
		"pac"
	]
},
	"application/x-nzb": {
	source: "apache",
	extensions: [
		"nzb"
	]
},
	"application/x-perl": {
	source: "nginx",
	extensions: [
		"pl",
		"pm"
	]
},
	"application/x-pilot": {
	source: "nginx",
	extensions: [
		"prc",
		"pdb"
	]
},
	"application/x-pkcs12": {
	source: "apache",
	compressible: false,
	extensions: [
		"p12",
		"pfx"
	]
},
	"application/x-pkcs7-certificates": {
	source: "apache",
	extensions: [
		"p7b",
		"spc"
	]
},
	"application/x-pkcs7-certreqresp": {
	source: "apache",
	extensions: [
		"p7r"
	]
},
	"application/x-pki-message": {
	source: "iana"
},
	"application/x-rar-compressed": {
	source: "apache",
	compressible: false,
	extensions: [
		"rar"
	]
},
	"application/x-redhat-package-manager": {
	source: "nginx",
	extensions: [
		"rpm"
	]
},
	"application/x-research-info-systems": {
	source: "apache",
	extensions: [
		"ris"
	]
},
	"application/x-sea": {
	source: "nginx",
	extensions: [
		"sea"
	]
},
	"application/x-sh": {
	source: "apache",
	compressible: true,
	extensions: [
		"sh"
	]
},
	"application/x-shar": {
	source: "apache",
	extensions: [
		"shar"
	]
},
	"application/x-shockwave-flash": {
	source: "apache",
	compressible: false,
	extensions: [
		"swf"
	]
},
	"application/x-silverlight-app": {
	source: "apache",
	extensions: [
		"xap"
	]
},
	"application/x-sql": {
	source: "apache",
	extensions: [
		"sql"
	]
},
	"application/x-stuffit": {
	source: "apache",
	compressible: false,
	extensions: [
		"sit"
	]
},
	"application/x-stuffitx": {
	source: "apache",
	extensions: [
		"sitx"
	]
},
	"application/x-subrip": {
	source: "apache",
	extensions: [
		"srt"
	]
},
	"application/x-sv4cpio": {
	source: "apache",
	extensions: [
		"sv4cpio"
	]
},
	"application/x-sv4crc": {
	source: "apache",
	extensions: [
		"sv4crc"
	]
},
	"application/x-t3vm-image": {
	source: "apache",
	extensions: [
		"t3"
	]
},
	"application/x-tads": {
	source: "apache",
	extensions: [
		"gam"
	]
},
	"application/x-tar": {
	source: "apache",
	compressible: true,
	extensions: [
		"tar"
	]
},
	"application/x-tcl": {
	source: "apache",
	extensions: [
		"tcl",
		"tk"
	]
},
	"application/x-tex": {
	source: "apache",
	extensions: [
		"tex"
	]
},
	"application/x-tex-tfm": {
	source: "apache",
	extensions: [
		"tfm"
	]
},
	"application/x-texinfo": {
	source: "apache",
	extensions: [
		"texinfo",
		"texi"
	]
},
	"application/x-tgif": {
	source: "apache",
	extensions: [
		"obj"
	]
},
	"application/x-ustar": {
	source: "apache",
	extensions: [
		"ustar"
	]
},
	"application/x-virtualbox-hdd": {
	compressible: true,
	extensions: [
		"hdd"
	]
},
	"application/x-virtualbox-ova": {
	compressible: true,
	extensions: [
		"ova"
	]
},
	"application/x-virtualbox-ovf": {
	compressible: true,
	extensions: [
		"ovf"
	]
},
	"application/x-virtualbox-vbox": {
	compressible: true,
	extensions: [
		"vbox"
	]
},
	"application/x-virtualbox-vbox-extpack": {
	compressible: false,
	extensions: [
		"vbox-extpack"
	]
},
	"application/x-virtualbox-vdi": {
	compressible: true,
	extensions: [
		"vdi"
	]
},
	"application/x-virtualbox-vhd": {
	compressible: true,
	extensions: [
		"vhd"
	]
},
	"application/x-virtualbox-vmdk": {
	compressible: true,
	extensions: [
		"vmdk"
	]
},
	"application/x-wais-source": {
	source: "apache",
	extensions: [
		"src"
	]
},
	"application/x-web-app-manifest+json": {
	compressible: true,
	extensions: [
		"webapp"
	]
},
	"application/x-www-form-urlencoded": {
	source: "iana",
	compressible: true
},
	"application/x-x509-ca-cert": {
	source: "iana",
	extensions: [
		"der",
		"crt",
		"pem"
	]
},
	"application/x-x509-ca-ra-cert": {
	source: "iana"
},
	"application/x-x509-next-ca-cert": {
	source: "iana"
},
	"application/x-xfig": {
	source: "apache",
	extensions: [
		"fig"
	]
},
	"application/x-xliff+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xlf"
	]
},
	"application/x-xpinstall": {
	source: "apache",
	compressible: false,
	extensions: [
		"xpi"
	]
},
	"application/x-xz": {
	source: "apache",
	extensions: [
		"xz"
	]
},
	"application/x-zmachine": {
	source: "apache",
	extensions: [
		"z1",
		"z2",
		"z3",
		"z4",
		"z5",
		"z6",
		"z7",
		"z8"
	]
},
	"application/x400-bp": {
	source: "iana"
},
	"application/xacml+xml": {
	source: "iana",
	compressible: true
},
	"application/xaml+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xaml"
	]
},
	"application/xcap-att+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xav"
	]
},
	"application/xcap-caps+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xca"
	]
},
	"application/xcap-diff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xdf"
	]
},
	"application/xcap-el+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xel"
	]
},
	"application/xcap-error+xml": {
	source: "iana",
	compressible: true
},
	"application/xcap-ns+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xns"
	]
},
	"application/xcon-conference-info+xml": {
	source: "iana",
	compressible: true
},
	"application/xcon-conference-info-diff+xml": {
	source: "iana",
	compressible: true
},
	"application/xenc+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xenc"
	]
},
	"application/xhtml+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xhtml",
		"xht"
	]
},
	"application/xhtml-voice+xml": {
	source: "apache",
	compressible: true
},
	"application/xliff+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xlf"
	]
},
	"application/xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xml",
		"xsl",
		"xsd",
		"rng"
	]
},
	"application/xml-dtd": {
	source: "iana",
	compressible: true,
	extensions: [
		"dtd"
	]
},
	"application/xml-external-parsed-entity": {
	source: "iana"
},
	"application/xml-patch+xml": {
	source: "iana",
	compressible: true
},
	"application/xmpp+xml": {
	source: "iana",
	compressible: true
},
	"application/xop+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xop"
	]
},
	"application/xproc+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xpl"
	]
},
	"application/xslt+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xsl",
		"xslt"
	]
},
	"application/xspf+xml": {
	source: "apache",
	compressible: true,
	extensions: [
		"xspf"
	]
},
	"application/xv+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"mxml",
		"xhvml",
		"xvml",
		"xvm"
	]
},
	"application/yang": {
	source: "iana",
	extensions: [
		"yang"
	]
},
	"application/yang-data+json": {
	source: "iana",
	compressible: true
},
	"application/yang-data+xml": {
	source: "iana",
	compressible: true
},
	"application/yang-patch+json": {
	source: "iana",
	compressible: true
},
	"application/yang-patch+xml": {
	source: "iana",
	compressible: true
},
	"application/yin+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"yin"
	]
},
	"application/zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"zip"
	]
},
	"application/zlib": {
	source: "iana"
},
	"application/zstd": {
	source: "iana"
},
	"audio/1d-interleaved-parityfec": {
	source: "iana"
},
	"audio/32kadpcm": {
	source: "iana"
},
	"audio/3gpp": {
	source: "iana",
	compressible: false,
	extensions: [
		"3gpp"
	]
},
	"audio/3gpp2": {
	source: "iana"
},
	"audio/aac": {
	source: "iana"
},
	"audio/ac3": {
	source: "iana"
},
	"audio/adpcm": {
	source: "apache",
	extensions: [
		"adp"
	]
},
	"audio/amr": {
	source: "iana",
	extensions: [
		"amr"
	]
},
	"audio/amr-wb": {
	source: "iana"
},
	"audio/amr-wb+": {
	source: "iana"
},
	"audio/aptx": {
	source: "iana"
},
	"audio/asc": {
	source: "iana"
},
	"audio/atrac-advanced-lossless": {
	source: "iana"
},
	"audio/atrac-x": {
	source: "iana"
},
	"audio/atrac3": {
	source: "iana"
},
	"audio/basic": {
	source: "iana",
	compressible: false,
	extensions: [
		"au",
		"snd"
	]
},
	"audio/bv16": {
	source: "iana"
},
	"audio/bv32": {
	source: "iana"
},
	"audio/clearmode": {
	source: "iana"
},
	"audio/cn": {
	source: "iana"
},
	"audio/dat12": {
	source: "iana"
},
	"audio/dls": {
	source: "iana"
},
	"audio/dsr-es201108": {
	source: "iana"
},
	"audio/dsr-es202050": {
	source: "iana"
},
	"audio/dsr-es202211": {
	source: "iana"
},
	"audio/dsr-es202212": {
	source: "iana"
},
	"audio/dv": {
	source: "iana"
},
	"audio/dvi4": {
	source: "iana"
},
	"audio/eac3": {
	source: "iana"
},
	"audio/encaprtp": {
	source: "iana"
},
	"audio/evrc": {
	source: "iana"
},
	"audio/evrc-qcp": {
	source: "iana"
},
	"audio/evrc0": {
	source: "iana"
},
	"audio/evrc1": {
	source: "iana"
},
	"audio/evrcb": {
	source: "iana"
},
	"audio/evrcb0": {
	source: "iana"
},
	"audio/evrcb1": {
	source: "iana"
},
	"audio/evrcnw": {
	source: "iana"
},
	"audio/evrcnw0": {
	source: "iana"
},
	"audio/evrcnw1": {
	source: "iana"
},
	"audio/evrcwb": {
	source: "iana"
},
	"audio/evrcwb0": {
	source: "iana"
},
	"audio/evrcwb1": {
	source: "iana"
},
	"audio/evs": {
	source: "iana"
},
	"audio/flexfec": {
	source: "iana"
},
	"audio/fwdred": {
	source: "iana"
},
	"audio/g711-0": {
	source: "iana"
},
	"audio/g719": {
	source: "iana"
},
	"audio/g722": {
	source: "iana"
},
	"audio/g7221": {
	source: "iana"
},
	"audio/g723": {
	source: "iana"
},
	"audio/g726-16": {
	source: "iana"
},
	"audio/g726-24": {
	source: "iana"
},
	"audio/g726-32": {
	source: "iana"
},
	"audio/g726-40": {
	source: "iana"
},
	"audio/g728": {
	source: "iana"
},
	"audio/g729": {
	source: "iana"
},
	"audio/g7291": {
	source: "iana"
},
	"audio/g729d": {
	source: "iana"
},
	"audio/g729e": {
	source: "iana"
},
	"audio/gsm": {
	source: "iana"
},
	"audio/gsm-efr": {
	source: "iana"
},
	"audio/gsm-hr-08": {
	source: "iana"
},
	"audio/ilbc": {
	source: "iana"
},
	"audio/ip-mr_v2.5": {
	source: "iana"
},
	"audio/isac": {
	source: "apache"
},
	"audio/l16": {
	source: "iana"
},
	"audio/l20": {
	source: "iana"
},
	"audio/l24": {
	source: "iana",
	compressible: false
},
	"audio/l8": {
	source: "iana"
},
	"audio/lpc": {
	source: "iana"
},
	"audio/melp": {
	source: "iana"
},
	"audio/melp1200": {
	source: "iana"
},
	"audio/melp2400": {
	source: "iana"
},
	"audio/melp600": {
	source: "iana"
},
	"audio/mhas": {
	source: "iana"
},
	"audio/midi": {
	source: "apache",
	extensions: [
		"mid",
		"midi",
		"kar",
		"rmi"
	]
},
	"audio/mobile-xmf": {
	source: "iana",
	extensions: [
		"mxmf"
	]
},
	"audio/mp3": {
	compressible: false,
	extensions: [
		"mp3"
	]
},
	"audio/mp4": {
	source: "iana",
	compressible: false,
	extensions: [
		"m4a",
		"mp4a"
	]
},
	"audio/mp4a-latm": {
	source: "iana"
},
	"audio/mpa": {
	source: "iana"
},
	"audio/mpa-robust": {
	source: "iana"
},
	"audio/mpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"mpga",
		"mp2",
		"mp2a",
		"mp3",
		"m2a",
		"m3a"
	]
},
	"audio/mpeg4-generic": {
	source: "iana"
},
	"audio/musepack": {
	source: "apache"
},
	"audio/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"oga",
		"ogg",
		"spx",
		"opus"
	]
},
	"audio/opus": {
	source: "iana"
},
	"audio/parityfec": {
	source: "iana"
},
	"audio/pcma": {
	source: "iana"
},
	"audio/pcma-wb": {
	source: "iana"
},
	"audio/pcmu": {
	source: "iana"
},
	"audio/pcmu-wb": {
	source: "iana"
},
	"audio/prs.sid": {
	source: "iana"
},
	"audio/qcelp": {
	source: "iana"
},
	"audio/raptorfec": {
	source: "iana"
},
	"audio/red": {
	source: "iana"
},
	"audio/rtp-enc-aescm128": {
	source: "iana"
},
	"audio/rtp-midi": {
	source: "iana"
},
	"audio/rtploopback": {
	source: "iana"
},
	"audio/rtx": {
	source: "iana"
},
	"audio/s3m": {
	source: "apache",
	extensions: [
		"s3m"
	]
},
	"audio/scip": {
	source: "iana"
},
	"audio/silk": {
	source: "apache",
	extensions: [
		"sil"
	]
},
	"audio/smv": {
	source: "iana"
},
	"audio/smv-qcp": {
	source: "iana"
},
	"audio/smv0": {
	source: "iana"
},
	"audio/sofa": {
	source: "iana"
},
	"audio/sp-midi": {
	source: "iana"
},
	"audio/speex": {
	source: "iana"
},
	"audio/t140c": {
	source: "iana"
},
	"audio/t38": {
	source: "iana"
},
	"audio/telephone-event": {
	source: "iana"
},
	"audio/tetra_acelp": {
	source: "iana"
},
	"audio/tetra_acelp_bb": {
	source: "iana"
},
	"audio/tone": {
	source: "iana"
},
	"audio/tsvcis": {
	source: "iana"
},
	"audio/uemclip": {
	source: "iana"
},
	"audio/ulpfec": {
	source: "iana"
},
	"audio/usac": {
	source: "iana"
},
	"audio/vdvi": {
	source: "iana"
},
	"audio/vmr-wb": {
	source: "iana"
},
	"audio/vnd.3gpp.iufp": {
	source: "iana"
},
	"audio/vnd.4sb": {
	source: "iana"
},
	"audio/vnd.audiokoz": {
	source: "iana"
},
	"audio/vnd.celp": {
	source: "iana"
},
	"audio/vnd.cisco.nse": {
	source: "iana"
},
	"audio/vnd.cmles.radio-events": {
	source: "iana"
},
	"audio/vnd.cns.anp1": {
	source: "iana"
},
	"audio/vnd.cns.inf1": {
	source: "iana"
},
	"audio/vnd.dece.audio": {
	source: "iana",
	extensions: [
		"uva",
		"uvva"
	]
},
	"audio/vnd.digital-winds": {
	source: "iana",
	extensions: [
		"eol"
	]
},
	"audio/vnd.dlna.adts": {
	source: "iana"
},
	"audio/vnd.dolby.heaac.1": {
	source: "iana"
},
	"audio/vnd.dolby.heaac.2": {
	source: "iana"
},
	"audio/vnd.dolby.mlp": {
	source: "iana"
},
	"audio/vnd.dolby.mps": {
	source: "iana"
},
	"audio/vnd.dolby.pl2": {
	source: "iana"
},
	"audio/vnd.dolby.pl2x": {
	source: "iana"
},
	"audio/vnd.dolby.pl2z": {
	source: "iana"
},
	"audio/vnd.dolby.pulse.1": {
	source: "iana"
},
	"audio/vnd.dra": {
	source: "iana",
	extensions: [
		"dra"
	]
},
	"audio/vnd.dts": {
	source: "iana",
	extensions: [
		"dts"
	]
},
	"audio/vnd.dts.hd": {
	source: "iana",
	extensions: [
		"dtshd"
	]
},
	"audio/vnd.dts.uhd": {
	source: "iana"
},
	"audio/vnd.dvb.file": {
	source: "iana"
},
	"audio/vnd.everad.plj": {
	source: "iana"
},
	"audio/vnd.hns.audio": {
	source: "iana"
},
	"audio/vnd.lucent.voice": {
	source: "iana",
	extensions: [
		"lvp"
	]
},
	"audio/vnd.ms-playready.media.pya": {
	source: "iana",
	extensions: [
		"pya"
	]
},
	"audio/vnd.nokia.mobile-xmf": {
	source: "iana"
},
	"audio/vnd.nortel.vbk": {
	source: "iana"
},
	"audio/vnd.nuera.ecelp4800": {
	source: "iana",
	extensions: [
		"ecelp4800"
	]
},
	"audio/vnd.nuera.ecelp7470": {
	source: "iana",
	extensions: [
		"ecelp7470"
	]
},
	"audio/vnd.nuera.ecelp9600": {
	source: "iana",
	extensions: [
		"ecelp9600"
	]
},
	"audio/vnd.octel.sbc": {
	source: "iana"
},
	"audio/vnd.presonus.multitrack": {
	source: "iana"
},
	"audio/vnd.qcelp": {
	source: "iana"
},
	"audio/vnd.rhetorex.32kadpcm": {
	source: "iana"
},
	"audio/vnd.rip": {
	source: "iana",
	extensions: [
		"rip"
	]
},
	"audio/vnd.rn-realaudio": {
	compressible: false
},
	"audio/vnd.sealedmedia.softseal.mpeg": {
	source: "iana"
},
	"audio/vnd.vmx.cvsd": {
	source: "iana"
},
	"audio/vnd.wave": {
	compressible: false
},
	"audio/vorbis": {
	source: "iana",
	compressible: false
},
	"audio/vorbis-config": {
	source: "iana"
},
	"audio/wav": {
	compressible: false,
	extensions: [
		"wav"
	]
},
	"audio/wave": {
	compressible: false,
	extensions: [
		"wav"
	]
},
	"audio/webm": {
	source: "apache",
	compressible: false,
	extensions: [
		"weba"
	]
},
	"audio/x-aac": {
	source: "apache",
	compressible: false,
	extensions: [
		"aac"
	]
},
	"audio/x-aiff": {
	source: "apache",
	extensions: [
		"aif",
		"aiff",
		"aifc"
	]
},
	"audio/x-caf": {
	source: "apache",
	compressible: false,
	extensions: [
		"caf"
	]
},
	"audio/x-flac": {
	source: "apache",
	extensions: [
		"flac"
	]
},
	"audio/x-m4a": {
	source: "nginx",
	extensions: [
		"m4a"
	]
},
	"audio/x-matroska": {
	source: "apache",
	extensions: [
		"mka"
	]
},
	"audio/x-mpegurl": {
	source: "apache",
	extensions: [
		"m3u"
	]
},
	"audio/x-ms-wax": {
	source: "apache",
	extensions: [
		"wax"
	]
},
	"audio/x-ms-wma": {
	source: "apache",
	extensions: [
		"wma"
	]
},
	"audio/x-pn-realaudio": {
	source: "apache",
	extensions: [
		"ram",
		"ra"
	]
},
	"audio/x-pn-realaudio-plugin": {
	source: "apache",
	extensions: [
		"rmp"
	]
},
	"audio/x-realaudio": {
	source: "nginx",
	extensions: [
		"ra"
	]
},
	"audio/x-tta": {
	source: "apache"
},
	"audio/x-wav": {
	source: "apache",
	extensions: [
		"wav"
	]
},
	"audio/xm": {
	source: "apache",
	extensions: [
		"xm"
	]
},
	"chemical/x-cdx": {
	source: "apache",
	extensions: [
		"cdx"
	]
},
	"chemical/x-cif": {
	source: "apache",
	extensions: [
		"cif"
	]
},
	"chemical/x-cmdf": {
	source: "apache",
	extensions: [
		"cmdf"
	]
},
	"chemical/x-cml": {
	source: "apache",
	extensions: [
		"cml"
	]
},
	"chemical/x-csml": {
	source: "apache",
	extensions: [
		"csml"
	]
},
	"chemical/x-pdb": {
	source: "apache"
},
	"chemical/x-xyz": {
	source: "apache",
	extensions: [
		"xyz"
	]
},
	"font/collection": {
	source: "iana",
	extensions: [
		"ttc"
	]
},
	"font/otf": {
	source: "iana",
	compressible: true,
	extensions: [
		"otf"
	]
},
	"font/sfnt": {
	source: "iana"
},
	"font/ttf": {
	source: "iana",
	compressible: true,
	extensions: [
		"ttf"
	]
},
	"font/woff": {
	source: "iana",
	extensions: [
		"woff"
	]
},
	"font/woff2": {
	source: "iana",
	extensions: [
		"woff2"
	]
},
	"image/aces": {
	source: "iana",
	extensions: [
		"exr"
	]
},
	"image/apng": {
	compressible: false,
	extensions: [
		"apng"
	]
},
	"image/avci": {
	source: "iana",
	extensions: [
		"avci"
	]
},
	"image/avcs": {
	source: "iana",
	extensions: [
		"avcs"
	]
},
	"image/avif": {
	source: "iana",
	compressible: false,
	extensions: [
		"avif"
	]
},
	"image/bmp": {
	source: "iana",
	compressible: true,
	extensions: [
		"bmp"
	]
},
	"image/cgm": {
	source: "iana",
	extensions: [
		"cgm"
	]
},
	"image/dicom-rle": {
	source: "iana",
	extensions: [
		"drle"
	]
},
	"image/emf": {
	source: "iana",
	extensions: [
		"emf"
	]
},
	"image/fits": {
	source: "iana",
	extensions: [
		"fits"
	]
},
	"image/g3fax": {
	source: "iana",
	extensions: [
		"g3"
	]
},
	"image/gif": {
	source: "iana",
	compressible: false,
	extensions: [
		"gif"
	]
},
	"image/heic": {
	source: "iana",
	extensions: [
		"heic"
	]
},
	"image/heic-sequence": {
	source: "iana",
	extensions: [
		"heics"
	]
},
	"image/heif": {
	source: "iana",
	extensions: [
		"heif"
	]
},
	"image/heif-sequence": {
	source: "iana",
	extensions: [
		"heifs"
	]
},
	"image/hej2k": {
	source: "iana",
	extensions: [
		"hej2"
	]
},
	"image/hsj2": {
	source: "iana",
	extensions: [
		"hsj2"
	]
},
	"image/ief": {
	source: "iana",
	extensions: [
		"ief"
	]
},
	"image/jls": {
	source: "iana",
	extensions: [
		"jls"
	]
},
	"image/jp2": {
	source: "iana",
	compressible: false,
	extensions: [
		"jp2",
		"jpg2"
	]
},
	"image/jpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpeg",
		"jpg",
		"jpe"
	]
},
	"image/jph": {
	source: "iana",
	extensions: [
		"jph"
	]
},
	"image/jphc": {
	source: "iana",
	extensions: [
		"jhc"
	]
},
	"image/jpm": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpm"
	]
},
	"image/jpx": {
	source: "iana",
	compressible: false,
	extensions: [
		"jpx",
		"jpf"
	]
},
	"image/jxr": {
	source: "iana",
	extensions: [
		"jxr"
	]
},
	"image/jxra": {
	source: "iana",
	extensions: [
		"jxra"
	]
},
	"image/jxrs": {
	source: "iana",
	extensions: [
		"jxrs"
	]
},
	"image/jxs": {
	source: "iana",
	extensions: [
		"jxs"
	]
},
	"image/jxsc": {
	source: "iana",
	extensions: [
		"jxsc"
	]
},
	"image/jxsi": {
	source: "iana",
	extensions: [
		"jxsi"
	]
},
	"image/jxss": {
	source: "iana",
	extensions: [
		"jxss"
	]
},
	"image/ktx": {
	source: "iana",
	extensions: [
		"ktx"
	]
},
	"image/ktx2": {
	source: "iana",
	extensions: [
		"ktx2"
	]
},
	"image/naplps": {
	source: "iana"
},
	"image/pjpeg": {
	compressible: false
},
	"image/png": {
	source: "iana",
	compressible: false,
	extensions: [
		"png"
	]
},
	"image/prs.btif": {
	source: "iana",
	extensions: [
		"btif"
	]
},
	"image/prs.pti": {
	source: "iana",
	extensions: [
		"pti"
	]
},
	"image/pwg-raster": {
	source: "iana"
},
	"image/sgi": {
	source: "apache",
	extensions: [
		"sgi"
	]
},
	"image/svg+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"svg",
		"svgz"
	]
},
	"image/t38": {
	source: "iana",
	extensions: [
		"t38"
	]
},
	"image/tiff": {
	source: "iana",
	compressible: false,
	extensions: [
		"tif",
		"tiff"
	]
},
	"image/tiff-fx": {
	source: "iana",
	extensions: [
		"tfx"
	]
},
	"image/vnd.adobe.photoshop": {
	source: "iana",
	compressible: true,
	extensions: [
		"psd"
	]
},
	"image/vnd.airzip.accelerator.azv": {
	source: "iana",
	extensions: [
		"azv"
	]
},
	"image/vnd.cns.inf2": {
	source: "iana"
},
	"image/vnd.dece.graphic": {
	source: "iana",
	extensions: [
		"uvi",
		"uvvi",
		"uvg",
		"uvvg"
	]
},
	"image/vnd.djvu": {
	source: "iana",
	extensions: [
		"djvu",
		"djv"
	]
},
	"image/vnd.dvb.subtitle": {
	source: "iana",
	extensions: [
		"sub"
	]
},
	"image/vnd.dwg": {
	source: "iana",
	extensions: [
		"dwg"
	]
},
	"image/vnd.dxf": {
	source: "iana",
	extensions: [
		"dxf"
	]
},
	"image/vnd.fastbidsheet": {
	source: "iana",
	extensions: [
		"fbs"
	]
},
	"image/vnd.fpx": {
	source: "iana",
	extensions: [
		"fpx"
	]
},
	"image/vnd.fst": {
	source: "iana",
	extensions: [
		"fst"
	]
},
	"image/vnd.fujixerox.edmics-mmr": {
	source: "iana",
	extensions: [
		"mmr"
	]
},
	"image/vnd.fujixerox.edmics-rlc": {
	source: "iana",
	extensions: [
		"rlc"
	]
},
	"image/vnd.globalgraphics.pgb": {
	source: "iana"
},
	"image/vnd.microsoft.icon": {
	source: "iana",
	compressible: true,
	extensions: [
		"ico"
	]
},
	"image/vnd.mix": {
	source: "iana"
},
	"image/vnd.mozilla.apng": {
	source: "iana"
},
	"image/vnd.ms-dds": {
	compressible: true,
	extensions: [
		"dds"
	]
},
	"image/vnd.ms-modi": {
	source: "iana",
	extensions: [
		"mdi"
	]
},
	"image/vnd.ms-photo": {
	source: "apache",
	extensions: [
		"wdp"
	]
},
	"image/vnd.net-fpx": {
	source: "iana",
	extensions: [
		"npx"
	]
},
	"image/vnd.pco.b16": {
	source: "iana",
	extensions: [
		"b16"
	]
},
	"image/vnd.radiance": {
	source: "iana"
},
	"image/vnd.sealed.png": {
	source: "iana"
},
	"image/vnd.sealedmedia.softseal.gif": {
	source: "iana"
},
	"image/vnd.sealedmedia.softseal.jpg": {
	source: "iana"
},
	"image/vnd.svf": {
	source: "iana"
},
	"image/vnd.tencent.tap": {
	source: "iana",
	extensions: [
		"tap"
	]
},
	"image/vnd.valve.source.texture": {
	source: "iana",
	extensions: [
		"vtf"
	]
},
	"image/vnd.wap.wbmp": {
	source: "iana",
	extensions: [
		"wbmp"
	]
},
	"image/vnd.xiff": {
	source: "iana",
	extensions: [
		"xif"
	]
},
	"image/vnd.zbrush.pcx": {
	source: "iana",
	extensions: [
		"pcx"
	]
},
	"image/webp": {
	source: "apache",
	extensions: [
		"webp"
	]
},
	"image/wmf": {
	source: "iana",
	extensions: [
		"wmf"
	]
},
	"image/x-3ds": {
	source: "apache",
	extensions: [
		"3ds"
	]
},
	"image/x-cmu-raster": {
	source: "apache",
	extensions: [
		"ras"
	]
},
	"image/x-cmx": {
	source: "apache",
	extensions: [
		"cmx"
	]
},
	"image/x-freehand": {
	source: "apache",
	extensions: [
		"fh",
		"fhc",
		"fh4",
		"fh5",
		"fh7"
	]
},
	"image/x-icon": {
	source: "apache",
	compressible: true,
	extensions: [
		"ico"
	]
},
	"image/x-jng": {
	source: "nginx",
	extensions: [
		"jng"
	]
},
	"image/x-mrsid-image": {
	source: "apache",
	extensions: [
		"sid"
	]
},
	"image/x-ms-bmp": {
	source: "nginx",
	compressible: true,
	extensions: [
		"bmp"
	]
},
	"image/x-pcx": {
	source: "apache",
	extensions: [
		"pcx"
	]
},
	"image/x-pict": {
	source: "apache",
	extensions: [
		"pic",
		"pct"
	]
},
	"image/x-portable-anymap": {
	source: "apache",
	extensions: [
		"pnm"
	]
},
	"image/x-portable-bitmap": {
	source: "apache",
	extensions: [
		"pbm"
	]
},
	"image/x-portable-graymap": {
	source: "apache",
	extensions: [
		"pgm"
	]
},
	"image/x-portable-pixmap": {
	source: "apache",
	extensions: [
		"ppm"
	]
},
	"image/x-rgb": {
	source: "apache",
	extensions: [
		"rgb"
	]
},
	"image/x-tga": {
	source: "apache",
	extensions: [
		"tga"
	]
},
	"image/x-xbitmap": {
	source: "apache",
	extensions: [
		"xbm"
	]
},
	"image/x-xcf": {
	compressible: false
},
	"image/x-xpixmap": {
	source: "apache",
	extensions: [
		"xpm"
	]
},
	"image/x-xwindowdump": {
	source: "apache",
	extensions: [
		"xwd"
	]
},
	"message/cpim": {
	source: "iana"
},
	"message/delivery-status": {
	source: "iana"
},
	"message/disposition-notification": {
	source: "iana",
	extensions: [
		"disposition-notification"
	]
},
	"message/external-body": {
	source: "iana"
},
	"message/feedback-report": {
	source: "iana"
},
	"message/global": {
	source: "iana",
	extensions: [
		"u8msg"
	]
},
	"message/global-delivery-status": {
	source: "iana",
	extensions: [
		"u8dsn"
	]
},
	"message/global-disposition-notification": {
	source: "iana",
	extensions: [
		"u8mdn"
	]
},
	"message/global-headers": {
	source: "iana",
	extensions: [
		"u8hdr"
	]
},
	"message/http": {
	source: "iana",
	compressible: false
},
	"message/imdn+xml": {
	source: "iana",
	compressible: true
},
	"message/news": {
	source: "iana"
},
	"message/partial": {
	source: "iana",
	compressible: false
},
	"message/rfc822": {
	source: "iana",
	compressible: true,
	extensions: [
		"eml",
		"mime"
	]
},
	"message/s-http": {
	source: "iana"
},
	"message/sip": {
	source: "iana"
},
	"message/sipfrag": {
	source: "iana"
},
	"message/tracking-status": {
	source: "iana"
},
	"message/vnd.si.simp": {
	source: "iana"
},
	"message/vnd.wfa.wsc": {
	source: "iana",
	extensions: [
		"wsc"
	]
},
	"model/3mf": {
	source: "iana",
	extensions: [
		"3mf"
	]
},
	"model/e57": {
	source: "iana"
},
	"model/gltf+json": {
	source: "iana",
	compressible: true,
	extensions: [
		"gltf"
	]
},
	"model/gltf-binary": {
	source: "iana",
	compressible: true,
	extensions: [
		"glb"
	]
},
	"model/iges": {
	source: "iana",
	compressible: false,
	extensions: [
		"igs",
		"iges"
	]
},
	"model/mesh": {
	source: "iana",
	compressible: false,
	extensions: [
		"msh",
		"mesh",
		"silo"
	]
},
	"model/mtl": {
	source: "iana",
	extensions: [
		"mtl"
	]
},
	"model/obj": {
	source: "iana",
	extensions: [
		"obj"
	]
},
	"model/step": {
	source: "iana"
},
	"model/step+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"stpx"
	]
},
	"model/step+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"stpz"
	]
},
	"model/step-xml+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"stpxz"
	]
},
	"model/stl": {
	source: "iana",
	extensions: [
		"stl"
	]
},
	"model/vnd.collada+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"dae"
	]
},
	"model/vnd.dwf": {
	source: "iana",
	extensions: [
		"dwf"
	]
},
	"model/vnd.flatland.3dml": {
	source: "iana"
},
	"model/vnd.gdl": {
	source: "iana",
	extensions: [
		"gdl"
	]
},
	"model/vnd.gs-gdl": {
	source: "apache"
},
	"model/vnd.gs.gdl": {
	source: "iana"
},
	"model/vnd.gtw": {
	source: "iana",
	extensions: [
		"gtw"
	]
},
	"model/vnd.moml+xml": {
	source: "iana",
	compressible: true
},
	"model/vnd.mts": {
	source: "iana",
	extensions: [
		"mts"
	]
},
	"model/vnd.opengex": {
	source: "iana",
	extensions: [
		"ogex"
	]
},
	"model/vnd.parasolid.transmit.binary": {
	source: "iana",
	extensions: [
		"x_b"
	]
},
	"model/vnd.parasolid.transmit.text": {
	source: "iana",
	extensions: [
		"x_t"
	]
},
	"model/vnd.pytha.pyox": {
	source: "iana"
},
	"model/vnd.rosette.annotated-data-model": {
	source: "iana"
},
	"model/vnd.sap.vds": {
	source: "iana",
	extensions: [
		"vds"
	]
},
	"model/vnd.usdz+zip": {
	source: "iana",
	compressible: false,
	extensions: [
		"usdz"
	]
},
	"model/vnd.valve.source.compiled-map": {
	source: "iana",
	extensions: [
		"bsp"
	]
},
	"model/vnd.vtu": {
	source: "iana",
	extensions: [
		"vtu"
	]
},
	"model/vrml": {
	source: "iana",
	compressible: false,
	extensions: [
		"wrl",
		"vrml"
	]
},
	"model/x3d+binary": {
	source: "apache",
	compressible: false,
	extensions: [
		"x3db",
		"x3dbz"
	]
},
	"model/x3d+fastinfoset": {
	source: "iana",
	extensions: [
		"x3db"
	]
},
	"model/x3d+vrml": {
	source: "apache",
	compressible: false,
	extensions: [
		"x3dv",
		"x3dvz"
	]
},
	"model/x3d+xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"x3d",
		"x3dz"
	]
},
	"model/x3d-vrml": {
	source: "iana",
	extensions: [
		"x3dv"
	]
},
	"multipart/alternative": {
	source: "iana",
	compressible: false
},
	"multipart/appledouble": {
	source: "iana"
},
	"multipart/byteranges": {
	source: "iana"
},
	"multipart/digest": {
	source: "iana"
},
	"multipart/encrypted": {
	source: "iana",
	compressible: false
},
	"multipart/form-data": {
	source: "iana",
	compressible: false
},
	"multipart/header-set": {
	source: "iana"
},
	"multipart/mixed": {
	source: "iana"
},
	"multipart/multilingual": {
	source: "iana"
},
	"multipart/parallel": {
	source: "iana"
},
	"multipart/related": {
	source: "iana",
	compressible: false
},
	"multipart/report": {
	source: "iana"
},
	"multipart/signed": {
	source: "iana",
	compressible: false
},
	"multipart/vnd.bint.med-plus": {
	source: "iana"
},
	"multipart/voice-message": {
	source: "iana"
},
	"multipart/x-mixed-replace": {
	source: "iana"
},
	"text/1d-interleaved-parityfec": {
	source: "iana"
},
	"text/cache-manifest": {
	source: "iana",
	compressible: true,
	extensions: [
		"appcache",
		"manifest"
	]
},
	"text/calendar": {
	source: "iana",
	extensions: [
		"ics",
		"ifb"
	]
},
	"text/calender": {
	compressible: true
},
	"text/cmd": {
	compressible: true
},
	"text/coffeescript": {
	extensions: [
		"coffee",
		"litcoffee"
	]
},
	"text/cql": {
	source: "iana"
},
	"text/cql-expression": {
	source: "iana"
},
	"text/cql-identifier": {
	source: "iana"
},
	"text/css": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"css"
	]
},
	"text/csv": {
	source: "iana",
	compressible: true,
	extensions: [
		"csv"
	]
},
	"text/csv-schema": {
	source: "iana"
},
	"text/directory": {
	source: "iana"
},
	"text/dns": {
	source: "iana"
},
	"text/ecmascript": {
	source: "iana"
},
	"text/encaprtp": {
	source: "iana"
},
	"text/enriched": {
	source: "iana"
},
	"text/fhirpath": {
	source: "iana"
},
	"text/flexfec": {
	source: "iana"
},
	"text/fwdred": {
	source: "iana"
},
	"text/gff3": {
	source: "iana"
},
	"text/grammar-ref-list": {
	source: "iana"
},
	"text/html": {
	source: "iana",
	compressible: true,
	extensions: [
		"html",
		"htm",
		"shtml"
	]
},
	"text/jade": {
	extensions: [
		"jade"
	]
},
	"text/javascript": {
	source: "iana",
	compressible: true
},
	"text/jcr-cnd": {
	source: "iana"
},
	"text/jsx": {
	compressible: true,
	extensions: [
		"jsx"
	]
},
	"text/less": {
	compressible: true,
	extensions: [
		"less"
	]
},
	"text/markdown": {
	source: "iana",
	compressible: true,
	extensions: [
		"markdown",
		"md"
	]
},
	"text/mathml": {
	source: "nginx",
	extensions: [
		"mml"
	]
},
	"text/mdx": {
	compressible: true,
	extensions: [
		"mdx"
	]
},
	"text/mizar": {
	source: "iana"
},
	"text/n3": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"n3"
	]
},
	"text/parameters": {
	source: "iana",
	charset: "UTF-8"
},
	"text/parityfec": {
	source: "iana"
},
	"text/plain": {
	source: "iana",
	compressible: true,
	extensions: [
		"txt",
		"text",
		"conf",
		"def",
		"list",
		"log",
		"in",
		"ini"
	]
},
	"text/provenance-notation": {
	source: "iana",
	charset: "UTF-8"
},
	"text/prs.fallenstein.rst": {
	source: "iana"
},
	"text/prs.lines.tag": {
	source: "iana",
	extensions: [
		"dsc"
	]
},
	"text/prs.prop.logic": {
	source: "iana"
},
	"text/raptorfec": {
	source: "iana"
},
	"text/red": {
	source: "iana"
},
	"text/rfc822-headers": {
	source: "iana"
},
	"text/richtext": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtx"
	]
},
	"text/rtf": {
	source: "iana",
	compressible: true,
	extensions: [
		"rtf"
	]
},
	"text/rtp-enc-aescm128": {
	source: "iana"
},
	"text/rtploopback": {
	source: "iana"
},
	"text/rtx": {
	source: "iana"
},
	"text/sgml": {
	source: "iana",
	extensions: [
		"sgml",
		"sgm"
	]
},
	"text/shaclc": {
	source: "iana"
},
	"text/shex": {
	source: "iana",
	extensions: [
		"shex"
	]
},
	"text/slim": {
	extensions: [
		"slim",
		"slm"
	]
},
	"text/spdx": {
	source: "iana",
	extensions: [
		"spdx"
	]
},
	"text/strings": {
	source: "iana"
},
	"text/stylus": {
	extensions: [
		"stylus",
		"styl"
	]
},
	"text/t140": {
	source: "iana"
},
	"text/tab-separated-values": {
	source: "iana",
	compressible: true,
	extensions: [
		"tsv"
	]
},
	"text/troff": {
	source: "iana",
	extensions: [
		"t",
		"tr",
		"roff",
		"man",
		"me",
		"ms"
	]
},
	"text/turtle": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"ttl"
	]
},
	"text/ulpfec": {
	source: "iana"
},
	"text/uri-list": {
	source: "iana",
	compressible: true,
	extensions: [
		"uri",
		"uris",
		"urls"
	]
},
	"text/vcard": {
	source: "iana",
	compressible: true,
	extensions: [
		"vcard"
	]
},
	"text/vnd.a": {
	source: "iana"
},
	"text/vnd.abc": {
	source: "iana"
},
	"text/vnd.ascii-art": {
	source: "iana"
},
	"text/vnd.curl": {
	source: "iana",
	extensions: [
		"curl"
	]
},
	"text/vnd.curl.dcurl": {
	source: "apache",
	extensions: [
		"dcurl"
	]
},
	"text/vnd.curl.mcurl": {
	source: "apache",
	extensions: [
		"mcurl"
	]
},
	"text/vnd.curl.scurl": {
	source: "apache",
	extensions: [
		"scurl"
	]
},
	"text/vnd.debian.copyright": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.dmclientscript": {
	source: "iana"
},
	"text/vnd.dvb.subtitle": {
	source: "iana",
	extensions: [
		"sub"
	]
},
	"text/vnd.esmertec.theme-descriptor": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.familysearch.gedcom": {
	source: "iana",
	extensions: [
		"ged"
	]
},
	"text/vnd.ficlab.flt": {
	source: "iana"
},
	"text/vnd.fly": {
	source: "iana",
	extensions: [
		"fly"
	]
},
	"text/vnd.fmi.flexstor": {
	source: "iana",
	extensions: [
		"flx"
	]
},
	"text/vnd.gml": {
	source: "iana"
},
	"text/vnd.graphviz": {
	source: "iana",
	extensions: [
		"gv"
	]
},
	"text/vnd.hans": {
	source: "iana"
},
	"text/vnd.hgl": {
	source: "iana"
},
	"text/vnd.in3d.3dml": {
	source: "iana",
	extensions: [
		"3dml"
	]
},
	"text/vnd.in3d.spot": {
	source: "iana",
	extensions: [
		"spot"
	]
},
	"text/vnd.iptc.newsml": {
	source: "iana"
},
	"text/vnd.iptc.nitf": {
	source: "iana"
},
	"text/vnd.latex-z": {
	source: "iana"
},
	"text/vnd.motorola.reflex": {
	source: "iana"
},
	"text/vnd.ms-mediapackage": {
	source: "iana"
},
	"text/vnd.net2phone.commcenter.command": {
	source: "iana"
},
	"text/vnd.radisys.msml-basic-layout": {
	source: "iana"
},
	"text/vnd.senx.warpscript": {
	source: "iana"
},
	"text/vnd.si.uricatalogue": {
	source: "iana"
},
	"text/vnd.sosi": {
	source: "iana"
},
	"text/vnd.sun.j2me.app-descriptor": {
	source: "iana",
	charset: "UTF-8",
	extensions: [
		"jad"
	]
},
	"text/vnd.trolltech.linguist": {
	source: "iana",
	charset: "UTF-8"
},
	"text/vnd.wap.si": {
	source: "iana"
},
	"text/vnd.wap.sl": {
	source: "iana"
},
	"text/vnd.wap.wml": {
	source: "iana",
	extensions: [
		"wml"
	]
},
	"text/vnd.wap.wmlscript": {
	source: "iana",
	extensions: [
		"wmls"
	]
},
	"text/vtt": {
	source: "iana",
	charset: "UTF-8",
	compressible: true,
	extensions: [
		"vtt"
	]
},
	"text/x-asm": {
	source: "apache",
	extensions: [
		"s",
		"asm"
	]
},
	"text/x-c": {
	source: "apache",
	extensions: [
		"c",
		"cc",
		"cxx",
		"cpp",
		"h",
		"hh",
		"dic"
	]
},
	"text/x-component": {
	source: "nginx",
	extensions: [
		"htc"
	]
},
	"text/x-fortran": {
	source: "apache",
	extensions: [
		"f",
		"for",
		"f77",
		"f90"
	]
},
	"text/x-gwt-rpc": {
	compressible: true
},
	"text/x-handlebars-template": {
	extensions: [
		"hbs"
	]
},
	"text/x-java-source": {
	source: "apache",
	extensions: [
		"java"
	]
},
	"text/x-jquery-tmpl": {
	compressible: true
},
	"text/x-lua": {
	extensions: [
		"lua"
	]
},
	"text/x-markdown": {
	compressible: true,
	extensions: [
		"mkd"
	]
},
	"text/x-nfo": {
	source: "apache",
	extensions: [
		"nfo"
	]
},
	"text/x-opml": {
	source: "apache",
	extensions: [
		"opml"
	]
},
	"text/x-org": {
	compressible: true,
	extensions: [
		"org"
	]
},
	"text/x-pascal": {
	source: "apache",
	extensions: [
		"p",
		"pas"
	]
},
	"text/x-processing": {
	compressible: true,
	extensions: [
		"pde"
	]
},
	"text/x-sass": {
	extensions: [
		"sass"
	]
},
	"text/x-scss": {
	extensions: [
		"scss"
	]
},
	"text/x-setext": {
	source: "apache",
	extensions: [
		"etx"
	]
},
	"text/x-sfv": {
	source: "apache",
	extensions: [
		"sfv"
	]
},
	"text/x-suse-ymp": {
	compressible: true,
	extensions: [
		"ymp"
	]
},
	"text/x-uuencode": {
	source: "apache",
	extensions: [
		"uu"
	]
},
	"text/x-vcalendar": {
	source: "apache",
	extensions: [
		"vcs"
	]
},
	"text/x-vcard": {
	source: "apache",
	extensions: [
		"vcf"
	]
},
	"text/xml": {
	source: "iana",
	compressible: true,
	extensions: [
		"xml"
	]
},
	"text/xml-external-parsed-entity": {
	source: "iana"
},
	"text/yaml": {
	compressible: true,
	extensions: [
		"yaml",
		"yml"
	]
},
	"video/1d-interleaved-parityfec": {
	source: "iana"
},
	"video/3gpp": {
	source: "iana",
	extensions: [
		"3gp",
		"3gpp"
	]
},
	"video/3gpp-tt": {
	source: "iana"
},
	"video/3gpp2": {
	source: "iana",
	extensions: [
		"3g2"
	]
},
	"video/av1": {
	source: "iana"
},
	"video/bmpeg": {
	source: "iana"
},
	"video/bt656": {
	source: "iana"
},
	"video/celb": {
	source: "iana"
},
	"video/dv": {
	source: "iana"
},
	"video/encaprtp": {
	source: "iana"
},
	"video/ffv1": {
	source: "iana"
},
	"video/flexfec": {
	source: "iana"
},
	"video/h261": {
	source: "iana",
	extensions: [
		"h261"
	]
},
	"video/h263": {
	source: "iana",
	extensions: [
		"h263"
	]
},
	"video/h263-1998": {
	source: "iana"
},
	"video/h263-2000": {
	source: "iana"
},
	"video/h264": {
	source: "iana",
	extensions: [
		"h264"
	]
},
	"video/h264-rcdo": {
	source: "iana"
},
	"video/h264-svc": {
	source: "iana"
},
	"video/h265": {
	source: "iana"
},
	"video/iso.segment": {
	source: "iana",
	extensions: [
		"m4s"
	]
},
	"video/jpeg": {
	source: "iana",
	extensions: [
		"jpgv"
	]
},
	"video/jpeg2000": {
	source: "iana"
},
	"video/jpm": {
	source: "apache",
	extensions: [
		"jpm",
		"jpgm"
	]
},
	"video/jxsv": {
	source: "iana"
},
	"video/mj2": {
	source: "iana",
	extensions: [
		"mj2",
		"mjp2"
	]
},
	"video/mp1s": {
	source: "iana"
},
	"video/mp2p": {
	source: "iana"
},
	"video/mp2t": {
	source: "iana",
	extensions: [
		"ts"
	]
},
	"video/mp4": {
	source: "iana",
	compressible: false,
	extensions: [
		"mp4",
		"mp4v",
		"mpg4"
	]
},
	"video/mp4v-es": {
	source: "iana"
},
	"video/mpeg": {
	source: "iana",
	compressible: false,
	extensions: [
		"mpeg",
		"mpg",
		"mpe",
		"m1v",
		"m2v"
	]
},
	"video/mpeg4-generic": {
	source: "iana"
},
	"video/mpv": {
	source: "iana"
},
	"video/nv": {
	source: "iana"
},
	"video/ogg": {
	source: "iana",
	compressible: false,
	extensions: [
		"ogv"
	]
},
	"video/parityfec": {
	source: "iana"
},
	"video/pointer": {
	source: "iana"
},
	"video/quicktime": {
	source: "iana",
	compressible: false,
	extensions: [
		"qt",
		"mov"
	]
},
	"video/raptorfec": {
	source: "iana"
},
	"video/raw": {
	source: "iana"
},
	"video/rtp-enc-aescm128": {
	source: "iana"
},
	"video/rtploopback": {
	source: "iana"
},
	"video/rtx": {
	source: "iana"
},
	"video/scip": {
	source: "iana"
},
	"video/smpte291": {
	source: "iana"
},
	"video/smpte292m": {
	source: "iana"
},
	"video/ulpfec": {
	source: "iana"
},
	"video/vc1": {
	source: "iana"
},
	"video/vc2": {
	source: "iana"
},
	"video/vnd.cctv": {
	source: "iana"
},
	"video/vnd.dece.hd": {
	source: "iana",
	extensions: [
		"uvh",
		"uvvh"
	]
},
	"video/vnd.dece.mobile": {
	source: "iana",
	extensions: [
		"uvm",
		"uvvm"
	]
},
	"video/vnd.dece.mp4": {
	source: "iana"
},
	"video/vnd.dece.pd": {
	source: "iana",
	extensions: [
		"uvp",
		"uvvp"
	]
},
	"video/vnd.dece.sd": {
	source: "iana",
	extensions: [
		"uvs",
		"uvvs"
	]
},
	"video/vnd.dece.video": {
	source: "iana",
	extensions: [
		"uvv",
		"uvvv"
	]
},
	"video/vnd.directv.mpeg": {
	source: "iana"
},
	"video/vnd.directv.mpeg-tts": {
	source: "iana"
},
	"video/vnd.dlna.mpeg-tts": {
	source: "iana"
},
	"video/vnd.dvb.file": {
	source: "iana",
	extensions: [
		"dvb"
	]
},
	"video/vnd.fvt": {
	source: "iana",
	extensions: [
		"fvt"
	]
},
	"video/vnd.hns.video": {
	source: "iana"
},
	"video/vnd.iptvforum.1dparityfec-1010": {
	source: "iana"
},
	"video/vnd.iptvforum.1dparityfec-2005": {
	source: "iana"
},
	"video/vnd.iptvforum.2dparityfec-1010": {
	source: "iana"
},
	"video/vnd.iptvforum.2dparityfec-2005": {
	source: "iana"
},
	"video/vnd.iptvforum.ttsavc": {
	source: "iana"
},
	"video/vnd.iptvforum.ttsmpeg2": {
	source: "iana"
},
	"video/vnd.motorola.video": {
	source: "iana"
},
	"video/vnd.motorola.videop": {
	source: "iana"
},
	"video/vnd.mpegurl": {
	source: "iana",
	extensions: [
		"mxu",
		"m4u"
	]
},
	"video/vnd.ms-playready.media.pyv": {
	source: "iana",
	extensions: [
		"pyv"
	]
},
	"video/vnd.nokia.interleaved-multimedia": {
	source: "iana"
},
	"video/vnd.nokia.mp4vr": {
	source: "iana"
},
	"video/vnd.nokia.videovoip": {
	source: "iana"
},
	"video/vnd.objectvideo": {
	source: "iana"
},
	"video/vnd.radgamettools.bink": {
	source: "iana"
},
	"video/vnd.radgamettools.smacker": {
	source: "iana"
},
	"video/vnd.sealed.mpeg1": {
	source: "iana"
},
	"video/vnd.sealed.mpeg4": {
	source: "iana"
},
	"video/vnd.sealed.swf": {
	source: "iana"
},
	"video/vnd.sealedmedia.softseal.mov": {
	source: "iana"
},
	"video/vnd.uvvu.mp4": {
	source: "iana",
	extensions: [
		"uvu",
		"uvvu"
	]
},
	"video/vnd.vivo": {
	source: "iana",
	extensions: [
		"viv"
	]
},
	"video/vnd.youtube.yt": {
	source: "iana"
},
	"video/vp8": {
	source: "iana"
},
	"video/vp9": {
	source: "iana"
},
	"video/webm": {
	source: "apache",
	compressible: false,
	extensions: [
		"webm"
	]
},
	"video/x-f4v": {
	source: "apache",
	extensions: [
		"f4v"
	]
},
	"video/x-fli": {
	source: "apache",
	extensions: [
		"fli"
	]
},
	"video/x-flv": {
	source: "apache",
	compressible: false,
	extensions: [
		"flv"
	]
},
	"video/x-m4v": {
	source: "apache",
	extensions: [
		"m4v"
	]
},
	"video/x-matroska": {
	source: "apache",
	compressible: false,
	extensions: [
		"mkv",
		"mk3d",
		"mks"
	]
},
	"video/x-mng": {
	source: "apache",
	extensions: [
		"mng"
	]
},
	"video/x-ms-asf": {
	source: "apache",
	extensions: [
		"asf",
		"asx"
	]
},
	"video/x-ms-vob": {
	source: "apache",
	extensions: [
		"vob"
	]
},
	"video/x-ms-wm": {
	source: "apache",
	extensions: [
		"wm"
	]
},
	"video/x-ms-wmv": {
	source: "apache",
	compressible: false,
	extensions: [
		"wmv"
	]
},
	"video/x-ms-wmx": {
	source: "apache",
	extensions: [
		"wmx"
	]
},
	"video/x-ms-wvx": {
	source: "apache",
	extensions: [
		"wvx"
	]
},
	"video/x-msvideo": {
	source: "apache",
	extensions: [
		"avi"
	]
},
	"video/x-sgi-movie": {
	source: "apache",
	extensions: [
		"movie"
	]
},
	"video/x-smv": {
	source: "apache",
	extensions: [
		"smv"
	]
},
	"x-conference/x-cooltalk": {
	source: "apache",
	extensions: [
		"ice"
	]
},
	"x-shader/x-fragment": {
	compressible: true
},
	"x-shader/x-vertex": {
	compressible: true
}
};

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */

var hasRequiredMimeDb;

function requireMimeDb () {
	if (hasRequiredMimeDb) return mimeDb.exports;
	hasRequiredMimeDb = 1;
	(function (module) {
		/**
		 * Module exports.
		 */

		module.exports = require$$0;
} (mimeDb));
	return mimeDb.exports;
}

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

var hasRequiredMimeTypes;

function requireMimeTypes () {
	if (hasRequiredMimeTypes) return mimeTypes;
	hasRequiredMimeTypes = 1;
	(function (exports) {

		/**
		 * Module dependencies.
		 * @private
		 */

		var db = requireMimeDb();
		var extname = require$$1__default$1["default"].extname;

		/**
		 * Module variables.
		 * @private
		 */

		var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
		var TEXT_TYPE_REGEXP = /^text\//i;

		/**
		 * Module exports.
		 * @public
		 */

		exports.charset = charset;
		exports.charsets = { lookup: charset };
		exports.contentType = contentType;
		exports.extension = extension;
		exports.extensions = Object.create(null);
		exports.lookup = lookup;
		exports.types = Object.create(null);

		// Populate the extensions/types maps
		populateMaps(exports.extensions, exports.types);

		/**
		 * Get the default charset for a MIME type.
		 *
		 * @param {string} type
		 * @return {boolean|string}
		 */

		function charset (type) {
		  if (!type || typeof type !== 'string') {
		    return false
		  }

		  // TODO: use media-typer
		  var match = EXTRACT_TYPE_REGEXP.exec(type);
		  var mime = match && db[match[1].toLowerCase()];

		  if (mime && mime.charset) {
		    return mime.charset
		  }

		  // default text/* to utf-8
		  if (match && TEXT_TYPE_REGEXP.test(match[1])) {
		    return 'UTF-8'
		  }

		  return false
		}

		/**
		 * Create a full Content-Type header given a MIME type or extension.
		 *
		 * @param {string} str
		 * @return {boolean|string}
		 */

		function contentType (str) {
		  // TODO: should this even be in this module?
		  if (!str || typeof str !== 'string') {
		    return false
		  }

		  var mime = str.indexOf('/') === -1
		    ? exports.lookup(str)
		    : str;

		  if (!mime) {
		    return false
		  }

		  // TODO: use content-type or other module
		  if (mime.indexOf('charset') === -1) {
		    var charset = exports.charset(mime);
		    if (charset) mime += '; charset=' + charset.toLowerCase();
		  }

		  return mime
		}

		/**
		 * Get the default extension for a MIME type.
		 *
		 * @param {string} type
		 * @return {boolean|string}
		 */

		function extension (type) {
		  if (!type || typeof type !== 'string') {
		    return false
		  }

		  // TODO: use media-typer
		  var match = EXTRACT_TYPE_REGEXP.exec(type);

		  // get extensions
		  var exts = match && exports.extensions[match[1].toLowerCase()];

		  if (!exts || !exts.length) {
		    return false
		  }

		  return exts[0]
		}

		/**
		 * Lookup the MIME type for a file path/extension.
		 *
		 * @param {string} path
		 * @return {boolean|string}
		 */

		function lookup (path) {
		  if (!path || typeof path !== 'string') {
		    return false
		  }

		  // get the extension ("ext" or ".ext" or full path)
		  var extension = extname('x.' + path)
		    .toLowerCase()
		    .substr(1);

		  if (!extension) {
		    return false
		  }

		  return exports.types[extension] || false
		}

		/**
		 * Populate the extensions and types maps.
		 * @private
		 */

		function populateMaps (extensions, types) {
		  // source preference (least -> most)
		  var preference = ['nginx', 'apache', undefined, 'iana'];

		  Object.keys(db).forEach(function forEachMimeType (type) {
		    var mime = db[type];
		    var exts = mime.extensions;

		    if (!exts || !exts.length) {
		      return
		    }

		    // mime -> extensions
		    extensions[type] = exts;

		    // extension -> mime
		    for (var i = 0; i < exts.length; i++) {
		      var extension = exts[i];

		      if (types[extension]) {
		        var from = preference.indexOf(db[types[extension]].source);
		        var to = preference.indexOf(mime.source);

		        if (types[extension] !== 'application/octet-stream' &&
		          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
		          // skip the remapping
		          continue
		        }
		      }

		      // set the extension -> mime
		      types[extension] = type;
		    }
		  });
		}
} (mimeTypes));
	return mimeTypes;
}

var defer_1;
var hasRequiredDefer;

function requireDefer () {
	if (hasRequiredDefer) return defer_1;
	hasRequiredDefer = 1;
	defer_1 = defer;

	/**
	 * Runs provided function on next iteration of the event loop
	 *
	 * @param {function} fn - function to run
	 */
	function defer(fn)
	{
	  var nextTick = typeof setImmediate == 'function'
	    ? setImmediate
	    : (
	      typeof process == 'object' && typeof process.nextTick == 'function'
	      ? process.nextTick
	      : null
	    );

	  if (nextTick)
	  {
	    nextTick(fn);
	  }
	  else
	  {
	    setTimeout(fn, 0);
	  }
	}
	return defer_1;
}

var async_1;
var hasRequiredAsync;

function requireAsync () {
	if (hasRequiredAsync) return async_1;
	hasRequiredAsync = 1;
	var defer = requireDefer();

	// API
	async_1 = async;

	/**
	 * Runs provided callback asynchronously
	 * even if callback itself is not
	 *
	 * @param   {function} callback - callback to invoke
	 * @returns {function} - augmented callback
	 */
	function async(callback)
	{
	  var isAsync = false;

	  // check if async happened
	  defer(function() { isAsync = true; });

	  return function async_callback(err, result)
	  {
	    if (isAsync)
	    {
	      callback(err, result);
	    }
	    else
	    {
	      defer(function nextTick_callback()
	      {
	        callback(err, result);
	      });
	    }
	  };
	}
	return async_1;
}

var abort_1;
var hasRequiredAbort;

function requireAbort () {
	if (hasRequiredAbort) return abort_1;
	hasRequiredAbort = 1;
	// API
	abort_1 = abort;

	/**
	 * Aborts leftover active jobs
	 *
	 * @param {object} state - current state object
	 */
	function abort(state)
	{
	  Object.keys(state.jobs).forEach(clean.bind(state));

	  // reset leftover jobs
	  state.jobs = {};
	}

	/**
	 * Cleans up leftover job by invoking abort function for the provided job id
	 *
	 * @this  state
	 * @param {string|number} key - job id to abort
	 */
	function clean(key)
	{
	  if (typeof this.jobs[key] == 'function')
	  {
	    this.jobs[key]();
	  }
	}
	return abort_1;
}

var iterate_1;
var hasRequiredIterate;

function requireIterate () {
	if (hasRequiredIterate) return iterate_1;
	hasRequiredIterate = 1;
	var async = requireAsync()
	  , abort = requireAbort()
	  ;

	// API
	iterate_1 = iterate;

	/**
	 * Iterates over each job object
	 *
	 * @param {array|object} list - array or object (named list) to iterate over
	 * @param {function} iterator - iterator to run
	 * @param {object} state - current job status
	 * @param {function} callback - invoked when all elements processed
	 */
	function iterate(list, iterator, state, callback)
	{
	  // store current index
	  var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;

	  state.jobs[key] = runJob(iterator, key, list[key], function(error, output)
	  {
	    // don't repeat yourself
	    // skip secondary callbacks
	    if (!(key in state.jobs))
	    {
	      return;
	    }

	    // clean up jobs
	    delete state.jobs[key];

	    if (error)
	    {
	      // don't process rest of the results
	      // stop still active jobs
	      // and reset the list
	      abort(state);
	    }
	    else
	    {
	      state.results[key] = output;
	    }

	    // return salvaged results
	    callback(error, state.results);
	  });
	}

	/**
	 * Runs iterator over provided job element
	 *
	 * @param   {function} iterator - iterator to invoke
	 * @param   {string|number} key - key/index of the element in the list of jobs
	 * @param   {mixed} item - job description
	 * @param   {function} callback - invoked after iterator is done with the job
	 * @returns {function|mixed} - job abort function or something else
	 */
	function runJob(iterator, key, item, callback)
	{
	  var aborter;

	  // allow shortcut if iterator expects only two arguments
	  if (iterator.length == 2)
	  {
	    aborter = iterator(item, async(callback));
	  }
	  // otherwise go with full three arguments
	  else
	  {
	    aborter = iterator(item, key, async(callback));
	  }

	  return aborter;
	}
	return iterate_1;
}

var state_1;
var hasRequiredState;

function requireState () {
	if (hasRequiredState) return state_1;
	hasRequiredState = 1;
	// API
	state_1 = state;

	/**
	 * Creates initial state object
	 * for iteration over list
	 *
	 * @param   {array|object} list - list to iterate over
	 * @param   {function|null} sortMethod - function to use for keys sort,
	 *                                     or `null` to keep them as is
	 * @returns {object} - initial state object
	 */
	function state(list, sortMethod)
	{
	  var isNamedList = !Array.isArray(list)
	    , initState =
	    {
	      index    : 0,
	      keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
	      jobs     : {},
	      results  : isNamedList ? {} : [],
	      size     : isNamedList ? Object.keys(list).length : list.length
	    }
	    ;

	  if (sortMethod)
	  {
	    // sort array keys based on it's values
	    // sort object's keys just on own merit
	    initState.keyedList.sort(isNamedList ? sortMethod : function(a, b)
	    {
	      return sortMethod(list[a], list[b]);
	    });
	  }

	  return initState;
	}
	return state_1;
}

var terminator_1;
var hasRequiredTerminator;

function requireTerminator () {
	if (hasRequiredTerminator) return terminator_1;
	hasRequiredTerminator = 1;
	var abort = requireAbort()
	  , async = requireAsync()
	  ;

	// API
	terminator_1 = terminator;

	/**
	 * Terminates jobs in the attached state context
	 *
	 * @this  AsyncKitState#
	 * @param {function} callback - final callback to invoke after termination
	 */
	function terminator(callback)
	{
	  if (!Object.keys(this.jobs).length)
	  {
	    return;
	  }

	  // fast forward iteration index
	  this.index = this.size;

	  // abort jobs
	  abort(this);

	  // send back results we have so far
	  async(callback)(null, this.results);
	}
	return terminator_1;
}

var parallel_1;
var hasRequiredParallel;

function requireParallel () {
	if (hasRequiredParallel) return parallel_1;
	hasRequiredParallel = 1;
	var iterate    = requireIterate()
	  , initState  = requireState()
	  , terminator = requireTerminator()
	  ;

	// Public API
	parallel_1 = parallel;

	/**
	 * Runs iterator over provided array elements in parallel
	 *
	 * @param   {array|object} list - array or object (named list) to iterate over
	 * @param   {function} iterator - iterator to run
	 * @param   {function} callback - invoked when all elements processed
	 * @returns {function} - jobs terminator
	 */
	function parallel(list, iterator, callback)
	{
	  var state = initState(list);

	  while (state.index < (state['keyedList'] || list).length)
	  {
	    iterate(list, iterator, state, function(error, result)
	    {
	      if (error)
	      {
	        callback(error, result);
	        return;
	      }

	      // looks like it's the last one
	      if (Object.keys(state.jobs).length === 0)
	      {
	        callback(null, state.results);
	        return;
	      }
	    });

	    state.index++;
	  }

	  return terminator.bind(state, callback);
	}
	return parallel_1;
}

var serialOrdered = {exports: {}};

var hasRequiredSerialOrdered;

function requireSerialOrdered () {
	if (hasRequiredSerialOrdered) return serialOrdered.exports;
	hasRequiredSerialOrdered = 1;
	var iterate    = requireIterate()
	  , initState  = requireState()
	  , terminator = requireTerminator()
	  ;

	// Public API
	serialOrdered.exports = serialOrdered$1;
	// sorting helpers
	serialOrdered.exports.ascending  = ascending;
	serialOrdered.exports.descending = descending;

	/**
	 * Runs iterator over provided sorted array elements in series
	 *
	 * @param   {array|object} list - array or object (named list) to iterate over
	 * @param   {function} iterator - iterator to run
	 * @param   {function} sortMethod - custom sort function
	 * @param   {function} callback - invoked when all elements processed
	 * @returns {function} - jobs terminator
	 */
	function serialOrdered$1(list, iterator, sortMethod, callback)
	{
	  var state = initState(list, sortMethod);

	  iterate(list, iterator, state, function iteratorHandler(error, result)
	  {
	    if (error)
	    {
	      callback(error, result);
	      return;
	    }

	    state.index++;

	    // are we there yet?
	    if (state.index < (state['keyedList'] || list).length)
	    {
	      iterate(list, iterator, state, iteratorHandler);
	      return;
	    }

	    // done here
	    callback(null, state.results);
	  });

	  return terminator.bind(state, callback);
	}

	/*
	 * -- Sort methods
	 */

	/**
	 * sort helper to sort array elements in ascending order
	 *
	 * @param   {mixed} a - an item to compare
	 * @param   {mixed} b - an item to compare
	 * @returns {number} - comparison result
	 */
	function ascending(a, b)
	{
	  return a < b ? -1 : a > b ? 1 : 0;
	}

	/**
	 * sort helper to sort array elements in descending order
	 *
	 * @param   {mixed} a - an item to compare
	 * @param   {mixed} b - an item to compare
	 * @returns {number} - comparison result
	 */
	function descending(a, b)
	{
	  return -1 * ascending(a, b);
	}
	return serialOrdered.exports;
}

var serial_1;
var hasRequiredSerial;

function requireSerial () {
	if (hasRequiredSerial) return serial_1;
	hasRequiredSerial = 1;
	var serialOrdered = requireSerialOrdered();

	// Public API
	serial_1 = serial;

	/**
	 * Runs iterator over provided array elements in series
	 *
	 * @param   {array|object} list - array or object (named list) to iterate over
	 * @param   {function} iterator - iterator to run
	 * @param   {function} callback - invoked when all elements processed
	 * @returns {function} - jobs terminator
	 */
	function serial(list, iterator, callback)
	{
	  return serialOrdered(list, iterator, null, callback);
	}
	return serial_1;
}

var asynckit;
var hasRequiredAsynckit;

function requireAsynckit () {
	if (hasRequiredAsynckit) return asynckit;
	hasRequiredAsynckit = 1;
	asynckit =
	{
	  parallel      : requireParallel(),
	  serial        : requireSerial(),
	  serialOrdered : requireSerialOrdered()
	};
	return asynckit;
}

var populate;
var hasRequiredPopulate;

function requirePopulate () {
	if (hasRequiredPopulate) return populate;
	hasRequiredPopulate = 1;
	// populates missing values
	populate = function(dst, src) {

	  Object.keys(src).forEach(function(prop)
	  {
	    dst[prop] = dst[prop] || src[prop];
	  });

	  return dst;
	};
	return populate;
}

var form_data;
var hasRequiredForm_data;

function requireForm_data () {
	if (hasRequiredForm_data) return form_data;
	hasRequiredForm_data = 1;
	var CombinedStream = requireCombined_stream();
	var util = requireUtil();
	var path = require$$1__default$1["default"];
	var http = require$$1__default["default"];
	var https = require$$2__default["default"];
	var parseUrl = requireUrl().parse;
	var fs = require$$3__default["default"];
	var Stream = require$$3__default$1["default"].Stream;
	var mime = requireMimeTypes();
	var asynckit = requireAsynckit();
	var populate = requirePopulate();

	// Public API
	form_data = FormData;

	// make it a Stream
	util.inherits(FormData, CombinedStream);

	/**
	 * Create readable "multipart/form-data" streams.
	 * Can be used to submit forms
	 * and file uploads to other web applications.
	 *
	 * @constructor
	 * @param {Object} options - Properties to be added/overriden for FormData and CombinedStream
	 */
	function FormData(options) {
	  if (!(this instanceof FormData)) {
	    return new FormData(options);
	  }

	  this._overheadLength = 0;
	  this._valueLength = 0;
	  this._valuesToMeasure = [];

	  CombinedStream.call(this);

	  options = options || {};
	  for (var option in options) {
	    this[option] = options[option];
	  }
	}

	FormData.LINE_BREAK = '\r\n';
	FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';

	FormData.prototype.append = function(field, value, options) {

	  options = options || {};

	  // allow filename as single option
	  if (typeof options == 'string') {
	    options = {filename: options};
	  }

	  var append = CombinedStream.prototype.append.bind(this);

	  // all that streamy business can't handle numbers
	  if (typeof value == 'number') {
	    value = '' + value;
	  }

	  // https://github.com/felixge/node-form-data/issues/38
	  if (util.isArray(value)) {
	    // Please convert your array into string
	    // the way web server expects it
	    this._error(new Error('Arrays are not supported.'));
	    return;
	  }

	  var header = this._multiPartHeader(field, value, options);
	  var footer = this._multiPartFooter();

	  append(header);
	  append(value);
	  append(footer);

	  // pass along options.knownLength
	  this._trackLength(header, value, options);
	};

	FormData.prototype._trackLength = function(header, value, options) {
	  var valueLength = 0;

	  // used w/ getLengthSync(), when length is known.
	  // e.g. for streaming directly from a remote server,
	  // w/ a known file a size, and not wanting to wait for
	  // incoming file to finish to get its size.
	  if (options.knownLength != null) {
	    valueLength += +options.knownLength;
	  } else if (Buffer.isBuffer(value)) {
	    valueLength = value.length;
	  } else if (typeof value === 'string') {
	    valueLength = Buffer.byteLength(value);
	  }

	  this._valueLength += valueLength;

	  // @check why add CRLF? does this account for custom/multiple CRLFs?
	  this._overheadLength +=
	    Buffer.byteLength(header) +
	    FormData.LINE_BREAK.length;

	  // empty or either doesn't have path or not an http response or not a stream
	  if (!value || ( !value.path && !(value.readable && value.hasOwnProperty('httpVersion')) && !(value instanceof Stream))) {
	    return;
	  }

	  // no need to bother with the length
	  if (!options.knownLength) {
	    this._valuesToMeasure.push(value);
	  }
	};

	FormData.prototype._lengthRetriever = function(value, callback) {

	  if (value.hasOwnProperty('fd')) {

	    // take read range into a account
	    // `end` = Infinity –> read file till the end
	    //
	    // TODO: Looks like there is bug in Node fs.createReadStream
	    // it doesn't respect `end` options without `start` options
	    // Fix it when node fixes it.
	    // https://github.com/joyent/node/issues/7819
	    if (value.end != undefined && value.end != Infinity && value.start != undefined) {

	      // when end specified
	      // no need to calculate range
	      // inclusive, starts with 0
	      callback(null, value.end + 1 - (value.start ? value.start : 0));

	    // not that fast snoopy
	    } else {
	      // still need to fetch file size from fs
	      fs.stat(value.path, function(err, stat) {

	        var fileSize;

	        if (err) {
	          callback(err);
	          return;
	        }

	        // update final size based on the range options
	        fileSize = stat.size - (value.start ? value.start : 0);
	        callback(null, fileSize);
	      });
	    }

	  // or http response
	  } else if (value.hasOwnProperty('httpVersion')) {
	    callback(null, +value.headers['content-length']);

	  // or request stream http://github.com/mikeal/request
	  } else if (value.hasOwnProperty('httpModule')) {
	    // wait till response come back
	    value.on('response', function(response) {
	      value.pause();
	      callback(null, +response.headers['content-length']);
	    });
	    value.resume();

	  // something else
	  } else {
	    callback('Unknown stream');
	  }
	};

	FormData.prototype._multiPartHeader = function(field, value, options) {
	  // custom header specified (as string)?
	  // it becomes responsible for boundary
	  // (e.g. to handle extra CRLFs on .NET servers)
	  if (typeof options.header == 'string') {
	    return options.header;
	  }

	  var contentDisposition = this._getContentDisposition(value, options);
	  var contentType = this._getContentType(value, options);

	  var contents = '';
	  var headers  = {
	    // add custom disposition as third element or keep it two elements if not
	    'Content-Disposition': ['form-data', 'name="' + field + '"'].concat(contentDisposition || []),
	    // if no content type. allow it to be empty array
	    'Content-Type': [].concat(contentType || [])
	  };

	  // allow custom headers.
	  if (typeof options.header == 'object') {
	    populate(headers, options.header);
	  }

	  var header;
	  for (var prop in headers) {
	    if (!headers.hasOwnProperty(prop)) continue;
	    header = headers[prop];

	    // skip nullish headers.
	    if (header == null) {
	      continue;
	    }

	    // convert all headers to arrays.
	    if (!Array.isArray(header)) {
	      header = [header];
	    }

	    // add non-empty headers.
	    if (header.length) {
	      contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
	    }
	  }

	  return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
	};

	FormData.prototype._getContentDisposition = function(value, options) {

	  var filename
	    , contentDisposition
	    ;

	  if (typeof options.filepath === 'string') {
	    // custom filepath for relative paths
	    filename = path.normalize(options.filepath).replace(/\\/g, '/');
	  } else if (options.filename || value.name || value.path) {
	    // custom filename take precedence
	    // formidable and the browser add a name property
	    // fs- and request- streams have path property
	    filename = path.basename(options.filename || value.name || value.path);
	  } else if (value.readable && value.hasOwnProperty('httpVersion')) {
	    // or try http response
	    filename = path.basename(value.client._httpMessage.path || '');
	  }

	  if (filename) {
	    contentDisposition = 'filename="' + filename + '"';
	  }

	  return contentDisposition;
	};

	FormData.prototype._getContentType = function(value, options) {

	  // use custom content-type above all
	  var contentType = options.contentType;

	  // or try `name` from formidable, browser
	  if (!contentType && value.name) {
	    contentType = mime.lookup(value.name);
	  }

	  // or try `path` from fs-, request- streams
	  if (!contentType && value.path) {
	    contentType = mime.lookup(value.path);
	  }

	  // or if it's http-reponse
	  if (!contentType && value.readable && value.hasOwnProperty('httpVersion')) {
	    contentType = value.headers['content-type'];
	  }

	  // or guess it from the filepath or filename
	  if (!contentType && (options.filepath || options.filename)) {
	    contentType = mime.lookup(options.filepath || options.filename);
	  }

	  // fallback to the default content type if `value` is not simple value
	  if (!contentType && typeof value == 'object') {
	    contentType = FormData.DEFAULT_CONTENT_TYPE;
	  }

	  return contentType;
	};

	FormData.prototype._multiPartFooter = function() {
	  return function(next) {
	    var footer = FormData.LINE_BREAK;

	    var lastPart = (this._streams.length === 0);
	    if (lastPart) {
	      footer += this._lastBoundary();
	    }

	    next(footer);
	  }.bind(this);
	};

	FormData.prototype._lastBoundary = function() {
	  return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
	};

	FormData.prototype.getHeaders = function(userHeaders) {
	  var header;
	  var formHeaders = {
	    'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
	  };

	  for (header in userHeaders) {
	    if (userHeaders.hasOwnProperty(header)) {
	      formHeaders[header.toLowerCase()] = userHeaders[header];
	    }
	  }

	  return formHeaders;
	};

	FormData.prototype.setBoundary = function(boundary) {
	  this._boundary = boundary;
	};

	FormData.prototype.getBoundary = function() {
	  if (!this._boundary) {
	    this._generateBoundary();
	  }

	  return this._boundary;
	};

	FormData.prototype.getBuffer = function() {
	  var dataBuffer = new Buffer.alloc( 0 );
	  var boundary = this.getBoundary();

	  // Create the form content. Add Line breaks to the end of data.
	  for (var i = 0, len = this._streams.length; i < len; i++) {
	    if (typeof this._streams[i] !== 'function') {

	      // Add content to the buffer.
	      if(Buffer.isBuffer(this._streams[i])) {
	        dataBuffer = Buffer.concat( [dataBuffer, this._streams[i]]);
	      }else {
	        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(this._streams[i])]);
	      }

	      // Add break after content.
	      if (typeof this._streams[i] !== 'string' || this._streams[i].substring( 2, boundary.length + 2 ) !== boundary) {
	        dataBuffer = Buffer.concat( [dataBuffer, Buffer.from(FormData.LINE_BREAK)] );
	      }
	    }
	  }

	  // Add the footer and return the Buffer object.
	  return Buffer.concat( [dataBuffer, Buffer.from(this._lastBoundary())] );
	};

	FormData.prototype._generateBoundary = function() {
	  // This generates a 50 character boundary similar to those used by Firefox.
	  // They are optimized for boyer-moore parsing.
	  var boundary = '--------------------------';
	  for (var i = 0; i < 24; i++) {
	    boundary += Math.floor(Math.random() * 10).toString(16);
	  }

	  this._boundary = boundary;
	};

	// Note: getLengthSync DOESN'T calculate streams length
	// As workaround one can calculate file size manually
	// and add it as knownLength option
	FormData.prototype.getLengthSync = function() {
	  var knownLength = this._overheadLength + this._valueLength;

	  // Don't get confused, there are 3 "internal" streams for each keyval pair
	  // so it basically checks if there is any value added to the form
	  if (this._streams.length) {
	    knownLength += this._lastBoundary().length;
	  }

	  // https://github.com/form-data/form-data/issues/40
	  if (!this.hasKnownLength()) {
	    // Some async length retrievers are present
	    // therefore synchronous length calculation is false.
	    // Please use getLength(callback) to get proper length
	    this._error(new Error('Cannot calculate proper length in synchronous way.'));
	  }

	  return knownLength;
	};

	// Public API to check if length of added values is known
	// https://github.com/form-data/form-data/issues/196
	// https://github.com/form-data/form-data/issues/262
	FormData.prototype.hasKnownLength = function() {
	  var hasKnownLength = true;

	  if (this._valuesToMeasure.length) {
	    hasKnownLength = false;
	  }

	  return hasKnownLength;
	};

	FormData.prototype.getLength = function(cb) {
	  var knownLength = this._overheadLength + this._valueLength;

	  if (this._streams.length) {
	    knownLength += this._lastBoundary().length;
	  }

	  if (!this._valuesToMeasure.length) {
	    process.nextTick(cb.bind(this, null, knownLength));
	    return;
	  }

	  asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
	    if (err) {
	      cb(err);
	      return;
	    }

	    values.forEach(function(length) {
	      knownLength += length;
	    });

	    cb(null, knownLength);
	  });
	};

	FormData.prototype.submit = function(params, cb) {
	  var request
	    , options
	    , defaults = {method: 'post'}
	    ;

	  // parse provided url if it's string
	  // or treat it as options object
	  if (typeof params == 'string') {

	    params = parseUrl(params);
	    options = populate({
	      port: params.port,
	      path: params.pathname,
	      host: params.hostname,
	      protocol: params.protocol
	    }, defaults);

	  // use custom params
	  } else {

	    options = populate(params, defaults);
	    // if no port provided use default one
	    if (!options.port) {
	      options.port = options.protocol == 'https:' ? 443 : 80;
	    }
	  }

	  // put that good code in getHeaders to some use
	  options.headers = this.getHeaders(params.headers);

	  // https if specified, fallback to http in any other case
	  if (options.protocol == 'https:') {
	    request = https.request(options);
	  } else {
	    request = http.request(options);
	  }

	  // get content length and fire away
	  this.getLength(function(err, length) {
	    if (err && err !== 'Unknown stream') {
	      this._error(err);
	      return;
	    }

	    // add content length
	    if (length) {
	      request.setHeader('Content-Length', length);
	    }

	    this.pipe(request);
	    if (cb) {
	      var onResponse;

	      var callback = function (error, responce) {
	        request.removeListener('error', callback);
	        request.removeListener('response', onResponse);

	        return cb.call(this, error, responce);
	      };

	      onResponse = callback.bind(this, null);

	      request.on('error', callback);
	      request.on('response', onResponse);
	    }
	  }.bind(this));

	  return request;
	};

	FormData.prototype._error = function(err) {
	  if (!this.error) {
	    this.error = err;
	    this.pause();
	    this.emit('error', err);
	  }
	};

	FormData.prototype.toString = function () {
	  return '[object FormData]';
	};
	return form_data;
}

var hasRequiredFormData;

function requireFormData () {
	if (hasRequiredFormData) return FormData$1.exports;
	hasRequiredFormData = 1;
	(function (module) {
		// eslint-disable-next-line strict
		module.exports = requireForm_data();
} (FormData$1));
	return FormData$1.exports;
}

var utils$5 = utils$b;
var normalizeHeaderName = normalizeHeaderName$1;
var AxiosError$1 = AxiosError_1;
var transitionalDefaults = transitional;
var toFormData = toFormData_1;

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = requireXhr();
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = requireHttp();
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils$5.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$5.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults$3 = {

  transitional: transitionalDefaults,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils$5.isFormData(data) ||
      utils$5.isArrayBuffer(data) ||
      utils$5.isBuffer(data) ||
      utils$5.isStream(data) ||
      utils$5.isFile(data) ||
      utils$5.isBlob(data)
    ) {
      return data;
    }
    if (utils$5.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils$5.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    var isObjectPayload = utils$5.isObject(data);
    var contentType = headers && headers['Content-Type'];

    var isFileList;

    if ((isFileList = utils$5.isFileList(data)) || (isObjectPayload && contentType === 'multipart/form-data')) {
      var _FormData = this.env && this.env.FormData;
      return toFormData(isFileList ? {'files[]': data} : data, _FormData && new _FormData());
    } else if (isObjectPayload || contentType === 'application/json') {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults$3.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils$5.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: requireFormData()
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils$5.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});

utils$5.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$5.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults$3;

var utils$4 = utils$b;
var defaults$2 = defaults_1;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData$1 = function transformData(data, headers, fns) {
  var context = this || defaults$2;
  /*eslint no-param-reassign:0*/
  utils$4.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};

var isCancel$1;
var hasRequiredIsCancel;

function requireIsCancel () {
	if (hasRequiredIsCancel) return isCancel$1;
	hasRequiredIsCancel = 1;

	isCancel$1 = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};
	return isCancel$1;
}

var utils$3 = utils$b;
var transformData = transformData$1;
var isCancel = requireIsCancel();
var defaults$1 = defaults_1;
var CanceledError = requireCanceledError();

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest$1 = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils$3.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils$3.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults$1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

var utils$2 = utils$b;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig$2 = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source)) {
      return utils$2.merge(target, source);
    } else if (utils$2.isPlainObject(source)) {
      return utils$2.merge({}, source);
    } else if (utils$2.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils$2.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils$2.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'beforeRedirect': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils$2.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils$2.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};

var VERSION = requireData().version;
var AxiosError = AxiosError_1;

var validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

var validator$1 = {
  assertOptions: assertOptions,
  validators: validators$1
};

var utils$1 = utils$b;
var buildURL = buildURL$1;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var buildFullPath = buildFullPath$1;
var validator = validator$1;

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios$1.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig$1(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios$1.prototype.getUri = function getUri(config) {
  config = mergeConfig$1(this.defaults, config);
  var fullPath = buildFullPath(config.baseURL, config.url);
  return buildURL(fullPath, config.params, config.paramsSerializer);
};

// Provide aliases for supported request methods
utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig$1(config || {}, {
        method: method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url: url,
        data: data
      }));
    };
  }

  Axios$1.prototype[method] = generateHTTPMethod();

  Axios$1.prototype[method + 'Form'] = generateHTTPMethod(true);
});

var Axios_1 = Axios$1;

var CancelToken_1;
var hasRequiredCancelToken;

function requireCancelToken () {
	if (hasRequiredCancelToken) return CancelToken_1;
	hasRequiredCancelToken = 1;

	var CanceledError = requireCanceledError();

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }

	  var resolvePromise;

	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });

	  var token = this;

	  // eslint-disable-next-line func-names
	  this.promise.then(function(cancel) {
	    if (!token._listeners) return;

	    var i;
	    var l = token._listeners.length;

	    for (i = 0; i < l; i++) {
	      token._listeners[i](cancel);
	    }
	    token._listeners = null;
	  });

	  // eslint-disable-next-line func-names
	  this.promise.then = function(onfulfilled) {
	    var _resolve;
	    // eslint-disable-next-line func-names
	    var promise = new Promise(function(resolve) {
	      token.subscribe(resolve);
	      _resolve = resolve;
	    }).then(onfulfilled);

	    promise.cancel = function reject() {
	      token.unsubscribe(_resolve);
	    };

	    return promise;
	  };

	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }

	    token.reason = new CanceledError(message);
	    resolvePromise(token.reason);
	  });
	}

	/**
	 * Throws a `CanceledError` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};

	/**
	 * Subscribe to the cancel signal
	 */

	CancelToken.prototype.subscribe = function subscribe(listener) {
	  if (this.reason) {
	    listener(this.reason);
	    return;
	  }

	  if (this._listeners) {
	    this._listeners.push(listener);
	  } else {
	    this._listeners = [listener];
	  }
	};

	/**
	 * Unsubscribe from the cancel signal
	 */

	CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
	  if (!this._listeners) {
	    return;
	  }
	  var index = this._listeners.indexOf(listener);
	  if (index !== -1) {
	    this._listeners.splice(index, 1);
	  }
	};

	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};

	CancelToken_1 = CancelToken;
	return CancelToken_1;
}

var spread;
var hasRequiredSpread;

function requireSpread () {
	if (hasRequiredSpread) return spread;
	hasRequiredSpread = 1;

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	spread = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};
	return spread;
}

var isAxiosError;
var hasRequiredIsAxiosError;

function requireIsAxiosError () {
	if (hasRequiredIsAxiosError) return isAxiosError;
	hasRequiredIsAxiosError = 1;

	var utils = utils$b;

	/**
	 * Determines whether the payload is an error thrown by Axios
	 *
	 * @param {*} payload The value to test
	 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
	 */
	isAxiosError = function isAxiosError(payload) {
	  return utils.isObject(payload) && (payload.isAxiosError === true);
	};
	return isAxiosError;
}

var utils = utils$b;
var bind = bind$2;
var Axios = Axios_1;
var mergeConfig = mergeConfig$2;
var defaults = defaults_1;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios$1 = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios$1.Axios = Axios;

// Expose Cancel & CancelToken
axios$1.CanceledError = requireCanceledError();
axios$1.CancelToken = requireCancelToken();
axios$1.isCancel = requireIsCancel();
axios$1.VERSION = requireData().version;
axios$1.toFormData = toFormData_1;

// Expose AxiosError class
axios$1.AxiosError = AxiosError_1;

// alias for CanceledError for backward compatibility
axios$1.Cancel = axios$1.CanceledError;

// Expose all/spread
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = requireSpread();

// Expose isAxiosError
axios$1.isAxiosError = requireIsAxiosError();

axios$2.exports = axios$1;

// Allow use of default import syntax in TypeScript
axios$2.exports.default = axios$1;

(function (module) {
	module.exports = axios$2.exports;
} (axios$3));

var axios = /*@__PURE__*/getDefaultExportFromCjs(axios$3.exports);

const client = axios.create({
  baseURL: "http://localhost:5000/api",
});
const axiosRequest = async ({ ...options }) => {
  const onSuccess = (response) => response;
  const onError = (error) => error;
  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

/**
 * Primary UI component for user interaction
 */
var SignUp = function (_a) {
    _a.primary; _a.label; var _d = _a.secretKey, secretKey = _d === void 0 ? "TY858AA8nLimeBI" : _d, _e = _a.project_name, project_name = _e === void 0 ? "1st project" : _e, _f = _a.user_id, user_id = _f === void 0 ? 6 : _f;
    var _g = React.useState([]), emojis = _g[0], setEmojis = _g[1];
    var onClick = function () {
        console.log(secretKey);
        console.log(project_name);
        console.log(user_id);
        axiosRequest({
            method: "POST",
            url: "/serviceUser/getEmojiForPatternUser?emojiName=smil",
            data: {
                projectName: project_name,
                userId: user_id,
                projectSecret: secretKey,
            },
        })
            .then(function (res) {
            setEmojis(res.data.data);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    var _h = React__default["default"].useState(""), username = _h[0], setUsername = _h[1];
    var _j = React__default["default"].useState([]), pattern = _j[0], setPattern = _j[1];
    var _k = React__default["default"].useState([]), password = _k[0], setPassword = _k[1];
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("h1", null,
            "Sign Up with ",
            project_name),
        React__default["default"].createElement("div", { className: "flex-col w-1-3 gap-10" },
            React__default["default"].createElement("label", { className: "" }, "Username"),
            React__default["default"].createElement("input", { type: "text", name: "Usernmae", id: "username", placeholder: "Enter your username", onChange: function (event) {
                    setUsername(event.target.value);
                }, value: username }),
            React__default["default"].createElement("label", { className: "" }, "Unique Pattern"),
            emojis.length === 0 && (React__default["default"].createElement("button", { className: "signup-button", onClick: onClick }, "Create Story")),
            emojis.length > 0 && (React__default["default"].createElement("input", { type: "text", name: "Password", value: password.length > 0
                    ? password.map(function (item) { return item; }).join("")
                    : "", onKeyDown: function (event) {
                    if (event.key === "Backspace") {
                        setPassword(password.slice(0, -1));
                        setPattern(pattern.slice(0, -1));
                    }
                }, id: "password", placeholder: "Create a Story" })),
            React__default["default"].createElement("div", { className: "flex gap-10" }, emojis.length > 0 &&
                emojis.map(function (emoji) { return (React__default["default"].createElement("button", { onClick: function () {
                        setPattern(__spreadArray(__spreadArray([], pattern, true), [
                            emoji.emoji.codePointAt(0).toString(16),
                        ], false));
                        setPassword(__spreadArray(__spreadArray([], password, true), [emoji.emoji], false));
                        console.log(pattern);
                    }, style: { padding: "6px" } }, emoji.emoji)); })),
            pattern.length > 0 ? (React__default["default"].createElement("button", { className: "signup-button" }, "SignUp")) : null)));
};

exports.SignUp = SignUp;
//# sourceMappingURL=index.js.map
