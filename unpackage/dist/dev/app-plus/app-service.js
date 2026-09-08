(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*****************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/main.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 3));\n__webpack_require__(/*! uni-pages */ 7);\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 55));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 56));\nvar _auth = __webpack_require__(/*! ./utils/auth.js */ 16);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();\n\n// Proactively reload the local whitelist once at startup (async, does not block the UI)\n(0, _auth.forceRefreshSnList)().then(function (list) {\n  __f__(\"log\", \"[main] Loaded \".concat(list.length, \" whitelist entries\"), \" at main.js:16\");\n}).catch(function (e) {\n  __f__(\"warn\", '[main] Failed to load whitelist:', e.message, \" at main.js:18\");\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 1)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50IiwiZm9yY2VSZWZyZXNoU25MaXN0IiwidGhlbiIsImxpc3QiLCJsZW5ndGgiLCJjYXRjaCIsImUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFDbkI7QUFFQTtBQUFvRDtBQUFBO0FBRXBEQSxZQUFHLENBQUNDLE1BQU0sQ0FBQ0MsYUFBYSxHQUFHLEtBQUs7QUFDaENDLFlBQUcsQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7QUFFbEIsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUcsbUJBQ2ZHLFlBQUcsRUFDTDtBQUNGRSxHQUFHLENBQUNDLE1BQU0sRUFBRTs7QUFFWjtBQUNBLElBQUFDLHdCQUFrQixHQUFFLENBQUNDLElBQUksQ0FBQyxVQUFBQyxJQUFJLEVBQUk7RUFDakMscUNBQTZCQSxJQUFJLENBQUNDLE1BQU07QUFDekMsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxVQUFBQyxDQUFDLEVBQUk7RUFDYixjQUFhLGtDQUFrQyxFQUFFQSxDQUFDLENBQUNDLE9BQU87QUFDM0QsQ0FBQyxDQUFDLEMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG4vLyDimIUgTm8gbG9uZ2VyIGltcG9ydHMgaW5pdEF1dGgg4oCUIGJhY2tlbmQgbG9naW4gaXMgZGVwcmVjYXRlZDsgdGhlIHdoaXRlbGlzdCBpcyBsb2FkZWQgYXV0b21hdGljYWxseSBpbnNpZGUgdXRpbHMvYXV0aC5qcyB2aWEgbG9hZFNuTGlzdCgpXG5pbXBvcnQgeyBmb3JjZVJlZnJlc2hTbkxpc3QgfSBmcm9tICcuL3V0aWxzL2F1dGguanMnXG5cblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXG5BcHAubXBUeXBlID0gJ2FwcCdcblxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG5cdC4uLkFwcFxufSlcbmFwcC4kbW91bnQoKVxuXG4vLyBQcm9hY3RpdmVseSByZWxvYWQgdGhlIGxvY2FsIHdoaXRlbGlzdCBvbmNlIGF0IHN0YXJ0dXAgKGFzeW5jLCBkb2VzIG5vdCBibG9jayB0aGUgVUkpXG5mb3JjZVJlZnJlc2hTbkxpc3QoKS50aGVuKGxpc3QgPT4ge1xuXHRjb25zb2xlLmxvZyhgW21haW5dIExvYWRlZCAke2xpc3QubGVuZ3RofSB3aGl0ZWxpc3QgZW50cmllc2ApXG59KS5jYXRjaChlID0+IHtcblx0Y29uc29sZS53YXJuKCdbbWFpbl0gRmFpbGVkIHRvIGxvYWQgd2hpdGVsaXN0OicsIGUubWVzc2FnZSlcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 2 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 4);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 5)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 6);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 5)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 7 */
/*!********************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages.json ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 8).default);
});
__definePage('pages/result/result', function () {
  return Vue.extend(__webpack_require__(/*! pages/result/result.vue?mpType=page */ 33).default);
});
__definePage('pages/ocr/ocr', function () {
  return Vue.extend(__webpack_require__(/*! pages/ocr/ocr.vue?mpType=page */ 38).default);
});
__definePage('pages/history/history', function () {
  return Vue.extend(__webpack_require__(/*! pages/history/history.vue?mpType=page */ 45).default);
});
__definePage('pages/sn7/sn7', function () {
  return Vue.extend(__webpack_require__(/*! pages/sn7/sn7.vue?mpType=page */ 50).default);
});
__definePage('pages/scan/scan-h5', function () {
  return Vue.extend(__webpack_require__(/*! pages/scan/scan-h5.vue?mpType=page */ 59).default);
});

/***/ }),
/* 8 */
/*!*******************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/index/index.vue?mpType=page ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 9);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2be84a3c\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyYmU4NGEzY1wiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*************************************************************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "status-bar"), attrs: { _i: 1 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(2, "sc", "status-item"), attrs: { _i: 2 } },
            [
              _c("text", {
                staticClass: _vm._$s(3, "sc", "status-label"),
                attrs: { _i: 3 },
              }),
              _c(
                "text",
                {
                  staticClass: _vm._$s(4, "sc", "status-value"),
                  attrs: { _i: 4 },
                },
                [
                  _vm._v(
                    _vm._$s(4, "t0-0", _vm._s(_vm.confirmedCount)) +
                      _vm._$s(4, "t0-1", _vm._s(_vm.snCount))
                  ),
                ]
              ),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(5, "sc", "status-item"), attrs: { _i: 5 } },
            [
              _c("text", {
                staticClass: _vm._$s(6, "sc", "status-label"),
                attrs: { _i: 6 },
              }),
              _c(
                "text",
                {
                  staticClass: _vm._$s(7, "sc", "status-value"),
                  attrs: { _i: 7 },
                },
                [_vm._v(_vm._$s(7, "t0-0", _vm._s(_vm.updateTime)))]
              ),
            ]
          ),
        ]
      ),
      _c("view", { staticClass: _vm._$s(8, "sc", "hero"), attrs: { _i: 8 } }, [
        _c("view", {
          staticClass: _vm._$s(9, "sc", "hero-icon"),
          attrs: { _i: 9 },
        }),
        _c("view", {
          staticClass: _vm._$s(10, "sc", "hero-title"),
          attrs: { _i: 10 },
        }),
        _c("view", {
          staticClass: _vm._$s(11, "sc", "hero-sub"),
          attrs: { _i: 11 },
        }),
      ]),
      _c(
        "view",
        { staticClass: _vm._$s(12, "sc", "methods"), attrs: { _i: 12 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(13, "sc", "method-card method-barcode"),
              attrs: { _i: 13 },
              on: { click: _vm.onScan },
            },
            [
              _c("view", {
                staticClass: _vm._$s(14, "sc", "method-icon"),
                attrs: { _i: 14 },
              }),
              _c(
                "view",
                {
                  staticClass: _vm._$s(15, "sc", "method-text"),
                  attrs: { _i: 15 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(16, "sc", "method-title"),
                    attrs: { _i: 16 },
                  }),
                  _c("view", {
                    staticClass: _vm._$s(17, "sc", "method-sub"),
                    attrs: { _i: 17 },
                  }),
                ]
              ),
              _c("view", {
                staticClass: _vm._$s(18, "sc", "method-arrow"),
                attrs: { _i: 18 },
              }),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(19, "sc", "method-card method-ocr"),
              attrs: { _i: 19 },
              on: { click: _vm.goOcr },
            },
            [
              _c("view", {
                staticClass: _vm._$s(20, "sc", "method-icon"),
                attrs: { _i: 20 },
              }),
              _c(
                "view",
                {
                  staticClass: _vm._$s(21, "sc", "method-text"),
                  attrs: { _i: 21 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(22, "sc", "method-title"),
                    attrs: { _i: 22 },
                  }),
                  _c("view", {
                    staticClass: _vm._$s(23, "sc", "method-sub"),
                    attrs: { _i: 23 },
                  }),
                ]
              ),
              _c("view", {
                staticClass: _vm._$s(24, "sc", "method-arrow"),
                attrs: { _i: 24 },
              }),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(25, "sc", "method-card method-suffix"),
              attrs: { _i: 25 },
              on: { click: _vm.goSuffix },
            },
            [
              _c("view", {
                staticClass: _vm._$s(26, "sc", "method-icon"),
                attrs: { _i: 26 },
              }),
              _c(
                "view",
                {
                  staticClass: _vm._$s(27, "sc", "method-text"),
                  attrs: { _i: 27 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(28, "sc", "method-title"),
                    attrs: { _i: 28 },
                  }),
                  _c("view", {
                    staticClass: _vm._$s(29, "sc", "method-sub"),
                    attrs: { _i: 29 },
                  }),
                ]
              ),
              _c("view", {
                staticClass: _vm._$s(30, "sc", "method-arrow"),
                attrs: { _i: 30 },
              }),
            ]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(31, "sc", "actions"), attrs: { _i: 31 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(32, "sc", "action-card"),
              attrs: { _i: 32 },
              on: { click: _vm.onRefresh },
            },
            [
              _c("text", {
                staticClass: _vm._$s(33, "sc", "action-icon"),
                attrs: { _i: 33 },
              }),
              _c("text", {
                staticClass: _vm._$s(34, "sc", "action-text"),
                attrs: { _i: 34 },
              }),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(35, "sc", "action-card"),
              attrs: { _i: 35 },
              on: { click: _vm.onClearCache },
            },
            [
              _c("text", {
                staticClass: _vm._$s(36, "sc", "action-icon"),
                attrs: { _i: 36 },
              }),
              _c("text", {
                staticClass: _vm._$s(37, "sc", "action-text"),
                attrs: { _i: 37 },
              }),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(38, "sc", "action-card"),
              attrs: { _i: 38 },
              on: { click: _vm.goHistory },
            },
            [
              _c("text", {
                staticClass: _vm._$s(39, "sc", "action-icon"),
                attrs: { _i: 39 },
              }),
              _c("text", {
                staticClass: _vm._$s(40, "sc", "action-text"),
                attrs: { _i: 40 },
              }),
            ]
          ),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(41, "sc", "tips card"), attrs: { _i: 41 } },
        [
          _c("view", {
            staticClass: _vm._$s(42, "sc", "tip-title"),
            attrs: { _i: 42 },
          }),
          _c("view", {
            staticClass: _vm._$s(43, "sc", "tip-line"),
            attrs: { _i: 43 },
          }),
          _c("view", {
            staticClass: _vm._$s(44, "sc", "tip-line"),
            attrs: { _i: 44 },
          }),
          _c("view", {
            staticClass: _vm._$s(45, "sc", "tip-line"),
            attrs: { _i: 45 },
          }),
          _c("view", {
            staticClass: _vm._$s(46, "sc", "tip-line"),
            attrs: { _i: 46 },
          }),
        ]
      ),
      _vm._$s(47, "i", _vm.loading)
        ? _c(
            "view",
            { staticClass: _vm._$s(47, "sc", "loading"), attrs: { _i: 47 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(48, "sc", "loading-box"),
                  attrs: { _i: 48 },
                },
                [
                  _c("text", [
                    _vm._v(_vm._$s(49, "t0-0", _vm._s(_vm.loadingText))),
                  ]),
                ]
              ),
            ]
          )
        : _vm._e(),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!*******************************************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 12);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTR1QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 13));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 15));\nvar _auth = __webpack_require__(/*! ../../utils/auth.js */ 16);\nvar _snValidate = __webpack_require__(/*! ../../utils/sn-validate.js */ 30);\nvar _sn = __webpack_require__(/*! ../../api/sn.js */ 31);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n// How often the home page refreshes the confirmed/total counter (ms)\nvar SUMMARY_INTERVAL = 60 * 1000;\nvar _default = {\n  data: function data() {\n    return {\n      loading: false,\n      loadingText: '',\n      manualSn: '',\n      snCount: 0,\n      updateTime: '-',\n      confirmedCount: '-',\n      // backend confirmed count; '-' until first fetch succeeds\n      summaryTimer: null\n    };\n  },\n  onLoad: function onLoad() {\n    // ★ Auto-reload the local whitelist when the home page loads\n    //   (silent: no overlay, failures only log — never blocks the UI)\n    this.silentReloadWhitelist();\n  },\n  onShow: function onShow() {\n    this.refreshLocal();\n    // refresh the confirmed/total counter immediately (e.g. back from a Confirm\n    // Removal), then keep it fresh on a timer while the home page is visible\n    this.fetchConfirmedCount();\n    this.startSummaryTimer();\n  },\n  onHide: function onHide() {\n    this.stopSummaryTimer();\n  },\n  methods: {\n    // ★ Confirmed/total counter: backend transition_scan_records total for this site\n    //   (fire-and-forget; network failures keep the last value, never block the UI)\n    fetchConfirmedCount: function fetchConfirmedCount() {\n      var _this = this;\n      (0, _sn.getTransitionScanTotal)().then(function (r) {\n        if (r.ok && r.total >= 0) {\n          _this.confirmedCount = r.total;\n        } else {\n          __f__(\"warn\", '[index] fetch confirmed count failed:', r.message, \" at pages/index/index.vue:129\");\n        }\n      }).catch(function () {});\n    },\n    startSummaryTimer: function startSummaryTimer() {\n      var _this2 = this;\n      this.stopSummaryTimer();\n      this.summaryTimer = setInterval(function () {\n        return _this2.fetchConfirmedCount();\n      }, SUMMARY_INTERVAL);\n    },\n    stopSummaryTimer: function stopSummaryTimer() {\n      if (this.summaryTimer) {\n        clearInterval(this.summaryTimer);\n        this.summaryTimer = null;\n      }\n    },\n    // ★ Silent whitelist reload (used by onLoad): re-reads sn-list.txt in the\n    //   background and refreshes the counter — no loading overlay, no toasts\n    silentReloadWhitelist: function silentReloadWhitelist() {\n      var _this3 = this;\n      (0, _auth.forceRefreshSnList)().then(function (list) {\n        __f__(\"log\", \"[index] whitelist auto-reloaded: \".concat(list.length, \" entries\"), \" at pages/index/index.vue:148\");\n        _this3.refreshLocal();\n      }).catch(function (e) {\n        __f__(\"warn\", '[index] whitelist auto-reload failed:', e.message, \" at pages/index/index.vue:151\");\n      });\n    },\n    refreshLocal: function refreshLocal() {\n      var list = (0, _auth.getSnList)();\n      this.snCount = list.length;\n      var ts = (0, _auth.getSnListUpdateTime)();\n      if (ts) {\n        var d = new Date(ts);\n        this.updateTime = \"\".concat(d.getMonth() + 1, \"-\").concat(d.getDate(), \" \").concat(String(d.getHours()).padStart(2, '0'), \":\").concat(String(d.getMinutes()).padStart(2, '0'));\n      }\n      (0, _auth.buildSnIndex)();\n    },\n    onScan: function onScan() {\n      var _this4 = this;\n      // ★ Black-screen guard: with camera permission DENIED on iOS, scanCode\n      //   still opens the scan UI — black screen + flashlight icon, no fail\n      //   callback. Detect it up front and guide to Settings instead.\n      if (!(0, _snValidate.ensureCameraPermission)(_snValidate.showCameraDeniedModal)) return;\n      // ★ scanType limited to barcodes (machine labels are Code128):\n      //   iOS's built-in scanner is much weaker than Android's at barcodes when\n      //   QR etc. are also enabled; restricting to barCode greatly improves iOS\n      //   recognition. barCodeInputEnabled (iOS-only) adds a keyboard-input\n      //   fallback in the scan UI for damaged labels (ignored on Android).\n      uni.scanCode({\n        scanType: ['barCode'],\n        barCodeInputEnabled: true,\n        success: function success(res) {\n          __f__(\"log\", '[scan] Scan result:', res, \" at pages/index/index.vue:181\");\n          var sn = (res.result || '').trim();\n          if (!sn) {\n            uni.showToast({\n              title: 'No content recognized',\n              icon: 'none'\n            });\n            return;\n          }\n          _this4.handleSn(sn, res.scanType);\n        },\n        fail: function fail(err) {\n          __f__(\"warn\", '[scan] Failed:', err, \" at pages/index/index.vue:190\");\n          var msg = err && err.errMsg || '';\n          if (!msg || msg.includes('cancel')) return;\n          if (/auth|denied|permission/i.test(msg)) {\n            (0, _snValidate.showCameraDeniedModal)();\n            return;\n          }\n          uni.showToast({\n            title: 'Scan failed: ' + msg,\n            icon: 'none'\n          });\n        }\n      });\n    },\n    onManualSubmit: function onManualSubmit() {\n      var sn = this.manualSn.trim();\n      if (!sn) return;\n      this.handleSn(sn, 'MANUAL');\n      this.manualSn = '';\n    },\n    goOcr: function goOcr() {\n      uni.navigateTo({\n        url: '/pages/ocr/ocr'\n      });\n    },\n    goSuffix: function goSuffix() {\n      uni.navigateTo({\n        url: '/pages/sn7/sn7'\n      });\n    },\n    handleSn: function handleSn(sn, scanType) {\n      // ★ Validation rules are centralized in utils/sn-validate.js (17-char check + guidance to other methods);\n      //   home-page scanning and result-page [Continue Scan] share the same logic\n      (0, _snValidate.dispatchScan)(sn, scanType, /*redirect*/false);\n    },\n    onRefresh: function onRefresh() {\n      var _this5 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var list;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!_this5.loading) {\n                  _context.next = 2;\n                  break;\n                }\n                return _context.abrupt(\"return\");\n              case 2:\n                _this5.loading = true;\n                _this5.loadingText = 'Reloading local sn-list.txt...';\n                _context.prev = 4;\n                _context.next = 7;\n                return (0, _auth.forceRefreshSnList)();\n              case 7:\n                list = _context.sent;\n                uni.showToast({\n                  title: \"Reload done: \".concat(list.length, \" entries\"),\n                  icon: 'success'\n                });\n                _this5.refreshLocal();\n                _context.next = 16;\n                break;\n              case 12:\n                _context.prev = 12;\n                _context.t0 = _context[\"catch\"](4);\n                __f__(\"error\", '[refresh] Failed:', _context.t0, \" at pages/index/index.vue:248\");\n                uni.showModal({\n                  title: 'Reload Failed',\n                  content: _context.t0.message,\n                  showCancel: false\n                });\n              case 16:\n                _context.prev = 16;\n                _this5.loading = false;\n                return _context.finish(16);\n              case 19:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[4, 12, 16, 19]]);\n      }))();\n    },\n    onClearCache: function onClearCache() {\n      var _this6 = this;\n      uni.showModal({\n        title: 'Clear whitelist cache?',\n        content: 'This clears the SN list cache in localStorage. Before the next scan, tap \"Reload Local Whitelist\" first',\n        confirmText: 'Clear',\n        cancelText: 'Cancel',\n        success: function success(r) {\n          if (r.confirm) {\n            (0, _auth.clearSnCache)();\n            _this6.snCount = 0;\n            _this6.updateTime = '-';\n            uni.showToast({\n              title: 'Cache cleared',\n              icon: 'success'\n            });\n          }\n        }\n      });\n    },\n    goHistory: function goHistory() {\n      uni.navigateTo({\n        url: '/pages/history/history'\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 1)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJsb2FkaW5nIiwibG9hZGluZ1RleHQiLCJtYW51YWxTbiIsInNuQ291bnQiLCJ1cGRhdGVUaW1lIiwiY29uZmlybWVkQ291bnQiLCJzdW1tYXJ5VGltZXIiLCJvbkxvYWQiLCJvblNob3ciLCJvbkhpZGUiLCJtZXRob2RzIiwiZmV0Y2hDb25maXJtZWRDb3VudCIsInN0YXJ0U3VtbWFyeVRpbWVyIiwic3RvcFN1bW1hcnlUaW1lciIsImNsZWFySW50ZXJ2YWwiLCJzaWxlbnRSZWxvYWRXaGl0ZWxpc3QiLCJyZWZyZXNoTG9jYWwiLCJvblNjYW4iLCJ1bmkiLCJzY2FuVHlwZSIsImJhckNvZGVJbnB1dEVuYWJsZWQiLCJzdWNjZXNzIiwidGl0bGUiLCJpY29uIiwiZmFpbCIsIm9uTWFudWFsU3VibWl0IiwiZ29PY3IiLCJ1cmwiLCJnb1N1ZmZpeCIsImhhbmRsZVNuIiwib25SZWZyZXNoIiwibGlzdCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwib25DbGVhckNhY2hlIiwiY29uZmlybVRleHQiLCJjYW5jZWxUZXh0IiwiZ29IaXN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFzRkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQUEsZUFFQTtFQUNBQTtJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BQUE7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0E7UUFDQTtVQUNBO1FBQ0E7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBQztNQUFBO01BQ0E7TUFDQTtRQUFBO01BQUE7SUFDQTtJQUNBQztNQUNBO1FBQ0FDO1FBQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQTtJQUNBQztNQUFBO01BQ0E7UUFDQTtRQUNBO01BQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFBQTtNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBQztRQUNBQztRQUNBQztRQUNBQztVQUNBO1VBQ0E7VUFDQTtZQUNBSDtjQUFBSTtjQUFBQztZQUFBO1lBQ0E7VUFDQTtVQUNBO1FBQ0E7UUFDQUM7VUFDQTtVQUNBO1VBQ0E7VUFDQTtZQUNBO1lBQ0E7VUFDQTtVQUNBTjtZQUFBSTtZQUFBQztVQUFBO1FBQ0E7TUFDQTtJQWNBO0lBRUFFO01BQ0E7TUFDQTtNQUNBO01BQ0E7SUFDQTtJQUVBQztNQUNBUjtRQUFBUztNQUFBO0lBQ0E7SUFFQUM7TUFDQVY7UUFBQVM7TUFBQTtJQUNBO0lBRUFFO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFFQUM7TUFBQTtNQUFBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQSxLQUNBO2tCQUFBO2tCQUFBO2dCQUFBO2dCQUFBO2NBQUE7Z0JBQ0E7Z0JBQ0E7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FFQTtjQUFBO2dCQUFBQztnQkFDQWI7a0JBQ0FJO2tCQUNBQztnQkFDQTtnQkFDQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUVBO2dCQUNBTDtrQkFDQUk7a0JBQ0FVO2tCQUNBQztnQkFDQTtjQUFBO2dCQUFBO2dCQUVBO2dCQUFBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBRUE7SUFFQUM7TUFBQTtNQUNBaEI7UUFDQUk7UUFDQVU7UUFDQUc7UUFDQUM7UUFDQWY7VUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBSDtjQUFBSTtjQUFBQztZQUFBO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQWM7TUFDQW5CO1FBQUFTO01BQUE7SUFDQTtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHQ8IS0tIFRvcCBzdGF0dXMgYmFyIC0tPlxuXHRcdDx2aWV3IGNsYXNzPVwic3RhdHVzLWJhclwiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJzdGF0dXMtaXRlbVwiPlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInN0YXR1cy1sYWJlbFwiPlNOIGNvbmZpcm1lZCBjb3VudCAvIFRvdGFsPC90ZXh0PlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInN0YXR1cy12YWx1ZVwiPnt7IGNvbmZpcm1lZENvdW50IH19L3t7IHNuQ291bnQgfX08L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cInN0YXR1cy1pdGVtXCI+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwic3RhdHVzLWxhYmVsXCI+TGFzdCBVcGRhdGVkPC90ZXh0PlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInN0YXR1cy12YWx1ZVwiPnt7IHVwZGF0ZVRpbWUgfX08L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXG5cdFx0PCEtLSBNYWluIGFjdGlvbiBhcmVhIC0tPlxuXHRcdDx2aWV3IGNsYXNzPVwiaGVyb1wiPlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJoZXJvLWljb25cIj7wn5O3PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJoZXJvLXRpdGxlXCI+U04gQ2hlY2s8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cImhlcm8tc3ViXCI+UGljayBhIGxvb2t1cCBtZXRob2QgdG8gc2VlIHdoZXRoZXIgYSBtaW5lciBjYW4gYmUgcmVtb3ZlZDwvdmlldz5cblx0XHQ8L3ZpZXc+XG5cblx0XHQ8IS0tIDMgbG9va3VwIG1ldGhvZHMgLS0+XG5cdFx0PHZpZXcgY2xhc3M9XCJtZXRob2RzXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cIm1ldGhvZC1jYXJkIG1ldGhvZC1iYXJjb2RlXCIgQGNsaWNrPVwib25TY2FuXCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibWV0aG9kLWljb25cIj7wn5O3PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1ldGhvZC10ZXh0XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXRob2QtdGl0bGVcIj5CYXJjb2RlIFNjYW48L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXRob2Qtc3ViXCI+U2NhbiB0aGUgYmFyY29kZSBvbiB0aGUgYmFjayBvZiB0aGUgbWFjaGluZTwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1ldGhvZC1hcnJvd1wiPuKAujwvdmlldz5cblx0XHRcdDwvdmlldz5cblxuXHRcdFx0PHZpZXcgY2xhc3M9XCJtZXRob2QtY2FyZCBtZXRob2Qtb2NyXCIgQGNsaWNrPVwiZ29PY3JcIj5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXRob2QtaWNvblwiPvCflrzvuI88L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibWV0aG9kLXRleHRcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1ldGhvZC10aXRsZVwiPkltYWdlIE9DUjwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1ldGhvZC1zdWJcIj5QaG90b2dyYXBoIHRoZSBTTiBsYWJlbCBmb3IgcmVjb2duaXRpb248L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXRob2QtYXJyb3dcIj7igLo8L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cblx0XHRcdDx2aWV3IGNsYXNzPVwibWV0aG9kLWNhcmQgbWV0aG9kLXN1ZmZpeFwiIEBjbGljaz1cImdvU3VmZml4XCI+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibWV0aG9kLWljb25cIj7wn5SiPC92aWV3PlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1ldGhvZC10ZXh0XCI+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJtZXRob2QtdGl0bGVcIj5TTiBMYXN0IDcgQ2hhcmFjdGVyczwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIm1ldGhvZC1zdWJcIj5NYW51YWxseSBlbnRlciB0aGUgbGFzdCA3IGNoYXJhY3RlcnMgb2YgdGhlIFNOPC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwibWV0aG9kLWFycm93XCI+4oC6PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblxuXHRcdDwhLS0gQWN0aW9ucyAtLT5cblx0XHQ8dmlldyBjbGFzcz1cImFjdGlvbnNcIj5cblx0XHRcdDx2aWV3IGNsYXNzPVwiYWN0aW9uLWNhcmRcIiBAY2xpY2s9XCJvblJlZnJlc2hcIj5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJhY3Rpb24taWNvblwiPvCflIQ8L3RleHQ+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYWN0aW9uLXRleHRcIj5SZWxvYWQgTG9jYWwgV2hpdGVsaXN0PC90ZXh0PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb24tY2FyZFwiIEBjbGljaz1cIm9uQ2xlYXJDYWNoZVwiPlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImFjdGlvbi1pY29uXCI+8J+Xke+4jzwvdGV4dD5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJhY3Rpb24tdGV4dFwiPkNsZWFyIENhY2hlPC90ZXh0PlxuXHRcdFx0PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJhY3Rpb24tY2FyZFwiIEBjbGljaz1cImdvSGlzdG9yeVwiPlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImFjdGlvbi1pY29uXCI+8J+TizwvdGV4dD5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJhY3Rpb24tdGV4dFwiPkhpc3Rvcnk8L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXG5cdFx0PCEtLSBUaXBzIC0tPlxuXHRcdDx2aWV3IGNsYXNzPVwidGlwcyBjYXJkXCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cInRpcC10aXRsZVwiPvCfkqEgSG93IHRvIFVzZTwvdmlldz5cblx0XHRcdDx2aWV3IGNsYXNzPVwidGlwLWxpbmVcIj7igKIgVGhlIHdoaXRlbGlzdCBsb2FkcyBhdXRvbWF0aWNhbGx5IG9uIHN0YXJ0dXA7IHRhcCBcIlJlbG9hZCBMb2NhbCBXaGl0ZWxpc3RcIiB0byByZS1yZWFkIG1hbnVhbGx5PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXAtbGluZVwiPuKAoiBUaHJlZSBtZXRob2RzOiBiYXJjb2RlIHNjYW4gLyBpbWFnZSBPQ1IgLyBTTiBsYXN0IDcgZGlnaXRzPC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXAtbGluZVwiPuKAoiBTTiBoaXRzIHRoZSB3aGl0ZWxpc3Qg4oaSIGNhbiBiZSByZW1vdmVkOyBvdGhlcndpc2UgaXQgY2Fubm90PC92aWV3PlxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXAtbGluZVwiPuKAoiBJZiByZXN1bHRzIGxvb2sgd3JvbmcsIHVzZSBcIkNsZWFyIENhY2hlXCIgdG8gZm9yY2UgYSByZWxvYWQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXG5cdFx0PCEtLSBMb2FkaW5nIG92ZXJsYXkgLS0+XG5cdFx0PHZpZXcgY2xhc3M9XCJsb2FkaW5nXCIgdi1pZj1cImxvYWRpbmdcIj5cblx0XHRcdDx2aWV3IGNsYXNzPVwibG9hZGluZy1ib3hcIj5cblx0XHRcdFx0PHRleHQ+e3sgbG9hZGluZ1RleHQgfX08L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgeyBidWlsZFNuSW5kZXgsIGdldFNuTGlzdCwgZ2V0U25MaXN0VXBkYXRlVGltZSwgZm9yY2VSZWZyZXNoU25MaXN0LCBjbGVhclNuQ2FjaGUgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoLmpzJ1xuXHRpbXBvcnQgeyBkaXNwYXRjaFNjYW4sIGVuc3VyZUNhbWVyYVBlcm1pc3Npb24sIHNob3dDYW1lcmFEZW5pZWRNb2RhbCB9IGZyb20gJy4uLy4uL3V0aWxzL3NuLXZhbGlkYXRlLmpzJ1xuXHRpbXBvcnQgeyBnZXRUcmFuc2l0aW9uU2NhblRvdGFsIH0gZnJvbSAnLi4vLi4vYXBpL3NuLmpzJ1xuXG5cdC8vIEhvdyBvZnRlbiB0aGUgaG9tZSBwYWdlIHJlZnJlc2hlcyB0aGUgY29uZmlybWVkL3RvdGFsIGNvdW50ZXIgKG1zKVxuXHRjb25zdCBTVU1NQVJZX0lOVEVSVkFMID0gNjAgKiAxMDAwXG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdFx0bG9hZGluZ1RleHQ6ICcnLFxuXHRcdFx0XHRtYW51YWxTbjogJycsXG5cdFx0XHRcdHNuQ291bnQ6IDAsXG5cdFx0XHRcdHVwZGF0ZVRpbWU6ICctJyxcblx0XHRcdFx0Y29uZmlybWVkQ291bnQ6ICctJywgIC8vIGJhY2tlbmQgY29uZmlybWVkIGNvdW50OyAnLScgdW50aWwgZmlyc3QgZmV0Y2ggc3VjY2VlZHNcblx0XHRcdFx0c3VtbWFyeVRpbWVyOiBudWxsXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvbkxvYWQoKSB7XG5cdFx0XHQvLyDimIUgQXV0by1yZWxvYWQgdGhlIGxvY2FsIHdoaXRlbGlzdCB3aGVuIHRoZSBob21lIHBhZ2UgbG9hZHNcblx0XHRcdC8vICAgKHNpbGVudDogbm8gb3ZlcmxheSwgZmFpbHVyZXMgb25seSBsb2cg4oCUIG5ldmVyIGJsb2NrcyB0aGUgVUkpXG5cdFx0XHR0aGlzLnNpbGVudFJlbG9hZFdoaXRlbGlzdCgpXG5cdFx0fSxcblx0XHRvblNob3coKSB7XG5cdFx0XHR0aGlzLnJlZnJlc2hMb2NhbCgpXG5cdFx0XHQvLyByZWZyZXNoIHRoZSBjb25maXJtZWQvdG90YWwgY291bnRlciBpbW1lZGlhdGVseSAoZS5nLiBiYWNrIGZyb20gYSBDb25maXJtXG5cdFx0XHQvLyBSZW1vdmFsKSwgdGhlbiBrZWVwIGl0IGZyZXNoIG9uIGEgdGltZXIgd2hpbGUgdGhlIGhvbWUgcGFnZSBpcyB2aXNpYmxlXG5cdFx0XHR0aGlzLmZldGNoQ29uZmlybWVkQ291bnQoKVxuXHRcdFx0dGhpcy5zdGFydFN1bW1hcnlUaW1lcigpXG5cdFx0fSxcblx0XHRvbkhpZGUoKSB7XG5cdFx0XHR0aGlzLnN0b3BTdW1tYXJ5VGltZXIoKVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Ly8g4piFIENvbmZpcm1lZC90b3RhbCBjb3VudGVyOiBiYWNrZW5kIHRyYW5zaXRpb25fc2Nhbl9yZWNvcmRzIHRvdGFsIGZvciB0aGlzIHNpdGVcblx0XHRcdC8vICAgKGZpcmUtYW5kLWZvcmdldDsgbmV0d29yayBmYWlsdXJlcyBrZWVwIHRoZSBsYXN0IHZhbHVlLCBuZXZlciBibG9jayB0aGUgVUkpXG5cdFx0XHRmZXRjaENvbmZpcm1lZENvdW50KCkge1xuXHRcdFx0XHRnZXRUcmFuc2l0aW9uU2NhblRvdGFsKCkudGhlbihyID0+IHtcblx0XHRcdFx0XHRpZiAoci5vayAmJiByLnRvdGFsID49IDApIHtcblx0XHRcdFx0XHRcdHRoaXMuY29uZmlybWVkQ291bnQgPSByLnRvdGFsXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUud2FybignW2luZGV4XSBmZXRjaCBjb25maXJtZWQgY291bnQgZmFpbGVkOicsIHIubWVzc2FnZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pLmNhdGNoKCgpID0+IHt9KVxuXHRcdFx0fSxcblx0XHRcdHN0YXJ0U3VtbWFyeVRpbWVyKCkge1xuXHRcdFx0XHR0aGlzLnN0b3BTdW1tYXJ5VGltZXIoKVxuXHRcdFx0XHR0aGlzLnN1bW1hcnlUaW1lciA9IHNldEludGVydmFsKCgpID0+IHRoaXMuZmV0Y2hDb25maXJtZWRDb3VudCgpLCBTVU1NQVJZX0lOVEVSVkFMKVxuXHRcdFx0fSxcblx0XHRcdHN0b3BTdW1tYXJ5VGltZXIoKSB7XG5cdFx0XHRcdGlmICh0aGlzLnN1bW1hcnlUaW1lcikge1xuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5zdW1tYXJ5VGltZXIpXG5cdFx0XHRcdFx0dGhpcy5zdW1tYXJ5VGltZXIgPSBudWxsXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8vIOKYhSBTaWxlbnQgd2hpdGVsaXN0IHJlbG9hZCAodXNlZCBieSBvbkxvYWQpOiByZS1yZWFkcyBzbi1saXN0LnR4dCBpbiB0aGVcblx0XHRcdC8vICAgYmFja2dyb3VuZCBhbmQgcmVmcmVzaGVzIHRoZSBjb3VudGVyIOKAlCBubyBsb2FkaW5nIG92ZXJsYXksIG5vIHRvYXN0c1xuXHRcdFx0c2lsZW50UmVsb2FkV2hpdGVsaXN0KCkge1xuXHRcdFx0XHRmb3JjZVJlZnJlc2hTbkxpc3QoKS50aGVuKGxpc3QgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGBbaW5kZXhdIHdoaXRlbGlzdCBhdXRvLXJlbG9hZGVkOiAke2xpc3QubGVuZ3RofSBlbnRyaWVzYClcblx0XHRcdFx0XHR0aGlzLnJlZnJlc2hMb2NhbCgpXG5cdFx0XHRcdH0pLmNhdGNoKGUgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybignW2luZGV4XSB3aGl0ZWxpc3QgYXV0by1yZWxvYWQgZmFpbGVkOicsIGUubWVzc2FnZSlcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cblx0XHRcdHJlZnJlc2hMb2NhbCgpIHtcblx0XHRcdFx0Y29uc3QgbGlzdCA9IGdldFNuTGlzdCgpXG5cdFx0XHRcdHRoaXMuc25Db3VudCA9IGxpc3QubGVuZ3RoXG5cdFx0XHRcdGNvbnN0IHRzID0gZ2V0U25MaXN0VXBkYXRlVGltZSgpXG5cdFx0XHRcdGlmICh0cykge1xuXHRcdFx0XHRcdGNvbnN0IGQgPSBuZXcgRGF0ZSh0cylcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZVRpbWUgPSBgJHtkLmdldE1vbnRoKCkrMX0tJHtkLmdldERhdGUoKX0gJHtTdHJpbmcoZC5nZXRIb3VycygpKS5wYWRTdGFydCgyLCcwJyl9OiR7U3RyaW5nKGQuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCcwJyl9YFxuXHRcdFx0XHR9XG5cdFx0XHRcdGJ1aWxkU25JbmRleCgpXG5cdFx0XHR9LFxuXG5cdFx0XHRvblNjYW4oKSB7XG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xuXHRcdFx0XHQvLyDimIUgQmxhY2stc2NyZWVuIGd1YXJkOiB3aXRoIGNhbWVyYSBwZXJtaXNzaW9uIERFTklFRCBvbiBpT1MsIHNjYW5Db2RlXG5cdFx0XHRcdC8vICAgc3RpbGwgb3BlbnMgdGhlIHNjYW4gVUkg4oCUIGJsYWNrIHNjcmVlbiArIGZsYXNobGlnaHQgaWNvbiwgbm8gZmFpbFxuXHRcdFx0XHQvLyAgIGNhbGxiYWNrLiBEZXRlY3QgaXQgdXAgZnJvbnQgYW5kIGd1aWRlIHRvIFNldHRpbmdzIGluc3RlYWQuXG5cdFx0XHRcdGlmICghZW5zdXJlQ2FtZXJhUGVybWlzc2lvbihzaG93Q2FtZXJhRGVuaWVkTW9kYWwpKSByZXR1cm5cblx0XHRcdFx0Ly8g4piFIHNjYW5UeXBlIGxpbWl0ZWQgdG8gYmFyY29kZXMgKG1hY2hpbmUgbGFiZWxzIGFyZSBDb2RlMTI4KTpcblx0XHRcdFx0Ly8gICBpT1MncyBidWlsdC1pbiBzY2FubmVyIGlzIG11Y2ggd2Vha2VyIHRoYW4gQW5kcm9pZCdzIGF0IGJhcmNvZGVzIHdoZW5cblx0XHRcdFx0Ly8gICBRUiBldGMuIGFyZSBhbHNvIGVuYWJsZWQ7IHJlc3RyaWN0aW5nIHRvIGJhckNvZGUgZ3JlYXRseSBpbXByb3ZlcyBpT1Ncblx0XHRcdFx0Ly8gICByZWNvZ25pdGlvbi4gYmFyQ29kZUlucHV0RW5hYmxlZCAoaU9TLW9ubHkpIGFkZHMgYSBrZXlib2FyZC1pbnB1dFxuXHRcdFx0XHQvLyAgIGZhbGxiYWNrIGluIHRoZSBzY2FuIFVJIGZvciBkYW1hZ2VkIGxhYmVscyAoaWdub3JlZCBvbiBBbmRyb2lkKS5cblx0XHRcdFx0dW5pLnNjYW5Db2RlKHtcblx0XHRcdFx0XHRzY2FuVHlwZTogWydiYXJDb2RlJ10sXG5cdFx0XHRcdFx0YmFyQ29kZUlucHV0RW5hYmxlZDogdHJ1ZSxcblx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnW3NjYW5dIFNjYW4gcmVzdWx0OicsIHJlcylcblx0XHRcdFx0XHRcdGNvbnN0IHNuID0gKHJlcy5yZXN1bHQgfHwgJycpLnRyaW0oKVxuXHRcdFx0XHRcdFx0aWYgKCFzbikge1xuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICdObyBjb250ZW50IHJlY29nbml6ZWQnLCBpY29uOiAnbm9uZScgfSlcblx0XHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aGlzLmhhbmRsZVNuKHNuLCByZXMuc2NhblR5cGUpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oJ1tzY2FuXSBGYWlsZWQ6JywgZXJyKVxuXHRcdFx0XHRcdFx0Y29uc3QgbXNnID0gKGVyciAmJiBlcnIuZXJyTXNnKSB8fCAnJ1xuXHRcdFx0XHRcdFx0aWYgKCFtc2cgfHwgbXNnLmluY2x1ZGVzKCdjYW5jZWwnKSkgcmV0dXJuXG5cdFx0XHRcdFx0XHRpZiAoL2F1dGh8ZGVuaWVkfHBlcm1pc3Npb24vaS50ZXN0KG1zZykpIHtcblx0XHRcdFx0XHRcdFx0c2hvd0NhbWVyYURlbmllZE1vZGFsKClcblx0XHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICdTY2FuIGZhaWxlZDogJyArIG1zZywgaWNvbjogJ25vbmUnIH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQvLyAjZW5kaWZcblxuXHRcdFx0XHQvLyAjaWZkZWYgSDVcblx0XHRcdFx0Ly8gSDUgaGFzIG5vIHVuaS5zY2FuQ29kZSDigJQgb3BlbiB0aGUgY2FtZXJhLWJhc2VkIEg1IHNjYW5uZXIgcGFnZSAoenhpbmcpXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHsgdXJsOiAnL3BhZ2VzL3NjYW4vc2Nhbi1oNScgfSlcblx0XHRcdFx0Ly8gI2VuZGlmXG5cblx0XHRcdFx0Ly8gI2lmZGVmIE1QLVdFSVhJTlxuXHRcdFx0XHR1bmkuc2NhbkNvZGUoe1xuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHRoaXMuaGFuZGxlU24oKHJlcy5yZXN1bHR8fCcnKS50cmltKCksIHJlcy5zY2FuVHlwZSksXG5cdFx0XHRcdFx0ZmFpbDogKCkgPT4ge31cblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8gI2VuZGlmXG5cdFx0XHR9LFxuXG5cdFx0XHRvbk1hbnVhbFN1Ym1pdCgpIHtcblx0XHRcdFx0Y29uc3Qgc24gPSB0aGlzLm1hbnVhbFNuLnRyaW0oKVxuXHRcdFx0XHRpZiAoIXNuKSByZXR1cm5cblx0XHRcdFx0dGhpcy5oYW5kbGVTbihzbiwgJ01BTlVBTCcpXG5cdFx0XHRcdHRoaXMubWFudWFsU24gPSAnJ1xuXHRcdFx0fSxcblxuXHRcdFx0Z29PY3IoKSB7XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHsgdXJsOiAnL3BhZ2VzL29jci9vY3InIH0pXG5cdFx0XHR9LFxuXG5cdFx0XHRnb1N1ZmZpeCgpIHtcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oeyB1cmw6ICcvcGFnZXMvc243L3NuNycgfSlcblx0XHRcdH0sXG5cblx0XHRcdGhhbmRsZVNuKHNuLCBzY2FuVHlwZSkge1xuXHRcdFx0XHQvLyDimIUgVmFsaWRhdGlvbiBydWxlcyBhcmUgY2VudHJhbGl6ZWQgaW4gdXRpbHMvc24tdmFsaWRhdGUuanMgKDE3LWNoYXIgY2hlY2sgKyBndWlkYW5jZSB0byBvdGhlciBtZXRob2RzKTtcblx0XHRcdFx0Ly8gICBob21lLXBhZ2Ugc2Nhbm5pbmcgYW5kIHJlc3VsdC1wYWdlIFtDb250aW51ZSBTY2FuXSBzaGFyZSB0aGUgc2FtZSBsb2dpY1xuXHRcdFx0XHRkaXNwYXRjaFNjYW4oc24sIHNjYW5UeXBlLCAvKnJlZGlyZWN0Ki8gZmFsc2UpXG5cdFx0XHR9LFxuXG5cdFx0XHRhc3luYyBvblJlZnJlc2goKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxvYWRpbmcpIHJldHVyblxuXHRcdFx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlXG5cdFx0XHRcdHRoaXMubG9hZGluZ1RleHQgPSAnUmVsb2FkaW5nIGxvY2FsIHNuLWxpc3QudHh0Li4uJ1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IGxpc3QgPSBhd2FpdCBmb3JjZVJlZnJlc2hTbkxpc3QoKVxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0dGl0bGU6IGBSZWxvYWQgZG9uZTogJHtsaXN0Lmxlbmd0aH0gZW50cmllc2AsXG5cdFx0XHRcdFx0XHRpY29uOiAnc3VjY2Vzcydcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHRoaXMucmVmcmVzaExvY2FsKClcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1tyZWZyZXNoXSBGYWlsZWQ6JywgZSlcblx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnUmVsb2FkIEZhaWxlZCcsXG5cdFx0XHRcdFx0XHRjb250ZW50OiBlLm1lc3NhZ2UsXG5cdFx0XHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdFx0dGhpcy5sb2FkaW5nID0gZmFsc2Vcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0b25DbGVhckNhY2hlKCkge1xuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0XHR0aXRsZTogJ0NsZWFyIHdoaXRlbGlzdCBjYWNoZT8nLFxuXHRcdFx0XHRcdGNvbnRlbnQ6ICdUaGlzIGNsZWFycyB0aGUgU04gbGlzdCBjYWNoZSBpbiBsb2NhbFN0b3JhZ2UuIEJlZm9yZSB0aGUgbmV4dCBzY2FuLCB0YXAgXCJSZWxvYWQgTG9jYWwgV2hpdGVsaXN0XCIgZmlyc3QnLFxuXHRcdFx0XHRcdGNvbmZpcm1UZXh0OiAnQ2xlYXInLFxuXHRcdFx0XHRcdGNhbmNlbFRleHQ6ICdDYW5jZWwnLFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IChyKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoci5jb25maXJtKSB7XG5cdFx0XHRcdFx0XHRcdGNsZWFyU25DYWNoZSgpXG5cdFx0XHRcdFx0XHRcdHRoaXMuc25Db3VudCA9IDBcblx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVUaW1lID0gJy0nXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ0NhY2hlIGNsZWFyZWQnLCBpY29uOiAnc3VjY2VzcycgfSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXG5cdFx0XHRnb0hpc3RvcnkoKSB7XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHsgdXJsOiAnL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeScgfSlcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXHQuY29udGFpbmVyIHtcblx0XHRwYWRkaW5nOiAxNnB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiA0MHB4O1xuXHR9XG5cblx0LnN0YXR1cy1iYXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0Z2FwOiAxMnB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cdH1cblxuXHQuc3RhdHVzLWl0ZW0ge1xuXHRcdGZsZXg6IDE7XG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdHBhZGRpbmc6IDEwcHggMTJweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdH1cblxuXHQuc3RhdHVzLWxhYmVsIHtcblx0XHRmb250LXNpemU6IDExcHg7XG5cdFx0Y29sb3I6ICM4ZThlOTM7XG5cdH1cblxuXHQuc3RhdHVzLXZhbHVlIHtcblx0XHRmb250LXNpemU6IDE3cHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRtYXJnaW4tdG9wOiAycHg7XG5cdH1cblxuXHQuaGVybyB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDMwcHggMCAyNHB4O1xuXHR9XG5cblx0Lmhlcm8taWNvbiB7XG5cdFx0Zm9udC1zaXplOiA2NHB4O1xuXHR9XG5cblx0Lmhlcm8tdGl0bGUge1xuXHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdG1hcmdpbi10b3A6IDhweDtcblx0fVxuXG5cdC5oZXJvLXN1YiB7XG5cdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdGNvbG9yOiAjOGU4ZTkzO1xuXHRcdG1hcmdpbi10b3A6IDZweDtcblx0fVxuXG5cdC5zY2FuLWJ0biB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdH1cblxuXHQubWV0aG9kcyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGdhcDogMTJweDtcblx0XHRtYXJnaW46IDE2cHggMCA4cHg7XG5cdH1cblx0Lm1ldGhvZC1jYXJkIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Z2FwOiAxNHB4O1xuXHRcdHBhZGRpbmc6IDE2cHg7XG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRib3JkZXItcmFkaXVzOiAxNHB4O1xuXHRcdGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMDYpO1xuXHRcdGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzBhODRmZjtcblx0fVxuXHQubWV0aG9kLWJhcmNvZGUgeyBib3JkZXItbGVmdC1jb2xvcjogIzBhODRmZjsgfVxuXHQubWV0aG9kLW9jciB7IGJvcmRlci1sZWZ0LWNvbG9yOiAjZmY5NTAwOyB9XG5cdC5tZXRob2Qtc3VmZml4IHsgYm9yZGVyLWxlZnQtY29sb3I6ICMzNGM3NTk7IH1cblx0Lm1ldGhvZC1pY29uIHtcblx0XHRmb250LXNpemU6IDMycHg7XG5cdFx0d2lkdGg6IDQ4cHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5cdC5tZXRob2QtdGV4dCB7IGZsZXg6IDE7IH1cblx0Lm1ldGhvZC10aXRsZSB7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0Y29sb3I6ICMxYzFjMWU7XG5cdH1cblx0Lm1ldGhvZC1zdWIge1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRjb2xvcjogIzhlOGU5Mztcblx0XHRtYXJnaW4tdG9wOiAycHg7XG5cdH1cblx0Lm1ldGhvZC1hcnJvdyB7XG5cdFx0Zm9udC1zaXplOiAyOHB4O1xuXHRcdGNvbG9yOiAjYzdjN2NjO1xuXHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdH1cblxuXHQuYWN0aW9ucyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRnYXA6IDEycHg7XG5cdFx0bWFyZ2luLXRvcDogOHB4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0fVxuXG5cdC5hY3Rpb24tY2FyZCB7XG5cdFx0ZmxleDogMTtcblx0XHRtaW4td2lkdGg6IDMwJTtcblx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdGJvcmRlci1yYWRpdXM6IDEycHg7XG5cdFx0cGFkZGluZzogMTZweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Ym94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4wNCk7XG5cdH1cblxuXHQuYWN0aW9uLWljb24ge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGZvbnQtc2l6ZTogMjhweDtcblx0fVxuXG5cdC5hY3Rpb24tdGV4dCB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Zm9udC1zaXplOiAxM3B4O1xuXHRcdG1hcmdpbi10b3A6IDRweDtcblx0XHRjb2xvcjogIzFjMWMxZTtcblx0fVxuXG5cdC50aXBzIHtcblx0XHRtYXJnaW4tdG9wOiAxNnB4O1xuXHR9XG5cblx0LnRpcC10aXRsZSB7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHR9XG5cblx0LnRpcC1saW5lIHtcblx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0Y29sb3I6ICM2YzZjNzA7XG5cdFx0bGluZS1oZWlnaHQ6IDEuODtcblx0fVxuXG5cdC5sb2FkaW5nIHtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0aW5zZXQ6IDA7XG5cdFx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQpO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHR6LWluZGV4OiA5OTtcblx0fVxuXG5cdC5sb2FkaW5nLWJveCB7XG5cdFx0YmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdHBhZGRpbmc6IDE2cHggMjRweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0fVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 5);
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ 14)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),
/* 14 */
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 5)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) {
              if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            }
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) {
      r.push(n);
    }
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) {
        "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      }
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 16 */
/*!***********************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/utils/auth.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.buildSnIndex = buildSnIndex;\nexports.checkSnInList = checkSnInList;\nexports.clearSnCache = clearSnCache;\nexports.findSnByS6Fragment = findSnByS6Fragment;\nexports.findSnBySuffix = findSnBySuffix;\nexports.findSnBySuffixTolerant = findSnBySuffixTolerant;\nexports.forceRefreshSnList = forceRefreshSnList;\nexports.getSnList = getSnList;\nexports.getSnListUpdateTime = getSnListUpdateTime;\nexports.getWhitelistStats = getWhitelistStats;\nexports.matchSnWithOcrTolerance = matchSnWithOcrTolerance;\nexports.setSnList = setSnList;\nvar _snListLoader = __webpack_require__(/*! ./sn-list-loader.js */ 17);\n// utils/auth.js - SN whitelist management (fully local, no backend)\n//\n// Data source: static/sn-list.txt (bundled into the App at uni-app build time)\n// Loading strategy: on startup read the localStorage cache first (instant) → then refresh from sn-list.txt in the background\n// Matching capabilities: exact / confusable-character variants (OCR tolerance) / fuzzy last-N-digit lookup\n//\n// ★ No backend API calls anymore; the whitelist is a fixed list of ~5000 entries bundled offline\n\n/** Legacy-compatible API: returns whitelist stats */\nfunction getSnList() {\n  var stats = (0, _snListLoader.getSnListStats)();\n  // The old API expects an array; wrap count here so .length doesn't throw\n  return {\n    length: stats.count,\n    count: stats.count,\n    updatedAt: stats.updatedAt\n  };\n}\n\n/** Legacy-compatible API: whitelist update timestamp */\nfunction getSnListUpdateTime() {\n  return (0, _snListLoader.getSnListStats)().updatedAt;\n}\n\n/** Legacy-compatible API: force refresh (no arguments, refresh only) */\nfunction setSnList() {\n  (0, _snListLoader.refreshSnList)().catch(console.warn);\n}\n\n/** Legacy-compatible API */\nfunction buildSnIndex() {\n  return (0, _snListLoader.buildSnIndex)();\n}\nfunction checkSnInList(sn) {\n  return (0, _snListLoader.checkSnInList)(sn);\n}\n\n/** ★ OCR-tolerant matching (recommended) */\nfunction matchSnWithOcrTolerance(sn) {\n  return (0, _snListLoader.matchSnWithOcrTolerance)(sn);\n}\n\n/** Whitelist stats { count, updatedAt } */\nfunction getWhitelistStats() {\n  return (0, _snListLoader.getSnListStats)();\n}\n\n/** Clear the whitelist cache */\nfunction clearSnCache() {\n  return (0, _snListLoader.clearSnCache)();\n}\n\n/** Force re-read the local sn-list.txt */\nfunction forceRefreshSnList() {\n  return (0, _snListLoader.forceRefreshSnList)();\n}\n\n/** Last-N-digit matching (for on-site entry of the SN's last 7 digits) */\nfunction findSnBySuffix(suffix) {\n  return (0, _snListLoader.findSnBySuffix)(suffix);\n}\n\n/**\n * ★ Tolerant last-7-digit lookup (recommended for the sn7 page)\n * Last-7 exact → last-7 fuzzy (confusable characters) → first-6/last-6 of the last 7 digits, position-aligned exact + fuzzy\n * @returns {Array<{sn, via, rank, diff}>}\n */\nfunction findSnBySuffixTolerant(input) {\n  return (0, _snListLoader.findSnBySuffixTolerant)(input);\n}\n\n/** ★ OCR-failure fallback: 6-digit degraded matching (first 6 of the last 7 digits / last 6 digits) */\nfunction findSnByS6Fragment(sn) {\n  return (0, _snListLoader.findSnByS6Fragment)(sn);\n}\n\n// Preload at startup\n(0, _snListLoader.loadSnList)().catch(console.warn);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvYXV0aC5qcyJdLCJuYW1lcyI6WyJnZXRTbkxpc3QiLCJzdGF0cyIsIl9nZXRTbkxpc3RTdGF0cyIsImxlbmd0aCIsImNvdW50IiwidXBkYXRlZEF0IiwiZ2V0U25MaXN0VXBkYXRlVGltZSIsInNldFNuTGlzdCIsInJlZnJlc2hTbkxpc3QiLCJjYXRjaCIsImNvbnNvbGUiLCJ3YXJuIiwiYnVpbGRTbkluZGV4IiwiX2J1aWxkU25JbmRleCIsImNoZWNrU25Jbkxpc3QiLCJzbiIsIl9jaGVja1NuSW5MaXN0IiwibWF0Y2hTbldpdGhPY3JUb2xlcmFuY2UiLCJfbWF0Y2hTbldpdGhPY3JUb2xlcmFuY2UiLCJnZXRXaGl0ZWxpc3RTdGF0cyIsImNsZWFyU25DYWNoZSIsIl9jbGVhclNuQ2FjaGUiLCJmb3JjZVJlZnJlc2hTbkxpc3QiLCJfZm9yY2VSZWZyZXNoU25MaXN0IiwiZmluZFNuQnlTdWZmaXgiLCJzdWZmaXgiLCJfZmluZFNuQnlTdWZmaXgiLCJmaW5kU25CeVN1ZmZpeFRvbGVyYW50IiwiaW5wdXQiLCJfZmluZFNuQnlTdWZmaXhUb2xlcmFudCIsImZpbmRTbkJ5UzZGcmFnbWVudCIsIl9maW5kU25CeVM2RnJhZ21lbnQiLCJsb2FkU25MaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQVFBO0FBUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZ0JBO0FBQ08sU0FBU0EsU0FBUyxHQUFHO0VBQzFCLElBQU1DLEtBQUssR0FBRyxJQUFBQyw0QkFBZSxHQUFFO0VBQy9CO0VBQ0EsT0FBTztJQUFFQyxNQUFNLEVBQUVGLEtBQUssQ0FBQ0csS0FBSztJQUFFQSxLQUFLLEVBQUVILEtBQUssQ0FBQ0csS0FBSztJQUFFQyxTQUFTLEVBQUVKLEtBQUssQ0FBQ0k7RUFBVSxDQUFDO0FBQ2hGOztBQUVBO0FBQ08sU0FBU0MsbUJBQW1CLEdBQUc7RUFDcEMsT0FBTyxJQUFBSiw0QkFBZSxHQUFFLENBQUNHLFNBQVM7QUFDcEM7O0FBRUE7QUFDTyxTQUFTRSxTQUFTLEdBQUc7RUFDMUIsSUFBQUMsMkJBQWEsR0FBRSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDO0FBQ3JDOztBQUVBO0FBQ08sU0FBU0MsWUFBWSxHQUFHO0VBQzdCLE9BQU8sSUFBQUMsMEJBQWEsR0FBRTtBQUN4QjtBQUVPLFNBQVNDLGFBQWEsQ0FBQ0MsRUFBRSxFQUFFO0VBQ2hDLE9BQU8sSUFBQUMsMkJBQWMsRUFBQ0QsRUFBRSxDQUFDO0FBQzNCOztBQUVBO0FBQ08sU0FBU0UsdUJBQXVCLENBQUNGLEVBQUUsRUFBRTtFQUMxQyxPQUFPLElBQUFHLHFDQUF3QixFQUFDSCxFQUFFLENBQUM7QUFDckM7O0FBRUE7QUFDTyxTQUFTSSxpQkFBaUIsR0FBRztFQUNsQyxPQUFPLElBQUFqQiw0QkFBZSxHQUFFO0FBQzFCOztBQUVBO0FBQ08sU0FBU2tCLFlBQVksR0FBRztFQUM3QixPQUFPLElBQUFDLDBCQUFhLEdBQUU7QUFDeEI7O0FBRUE7QUFDTyxTQUFTQyxrQkFBa0IsR0FBRztFQUNuQyxPQUFPLElBQUFDLGdDQUFtQixHQUFFO0FBQzlCOztBQUVBO0FBQ08sU0FBU0MsY0FBYyxDQUFDQyxNQUFNLEVBQUU7RUFDckMsT0FBTyxJQUFBQyw0QkFBZSxFQUFDRCxNQUFNLENBQUM7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNFLHNCQUFzQixDQUFDQyxLQUFLLEVBQUU7RUFDNUMsT0FBTyxJQUFBQyxvQ0FBdUIsRUFBQ0QsS0FBSyxDQUFDO0FBQ3ZDOztBQUVBO0FBQ08sU0FBU0Usa0JBQWtCLENBQUNmLEVBQUUsRUFBRTtFQUNyQyxPQUFPLElBQUFnQixnQ0FBbUIsRUFBQ2hCLEVBQUUsQ0FBQztBQUNoQzs7QUFFQTtBQUNBLElBQUFpQix3QkFBVSxHQUFFLENBQUN2QixLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdXRpbHMvYXV0aC5qcyAtIFNOIHdoaXRlbGlzdCBtYW5hZ2VtZW50IChmdWxseSBsb2NhbCwgbm8gYmFja2VuZClcbi8vXG4vLyBEYXRhIHNvdXJjZTogc3RhdGljL3NuLWxpc3QudHh0IChidW5kbGVkIGludG8gdGhlIEFwcCBhdCB1bmktYXBwIGJ1aWxkIHRpbWUpXG4vLyBMb2FkaW5nIHN0cmF0ZWd5OiBvbiBzdGFydHVwIHJlYWQgdGhlIGxvY2FsU3RvcmFnZSBjYWNoZSBmaXJzdCAoaW5zdGFudCkg4oaSIHRoZW4gcmVmcmVzaCBmcm9tIHNuLWxpc3QudHh0IGluIHRoZSBiYWNrZ3JvdW5kXG4vLyBNYXRjaGluZyBjYXBhYmlsaXRpZXM6IGV4YWN0IC8gY29uZnVzYWJsZS1jaGFyYWN0ZXIgdmFyaWFudHMgKE9DUiB0b2xlcmFuY2UpIC8gZnV6enkgbGFzdC1OLWRpZ2l0IGxvb2t1cFxuLy9cbi8vIOKYhSBObyBiYWNrZW5kIEFQSSBjYWxscyBhbnltb3JlOyB0aGUgd2hpdGVsaXN0IGlzIGEgZml4ZWQgbGlzdCBvZiB+NTAwMCBlbnRyaWVzIGJ1bmRsZWQgb2ZmbGluZVxuXG5pbXBvcnQge1xuICBsb2FkU25MaXN0LFxuICByZWZyZXNoU25MaXN0LFxuICBjaGVja1NuSW5MaXN0IGFzIF9jaGVja1NuSW5MaXN0LFxuICBidWlsZFNuSW5kZXggYXMgX2J1aWxkU25JbmRleCxcbiAgZ2V0U25MaXN0U3RhdHMgYXMgX2dldFNuTGlzdFN0YXRzLFxuICBtYXRjaFNuV2l0aE9jclRvbGVyYW5jZSBhcyBfbWF0Y2hTbldpdGhPY3JUb2xlcmFuY2UsXG4gIGNsZWFyU25DYWNoZSBhcyBfY2xlYXJTbkNhY2hlLFxuICBmb3JjZVJlZnJlc2hTbkxpc3QgYXMgX2ZvcmNlUmVmcmVzaFNuTGlzdCxcbiAgZmluZFNuQnlTdWZmaXggYXMgX2ZpbmRTbkJ5U3VmZml4LFxuICBmaW5kU25CeVN1ZmZpeFRvbGVyYW50IGFzIF9maW5kU25CeVN1ZmZpeFRvbGVyYW50LFxuICBmaW5kU25CeVM2RnJhZ21lbnQgYXMgX2ZpbmRTbkJ5UzZGcmFnbWVudCxcbn0gZnJvbSAnLi9zbi1saXN0LWxvYWRlci5qcydcblxuLyoqIExlZ2FjeS1jb21wYXRpYmxlIEFQSTogcmV0dXJucyB3aGl0ZWxpc3Qgc3RhdHMgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTbkxpc3QoKSB7XG4gIGNvbnN0IHN0YXRzID0gX2dldFNuTGlzdFN0YXRzKClcbiAgLy8gVGhlIG9sZCBBUEkgZXhwZWN0cyBhbiBhcnJheTsgd3JhcCBjb3VudCBoZXJlIHNvIC5sZW5ndGggZG9lc24ndCB0aHJvd1xuICByZXR1cm4geyBsZW5ndGg6IHN0YXRzLmNvdW50LCBjb3VudDogc3RhdHMuY291bnQsIHVwZGF0ZWRBdDogc3RhdHMudXBkYXRlZEF0IH1cbn1cblxuLyoqIExlZ2FjeS1jb21wYXRpYmxlIEFQSTogd2hpdGVsaXN0IHVwZGF0ZSB0aW1lc3RhbXAgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTbkxpc3RVcGRhdGVUaW1lKCkge1xuICByZXR1cm4gX2dldFNuTGlzdFN0YXRzKCkudXBkYXRlZEF0XG59XG5cbi8qKiBMZWdhY3ktY29tcGF0aWJsZSBBUEk6IGZvcmNlIHJlZnJlc2ggKG5vIGFyZ3VtZW50cywgcmVmcmVzaCBvbmx5KSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFNuTGlzdCgpIHtcbiAgcmVmcmVzaFNuTGlzdCgpLmNhdGNoKGNvbnNvbGUud2Fybilcbn1cblxuLyoqIExlZ2FjeS1jb21wYXRpYmxlIEFQSSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU25JbmRleCgpIHtcbiAgcmV0dXJuIF9idWlsZFNuSW5kZXgoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTbkluTGlzdChzbikge1xuICByZXR1cm4gX2NoZWNrU25Jbkxpc3Qoc24pXG59XG5cbi8qKiDimIUgT0NSLXRvbGVyYW50IG1hdGNoaW5nIChyZWNvbW1lbmRlZCkgKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFNuV2l0aE9jclRvbGVyYW5jZShzbikge1xuICByZXR1cm4gX21hdGNoU25XaXRoT2NyVG9sZXJhbmNlKHNuKVxufVxuXG4vKiogV2hpdGVsaXN0IHN0YXRzIHsgY291bnQsIHVwZGF0ZWRBdCB9ICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2hpdGVsaXN0U3RhdHMoKSB7XG4gIHJldHVybiBfZ2V0U25MaXN0U3RhdHMoKVxufVxuXG4vKiogQ2xlYXIgdGhlIHdoaXRlbGlzdCBjYWNoZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyU25DYWNoZSgpIHtcbiAgcmV0dXJuIF9jbGVhclNuQ2FjaGUoKVxufVxuXG4vKiogRm9yY2UgcmUtcmVhZCB0aGUgbG9jYWwgc24tbGlzdC50eHQgKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JjZVJlZnJlc2hTbkxpc3QoKSB7XG4gIHJldHVybiBfZm9yY2VSZWZyZXNoU25MaXN0KClcbn1cblxuLyoqIExhc3QtTi1kaWdpdCBtYXRjaGluZyAoZm9yIG9uLXNpdGUgZW50cnkgb2YgdGhlIFNOJ3MgbGFzdCA3IGRpZ2l0cykgKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kU25CeVN1ZmZpeChzdWZmaXgpIHtcbiAgcmV0dXJuIF9maW5kU25CeVN1ZmZpeChzdWZmaXgpXG59XG5cbi8qKlxuICog4piFIFRvbGVyYW50IGxhc3QtNy1kaWdpdCBsb29rdXAgKHJlY29tbWVuZGVkIGZvciB0aGUgc243IHBhZ2UpXG4gKiBMYXN0LTcgZXhhY3Qg4oaSIGxhc3QtNyBmdXp6eSAoY29uZnVzYWJsZSBjaGFyYWN0ZXJzKSDihpIgZmlyc3QtNi9sYXN0LTYgb2YgdGhlIGxhc3QgNyBkaWdpdHMsIHBvc2l0aW9uLWFsaWduZWQgZXhhY3QgKyBmdXp6eVxuICogQHJldHVybnMge0FycmF5PHtzbiwgdmlhLCByYW5rLCBkaWZmfT59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kU25CeVN1ZmZpeFRvbGVyYW50KGlucHV0KSB7XG4gIHJldHVybiBfZmluZFNuQnlTdWZmaXhUb2xlcmFudChpbnB1dClcbn1cblxuLyoqIOKYhSBPQ1ItZmFpbHVyZSBmYWxsYmFjazogNi1kaWdpdCBkZWdyYWRlZCBtYXRjaGluZyAoZmlyc3QgNiBvZiB0aGUgbGFzdCA3IGRpZ2l0cyAvIGxhc3QgNiBkaWdpdHMpICovXG5leHBvcnQgZnVuY3Rpb24gZmluZFNuQnlTNkZyYWdtZW50KHNuKSB7XG4gIHJldHVybiBfZmluZFNuQnlTNkZyYWdtZW50KHNuKVxufVxuXG4vLyBQcmVsb2FkIGF0IHN0YXJ0dXBcbmxvYWRTbkxpc3QoKS5jYXRjaChjb25zb2xlLndhcm4pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*********************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/utils/sn-list-loader.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process, __f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.buildSnIndex = buildSnIndex;\nexports.checkSnInList = checkSnInList;\nexports.clearSnCache = clearSnCache;\nexports.findSnByS6Fragment = findSnByS6Fragment;\nexports.findSnBySuffix = findSnBySuffix;\nexports.findSnBySuffixTolerant = findSnBySuffixTolerant;\nexports.forceRefreshSnList = forceRefreshSnList;\nexports.getSnCount = getSnCount;\nexports.getSnList = getSnList;\nexports.getSnListStats = getSnListStats;\nexports.isLoaded = isLoaded;\nexports.loadSnList = loadSnList;\nexports.matchSnWithOcrTolerance = matchSnWithOcrTolerance;\nexports.refreshSnList = refreshSnList;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 13));\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 20));\nvar _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 26));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 15));\nvar _process$versions;\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n// utils/sn-list-loader.js\n// Cross-environment loader for sn-list.txt (plaintext list of ~5000 SNs)\n//\n// Loading priority:\n//   1. localStorage cache (instant)\n//   2. Async fetch from static/sn-list.txt (background refresh)\n//   3. App: plus.io reading _www/sn-list.txt\n//   4. H5: fetch('/sn-list.txt')\n//   5. Mini-program: wx.getFileSystemManager().readFile\n//   6. Node tests: fs.readFileSync\n\n// ★ node:fs is only needed for Node tests; H5/App/mini-programs lack this module,\n//   which makes the build fail with \"Can't resolve 'node:fs'\". Use conditional-compilation\n//   comments to exclude those platforms\n\nvar STORAGE_KEY = 'sn_list_v1';\nvar STORAGE_META = 'sn_list_meta_v1';\nvar STORAGE_VERSION = 1;\nvar _list = []; // raw array\nvar _set = null; // Set (O(1) lookup)\nvar _updatedAt = 0;\nvar _loaded = false;\n\n// Environment detection\nvar HAS_UNI = typeof uni !== 'undefined';\nvar IS_NODE = typeof process !== 'undefined' && ((_process$versions = process.versions) === null || _process$versions === void 0 ? void 0 : _process$versions.node);\n\n/**\n * Synchronously get the currently loaded list (may be empty)\n */\nfunction getSnList() {\n  return _list;\n}\nfunction getSnCount() {\n  return _list.length;\n}\nfunction isLoaded() {\n  return _loaded;\n}\n\n/**\n * Load at startup (cache first, refresh asynchronously in the background)\n */\nfunction loadSnList() {\n  return _loadSnList.apply(this, arguments);\n}\n/**\n * Asynchronous refresh\n */\nfunction _loadSnList() {\n  _loadSnList = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n    var cached, meta;\n    return _regenerator.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // 1) Read the cache synchronously (uni environment)\n            if (HAS_UNI) {\n              try {\n                cached = uni.getStorageSync(STORAGE_KEY);\n                meta = uni.getStorageSync(STORAGE_META);\n                if (cached && meta && meta.version === STORAGE_VERSION) {\n                  setList(cached, meta.updatedAt, /*fromCache*/true);\n                  __f__(\"log\", \"[sn-list] Cache hit: \".concat(cached.length, \" entries\"), \" at utils/sn-list-loader.js:58\");\n                }\n              } catch (e) {\n                __f__(\"warn\", '[sn-list] Failed to read cache:', e.message, \" at utils/sn-list-loader.js:61\");\n              }\n            }\n\n            // 2) Pull fresh data asynchronously in the background\n            refreshSnList().catch(function (e) {\n              __f__(\"warn\", '[sn-list] Refresh failed, keeping cache:', e.message, \" at utils/sn-list-loader.js:67\");\n            });\n            return _context.abrupt(\"return\", _set);\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _loadSnList.apply(this, arguments);\n}\nfunction refreshSnList() {\n  return _refreshSnList.apply(this, arguments);\n}\n/**\n * Read the sn-list.txt content across environments\n */\nfunction _refreshSnList() {\n  _refreshSnList = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n    var text, lines, sns, _iterator8, _step8, line, sn, unique;\n    return _regenerator.default.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return fetchSnListText();\n          case 2:\n            text = _context2.sent;\n            lines = text.split(/\\r?\\n/);\n            sns = [];\n            _iterator8 = _createForOfIteratorHelper(lines);\n            _context2.prev = 6;\n            _iterator8.s();\n          case 8:\n            if ((_step8 = _iterator8.n()).done) {\n              _context2.next = 18;\n              break;\n            }\n            line = _step8.value;\n            sn = line.trim().toUpperCase();\n            if (sn) {\n              _context2.next = 13;\n              break;\n            }\n            return _context2.abrupt(\"continue\", 16);\n          case 13:\n            if (/^[A-Z0-9]{14,20}$/.test(sn)) {\n              _context2.next = 15;\n              break;\n            }\n            return _context2.abrupt(\"continue\", 16);\n          case 15:\n            sns.push(sn);\n          case 16:\n            _context2.next = 8;\n            break;\n          case 18:\n            _context2.next = 23;\n            break;\n          case 20:\n            _context2.prev = 20;\n            _context2.t0 = _context2[\"catch\"](6);\n            _iterator8.e(_context2.t0);\n          case 23:\n            _context2.prev = 23;\n            _iterator8.f();\n            return _context2.finish(23);\n          case 26:\n            unique = (0, _toConsumableArray2.default)(new Set(sns));\n            setList(unique, Date.now());\n            // Persist (uni environment only)\n            if (HAS_UNI) {\n              try {\n                uni.setStorageSync(STORAGE_KEY, unique);\n                uni.setStorageSync(STORAGE_META, {\n                  version: STORAGE_VERSION,\n                  count: unique.length,\n                  updatedAt: Date.now()\n                });\n              } catch (e) {\n                __f__(\"warn\", '[sn-list] Failed to write cache:', e.message, \" at utils/sn-list-loader.js:98\");\n              }\n            }\n            __f__(\"log\", \"[sn-list] Refresh done: \".concat(unique.length, \" entries\"), \" at utils/sn-list-loader.js:101\");\n            return _context2.abrupt(\"return\", unique);\n          case 31:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[6, 20, 23, 26]]);\n  }));\n  return _refreshSnList.apply(this, arguments);\n}\nfunction fetchSnListText() {\n  return _fetchSnListText.apply(this, arguments);\n}\n/**\n * Set the list (internal use)\n */\nfunction _fetchSnListText() {\n  _fetchSnListText = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n    var candidates, _i, _candidates, p;\n    return _regenerator.default.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            if (!(typeof plus !== 'undefined' && plus.io)) {\n              _context3.next = 2;\n              break;\n            }\n            return _context3.abrupt(\"return\", new Promise(function (resolve, reject) {\n              var candidates = ['_www/static/sn-list.txt', '_www/sn-list.txt' // legacy path fallback\n              ];\n\n              var tryRead = function tryRead(idx) {\n                if (idx >= candidates.length) {\n                  return reject(new Error('sn-list.txt not found on App; tried: ' + candidates.join(', ')));\n                }\n                var relPath = candidates[idx];\n                var path;\n                try {\n                  path = plus.io.convertLocalFileSystemURL(relPath);\n                } catch (e) {\n                  __f__(\"warn\", '[sn-list] convertLocalFileSystemURL failed:', relPath, e.message, \" at utils/sn-list-loader.js:141\");\n                  return tryRead(idx + 1);\n                }\n                __f__(\"log\", \"[sn-list] plus.io attempt (\".concat(idx + 1, \"/\").concat(candidates.length, \"):\"), path, \" at utils/sn-list-loader.js:144\");\n                plus.io.resolveLocalFileSystemURL(path, function (entry) {\n                  entry.file(function (file) {\n                    var reader = new plus.io.FileReader();\n                    reader.onload = function (e) {\n                      __f__(\"log\", \"[sn-list] App read OK (\".concat(relPath, \"): \").concat((e.target.result || '').split('\\n').length, \" lines\"), \" at utils/sn-list-loader.js:149\");\n                      resolve(e.target.result);\n                    };\n                    reader.onerror = function () {\n                      return tryRead(idx + 1);\n                    };\n                    reader.readAsText(file, 'utf-8');\n                  }, function (e) {\n                    return tryRead(idx + 1);\n                  });\n                }, function (e) {\n                  return tryRead(idx + 1);\n                });\n              };\n              tryRead(0);\n            }));\n          case 2:\n            if (!IS_NODE) {\n              _context3.next = 18;\n              break;\n            }\n            // Multiple possible paths (tried in order)\n            candidates = ['./sn-list.txt', './static/sn-list.txt', '../static/sn-list.txt', './utils/sn-list.txt'];\n            _i = 0, _candidates = candidates;\n          case 5:\n            if (!(_i < _candidates.length)) {\n              _context3.next = 17;\n              break;\n            }\n            p = _candidates[_i];\n            _context3.prev = 7;\n            if (!existsSync(p)) {\n              _context3.next = 10;\n              break;\n            }\n            return _context3.abrupt(\"return\", readFileSync(p, 'utf-8'));\n          case 10:\n            _context3.next = 14;\n            break;\n          case 12:\n            _context3.prev = 12;\n            _context3.t0 = _context3[\"catch\"](7);\n          case 14:\n            _i++;\n            _context3.next = 5;\n            break;\n          case 17:\n            throw new Error('sn-list.txt not found in Node environment; tried: ' + candidates.join(', '));\n          case 18:\n            throw new Error('Reading sn-list.txt is not supported in the current environment');\n          case 19:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[7, 12]]);\n  }));\n  return _fetchSnListText.apply(this, arguments);\n}\nfunction setList(list, updatedAt) {\n  var fromCache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  _list = list;\n  _set = new Set(list);\n  _updatedAt = updatedAt;\n  _loaded = true;\n}\n\n/**\n * Check whether an SN is in the list\n */\nfunction checkSnInList(sn) {\n  if (!_set) buildSnIndex();\n  if (!_set) return false;\n  return _set.has(String(sn || '').trim().toUpperCase());\n}\n\n/**\n * Legacy-compatible API: lazy load\n */\nfunction buildSnIndex() {\n  if (!_set) {\n    if (HAS_UNI) {\n      try {\n        var cached = uni.getStorageSync(STORAGE_KEY);\n        if (cached) {\n          _list = cached;\n          _set = new Set(cached);\n          _loaded = true;\n        }\n      } catch (e) {}\n    }\n  }\n  return _set;\n}\n\n/**\n * Stats\n */\nfunction getSnListStats() {\n  return {\n    count: _list.length,\n    updatedAt: _updatedAt,\n    cached: !!_set\n  };\n}\n\n/**\n * ★ Clear the localStorage cache + in-memory data\n * For troubleshooting \"whitelist doesn't match the file\" issues\n */\nfunction clearSnCache() {\n  _list = [];\n  _set = null;\n  _updatedAt = 0;\n  _loaded = false;\n  if (HAS_UNI) {\n    try {\n      uni.removeStorageSync(STORAGE_KEY);\n      uni.removeStorageSync(STORAGE_META);\n      __f__(\"log\", '[sn-list] Cache cleared', \" at utils/sn-list-loader.js:258\");\n    } catch (e) {\n      __f__(\"warn\", '[sn-list] Failed to clear cache:', e.message, \" at utils/sn-list-loader.js:260\");\n    }\n  }\n}\n\n/**\n * ★ Force refresh (ignore cache) - used by the \"reset\" button\n */\nfunction forceRefreshSnList() {\n  return _forceRefreshSnList.apply(this, arguments);\n}\n/**\n * ★ Last-N-digit matching (for on-site entry of the SN's last 7 digits)\n * @param {string} suffix user-entered characters (>= 4 digits)\n * @returns {Array<{sn, hit:number}>} matched full SNs; higher hit = more precise\n */\nfunction _forceRefreshSnList() {\n  _forceRefreshSnList = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {\n    return _regenerator.default.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            clearSnCache();\n            _context4.next = 3;\n            return refreshSnList();\n          case 3:\n            return _context4.abrupt(\"return\", _context4.sent);\n          case 4:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _forceRefreshSnList.apply(this, arguments);\n}\nfunction findSnBySuffix(suffix) {\n  buildSnIndex();\n  var s = String(suffix || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '');\n  if (!_list || !_list.length || s.length < 4) return [];\n  var out = [];\n  var _iterator = _createForOfIteratorHelper(_list),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var sn = _step.value;\n      if (sn.endsWith(s)) {\n        // Length of the matched \"prefix part\"; longer = more precise\n        var prefixLen = sn.length - s.length;\n        out.push({\n          sn: sn,\n          prefixLen: prefixLen\n        });\n      }\n    }\n    // If matched SNs have the same length (all 17 chars), prefixLen is equal; but in case the\n    // whitelist contains shorter SNs that also match, sort by prefixLen descending so the\n    // most likely ones come first\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  out.sort(function (a, b) {\n    return b.prefixLen - a.prefixLen;\n  });\n  return out.map(function (o) {\n    return o.sn;\n  });\n}\n\n/**\n * ★ 6-digit degraded matching (OCR-failure fallback)\n *\n * Take the SN's last 7 digits, split them into the first 6 / last 6, then endsWith-match\n * against the whitelist\n *\n * @param {string} sn any length (>= 6-digit suffix)\n * @returns {Array<{sn, via, fragment, matched}>}\n *   - via: 's7' (exact hit on last 7) / 'front6' (hit on first 6 of the last 7) / 'back6' (hit on last 6 of the last 7)\n *   - fragment: the matched substring\n *   - sn: the matched full whitelist SN\n *   - rank: smaller = more precise (0=s7, 1=front6, 2=back6)\n */\nfunction findSnByS6Fragment(sn) {\n  buildSnIndex();\n  var s = String(sn || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '');\n  if (!_list || !_list.length || s.length < 6) return [];\n\n  // Take the last 7 digits\n  var s7 = s.slice(-7);\n  // First 6 of the last 7 digits (s7[0..5])\n  var front6 = s7.slice(0, 6);\n  // Last 6 of the last 7 digits (s7[1..6])\n  var back6 = s7.slice(1, 7);\n  var out = [];\n  var _iterator2 = _createForOfIteratorHelper(_list),\n    _step2;\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var full = _step2.value;\n      if (full.endsWith(s7)) {\n        out.push({\n          sn: full,\n          via: 's7',\n          fragment: s7,\n          rank: 0\n        });\n      } else if (full.endsWith(front6)) {\n        out.push({\n          sn: full,\n          via: 'front6',\n          fragment: front6,\n          rank: 1\n        });\n      } else if (full.endsWith(back6)) {\n        out.push({\n          sn: full,\n          via: 'back6',\n          fragment: back6,\n          rank: 2\n        });\n      }\n    }\n    // Sort: s7 first > front6 > back6\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n  out.sort(function (a, b) {\n    return a.rank - b.rank;\n  });\n  return out;\n}\n\n/**\n * ★ OCR-tolerant matching (plaintext Set, replacing the hash scheme)\n */\nvar CONFUSABLE_PAIRS = [['0', 'O'], ['O', '0'], ['1', 'I'], ['I', '1'], ['1', 'L'], ['L', '1'], ['8', 'B'], ['B', '8'], ['5', 'S'], ['S', '5'], ['2', 'Z'], ['Z', '2'], ['6', 'G'], ['G', '6'], ['9', 'Q'], ['Q', '9'], ['4', 'A'], ['A', '4'], ['U', 'V'], ['V', 'U'], ['6', '8'], ['8', '6'], ['0', '6'], ['6', '0'], ['1', '7'], ['7', '1'], ['C', 'G'], ['G', 'C'], ['N', 'M'], ['M', 'N'], ['D', 'O'], ['O', 'D'], ['H', 'N'], ['N', 'H'], ['I', 'T'], ['T', 'I'], ['F', 'P'], ['P', 'F'], ['R', 'B'], ['B', 'R']];\nfunction genVariants(s) {\n  var maxDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;\n  var variants = new Set([s]);\n  var frontier = [s];\n  for (var d = 0; d < maxDepth; d++) {\n    var next = [];\n    var _iterator3 = _createForOfIteratorHelper(frontier),\n      _step3;\n    try {\n      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n        var v = _step3.value;\n        for (var i = 0; i < v.length; i++) {\n          var _iterator4 = _createForOfIteratorHelper(CONFUSABLE_PAIRS),\n            _step4;\n          try {\n            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n              var _step4$value = (0, _slicedToArray2.default)(_step4.value, 2),\n                a = _step4$value[0],\n                b = _step4$value[1];\n              if (v[i] === a) {\n                var nv = v.slice(0, i) + b + v.slice(i + 1);\n                if (!variants.has(nv)) {\n                  variants.add(nv);\n                  next.push(nv);\n                }\n              }\n            }\n          } catch (err) {\n            _iterator4.e(err);\n          } finally {\n            _iterator4.f();\n          }\n        }\n      }\n    } catch (err) {\n      _iterator3.e(err);\n    } finally {\n      _iterator3.f();\n    }\n    frontier = next;\n  }\n  return variants;\n}\nfunction matchSnWithOcrTolerance(sn) {\n  buildSnIndex();\n  var original = String(sn || '').trim().toUpperCase();\n  if (!original) return {\n    matched: false,\n    original: original,\n    reason: 'empty'\n  };\n  if (!_set) return {\n    matched: false,\n    original: original,\n    reason: 'no_list'\n  };\n\n  // 1) Exact\n  if (_set.has(original)) {\n    return {\n      matched: true,\n      type: 'exact',\n      sn: original,\n      original: original\n    };\n  }\n\n  // 2) Character variants (depth 2)\n  var _iterator5 = _createForOfIteratorHelper(genVariants(original, 2)),\n    _step5;\n  try {\n    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {\n      var v = _step5.value;\n      if (_set.has(v)) {\n        return {\n          matched: true,\n          type: 'variant',\n          sn: v,\n          original: original,\n          diff: diffChars(original, v),\n          reason: 'OCR confusable-character variant'\n        };\n      }\n    }\n  } catch (err) {\n    _iterator5.e(err);\n  } finally {\n    _iterator5.f();\n  }\n  return {\n    matched: false,\n    original: original,\n    reason: 'not_in_list'\n  };\n}\nfunction diffChars(a, b) {\n  if (a.length !== b.length) return \"\".concat(a.length, \" vs \").concat(b.length, \" chars\");\n  var diffs = [];\n  for (var i = 0; i < a.length; i++) {\n    if (a[i] !== b[i]) diffs.push(\"pos\".concat(i, \":\").concat(a[i], \"\\u2192\").concat(b[i]));\n    if (diffs.length >= 3) break;\n  }\n  return diffs.join(', ') || 'identical';\n}\n\n/**\n * ★ Position-tiered suffix lookup (used by the sn7 page)\n *\n * The input is right-aligned with the SN tail (the entered characters correspond to the\n * LAST positions of the SN). For the 7-char case the tiers are, per requirements:\n *   1) full match: all 7 positions equal → show this list\n *   2) if none:    SNs matching any 6 of the 7 positions (contiguity NOT required)\n *   3) if none:    SNs matching any 5 of the 7 positions (contiguity NOT required)\n * Shorter inputs use the same ladder on their own length (6-char: 6→5→4; 4~5-char: exact only).\n *\n * @param {string} input user input (full SN or suffix both work)\n * @returns {Array<{sn, via, rank, diff}>}\n *   via: 'exact' (all positions match) / 'pos6' / 'pos5' / 'pos4' (N positions match)\n *   rank: 0 = full match, 1 = one position off, 2 = two positions off\n */\nfunction findSnBySuffixTolerant(input) {\n  buildSnIndex();\n  var s = String(input || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '');\n  if (!_list || !_list.length || s.length < 4) return [];\n\n  // Right-align: the probe covers the SN's last L characters\n  var L = Math.min(s.length, 7);\n  var probe = s.slice(-L);\n\n  // Score every SN once: matched-position count + mask (matched chars, '_' for misses)\n  var scored = [];\n  var _iterator6 = _createForOfIteratorHelper(_list),\n    _step6;\n  try {\n    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {\n      var full = _step6.value;\n      var tail = full.slice(-L);\n      var cnt = 0;\n      var mask = '';\n      for (var i = 0; i < L; i++) {\n        if (probe[i] === tail[i]) {\n          cnt++;\n          mask += probe[i];\n        } else {\n          mask += '_';\n        }\n      }\n      scored.push({\n        sn: full,\n        cnt: cnt,\n        mask: mask\n      });\n    }\n\n    // ★ Tier ladder: full match → one position off → two positions off.\n    //   4~5-char inputs keep the strict exact-only behavior.\n  } catch (err) {\n    _iterator6.e(err);\n  } finally {\n    _iterator6.f();\n  }\n  var maxDrop = L >= 6 ? 2 : 0;\n  var out = [];\n  for (var drop = 0; drop <= maxDrop; drop++) {\n    var need = L - drop;\n    var _iterator7 = _createForOfIteratorHelper(scored),\n      _step7;\n    try {\n      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {\n        var sc = _step7.value;\n        if (sc.cnt === need) {\n          out.push({\n            sn: sc.sn,\n            via: drop === 0 ? 'exact' : 'pos' + need,\n            rank: drop,\n            diff: drop === 0 ? '' : \"matched \".concat(sc.mask, \" (\").concat(sc.cnt, \"/\").concat(L, \" positions)\")\n          });\n        }\n      }\n    } catch (err) {\n      _iterator7.e(err);\n    } finally {\n      _iterator7.f();\n    }\n    if (out.length > 0) break; // first tier that yields results wins\n  }\n\n  out.sort(function (a, b) {\n    return a.rank - b.rank;\n  });\n  return out;\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 18), __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 1)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvc24tbGlzdC1sb2FkZXIuanMiXSwibmFtZXMiOlsiU1RPUkFHRV9LRVkiLCJTVE9SQUdFX01FVEEiLCJTVE9SQUdFX1ZFUlNJT04iLCJfbGlzdCIsIl9zZXQiLCJfdXBkYXRlZEF0IiwiX2xvYWRlZCIsIkhBU19VTkkiLCJ1bmkiLCJJU19OT0RFIiwicHJvY2VzcyIsInZlcnNpb25zIiwibm9kZSIsImdldFNuTGlzdCIsImdldFNuQ291bnQiLCJsZW5ndGgiLCJpc0xvYWRlZCIsImxvYWRTbkxpc3QiLCJjYWNoZWQiLCJnZXRTdG9yYWdlU3luYyIsIm1ldGEiLCJ2ZXJzaW9uIiwic2V0TGlzdCIsInVwZGF0ZWRBdCIsImUiLCJtZXNzYWdlIiwicmVmcmVzaFNuTGlzdCIsImNhdGNoIiwiZmV0Y2hTbkxpc3RUZXh0IiwidGV4dCIsImxpbmVzIiwic3BsaXQiLCJzbnMiLCJsaW5lIiwic24iLCJ0cmltIiwidG9VcHBlckNhc2UiLCJ0ZXN0IiwicHVzaCIsInVuaXF1ZSIsIlNldCIsIkRhdGUiLCJub3ciLCJzZXRTdG9yYWdlU3luYyIsImNvdW50IiwicGx1cyIsImlvIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjYW5kaWRhdGVzIiwidHJ5UmVhZCIsImlkeCIsIkVycm9yIiwiam9pbiIsInJlbFBhdGgiLCJwYXRoIiwiY29udmVydExvY2FsRmlsZVN5c3RlbVVSTCIsInJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwiLCJlbnRyeSIsImZpbGUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwidGFyZ2V0IiwicmVzdWx0Iiwib25lcnJvciIsInJlYWRBc1RleHQiLCJwIiwiZXhpc3RzU3luYyIsInJlYWRGaWxlU3luYyIsImxpc3QiLCJmcm9tQ2FjaGUiLCJjaGVja1NuSW5MaXN0IiwiYnVpbGRTbkluZGV4IiwiaGFzIiwiU3RyaW5nIiwiZ2V0U25MaXN0U3RhdHMiLCJjbGVhclNuQ2FjaGUiLCJyZW1vdmVTdG9yYWdlU3luYyIsImZvcmNlUmVmcmVzaFNuTGlzdCIsImZpbmRTbkJ5U3VmZml4Iiwic3VmZml4IiwicyIsInJlcGxhY2UiLCJvdXQiLCJlbmRzV2l0aCIsInByZWZpeExlbiIsInNvcnQiLCJhIiwiYiIsIm1hcCIsIm8iLCJmaW5kU25CeVM2RnJhZ21lbnQiLCJzNyIsInNsaWNlIiwiZnJvbnQ2IiwiYmFjazYiLCJmdWxsIiwidmlhIiwiZnJhZ21lbnQiLCJyYW5rIiwiQ09ORlVTQUJMRV9QQUlSUyIsImdlblZhcmlhbnRzIiwibWF4RGVwdGgiLCJ2YXJpYW50cyIsImZyb250aWVyIiwiZCIsIm5leHQiLCJ2IiwiaSIsIm52IiwiYWRkIiwibWF0Y2hTbldpdGhPY3JUb2xlcmFuY2UiLCJvcmlnaW5hbCIsIm1hdGNoZWQiLCJyZWFzb24iLCJ0eXBlIiwiZGlmZiIsImRpZmZDaGFycyIsImRpZmZzIiwiZmluZFNuQnlTdWZmaXhUb2xlcmFudCIsImlucHV0IiwiTCIsIk1hdGgiLCJtaW4iLCJwcm9iZSIsInNjb3JlZCIsInRhaWwiLCJjbnQiLCJtYXNrIiwibWF4RHJvcCIsImRyb3AiLCJuZWVkIiwic2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsV0FBVyxHQUFHLFlBQVk7QUFDaEMsSUFBTUMsWUFBWSxHQUFHLGlCQUFpQjtBQUN0QyxJQUFNQyxlQUFlLEdBQUcsQ0FBQztBQUV6QixJQUFJQyxLQUFLLEdBQUcsRUFBRSxFQUFLO0FBQ25CLElBQUlDLElBQUksR0FBRyxJQUFJLEVBQUk7QUFDbkIsSUFBSUMsVUFBVSxHQUFHLENBQUM7QUFDbEIsSUFBSUMsT0FBTyxHQUFHLEtBQUs7O0FBRW5CO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLE9BQU9DLEdBQUcsS0FBSyxXQUFXO0FBQzFDLElBQU1DLE9BQU8sR0FBRyxPQUFPQyxPQUFP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QUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDdEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3RCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUN0QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDdEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3RCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUN0QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDdEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3RCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUN0QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDdEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ3RCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUN0QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDdEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQ3ZCO0FBRUQsU0FBU0MsV0FBVyxDQUFDcEIsQ0FBQyxFQUFnQjtFQUFBLElBQWRxQixRQUFRLHVFQUFHLENBQUM7RUFDbEMsSUFBTUMsUUFB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SUFDMUMsSUFBTUMsSUFBSSxHQUFHVixDQUFDLEdBQUdTLElBQUk7SUFBQSw0Q0FDSkwsTUFBTTtNQUFBO0lBQUE7TUFBdkIsdURBQXlCO1FBQUEsSUFBZE8sRUFBRTtRQUNYLElBQUlBLEVBQUUsQ0FBQ0wsR0FBRyxLQUFLSSxJQUFJLEVBQUU7VUFDbkJoRCxHQUFHLENBQUMvQyxJQUFJLENBQUM7WUFDUEosRUFBRSxFQUFFb0csRUFBRSxDQUFDcEcsRUFBRTtZQUNUaUUsR0FBRyxFQUFFaUMsSUFBSSxLQUFLLENBQUMsR0FBRyxPQUFPLEdBQUcsS0FBSyxHQUFHQyxJQUFJO1lBQ3hDaEMsSUFBSSxFQUFFK0IsSUFBSTtZQUNWZCxJQUFJLEVBQUVjLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRSxxQkFBY0UsRUFBRSxDQUFDSixJQUFJLGVBQUtJLEVBQUUsQ0FBQ0wsR0FBRyxjQUFJTixDQUFDO1VBQzVELENBQUMsQ0FBQztRQUNKO01BQ0Y7SUFBQztNQUFBO0lBQUE7TUFBQTtJQUFBO0lBQ0QsSUFBSXRDLEdBQUcsQ0FBQ3RFLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBSyxDQUFFO0VBQzdCOztFQUVBc0UsR0FBRyxDQUFDRyxJQUFJLENBQUMsVUFBQ0MsQ0FBQyxFQUFFQyxDQUFDO0lBQUEsT0FBS0QsQ0FBQyxDQUFDWSxJQUFJLEdBQUdYLENBQUMsQ0FBQ1csSUFBSTtFQUFBLEVBQUM7RUFDbkMsT0FBT2hCLEdBQUc7QUFDWixDIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdXRpbHMvc24tbGlzdC1sb2FkZXIuanNcbi8vIENyb3NzLWVudmlyb25tZW50IGxvYWRlciBmb3Igc24tbGlzdC50eHQgKHBsYWludGV4dCBsaXN0IG9mIH41MDAwIFNOcylcbi8vXG4vLyBMb2FkaW5nIHByaW9yaXR5OlxuLy8gICAxLiBsb2NhbFN0b3JhZ2UgY2FjaGUgKGluc3RhbnQpXG4vLyAgIDIuIEFzeW5jIGZldGNoIGZyb20gc3RhdGljL3NuLWxpc3QudHh0IChiYWNrZ3JvdW5kIHJlZnJlc2gpXG4vLyAgIDMuIEFwcDogcGx1cy5pbyByZWFkaW5nIF93d3cvc24tbGlzdC50eHRcbi8vICAgNC4gSDU6IGZldGNoKCcvc24tbGlzdC50eHQnKVxuLy8gICA1LiBNaW5pLXByb2dyYW06IHd4LmdldEZpbGVTeXN0ZW1NYW5hZ2VyKCkucmVhZEZpbGVcbi8vICAgNi4gTm9kZSB0ZXN0czogZnMucmVhZEZpbGVTeW5jXG5cbi8vIOKYhSBub2RlOmZzIGlzIG9ubHkgbmVlZGVkIGZvciBOb2RlIHRlc3RzOyBINS9BcHAvbWluaS1wcm9ncmFtcyBsYWNrIHRoaXMgbW9kdWxlLFxuLy8gICB3aGljaCBtYWtlcyB0aGUgYnVpbGQgZmFpbCB3aXRoIFwiQ2FuJ3QgcmVzb2x2ZSAnbm9kZTpmcydcIi4gVXNlIGNvbmRpdGlvbmFsLWNvbXBpbGF0aW9uXG4vLyAgIGNvbW1lbnRzIHRvIGV4Y2x1ZGUgdGhvc2UgcGxhdGZvcm1zXG5cblxuXG5cbmNvbnN0IFNUT1JBR0VfS0VZID0gJ3NuX2xpc3RfdjEnXG5jb25zdCBTVE9SQUdFX01FVEEgPSAnc25fbGlzdF9tZXRhX3YxJ1xuY29uc3QgU1RPUkFHRV9WRVJTSU9OID0gMVxuXG5sZXQgX2xpc3QgPSBbXSAgICAgLy8gcmF3IGFycmF5XG5sZXQgX3NldCA9IG51bGwgICAgLy8gU2V0IChPKDEpIGxvb2t1cClcbmxldCBfdXBkYXRlZEF0ID0gMFxubGV0IF9sb2FkZWQgPSBmYWxzZVxuXG4vLyBFbnZpcm9ubWVudCBkZXRlY3Rpb25cbmNvbnN0IEhBU19VTkkgPSB0eXBlb2YgdW5pICE9PSAndW5kZWZpbmVkJ1xuY29uc3QgSVNfTk9ERSA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLnZlcnNpb25zPy5ub2RlXG5cbi8qKlxuICogU3luY2hyb25vdXNseSBnZXQgdGhlIGN1cnJlbnRseSBsb2FkZWQgbGlzdCAobWF5IGJlIGVtcHR5KVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U25MaXN0KCkge1xuICByZXR1cm4gX2xpc3Rcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNuQ291bnQoKSB7XG4gIHJldHVybiBfbGlzdC5sZW5ndGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTG9hZGVkKCkge1xuICByZXR1cm4gX2xvYWRlZFxufVxuXG4vKipcbiAqIExvYWQgYXQgc3RhcnR1cCAoY2FjaGUgZmlyc3QsIHJlZnJlc2ggYXN5bmNocm9ub3VzbHkgaW4gdGhlIGJhY2tncm91bmQpXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkU25MaXN0KCkge1xuICAvLyAxKSBSZWFkIHRoZSBjYWNoZSBzeW5jaHJvbm91c2x5ICh1bmkgZW52aXJvbm1lbnQpXG4gIGlmIChIQVNfVU5JKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhTVE9SQUdFX0tFWSlcbiAgICAgIGNvbnN0IG1ldGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoU1RPUkFHRV9NRVRBKVxuICAgICAgaWYgKGNhY2hlZCAmJiBtZXRhICYmIG1ldGEudmVyc2lvbiA9PT0gU1RPUkFHRV9WRVJTSU9OKSB7XG4gICAgICAgIHNldExpc3QoY2FjaGVkLCBtZXRhLnVwZGF0ZWRBdCwgLypmcm9tQ2FjaGUqLyB0cnVlKVxuICAgICAgICBjb25zb2xlLmxvZyhgW3NuLWxpc3RdIENhY2hlIGhpdDogJHtjYWNoZWQubGVuZ3RofSBlbnRyaWVzYClcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tzbi1saXN0XSBGYWlsZWQgdG8gcmVhZCBjYWNoZTonLCBlLm1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgLy8gMikgUHVsbCBmcmVzaCBkYXRhIGFzeW5jaHJvbm91c2x5IGluIHRoZSBiYWNrZ3JvdW5kXG4gIHJlZnJlc2hTbkxpc3QoKS5jYXRjaChlID0+IHtcbiAgICBjb25zb2xlLndhcm4oJ1tzbi1saXN0XSBSZWZyZXNoIGZhaWxlZCwga2VlcGluZyBjYWNoZTonLCBlLm1lc3NhZ2UpXG4gIH0pXG5cbiAgcmV0dXJuIF9zZXRcbn1cblxuLyoqXG4gKiBBc3luY2hyb25vdXMgcmVmcmVzaFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFNuTGlzdCgpIHtcbiAgY29uc3QgdGV4dCA9IGF3YWl0IGZldGNoU25MaXN0VGV4dCgpXG4gIGNvbnN0IGxpbmVzID0gdGV4dC5zcGxpdCgvXFxyP1xcbi8pXG4gIGNvbnN0IHNucyA9IFtdXG4gIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgIGNvbnN0IHNuID0gbGluZS50cmltKCkudG9VcHBlckNhc2UoKVxuICAgIGlmICghc24pIGNvbnRpbnVlXG4gICAgaWYgKCEvXltBLVowLTldezE0LDIwfSQvLnRlc3Qoc24pKSBjb250aW51ZVxuICAgIHNucy5wdXNoKHNuKVxuICB9XG4gIGNvbnN0IHVuaXF1ZSA9IFsuLi5uZXcgU2V0KHNucyldXG4gIHNldExpc3QodW5pcXVlLCBEYXRlLm5vdygpKVxuICAvLyBQZXJzaXN0ICh1bmkgZW52aXJvbm1lbnQgb25seSlcbiAgaWYgKEhBU19VTkkpIHtcbiAgICB0cnkge1xuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFNUT1JBR0VfS0VZLCB1bmlxdWUpXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoU1RPUkFHRV9NRVRBLCB7XG4gICAgICAgIHZlcnNpb246IFNUT1JBR0VfVkVSU0lPTixcbiAgICAgICAgY291bnQ6IHVuaXF1ZS5sZW5ndGgsXG4gICAgICAgIHVwZGF0ZWRBdDogRGF0ZS5ub3coKVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tzbi1saXN0XSBGYWlsZWQgdG8gd3JpdGUgY2FjaGU6JywgZS5tZXNzYWdlKVxuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhgW3NuLWxpc3RdIFJlZnJlc2ggZG9uZTogJHt1bmlxdWUubGVuZ3RofSBlbnRyaWVzYClcbiAgcmV0dXJuIHVuaXF1ZVxufVxuXG4vKipcbiAqIFJlYWQgdGhlIHNuLWxpc3QudHh0IGNvbnRlbnQgYWNyb3NzIGVudmlyb25tZW50c1xuICovXG5hc3luYyBmdW5jdGlvbiBmZXRjaFNuTGlzdFRleHQoKSB7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGlmICh0eXBlb2YgcGx1cyAhPT0gJ3VuZGVmaW5lZCcgJiYgcGx1cy5pbykge1xuICAgIC8vIOKYhSBBZnRlciB1bmktYXBwIGNvbXBpbGVzLCBzdGF0aWMvIGlzIGJ1bmRsZWQgYXMgYSB3aG9sZSBpbnRvIF93d3cvc3RhdGljL1xuICAgIC8vICAgVGhlIHByZXZpb3VzIF93d3cvc24tbGlzdC50eHQgcGF0aCB3YXMgd3JvbmcgYW5kIG5ldmVyIHJlYWRhYmxlIG9uIHRoZSBBcHAgc2lkZVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBjYW5kaWRhdGVzID0gW1xuICAgICAgICAnX3d3dy9zdGF0aWMvc24tbGlzdC50eHQnLFxuICAgICAgICAnX3d3dy9zbi1saXN0LnR4dCcsICAvLyBsZWdhY3kgcGF0aCBmYWxsYmFja1xuICAgICAgXVxuICAgICAgY29uc3QgdHJ5UmVhZCA9IChpZHgpID0+IHtcbiAgICAgICAgaWYgKGlkeCA+PSBjYW5kaWRhdGVzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKCdzbi1saXN0LnR4dCBub3QgZm91bmQgb24gQXBwOyB0cmllZDogJyArIGNhbmRpZGF0ZXMuam9pbignLCAnKSkpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVsUGF0aCA9IGNhbmRpZGF0ZXNbaWR4XVxuICAgICAgICBsZXQgcGF0aFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHBhdGggPSBwbHVzLmlvLmNvbnZlcnRMb2NhbEZpbGVTeXN0ZW1VUkwocmVsUGF0aClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybignW3NuLWxpc3RdIGNvbnZlcnRMb2NhbEZpbGVTeXN0ZW1VUkwgZmFpbGVkOicsIHJlbFBhdGgsIGUubWVzc2FnZSlcbiAgICAgICAgICByZXR1cm4gdHJ5UmVhZChpZHggKyAxKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBbc24tbGlzdF0gcGx1cy5pbyBhdHRlbXB0ICgke2lkeCArIDF9LyR7Y2FuZGlkYXRlcy5sZW5ndGh9KTpgLCBwYXRoKVxuICAgICAgICBwbHVzLmlvLnJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwocGF0aCwgKGVudHJ5KSA9PiB7XG4gICAgICAgICAgZW50cnkuZmlsZSgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IHBsdXMuaW8uRmlsZVJlYWRlcigpXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtzbi1saXN0XSBBcHAgcmVhZCBPSyAoJHtyZWxQYXRofSk6ICR7KGUudGFyZ2V0LnJlc3VsdHx8JycpLnNwbGl0KCdcXG4nKS5sZW5ndGh9IGxpbmVzYClcbiAgICAgICAgICAgICAgcmVzb2x2ZShlLnRhcmdldC5yZXN1bHQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHRyeVJlYWQoaWR4ICsgMSlcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUsICd1dGYtOCcpXG4gICAgICAgICAgfSwgKGUpID0+IHRyeVJlYWQoaWR4ICsgMSkpXG4gICAgICAgIH0sIChlKSA9PiB0cnlSZWFkKGlkeCArIDEpKVxuICAgICAgfVxuICAgICAgdHJ5UmVhZCgwKVxuICAgIH0pXG4gIH1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAvLyBOb2RlIGVudmlyb25tZW50OiByZWFkIHdpdGggZnNcbiAgaWYgKElTX05PREUpIHtcbiAgICAvLyBNdWx0aXBsZSBwb3NzaWJsZSBwYXRocyAodHJpZWQgaW4gb3JkZXIpXG4gICAgY29uc3QgY2FuZGlkYXRlcyA9IFtcbiAgICAgICcuL3NuLWxpc3QudHh0JyxcbiAgICAgICcuL3N0YXRpYy9zbi1saXN0LnR4dCcsXG4gICAgICAnLi4vc3RhdGljL3NuLWxpc3QudHh0JyxcbiAgICAgICcuL3V0aWxzL3NuLWxpc3QudHh0JyxcbiAgICBdXG4gICAgZm9yIChjb25zdCBwIG9mIGNhbmRpZGF0ZXMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChleGlzdHNTeW5jKHApKSByZXR1cm4gcmVhZEZpbGVTeW5jKHAsICd1dGYtOCcpXG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NuLWxpc3QudHh0IG5vdCBmb3VuZCBpbiBOb2RlIGVudmlyb25tZW50OyB0cmllZDogJyArIGNhbmRpZGF0ZXMuam9pbignLCAnKSlcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignUmVhZGluZyBzbi1saXN0LnR4dCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoZSBjdXJyZW50IGVudmlyb25tZW50Jylcbn1cblxuLyoqXG4gKiBTZXQgdGhlIGxpc3QgKGludGVybmFsIHVzZSlcbiAqL1xuZnVuY3Rpb24gc2V0TGlzdChsaXN0LCB1cGRhdGVkQXQsIGZyb21DYWNoZSA9IGZhbHNlKSB7XG4gIF9saXN0ID0gbGlzdFxuICBfc2V0ID0gbmV3IFNldChsaXN0KVxuICBfdXBkYXRlZEF0ID0gdXBkYXRlZEF0XG4gIF9sb2FkZWQgPSB0cnVlXG59XG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhbiBTTiBpcyBpbiB0aGUgbGlzdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTbkluTGlzdChzbikge1xuICBpZiAoIV9zZXQpIGJ1aWxkU25JbmRleCgpXG4gIGlmICghX3NldCkgcmV0dXJuIGZhbHNlXG4gIHJldHVybiBfc2V0LmhhcyhTdHJpbmcoc24gfHwgJycpLnRyaW0oKS50b1VwcGVyQ2FzZSgpKVxufVxuXG4vKipcbiAqIExlZ2FjeS1jb21wYXRpYmxlIEFQSTogbGF6eSBsb2FkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFNuSW5kZXgoKSB7XG4gIGlmICghX3NldCkge1xuICAgIGlmIChIQVNfVU5JKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjYWNoZWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoU1RPUkFHRV9LRVkpXG4gICAgICAgIGlmIChjYWNoZWQpIHtcbiAgICAgICAgICBfbGlzdCA9IGNhY2hlZFxuICAgICAgICAgIF9zZXQgPSBuZXcgU2V0KGNhY2hlZClcbiAgICAgICAgICBfbG9hZGVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgfVxuICByZXR1cm4gX3NldFxufVxuXG4vKipcbiAqIFN0YXRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTbkxpc3RTdGF0cygpIHtcbiAgcmV0dXJuIHtcbiAgICBjb3VudDogX2xpc3QubGVuZ3RoLFxuICAgIHVwZGF0ZWRBdDogX3VwZGF0ZWRBdCxcbiAgICBjYWNoZWQ6ICEhX3NldFxuICB9XG59XG5cbi8qKlxuICog4piFIENsZWFyIHRoZSBsb2NhbFN0b3JhZ2UgY2FjaGUgKyBpbi1tZW1vcnkgZGF0YVxuICogRm9yIHRyb3VibGVzaG9vdGluZyBcIndoaXRlbGlzdCBkb2Vzbid0IG1hdGNoIHRoZSBmaWxlXCIgaXNzdWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclNuQ2FjaGUoKSB7XG4gIF9saXN0ID0gW11cbiAgX3NldCA9IG51bGxcbiAgX3VwZGF0ZWRBdCA9IDBcbiAgX2xvYWRlZCA9IGZhbHNlXG4gIGlmIChIQVNfVU5JKSB7XG4gICAgdHJ5IHtcbiAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhTVE9SQUdFX0tFWSlcbiAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhTVE9SQUdFX01FVEEpXG4gICAgICBjb25zb2xlLmxvZygnW3NuLWxpc3RdIENhY2hlIGNsZWFyZWQnKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignW3NuLWxpc3RdIEZhaWxlZCB0byBjbGVhciBjYWNoZTonLCBlLm1lc3NhZ2UpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog4piFIEZvcmNlIHJlZnJlc2ggKGlnbm9yZSBjYWNoZSkgLSB1c2VkIGJ5IHRoZSBcInJlc2V0XCIgYnV0dG9uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmb3JjZVJlZnJlc2hTbkxpc3QoKSB7XG4gIGNsZWFyU25DYWNoZSgpXG4gIHJldHVybiBhd2FpdCByZWZyZXNoU25MaXN0KClcbn1cblxuLyoqXG4gKiDimIUgTGFzdC1OLWRpZ2l0IG1hdGNoaW5nIChmb3Igb24tc2l0ZSBlbnRyeSBvZiB0aGUgU04ncyBsYXN0IDcgZGlnaXRzKVxuICogQHBhcmFtIHtzdHJpbmd9IHN1ZmZpeCB1c2VyLWVudGVyZWQgY2hhcmFjdGVycyAoPj0gNCBkaWdpdHMpXG4gKiBAcmV0dXJucyB7QXJyYXk8e3NuLCBoaXQ6bnVtYmVyfT59IG1hdGNoZWQgZnVsbCBTTnM7IGhpZ2hlciBoaXQgPSBtb3JlIHByZWNpc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRTbkJ5U3VmZml4KHN1ZmZpeCkge1xuICBidWlsZFNuSW5kZXgoKVxuICBjb25zdCBzID0gU3RyaW5nKHN1ZmZpeCB8fCAnJykudHJpbSgpLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKVxuICBpZiAoIV9saXN0IHx8ICFfbGlzdC5sZW5ndGggfHwgcy5sZW5ndGggPCA0KSByZXR1cm4gW11cbiAgY29uc3Qgb3V0ID0gW11cbiAgZm9yIChjb25zdCBzbiBvZiBfbGlzdCkge1xuICAgIGlmIChzbi5lbmRzV2l0aChzKSkge1xuICAgICAgLy8gTGVuZ3RoIG9mIHRoZSBtYXRjaGVkIFwicHJlZml4IHBhcnRcIjsgbG9uZ2VyID0gbW9yZSBwcmVjaXNlXG4gICAgICBjb25zdCBwcmVmaXhMZW4gPSBzbi5sZW5ndGggLSBzLmxlbmd0aFxuICAgICAgb3V0LnB1c2goeyBzbiwgcHJlZml4TGVuIH0pXG4gICAgfVxuICB9XG4gIC8vIElmIG1hdGNoZWQgU05zIGhhdmUgdGhlIHNhbWUgbGVuZ3RoIChhbGwgMTcgY2hhcnMpLCBwcmVmaXhMZW4gaXMgZXF1YWw7IGJ1dCBpbiBjYXNlIHRoZVxuICAvLyB3aGl0ZWxpc3QgY29udGFpbnMgc2hvcnRlciBTTnMgdGhhdCBhbHNvIG1hdGNoLCBzb3J0IGJ5IHByZWZpeExlbiBkZXNjZW5kaW5nIHNvIHRoZVxuICAvLyBtb3N0IGxpa2VseSBvbmVzIGNvbWUgZmlyc3RcbiAgb3V0LnNvcnQoKGEsIGIpID0+IGIucHJlZml4TGVuIC0gYS5wcmVmaXhMZW4pXG4gIHJldHVybiBvdXQubWFwKG8gPT4gby5zbilcbn1cblxuLyoqXG4gKiDimIUgNi1kaWdpdCBkZWdyYWRlZCBtYXRjaGluZyAoT0NSLWZhaWx1cmUgZmFsbGJhY2spXG4gKlxuICogVGFrZSB0aGUgU04ncyBsYXN0IDcgZGlnaXRzLCBzcGxpdCB0aGVtIGludG8gdGhlIGZpcnN0IDYgLyBsYXN0IDYsIHRoZW4gZW5kc1dpdGgtbWF0Y2hcbiAqIGFnYWluc3QgdGhlIHdoaXRlbGlzdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzbiBhbnkgbGVuZ3RoICg+PSA2LWRpZ2l0IHN1ZmZpeClcbiAqIEByZXR1cm5zIHtBcnJheTx7c24sIHZpYSwgZnJhZ21lbnQsIG1hdGNoZWR9Pn1cbiAqICAgLSB2aWE6ICdzNycgKGV4YWN0IGhpdCBvbiBsYXN0IDcpIC8gJ2Zyb250NicgKGhpdCBvbiBmaXJzdCA2IG9mIHRoZSBsYXN0IDcpIC8gJ2JhY2s2JyAoaGl0IG9uIGxhc3QgNiBvZiB0aGUgbGFzdCA3KVxuICogICAtIGZyYWdtZW50OiB0aGUgbWF0Y2hlZCBzdWJzdHJpbmdcbiAqICAgLSBzbjogdGhlIG1hdGNoZWQgZnVsbCB3aGl0ZWxpc3QgU05cbiAqICAgLSByYW5rOiBzbWFsbGVyID0gbW9yZSBwcmVjaXNlICgwPXM3LCAxPWZyb250NiwgMj1iYWNrNilcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRTbkJ5UzZGcmFnbWVudChzbikge1xuICBidWlsZFNuSW5kZXgoKVxuICBjb25zdCBzID0gU3RyaW5nKHNuIHx8ICcnKS50cmltKCkudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpXG4gIGlmICghX2xpc3QgfHwgIV9saXN0Lmxlbmd0aCB8fCBzLmxlbmd0aCA8IDYpIHJldHVybiBbXVxuXG4gIC8vIFRha2UgdGhlIGxhc3QgNyBkaWdpdHNcbiAgY29uc3QgczcgPSBzLnNsaWNlKC03KVxuICAvLyBGaXJzdCA2IG9mIHRoZSBsYXN0IDcgZGlnaXRzIChzN1swLi41XSlcbiAgY29uc3QgZnJvbnQ2ID0gczcuc2xpY2UoMCwgNilcbiAgLy8gTGFzdCA2IG9mIHRoZSBsYXN0IDcgZGlnaXRzIChzN1sxLi42XSlcbiAgY29uc3QgYmFjazYgPSBzNy5zbGljZSgxLCA3KVxuXG4gIGNvbnN0IG91dCA9IFtdXG4gIGZvciAoY29uc3QgZnVsbCBvZiBfbGlzdCkge1xuICAgIGlmIChmdWxsLmVuZHNXaXRoKHM3KSkge1xuICAgICAgb3V0LnB1c2goeyBzbjogZnVsbCwgdmlhOiAnczcnLCBmcmFnbWVudDogczcsIHJhbms6IDAgfSlcbiAgICB9IGVsc2UgaWYgKGZ1bGwuZW5kc1dpdGgoZnJvbnQ2KSkge1xuICAgICAgb3V0LnB1c2goeyBzbjogZnVsbCwgdmlhOiAnZnJvbnQ2JywgZnJhZ21lbnQ6IGZyb250NiwgcmFuazogMSB9KVxuICAgIH0gZWxzZSBpZiAoZnVsbC5lbmRzV2l0aChiYWNrNikpIHtcbiAgICAgIG91dC5wdXNoKHsgc246IGZ1bGwsIHZpYTogJ2JhY2s2JywgZnJhZ21lbnQ6IGJhY2s2LCByYW5rOiAyIH0pXG4gICAgfVxuICB9XG4gIC8vIFNvcnQ6IHM3IGZpcnN0ID4gZnJvbnQ2ID4gYmFjazZcbiAgb3V0LnNvcnQoKGEsIGIpID0+IGEucmFuayAtIGIucmFuaylcbiAgcmV0dXJuIG91dFxufVxuXG4vKipcbiAqIOKYhSBPQ1ItdG9sZXJhbnQgbWF0Y2hpbmcgKHBsYWludGV4dCBTZXQsIHJlcGxhY2luZyB0aGUgaGFzaCBzY2hlbWUpXG4gKi9cbmNvbnN0IENPTkZVU0FCTEVfUEFJUlMgPSBbXG4gIFsnMCcsICdPJ10sIFsnTycsICcwJ10sXG4gIFsnMScsICdJJ10sIFsnSScsICcxJ10sIFsnMScsICdMJ10sIFsnTCcsICcxJ10sXG4gIFsnOCcsICdCJ10sIFsnQicsICc4J10sXG4gIFsnNScsICdTJ10sIFsnUycsICc1J10sXG4gIFsnMicsICdaJ10sIFsnWicsICcyJ10sXG4gIFsnNicsICdHJ10sIFsnRycsICc2J10sXG4gIFsnOScsICdRJ10sIFsnUScsICc5J10sXG4gIFsnNCcsICdBJ10sIFsnQScsICc0J10sXG4gIFsnVScsICdWJ10sIFsnVicsICdVJ10sXG4gIFsnNicsICc4J10sIFsnOCcsICc2J10sXG4gIFsnMCcsICc2J10sIFsnNicsICcwJ10sXG4gIFsnMScsICc3J10sIFsnNycsICcxJ10sXG4gIFsnQycsICdHJ10sIFsnRycsICdDJ10sXG4gIFsnTicsICdNJ10sIFsnTScsICdOJ10sXG4gIFsnRCcsICdPJ10sIFsnTycsICdEJ10sXG4gIFsnSCcsICdOJ10sIFsnTicsICdIJ10sXG4gIFsnSScsICdUJ10sIFsnVCcsICdJJ10sXG4gIFsnRicsICdQJ10sIFsnUCcsICdGJ10sXG4gIFsnUicsICdCJ10sIFsnQicsICdSJ10sXG5dXG5cbmZ1bmN0aW9uIGdlblZhcmlhbnRzKHMsIG1heERlcHRoID0gMikge1xuICBjb25zdCB2YXJpYW50cyA9IG5ldyBTZXQoW3NdKVxuICBsZXQgZnJvbnRpZXIgPSBbc11cbiAgZm9yIChsZXQgZCA9IDA7IGQgPCBtYXhEZXB0aDsgZCsrKSB7XG4gICAgY29uc3QgbmV4dCA9IFtdXG4gICAgZm9yIChjb25zdCB2IG9mIGZyb250aWVyKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChjb25zdCBbYSwgYl0gb2YgQ09ORlVTQUJMRV9QQUlSUykge1xuICAgICAgICAgIGlmICh2W2ldID09PSBhKSB7XG4gICAgICAgICAgICBjb25zdCBudiA9IHYuc2xpY2UoMCwgaSkgKyBiICsgdi5zbGljZShpICsgMSlcbiAgICAgICAgICAgIGlmICghdmFyaWFudHMuaGFzKG52KSkge1xuICAgICAgICAgICAgICB2YXJpYW50cy5hZGQobnYpXG4gICAgICAgICAgICAgIG5leHQucHVzaChudilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZnJvbnRpZXIgPSBuZXh0XG4gIH1cbiAgcmV0dXJuIHZhcmlhbnRzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFNuV2l0aE9jclRvbGVyYW5jZShzbikge1xuICBidWlsZFNuSW5kZXgoKVxuICBjb25zdCBvcmlnaW5hbCA9IFN0cmluZyhzbiB8fCAnJykudHJpbSgpLnRvVXBwZXJDYXNlKClcbiAgaWYgKCFvcmlnaW5hbCkgcmV0dXJuIHsgbWF0Y2hlZDogZmFsc2UsIG9yaWdpbmFsLCByZWFzb246ICdlbXB0eScgfVxuICBpZiAoIV9zZXQpIHJldHVybiB7IG1hdGNoZWQ6IGZhbHNlLCBvcmlnaW5hbCwgcmVhc29uOiAnbm9fbGlzdCcgfVxuXG4gIC8vIDEpIEV4YWN0XG4gIGlmIChfc2V0LmhhcyhvcmlnaW5hbCkpIHtcbiAgICByZXR1cm4geyBtYXRjaGVkOiB0cnVlLCB0eXBlOiAnZXhhY3QnLCBzbjogb3JpZ2luYWwsIG9yaWdpbmFsIH1cbiAgfVxuXG4gIC8vIDIpIENoYXJhY3RlciB2YXJpYW50cyAoZGVwdGggMilcbiAgZm9yIChjb25zdCB2IG9mIGdlblZhcmlhbnRzKG9yaWdpbmFsLCAyKSkge1xuICAgIGlmIChfc2V0Lmhhcyh2KSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWF0Y2hlZDogdHJ1ZSwgdHlwZTogJ3ZhcmlhbnQnLCBzbjogdiwgb3JpZ2luYWwsXG4gICAgICAgIGRpZmY6IGRpZmZDaGFycyhvcmlnaW5hbCwgdiksIHJlYXNvbjogJ09DUiBjb25mdXNhYmxlLWNoYXJhY3RlciB2YXJpYW50J1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IG1hdGNoZWQ6IGZhbHNlLCBvcmlnaW5hbCwgcmVhc29uOiAnbm90X2luX2xpc3QnIH1cbn1cblxuZnVuY3Rpb24gZGlmZkNoYXJzKGEsIGIpIHtcbiAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGAke2EubGVuZ3RofSB2cyAke2IubGVuZ3RofSBjaGFyc2BcbiAgY29uc3QgZGlmZnMgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkgZGlmZnMucHVzaChgcG9zJHtpfToke2FbaV194oaSJHtiW2ldfWApXG4gICAgaWYgKGRpZmZzLmxlbmd0aCA+PSAzKSBicmVha1xuICB9XG4gIHJldHVybiBkaWZmcy5qb2luKCcsICcpIHx8ICdpZGVudGljYWwnXG59XG5cbi8qKlxuICog4piFIFBvc2l0aW9uLXRpZXJlZCBzdWZmaXggbG9va3VwICh1c2VkIGJ5IHRoZSBzbjcgcGFnZSlcbiAqXG4gKiBUaGUgaW5wdXQgaXMgcmlnaHQtYWxpZ25lZCB3aXRoIHRoZSBTTiB0YWlsICh0aGUgZW50ZXJlZCBjaGFyYWN0ZXJzIGNvcnJlc3BvbmQgdG8gdGhlXG4gKiBMQVNUIHBvc2l0aW9ucyBvZiB0aGUgU04pLiBGb3IgdGhlIDctY2hhciBjYXNlIHRoZSB0aWVycyBhcmUsIHBlciByZXF1aXJlbWVudHM6XG4gKiAgIDEpIGZ1bGwgbWF0Y2g6IGFsbCA3IHBvc2l0aW9ucyBlcXVhbCDihpIgc2hvdyB0aGlzIGxpc3RcbiAqICAgMikgaWYgbm9uZTogICAgU05zIG1hdGNoaW5nIGFueSA2IG9mIHRoZSA3IHBvc2l0aW9ucyAoY29udGlndWl0eSBOT1QgcmVxdWlyZWQpXG4gKiAgIDMpIGlmIG5vbmU6ICAgIFNOcyBtYXRjaGluZyBhbnkgNSBvZiB0aGUgNyBwb3NpdGlvbnMgKGNvbnRpZ3VpdHkgTk9UIHJlcXVpcmVkKVxuICogU2hvcnRlciBpbnB1dHMgdXNlIHRoZSBzYW1lIGxhZGRlciBvbiB0aGVpciBvd24gbGVuZ3RoICg2LWNoYXI6IDbihpI14oaSNDsgNH41LWNoYXI6IGV4YWN0IG9ubHkpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCB1c2VyIGlucHV0IChmdWxsIFNOIG9yIHN1ZmZpeCBib3RoIHdvcmspXG4gKiBAcmV0dXJucyB7QXJyYXk8e3NuLCB2aWEsIHJhbmssIGRpZmZ9Pn1cbiAqICAgdmlhOiAnZXhhY3QnIChhbGwgcG9zaXRpb25zIG1hdGNoKSAvICdwb3M2JyAvICdwb3M1JyAvICdwb3M0JyAoTiBwb3NpdGlvbnMgbWF0Y2gpXG4gKiAgIHJhbms6IDAgPSBmdWxsIG1hdGNoLCAxID0gb25lIHBvc2l0aW9uIG9mZiwgMiA9IHR3byBwb3NpdGlvbnMgb2ZmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kU25CeVN1ZmZpeFRvbGVyYW50KGlucHV0KSB7XG4gIGJ1aWxkU25JbmRleCgpXG4gIGNvbnN0IHMgPSBTdHJpbmcoaW5wdXQgfHwgJycpLnRyaW0oKS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJylcbiAgaWYgKCFfbGlzdCB8fCAhX2xpc3QubGVuZ3RoIHx8IHMubGVuZ3RoIDwgNCkgcmV0dXJuIFtdXG5cbiAgLy8gUmlnaHQtYWxpZ246IHRoZSBwcm9iZSBjb3ZlcnMgdGhlIFNOJ3MgbGFzdCBMIGNoYXJhY3RlcnNcbiAgY29uc3QgTCA9IE1hdGgubWluKHMubGVuZ3RoLCA3KVxuICBjb25zdCBwcm9iZSA9IHMuc2xpY2UoLUwpXG5cbiAgLy8gU2NvcmUgZXZlcnkgU04gb25jZTogbWF0Y2hlZC1wb3NpdGlvbiBjb3VudCArIG1hc2sgKG1hdGNoZWQgY2hhcnMsICdfJyBmb3IgbWlzc2VzKVxuICBjb25zdCBzY29yZWQgPSBbXVxuICBmb3IgKGNvbnN0IGZ1bGwgb2YgX2xpc3QpIHtcbiAgICBjb25zdCB0YWlsID0gZnVsbC5zbGljZSgtTClcbiAgICBsZXQgY250ID0gMFxuICAgIGxldCBtYXNrID0gJydcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEw7IGkrKykge1xuICAgICAgaWYgKHByb2JlW2ldID09PSB0YWlsW2ldKSB7IGNudCsrOyBtYXNrICs9IHByb2JlW2ldIH0gZWxzZSB7IG1hc2sgKz0gJ18nIH1cbiAgICB9XG4gICAgc2NvcmVkLnB1c2goeyBzbjogZnVsbCwgY250LCBtYXNrIH0pXG4gIH1cblxuICAvLyDimIUgVGllciBsYWRkZXI6IGZ1bGwgbWF0Y2gg4oaSIG9uZSBwb3NpdGlvbiBvZmYg4oaSIHR3byBwb3NpdGlvbnMgb2ZmLlxuICAvLyAgIDR+NS1jaGFyIGlucHV0cyBrZWVwIHRoZSBzdHJpY3QgZXhhY3Qtb25seSBiZWhhdmlvci5cbiAgY29uc3QgbWF4RHJvcCA9IEwgPj0gNiA/IDIgOiAwXG4gIGNvbnN0IG91dCA9IFtdXG4gIGZvciAobGV0IGRyb3AgPSAwOyBkcm9wIDw9IG1heERyb3A7IGRyb3ArKykge1xuICAgIGNvbnN0IG5lZWQgPSBMIC0gZHJvcFxuICAgIGZvciAoY29uc3Qgc2Mgb2Ygc2NvcmVkKSB7XG4gICAgICBpZiAoc2MuY250ID09PSBuZWVkKSB7XG4gICAgICAgIG91dC5wdXNoKHtcbiAgICAgICAgICBzbjogc2Muc24sXG4gICAgICAgICAgdmlhOiBkcm9wID09PSAwID8gJ2V4YWN0JyA6ICdwb3MnICsgbmVlZCxcbiAgICAgICAgICByYW5rOiBkcm9wLFxuICAgICAgICAgIGRpZmY6IGRyb3AgPT09IDAgPyAnJyA6IGBtYXRjaGVkICR7c2MubWFza30gKCR7c2MuY250fS8ke0x9IHBvc2l0aW9ucylgXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvdXQubGVuZ3RoID4gMCkgYnJlYWsgIC8vIGZpcnN0IHRpZXIgdGhhdCB5aWVsZHMgcmVzdWx0cyB3aW5zXG4gIH1cblxuICBvdXQuc29ydCgoYSwgYikgPT4gYS5yYW5rIC0gYi5yYW5rKVxuICByZXR1cm4gb3V0XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 19);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),
/* 19 */
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

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

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 18)))

/***/ }),
/* 20 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 21);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 23);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 24);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 25);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 21 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 22);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 22 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 23 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 24 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 22);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 25 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 26 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 27);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 28);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 24);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 29);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 27 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 28 */
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) {
        ;
      }
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 29 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 30 */
/*!******************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/utils/sn-validate.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.SN_MIN_LENGTH = void 0;\nexports.dispatchScan = dispatchScan;\nexports.ensureCameraPermission = ensureCameraPermission;\nexports.shouldUseOcr = shouldUseOcr;\nexports.showCameraDeniedModal = showCameraDeniedModal;\n// utils/sn-validate.js\n// SN input validation + unified scan-result dispatch (shared by home-page scan / result-page \"continue scanning\")\n//\n// Rules: scanned content < 17 chars (or doesn't look like an SN) → show a modal suggesting other methods (image OCR / last-7 lookup)\n//        valid SN → go to the result page and run the three-tier doCheck() matching\n//\n// ★ The home page and result page must share the same logic, so it is centralized here — do not duplicate it in the pages\n\n/** Minimum SN length (below this the content is considered \"not an SN\"; guide users to image OCR or other methods) */\nvar SN_MIN_LENGTH = 17;\n\n/**\n * Determine overall whether the scanned content doesn't look like an SN and other methods should be suggested\n * Trigger conditions (any one):\n *  1. Length < SN_MIN_LENGTH (default 17)\n *  2. Length > 30 (too long to be an SN; probably text)\n *  3. Contains URL markers (http:// https://)\n *  4. Is an order-number format (ORD + digits)\n *  5. Contains spaces/Chinese/special symbols\n *  6. Is not purely uppercase alphanumeric\n *\n * @returns {null|{need:true, reason:string}} null = valid SN\n */\nexports.SN_MIN_LENGTH = SN_MIN_LENGTH;\nfunction shouldUseOcr(sn) {\n  var clean = String(sn || '').trim();\n  if (clean.length === 0) {\n    return {\n      need: true,\n      reason: 'Empty content'\n    };\n  }\n  if (clean.length < SN_MIN_LENGTH) {\n    return {\n      need: true,\n      reason: \"Length under \".concat(SN_MIN_LENGTH, \" chars (got \").concat(clean.length, \")\")\n    };\n  }\n  if (clean.length > 30) {\n    return {\n      need: true,\n      reason: \"Too long (\".concat(clean.length, \" chars, over 30)\")\n    };\n  }\n  // URL marker\n  if (/^https?:\\/\\//i.test(clean)) {\n    return {\n      need: true,\n      reason: 'Is a URL'\n    };\n  }\n  // Order number\n  if (/^ORD\\d+$/i.test(clean)) {\n    return {\n      need: true,\n      reason: 'Is an order number'\n    };\n  }\n  // Contains Chinese/spaces/common special characters\n  if (/[\\s一-龥\\-,;:!?]/.test(clean)) {\n    return {\n      need: true,\n      reason: 'Contains non-SN characters (space/Chinese/punctuation)'\n    };\n  }\n  // Not purely uppercase alphanumeric\n  if (!/^[A-Z0-9]+$/i.test(clean)) {\n    return {\n      need: true,\n      reason: 'Not an alphanumeric combination'\n    };\n  }\n  return null; // valid SN\n}\n\n// ============== Camera permission guard (iOS) ==============\n\n/**\n * ★ On iOS, when camera permission is DENIED, uni.scanCode still opens the scan UI —\n *   it shows a BLACK screen with only a flashlight icon and never fails via callback.\n *   Check the real authorization status up front and bail out with guidance instead.\n * @param {function} [onDenied] called when access is denied/restricted\n * @returns {boolean} true = safe to launch the scanner\n */\nfunction ensureCameraPermission(onDenied) {\n  try {\n    if (typeof plus !== 'undefined' && plus.os && plus.os.name === 'iOS') {\n      var AVCaptureDevice = plus.ios.importClass('AVCaptureDevice');\n      if (AVCaptureDevice) {\n        // 0 = notDetermined, 1 = restricted, 2 = denied, 3 = authorized\n        var status = AVCaptureDevice.authorizationStatusForMediaType_('vide');\n        if (status === 1 || status === 2) {\n          if (onDenied) onDenied();\n          return false;\n        }\n      }\n    }\n  } catch (e) {\n    __f__(\"warn\", '[camera] permission check failed:', e && e.message, \" at utils/sn-validate.js:79\");\n  }\n  return true;\n}\n\n/** Guide the user to system Settings after camera permission was denied */\nfunction showCameraDeniedModal() {\n  uni.showModal({\n    title: 'Camera Permission Needed',\n    content: 'Camera access is denied, so the scanner shows a black screen. Enable it in Settings → Privacy → Camera (or Settings → this App → Camera), then scan again.',\n    confirmText: 'Settings',\n    cancelText: 'Cancel',\n    success: function success(r) {\n      if (r.confirm && typeof plus !== 'undefined') {\n        plus.runtime.openURL('app-settings:');\n      }\n    }\n  });\n}\n\n/**\n * Unified scan-result handling (shared by home-page handleSn and result-page onContinue)\n *\n * @param {string} sn scanned content\n * @param {string} scanType barcode type (CODE128/QR/...)\n * @param {boolean} redirect true = use redirectTo to replace the current page (for continuing scans inside the result page);\n *                           false = use navigateTo (for the home page)\n * @param {function} [onRescan] callback when \"Rescan\" is tapped in the modal (the result page can pass this.onContinue for continuous scanning)\n */\nfunction dispatchScan(sn, scanType, redirect, onRescan) {\n  sn = String(sn || '').trim();\n  if (!sn) {\n    uni.showToast({\n      title: 'No content recognized',\n      icon: 'none'\n    });\n    return;\n  }\n  uni.vibrateShort && uni.vibrateShort({});\n  __f__(\"log\", \"[scan] Got: \\\"\".concat(sn, \"\\\" (\").concat(sn.length, \" chars)\"), \" at utils/sn-validate.js:116\");\n\n  // ★ Doesn't look like an SN (incl. <17 chars) → suggest other methods\n  var needOcr = shouldUseOcr(sn);\n  if (needOcr) {\n    __f__(\"log\", \"[scan] Suggesting another method: \".concat(needOcr.reason), \" at utils/sn-validate.js:121\");\n    uni.showModal({\n      title: 'Image OCR needed',\n      content: \"Scanned \\\"\".concat(sn, \"\\\"\\nReason: \").concat(needOcr.reason, \"\\n\\nTry another method:\\n\\u2022 Image OCR (photo of the SN label)\\n\\u2022 SN last-7 lookup\"),\n      confirmText: 'Image OCR',\n      cancelText: 'Rescan',\n      success: function success(r) {\n        if (r.confirm) {\n          var _url = \"/pages/ocr/ocr?shortText=\".concat(encodeURIComponent(sn), \"&reason=\").concat(encodeURIComponent(needOcr.reason));\n          if (redirect) {\n            uni.redirectTo({\n              url: _url\n            });\n          } else {\n            uni.navigateTo({\n              url: _url\n            });\n          }\n        } else if (onRescan) {\n          onRescan(); // \"Rescan\" relaunches scanning directly\n        }\n      }\n    });\n\n    return;\n  }\n\n  // Normal: go to the result page (doCheck three-tier matching)\n  __f__(\"log\", \"[scan] Valid SN format, navigating to result page\", \" at utils/sn-validate.js:144\");\n  var url = \"/pages/result/result?sn=\".concat(encodeURIComponent(sn), \"&type=\").concat(scanType || '');\n  if (redirect) {\n    uni.redirectTo({\n      url: url\n    });\n  } else {\n    uni.navigateTo({\n      url: url\n    });\n  }\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 1)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvc24tdmFsaWRhdGUuanMiXSwibmFtZXMiOlsiU05fTUlOX0xFTkdUSCIsInNob3VsZFVzZU9jciIsInNuIiwiY2xlYW4iLCJTdHJpbmciLCJ0cmltIiwibGVuZ3RoIiwibmVlZCIsInJlYXNvbiIsInRlc3QiLCJlbnN1cmVDYW1lcmFQZXJtaXNzaW9uIiwib25EZW5pZWQiLCJwbHVzIiwib3MiLCJuYW1lIiwiQVZDYXB0dXJlRGV2aWNlIiwiaW9zIiwiaW1wb3J0Q2xhc3MiLCJzdGF0dXMiLCJhdXRob3JpemF0aW9uU3RhdHVzRm9yTWVkaWFUeXBlXyIsImUiLCJtZXNzYWdlIiwic2hvd0NhbWVyYURlbmllZE1vZGFsIiwidW5pIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiY29uZmlybVRleHQiLCJjYW5jZWxUZXh0Iiwic3VjY2VzcyIsInIiLCJjb25maXJtIiwicnVudGltZSIsIm9wZW5VUkwiLCJkaXNwYXRjaFNjYW4iLCJzY2FuVHlwZSIsInJlZGlyZWN0Iiwib25SZXNjYW4iLCJzaG93VG9hc3QiLCJpY29uIiwidmlicmF0ZVNob3J0IiwibmVlZE9jciIsInVybCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlZGlyZWN0VG8iLCJuYXZpZ2F0ZVRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTyxJQUFNQSxhQUFhLEdBQUcsRUFBRTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFZTyxTQUFTQyxZQUFZLENBQUNDLEVBQUUsRUFBRTtFQUMvQixJQUFNQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0YsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDRyxJQUFJLEVBQUU7RUFFckMsSUFBSUYsS0FBSyxDQUFDRyxNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQ3RCLE9BQU87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LENBQUMsTUFBTSxJQUFJTCxRQUFRLEVBQUU7VUFDbkJBLFFBQVEsRUFBRSxFQUFFO1FBQ2Q7TUFDRjtJQUNGLENBQUMsQ0FBQzs7SUFDRjtFQUNGOztFQUVBO0VBQ0E7RUFDQSxJQUFNSyxHQUFHLHFDQUE4QkMsa0JBQWtCLENBQUN6QyxFQUFFLENBQUMsbUJBQVNpQyxRQUFRLElBQUksRUFBRSxDQUFFO0VBQ3RGLElBQUlDLFFBQVEsRUFBRTtJQUNaYixHQUFHLENBQUNxQixVQUFVLENBQUM7TUFBRUYsR0FBRyxFQUFIQTtJQUFJLENBQUMsQ0FBQztFQUN6QixDQUFDLE1BQU07SUFDTG5CLEdBQUcsQ0FBQ3NCLFVBQVUsQ0FBQztNQUFFSCxHQUFHLEVBQUhBO0lBQUksQ0FBQyxDQUFDO0VBQ3pCO0FBQ0YsQyIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHV0aWxzL3NuLXZhbGlkYXRlLmpzXG4vLyBTTiBpbnB1dCB2YWxpZGF0aW9uICsgdW5pZmllZCBzY2FuLXJlc3VsdCBkaXNwYXRjaCAoc2hhcmVkIGJ5IGhvbWUtcGFnZSBzY2FuIC8gcmVzdWx0LXBhZ2UgXCJjb250aW51ZSBzY2FubmluZ1wiKVxuLy9cbi8vIFJ1bGVzOiBzY2FubmVkIGNvbnRlbnQgPCAxNyBjaGFycyAob3IgZG9lc24ndCBsb29rIGxpa2UgYW4gU04pIOKGkiBzaG93IGEgbW9kYWwgc3VnZ2VzdGluZyBvdGhlciBtZXRob2RzIChpbWFnZSBPQ1IgLyBsYXN0LTcgbG9va3VwKVxuLy8gICAgICAgIHZhbGlkIFNOIOKGkiBnbyB0byB0aGUgcmVzdWx0IHBhZ2UgYW5kIHJ1biB0aGUgdGhyZWUtdGllciBkb0NoZWNrKCkgbWF0Y2hpbmdcbi8vXG4vLyDimIUgVGhlIGhvbWUgcGFnZSBhbmQgcmVzdWx0IHBhZ2UgbXVzdCBzaGFyZSB0aGUgc2FtZSBsb2dpYywgc28gaXQgaXMgY2VudHJhbGl6ZWQgaGVyZSDigJQgZG8gbm90IGR1cGxpY2F0ZSBpdCBpbiB0aGUgcGFnZXNcblxuLyoqIE1pbmltdW0gU04gbGVuZ3RoIChiZWxvdyB0aGlzIHRoZSBjb250ZW50IGlzIGNvbnNpZGVyZWQgXCJub3QgYW4gU05cIjsgZ3VpZGUgdXNlcnMgdG8gaW1hZ2UgT0NSIG9yIG90aGVyIG1ldGhvZHMpICovXG5leHBvcnQgY29uc3QgU05fTUlOX0xFTkdUSCA9IDE3XG5cbi8qKlxuICogRGV0ZXJtaW5lIG92ZXJhbGwgd2hldGhlciB0aGUgc2Nhbm5lZCBjb250ZW50IGRvZXNuJ3QgbG9vayBsaWtlIGFuIFNOIGFuZCBvdGhlciBtZXRob2RzIHNob3VsZCBiZSBzdWdnZXN0ZWRcbiAqIFRyaWdnZXIgY29uZGl0aW9ucyAoYW55IG9uZSk6XG4gKiAgMS4gTGVuZ3RoIDwgU05fTUlOX0xFTkdUSCAoZGVmYXVsdCAxNylcbiAqICAyLiBMZW5ndGggPiAzMCAodG9vIGxvbmcgdG8gYmUgYW4gU047IHByb2JhYmx5IHRleHQpXG4gKiAgMy4gQ29udGFpbnMgVVJMIG1hcmtlcnMgKGh0dHA6Ly8gaHR0cHM6Ly8pXG4gKiAgNC4gSXMgYW4gb3JkZXItbnVtYmVyIGZvcm1hdCAoT1JEICsgZGlnaXRzKVxuICogIDUuIENvbnRhaW5zIHNwYWNlcy9DaGluZXNlL3NwZWNpYWwgc3ltYm9sc1xuICogIDYuIElzIG5vdCBwdXJlbHkgdXBwZXJjYXNlIGFscGhhbnVtZXJpY1xuICpcbiAqIEByZXR1cm5zIHtudWxsfHtuZWVkOnRydWUsIHJlYXNvbjpzdHJpbmd9fSBudWxsID0gdmFsaWQgU05cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFVzZU9jcihzbikge1xuICBjb25zdCBjbGVhbiA9IFN0cmluZyhzbiB8fCAnJykudHJpbSgpXG5cbiAgaWYgKGNsZWFuLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7IG5lZWQ6IHRydWUsIHJlYXNvbjogJ0VtcHR5IGNvbnRlbnQnIH1cbiAgfVxuICBpZiAoY2xlYW4ubGVuZ3RoIDwgU05fTUlOX0xFTkdUSCkge1xuICAgIHJldHVybiB7IG5lZWQ6IHRydWUsIHJlYXNvbjogYExlbmd0aCB1bmRlciAke1NOX01JTl9MRU5HVEh9IGNoYXJzIChnb3QgJHtjbGVhbi5sZW5ndGh9KWAgfVxuICB9XG4gIGlmIChjbGVhbi5sZW5ndGggPiAzMCkge1xuICAgIHJldHVybiB7IG5lZWQ6IHRydWUsIHJlYXNvbjogYFRvbyBsb25nICgke2NsZWFuLmxlbmd0aH0gY2hhcnMsIG92ZXIgMzApYCB9XG4gIH1cbiAgLy8gVVJMIG1hcmtlclxuICBpZiAoL15odHRwcz86XFwvXFwvL2kudGVzdChjbGVhbikpIHtcbiAgICByZXR1cm4geyBuZWVkOiB0cnVlLCByZWFzb246ICdJcyBhIFVSTCcgfVxuICB9XG4gIC8vIE9yZGVyIG51bWJlclxuICBpZiAoL15PUkRcXGQrJC9pLnRlc3QoY2xlYW4pKSB7XG4gICAgcmV0dXJuIHsgbmVlZDogdHJ1ZSwgcmVhc29uOiAnSXMgYW4gb3JkZXIgbnVtYmVyJyB9XG4gIH1cbiAgLy8gQ29udGFpbnMgQ2hpbmVzZS9zcGFjZXMvY29tbW9uIHNwZWNpYWwgY2hhcmFjdGVyc1xuICBpZiAoL1tcXHPkuIAt6b6lXFwtLDs6IT9dLy50ZXN0KGNsZWFuKSkge1xuICAgIHJldHVybiB7IG5lZWQ6IHRydWUsIHJlYXNvbjogJ0NvbnRhaW5zIG5vbi1TTiBjaGFyYWN0ZXJzIChzcGFjZS9DaGluZXNlL3B1bmN0dWF0aW9uKScgfVxuICB9XG4gIC8vIE5vdCBwdXJlbHkgdXBwZXJjYXNlIGFscGhhbnVtZXJpY1xuICBpZiAoIS9eW0EtWjAtOV0rJC9pLnRlc3QoY2xlYW4pKSB7XG4gICAgcmV0dXJuIHsgbmVlZDogdHJ1ZSwgcmVhc29uOiAnTm90IGFuIGFscGhhbnVtZXJpYyBjb21iaW5hdGlvbicgfVxuICB9XG4gIHJldHVybiBudWxsICAvLyB2YWxpZCBTTlxufVxuXG4vLyA9PT09PT09PT09PT09PSBDYW1lcmEgcGVybWlzc2lvbiBndWFyZCAoaU9TKSA9PT09PT09PT09PT09PVxuXG4vKipcbiAqIOKYhSBPbiBpT1MsIHdoZW4gY2FtZXJhIHBlcm1pc3Npb24gaXMgREVOSUVELCB1bmkuc2NhbkNvZGUgc3RpbGwgb3BlbnMgdGhlIHNjYW4gVUkg4oCUXG4gKiAgIGl0IHNob3dzIGEgQkxBQ0sgc2NyZWVuIHdpdGggb25seSBhIGZsYXNobGlnaHQgaWNvbiBhbmQgbmV2ZXIgZmFpbHMgdmlhIGNhbGxiYWNrLlxuICogICBDaGVjayB0aGUgcmVhbCBhdXRob3JpemF0aW9uIHN0YXR1cyB1cCBmcm9udCBhbmQgYmFpbCBvdXQgd2l0aCBndWlkYW5jZSBpbnN0ZWFkLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29uRGVuaWVkXSBjYWxsZWQgd2hlbiBhY2Nlc3MgaXMgZGVuaWVkL3Jlc3RyaWN0ZWRcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlID0gc2FmZSB0byBsYXVuY2ggdGhlIHNjYW5uZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZUNhbWVyYVBlcm1pc3Npb24ob25EZW5pZWQpIHtcblxuXHR0cnkge1xuXHRcdGlmICh0eXBlb2YgcGx1cyAhPT0gJ3VuZGVmaW5lZCcgJiYgcGx1cy5vcyAmJiBwbHVzLm9zLm5hbWUgPT09ICdpT1MnKSB7XG5cdFx0XHRjb25zdCBBVkNhcHR1cmVEZXZpY2UgPSBwbHVzLmlvcy5pbXBvcnRDbGFzcygnQVZDYXB0dXJlRGV2aWNlJylcblx0XHRcdGlmIChBVkNhcHR1cmVEZXZpY2UpIHtcblx0XHRcdFx0Ly8gMCA9IG5vdERldGVybWluZWQsIDEgPSByZXN0cmljdGVkLCAyID0gZGVuaWVkLCAzID0gYXV0aG9yaXplZFxuXHRcdFx0XHRjb25zdCBzdGF0dXMgPSBBVkNhcHR1cmVEZXZpY2UuYXV0aG9yaXphdGlvblN0YXR1c0Zvck1lZGlhVHlwZV8oJ3ZpZGUnKVxuXHRcdFx0XHRpZiAoc3RhdHVzID09PSAxIHx8IHN0YXR1cyA9PT0gMikge1xuXHRcdFx0XHRcdGlmIChvbkRlbmllZCkgb25EZW5pZWQoKVxuXHRcdFx0XHRcdHJldHVybiBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS53YXJuKCdbY2FtZXJhXSBwZXJtaXNzaW9uIGNoZWNrIGZhaWxlZDonLCBlICYmIGUubWVzc2FnZSlcblx0fVxuXG5cdHJldHVybiB0cnVlXG59XG5cbi8qKiBHdWlkZSB0aGUgdXNlciB0byBzeXN0ZW0gU2V0dGluZ3MgYWZ0ZXIgY2FtZXJhIHBlcm1pc3Npb24gd2FzIGRlbmllZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dDYW1lcmFEZW5pZWRNb2RhbCgpIHtcblx0dW5pLnNob3dNb2RhbCh7XG5cdFx0dGl0bGU6ICdDYW1lcmEgUGVybWlzc2lvbiBOZWVkZWQnLFxuXHRcdGNvbnRlbnQ6ICdDYW1lcmEgYWNjZXNzIGlzIGRlbmllZCwgc28gdGhlIHNjYW5uZXIgc2hvd3MgYSBibGFjayBzY3JlZW4uIEVuYWJsZSBpdCBpbiBTZXR0aW5ncyDihpIgUHJpdmFjeSDihpIgQ2FtZXJhIChvciBTZXR0aW5ncyDihpIgdGhpcyBBcHAg4oaSIENhbWVyYSksIHRoZW4gc2NhbiBhZ2Fpbi4nLFxuXHRcdGNvbmZpcm1UZXh0OiAnU2V0dGluZ3MnLFxuXHRcdGNhbmNlbFRleHQ6ICdDYW5jZWwnLFxuXHRcdHN1Y2Nlc3M6IChyKSA9PiB7XG5cdFx0XHRpZiAoci5jb25maXJtICYmIHR5cGVvZiBwbHVzICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRwbHVzLnJ1bnRpbWUub3BlblVSTCgnYXBwLXNldHRpbmdzOicpXG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufVxuXG4vKipcbiAqIFVuaWZpZWQgc2Nhbi1yZXN1bHQgaGFuZGxpbmcgKHNoYXJlZCBieSBob21lLXBhZ2UgaGFuZGxlU24gYW5kIHJlc3VsdC1wYWdlIG9uQ29udGludWUpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNuIHNjYW5uZWQgY29udGVudFxuICogQHBhcmFtIHtzdHJpbmd9IHNjYW5UeXBlIGJhcmNvZGUgdHlwZSAoQ09ERTEyOC9RUi8uLi4pXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHJlZGlyZWN0IHRydWUgPSB1c2UgcmVkaXJlY3RUbyB0byByZXBsYWNlIHRoZSBjdXJyZW50IHBhZ2UgKGZvciBjb250aW51aW5nIHNjYW5zIGluc2lkZSB0aGUgcmVzdWx0IHBhZ2UpO1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSA9IHVzZSBuYXZpZ2F0ZVRvIChmb3IgdGhlIGhvbWUgcGFnZSlcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvblJlc2Nhbl0gY2FsbGJhY2sgd2hlbiBcIlJlc2NhblwiIGlzIHRhcHBlZCBpbiB0aGUgbW9kYWwgKHRoZSByZXN1bHQgcGFnZSBjYW4gcGFzcyB0aGlzLm9uQ29udGludWUgZm9yIGNvbnRpbnVvdXMgc2Nhbm5pbmcpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaFNjYW4oc24sIHNjYW5UeXBlLCByZWRpcmVjdCwgb25SZXNjYW4pIHtcbiAgc24gPSBTdHJpbmcoc24gfHwgJycpLnRyaW0oKVxuICBpZiAoIXNuKSB7XG4gICAgdW5pLnNob3dUb2FzdCh7IHRpdGxlOiAnTm8gY29udGVudCByZWNvZ25pemVkJywgaWNvbjogJ25vbmUnIH0pXG4gICAgcmV0dXJuXG4gIH1cbiAgdW5pLnZpYnJhdGVTaG9ydCAmJiB1bmkudmlicmF0ZVNob3J0KHt9KVxuICBjb25zb2xlLmxvZyhgW3NjYW5dIEdvdDogXCIke3NufVwiICgke3NuLmxlbmd0aH0gY2hhcnMpYClcblxuICAvLyDimIUgRG9lc24ndCBsb29rIGxpa2UgYW4gU04gKGluY2wuIDwxNyBjaGFycykg4oaSIHN1Z2dlc3Qgb3RoZXIgbWV0aG9kc1xuICBjb25zdCBuZWVkT2NyID0gc2hvdWxkVXNlT2NyKHNuKVxuICBpZiAobmVlZE9jcikge1xuICAgIGNvbnNvbGUubG9nKGBbc2Nhbl0gU3VnZ2VzdGluZyBhbm90aGVyIG1ldGhvZDogJHtuZWVkT2NyLnJlYXNvbn1gKVxuICAgIHVuaS5zaG93TW9kYWwoe1xuICAgICAgdGl0bGU6ICdJbWFnZSBPQ1IgbmVlZGVkJyxcbiAgICAgIGNvbnRlbnQ6IGBTY2FubmVkIFwiJHtzbn1cIlxcblJlYXNvbjogJHtuZWVkT2NyLnJlYXNvbn1cXG5cXG5UcnkgYW5vdGhlciBtZXRob2Q6XFxu4oCiIEltYWdlIE9DUiAocGhvdG8gb2YgdGhlIFNOIGxhYmVsKVxcbuKAoiBTTiBsYXN0LTcgbG9va3VwYCxcbiAgICAgIGNvbmZpcm1UZXh0OiAnSW1hZ2UgT0NSJyxcbiAgICAgIGNhbmNlbFRleHQ6ICdSZXNjYW4nLFxuICAgICAgc3VjY2VzczogKHIpID0+IHtcbiAgICAgICAgaWYgKHIuY29uZmlybSkge1xuICAgICAgICAgIGNvbnN0IHVybCA9IGAvcGFnZXMvb2NyL29jcj9zaG9ydFRleHQ9JHtlbmNvZGVVUklDb21wb25lbnQoc24pfSZyZWFzb249JHtlbmNvZGVVUklDb21wb25lbnQobmVlZE9jci5yZWFzb24pfWBcbiAgICAgICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgICAgIHVuaS5yZWRpcmVjdFRvKHsgdXJsIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVuaS5uYXZpZ2F0ZVRvKHsgdXJsIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG9uUmVzY2FuKSB7XG4gICAgICAgICAgb25SZXNjYW4oKSAgLy8gXCJSZXNjYW5cIiByZWxhdW5jaGVzIHNjYW5uaW5nIGRpcmVjdGx5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gTm9ybWFsOiBnbyB0byB0aGUgcmVzdWx0IHBhZ2UgKGRvQ2hlY2sgdGhyZWUtdGllciBtYXRjaGluZylcbiAgY29uc29sZS5sb2coYFtzY2FuXSBWYWxpZCBTTiBmb3JtYXQsIG5hdmlnYXRpbmcgdG8gcmVzdWx0IHBhZ2VgKVxuICBjb25zdCB1cmwgPSBgL3BhZ2VzL3Jlc3VsdC9yZXN1bHQ/c249JHtlbmNvZGVVUklDb21wb25lbnQoc24pfSZ0eXBlPSR7c2NhblR5cGUgfHwgJyd9YFxuICBpZiAocmVkaXJlY3QpIHtcbiAgICB1bmkucmVkaXJlY3RUbyh7IHVybCB9KVxuICB9IGVsc2Uge1xuICAgIHVuaS5uYXZpZ2F0ZVRvKHsgdXJsIH0pXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!*******************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/api/sn.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.fetchSnList = fetchSnList;\nexports.getTransitionScanTotal = getTransitionScanTotal;\nexports.localCheckSn = localCheckSn;\nexports.localFindSnBySuffix = localFindSnBySuffix;\nexports.querySn = querySn;\nexports.recognizeSnFromImage = recognizeSnFromImage;\nexports.reportScan = reportScan;\nexports.reportTransitionScan = reportTransitionScan;\nexports.uploadImage = uploadImage;\nvar _auth = __webpack_require__(/*! ../utils/auth.js */ 16);\n// api/sn.js\n//\n// ★ This project has switched to a \"fully local whitelist\" mode and no longer calls any backend API\n// The legacy endpoints (fetchSnList / querySn / reportScan) are deprecated and kept only for compatibility\n// Whitelist data source: static/sn-list.txt (see utils/sn-list-loader.js)\n//\n// If you really need to pull data from a backend (e.g. to periodically update the whitelist), implement new functions here,\n// but clearly tell users whether the current ~5000 entries have been deprecated, to avoid misjudgments\n\n// ===== Transition scan record reporting (sn-check App → maintenance backend) =====\n// POST /api/transition-scan-records, authenticated by the fixed X-API-Key header\n// (accepted directly by the backend's auth middleware — no JWT needed)\nvar TRANSITION_API = {\n  baseURL: 'https://repair.datastring.cc',\n  apiKey: 'mk-2026-7f3a9b1e8c5d2f0a4e6b8c1d3f5a7e9b',\n  groupID: 1,\n  siteName: 'DSO矿场'\n};\n\n/**\n * Report a scan/confirm to the maintenance backend (fire-and-forget friendly, never throws)\n * @param {string} sn the matched canonical SN (the real serial number)\n * @param {boolean} pulled whether removal was confirmed\n * @returns {Promise<{ok: boolean, message: string}>}\n */\nfunction reportTransitionScan(sn) {\n  var pulled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  return new Promise(function (resolve) {\n    uni.request({\n      url: TRANSITION_API.baseURL + '/api/transition-scan-records',\n      method: 'POST',\n      timeout: 10000,\n      header: {\n        'Content-Type': 'application/json',\n        'X-API-Key': TRANSITION_API.apiKey\n      },\n      data: {\n        serial_number: sn,\n        group_id: TRANSITION_API.groupID,\n        pulled: pulled,\n        site_name: TRANSITION_API.siteName\n      },\n      success: function success(res) {\n        var ok = res.statusCode === 200 && res.data && res.data.code === 0;\n        var message = 'HTTP ' + res.statusCode;\n        if (!ok && res.data) {\n          // gin auth errors look like {\"error\":\"invalid API key\"}; business errors {code,msg}\n          var d = res.data;\n          message += ': ' + (d.error || d.msg || d.message || JSON.stringify(d).slice(0, 120));\n        }\n        resolve({\n          ok: ok,\n          message: message\n        });\n      },\n      fail: function fail(err) {\n        resolve({\n          ok: false,\n          message: err && err.errMsg || 'network error'\n        });\n      }\n    });\n  });\n}\n\n/**\n * ★ New API: fully local SN check, no network requests\n * @param {string} sn SN obtained from scanning/OCR\n * @returns {{matched: boolean, sn?: string, original: string, type?: string, reason?: string}}\n */\nfunction localCheckSn(sn) {\n  return (0, _auth.matchSnWithOcrTolerance)(sn);\n}\n\n/**\n * ★ New API: fully local last-N-digit SN matching\n * @param {string} suffix last-N-digit string\n * @returns {string[]} list of fully matched SNs\n */\nfunction localFindSnBySuffix(suffix) {\n  return (0, _auth.findSnBySuffix)(suffix);\n}\n\n/**\n * Fetch the confirmed-removal count from the maintenance backend\n * GET /api/transition-scan-records/summary?site_name=... → data.total\n * @returns {Promise<{ok: boolean, total: number, message: string}>} total = -1 when failed\n */\nfunction getTransitionScanTotal() {\n  return new Promise(function (resolve) {\n    uni.request({\n      url: TRANSITION_API.baseURL + '/api/transition-scan-records/summary',\n      method: 'GET',\n      timeout: 8000,\n      header: {\n        'X-API-Key': TRANSITION_API.apiKey\n      },\n      data: {\n        site_name: TRANSITION_API.siteName\n      },\n      // uni encodes query params automatically\n      success: function success(res) {\n        var ok = res.statusCode === 200 && res.data && res.data.code === 0;\n        var total = ok && res.data.data && typeof res.data.data.total === 'number' ? res.data.data.total : -1;\n        resolve({\n          ok: ok,\n          total: total,\n          message: ok ? 'ok' : 'HTTP ' + res.statusCode\n        });\n      },\n      fail: function fail(err) {\n        resolve({\n          ok: false,\n          total: -1,\n          message: err && err.errMsg || 'network error'\n        });\n      }\n    });\n  });\n}\n\n// ===== Below are deprecated APIs, kept only for compatibility with old code (no network requests) =====\n\n/** @deprecated Deprecated; the whitelist is now read fully locally */\nfunction fetchSnList() {\n  __f__(\"warn\", '[api] fetchSnList is deprecated; the whitelist is now read offline from static/sn-list.txt', \" at api/sn.js:109\");\n  return Promise.resolve([]);\n}\n\n/** @deprecated Deprecated; backend detail lookup has been shut down */\nfunction querySn(sn) {\n  __f__(\"warn\", '[api] querySn is deprecated; use whitelist matching directly if you need details', \" at api/sn.js:115\");\n  var r = (0, _auth.matchSnWithOcrTolerance)(sn);\n  return Promise.resolve({\n    statusCode: 200,\n    data: {\n      code: 0,\n      data: {\n        list: r.matched ? [{\n          sn: r.sn,\n          status_text: 'Whitelist hit'\n        }] : []\n      }\n    }\n  });\n}\n\n/** @deprecated Deprecated */\nfunction reportScan() {\n  return Promise.resolve();\n}\n\n/** @deprecated Deprecated */\nfunction uploadImage() {\n  __f__(\"warn\", '[api] uploadImage is deprecated; for OCR use the pages/ocr/ocr page', \" at api/sn.js:130\");\n  return Promise.reject(new Error('Switched to fully local mode; backend OCR has been shut down'));\n}\n\n/** @deprecated Deprecated */\nfunction recognizeSnFromImage() {\n  __f__(\"warn\", '[api] recognizeSnFromImage is deprecated', \" at api/sn.js:136\");\n  return Promise.reject(new Error('Switched to fully local mode; backend OCR has been shut down'));\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 1)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL3NuLmpzIl0sIm5hbWVzIjpbIlRSQU5TSVRJT05fQVBJIiwiYmFzZVVSTCIsImFwaUtleSIsImdyb3VwSUQiLCJzaXRlTmFtZSIsInJlcG9ydFRyYW5zaXRpb25TY2FuIiwic24iLCJwdWxsZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInVuaSIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJ0aW1lb3V0IiwiaGVhZGVyIiwiZGF0YSIsInNlcmlhbF9udW1iZXIiLCJncm91cF9pZCIsInNpdGVfbmFtZSIsInN1Y2Nlc3MiLCJyZXMiLCJvayIsInN0YXR1c0NvZGUiLCJjb2RlIiwibWVzc2FnZSIsImQiLCJlcnJvciIsIm1zZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzbGljZSIsImZhaWwiLCJlcnIiLCJlcnJNc2ciLCJsb2NhbENoZWNrU24iLCJtYXRjaFNuV2l0aE9jclRvbGVyYW5jZSIsImxvY2FsRmluZFNuQnlTdWZmaXgiLCJzdWZmaXgiLCJmaW5kU25CeVN1ZmZpeCIsImdldFRyYW5zaXRpb25TY2FuVG90YWwiLCJ0b3RhbCIsImZldGNoU25MaXN0IiwicXVlcnlTbiIsInIiLCJsaXN0IiwibWF0Y2hlZCIsInN0YXR1c190ZXh0IiwicmVwb3J0U2NhbiIsInVwbG9hZEltYWdlIiwicmVqZWN0IiwiRXJyb3IiLCJyZWNvZ25pemVTbkZyb21JbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFTQTtBQVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsY0FBYyxHQUFHO0VBQ3JCQyxPQUFPLEVBQUUsOEJBQThCO0VBQ3ZDQyxNQUFNLEVBQUUsMENBQTBDO0VBQ2xEQyxPQUFPLEVBQUUsQ0FBQztFQUNWQyxRQUFRLEVBQUU7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNDLG9CQUFvQixDQUFDQyxFQUFFLEVB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LEdBQUcsQ0FBQztVQUFFeEMsRUFBRSxFQUFFc0MsQ0FBQyxDQUFDdEMsRUFBRTtVQUFFeUMsV0FBVyxFQUFFO1FBQWdCLENBQUMsQ0FBQyxHQUFHO01BQUc7SUFBRTtFQUNqRyxDQUFDLENBQUM7QUFDSjs7QUFFQTtBQUNPLFNBQVNDLFVBQVUsR0FBRztFQUMzQixPQUFPeEMsT0FBTyxDQUFDQyxPQUFPLEVBQUU7QUFDMUI7O0FBRUE7QUFDTyxTQUFTd0MsV0FBVyxHQUFHO0VBQzVCLGNBQWEscUVBQXFFO0VBQ2xGLE9BQU96QyxPQUFPLENBQUMwQyxNQUFNLENBQUMsSUFBSUMsS0FBSyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7QUFDbEc7O0FBRUE7QUFDTyxTQUFTQyxvQkFBb0IsR0FBRztFQUNyQyxjQUFhLDBDQUEwQztFQUN2RCxPQUFPNUMsT0FBTyxDQUFDMEMsTUFBTSxDQUFDLElBQUlDLEtBQUssQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO0FBQ2xHLEMiLCJmaWxlIjoiMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcGkvc24uanNcbi8vXG4vLyDimIUgVGhpcyBwcm9qZWN0IGhhcyBzd2l0Y2hlZCB0byBhIFwiZnVsbHkgbG9jYWwgd2hpdGVsaXN0XCIgbW9kZSBhbmQgbm8gbG9uZ2VyIGNhbGxzIGFueSBiYWNrZW5kIEFQSVxuLy8gVGhlIGxlZ2FjeSBlbmRwb2ludHMgKGZldGNoU25MaXN0IC8gcXVlcnlTbiAvIHJlcG9ydFNjYW4pIGFyZSBkZXByZWNhdGVkIGFuZCBrZXB0IG9ubHkgZm9yIGNvbXBhdGliaWxpdHlcbi8vIFdoaXRlbGlzdCBkYXRhIHNvdXJjZTogc3RhdGljL3NuLWxpc3QudHh0IChzZWUgdXRpbHMvc24tbGlzdC1sb2FkZXIuanMpXG4vL1xuLy8gSWYgeW91IHJlYWxseSBuZWVkIHRvIHB1bGwgZGF0YSBmcm9tIGEgYmFja2VuZCAoZS5nLiB0byBwZXJpb2RpY2FsbHkgdXBkYXRlIHRoZSB3aGl0ZWxpc3QpLCBpbXBsZW1lbnQgbmV3IGZ1bmN0aW9ucyBoZXJlLFxuLy8gYnV0IGNsZWFybHkgdGVsbCB1c2VycyB3aGV0aGVyIHRoZSBjdXJyZW50IH41MDAwIGVudHJpZXMgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQsIHRvIGF2b2lkIG1pc2p1ZGdtZW50c1xuXG5pbXBvcnQgeyBtYXRjaFNuV2l0aE9jclRvbGVyYW5jZSwgZmluZFNuQnlTdWZmaXggfSBmcm9tICcuLi91dGlscy9hdXRoLmpzJ1xuXG4vLyA9PT09PSBUcmFuc2l0aW9uIHNjYW4gcmVjb3JkIHJlcG9ydGluZyAoc24tY2hlY2sgQXBwIOKGkiBtYWludGVuYW5jZSBiYWNrZW5kKSA9PT09PVxuLy8gUE9TVCAvYXBpL3RyYW5zaXRpb24tc2Nhbi1yZWNvcmRzLCBhdXRoZW50aWNhdGVkIGJ5IHRoZSBmaXhlZCBYLUFQSS1LZXkgaGVhZGVyXG4vLyAoYWNjZXB0ZWQgZGlyZWN0bHkgYnkgdGhlIGJhY2tlbmQncyBhdXRoIG1pZGRsZXdhcmUg4oCUIG5vIEpXVCBuZWVkZWQpXG5jb25zdCBUUkFOU0lUSU9OX0FQSSA9IHtcbiAgYmFzZVVSTDogJ2h0dHBzOi8vcmVwYWlyLmRhdGFzdHJpbmcuY2MnLFxuICBhcGlLZXk6ICdtay0yMDI2LTdmM2E5YjFlOGM1ZDJmMGE0ZTZiOGMxZDNmNWE3ZTliJyxcbiAgZ3JvdXBJRDogMSxcbiAgc2l0ZU5hbWU6ICdEU0/nn7/lnLonLFxufVxuXG4vKipcbiAqIFJlcG9ydCBhIHNjYW4vY29uZmlybSB0byB0aGUgbWFpbnRlbmFuY2UgYmFja2VuZCAoZmlyZS1hbmQtZm9yZ2V0IGZyaWVuZGx5LCBuZXZlciB0aHJvd3MpXG4gKiBAcGFyYW0ge3N0cmluZ30gc24gdGhlIG1hdGNoZWQgY2Fub25pY2FsIFNOICh0aGUgcmVhbCBzZXJpYWwgbnVtYmVyKVxuICogQHBhcmFtIHtib29sZWFufSBwdWxsZWQgd2hldGhlciByZW1vdmFsIHdhcyBjb25maXJtZWRcbiAqIEByZXR1cm5zIHtQcm9taXNlPHtvazogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nfT59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBvcnRUcmFuc2l0aW9uU2NhbihzbiwgcHVsbGVkID0gdHJ1ZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICB1bmkucmVxdWVzdCh7XG4gICAgICB1cmw6IFRSQU5TSVRJT05fQVBJLmJhc2VVUkwgKyAnL2FwaS90cmFuc2l0aW9uLXNjYW4tcmVjb3JkcycsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHRpbWVvdXQ6IDEwMDAwLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdYLUFQSS1LZXknOiBUUkFOU0lUSU9OX0FQSS5hcGlLZXksXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBzZXJpYWxfbnVtYmVyOiBzbixcbiAgICAgICAgZ3JvdXBfaWQ6IFRSQU5TSVRJT05fQVBJLmdyb3VwSUQsXG4gICAgICAgIHB1bGxlZCxcbiAgICAgICAgc2l0ZV9uYW1lOiBUUkFOU0lUSU9OX0FQSS5zaXRlTmFtZSxcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IG9rID0gcmVzLnN0YXR1c0NvZGUgPT09IDIwMCAmJiByZXMuZGF0YSAmJiByZXMuZGF0YS5jb2RlID09PSAwXG4gICAgICAgIGxldCBtZXNzYWdlID0gJ0hUVFAgJyArIHJlcy5zdGF0dXNDb2RlXG4gICAgICAgIGlmICghb2sgJiYgcmVzLmRhdGEpIHtcbiAgICAgICAgICAvLyBnaW4gYXV0aCBlcnJvcnMgbG9vayBsaWtlIHtcImVycm9yXCI6XCJpbnZhbGlkIEFQSSBrZXlcIn07IGJ1c2luZXNzIGVycm9ycyB7Y29kZSxtc2d9XG4gICAgICAgICAgY29uc3QgZCA9IHJlcy5kYXRhXG4gICAgICAgICAgbWVzc2FnZSArPSAnOiAnICsgKGQuZXJyb3IgfHwgZC5tc2cgfHwgZC5tZXNzYWdlIHx8IEpTT04uc3RyaW5naWZ5KGQpLnNsaWNlKDAsIDEyMCkpXG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZSh7IG9rLCBtZXNzYWdlIH0pXG4gICAgICB9LFxuICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICByZXNvbHZlKHsgb2s6IGZhbHNlLCBtZXNzYWdlOiAoZXJyICYmIGVyci5lcnJNc2cpIHx8ICduZXR3b3JrIGVycm9yJyB9KVxuICAgICAgfSxcbiAgICB9KVxuICB9KVxufVxuXG4vKipcbiAqIOKYhSBOZXcgQVBJOiBmdWxseSBsb2NhbCBTTiBjaGVjaywgbm8gbmV0d29yayByZXF1ZXN0c1xuICogQHBhcmFtIHtzdHJpbmd9IHNuIFNOIG9idGFpbmVkIGZyb20gc2Nhbm5pbmcvT0NSXG4gKiBAcmV0dXJucyB7e21hdGNoZWQ6IGJvb2xlYW4sIHNuPzogc3RyaW5nLCBvcmlnaW5hbDogc3RyaW5nLCB0eXBlPzogc3RyaW5nLCByZWFzb24/OiBzdHJpbmd9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxDaGVja1NuKHNuKSB7XG4gIHJldHVybiBtYXRjaFNuV2l0aE9jclRvbGVyYW5jZShzbilcbn1cblxuLyoqXG4gKiDimIUgTmV3IEFQSTogZnVsbHkgbG9jYWwgbGFzdC1OLWRpZ2l0IFNOIG1hdGNoaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gc3VmZml4IGxhc3QtTi1kaWdpdCBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX0gbGlzdCBvZiBmdWxseSBtYXRjaGVkIFNOc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxGaW5kU25CeVN1ZmZpeChzdWZmaXgpIHtcbiAgcmV0dXJuIGZpbmRTbkJ5U3VmZml4KHN1ZmZpeClcbn1cblxuLyoqXG4gKiBGZXRjaCB0aGUgY29uZmlybWVkLXJlbW92YWwgY291bnQgZnJvbSB0aGUgbWFpbnRlbmFuY2UgYmFja2VuZFxuICogR0VUIC9hcGkvdHJhbnNpdGlvbi1zY2FuLXJlY29yZHMvc3VtbWFyeT9zaXRlX25hbWU9Li4uIOKGkiBkYXRhLnRvdGFsXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx7b2s6IGJvb2xlYW4sIHRvdGFsOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZ30+fSB0b3RhbCA9IC0xIHdoZW4gZmFpbGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uU2NhblRvdGFsKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICB1bmkucmVxdWVzdCh7XG4gICAgICB1cmw6IFRSQU5TSVRJT05fQVBJLmJhc2VVUkwgKyAnL2FwaS90cmFuc2l0aW9uLXNjYW4tcmVjb3Jkcy9zdW1tYXJ5JyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB0aW1lb3V0OiA4MDAwLFxuICAgICAgaGVhZGVyOiB7ICdYLUFQSS1LZXknOiBUUkFOU0lUSU9OX0FQSS5hcGlLZXkgfSxcbiAgICAgIGRhdGE6IHsgc2l0ZV9uYW1lOiBUUkFOU0lUSU9OX0FQSS5zaXRlTmFtZSB9LCAgLy8gdW5pIGVuY29kZXMgcXVlcnkgcGFyYW1zIGF1dG9tYXRpY2FsbHlcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgY29uc3Qgb2sgPSByZXMuc3RhdHVzQ29kZSA9PT0gMjAwICYmIHJlcy5kYXRhICYmIHJlcy5kYXRhLmNvZGUgPT09IDBcbiAgICAgICAgY29uc3QgdG90YWwgPSBvayAmJiByZXMuZGF0YS5kYXRhICYmIHR5cGVvZiByZXMuZGF0YS5kYXRhLnRvdGFsID09PSAnbnVtYmVyJ1xuICAgICAgICAgID8gcmVzLmRhdGEuZGF0YS50b3RhbCA6IC0xXG4gICAgICAgIHJlc29sdmUoeyBvaywgdG90YWwsIG1lc3NhZ2U6IG9rID8gJ29rJyA6ICdIVFRQICcgKyByZXMuc3RhdHVzQ29kZSB9KVxuICAgICAgfSxcbiAgICAgIGZhaWw6IChlcnIpID0+IHtcbiAgICAgICAgcmVzb2x2ZSh7IG9rOiBmYWxzZSwgdG90YWw6IC0xLCBtZXNzYWdlOiAoZXJyICYmIGVyci5lcnJNc2cpIHx8ICduZXR3b3JrIGVycm9yJyB9KVxuICAgICAgfSxcbiAgICB9KVxuICB9KVxufVxuXG4vLyA9PT09PSBCZWxvdyBhcmUgZGVwcmVjYXRlZCBBUElzLCBrZXB0IG9ubHkgZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBvbGQgY29kZSAobm8gbmV0d29yayByZXF1ZXN0cykgPT09PT1cblxuLyoqIEBkZXByZWNhdGVkIERlcHJlY2F0ZWQ7IHRoZSB3aGl0ZWxpc3QgaXMgbm93IHJlYWQgZnVsbHkgbG9jYWxseSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZldGNoU25MaXN0KCkge1xuICBjb25zb2xlLndhcm4oJ1thcGldIGZldGNoU25MaXN0IGlzIGRlcHJlY2F0ZWQ7IHRoZSB3aGl0ZWxpc3QgaXMgbm93IHJlYWQgb2ZmbGluZSBmcm9tIHN0YXRpYy9zbi1saXN0LnR4dCcpXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pXG59XG5cbi8qKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkOyBiYWNrZW5kIGRldGFpbCBsb29rdXAgaGFzIGJlZW4gc2h1dCBkb3duICovXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTbihzbikge1xuICBjb25zb2xlLndhcm4oJ1thcGldIHF1ZXJ5U24gaXMgZGVwcmVjYXRlZDsgdXNlIHdoaXRlbGlzdCBtYXRjaGluZyBkaXJlY3RseSBpZiB5b3UgbmVlZCBkZXRhaWxzJylcbiAgY29uc3QgciA9IG1hdGNoU25XaXRoT2NyVG9sZXJhbmNlKHNuKVxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgZGF0YTogeyBjb2RlOiAwLCBkYXRhOiB7IGxpc3Q6IHIubWF0Y2hlZCA/IFt7IHNuOiByLnNuLCBzdGF0dXNfdGV4dDogJ1doaXRlbGlzdCBoaXQnIH1dIDogW10gfSB9XG4gIH0pXG59XG5cbi8qKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0U2NhbigpIHtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG59XG5cbi8qKiBAZGVwcmVjYXRlZCBEZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gdXBsb2FkSW1hZ2UoKSB7XG4gIGNvbnNvbGUud2FybignW2FwaV0gdXBsb2FkSW1hZ2UgaXMgZGVwcmVjYXRlZDsgZm9yIE9DUiB1c2UgdGhlIHBhZ2VzL29jci9vY3IgcGFnZScpXG4gIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1N3aXRjaGVkIHRvIGZ1bGx5IGxvY2FsIG1vZGU7IGJhY2tlbmQgT0NSIGhhcyBiZWVuIHNodXQgZG93bicpKVxufVxuXG4vKiogQGRlcHJlY2F0ZWQgRGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlY29nbml6ZVNuRnJvbUltYWdlKCkge1xuICBjb25zb2xlLndhcm4oJ1thcGldIHJlY29nbml6ZVNuRnJvbUltYWdlIGlzIGRlcHJlY2F0ZWQnKVxuICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdTd2l0Y2hlZCB0byBmdWxseSBsb2NhbCBtb2RlOyBiYWNrZW5kIE9DUiBoYXMgYmVlbiBzaHV0IGRvd24nKSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 33 */
/*!*********************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/result/result.vue?mpType=page ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _result_vue_vue_type_template_id_050a9776_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result.vue?vue&type=template&id=050a9776&scoped=true&mpType=page */ 34);\n/* harmony import */ var _result_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result.vue?vue&type=script&lang=js&mpType=page */ 36);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _result_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _result_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _result_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _result_vue_vue_type_template_id_050a9776_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _result_vue_vue_type_template_id_050a9776_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"050a9776\",\n  null,\n  false,\n  _result_vue_vue_type_template_id_050a9776_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/result/result.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEk7QUFDMUk7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSx3R0FBTTtBQUNSLEVBQUUsaUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3Jlc3VsdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDUwYTk3NzYmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Jlc3VsdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmVzdWx0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDUwYTk3NzZcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvcmVzdWx0L3Jlc3VsdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!***************************************************************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/result/result.vue?vue&type=template&id=050a9776&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_050a9776_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./result.vue?vue&type=template&id=050a9776&scoped=true&mpType=page */ 35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_050a9776_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_050a9776_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_050a9776_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_template_id_050a9776_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 35 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/result/result.vue?vue&type=template&id=050a9776&scoped=true&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: _vm._$s(0, "sc", "result-page"),
      class: _vm._$s(0, "c", _vm.resultClass),
      attrs: { _i: 0 },
    },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "result-icon"), attrs: { _i: 1 } },
        [_vm._$s(2, "i", _vm.matched) ? _c("text") : _c("text")]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(4, "sc", "result-title"), attrs: { _i: 4 } },
        [_vm._$s(5, "i", _vm.matched) ? _c("text") : _c("text")]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(7, "sc", "result-sub"), attrs: { _i: 7 } },
        [_vm._$s(8, "i", _vm.matched) ? _c("text") : _c("text")]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(10, "sc", "sn-box"), attrs: { _i: 10 } },
        [
          _c("view", {
            staticClass: _vm._$s(11, "sc", "sn-label"),
            attrs: { _i: 11 },
          }),
          _c(
            "view",
            { staticClass: _vm._$s(12, "sc", "sn-value"), attrs: { _i: 12 } },
            [_vm._v(_vm._$s(12, "t0-0", _vm._s(_vm.sn)))]
          ),
        ]
      ),
      _vm._$s(13, "i", _vm.matched && _vm.matchType === "variant")
        ? _c(
            "view",
            {
              staticClass: _vm._$s(13, "sc", "match-warn card"),
              attrs: { _i: 13 },
            },
            [
              _c("view", {
                staticClass: _vm._$s(14, "sc", "warn-title"),
                attrs: { _i: 14 },
              }),
              _c(
                "view",
                {
                  staticClass: _vm._$s(15, "sc", "warn-line"),
                  attrs: { _i: 15 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(16, "sc", "mono"),
                      attrs: { _i: 16 },
                    },
                    [_vm._v(_vm._$s(16, "t0-0", _vm._s(_vm.sn)))]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(17, "sc", "warn-line"),
                  attrs: { _i: 17 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(18, "sc", "mono"),
                      attrs: { _i: 18 },
                    },
                    [_vm._v(_vm._$s(18, "t0-0", _vm._s(_vm.matchSn)))]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(19, "sc", "warn-line"),
                  attrs: { _i: 19 },
                },
                [_vm._v(_vm._$s(19, "t0-0", _vm._s(_vm.matchDiff)))]
              ),
              _c("view", {
                staticClass: _vm._$s(20, "sc", "warn-tip"),
                attrs: { _i: 20 },
              }),
            ]
          )
        : _vm._e(),
      _vm._$s(21, "i", _vm.matched && _vm.matchType === "fuzzy")
        ? _c(
            "view",
            {
              staticClass: _vm._$s(21, "sc", "match-warn card"),
              attrs: { _i: 21 },
            },
            [
              _c("view", {
                staticClass: _vm._$s(22, "sc", "warn-title"),
                attrs: { _i: 22 },
              }),
              _c(
                "view",
                {
                  staticClass: _vm._$s(23, "sc", "warn-line"),
                  attrs: { _i: 23 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(24, "sc", "mono"),
                      attrs: { _i: 24 },
                    },
                    [_vm._v(_vm._$s(24, "t0-0", _vm._s(_vm.sn)))]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(25, "sc", "warn-line"),
                  attrs: { _i: 25 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(26, "sc", "mono"),
                      attrs: { _i: 26 },
                    },
                    [_vm._v(_vm._$s(26, "t0-0", _vm._s(_vm.matchSn)))]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(27, "sc", "warn-line"),
                  attrs: { _i: 27 },
                },
                [_vm._v(_vm._$s(27, "t0-0", _vm._s(_vm.matchDiff)))]
              ),
              _c("view", {
                staticClass: _vm._$s(28, "sc", "warn-tip"),
                attrs: { _i: 28 },
              }),
            ]
          )
        : _vm._e(),
      _vm._$s(
        29,
        "i",
        _vm.matched && _vm.matchType && _vm.matchType.startsWith("degrade-")
      )
        ? _c(
            "view",
            {
              staticClass: _vm._$s(29, "sc", "match-warn card"),
              attrs: { _i: 29 },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(30, "sc", "warn-title"),
                  attrs: { _i: 30 },
                },
                [_vm._v(_vm._$s(30, "t0-0", _vm._s(_vm.degradeLabel)))]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(31, "sc", "warn-line"),
                  attrs: { _i: 31 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(32, "sc", "mono"),
                      attrs: { _i: 32 },
                    },
                    [_vm._v(_vm._$s(32, "t0-0", _vm._s(_vm.inputSn || _vm.sn)))]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(33, "sc", "warn-line"),
                  attrs: { _i: 33 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(34, "sc", "mono"),
                      attrs: { _i: 34 },
                    },
                    [_vm._v(_vm._$s(34, "t0-0", _vm._s(_vm.degradeFragment)))]
                  ),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(35, "sc", "warn-line"),
                  attrs: { _i: 35 },
                },
                [
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(36, "sc", "mono"),
                      attrs: { _i: 36 },
                    },
                    [_vm._v(_vm._$s(36, "t0-0", _vm._s(_vm.matchSn)))]
                  ),
                ]
              ),
              _c("view", {
                staticClass: _vm._$s(37, "sc", "warn-tip"),
                attrs: { _i: 37 },
              }),
            ]
          )
        : _vm._e(),
      _c(
        "view",
        { staticClass: _vm._$s(38, "sc", "debug card"), attrs: { _i: 38 } },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s(39, "sc", "debug-title"),
              attrs: { _i: 39 },
            },
            [
              _c("text", {
                staticClass: _vm._$s(40, "sc", "debug-hint"),
                attrs: { _i: 40 },
              }),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(41, "sc", "debug-row"), attrs: { _i: 41 } },
            [
              _c("text", {
                staticClass: _vm._$s(42, "sc", "debug-key"),
                attrs: { _i: 42 },
              }),
              _c(
                "text",
                {
                  staticClass: _vm._$s(43, "sc", "debug-val mono"),
                  attrs: { _i: 43 },
                },
                [_vm._v(_vm._$s(43, "t0-0", _vm._s(_vm.debug.original)))]
              ),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(44, "sc", "debug-row"), attrs: { _i: 44 } },
            [
              _c("text", {
                staticClass: _vm._$s(45, "sc", "debug-key"),
                attrs: { _i: 45 },
              }),
              _c(
                "text",
                {
                  staticClass: _vm._$s(46, "sc", "debug-val"),
                  attrs: { _i: 46 },
                },
                [_vm._v(_vm._$s(46, "t0-0", _vm._s(_vm.debug.len)))]
              ),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(47, "sc", "debug-row"), attrs: { _i: 47 } },
            [
              _c("text", {
                staticClass: _vm._$s(48, "sc", "debug-key"),
                attrs: { _i: 48 },
              }),
              _c(
                "text",
                {
                  staticClass: _vm._$s(49, "sc", "debug-val"),
                  attrs: { _i: 49 },
                },
                [
                  _vm._v(
                    _vm._$s(49, "t0-0", _vm._s(_vm.debug.matchType || "-"))
                  ),
                ]
              ),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(50, "sc", "debug-row"), attrs: { _i: 50 } },
            [
              _c("text", {
                staticClass: _vm._$s(51, "sc", "debug-key"),
                attrs: { _i: 51 },
              }),
              _c(
                "text",
                {
                  staticClass: _vm._$s(52, "sc", "debug-val"),
                  attrs: { _i: 52 },
                },
                [_vm._v(_vm._$s(52, "t0-0", _vm._s(_vm.debug.listCount)))]
              ),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(53, "sc", "debug-row"), attrs: { _i: 53 } },
            [
              _c("text", {
                staticClass: _vm._$s(54, "sc", "debug-key"),
                attrs: { _i: 54 },
              }),
              _c(
                "text",
                {
                  staticClass: _vm._$s(55, "sc", "debug-val"),
                  attrs: { _i: 55 },
                },
                [_vm._v(_vm._$s(55, "t0-0", _vm._s(_vm.debug.source)))]
              ),
            ]
          ),
          _vm._$s(56, "i", !_vm.matched)
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(56, "sc", "debug-row"),
                  attrs: { _i: 56 },
                },
                [
                  _c("text", {
                    staticClass: _vm._$s(57, "sc", "debug-key"),
                    attrs: { _i: 57 },
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s(58, "sc", "debug-val"),
                      attrs: { _i: 58 },
                    },
                    [_vm._v(_vm._$s(58, "t0-0", _vm._s(_vm.debug.reason)))]
                  ),
                ]
              )
            : _vm._e(),
        ]
      ),
      _vm._$s(59, "i", _vm.matched)
        ? _c(
            "button",
            {
              staticClass: _vm._$s(59, "sc", "btn green"),
              attrs: { _i: 59 },
              on: { click: _vm.onConfirm },
            },
            [_c("text")]
          )
        : _c(
            "button",
            {
              staticClass: _vm._$s(61, "sc", "btn red"),
              attrs: { _i: 61 },
              on: { click: _vm.onConfirm },
            },
            [_c("text")]
          ),
      _c("button", {
        staticClass: _vm._$s(63, "sc", "btn gray"),
        attrs: { _i: 63 },
        on: { click: _vm.onContinue },
      }),
      _c("button", {
        staticClass: _vm._$s(64, "sc", "btn gray"),
        attrs: { _i: 64 },
        on: { click: _vm.goHome },
      }),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 36 */
/*!*********************************************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/result/result.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./result.vue?vue&type=script&lang=js&mpType=page */ 37);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_result_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZ1QixDQUFnQix1dEJBQUcsRUFBQyIsImZpbGUiOiIzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jlc3VsdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVzdWx0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/result/result.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 13));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 15));\nvar _auth = __webpack_require__(/*! ../../utils/auth.js */ 16);\nvar _sn = __webpack_require__(/*! ../../api/sn.js */ 31);\nvar _snValidate = __webpack_require__(/*! ../../utils/sn-validate.js */ 30);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      sn: '',\n      scanType: '',\n      matched: false,\n      matchType: '',\n      // exact / variant / fuzzy / degrade-s7 / degrade-front6 / degrade-back6\n      matchDiff: '',\n      // description of character differences\n      matchSn: '',\n      // matched canonical SN\n      inputSn: '',\n      // raw OCR string (shown on degraded matches)\n      degradeFragment: '',\n      // substring hit by the degraded match\n      degradeLabel: '',\n      // human-readable label of the degraded match method\n      detail: null,\n      checked: false,\n      // check finished (prevents flicker)\n      reporting: false,\n      // ★ transition-scan upload in progress (prevents double taps)\n      debug: {\n        original: '',\n        len: 0,\n        matchType: '',\n        listCount: 0,\n        source: '-',\n        reason: ''\n      }\n    };\n  },\n  computed: {\n    resultClass: function resultClass() {\n      return this.matched ? 'result-pass' : 'result-fail';\n    }\n  },\n  onLoad: function onLoad(query) {\n    this.sn = (query.sn || '').trim();\n    this.scanType = query.type || '';\n    if (query.input) this.inputSn = query.input;\n    if (!this.sn) {\n      uni.showToast({\n        title: 'SN is empty',\n        icon: 'none'\n      });\n      setTimeout(function () {\n        return uni.navigateBack();\n      }, 800);\n      return;\n    }\n    // Run the full tolerant + degraded matching centrally in doCheck\n    this.doCheck();\n    this.saveHistory();\n  },\n  methods: {\n    doCheck: function doCheck() {\n      var _this = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var result, fragments, f, via, labelMap, s7, stats;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                (0, _auth.buildSnIndex)();\n                // ★ Step 1: full tolerant matching (exact + confusable-character variants)\n                result = (0, _auth.matchSnWithOcrTolerance)(_this.sn);\n                _this.matched = result.matched;\n                _this.matchType = result.type; // exact / variant\n                _this.matchDiff = result.diff;\n                _this.matchSn = result.sn || _this.sn;\n                _this.checked = true;\n                __f__(\"log\", \"[result] Full check:\", result, \" at pages/result/result.vue:170\");\n\n                // ★ Step 2: degraded matching (first 6 / last 6 digits, fallback for severe OCR errors)\n                if (!result.matched) {\n                  fragments = (0, _auth.findSnByS6Fragment)(_this.sn);\n                  __f__(\"log\", \"[result] Degraded matching:\", fragments, \" at pages/result/result.vue:175\");\n                  if (fragments.length > 0) {\n                    f = fragments[0];\n                    _this.matched = true;\n                    _this.matchType = \"degrade-\".concat(f.via); // degrade-s7 / front6 / back6\n                    _this.matchSn = f.sn;\n                    _this.matchDiff = \"OCR failed; last 7 \\\"\".concat(_this.sn.replace(/[^A-Z0-9]/g, '').slice(-7), \"\\\" \\u2192 \").concat(f.via, \"=\\\"\").concat(f.fragment, \"\\\" hit\");\n                    // Set display fields for the degraded match\n                    via = f.via;\n                    labelMap = {\n                      s7: 'last 7 digits',\n                      front6: 'first 6 of the last 7',\n                      back6: 'last 6 of the last 7'\n                    };\n                    _this.degradeLabel = labelMap[via] || via;\n                    s7 = _this.sn.replace(/[^A-Z0-9]/g, '').slice(-7);\n                    if (via === 's7') _this.degradeFragment = s7;else if (via === 'front6') _this.degradeFragment = s7.slice(0, 6);else if (via === 'back6') _this.degradeFragment = s7.slice(1, 7);\n                  }\n                }\n\n                // Fill in debug info\n                stats = (0, _auth.getWhitelistStats)();\n                _this.debug = {\n                  original: result.original || _this.sn,\n                  len: (result.original || _this.sn).length,\n                  matchType: _this.matchType || 'none',\n                  listCount: stats.count,\n                  source: stats.updatedAt ? \"Loaded (\".concat(stats.count, \" entries)\") : 'Not loaded',\n                  reason: _this.matched ? 'Hit' : result.reason || 'No hit'\n                };\n                __f__(\"log\", \"[result] Final:\", _this.matchType, _this.matchSn, \" at pages/result/result.vue:204\");\n\n                // Vibrate\n                uni.vibrateLong && uni.vibrateLong({\n                  success: function success() {},\n                  fail: function fail() {\n                    return uni.vibrateShort && uni.vibrateShort({});\n                  }\n                });\n                // Detail card is disabled (commented out in the template) and the legacy\n                // querySn detail endpoint is deprecated — skip it (it also spammed deprecation logs)\n                // Report log (optional, includes match type)\n                (0, _sn.reportScan)(_this.matchSn, _this.matched, _this.matchType);\n              case 14:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    saveHistory: function saveHistory() {\n      var KEY = 'scan_history';\n      var list = uni.getStorageSync(KEY) || [];\n      list.unshift({\n        sn: this.sn,\n        matched: this.matched,\n        time: Date.now()\n      });\n      uni.setStorageSync(KEY, list.slice(0, 200));\n    },\n    onConfirm: function onConfirm() {\n      var _this2 = this;\n      // ★ Confirm Removal (matched) → report to the maintenance backend\n      //   (POST /api/transition-scan-records with the fixed X-API-Key header).\n      //   Fire-and-forget: the toast shows IMMEDIATELY and the upload runs in the\n      //   background — a slow/offline network (10s timeout) never delays the UI;\n      //   the outcome only goes to the log, plus a late heads-up toast on failure.\n      //   Reject Removal just records locally.\n      if (this.matched) {\n        uni.showToast({\n          title: 'Recorded: remove',\n          icon: 'success',\n          duration: 1500\n        });\n        if (this.reporting) return; // upload already in flight — skip duplicates\n        this.reporting = true;\n        var sn = this.matchSn || this.sn;\n        (0, _sn.reportTransitionScan)(sn, true).then(function (r) {\n          _this2.reporting = false;\n          __f__(\"log\", '[result] transition scan reported:', sn, r.ok ? 'ok' : r.message, \" at pages/result/result.vue:242\");\n          if (!r.ok) {\n            uni.showToast({\n              title: 'Upload failed: ' + r.message,\n              icon: 'none',\n              duration: 2500\n            });\n          }\n        }).catch(function () {\n          _this2.reporting = false;\n          __f__(\"warn\", '[result] transition scan report crashed', \" at pages/result/result.vue:248\");\n        });\n      } else {\n        uni.showToast({\n          title: 'Recorded: reject',\n          icon: 'success'\n        });\n      }\n    },\n    onContinue: function onContinue() {\n      var _this3 = this;\n      // ★ Continue scanning: same validation as home-page scanning (utils/sn-validate.js)\n      //   < 17 chars / not an SN → modal suggesting image OCR etc.; valid → redirectTo to refresh this page and re-check\n      // ★ Black-screen guard (iOS denied camera) + same scan options as the home page\n      if (!(0, _snValidate.ensureCameraPermission)(_snValidate.showCameraDeniedModal)) return;\n      uni.scanCode({\n        scanType: ['barCode'],\n        barCodeInputEnabled: true,\n        success: function success(res) {\n          var sn = (res.result || '').trim();\n          if (!sn) {\n            uni.showToast({\n              title: 'No content recognized',\n              icon: 'none'\n            });\n            return;\n          }\n          // redirect=true: replace the current result page with redirectTo; tapping \"Rescan\" relaunches scanning for continuous work\n          (0, _snValidate.dispatchScan)(sn, res.scanType, true, function () {\n            return _this3.onContinue();\n          });\n        },\n        fail: function fail(err) {\n          var msg = err && err.errMsg || '';\n          if (msg && !msg.includes('cancel')) {\n            if (/auth|denied|permission/i.test(msg)) {\n              (0, _snValidate.showCameraDeniedModal)();\n              return;\n            }\n            uni.showToast({\n              title: 'Scan failed: ' + msg,\n              icon: 'none'\n            });\n          }\n          // User canceled scanning → stay on the current result page\n        }\n      });\n    },\n    goHome: function goHome() {\n      uni.reLaunch({\n        url: '/pages/index/index'\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 1)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcmVzdWx0L3Jlc3VsdC52dWUiXSwibmFtZXMiOlsiZGF0YSIsInNuIiwic2NhblR5cGUiLCJtYXRjaGVkIiwibWF0Y2hUeXBlIiwibWF0Y2hEaWZmIiwibWF0Y2hTbiIsImlucHV0U24iLCJkZWdyYWRlRnJhZ21lbnQiLCJkZWdyYWRlTGFiZWwiLCJkZXRhaWwiLCJjaGVja2VkIiwicmVwb3J0aW5nIiwiZGVidWciLCJvcmlnaW5hbCIsImxlbiIsImxpc3RDb3VudCIsInNvdXJjZSIsInJlYXNvbiIsImNvbXB1dGVkIiwicmVzdWx0Q2xhc3MiLCJvbkxvYWQiLCJxdWVyeSIsInRyaW0iLCJ0eXBlIiwiaW5wdXQiLCJ1bmkiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJzZXRUaW1lb3V0IiwibmF2aWdhdGVCYWNrIiwiZG9DaGVjayIsInNhdmVIaXN0b3J5IiwibWV0aG9kcyIsImJ1aWxkU25JbmRleCIsInJlc3VsdCIsIm1hdGNoU25XaXRoT2NyVG9sZXJhbmNlIiwiZGlmZiIsImZyYWdtZW50cyIsImZpbmRTbkJ5UzZGcmFnbWVudCIsImxlbmd0aCIsImYiLCJ2aWEiLCJyZXBsYWNlIiwic2xpY2UiLCJmcmFnbWVudCIsImxhYmVsTWFwIiwiczciLCJmcm9udDYiLCJiYWNrNiIsInN0YXRzIiwiZ2V0V2hpdGVsaXN0U3RhdHMiLCJjb3VudCIsInVwZGF0ZWRBdCIsInZpYnJhdGVMb25nIiwic3VjY2VzcyIsImZhaWwiLCJ2aWJyYXRlU2hvcnQiLCJyZXBvcnRTY2FuIiwiS0VZIiwibGlzdCIsImdldFN0b3JhZ2VTeW5jIiwidW5zaGlmdCIsInRpbWUiLCJEYXRlIiwibm93Iiwic2V0U3RvcmFnZVN5bmMiLCJvbkNvbmZpcm0iLCJkdXJhdGlvbiIsInJlcG9ydFRyYW5zaXRpb25TY2FuIiwidGhlbiIsInIiLCJvayIsIm1lc3NhZ2UiLCJjYXRjaCIsIm9uQ29udGludWUiLCJlbnN1cmVDYW1lcmFQZXJtaXNzaW9uIiwic2hvd0NhbWVyYURlbmllZE1vZGFsIiwic2NhbkNvZGUiLCJiYXJDb2RlSW5wdXRFbmFibGVkIiwicmVzIiwiZGlzcGF0Y2hTY2FuIiwiZXJyIiwibXNnIiwiZXJyTXNnIiwiaW5jbHVkZXMiLCJ0ZXN0IiwiZ29Ib21lIiwicmVMYXVuY2giLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQStHQTtBQUNBO0FBQ0E7QUFqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBLGVBTWU7RUFDZEEsSUFBSSxrQkFBRztJQUNOLE9BQU87TUFDTkMsRUFBRSxFQUFFLEVBQUU7TUFDTkMsUUFBUSxFQUFFLEVBQUU7TUFDWkMsT0FBTyxFQUFFLEtBQUs7TUFDZEMsU0FBUyxFQUFFLEVBQUU7TUFBTTtNQUNuQkMsU0FBUyxFQUFFLEVBQUU7TUFBTTtNQUNuQkMsT0FBTyxFQUFF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TyxDQUFDLENBQUM7VUFDOUQ7VUFDQTtRQUNEO01BQ0QsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUVEMkQsTUFBTSxvQkFBRztNQUNSOUQsR0FBRyxDQUFDK0QsUUFBUSxDQUFDO1FBQUVDLEdBQUcsRUFBRTtNQUFxQixDQUFDLENBQUM7SUFDNUM7RUFDRDtBQUNELENBQUM7QUFBQSwyQiIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5pbXBvcnQgeyBidWlsZFNuSW5kZXgsIGNoZWNrU25Jbkxpc3QsIGdldFNuTGlzdCwgZ2V0U25MaXN0VXBkYXRlVGltZSwgbWF0Y2hTbldpdGhPY3JUb2xlcmFuY2UsIGZpbmRTbkJ5UzZGcmFnbWVudCwgZ2V0V2hpdGVsaXN0U3RhdHMgfSBmcm9tICcuLi8uLi91dGlscy9hdXRoLmpzJ1xuaW1wb3J0IHsgcmVwb3J0U2NhbiwgcmVwb3J0VHJhbnNpdGlvblNjYW4gfSBmcm9tICcuLi8uLi9hcGkvc24uanMnXG5pbXBvcnQgeyBkaXNwYXRjaFNjYW4sIGVuc3VyZUNhbWVyYVBlcm1pc3Npb24sIHNob3dDYW1lcmFEZW5pZWRNb2RhbCB9IGZyb20gJy4uLy4uL3V0aWxzL3NuLXZhbGlkYXRlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNuOiAnJyxcblx0XHRcdHNjYW5UeXBlOiAnJyxcblx0XHRcdG1hdGNoZWQ6IGZhbHNlLFxuXHRcdFx0bWF0Y2hUeXBlOiAnJywgICAgIC8vIGV4YWN0IC8gdmFyaWFudCAvIGZ1enp5IC8gZGVncmFkZS1zNyAvIGRlZ3JhZGUtZnJvbnQ2IC8gZGVncmFkZS1iYWNrNlxuXHRcdFx0bWF0Y2hEaWZmOiAnJywgICAgIC8vIGRlc2NyaXB0aW9uIG9mIGNoYXJhY3RlciBkaWZmZXJlbmNlc1xuXHRcdFx0bWF0Y2hTbjogJycsICAgICAgIC8vIG1hdGNoZWQgY2Fub25pY2FsIFNOXG5cdFx0XHRpbnB1dFNuOiAnJywgICAgICAgLy8gcmF3IE9DUiBzdHJpbmcgKHNob3duIG9uIGRlZ3JhZGVkIG1hdGNoZXMpXG5cdFx0XHRkZWdyYWRlRnJhZ21lbnQ6ICcnLCAgLy8gc3Vic3RyaW5nIGhpdCBieSB0aGUgZGVncmFkZWQgbWF0Y2hcblx0XHRcdGRlZ3JhZGVMYWJlbDogJycsICAgLy8gaHVtYW4tcmVhZGFibGUgbGFiZWwgb2YgdGhlIGRlZ3JhZGVkIG1hdGNoIG1ldGhvZFxuXHRcdFx0ZGV0YWlsOiBudWxsLFxuXHRcdFx0Y2hlY2tlZDogZmFsc2UsICAvLyBjaGVjayBmaW5pc2hlZCAocHJldmVudHMgZmxpY2tlcilcblx0XHRcdHJlcG9ydGluZzogZmFsc2UsICAvLyDimIUgdHJhbnNpdGlvbi1zY2FuIHVwbG9hZCBpbiBwcm9ncmVzcyAocHJldmVudHMgZG91YmxlIHRhcHMpXG5cdFx0XHRkZWJ1Zzoge1xuXHRcdFx0XHRvcmlnaW5hbDogJycsXG5cdFx0XHRcdGxlbjogMCxcblx0XHRcdFx0bWF0Y2hUeXBlOiAnJyxcblx0XHRcdFx0bGlzdENvdW50OiAwLFxuXHRcdFx0XHRzb3VyY2U6ICctJyxcblx0XHRcdFx0cmVhc29uOiAnJ1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0Y29tcHV0ZWQ6IHtcblx0XHRyZXN1bHRDbGFzcygpIHtcblx0XHRcdHJldHVybiB0aGlzLm1hdGNoZWQgPyAncmVzdWx0LXBhc3MnIDogJ3Jlc3VsdC1mYWlsJ1xuXHRcdH1cblx0fSxcblx0b25Mb2FkKHF1ZXJ5KSB7XG5cdFx0dGhpcy5zbiA9IChxdWVyeS5zbiB8fCAnJykudHJpbSgpXG5cdFx0dGhpcy5zY2FuVHlwZSA9IHF1ZXJ5LnR5cGUgfHwgJydcblx0XHRpZiAocXVlcnkuaW5wdXQpIHRoaXMuaW5wdXRTbiA9IHF1ZXJ5LmlucHV0XG5cdFx0aWYgKCF0aGlzLnNuKSB7XG5cdFx0XHR1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICdTTiBpcyBlbXB0eScsIGljb246ICdub25lJyB9KVxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB1bmkubmF2aWdhdGVCYWNrKCksIDgwMClcblx0XHRcdHJldHVyblxuXHRcdH1cblx0XHQvLyBSdW4gdGhlIGZ1bGwgdG9sZXJhbnQgKyBkZWdyYWRlZCBtYXRjaGluZyBjZW50cmFsbHkgaW4gZG9DaGVja1xuXHRcdHRoaXMuZG9DaGVjaygpXG5cdFx0dGhpcy5zYXZlSGlzdG9yeSgpXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRhc3luYyBkb0NoZWNrKCkge1xuXHRcdFx0YnVpbGRTbkluZGV4KClcblx0XHRcdC8vIOKYhSBTdGVwIDE6IGZ1bGwgdG9sZXJhbnQgbWF0Y2hpbmcgKGV4YWN0ICsgY29uZnVzYWJsZS1jaGFyYWN0ZXIgdmFyaWFudHMpXG5cdFx0XHRjb25zdCByZXN1bHQgPSBtYXRjaFNuV2l0aE9jclRvbGVyYW5jZSh0aGlzLnNuKVxuXHRcdFx0dGhpcy5tYXRjaGVkID0gcmVzdWx0Lm1hdGNoZWRcblx0XHRcdHRoaXMubWF0Y2hUeXBlID0gcmVzdWx0LnR5cGUgICAgICAgIC8vIGV4YWN0IC8gdmFyaWFudFxuXHRcdFx0dGhpcy5tYXRjaERpZmYgPSByZXN1bHQuZGlmZlxuXHRcdFx0dGhpcy5tYXRjaFNuID0gcmVzdWx0LnNuIHx8IHRoaXMuc25cblx0XHRcdHRoaXMuY2hlY2tlZCA9IHRydWVcblxuXHRcdFx0Y29uc29sZS5sb2coYFtyZXN1bHRdIEZ1bGwgY2hlY2s6YCwgcmVzdWx0KVxuXG5cdFx0XHQvLyDimIUgU3RlcCAyOiBkZWdyYWRlZCBtYXRjaGluZyAoZmlyc3QgNiAvIGxhc3QgNiBkaWdpdHMsIGZhbGxiYWNrIGZvciBzZXZlcmUgT0NSIGVycm9ycylcblx0XHRcdGlmICghcmVzdWx0Lm1hdGNoZWQpIHtcblx0XHRcdFx0Y29uc3QgZnJhZ21lbnRzID0gZmluZFNuQnlTNkZyYWdtZW50KHRoaXMuc24pXG5cdFx0XHRcdGNvbnNvbGUubG9nKGBbcmVzdWx0XSBEZWdyYWRlZCBtYXRjaGluZzpgLCBmcmFnbWVudHMpXG5cdFx0XHRcdGlmIChmcmFnbWVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNvbnN0IGYgPSBmcmFnbWVudHNbMF1cblx0XHRcdFx0XHR0aGlzLm1hdGNoZWQgPSB0cnVlXG5cdFx0XHRcdFx0dGhpcy5tYXRjaFR5cGUgPSBgZGVncmFkZS0ke2YudmlhfWAgICAvLyBkZWdyYWRlLXM3IC8gZnJvbnQ2IC8gYmFjazZcblx0XHRcdFx0XHR0aGlzLm1hdGNoU24gPSBmLnNuXG5cdFx0XHRcdFx0dGhpcy5tYXRjaERpZmYgPSBgT0NSIGZhaWxlZDsgbGFzdCA3IFwiJHt0aGlzLnNuLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnJykuc2xpY2UoLTcpfVwiIOKGkiAke2YudmlhfT1cIiR7Zi5mcmFnbWVudH1cIiBoaXRgXG5cdFx0XHRcdFx0Ly8gU2V0IGRpc3BsYXkgZmllbGRzIGZvciB0aGUgZGVncmFkZWQgbWF0Y2hcblx0XHRcdFx0XHRjb25zdCB2aWEgPSBmLnZpYVxuXHRcdFx0XHRcdGNvbnN0IGxhYmVsTWFwID0geyBzNzogJ2xhc3QgNyBkaWdpdHMnLCBmcm9udDY6ICdmaXJzdCA2IG9mIHRoZSBsYXN0IDcnLCBiYWNrNjogJ2xhc3QgNiBvZiB0aGUgbGFzdCA3JyB9XG5cdFx0XHRcdFx0dGhpcy5kZWdyYWRlTGFiZWwgPSBsYWJlbE1hcFt2aWFdIHx8IHZpYVxuXHRcdFx0XHRcdGNvbnN0IHM3ID0gdGhpcy5zbi5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpLnNsaWNlKC03KVxuXHRcdFx0XHRcdGlmICh2aWEgPT09ICdzNycpIHRoaXMuZGVncmFkZUZyYWdtZW50ID0gczdcblx0XHRcdFx0XHRlbHNlIGlmICh2aWEgPT09ICdmcm9udDYnKSB0aGlzLmRlZ3JhZGVGcmFnbWVudCA9IHM3LnNsaWNlKDAsIDYpXG5cdFx0XHRcdFx0ZWxzZSBpZiAodmlhID09PSAnYmFjazYnKSB0aGlzLmRlZ3JhZGVGcmFnbWVudCA9IHM3LnNsaWNlKDEsIDcpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gRmlsbCBpbiBkZWJ1ZyBpbmZvXG5cdFx0XHRjb25zdCBzdGF0cyA9IGdldFdoaXRlbGlzdFN0YXRzKClcblx0XHRcdHRoaXMuZGVidWcgPSB7XG5cdFx0XHRcdG9yaWdpbmFsOiByZXN1bHQub3JpZ2luYWwgfHwgdGhpcy5zbixcblx0XHRcdFx0bGVuOiAocmVzdWx0Lm9yaWdpbmFsIHx8IHRoaXMuc24pLmxlbmd0aCxcblx0XHRcdFx0bWF0Y2hUeXBlOiB0aGlzLm1hdGNoVHlwZSB8fCAnbm9uZScsXG5cdFx0XHRcdGxpc3RDb3VudDogc3RhdHMuY291bnQsXG5cdFx0XHRcdHNvdXJjZTogc3RhdHMudXBkYXRlZEF0ID8gYExvYWRlZCAoJHtzdGF0cy5jb3VudH0gZW50cmllcylgIDogJ05vdCBsb2FkZWQnLFxuXHRcdFx0XHRyZWFzb246IHRoaXMubWF0Y2hlZCA/ICdIaXQnIDogKHJlc3VsdC5yZWFzb24gfHwgJ05vIGhpdCcpXG5cdFx0XHR9XG5cblx0XHRcdGNvbnNvbGUubG9nKGBbcmVzdWx0XSBGaW5hbDpgLCB0aGlzLm1hdGNoVHlwZSwgdGhpcy5tYXRjaFNuKVxuXG5cdFx0XHQvLyBWaWJyYXRlXG5cdFx0XHR1bmkudmlicmF0ZUxvbmcgJiYgdW5pLnZpYnJhdGVMb25nKHtcblx0XHRcdFx0c3VjY2VzczogKCkgPT4ge30sXG5cdFx0XHRcdGZhaWw6ICgpID0+IHVuaS52aWJyYXRlU2hvcnQgJiYgdW5pLnZpYnJhdGVTaG9ydCh7fSlcblx0XHRcdH0pXG5cdFx0XHQvLyBEZXRhaWwgY2FyZCBpcyBkaXNhYmxlZCAoY29tbWVudGVkIG91dCBpbiB0aGUgdGVtcGxhdGUpIGFuZCB0aGUgbGVnYWN5XG5cdFx0XHQvLyBxdWVyeVNuIGRldGFpbCBlbmRwb2ludCBpcyBkZXByZWNhdGVkIOKAlCBza2lwIGl0IChpdCBhbHNvIHNwYW1tZWQgZGVwcmVjYXRpb24gbG9ncylcblx0XHRcdC8vIFJlcG9ydCBsb2cgKG9wdGlvbmFsLCBpbmNsdWRlcyBtYXRjaCB0eXBlKVxuXHRcdFx0cmVwb3J0U2Nhbih0aGlzLm1hdGNoU24sIHRoaXMubWF0Y2hlZCwgdGhpcy5tYXRjaFR5cGUpXG5cdFx0fSxcblxuXHRcdHNhdmVIaXN0b3J5KCkge1xuXHRcdFx0Y29uc3QgS0VZID0gJ3NjYW5faGlzdG9yeSdcblx0XHRcdGNvbnN0IGxpc3QgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoS0VZKSB8fCBbXVxuXHRcdFx0bGlzdC51bnNoaWZ0KHtcblx0XHRcdFx0c246IHRoaXMuc24sXG5cdFx0XHRcdG1hdGNoZWQ6IHRoaXMubWF0Y2hlZCxcblx0XHRcdFx0dGltZTogRGF0ZS5ub3coKVxuXHRcdFx0fSlcblx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhLRVksIGxpc3Quc2xpY2UoMCwgMjAwKSlcblx0XHR9LFxuXG5cdFx0b25Db25maXJtKCkge1xuXHRcdFx0Ly8g4piFIENvbmZpcm0gUmVtb3ZhbCAobWF0Y2hlZCkg4oaSIHJlcG9ydCB0byB0aGUgbWFpbnRlbmFuY2UgYmFja2VuZFxuXHRcdFx0Ly8gICAoUE9TVCAvYXBpL3RyYW5zaXRpb24tc2Nhbi1yZWNvcmRzIHdpdGggdGhlIGZpeGVkIFgtQVBJLUtleSBoZWFkZXIpLlxuXHRcdFx0Ly8gICBGaXJlLWFuZC1mb3JnZXQ6IHRoZSB0b2FzdCBzaG93cyBJTU1FRElBVEVMWSBhbmQgdGhlIHVwbG9hZCBydW5zIGluIHRoZVxuXHRcdFx0Ly8gICBiYWNrZ3JvdW5kIOKAlCBhIHNsb3cvb2ZmbGluZSBuZXR3b3JrICgxMHMgdGltZW91dCkgbmV2ZXIgZGVsYXlzIHRoZSBVSTtcblx0XHRcdC8vICAgdGhlIG91dGNvbWUgb25seSBnb2VzIHRvIHRoZSBsb2csIHBsdXMgYSBsYXRlIGhlYWRzLXVwIHRvYXN0IG9uIGZhaWx1cmUuXG5cdFx0XHQvLyAgIFJlamVjdCBSZW1vdmFsIGp1c3QgcmVjb3JkcyBsb2NhbGx5LlxuXHRcdFx0aWYgKHRoaXMubWF0Y2hlZCkge1xuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICdSZWNvcmRlZDogcmVtb3ZlJywgaWNvbjogJ3N1Y2Nlc3MnLCBkdXJhdGlvbjogMTUwMCB9KVxuXHRcdFx0XHRpZiAodGhpcy5yZXBvcnRpbmcpIHJldHVybiAgLy8gdXBsb2FkIGFscmVhZHkgaW4gZmxpZ2h0IOKAlCBza2lwIGR1cGxpY2F0ZXNcblx0XHRcdFx0dGhpcy5yZXBvcnRpbmcgPSB0cnVlXG5cdFx0XHRcdGNvbnN0IHNuID0gdGhpcy5tYXRjaFNuIHx8IHRoaXMuc25cblx0XHRcdFx0cmVwb3J0VHJhbnNpdGlvblNjYW4oc24sIHRydWUpLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0XHR0aGlzLnJlcG9ydGluZyA9IGZhbHNlXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1tyZXN1bHRdIHRyYW5zaXRpb24gc2NhbiByZXBvcnRlZDonLCBzbiwgci5vayA/ICdvaycgOiByLm1lc3NhZ2UpXG5cdFx0XHRcdFx0aWYgKCFyLm9rKSB7XG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICdVcGxvYWQgZmFpbGVkOiAnICsgci5tZXNzYWdlLCBpY29uOiAnbm9uZScsIGR1cmF0aW9uOiAyNTAwIH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KS5jYXRjaCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5yZXBvcnRpbmcgPSBmYWxzZVxuXHRcdFx0XHRcdGNvbnNvbGUud2FybignW3Jlc3VsdF0gdHJhbnNpdGlvbiBzY2FuIHJlcG9ydCBjcmFzaGVkJylcblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdHRpdGxlOiAnUmVjb3JkZWQ6IHJlamVjdCcsXG5cdFx0XHRcdFx0aWNvbjogJ3N1Y2Nlc3MnXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG9uQ29udGludWUoKSB7XG5cblxuXG5cblxuXG5cdFx0XHQvLyDimIUgQ29udGludWUgc2Nhbm5pbmc6IHNhbWUgdmFsaWRhdGlvbiBhcyBob21lLXBhZ2Ugc2Nhbm5pbmcgKHV0aWxzL3NuLXZhbGlkYXRlLmpzKVxuXHRcdFx0Ly8gICA8IDE3IGNoYXJzIC8gbm90IGFuIFNOIOKGkiBtb2RhbCBzdWdnZXN0aW5nIGltYWdlIE9DUiBldGMuOyB2YWxpZCDihpIgcmVkaXJlY3RUbyB0byByZWZyZXNoIHRoaXMgcGFnZSBhbmQgcmUtY2hlY2tcblx0XHRcdC8vIOKYhSBCbGFjay1zY3JlZW4gZ3VhcmQgKGlPUyBkZW5pZWQgY2FtZXJhKSArIHNhbWUgc2NhbiBvcHRpb25zIGFzIHRoZSBob21lIHBhZ2Vcblx0XHRcdGlmICghZW5zdXJlQ2FtZXJhUGVybWlzc2lvbihzaG93Q2FtZXJhRGVuaWVkTW9kYWwpKSByZXR1cm5cblx0XHRcdHVuaS5zY2FuQ29kZSh7XG5cdFx0XHRcdHNjYW5UeXBlOiBbJ2JhckNvZGUnXSxcblx0XHRcdFx0YmFyQ29kZUlucHV0RW5hYmxlZDogdHJ1ZSxcblx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHNuID0gKHJlcy5yZXN1bHQgfHwgJycpLnRyaW0oKVxuXHRcdFx0XHRcdGlmICghc24pIHtcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ05vIGNvbnRlbnQgcmVjb2duaXplZCcsIGljb246ICdub25lJyB9KVxuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIHJlZGlyZWN0PXRydWU6IHJlcGxhY2UgdGhlIGN1cnJlbnQgcmVzdWx0IHBhZ2Ugd2l0aCByZWRpcmVjdFRvOyB0YXBwaW5nIFwiUmVzY2FuXCIgcmVsYXVuY2hlcyBzY2FubmluZyBmb3IgY29udGludW91cyB3b3JrXG5cdFx0XHRcdFx0ZGlzcGF0Y2hTY2FuKHNuLCByZXMuc2NhblR5cGUsIHRydWUsICgpID0+IHRoaXMub25Db250aW51ZSgpKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRmYWlsOiAoZXJyKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgbXNnID0gKGVyciAmJiBlcnIuZXJyTXNnKSB8fCAnJ1xuXHRcdFx0XHRcdGlmIChtc2cgJiYgIW1zZy5pbmNsdWRlcygnY2FuY2VsJykpIHtcblx0XHRcdFx0XHRcdGlmICgvYXV0aHxkZW5pZWR8cGVybWlzc2lvbi9pLnRlc3QobXNnKSkge1xuXHRcdFx0XHRcdFx0XHRzaG93Q2FtZXJhRGVuaWVkTW9kYWwoKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3QoeyB0aXRsZTogJ1NjYW4gZmFpbGVkOiAnICsgbXNnLCBpY29uOiAnbm9uZScgfSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gVXNlciBjYW5jZWxlZCBzY2FubmluZyDihpIgc3RheSBvbiB0aGUgY3VycmVudCByZXN1bHQgcGFnZVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH0sXG5cblx0XHRnb0hvbWUoKSB7XG5cdFx0XHR1bmkucmVMYXVuY2goeyB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnIH0pXG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!***************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/ocr/ocr.vue?mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ocr_vue_vue_type_template_id_0ed83914_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ocr.vue?vue&type=template&id=0ed83914&scoped=true&mpType=page */ 39);\n/* harmony import */ var _ocr_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ocr.vue?vue&type=script&lang=js&mpType=page */ 41);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ocr_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ocr_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _ocr_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ocr_vue_vue_type_template_id_0ed83914_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ocr_vue_vue_type_template_id_0ed83914_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0ed83914\",\n  null,\n  false,\n  _ocr_vue_vue_type_template_id_0ed83914_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/ocr/ocr.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDa0U7QUFDTDs7O0FBRzdEO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL29jci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGVkODM5MTQmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL29jci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vb2NyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGVkODM5MTRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvb2NyL29jci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!*********************************************************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/ocr/ocr.vue?vue&type=template&id=0ed83914&scoped=true&mpType=page ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ocr_vue_vue_type_template_id_0ed83914_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./ocr.vue?vue&type=template&id=0ed83914&scoped=true&mpType=page */ 40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ocr_vue_vue_type_template_id_0ed83914_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ocr_vue_vue_type_template_id_0ed83914_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ocr_vue_vue_type_template_id_0ed83914_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ocr_vue_vue_type_template_id_0ed83914_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 40 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/ocr/ocr.vue?vue&type=template&id=0ed83914&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _c("web-view", {
        attrs: { src: _vm._$s(1, "a-src", _vm.webviewUrl), _i: 1 },
        on: {
          message: _vm.onWebviewMessage,
          load: _vm.onWebviewLoad,
          error: _vm.onWebviewError,
        },
      }),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 41 */
/*!***************************************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/ocr/ocr.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ocr_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./ocr.vue?vue&type=script&lang=js&mpType=page */ 42);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ocr_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ocr_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ocr_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ocr_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_ocr_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTB1QixDQUFnQixvdEJBQUcsRUFBQyIsImZpbGUiOiI0MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL29jci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb2NyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/ocr/ocr.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 5);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar localOcr = _interopRequireWildcard(__webpack_require__(/*! ./local-ocr.js */ 43));\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== \"function\") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== \"default\" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// ★ Verification unified: after confirming the SN, jump straight to the result page;\n//   result.vue's doCheck() (exact → confusable variants → degraded) does the checking, same flow as barcode scanning\nvar _default = {\n  data: function data() {\n    return {\n      shortText: '',\n      shortLen: 0,\n      imagePath: '',\n      loading: false,\n      loadingText: '',\n      confirming: false,\n      // ★ confirm & verify in progress (button disabled)\n      candidates: [],\n      selectedIndex: -1,\n      snInput: '',\n      // ★ editable SN (filled by tapping a candidate, editable manually)\n      snMinChars: 7,\n      // ★ minimum chars for the SN input — hint, button state and confirm check all share this one rule\n      snFullChars: 17,\n      // ★ full-SN threshold — >= this: direct check on the result page; below: sn7 fuzzy search\n      ocrMode: 'auto',\n      // auto / local / server\n      webviewReady: false\n    };\n  },\n  computed: {\n    webviewUrl: function webviewUrl() {\n      var query = \"?shortText=\".concat(encodeURIComponent(this.shortText));\n      return \"/hybrid/html/ocr/index.html\".concat(query);\n      return '';\n    }\n  },\n  onLoad: function onLoad(query) {\n    this.shortText = (query.shortText || '').trim();\n    this.shortLen = this.shortText.length;\n  },\n  onReady: function onReady() {\n    // After the App webview finishes loading, it sends a 'ready' message\n    __f__(\"log\", '[ocr] App webview mode', \" at pages/ocr/ocr.vue:148\");\n  },\n  methods: {\n    // ============ App webview mode ============\n    onWebviewLoad: function onWebviewLoad(e) {\n      __f__(\"log\", '[ocr] webview loaded:', e.detail, \" at pages/ocr/ocr.vue:155\");\n      this.webviewReady = true;\n    },\n    onWebviewError: function onWebviewError(e) {\n      __f__(\"error\", '[ocr] webview error:', e.detail, \" at pages/ocr/ocr.vue:160\");\n      uni.showToast({\n        title: 'Failed to load H5 sub-page',\n        icon: 'none'\n      });\n    },\n    onWebviewMessage: function onWebviewMessage(e) {\n      var _this = this;\n      __f__(\"log\", '[ocr] webview message:', e.detail, \" at pages/ocr/ocr.vue:165\");\n      // e.detail.data is an array\n      var messages = e.detail.data || [];\n      // ★ Guard against late/duplicate messages: ignore if the target page is already on top (navigateTo already took effect)\n      var pages = getCurrentPages();\n      var top = pages[pages.length - 1];\n      var alreadyOnResult = top && top.route && top.route.indexOf('pages/result/result') !== -1;\n      var alreadyOnSn7 = top && top.route && top.route.indexOf('pages/sn7/sn7') !== -1;\n      messages.forEach(function (msg) {\n        if (msg.action === 'ready') {\n          _this.webviewReady = true;\n        } else if (msg.action === 'cancel') {\n          // Cancel → go back to the previous page\n          uni.navigateBack();\n        } else if (msg.action === 'ocrShort' && msg.sn && !alreadyOnResult && !alreadyOnSn7) {\n          // ★ Fallback for the <17-char path: the webview normally jumps itself via\n          //   uni.webView.navigateTo to the sn7 fuzzy search page; handle the @message copy here\n          var sn = String(msg.sn).trim();\n          __f__(\"log\", '[ocr] Got ocrShort message, fallback jump to sn7 page:', sn, \" at pages/ocr/ocr.vue:183\");\n          uni.redirectTo({\n            url: \"/pages/sn7/sn7?suffix=\".concat(encodeURIComponent(sn))\n          });\n        } else if (msg.action === 'ocrResult' && msg.sn && !alreadyOnResult) {\n          // ★ Double safety: the normal path is the H5 sub-page jumping itself via uni.webView.navigateTo;\n          //   this is the fallback for ocrResult delivered via @message (that event only fires at certain times)\n          var _sn = String(msg.sn).trim();\n          __f__(\"log\", '[ocr] Got ocrResult message, fallback jump to result page:', _sn, \" at pages/ocr/ocr.vue:191\");\n          uni.redirectTo({\n            url: \"/pages/result/result?sn=\".concat(encodeURIComponent(_sn), \"&type=OCR&input=\").concat(encodeURIComponent(_sn))\n          });\n        }\n      });\n    },\n    onOcrResult: function onOcrResult(sn, source, confidence, matchType, inputSn) {\n      // Kept for compatibility, but effectively unreachable (the H5 sub-page jumps via navigateTo)\n      __f__(\"log\", '[ocr] result (legacy):', sn, source, confidence, 'matchType:', matchType, 'inputSn:', inputSn, \" at pages/ocr/ocr.vue:201\");\n      if (!sn || sn.length < this.snMinChars) {\n        uni.showToast({\n          title: 'SN too short',\n          icon: 'none'\n        });\n        return;\n      }\n      var params = [\"sn=\".concat(encodeURIComponent(sn)), \"type=OCR\"];\n      if (matchType) params.push(\"matchType=\".concat(encodeURIComponent(matchType)));\n      if (inputSn) params.push(\"input=\".concat(encodeURIComponent(inputSn)));\n      if (source) params.push(\"src=\".concat(encodeURIComponent(source)));\n      var query = params.join('&');\n      uni.reLaunch({\n        url: \"/pages/result/result?\".concat(query)\n      });\n    } // ============ H5/mini-program mode ============\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 1)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvb2NyL29jci52dWUiXSwibmFtZXMiOlsiZGF0YSIsInNob3J0VGV4dCIsInNob3J0TGVuIiwiaW1hZ2VQYXRoIiwibG9hZGluZyIsImxvYWRpbmdUZXh0IiwiY29uZmlybWluZyIsImNhbmRpZGF0ZXMiLCJzZWxlY3RlZEluZGV4Iiwic25JbnB1dCIsInNuTWluQ2hhcnMiLCJzbkZ1bGxDaGFycyIsIm9jck1vZGUiLCJ3ZWJ2aWV3UmVhZHkiLCJjb21wdXRlZCIsIndlYnZpZXdVcmwiLCJxdWVyeSIsImVuY29kZVVSSUNvbXBvbmVudCIsIm9uTG9hZCIsInRyaW0iLCJsZW5ndGgiLCJvblJlYWR5IiwibWV0aG9kcyIsIm9uV2Vidmlld0xvYWQiLCJlIiwiZGV0YWlsIiwib25XZWJ2aWV3RXJyb3IiLCJ1bmkiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJvbldlYnZpZXdNZXNzYWdlIiwibWVzc2FnZXMiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInRvcCIsImFscmVhZHlPblJlc3VsdCIsInJvdXRlIiwiaW5kZXhPZiIsImFscmVhZHlPblNuNyIsImZvckVhY2giLCJtc2ciLCJhY3Rpb24iLCJuYXZpZ2F0ZUJhY2siLCJzbiIsIlN0cmluZyIsInJlZGlyZWN0VG8iLCJ1cmwiLCJvbk9jclJlc3VsdCIsInNvdXJjZSIsImNvbmZpZGVuY2UiLCJtYXRjaFR5cGUiLCJpbnB1dFNuIiwicGFyYW1zIiwicHVzaCIsImpvaW4iLCJyZUxhdW5jaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQStHQTtBQUEwQztBQUFBO0FBL0cxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNoRyxDQUFDLENBQUM7UUFDSDtNQUNELENBQUMsQ0FBQztJQUNILENBQUM7SUFFREksV0FBVyx1QkFBQ0osRUFBRSxFQUFFSyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxPQUFPLEVBQUU7TUFDdkQ7TUFDQSxhQUFZLHdCQUF3QixFQUFFUixFQUFFLEVBQUVLLE1BQU0sRUFBRUMsVUFBVSxFQUFFLFlBQVksRUFBRUMsU0FBUyxFQUFFLFVBQVUsRUFBRUMsT0FBTztNQUMxRyxJQUFJLENBQUNSLEVBQUUsSUFBSUEsRUFBRSxDQUFDeEIsTUFBTSxHQUFHLElBQUksQ0FBQ1YsVUFBVSxFQUFFO1FBQ3ZDaUIsR0FBRyxDQUFDQyxTQUFTLENBQUM7VUFBRUMsS0FBSyxFQUFFLGNBQWM7VUFBRUMsSUFBSSxFQUFFO1FBQU8sQ0FBQyxDQUFDO1FBQ3REO01BQ0Q7TUFDQSxJQUFNdUIsTUFBTSxHQUFHLGNBQU9wQyxrQkFBa0IsQ0FBQzJCLEVBQUUsQ0FBQyxjQUFlO01BQzNELElBQUlPLFNBQVMsRUFBRUUsTUFBTSxDQUFDQyxJQUFJLHFCQUFjckMsa0JBQWtCLENBQUNrQyxTQUFTLENBQUMsRUFBRztNQUN4RSxJQUFJQyxPQUFPLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBSSxpQkFBVXJDLGtCQUFrQixDQUFDbUMsT0FBTyxDQUFDLEVBQUc7TUFDaEUsSUFBSUgsTUFBTSxFQUFFSSxNQUFNLENBQUNDLElBQUksZUFBUXJDLGtCQUFrQixDQUFDZ0MsTUFBTSxDQUFDLEVBQUc7TUFDNUQsSUFBTWpDLEtBQUssR0FBR3FDLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQztNQUM5QjVCLEdBQUcsQ0FBQzZCLFFBQVEsQ0FBQztRQUFFVCxHQUFHLGlDQUEwQi9CLEtBQUs7TUFBRyxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUdEO0VBb0xEO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjQyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG4vLyDimIUgVmVyaWZpY2F0aW9uIHVuaWZpZWQ6IGFmdGVyIGNvbmZpcm1pbmcgdGhlIFNOLCBqdW1wIHN0cmFpZ2h0IHRvIHRoZSByZXN1bHQgcGFnZTtcbi8vICAgcmVzdWx0LnZ1ZSdzIGRvQ2hlY2soKSAoZXhhY3Qg4oaSIGNvbmZ1c2FibGUgdmFyaWFudHMg4oaSIGRlZ3JhZGVkKSBkb2VzIHRoZSBjaGVja2luZywgc2FtZSBmbG93IGFzIGJhcmNvZGUgc2Nhbm5pbmdcbmltcG9ydCAqIGFzIGxvY2FsT2NyIGZyb20gJy4vbG9jYWwtb2NyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNob3J0VGV4dDogJycsXG5cdFx0XHRzaG9ydExlbjogMCxcblx0XHRcdGltYWdlUGF0aDogJycsXG5cdFx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRcdGxvYWRpbmdUZXh0OiAnJyxcblx0XHRcdGNvbmZpcm1pbmc6IGZhbHNlLCAgIC8vIOKYhSBjb25maXJtICYgdmVyaWZ5IGluIHByb2dyZXNzIChidXR0b24gZGlzYWJsZWQpXG5cdFx0XHRjYW5kaWRhdGVzOiBbXSxcblx0XHRcdHNlbGVjdGVkSW5kZXg6IC0xLFxuXHRcdFx0c25JbnB1dDogJycsICAgICAgLy8g4piFIGVkaXRhYmxlIFNOIChmaWxsZWQgYnkgdGFwcGluZyBhIGNhbmRpZGF0ZSwgZWRpdGFibGUgbWFudWFsbHkpXG5cdFx0XHRzbk1pbkNoYXJzOiA3LCAgICAvLyDimIUgbWluaW11bSBjaGFycyBmb3IgdGhlIFNOIGlucHV0IOKAlCBoaW50LCBidXR0b24gc3RhdGUgYW5kIGNvbmZpcm0gY2hlY2sgYWxsIHNoYXJlIHRoaXMgb25lIHJ1bGVcblx0XHRcdHNuRnVsbENoYXJzOiAxNywgIC8vIOKYhSBmdWxsLVNOIHRocmVzaG9sZCDigJQgPj0gdGhpczogZGlyZWN0IGNoZWNrIG9uIHRoZSByZXN1bHQgcGFnZTsgYmVsb3c6IHNuNyBmdXp6eSBzZWFyY2hcblx0XHRcdG9jck1vZGU6ICdhdXRvJywgIC8vIGF1dG8gLyBsb2NhbCAvIHNlcnZlclxuXHRcdFx0d2Vidmlld1JlYWR5OiBmYWxzZSxcblx0XHR9XG5cdH0sXG5cdGNvbXB1dGVkOiB7XG5cdFx0d2Vidmlld1VybCgpIHtcblxuXHRcdFx0Y29uc3QgcXVlcnkgPSBgP3Nob3J0VGV4dD0ke2VuY29kZVVSSUNvbXBvbmVudCh0aGlzLnNob3J0VGV4dCl9YFxuXHRcdFx0cmV0dXJuIGAvaHlicmlkL2h0bWwvb2NyL2luZGV4Lmh0bWwke3F1ZXJ5fWBcblxuXHRcdFx0cmV0dXJuICcnXG5cdFx0fVxuXHR9LFxuXHRvbkxvYWQocXVlcnkpIHtcblx0XHR0aGlzLnNob3J0VGV4dCA9IChxdWVyeS5zaG9ydFRleHQgfHwgJycpLnRyaW0oKVxuXHRcdHRoaXMuc2hvcnRMZW4gPSB0aGlzLnNob3J0VGV4dC5sZW5ndGhcblx0fSxcblxuXHRvblJlYWR5KCkge1xuXHRcdC8vIEFmdGVyIHRoZSBBcHAgd2VidmlldyBmaW5pc2hlcyBsb2FkaW5nLCBpdCBzZW5kcyBhICdyZWFkeScgbWVzc2FnZVxuXHRcdGNvbnNvbGUubG9nKCdbb2NyXSBBcHAgd2VidmlldyBtb2RlJylcblx0fSxcblxuXHRtZXRob2RzOiB7XG5cdFx0Ly8gPT09PT09PT09PT09IEFwcCB3ZWJ2aWV3IG1vZGUgPT09PT09PT09PT09XG5cblx0XHRvbldlYnZpZXdMb2FkKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdbb2NyXSB3ZWJ2aWV3IGxvYWRlZDonLCBlLmRldGFpbClcblx0XHRcdHRoaXMud2Vidmlld1JlYWR5ID0gdHJ1ZVxuXHRcdH0sXG5cblx0XHRvbldlYnZpZXdFcnJvcihlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdbb2NyXSB3ZWJ2aWV3IGVycm9yOicsIGUuZGV0YWlsKVxuXHRcdFx0dW5pLnNob3dUb2FzdCh7IHRpdGxlOiAnRmFpbGVkIHRvIGxvYWQgSDUgc3ViLXBhZ2UnLCBpY29uOiAnbm9uZScgfSlcblx0XHR9LFxuXG5cdFx0b25XZWJ2aWV3TWVzc2FnZShlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnW29jcl0gd2VidmlldyBtZXNzYWdlOicsIGUuZGV0YWlsKVxuXHRcdFx0Ly8gZS5kZXRhaWwuZGF0YSBpcyBhbiBhcnJheVxuXHRcdFx0Y29uc3QgbWVzc2FnZXMgPSBlLmRldGFpbC5kYXRhIHx8IFtdXG5cdFx0XHQvLyDimIUgR3VhcmQgYWdhaW5zdCBsYXRlL2R1cGxpY2F0ZSBtZXNzYWdlczogaWdub3JlIGlmIHRoZSB0YXJnZXQgcGFnZSBpcyBhbHJlYWR5IG9uIHRvcCAobmF2aWdhdGVUbyBhbHJlYWR5IHRvb2sgZWZmZWN0KVxuXHRcdFx0Y29uc3QgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKVxuXHRcdFx0Y29uc3QgdG9wID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV1cblx0XHRcdGNvbnN0IGFscmVhZHlPblJlc3VsdCA9IHRvcCAmJiB0b3Aucm91dGUgJiYgdG9wLnJvdXRlLmluZGV4T2YoJ3BhZ2VzL3Jlc3VsdC9yZXN1bHQnKSAhPT0gLTFcblx0XHRcdGNvbnN0IGFscmVhZHlPblNuNyA9IHRvcCAmJiB0b3Aucm91dGUgJiYgdG9wLnJvdXRlLmluZGV4T2YoJ3BhZ2VzL3NuNy9zbjcnKSAhPT0gLTFcblx0XHRcdG1lc3NhZ2VzLmZvckVhY2gobXNnID0+IHtcblx0XHRcdFx0aWYgKG1zZy5hY3Rpb24gPT09ICdyZWFkeScpIHtcblx0XHRcdFx0XHR0aGlzLndlYnZpZXdSZWFkeSA9IHRydWVcblx0XHRcdFx0fSBlbHNlIGlmIChtc2cuYWN0aW9uID09PSAnY2FuY2VsJykge1xuXHRcdFx0XHRcdC8vIENhbmNlbCDihpIgZ28gYmFjayB0byB0aGUgcHJldmlvdXMgcGFnZVxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKVxuXHRcdFx0XHR9IGVsc2UgaWYgKG1zZy5hY3Rpb24gPT09ICdvY3JTaG9ydCcgJiYgbXNnLnNuICYmICFhbHJlYWR5T25SZXN1bHQgJiYgIWFscmVhZHlPblNuNykge1xuXHRcdFx0XHRcdC8vIOKYhSBGYWxsYmFjayBmb3IgdGhlIDwxNy1jaGFyIHBhdGg6IHRoZSB3ZWJ2aWV3IG5vcm1hbGx5IGp1bXBzIGl0c2VsZiB2aWFcblx0XHRcdFx0XHQvLyAgIHVuaS53ZWJWaWV3Lm5hdmlnYXRlVG8gdG8gdGhlIHNuNyBmdXp6eSBzZWFyY2ggcGFnZTsgaGFuZGxlIHRoZSBAbWVzc2FnZSBjb3B5IGhlcmVcblx0XHRcdFx0XHRjb25zdCBzbiA9IFN0cmluZyhtc2cuc24pLnRyaW0oKVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdbb2NyXSBHb3Qgb2NyU2hvcnQgbWVzc2FnZSwgZmFsbGJhY2sganVtcCB0byBzbjcgcGFnZTonLCBzbilcblx0XHRcdFx0XHR1bmkucmVkaXJlY3RUbyh7XG5cdFx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvc243L3NuNz9zdWZmaXg9JHtlbmNvZGVVUklDb21wb25lbnQoc24pfWBcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9IGVsc2UgaWYgKG1zZy5hY3Rpb24gPT09ICdvY3JSZXN1bHQnICYmIG1zZy5zbiAmJiAhYWxyZWFkeU9uUmVzdWx0KSB7XG5cdFx0XHRcdFx0Ly8g4piFIERvdWJsZSBzYWZldHk6IHRoZSBub3JtYWwgcGF0aCBpcyB0aGUgSDUgc3ViLXBhZ2UganVtcGluZyBpdHNlbGYgdmlhIHVuaS53ZWJWaWV3Lm5hdmlnYXRlVG87XG5cdFx0XHRcdFx0Ly8gICB0aGlzIGlzIHRoZSBmYWxsYmFjayBmb3Igb2NyUmVzdWx0IGRlbGl2ZXJlZCB2aWEgQG1lc3NhZ2UgKHRoYXQgZXZlbnQgb25seSBmaXJlcyBhdCBjZXJ0YWluIHRpbWVzKVxuXHRcdFx0XHRcdGNvbnN0IHNuID0gU3RyaW5nKG1zZy5zbikudHJpbSgpXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1tvY3JdIEdvdCBvY3JSZXN1bHQgbWVzc2FnZSwgZmFsbGJhY2sganVtcCB0byByZXN1bHQgcGFnZTonLCBzbilcblx0XHRcdFx0XHR1bmkucmVkaXJlY3RUbyh7XG5cdFx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvcmVzdWx0L3Jlc3VsdD9zbj0ke2VuY29kZVVSSUNvbXBvbmVudChzbil9JnR5cGU9T0NSJmlucHV0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNuKX1gXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9LFxuXG5cdFx0b25PY3JSZXN1bHQoc24sIHNvdXJjZSwgY29uZmlkZW5jZSwgbWF0Y2hUeXBlLCBpbnB1dFNuKSB7XG5cdFx0XHQvLyBLZXB0IGZvciBjb21wYXRpYmlsaXR5LCBidXQgZWZmZWN0aXZlbHkgdW5yZWFjaGFibGUgKHRoZSBINSBzdWItcGFnZSBqdW1wcyB2aWEgbmF2aWdhdGVUbylcblx0XHRcdGNvbnNvbGUubG9nKCdbb2NyXSByZXN1bHQgKGxlZ2FjeSk6Jywgc24sIHNvdXJjZSwgY29uZmlkZW5jZSwgJ21hdGNoVHlwZTonLCBtYXRjaFR5cGUsICdpbnB1dFNuOicsIGlucHV0U24pXG5cdFx0XHRpZiAoIXNuIHx8IHNuLmxlbmd0aCA8IHRoaXMuc25NaW5DaGFycykge1xuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHsgdGl0bGU6ICdTTiB0b28gc2hvcnQnLCBpY29uOiAnbm9uZScgfSlcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYXJhbXMgPSBbYHNuPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNuKX1gLCBgdHlwZT1PQ1JgXVxuXHRcdFx0aWYgKG1hdGNoVHlwZSkgcGFyYW1zLnB1c2goYG1hdGNoVHlwZT0ke2VuY29kZVVSSUNvbXBvbmVudChtYXRjaFR5cGUpfWApXG5cdFx0XHRpZiAoaW5wdXRTbikgcGFyYW1zLnB1c2goYGlucHV0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0U24pfWApXG5cdFx0XHRpZiAoc291cmNlKSBwYXJhbXMucHVzaChgc3JjPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNvdXJjZSl9YClcblx0XHRcdGNvbnN0IHF1ZXJ5ID0gcGFyYW1zLmpvaW4oJyYnKVxuXHRcdFx0dW5pLnJlTGF1bmNoKHsgdXJsOiBgL3BhZ2VzL3Jlc3VsdC9yZXN1bHQ/JHtxdWVyeX1gIH0pXG5cdFx0fSxcblxuXG5cdFx0Ly8gPT09PT09PT09PT09IEg1L21pbmktcHJvZ3JhbSBtb2RlID09PT09PT09PT09PVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!********************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/ocr/local-ocr.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports._tesseractWorker = void 0;\nexports.destroy = destroy;\nexports.findRedBox = findRedBox;\nexports.findSnRowAboveBarcode = findSnRowAboveBarcode;\nexports.findTextRegion = findTextRegion;\nexports.loadTesseract = loadTesseract;\nexports.preprocess = preprocess;\nexports.recognizeSnFromImage = recognizeSnFromImage;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 13));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 3));\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 20));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 15));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n// pages/ocr/local-ocr.js\n// Pure front-end OCR module: Canvas preprocessing + Tesseract.js\n// For: H5 / WebView environments\n// Supports both ES Module (import) and script-tag loading (window.SnOcr)\n\n// ============== ESM exports ==============\nvar _tesseractWorker = null;\n\n/** Inject a <script> tag (document-relative; immune to webpack analysis and import()'s module-relative resolution) */\nexports._tesseractWorker = _tesseractWorker;\nfunction loadScript(src) {\n  return new Promise(function (resolve, reject) {\n    var s = document.createElement('script');\n    s.src = src;\n    s.onload = function () {\n      return resolve();\n    };\n    s.onerror = function () {\n      return reject(new Error('failed to load ' + src));\n    };\n    document.head.appendChild(s);\n  });\n}\n\n/**\n * Load Tesseract.js (lazy, ~15MB on first load)\n * ★ Loads the UMD build via a <script> tag and uses window.Tesseract — same proven\n *   pattern as the zxing loader in scan-h5. Local assets first (static/tesseract/,\n *   bundled with the H5 build — the unpkg/tessdata CDNs are unreliable from mainland\n *   browsers); each candidate falls through on load error, CDN as last resort.\n */\nfunction loadTesseract() {\n  return _loadTesseract.apply(this, arguments);\n}\n/**\n * Find the red box in the image (the detection region marked by the user)\n * Red box color: R>180, G<120, B<120\n */\nfunction _loadTesseract() {\n  _loadTesseract = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n    var pageDir, candidates, Tesseract, BASE, _i2, _candidates, base, cdn, paths;\n    return _regenerator.default.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!_tesseractWorker) {\n              _context.next = 2;\n              break;\n            }\n            return _context.abrupt(\"return\", _tesseractWorker);\n          case 2:\n            pageDir = location.pathname.replace(/[^/]*$/, '');\n            candidates = [pageDir + 'static/tesseract/', '/static/tesseract/'];\n            Tesseract = null;\n            BASE = '';\n            _i2 = 0, _candidates = candidates;\n          case 7:\n            if (!(_i2 < _candidates.length)) {\n              _context.next = 23;\n              break;\n            }\n            base = _candidates[_i2];\n            _context.prev = 9;\n            _context.next = 12;\n            return loadScript(base + 'tesseract.min.js');\n          case 12:\n            Tesseract = window.Tesseract;\n            BASE = base;\n            return _context.abrupt(\"break\", 23);\n          case 17:\n            _context.prev = 17;\n            _context.t0 = _context[\"catch\"](9);\n            __f__(\"warn\", '[ocr] load failed from', base, _context.t0.message, \" at pages/ocr/local-ocr.js:40\");\n          case 20:\n            _i2++;\n            _context.next = 7;\n            break;\n          case 23:\n            if (!(!Tesseract || !Tesseract.createWorker)) {\n              _context.next = 30;\n              break;\n            }\n            __f__(\"warn\", '[ocr] local tesseract missing, falling back to CDN', \" at pages/ocr/local-ocr.js:44\");\n            cdn = ['https://unpkg.com/tesseract.js@', '5.1.1', '/dist/tesseract.min.js'].join('');\n            _context.next = 28;\n            return loadScript(cdn);\n          case 28:\n            Tesseract = window.Tesseract;\n            BASE = '';\n          case 30:\n            if (!(!Tesseract || !Tesseract.createWorker)) {\n              _context.next = 32;\n              break;\n            }\n            throw new Error('tesseract failed to load');\n          case 32:\n            __f__(\"log\", '[ocr] tesseract base:', BASE || 'CDN', \" at pages/ocr/local-ocr.js:53\");\n            paths = BASE ? {\n              workerPath: BASE + 'worker.min.js',\n              corePath: BASE,\n              langPath: BASE + 'lang',\n              gzip: true\n            } : {\n              workerPath: 'https://unpkg.com/tesseract.js@5.1.1/dist/worker.min.js',\n              corePath: 'https://unpkg.com/tesseract.js-core@5.0.0',\n              langPath: 'https://tessdata.projectnaptha.com/4.0.0',\n              gzip: true\n            };\n            _context.next = 36;\n            return Tesseract.createWorker('eng', 1, _objectSpread(_objectSpread({}, paths), {}, {\n              logger: function logger(m) {/* console.log('[tess]', m) */}\n            }));\n          case 36:\n            exports._tesseractWorker = _tesseractWorker = _context.sent;\n            _context.next = 39;\n            return _tesseractWorker.setParameters({\n              tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:. ',\n              tessedit_pageseg_mode: '6' // PSM 6 single-block mode (more stable for ANTMINER labels)\n            });\n          case 39:\n            return _context.abrupt(\"return\", _tesseractWorker);\n          case 40:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[9, 17]]);\n  }));\n  return _loadTesseract.apply(this, arguments);\n}\nfunction findRedBox(canvas) {\n  var ctx = canvas.getContext('2d');\n  var w = canvas.width,\n    h = canvas.height;\n  if (!w || !h) return null;\n  var imgData = ctx.getImageData(0, 0, w, h);\n  var d = imgData.data;\n  var minX = w,\n    minY = h,\n    maxX = 0,\n    maxY = 0;\n  var count = 0;\n  for (var y = 0; y < h; y += 2) {\n    for (var x = 0; x < w; x += 2) {\n      var i = (y * w + x) * 4;\n      var r = d[i],\n        g = d[i + 1],\n        b = d[i + 2];\n      if (r > 180 && g < 120 && b < 120) {\n        if (x < minX) minX = x;\n        if (x > maxX) maxX = x;\n        if (y < minY) minY = y;\n        if (y > maxY) maxY = y;\n        count++;\n      }\n    }\n  }\n  if (count < 100) return null;\n  return {\n    x: minX - 10,\n    y: minY - 10,\n    w: maxX - minX + 20,\n    h: maxY - minY + 20\n  };\n}\n\n/** Grayscale + Otsu threshold → Uint8Array (1 = dark print) */\nfunction binarizeOtsu(imgData, ww, hh) {\n  var d = imgData.data;\n  var gray = new Uint8Array(ww * hh);\n  var hist = new Int32Array(256);\n  for (var i = 0; i < ww * hh; i++) {\n    var j = i * 4;\n    var g = Math.round(0.299 * d[j] + 0.587 * d[j + 1] + 0.114 * d[j + 2]);\n    gray[i] = g;\n    hist[g]++;\n  }\n  var total = ww * hh;\n  var sum = 0;\n  for (var t = 0; t < 256; t++) {\n    sum += t * hist[t];\n  }\n  var sumB = 0,\n    wB = 0,\n    bestVar = -1,\n    thresh = 128;\n  for (var _t = 0; _t < 256; _t++) {\n    wB += hist[_t];\n    if (!wB) continue;\n    var wF = total - wB;\n    if (!wF) break;\n    sumB += _t * hist[_t];\n    var mB = sumB / wB,\n      mF = (sum - sumB) / wF;\n    var v = wB * wF * (mB - mF) * (mB - mF);\n    if (v > bestVar) {\n      bestVar = v;\n      thresh = _t;\n    }\n  }\n  var dark = new Uint8Array(ww * hh);\n  for (var _i = 0; _i < ww * hh; _i++) {\n    dark[_i] = gray[_i] <= thresh ? 1 : 0;\n  }\n  return dark;\n}\n\n/** Shared downscale helper for the barcode/SN-row detectors */\nfunction downscaleTo(canvas, maxDim) {\n  var w = canvas.width,\n    h = canvas.height;\n  if (Math.max(w, h) <= maxDim) return {\n    canvas: canvas,\n    scale: 1\n  };\n  var scale = maxDim / Math.max(w, h);\n  var c = document.createElement('canvas');\n  c.width = Math.floor(w * scale);\n  c.height = Math.floor(h * scale);\n  c.getContext('2d').drawImage(canvas, 0, 0, c.width, c.height);\n  return {\n    canvas: c,\n    scale: scale\n  };\n}\n\n/**\n * ★ Detect the barcode and return the SN text row directly ABOVE it.\n *   ANTMINER labels print the SN line right above the barcode, so by locating the\n *   barcode we can OCR ONLY that line — the model name and everything else are excluded.\n *\n * Barcode detection: barcode rows have many black/white transitions; among the candidate\n * bands the barcode is the LOWEST one (text rows always sit above it).\n *\n * SN row extraction: in a window above the barcode (small gap + 1.1x barcode height),\n * find contiguous runs of ink rows and pick the one closest to the barcode that is still\n * reasonably tall (>= 60% of the tallest run).\n *\n * @returns {{barcode:{x,y,w,h}, region:{x,y,w,h}}|{barcode:{x,y,w,h}}|null} rects in ORIGINAL image coords\n */\nfunction findSnRowAboveBarcode(canvas) {\n  var w = canvas.width,\n    h = canvas.height;\n  if (!w || !h) return null;\n  var _downscaleTo = downscaleTo(canvas, 800),\n    wc = _downscaleTo.canvas,\n    scale = _downscaleTo.scale;\n  var ww = wc.width,\n    hh = wc.height;\n  var dark = binarizeOtsu(wc.getContext('2d').getImageData(0, 0, ww, hh), ww, hh);\n\n  // ---- 1) barcode band = the LOWEST band of high-transition rows ----\n  var trans = new Int32Array(hh);\n  for (var y = 0; y < hh; y++) {\n    var t = 0;\n    for (var x = 1; x < ww; x++) {\n      if (dark[y * ww + x] !== dark[y * ww + x - 1]) t++;\n    }\n    trans[y] = t;\n  }\n  var MIN_TRANS = Math.max(16, Math.floor(ww * 0.03));\n  var barLike = new Uint8Array(hh);\n  for (var _y = 0; _y < hh; _y++) {\n    if (trans[_y] >= MIN_TRANS) barLike[_y] = 1;\n  }\n  var band = null;\n  for (var _y2 = 0; _y2 < hh; _y2++) {\n    if (!barLike[_y2]) continue;\n    var end = _y2,\n      holes = 0;\n    for (var k = _y2 + 1; k < hh; k++) {\n      if (barLike[k]) {\n        end = k;\n        holes = 0;\n      } else if (++holes > 2) break;\n    }\n    if (end - _y2 + 1 >= 12) {\n      var sum = 0,\n        n = 0;\n      for (var _k = _y2; _k <= end; _k++) {\n        if (barLike[_k]) {\n          sum += trans[_k];\n          n++;\n        }\n      }\n      var meanTrans = n ? sum / n : 0;\n      if (meanTrans >= 25 && (!band || _y2 > band.y0)) band = {\n        y0: _y2,\n        y1: end\n      };\n    }\n    _y2 = end + 1;\n  }\n  if (!band) return null;\n\n  // barcode x-range: columns dark through most of the band (hole-tolerant run)\n  var bandH = band.y1 - band.y0 + 1;\n  var colDark = new Int32Array(ww);\n  for (var _y3 = band.y0; _y3 <= band.y1; _y3++) {\n    for (var _x = 0; _x < ww; _x++) {\n      if (dark[_y3 * ww + _x]) colDark[_x]++;\n    }\n  }\n  var gapAllow = Math.max(4, Math.floor(ww * 0.03));\n  var bx0 = -1,\n    bx1 = -1,\n    runStart = -1,\n    runEnd = -1,\n    gap = 0;\n  for (var _x2 = 0; _x2 < ww; _x2++) {\n    var dense = colDark[_x2] >= bandH * 0.4;\n    if (dense) {\n      if (runStart < 0) runStart = _x2;\n      runEnd = _x2;\n      gap = 0;\n    } else if (runStart >= 0 && ++gap > gapAllow) {\n      if (runEnd - runStart > bx1 - bx0) {\n        bx0 = runStart;\n        bx1 = runEnd;\n      }\n      runStart = -1;\n      gap = 0;\n    }\n  }\n  if (runStart >= 0 && runEnd - runStart > bx1 - bx0) {\n    bx0 = runStart;\n    bx1 = runEnd;\n  }\n  if (bx0 < 0) return null;\n  var inv = 1 / scale;\n  var barcode = {\n    x: Math.max(0, Math.floor(bx0 * inv)),\n    y: Math.max(0, Math.floor(band.y0 * inv)),\n    w: Math.floor((bx1 - bx0 + 1) * inv),\n    h: Math.floor((band.y1 - band.y0 + 1) * inv)\n  };\n\n  // ---- 2) SN text row above the barcode ----\n  var barHw = Math.max(1, Math.round(barcode.h * scale));\n  var gapW = Math.max(2, Math.round(barHw * 0.08));\n  var winH = Math.max(10, Math.round(barHw * 1.1));\n  var y1 = Math.round(barcode.y * scale) - gapW;\n  if (y1 <= 0) return {\n    barcode: barcode\n  };\n  var y0 = Math.max(0, y1 - winH);\n  var mx = Math.round((bx1 - bx0 + 1) * 0.15);\n  var x0 = Math.max(0, bx0 - mx);\n  var x1 = Math.min(ww - 1, bx1 + mx);\n  var counts = [];\n  var maxC = 0;\n  for (var _y4 = y0; _y4 < y1; _y4++) {\n    var c = 0;\n    for (var _x3 = x0; _x3 <= x1; _x3++) {\n      if (dark[_y4 * ww + _x3]) c++;\n    }\n    counts.push({\n      y: _y4,\n      c: c\n    });\n    if (c > maxC) maxC = c;\n  }\n  if (maxC < 8) return {\n    barcode: barcode\n  };\n  // contiguous runs of ink rows (count >= 25% of the max row)\n  var th = maxC * 0.25;\n  var runs = [];\n  var i = 0;\n  while (i < counts.length) {\n    if (counts[i].c < th) {\n      i++;\n      continue;\n    }\n    var j = i;\n    while (j + 1 < counts.length && counts[j + 1].c >= th) {\n      j++;\n    }\n    runs.push({\n      top: counts[i].y,\n      bottom: counts[j].y\n    });\n    i = j + 1;\n  }\n  if (!runs.length) return {\n    barcode: barcode\n  };\n  // ★ pick the run closest to the barcode that is still reasonably tall\n  var maxH2 = Math.max.apply(Math, (0, _toConsumableArray2.default)(runs.map(function (r) {\n    return r.bottom - r.top + 1;\n  })));\n  var chosen = null;\n  for (var _k2 = runs.length - 1; _k2 >= 0; _k2--) {\n    if (runs[_k2].bottom - runs[_k2].top + 1 >= maxH2 * 0.6) {\n      chosen = runs[_k2];\n      break;\n    }\n  }\n  if (!chosen) chosen = runs[runs.length - 1];\n  if (chosen.bottom - chosen.top + 1 < 5) return {\n    barcode: barcode\n  };\n  var pad = 4; // work px, breathing room for ascenders/anti-aliasing\n  return {\n    barcode: barcode,\n    region: {\n      x: Math.max(0, Math.floor(x0 * inv)),\n      y: Math.max(0, Math.floor((chosen.top - pad) * inv)),\n      w: Math.floor((x1 - x0 + 1) * inv),\n      h: Math.floor((chosen.bottom - chosen.top + 1 + pad * 2) * inv)\n    }\n  };\n}\n\n/**\n * Automatically find the text region (when no red box is marked)\n */\nfunction findTextRegion(canvas) {\n  var ctx = canvas.getContext('2d');\n  var w = canvas.width,\n    h = canvas.height;\n  var imgData = ctx.getImageData(0, 0, w, h);\n  var d = imgData.data;\n  var gray = new Uint8ClampedArray(w * h);\n  for (var i = 0; i < w * h; i++) {\n    var j = i * 4;\n    gray[i] = 0.299 * d[j] + 0.587 * d[j + 1] + 0.114 * d[j + 2];\n  }\n  var rowAvg = [];\n  for (var y = 0; y < h; y++) {\n    var sum = 0;\n    for (var x = 0; x < w; x++) {\n      sum += gray[y * w + x];\n    }\n    rowAvg.push(sum / w);\n  }\n  var sorted = [].concat(rowAvg).map(function (v, i) {\n    return {\n      v: v,\n      i: i\n    };\n  }).sort(function (a, b) {\n    return a.v - b.v;\n  });\n  var topRows = sorted.slice(0, Math.max(8, Math.floor(h * 0.1))).map(function (x) {\n    return x.i;\n  });\n  var minY = Math.min.apply(Math, (0, _toConsumableArray2.default)(topRows)),\n    maxY = Math.max.apply(Math, (0, _toConsumableArray2.default)(topRows));\n  return {\n    x: 0,\n    y: minY,\n    w: w,\n    h: maxY - minY\n  };\n}\n\n/**\n * Canvas preprocessing: crop + grayscale + upscale + contrast enhancement\n */\nfunction preprocess(canvas, region) {\n  var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;\n  var srcX = region.x,\n    srcY = region.y;\n  var srcW = region.w,\n    srcH = region.h;\n  if (srcW <= 0 || srcH <= 0) return canvas;\n  var out = document.createElement('canvas');\n  out.width = srcW * scale;\n  out.height = srcH * scale;\n  var ctx = out.getContext('2d');\n  ctx.imageSmoothingEnabled = true;\n  ctx.imageSmoothingQuality = 'high';\n  ctx.drawImage(canvas, srcX, srcY, srcW, srcH, 0, 0, out.width, out.height);\n  var imgData = ctx.getImageData(0, 0, out.width, out.height);\n  var d = imgData.data;\n  for (var i = 0; i < d.length; i += 4) {\n    var g = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];\n    g = (g - 128) * 1.5 + 128;\n    g = Math.max(0, Math.min(255, g));\n    d[i] = d[i + 1] = d[i + 2] = g;\n  }\n  ctx.putImageData(imgData, 0, 0);\n  return out;\n}\n\n/**\n * Recognize the SN in an image\n * ★ Region priority: manual > red box > SN row above the barcode (primary — OCR only\n *   that line) > generic text region (fallback when the barcode row yields nothing)\n */\nfunction recognizeSnFromImage(_x4) {\n  return _recognizeSnFromImage.apply(this, arguments);\n}\nfunction _recognizeSnFromImage() {\n  _recognizeSnFromImage = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(imagePath) {\n    var options,\n      onProgress,\n      manualRegion,\n      canvas,\n      region,\n      usedBarcodeRow,\n      hit,\n      preprocessed,\n      worker,\n      _yield$worker$recogni,\n      data,\n      rawText,\n      candidates,\n      fallback,\n      r2,\n      _args2 = arguments;\n    return _regenerator.default.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            options = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};\n            onProgress = options.onProgress, manualRegion = options.manualRegion;\n            if (onProgress) onProgress({\n              stage: 'load',\n              percent: 5\n            });\n            _context2.next = 5;\n            return loadImageToCanvas(imagePath);\n          case 5:\n            canvas = _context2.sent;\n            region = manualRegion;\n            usedBarcodeRow = false;\n            if (!region) {\n              region = findRedBox(canvas);\n            }\n            if (!region) {\n              hit = findSnRowAboveBarcode(canvas);\n              if (hit && hit.region) {\n                region = hit.region;\n                usedBarcodeRow = true;\n                __f__(\"log\", '[ocr] Barcode:', hit.barcode, '→ SN row above:', hit.region, \" at pages/ocr/local-ocr.js:347\");\n              } else if (hit && hit.barcode) {\n                __f__(\"log\", '[ocr] Barcode found but no text row above:', hit.barcode, \" at pages/ocr/local-ocr.js:349\");\n              }\n            }\n            if (!region) {\n              region = findTextRegion(canvas);\n            }\n            if (onProgress) onProgress({\n              stage: 'preprocess',\n              percent: 30\n            });\n            preprocessed = preprocess(canvas, region, 4);\n            if (onProgress) onProgress({\n              stage: 'ocr-load',\n              percent: 40\n            });\n            _context2.next = 16;\n            return loadTesseract();\n          case 16:\n            worker = _context2.sent;\n            if (onProgress) onProgress({\n              stage: 'ocr-run',\n              percent: 50\n            });\n            _context2.next = 20;\n            return worker.recognize(preprocessed);\n          case 20:\n            _yield$worker$recogni = _context2.sent;\n            data = _yield$worker$recogni.data;\n            rawText = data.text;\n            if (onProgress) onProgress({\n              stage: 'parse',\n              percent: 95\n            });\n            candidates = parseSnCandidates(rawText, data.words || []); // ★ Fallback: the barcode row gave no SN-sized candidate → redo with the generic text region\n            if (!(usedBarcodeRow && !candidates.some(function (c) {\n              return c.text.length >= 14;\n            }))) {\n              _context2.next = 35;\n              break;\n            }\n            __f__(\"log\", '[ocr] No SN-sized candidate from the barcode row, falling back to text region', \" at pages/ocr/local-ocr.js:371\");\n            fallback = findTextRegion(canvas);\n            if (!fallback) {\n              _context2.next = 35;\n              break;\n            }\n            preprocessed = preprocess(canvas, fallback, 4);\n            _context2.next = 32;\n            return worker.recognize(preprocessed);\n          case 32:\n            r2 = _context2.sent;\n            rawText = r2.data.text;\n            candidates = parseSnCandidates(rawText, r2.data.words || []);\n          case 35:\n            if (onProgress) onProgress({\n              stage: 'done',\n              percent: 100\n            });\n            return _context2.abrupt(\"return\", {\n              candidates: candidates,\n              rawText: rawText\n            });\n          case 37:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _recognizeSnFromImage.apply(this, arguments);\n}\nfunction parseSnCandidates(text, words) {\n  var candidates = [];\n  words.forEach(function (w) {\n    var t = (w.text || '').replace(/[^A-Z0-9]/gi, '').toUpperCase();\n    if (t.length >= 17) {\n      candidates.push({\n        text: t,\n        confidence: Math.round(w.confidence || 80)\n      });\n    }\n  });\n  if (candidates.length === 0) {\n    var clean = text.replace(/[^A-Z0-9]/gi, '').toUpperCase();\n    var matches = clean.match(/[A-Z0-9]{17,}/g) || [];\n    matches.forEach(function (m) {\n      return candidates.push({\n        text: m,\n        confidence: 70\n      });\n    });\n  }\n  var seen = new Set();\n  return candidates.filter(function (c) {\n    return !seen.has(c.text) && seen.add(c.text);\n  }).sort(function (a, b) {\n    return b.confidence - a.confidence;\n  }).slice(0, 5);\n}\nfunction loadImageToCanvas(filePath) {\n  return new Promise(function (resolve, reject) {\n    var img = new Image();\n    img.crossOrigin = 'anonymous';\n    img.onload = function () {\n      var canvas = document.createElement('canvas');\n      canvas.width = img.naturalWidth;\n      canvas.height = img.naturalHeight;\n      var ctx = canvas.getContext('2d');\n      ctx.drawImage(img, 0, 0);\n      resolve(canvas);\n    };\n    img.onerror = function (e) {\n      return reject(new Error('Image failed to load: ' + (e.message || e)));\n    };\n    img.src = filePath;\n  });\n}\nfunction destroy() {\n  return _destroy.apply(this, arguments);\n} // ============== UMD compatibility (script-tag loading) ==============\nfunction _destroy() {\n  _destroy = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n    return _regenerator.default.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            if (!_tesseractWorker) {\n              _context3.next = 4;\n              break;\n            }\n            _context3.next = 3;\n            return _tesseractWorker.terminate();\n          case 3:\n            exports._tesseractWorker = _tesseractWorker = null;\n          case 4:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _destroy.apply(this, arguments);\n}\nif (typeof window !== 'undefined') {\n  window.SnOcr = {\n    loadTesseract: loadTesseract,\n    findRedBox: findRedBox,\n    findTextRegion: findTextRegion,\n    findSnRowAboveBarcode: findSnRowAboveBarcode,\n    preprocess: preprocess,\n    recognizeSnFromImage: recognizeSnFromImage,\n    destroy: destroy,\n    parseSnCandidates: parseSnCandidates\n  };\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 1)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvb2NyL2xvY2FsLW9jci5qcyJdLCJuYW1lcyI6WyJfdGVzc2VyYWN0V29ya2VyIiwibG9hZFNjcmlwdCIsInNyYyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJFcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsImxvYWRUZXNzZXJhY3QiLCJwYWdlRGlyIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlcGxhY2UiLCJjYW5kaWRhdGVzIiwiVGVzc2VyYWN0IiwiQkFTRSIsImJhc2UiLCJ3aW5kb3ciLCJtZXNzYWdlIiwiY3JlYXRlV29ya2VyIiwiY2RuIiwiam9pbiIsInBhdGhzIiwid29ya2VyUGF0aCIsImNvcmVQYXRoIiwibGFuZ1BhdGgiLCJnemlwIiwibG9nZ2VyIiwibSIsInNldFBhcmFtZXRlcnMiLCJ0ZXNzZWRpdF9jaGFyX3doaXRlbGlzdCIsInRlc3NlZGl0X3BhZ2VzZWdfbW9kZSIsImZpbmRSZWRCb3giLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImltZ0RhdGEiLCJnZXRJbWFnZURhdGEiLCJkIiwiZGF0YSIsIm1pblgiLCJtaW5ZIiwibWF4WCIsIm1heFkiLCJjb3VudCIsInkiLCJ4IiwiaSIsInIiLCJnIiwiYiIsImJpbmFyaXplT3RzdSIsInd3IiwiaGgiLCJncmF5IiwiVWludDhBcnJheSIsImhpc3QiLCJJbnQzMkFycmF5IiwiaiIsIk1hdGgiLCJyb3VuZCIsInRvdGFsIiwic3VtIiwidCIsInN1bUIiLCJ3QiIsImJlc3RWYXIiLCJ0aHJlc2giLCJ3RiIsIm1CIiwibUYiLCJ2IiwiZGFyayIsImRvd25zY2FsZVRvIiwibWF4RGltIiwibWF4Iiwic2NhbGUiLCJjIiwiZmxvb3IiLCJkcmF3SW1hZ2UiLCJmaW5kU25Sb3dBYm92ZUJhcmNvZGUiLCJ3YyIsInRyYW5zIiwiTUlOX1RSQU5TIiwiYmFyTGlrZSIsImJhbmQiLCJlbmQiLCJob2xlcyIsImsiLCJuIiwibWVhblRyYW5zIiwieTAiLCJ5MSIsImJhbmRIIiwiY29sRGFyayIsImdhcEFsbG93IiwiYngwIiwiYngxIiwicnVuU3RhcnQiLCJydW5FbmQiLCJnYXAiLCJkZW5zZSIsImludiIsImJhcmNvZGUiLCJiYXJIdyIsImdhcFciLCJ3aW5IIiwibXgiLCJ4MCIsIngxIiwibWluIiwiY291bnRzIiwibWF4QyIsInB1c2giLCJ0aCIsInJ1bnMiLCJsZW5ndGgiLCJ0b3AiLCJib3R0b20iLCJtYXhIMiIsIm1hcCIsImNob3NlbiIsInBhZCIsInJlZ2lvbiIsImZpbmRUZXh0UmVnaW9uIiwiVWludDhDbGFtcGVkQXJyYXkiLCJyb3dBdmciLCJzb3J0ZWQiLCJzb3J0IiwiYSIsInRvcFJvd3MiLCJzbGljZSIsInByZXByb2Nlc3MiLCJzcmNYIiwic3JjWSIsInNyY1ciLCJzcmNIIiwib3V0IiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiaW1hZ2VTbW9vdGhpbmdRdWFsaXR5IiwicHV0SW1hZ2VEYXRhIiwicmVjb2duaXplU25Gcm9tSW1hZ2UiLCJpbWFnZVBhdGgiLCJvcHRpb25zIiwib25Qcm9ncmVzcyIsIm1hbnVhbFJlZ2lvbiIsInN0YWdlIiwicGVyY2VudCIsImxvYWRJbWFnZVRvQ2FudmFzIiwidXNlZEJhcmNvZGVSb3ciLCJoaXQiLCJwcmVwcm9jZXNzZWQiLCJ3b3JrZXIiLCJyZWNvZ25pemUiLCJyYXdUZXh0IiwidGV4dCIsInBhcnNlU25DYW5kaWRhdGVzIiwid29yZHMiLCJzb21lIiwiZmFsbGJhY2siLCJyMiIsImZvckVhY2giLCJ0b1VwcGVyQ2FzZSIsImNvbmZpZGVuY2UiLCJjbGVhbiIsIm1hdGNoZXMiLCJtYXRjaCIsInNlZW4iLCJTZXQiLCJmaWx0ZXIiLCJoYXMiLCJhZGQiLCJmaWxlUGF0aCIsImltZyIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJuYXR1cmFsV2lkdGgiLCJuYXR1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QkFBZ0IsR0FBRyxJQUFJO1VBQUE7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBO0VBQUEsQ0FFeEI7RUFBQTtBQUFBO0FBR0QsSUFBSSxPQUFPdUIsTUFBTSxLQUFLLFdBQVcsRUFBRTtFQUNsQ0EsTUFBTSxDQUFDd0ssS0FBSyxHQUFHO0lBQ2RqTCxhQUFhLEVBQWJBLGFBQWE7SUFDYndCLFVBQVUsRUFBVkEsVUFBVTtJQUNWZ0csY0FBYyxFQUFkQSxjQUFjO0lBQ2Q1QyxxQkFBcUIsRUFBckJBLHFCQUFxQjtJQUNyQm9ELFVBQVUsRUFBVkEsVUFBVTtJQUNWUyxvQkFBb0IsRUFBcEJBLG9CQUFvQjtJQUNwQnNDLE9BQU8sRUFBUEEsT0FBTztJQUNQdkIsaUJBQWlCLEVBQWpCQTtFQUNELENBQUM7QUFDRixDIiwiZmlsZSI6IjQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvb2NyL2xvY2FsLW9jci5qc1xuLy8gUHVyZSBmcm9udC1lbmQgT0NSIG1vZHVsZTogQ2FudmFzIHByZXByb2Nlc3NpbmcgKyBUZXNzZXJhY3QuanNcbi8vIEZvcjogSDUgLyBXZWJWaWV3IGVudmlyb25tZW50c1xuLy8gU3VwcG9ydHMgYm90aCBFUyBNb2R1bGUgKGltcG9ydCkgYW5kIHNjcmlwdC10YWcgbG9hZGluZyAod2luZG93LlNuT2NyKVxuXG4vLyA9PT09PT09PT09PT09PSBFU00gZXhwb3J0cyA9PT09PT09PT09PT09PVxuZXhwb3J0IGxldCBfdGVzc2VyYWN0V29ya2VyID0gbnVsbFxuXG4vKiogSW5qZWN0IGEgPHNjcmlwdD4gdGFnIChkb2N1bWVudC1yZWxhdGl2ZTsgaW1tdW5lIHRvIHdlYnBhY2sgYW5hbHlzaXMgYW5kIGltcG9ydCgpJ3MgbW9kdWxlLXJlbGF0aXZlIHJlc29sdXRpb24pICovXG5mdW5jdGlvbiBsb2FkU2NyaXB0KHNyYykge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXHRcdHMuc3JjID0gc3JjXG5cdFx0cy5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKClcblx0XHRzLm9uZXJyb3IgPSAoKSA9PiByZWplY3QobmV3IEVycm9yKCdmYWlsZWQgdG8gbG9hZCAnICsgc3JjKSlcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpXG5cdH0pXG59XG5cbi8qKlxuICogTG9hZCBUZXNzZXJhY3QuanMgKGxhenksIH4xNU1CIG9uIGZpcnN0IGxvYWQpXG4gKiDimIUgTG9hZHMgdGhlIFVNRCBidWlsZCB2aWEgYSA8c2NyaXB0PiB0YWcgYW5kIHVzZXMgd2luZG93LlRlc3NlcmFjdCDigJQgc2FtZSBwcm92ZW5cbiAqICAgcGF0dGVybiBhcyB0aGUgenhpbmcgbG9hZGVyIGluIHNjYW4taDUuIExvY2FsIGFzc2V0cyBmaXJzdCAoc3RhdGljL3Rlc3NlcmFjdC8sXG4gKiAgIGJ1bmRsZWQgd2l0aCB0aGUgSDUgYnVpbGQg4oCUIHRoZSB1bnBrZy90ZXNzZGF0YSBDRE5zIGFyZSB1bnJlbGlhYmxlIGZyb20gbWFpbmxhbmRcbiAqICAgYnJvd3NlcnMpOyBlYWNoIGNhbmRpZGF0ZSBmYWxscyB0aHJvdWdoIG9uIGxvYWQgZXJyb3IsIENETiBhcyBsYXN0IHJlc29ydC5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRUZXNzZXJhY3QoKSB7XG5cdGlmIChfdGVzc2VyYWN0V29ya2VyKSByZXR1cm4gX3Rlc3NlcmFjdFdvcmtlclxuXHRjb25zdCBwYWdlRGlyID0gbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvW14vXSokLywgJycpXG5cdGNvbnN0IGNhbmRpZGF0ZXMgPSBbcGFnZURpciArICdzdGF0aWMvdGVzc2VyYWN0LycsICcvc3RhdGljL3Rlc3NlcmFjdC8nXVxuXHRsZXQgVGVzc2VyYWN0ID0gbnVsbFxuXHRsZXQgQkFTRSA9ICcnXG5cdGZvciAoY29uc3QgYmFzZSBvZiBjYW5kaWRhdGVzKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IGxvYWRTY3JpcHQoYmFzZSArICd0ZXNzZXJhY3QubWluLmpzJylcblx0XHRcdFRlc3NlcmFjdCA9IHdpbmRvdy5UZXNzZXJhY3Rcblx0XHRcdEJBU0UgPSBiYXNlXG5cdFx0XHRicmVha1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUud2FybignW29jcl0gbG9hZCBmYWlsZWQgZnJvbScsIGJhc2UsIGUubWVzc2FnZSlcblx0XHR9XG5cdH1cblx0aWYgKCFUZXNzZXJhY3QgfHwgIVRlc3NlcmFjdC5jcmVhdGVXb3JrZXIpIHtcblx0XHRjb25zb2xlLndhcm4oJ1tvY3JdIGxvY2FsIHRlc3NlcmFjdCBtaXNzaW5nLCBmYWxsaW5nIGJhY2sgdG8gQ0ROJylcblx0XHRjb25zdCBjZG4gPSBbJ2h0dHBzOi8vdW5wa2cuY29tL3Rlc3NlcmFjdC5qc0AnLCAnNS4xLjEnLCAnL2Rpc3QvdGVzc2VyYWN0Lm1pbi5qcyddLmpvaW4oJycpXG5cdFx0YXdhaXQgbG9hZFNjcmlwdChjZG4pXG5cdFx0VGVzc2VyYWN0ID0gd2luZG93LlRlc3NlcmFjdFxuXHRcdEJBU0UgPSAnJ1xuXHR9XG5cdGlmICghVGVzc2VyYWN0IHx8ICFUZXNzZXJhY3QuY3JlYXRlV29ya2VyKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCd0ZXNzZXJhY3QgZmFpbGVkIHRvIGxvYWQnKVxuXHR9XG5cdGNvbnNvbGUubG9nKCdbb2NyXSB0ZXNzZXJhY3QgYmFzZTonLCBCQVNFIHx8ICdDRE4nKVxuXHRjb25zdCBwYXRocyA9IEJBU0UgPyB7XG5cdFx0d29ya2VyUGF0aDogQkFTRSArICd3b3JrZXIubWluLmpzJyxcblx0XHRjb3JlUGF0aDogICBCQVNFLFxuXHRcdGxhbmdQYXRoOiAgIEJBU0UgKyAnbGFuZycsXG5cdFx0Z3ppcDogICAgICAgdHJ1ZSxcblx0fSA6IHtcblx0XHR3b3JrZXJQYXRoOiAnaHR0cHM6Ly91bnBrZy5jb20vdGVzc2VyYWN0LmpzQDUuMS4xL2Rpc3Qvd29ya2VyLm1pbi5qcycsXG5cdFx0Y29yZVBhdGg6ICAgJ2h0dHBzOi8vdW5wa2cuY29tL3Rlc3NlcmFjdC5qcy1jb3JlQDUuMC4wJyxcblx0XHRsYW5nUGF0aDogICAnaHR0cHM6Ly90ZXNzZGF0YS5wcm9qZWN0bmFwdGhhLmNvbS80LjAuMCcsXG5cdFx0Z3ppcDogICAgICAgdHJ1ZSxcblx0fVxuXHRfdGVzc2VyYWN0V29ya2VyID0gYXdhaXQgVGVzc2VyYWN0LmNyZWF0ZVdvcmtlcignZW5nJywgMSwge1xuXHRcdC4uLnBhdGhzLFxuXHRcdGxvZ2dlcjogKG0pID0+IHsgLyogY29uc29sZS5sb2coJ1t0ZXNzXScsIG0pICovIH0sXG5cdH0pXG5cdGF3YWl0IF90ZXNzZXJhY3RXb3JrZXIuc2V0UGFyYW1ldGVycyh7XG5cdFx0dGVzc2VkaXRfY2hhcl93aGl0ZWxpc3Q6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjAxMjM0NTY3ODk6LiAnLFxuXHRcdHRlc3NlZGl0X3BhZ2VzZWdfbW9kZTogJzYnLCAgLy8gUFNNIDYgc2luZ2xlLWJsb2NrIG1vZGUgKG1vcmUgc3RhYmxlIGZvciBBTlRNSU5FUiBsYWJlbHMpXG5cdH0pXG5cdHJldHVybiBfdGVzc2VyYWN0V29ya2VyXG59XG5cbi8qKlxuICogRmluZCB0aGUgcmVkIGJveCBpbiB0aGUgaW1hZ2UgKHRoZSBkZXRlY3Rpb24gcmVnaW9uIG1hcmtlZCBieSB0aGUgdXNlcilcbiAqIFJlZCBib3ggY29sb3I6IFI+MTgwLCBHPDEyMCwgQjwxMjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRSZWRCb3goY2FudmFzKSB7XG5cdGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cdGNvbnN0IHcgPSBjYW52YXMud2lkdGgsIGggPSBjYW52YXMuaGVpZ2h0XG5cdGlmICghdyB8fCAhaCkgcmV0dXJuIG51bGxcblx0Y29uc3QgaW1nRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgdywgaClcblx0Y29uc3QgZCA9IGltZ0RhdGEuZGF0YVxuXHRsZXQgbWluWCA9IHcsIG1pblkgPSBoLCBtYXhYID0gMCwgbWF4WSA9IDBcblx0bGV0IGNvdW50ID0gMFxuXHRmb3IgKGxldCB5ID0gMDsgeSA8IGg7IHkgKz0gMikge1xuXHRcdGZvciAobGV0IHggPSAwOyB4IDwgdzsgeCArPSAyKSB7XG5cdFx0XHRjb25zdCBpID0gKHkgKiB3ICsgeCkgKiA0XG5cdFx0XHRjb25zdCByID0gZFtpXSwgZyA9IGRbaSArIDFdLCBiID0gZFtpICsgMl1cblx0XHRcdGlmIChyID4gMTgwICYmIGcgPCAxMjAgJiYgYiA8IDEyMCkge1xuXHRcdFx0XHRpZiAoeCA8IG1pblgpIG1pblggPSB4XG5cdFx0XHRcdGlmICh4ID4gbWF4WCkgbWF4WCA9IHhcblx0XHRcdFx0aWYgKHkgPCBtaW5ZKSBtaW5ZID0geVxuXHRcdFx0XHRpZiAoeSA+IG1heFkpIG1heFkgPSB5XG5cdFx0XHRcdGNvdW50Kytcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0aWYgKGNvdW50IDwgMTAwKSByZXR1cm4gbnVsbFxuXHRyZXR1cm4geyB4OiBtaW5YIC0gMTAsIHk6IG1pblkgLSAxMCwgdzogbWF4WCAtIG1pblggKyAyMCwgaDogbWF4WSAtIG1pblkgKyAyMCB9XG59XG5cbi8qKiBHcmF5c2NhbGUgKyBPdHN1IHRocmVzaG9sZCDihpIgVWludDhBcnJheSAoMSA9IGRhcmsgcHJpbnQpICovXG5mdW5jdGlvbiBiaW5hcml6ZU90c3UoaW1nRGF0YSwgd3csIGhoKSB7XG5cdGNvbnN0IGQgPSBpbWdEYXRhLmRhdGFcblx0Y29uc3QgZ3JheSA9IG5ldyBVaW50OEFycmF5KHd3ICogaGgpXG5cdGNvbnN0IGhpc3QgPSBuZXcgSW50MzJBcnJheSgyNTYpXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgd3cgKiBoaDsgaSsrKSB7XG5cdFx0Y29uc3QgaiA9IGkgKiA0XG5cdFx0Y29uc3QgZyA9IE1hdGgucm91bmQoMC4yOTkgKiBkW2pdICsgMC41ODcgKiBkW2ogKyAxXSArIDAuMTE0ICogZFtqICsgMl0pXG5cdFx0Z3JheVtpXSA9IGdcblx0XHRoaXN0W2ddKytcblx0fVxuXHRjb25zdCB0b3RhbCA9IHd3ICogaGhcblx0bGV0IHN1bSA9IDBcblx0Zm9yIChsZXQgdCA9IDA7IHQgPCAyNTY7IHQrKykgc3VtICs9IHQgKiBoaXN0W3RdXG5cdGxldCBzdW1CID0gMCwgd0IgPSAwLCBiZXN0VmFyID0gLTEsIHRocmVzaCA9IDEyOFxuXHRmb3IgKGxldCB0ID0gMDsgdCA8IDI1NjsgdCsrKSB7XG5cdFx0d0IgKz0gaGlzdFt0XVxuXHRcdGlmICghd0IpIGNvbnRpbnVlXG5cdFx0Y29uc3Qgd0YgPSB0b3RhbCAtIHdCXG5cdFx0aWYgKCF3RikgYnJlYWtcblx0XHRzdW1CICs9IHQgKiBoaXN0W3RdXG5cdFx0Y29uc3QgbUIgPSBzdW1CIC8gd0IsIG1GID0gKHN1bSAtIHN1bUIpIC8gd0Zcblx0XHRjb25zdCB2ID0gd0IgKiB3RiAqIChtQiAtIG1GKSAqIChtQiAtIG1GKVxuXHRcdGlmICh2ID4gYmVzdFZhcikgeyBiZXN0VmFyID0gdjsgdGhyZXNoID0gdCB9XG5cdH1cblx0Y29uc3QgZGFyayA9IG5ldyBVaW50OEFycmF5KHd3ICogaGgpXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgd3cgKiBoaDsgaSsrKSBkYXJrW2ldID0gZ3JheVtpXSA8PSB0aHJlc2ggPyAxIDogMFxuXHRyZXR1cm4gZGFya1xufVxuXG4vKiogU2hhcmVkIGRvd25zY2FsZSBoZWxwZXIgZm9yIHRoZSBiYXJjb2RlL1NOLXJvdyBkZXRlY3RvcnMgKi9cbmZ1bmN0aW9uIGRvd25zY2FsZVRvKGNhbnZhcywgbWF4RGltKSB7XG5cdGNvbnN0IHcgPSBjYW52YXMud2lkdGgsIGggPSBjYW52YXMuaGVpZ2h0XG5cdGlmIChNYXRoLm1heCh3LCBoKSA8PSBtYXhEaW0pIHJldHVybiB7IGNhbnZhcywgc2NhbGU6IDEgfVxuXHRjb25zdCBzY2FsZSA9IG1heERpbSAvIE1hdGgubWF4KHcsIGgpXG5cdGNvbnN0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuXHRjLndpZHRoID0gTWF0aC5mbG9vcih3ICogc2NhbGUpXG5cdGMuaGVpZ2h0ID0gTWF0aC5mbG9vcihoICogc2NhbGUpXG5cdGMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoY2FudmFzLCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodClcblx0cmV0dXJuIHsgY2FudmFzOiBjLCBzY2FsZSB9XG59XG5cbi8qKlxuICog4piFIERldGVjdCB0aGUgYmFyY29kZSBhbmQgcmV0dXJuIHRoZSBTTiB0ZXh0IHJvdyBkaXJlY3RseSBBQk9WRSBpdC5cbiAqICAgQU5UTUlORVIgbGFiZWxzIHByaW50IHRoZSBTTiBsaW5lIHJpZ2h0IGFib3ZlIHRoZSBiYXJjb2RlLCBzbyBieSBsb2NhdGluZyB0aGVcbiAqICAgYmFyY29kZSB3ZSBjYW4gT0NSIE9OTFkgdGhhdCBsaW5lIOKAlCB0aGUgbW9kZWwgbmFtZSBhbmQgZXZlcnl0aGluZyBlbHNlIGFyZSBleGNsdWRlZC5cbiAqXG4gKiBCYXJjb2RlIGRldGVjdGlvbjogYmFyY29kZSByb3dzIGhhdmUgbWFueSBibGFjay93aGl0ZSB0cmFuc2l0aW9uczsgYW1vbmcgdGhlIGNhbmRpZGF0ZVxuICogYmFuZHMgdGhlIGJhcmNvZGUgaXMgdGhlIExPV0VTVCBvbmUgKHRleHQgcm93cyBhbHdheXMgc2l0IGFib3ZlIGl0KS5cbiAqXG4gKiBTTiByb3cgZXh0cmFjdGlvbjogaW4gYSB3aW5kb3cgYWJvdmUgdGhlIGJhcmNvZGUgKHNtYWxsIGdhcCArIDEuMXggYmFyY29kZSBoZWlnaHQpLFxuICogZmluZCBjb250aWd1b3VzIHJ1bnMgb2YgaW5rIHJvd3MgYW5kIHBpY2sgdGhlIG9uZSBjbG9zZXN0IHRvIHRoZSBiYXJjb2RlIHRoYXQgaXMgc3RpbGxcbiAqIHJlYXNvbmFibHkgdGFsbCAoPj0gNjAlIG9mIHRoZSB0YWxsZXN0IHJ1bikuXG4gKlxuICogQHJldHVybnMge3tiYXJjb2RlOnt4LHksdyxofSwgcmVnaW9uOnt4LHksdyxofX18e2JhcmNvZGU6e3gseSx3LGh9fXxudWxsfSByZWN0cyBpbiBPUklHSU5BTCBpbWFnZSBjb29yZHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRTblJvd0Fib3ZlQmFyY29kZShjYW52YXMpIHtcblx0Y29uc3QgdyA9IGNhbnZhcy53aWR0aCwgaCA9IGNhbnZhcy5oZWlnaHRcblx0aWYgKCF3IHx8ICFoKSByZXR1cm4gbnVsbFxuXHRjb25zdCB7IGNhbnZhczogd2MsIHNjYWxlIH0gPSBkb3duc2NhbGVUbyhjYW52YXMsIDgwMClcblx0Y29uc3Qgd3cgPSB3Yy53aWR0aCwgaGggPSB3Yy5oZWlnaHRcblx0Y29uc3QgZGFyayA9IGJpbmFyaXplT3RzdSh3Yy5nZXRDb250ZXh0KCcyZCcpLmdldEltYWdlRGF0YSgwLCAwLCB3dywgaGgpLCB3dywgaGgpXG5cblx0Ly8gLS0tLSAxKSBiYXJjb2RlIGJhbmQgPSB0aGUgTE9XRVNUIGJhbmQgb2YgaGlnaC10cmFuc2l0aW9uIHJvd3MgLS0tLVxuXHRjb25zdCB0cmFucyA9IG5ldyBJbnQzMkFycmF5KGhoKVxuXHRmb3IgKGxldCB5ID0gMDsgeSA8IGhoOyB5KyspIHtcblx0XHRsZXQgdCA9IDBcblx0XHRmb3IgKGxldCB4ID0gMTsgeCA8IHd3OyB4KyspIGlmIChkYXJrW3kgKiB3dyArIHhdICE9PSBkYXJrW3kgKiB3dyArIHggLSAxXSkgdCsrXG5cdFx0dHJhbnNbeV0gPSB0XG5cdH1cblx0Y29uc3QgTUlOX1RSQU5TID0gTWF0aC5tYXgoMTYsIE1hdGguZmxvb3Iod3cgKiAwLjAzKSlcblx0Y29uc3QgYmFyTGlrZSA9IG5ldyBVaW50OEFycmF5KGhoKVxuXHRmb3IgKGxldCB5ID0gMDsgeSA8IGhoOyB5KyspIGlmICh0cmFuc1t5XSA+PSBNSU5fVFJBTlMpIGJhckxpa2VbeV0gPSAxXG5cdGxldCBiYW5kID0gbnVsbFxuXHRmb3IgKGxldCB5ID0gMDsgeSA8IGhoOyB5KyspIHtcblx0XHRpZiAoIWJhckxpa2VbeV0pIGNvbnRpbnVlXG5cdFx0bGV0IGVuZCA9IHksIGhvbGVzID0gMFxuXHRcdGZvciAobGV0IGsgPSB5ICsgMTsgayA8IGhoOyBrKyspIHtcblx0XHRcdGlmIChiYXJMaWtlW2tdKSB7IGVuZCA9IGs7IGhvbGVzID0gMCB9IGVsc2UgaWYgKCsraG9sZXMgPiAyKSBicmVha1xuXHRcdH1cblx0XHRpZiAoZW5kIC0geSArIDEgPj0gMTIpIHtcblx0XHRcdGxldCBzdW0gPSAwLCBuID0gMFxuXHRcdFx0Zm9yIChsZXQgayA9IHk7IGsgPD0gZW5kOyBrKyspIGlmIChiYXJMaWtlW2tdKSB7IHN1bSArPSB0cmFuc1trXTsgbisrIH1cblx0XHRcdGNvbnN0IG1lYW5UcmFucyA9IG4gPyBzdW0gLyBuIDogMFxuXHRcdFx0aWYgKG1lYW5UcmFucyA+PSAyNSAmJiAoIWJhbmQgfHwgeSA+IGJhbmQueTApKSBiYW5kID0geyB5MDogeSwgeTE6IGVuZCB9XG5cdFx0fVxuXHRcdHkgPSBlbmQgKyAxXG5cdH1cblx0aWYgKCFiYW5kKSByZXR1cm4gbnVsbFxuXG5cdC8vIGJhcmNvZGUgeC1yYW5nZTogY29sdW1ucyBkYXJrIHRocm91Z2ggbW9zdCBvZiB0aGUgYmFuZCAoaG9sZS10b2xlcmFudCBydW4pXG5cdGNvbnN0IGJhbmRIID0gYmFuZC55MSAtIGJhbmQueTAgKyAxXG5cdGNvbnN0IGNvbERhcmsgPSBuZXcgSW50MzJBcnJheSh3dylcblx0Zm9yIChsZXQgeSA9IGJhbmQueTA7IHkgPD0gYmFuZC55MTsgeSsrKVxuXHRcdGZvciAobGV0IHggPSAwOyB4IDwgd3c7IHgrKykgaWYgKGRhcmtbeSAqIHd3ICsgeF0pIGNvbERhcmtbeF0rK1xuXHRjb25zdCBnYXBBbGxvdyA9IE1hdGgubWF4KDQsIE1hdGguZmxvb3Iod3cgKiAwLjAzKSlcblx0bGV0IGJ4MCA9IC0xLCBieDEgPSAtMSwgcnVuU3RhcnQgPSAtMSwgcnVuRW5kID0gLTEsIGdhcCA9IDBcblx0Zm9yIChsZXQgeCA9IDA7IHggPCB3dzsgeCsrKSB7XG5cdFx0Y29uc3QgZGVuc2UgPSBjb2xEYXJrW3hdID49IGJhbmRIICogMC40XG5cdFx0aWYgKGRlbnNlKSB7XG5cdFx0XHRpZiAocnVuU3RhcnQgPCAwKSBydW5TdGFydCA9IHhcblx0XHRcdHJ1bkVuZCA9IHg7IGdhcCA9IDBcblx0XHR9IGVsc2UgaWYgKHJ1blN0YXJ0ID49IDAgJiYgKytnYXAgPiBnYXBBbGxvdykge1xuXHRcdFx0aWYgKHJ1bkVuZCAtIHJ1blN0YXJ0ID4gYngxIC0gYngwKSB7IGJ4MCA9IHJ1blN0YXJ0OyBieDEgPSBydW5FbmQgfVxuXHRcdFx0cnVuU3RhcnQgPSAtMTsgZ2FwID0gMFxuXHRcdH1cblx0fVxuXHRpZiAocnVuU3RhcnQgPj0gMCAmJiBydW5FbmQgLSBydW5TdGFydCA+IGJ4MSAtIGJ4MCkgeyBieDAgPSBydW5TdGFydDsgYngxID0gcnVuRW5kIH1cblx0aWYgKGJ4MCA8IDApIHJldHVybiBudWxsXG5cdGNvbnN0IGludiA9IDEgLyBzY2FsZVxuXHRjb25zdCBiYXJjb2RlID0ge1xuXHRcdHg6IE1hdGgubWF4KDAsIE1hdGguZmxvb3IoYngwICogaW52KSksXG5cdFx0eTogTWF0aC5tYXgoMCwgTWF0aC5mbG9vcihiYW5kLnkwICogaW52KSksXG5cdFx0dzogTWF0aC5mbG9vcigoYngxIC0gYngwICsgMSkgKiBpbnYpLFxuXHRcdGg6IE1hdGguZmxvb3IoKGJhbmQueTEgLSBiYW5kLnkwICsgMSkgKiBpbnYpLFxuXHR9XG5cblx0Ly8gLS0tLSAyKSBTTiB0ZXh0IHJvdyBhYm92ZSB0aGUgYmFyY29kZSAtLS0tXG5cdGNvbnN0IGJhckh3ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChiYXJjb2RlLmggKiBzY2FsZSkpXG5cdGNvbnN0IGdhcFcgPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKGJhckh3ICogMC4wOCkpXG5cdGNvbnN0IHdpbkggPSBNYXRoLm1heCgxMCwgTWF0aC5yb3VuZChiYXJIdyAqIDEuMSkpXG5cdGNvbnN0IHkxID0gTWF0aC5yb3VuZChiYXJjb2RlLnkgKiBzY2FsZSkgLSBnYXBXXG5cdGlmICh5MSA8PSAwKSByZXR1cm4geyBiYXJjb2RlIH1cblx0Y29uc3QgeTAgPSBNYXRoLm1heCgwLCB5MSAtIHdpbkgpXG5cdGNvbnN0IG14ID0gTWF0aC5yb3VuZCgoYngxIC0gYngwICsgMSkgKiAwLjE1KVxuXHRjb25zdCB4MCA9IE1hdGgubWF4KDAsIGJ4MCAtIG14KVxuXHRjb25zdCB4MSA9IE1hdGgubWluKHd3IC0gMSwgYngxICsgbXgpXG5cdGNvbnN0IGNvdW50cyA9IFtdXG5cdGxldCBtYXhDID0gMFxuXHRmb3IgKGxldCB5ID0geTA7IHkgPCB5MTsgeSsrKSB7XG5cdFx0bGV0IGMgPSAwXG5cdFx0Zm9yIChsZXQgeCA9IHgwOyB4IDw9IHgxOyB4KyspIGlmIChkYXJrW3kgKiB3dyArIHhdKSBjKytcblx0XHRjb3VudHMucHVzaCh7IHksIGMgfSlcblx0XHRpZiAoYyA+IG1heEMpIG1heEMgPSBjXG5cdH1cblx0aWYgKG1heEMgPCA4KSByZXR1cm4geyBiYXJjb2RlIH1cblx0Ly8gY29udGlndW91cyBydW5zIG9mIGluayByb3dzIChjb3VudCA+PSAyNSUgb2YgdGhlIG1heCByb3cpXG5cdGNvbnN0IHRoID0gbWF4QyAqIDAuMjVcblx0Y29uc3QgcnVucyA9IFtdXG5cdGxldCBpID0gMFxuXHR3aGlsZSAoaSA8IGNvdW50cy5sZW5ndGgpIHtcblx0XHRpZiAoY291bnRzW2ldLmMgPCB0aCkgeyBpKys7IGNvbnRpbnVlIH1cblx0XHRsZXQgaiA9IGlcblx0XHR3aGlsZSAoaiArIDEgPCBjb3VudHMubGVuZ3RoICYmIGNvdW50c1tqICsgMV0uYyA+PSB0aCkgaisrXG5cdFx0cnVucy5wdXNoKHsgdG9wOiBjb3VudHNbaV0ueSwgYm90dG9tOiBjb3VudHNbal0ueSB9KVxuXHRcdGkgPSBqICsgMVxuXHR9XG5cdGlmICghcnVucy5sZW5ndGgpIHJldHVybiB7IGJhcmNvZGUgfVxuXHQvLyDimIUgcGljayB0aGUgcnVuIGNsb3Nlc3QgdG8gdGhlIGJhcmNvZGUgdGhhdCBpcyBzdGlsbCByZWFzb25hYmx5IHRhbGxcblx0Y29uc3QgbWF4SDIgPSBNYXRoLm1heCguLi5ydW5zLm1hcChyID0+IHIuYm90dG9tIC0gci50b3AgKyAxKSlcblx0bGV0IGNob3NlbiA9IG51bGxcblx0Zm9yIChsZXQgayA9IHJ1bnMubGVuZ3RoIC0gMTsgayA+PSAwOyBrLS0pIHtcblx0XHRpZiAocnVuc1trXS5ib3R0b20gLSBydW5zW2tdLnRvcCArIDEgPj0gbWF4SDIgKiAwLjYpIHsgY2hvc2VuID0gcnVuc1trXTsgYnJlYWsgfVxuXHR9XG5cdGlmICghY2hvc2VuKSBjaG9zZW4gPSBydW5zW3J1bnMubGVuZ3RoIC0gMV1cblx0aWYgKGNob3Nlbi5ib3R0b20gLSBjaG9zZW4udG9wICsgMSA8IDUpIHJldHVybiB7IGJhcmNvZGUgfVxuXHRjb25zdCBwYWQgPSA0ICAvLyB3b3JrIHB4LCBicmVhdGhpbmcgcm9vbSBmb3IgYXNjZW5kZXJzL2FudGktYWxpYXNpbmdcblx0cmV0dXJuIHtcblx0XHRiYXJjb2RlLFxuXHRcdHJlZ2lvbjoge1xuXHRcdFx0eDogTWF0aC5tYXgoMCwgTWF0aC5mbG9vcih4MCAqIGludikpLFxuXHRcdFx0eTogTWF0aC5tYXgoMCwgTWF0aC5mbG9vcigoY2hvc2VuLnRvcCAtIHBhZCkgKiBpbnYpKSxcblx0XHRcdHc6IE1hdGguZmxvb3IoKHgxIC0geDAgKyAxKSAqIGludiksXG5cdFx0XHRoOiBNYXRoLmZsb29yKChjaG9zZW4uYm90dG9tIC0gY2hvc2VuLnRvcCArIDEgKyBwYWQgKiAyKSAqIGludiksXG5cdFx0fSxcblx0fVxufVxuXG4vKipcbiAqIEF1dG9tYXRpY2FsbHkgZmluZCB0aGUgdGV4dCByZWdpb24gKHdoZW4gbm8gcmVkIGJveCBpcyBtYXJrZWQpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVGV4dFJlZ2lvbihjYW52YXMpIHtcblx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcblx0Y29uc3QgdyA9IGNhbnZhcy53aWR0aCwgaCA9IGNhbnZhcy5oZWlnaHRcblx0Y29uc3QgaW1nRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoMCwgMCwgdywgaClcblx0Y29uc3QgZCA9IGltZ0RhdGEuZGF0YVxuXHRjb25zdCBncmF5ID0gbmV3IFVpbnQ4Q2xhbXBlZEFycmF5KHcgKiBoKVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHcgKiBoOyBpKyspIHtcblx0XHRjb25zdCBqID0gaSAqIDRcblx0XHRncmF5W2ldID0gMC4yOTkgKiBkW2pdICsgMC41ODcgKiBkW2ogKyAxXSArIDAuMTE0ICogZFtqICsgMl1cblx0fVxuXHRjb25zdCByb3dBdmcgPSBbXVxuXHRmb3IgKGxldCB5ID0gMDsgeSA8IGg7IHkrKykge1xuXHRcdGxldCBzdW0gPSAwXG5cdFx0Zm9yIChsZXQgeCA9IDA7IHggPCB3OyB4KyspIHN1bSArPSBncmF5W3kgKiB3ICsgeF1cblx0XHRyb3dBdmcucHVzaChzdW0gLyB3KVxuXHR9XG5cdGNvbnN0IHNvcnRlZCA9IFsuLi5yb3dBdmddLm1hcCgodiwgaSkgPT4gKHsgdiwgaSB9KSkuc29ydCgoYSwgYikgPT4gYS52IC0gYi52KVxuXHRjb25zdCB0b3BSb3dzID0gc29ydGVkLnNsaWNlKDAsIE1hdGgubWF4KDgsIE1hdGguZmxvb3IoaCAqIDAuMSkpKS5tYXAoeCA9PiB4LmkpXG5cdGNvbnN0IG1pblkgPSBNYXRoLm1pbiguLi50b3BSb3dzKSwgbWF4WSA9IE1hdGgubWF4KC4uLnRvcFJvd3MpXG5cdHJldHVybiB7IHg6IDAsIHk6IG1pblksIHc6IHcsIGg6IG1heFkgLSBtaW5ZIH1cbn1cblxuLyoqXG4gKiBDYW52YXMgcHJlcHJvY2Vzc2luZzogY3JvcCArIGdyYXlzY2FsZSArIHVwc2NhbGUgKyBjb250cmFzdCBlbmhhbmNlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlcHJvY2VzcyhjYW52YXMsIHJlZ2lvbiwgc2NhbGUgPSA0KSB7XG5cdGNvbnN0IHNyY1ggPSByZWdpb24ueCwgc3JjWSA9IHJlZ2lvbi55XG5cdGNvbnN0IHNyY1cgPSByZWdpb24udywgc3JjSCA9IHJlZ2lvbi5oXG5cdGlmIChzcmNXIDw9IDAgfHwgc3JjSCA8PSAwKSByZXR1cm4gY2FudmFzXG5cblx0Y29uc3Qgb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcblx0b3V0LndpZHRoID0gc3JjVyAqIHNjYWxlXG5cdG91dC5oZWlnaHQgPSBzcmNIICogc2NhbGVcblx0Y29uc3QgY3R4ID0gb3V0LmdldENvbnRleHQoJzJkJylcblx0Y3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRydWVcblx0Y3R4LmltYWdlU21vb3RoaW5nUXVhbGl0eSA9ICdoaWdoJ1xuXHRjdHguZHJhd0ltYWdlKGNhbnZhcywgc3JjWCwgc3JjWSwgc3JjVywgc3JjSCwgMCwgMCwgb3V0LndpZHRoLCBvdXQuaGVpZ2h0KVxuXG5cdGNvbnN0IGltZ0RhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIG91dC53aWR0aCwgb3V0LmhlaWdodClcblx0Y29uc3QgZCA9IGltZ0RhdGEuZGF0YVxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGQubGVuZ3RoOyBpICs9IDQpIHtcblx0XHRsZXQgZyA9IDAuMjk5ICogZFtpXSArIDAuNTg3ICogZFtpICsgMV0gKyAwLjExNCAqIGRbaSArIDJdXG5cdFx0ZyA9IChnIC0gMTI4KSAqIDEuNSArIDEyOFxuXHRcdGcgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIGcpKVxuXHRcdGRbaV0gPSBkW2kgKyAxXSA9IGRbaSArIDJdID0gZ1xuXHR9XG5cdGN0eC5wdXRJbWFnZURhdGEoaW1nRGF0YSwgMCwgMClcblx0cmV0dXJuIG91dFxufVxuXG4vKipcbiAqIFJlY29nbml6ZSB0aGUgU04gaW4gYW4gaW1hZ2VcbiAqIOKYhSBSZWdpb24gcHJpb3JpdHk6IG1hbnVhbCA+IHJlZCBib3ggPiBTTiByb3cgYWJvdmUgdGhlIGJhcmNvZGUgKHByaW1hcnkg4oCUIE9DUiBvbmx5XG4gKiAgIHRoYXQgbGluZSkgPiBnZW5lcmljIHRleHQgcmVnaW9uIChmYWxsYmFjayB3aGVuIHRoZSBiYXJjb2RlIHJvdyB5aWVsZHMgbm90aGluZylcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlY29nbml6ZVNuRnJvbUltYWdlKGltYWdlUGF0aCwgb3B0aW9ucyA9IHt9KSB7XG5cdGNvbnN0IHsgb25Qcm9ncmVzcywgbWFudWFsUmVnaW9uIH0gPSBvcHRpb25zXG5cblx0aWYgKG9uUHJvZ3Jlc3MpIG9uUHJvZ3Jlc3MoeyBzdGFnZTogJ2xvYWQnLCBwZXJjZW50OiA1IH0pXG5cdGNvbnN0IGNhbnZhcyA9IGF3YWl0IGxvYWRJbWFnZVRvQ2FudmFzKGltYWdlUGF0aClcblxuXHRsZXQgcmVnaW9uID0gbWFudWFsUmVnaW9uXG5cdGxldCB1c2VkQmFyY29kZVJvdyA9IGZhbHNlXG5cdGlmICghcmVnaW9uKSB7XG5cdFx0cmVnaW9uID0gZmluZFJlZEJveChjYW52YXMpXG5cdH1cblx0aWYgKCFyZWdpb24pIHtcblx0XHRjb25zdCBoaXQgPSBmaW5kU25Sb3dBYm92ZUJhcmNvZGUoY2FudmFzKVxuXHRcdGlmIChoaXQgJiYgaGl0LnJlZ2lvbikge1xuXHRcdFx0cmVnaW9uID0gaGl0LnJlZ2lvblxuXHRcdFx0dXNlZEJhcmNvZGVSb3cgPSB0cnVlXG5cdFx0XHRjb25zb2xlLmxvZygnW29jcl0gQmFyY29kZTonLCBoaXQuYmFyY29kZSwgJ+KGkiBTTiByb3cgYWJvdmU6JywgaGl0LnJlZ2lvbilcblx0XHR9IGVsc2UgaWYgKGhpdCAmJiBoaXQuYmFyY29kZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ1tvY3JdIEJhcmNvZGUgZm91bmQgYnV0IG5vIHRleHQgcm93IGFib3ZlOicsIGhpdC5iYXJjb2RlKVxuXHRcdH1cblx0fVxuXHRpZiAoIXJlZ2lvbikge1xuXHRcdHJlZ2lvbiA9IGZpbmRUZXh0UmVnaW9uKGNhbnZhcylcblx0fVxuXG5cdGlmIChvblByb2dyZXNzKSBvblByb2dyZXNzKHsgc3RhZ2U6ICdwcmVwcm9jZXNzJywgcGVyY2VudDogMzAgfSlcblx0bGV0IHByZXByb2Nlc3NlZCA9IHByZXByb2Nlc3MoY2FudmFzLCByZWdpb24sIDQpXG5cblx0aWYgKG9uUHJvZ3Jlc3MpIG9uUHJvZ3Jlc3MoeyBzdGFnZTogJ29jci1sb2FkJywgcGVyY2VudDogNDAgfSlcblx0Y29uc3Qgd29ya2VyID0gYXdhaXQgbG9hZFRlc3NlcmFjdCgpXG5cblx0aWYgKG9uUHJvZ3Jlc3MpIG9uUHJvZ3Jlc3MoeyBzdGFnZTogJ29jci1ydW4nLCBwZXJjZW50OiA1MCB9KVxuXHRjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHdvcmtlci5yZWNvZ25pemUocHJlcHJvY2Vzc2VkKVxuXHRsZXQgcmF3VGV4dCA9IGRhdGEudGV4dFxuXG5cdGlmIChvblByb2dyZXNzKSBvblByb2dyZXNzKHsgc3RhZ2U6ICdwYXJzZScsIHBlcmNlbnQ6IDk1IH0pXG5cdGxldCBjYW5kaWRhdGVzID0gcGFyc2VTbkNhbmRpZGF0ZXMocmF3VGV4dCwgZGF0YS53b3JkcyB8fCBbXSlcblxuXHQvLyDimIUgRmFsbGJhY2s6IHRoZSBiYXJjb2RlIHJvdyBnYXZlIG5vIFNOLXNpemVkIGNhbmRpZGF0ZSDihpIgcmVkbyB3aXRoIHRoZSBnZW5lcmljIHRleHQgcmVnaW9uXG5cdGlmICh1c2VkQmFyY29kZVJvdyAmJiAhY2FuZGlkYXRlcy5zb21lKGMgPT4gYy50ZXh0Lmxlbmd0aCA+PSAxNCkpIHtcblx0XHRjb25zb2xlLmxvZygnW29jcl0gTm8gU04tc2l6ZWQgY2FuZGlkYXRlIGZyb20gdGhlIGJhcmNvZGUgcm93LCBmYWxsaW5nIGJhY2sgdG8gdGV4dCByZWdpb24nKVxuXHRcdGNvbnN0IGZhbGxiYWNrID0gZmluZFRleHRSZWdpb24oY2FudmFzKVxuXHRcdGlmIChmYWxsYmFjaykge1xuXHRcdFx0cHJlcHJvY2Vzc2VkID0gcHJlcHJvY2VzcyhjYW52YXMsIGZhbGxiYWNrLCA0KVxuXHRcdFx0Y29uc3QgcjIgPSBhd2FpdCB3b3JrZXIucmVjb2duaXplKHByZXByb2Nlc3NlZClcblx0XHRcdHJhd1RleHQgPSByMi5kYXRhLnRleHRcblx0XHRcdGNhbmRpZGF0ZXMgPSBwYXJzZVNuQ2FuZGlkYXRlcyhyYXdUZXh0LCByMi5kYXRhLndvcmRzIHx8IFtdKVxuXHRcdH1cblx0fVxuXG5cdGlmIChvblByb2dyZXNzKSBvblByb2dyZXNzKHsgc3RhZ2U6ICdkb25lJywgcGVyY2VudDogMTAwIH0pXG5cdHJldHVybiB7IGNhbmRpZGF0ZXMsIHJhd1RleHQgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVNuQ2FuZGlkYXRlcyh0ZXh0LCB3b3Jkcykge1xuXHRjb25zdCBjYW5kaWRhdGVzID0gW11cblx0d29yZHMuZm9yRWFjaCh3ID0+IHtcblx0XHRjb25zdCB0ID0gKHcudGV4dCB8fCAnJykucmVwbGFjZSgvW15BLVowLTldL2dpLCAnJykudG9VcHBlckNhc2UoKVxuXHRcdGlmICh0Lmxlbmd0aCA+PSAxNykge1xuXHRcdFx0Y2FuZGlkYXRlcy5wdXNoKHtcblx0XHRcdFx0dGV4dDogdCxcblx0XHRcdFx0Y29uZmlkZW5jZTogTWF0aC5yb3VuZCgody5jb25maWRlbmNlIHx8IDgwKSlcblx0XHRcdH0pXG5cdFx0fVxuXHR9KVxuXHRpZiAoY2FuZGlkYXRlcy5sZW5ndGggPT09IDApIHtcblx0XHRjb25zdCBjbGVhbiA9IHRleHQucmVwbGFjZSgvW15BLVowLTldL2dpLCAnJykudG9VcHBlckNhc2UoKVxuXHRcdGNvbnN0IG1hdGNoZXMgPSBjbGVhbi5tYXRjaCgvW0EtWjAtOV17MTcsfS9nKSB8fCBbXVxuXHRcdG1hdGNoZXMuZm9yRWFjaChtID0+IGNhbmRpZGF0ZXMucHVzaCh7IHRleHQ6IG0sIGNvbmZpZGVuY2U6IDcwIH0pKVxuXHR9XG5cdGNvbnN0IHNlZW4gPSBuZXcgU2V0KClcblx0cmV0dXJuIGNhbmRpZGF0ZXNcblx0XHQuZmlsdGVyKGMgPT4gIXNlZW4uaGFzKGMudGV4dCkgJiYgc2Vlbi5hZGQoYy50ZXh0KSlcblx0XHQuc29ydCgoYSwgYikgPT4gYi5jb25maWRlbmNlIC0gYS5jb25maWRlbmNlKVxuXHRcdC5zbGljZSgwLCA1KVxufVxuXG5mdW5jdGlvbiBsb2FkSW1hZ2VUb0NhbnZhcyhmaWxlUGF0aCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXG5cdFx0aW1nLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcblx0XHRpbWcub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcblx0XHRcdGNhbnZhcy53aWR0aCA9IGltZy5uYXR1cmFsV2lkdGhcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSBpbWcubmF0dXJhbEhlaWdodFxuXHRcdFx0Y29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcblx0XHRcdGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKVxuXHRcdFx0cmVzb2x2ZShjYW52YXMpXG5cdFx0fVxuXHRcdGltZy5vbmVycm9yID0gKGUpID0+IHJlamVjdChuZXcgRXJyb3IoJ0ltYWdlIGZhaWxlZCB0byBsb2FkOiAnICsgKGUubWVzc2FnZSB8fCBlKSkpXG5cdFx0aW1nLnNyYyA9IGZpbGVQYXRoXG5cdH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZXN0cm95KCkge1xuXHRpZiAoX3Rlc3NlcmFjdFdvcmtlcikge1xuXHRcdGF3YWl0IF90ZXNzZXJhY3RXb3JrZXIudGVybWluYXRlKClcblx0XHRfdGVzc2VyYWN0V29ya2VyID0gbnVsbFxuXHR9XG59XG5cbi8vID09PT09PT09PT09PT09IFVNRCBjb21wYXRpYmlsaXR5IChzY3JpcHQtdGFnIGxvYWRpbmcpID09PT09PT09PT09PT09XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0d2luZG93LlNuT2NyID0ge1xuXHRcdGxvYWRUZXNzZXJhY3QsXG5cdFx0ZmluZFJlZEJveCxcblx0XHRmaW5kVGV4dFJlZ2lvbixcblx0XHRmaW5kU25Sb3dBYm92ZUJhcmNvZGUsXG5cdFx0cHJlcHJvY2Vzcyxcblx0XHRyZWNvZ25pemVTbkZyb21JbWFnZSxcblx0XHRkZXN0cm95LFxuXHRcdHBhcnNlU25DYW5kaWRhdGVzLFxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */,
/* 45 */
/*!***********************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/history/history.vue?mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _history_vue_vue_type_template_id_6bc72b80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.vue?vue&type=template&id=6bc72b80&scoped=true&mpType=page */ 46);\n/* harmony import */ var _history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.vue?vue&type=script&lang=js&mpType=page */ 48);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _history_vue_vue_type_template_id_6bc72b80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _history_vue_vue_type_template_id_6bc72b80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6bc72b80\",\n  null,\n  false,\n  _history_vue_vue_type_template_id_6bc72b80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/history/history.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkk7QUFDM0k7QUFDc0U7QUFDTDs7O0FBR2pFO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSx5R0FBTTtBQUNSLEVBQUUsa0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2hpc3RvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiYzcyYjgwJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9oaXN0b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9oaXN0b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNmJjNzJiODBcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaGlzdG9yeS9oaXN0b3J5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///45\n");

/***/ }),
/* 46 */
/*!*****************************************************************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/history/history.vue?vue&type=template&id=6bc72b80&scoped=true&mpType=page ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_template_id_6bc72b80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./history.vue?vue&type=template&id=6bc72b80&scoped=true&mpType=page */ 47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_template_id_6bc72b80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_template_id_6bc72b80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_template_id_6bc72b80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_template_id_6bc72b80_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 47 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/history/history.vue?vue&type=template&id=6bc72b80&scoped=true&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "header card"), attrs: { _i: 1 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(2, "sc", "stat"), attrs: { _i: 2 } },
            [
              _c("text", {
                staticClass: _vm._$s(3, "sc", "stat-label"),
                attrs: { _i: 3 },
              }),
              _c(
                "text",
                {
                  staticClass: _vm._$s(4, "sc", "stat-value"),
                  attrs: { _i: 4 },
                },
                [_vm._v(_vm._$s(4, "t0-0", _vm._s(_vm.list.length)))]
              ),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(5, "sc", "stat pass"), attrs: { _i: 5 } },
            [
              _c("text", {
                staticClass: _vm._$s(6, "sc", "stat-label"),
                attrs: { _i: 6 },
              }),
              _c(
                "text",
                {
                  staticClass: _vm._$s(7, "sc", "stat-value"),
                  attrs: { _i: 7 },
                },
                [_vm._v(_vm._$s(7, "t0-0", _vm._s(_vm.passCount)))]
              ),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(8, "sc", "stat fail"), attrs: { _i: 8 } },
            [
              _c("text", {
                staticClass: _vm._$s(9, "sc", "stat-label"),
                attrs: { _i: 9 },
              }),
              _c(
                "text",
                {
                  staticClass: _vm._$s(10, "sc", "stat-value"),
                  attrs: { _i: 10 },
                },
                [_vm._v(_vm._$s(10, "t0-0", _vm._s(_vm.failCount)))]
              ),
            ]
          ),
        ]
      ),
      _vm._$s(11, "i", _vm.list.length === 0)
        ? _c(
            "view",
            { staticClass: _vm._$s(11, "sc", "empty"), attrs: { _i: 11 } },
            [_c("text"), _c("view")]
          )
        : _c(
            "view",
            { attrs: { _i: 14 } },
            [
              _vm._l(
                _vm._$s(15, "f", { forItems: _vm.list }),
                function (it, i, $20, $30) {
                  return _c(
                    "view",
                    {
                      key: _vm._$s(15, "f", { forIndex: $20, key: i }),
                      staticClass: _vm._$s("15-" + $30, "sc", "item card"),
                      attrs: { _i: "15-" + $30 },
                      on: {
                        click: function ($event) {
                          return _vm.goResult(it.sn)
                        },
                      },
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s("16-" + $30, "sc", "item-left"),
                          attrs: { _i: "16-" + $30 },
                        },
                        [
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s("17-" + $30, "sc", "badge"),
                              class: _vm._$s(
                                "17-" + $30,
                                "c",
                                it.matched ? "pass" : "fail"
                              ),
                              attrs: { _i: "17-" + $30 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  "17-" + $30,
                                  "t0-0",
                                  _vm._s(it.matched ? "OK" : "NO")
                                )
                              ),
                            ]
                          ),
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s("18-" + $30, "sc", "item-main"),
                          attrs: { _i: "18-" + $30 },
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "19-" + $30,
                                "sc",
                                "item-sn"
                              ),
                              attrs: { _i: "19-" + $30 },
                            },
                            [
                              _vm._v(
                                _vm._$s("19-" + $30, "t0-0", _vm._s(it.sn))
                              ),
                            ]
                          ),
                          _c(
                            "view",
                            {
                              staticClass: _vm._$s(
                                "20-" + $30,
                                "sc",
                                "item-time"
                              ),
                              attrs: { _i: "20-" + $30 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  "20-" + $30,
                                  "t0-0",
                                  _vm._s(_vm.formatTime(it.time))
                                )
                              ),
                            ]
                          ),
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s("21-" + $30, "sc", "item-right"),
                          attrs: { _i: "21-" + $30 },
                        },
                        [
                          _c("text", {
                            staticClass: _vm._$s("22-" + $30, "sc", "del"),
                            attrs: { _i: "22-" + $30 },
                            on: {
                              click: function ($event) {
                                $event.stopPropagation()
                                return _vm.del(i)
                              },
                            },
                          }),
                        ]
                      ),
                    ]
                  )
                }
              ),
              _c("button", {
                staticClass: _vm._$s(23, "sc", "btn gray"),
                attrs: { _i: 23 },
                on: { click: _vm.clearAll },
              }),
            ],
            2
          ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 48 */
/*!***********************************************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/history/history.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./history.vue?vue&type=script&lang=js&mpType=page */ 49);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTh1QixDQUFnQix3dEJBQUcsRUFBQyIsImZpbGUiOiI0OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hpc3RvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hpc3RvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///48\n");

/***/ }),
/* 49 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/history/history.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      list: []\n    };\n  },\n  computed: {\n    passCount: function passCount() {\n      return this.list.filter(function (x) {\n        return x.matched;\n      }).length;\n    },\n    failCount: function failCount() {\n      return this.list.filter(function (x) {\n        return !x.matched;\n      }).length;\n    }\n  },\n  onShow: function onShow() {\n    this.load();\n  },\n  methods: {\n    load: function load() {\n      this.list = uni.getStorageSync('scan_history') || [];\n    },\n    formatTime: function formatTime(ts) {\n      var d = new Date(ts);\n      var pad = function pad(n) {\n        return String(n).padStart(2, '0');\n      };\n      return \"\".concat(d.getMonth() + 1, \"-\").concat(d.getDate(), \" \").concat(pad(d.getHours()), \":\").concat(pad(d.getMinutes()), \":\").concat(pad(d.getSeconds()));\n    },\n    goResult: function goResult(sn) {\n      uni.redirectTo({\n        url: \"/pages/result/result?sn=\".concat(encodeURIComponent(sn))\n      });\n    },\n    del: function del(i) {\n      var _this = this;\n      uni.showModal({\n        title: 'Delete',\n        content: 'Delete this record?',\n        success: function success(res) {\n          if (res.confirm) {\n            _this.list.splice(i, 1);\n            uni.setStorageSync('scan_history', _this.list);\n          }\n        }\n      });\n    },\n    clearAll: function clearAll() {\n      var _this2 = this;\n      uni.showModal({\n        title: 'Clear All',\n        content: 'Clear all records?',\n        success: function success(res) {\n          if (res.confirm) {\n            _this2.list = [];\n            uni.removeStorageSync('scan_history');\n          }\n        }\n      });\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaGlzdG9yeS9oaXN0b3J5LnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwibGlzdCIsImNvbXB1dGVkIiwicGFzc0NvdW50IiwiZmlsdGVyIiwieCIsIm1hdGNoZWQiLCJsZW5ndGgiLCJmYWlsQ291bnQiLCJvblNob3ciLCJsb2FkIiwibWV0aG9kcyIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwiZm9ybWF0VGltZSIsInRzIiwiZCIsIkRhdGUiLCJwYWQiLCJuIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZ29SZXN1bHQiLCJzbiIsInJlZGlyZWN0VG8iLCJ1cmwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJkZWwiLCJpIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJzcGxpY2UiLCJzZXRTdG9yYWdlU3luYyIsImNsZWFyQWxsIiwicmVtb3ZlU3RvcmFnZVN5bmMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxlQUVlO0VBQ2RBLElBQUksa0JBQUc7SUFDTixPQUFPO01BQ05DLElBQUksRUFBRTtJQUNQLENBQUM7RUFDRixDQUFDO0VBQ0RDLFFBQVEsRUFBRTtJQUNUQyxTQUFTLHVCQUFHO01BQ1gsT0FBTyxJQUFJLENBQUNGLElBQUksQ0FBQ0csTUFBTSxDQUFDLFVBQUFDLENBQUM7UUFBQSxPQUFJQSxDQUFDLENBQUNDLE9BQU87TUFBQSxFQUFDLENBQUNDLE1BQU07SUFDL0MsQ0FBQztJQUNEQyxTQUFTLHVCQUFHO01BQ1gsT0FBTyxJQUFJLENBQUNQLElBQUksQ0FBQ0csTUFBTSxDQUFDLFVBQUFDLENBQUM7UUFBQSxPQUFJLENBQUNBLENBQUMsQ0FBQ0MsT0FBTztNQUFBLEVBQUMsQ0FBQ0MsTUFBTTtJQUNoRDtFQUNELENBQUM7RUFDREUsTUFBTSxvQkFBRztJQUNSLElBQUksQ0FBQ0MsSUFBSSxFQUFFO0VBQ1osQ0FBQztFQUNEQyxPQUFPLEVBQUU7SUFDUkQsSUFBSSxrQkFBRztNQUNOLElBQUksQ0FBQ1QsSUFBSSxHQUFHVyxHQUFHLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFO0lBQ3JELENBQUM7SUFDREMsVUFBVSxzQkFBQ0MsRUFBRSxFQUFFO01BQ2QsSUFBTUMsQ0FBQyxHQUFHLElBQUlDLElBQUksQ0FBQ0YsRUFBRSxDQUFDO01BQ3RCLElBQU1HLEdBQUcsR0FBRyxTQUFOQSxHQUFHLENBQUdDLENBQUM7UUFBQSxPQUFJQyxNQUFNLENBQUNELENBQUMsQ0FBQyxDQUFDRSxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztNQUFBO01BQzNDLGlCQUFVTCxDQUFDLENBQUNNLFFBQVEsRUFBRSxHQUFDLENBQUMsY0FBSU4sQ0FBQyxDQUFDTyxPQUFPLEVBQUUsY0FBSUwsR0FBRyxDQUFDRixDQUFDLENBQUNRLFFBQVEsRUFBRSxDQUFDLGNBQUlOLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDUyxVQUFVLEVBQUUsQ0FBQyxjQUFJUCxHQUFHLENBQUNGLENBQUMsQ0FBQ1UsVUFBVSxFQUFFLENBQUM7SUFDM0csQ0FBQztJQUNEQyxRQUFRLG9CQUFDQyxFQUFFLEVBQUU7TUFDWmhCLEdBQUcsQ0FBQ2lCLFVBQVUsQ0FBQztRQUFFQyxHQUFHLG9DQUE2QkMsa0JBQWtCLENBQUNILEVBQUUsQ0FBQztNQUFHLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBQ0RJLEdBQUcsZUFBQ0MsQ0FBQyxFQUFFO01BQUE7TUFDTnJCLEdBQUcsQ0FBQ3NCLFNBQVMsQ0FBQztRQUNiQyxLQUFLLEVBQUUsUUFBUTtRQUNmQyxPQUFPLEVBQUUscUJBQXFCO1FBQzlCQyxPQUFPLEVBQUUsaUJBQUNDLEdBQUcsRUFBSztVQUNqQixJQUFJQSxHQUFHLENBQUNDLE9BQU8sRUFBRTtZQUNoQixLQUFJLENBQUN0QyxJQUFJLENBQUN1QyxNQUFNLENBQUNQLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdEJyQixHQUFHLENBQUM2QixjQUFjLENBQUMsY0FBYyxFQUFFLEtBQUksQ0FBQ3hDLElBQUksQ0FBQztVQUM5QztRQUNEO01BQ0QsQ0FBQyxDQUFDO0lBQ0gsQ0FBQztJQUNEeUMsUUFBUSxzQkFBRztNQUFBO01BQ1Y5QixHQUFHLENBQUNzQixTQUFTLENBQUM7UUFDYkMsS0FBSyxFQUFFLFdBQVc7UUFDbEJDLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0JDLE9BQU8sRUFBRSxpQkFBQ0MsR0FBRyxFQUFLO1VBQ2pCLElBQUlBLEdBQUcsQ0FBQ0MsT0FBTyxFQUFFO1lBQ2hCLE1BQUksQ0FBQ3RDLElBQUksR0FBRyxFQUFFO1lBQ2RXLEdBQUcsQ0FBQytCLGlCQUFpQixDQUFDLGNBQWMsQ0FBQztVQUN0QztRQUNEO01BQ0QsQ0FBQyxDQUFDO0lBQ0g7RUFDRDtBQUNELENBQUM7QUFBQSIsImZpbGUiOiI0OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGxpc3Q6IFtdXG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdHBhc3NDb3VudCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmxpc3QuZmlsdGVyKHggPT4geC5tYXRjaGVkKS5sZW5ndGhcblx0XHR9LFxuXHRcdGZhaWxDb3VudCgpIHtcblx0XHRcdHJldHVybiB0aGlzLmxpc3QuZmlsdGVyKHggPT4gIXgubWF0Y2hlZCkubGVuZ3RoXG5cdFx0fVxuXHR9LFxuXHRvblNob3coKSB7XG5cdFx0dGhpcy5sb2FkKClcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGxvYWQoKSB7XG5cdFx0XHR0aGlzLmxpc3QgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3NjYW5faGlzdG9yeScpIHx8IFtdXG5cdFx0fSxcblx0XHRmb3JtYXRUaW1lKHRzKSB7XG5cdFx0XHRjb25zdCBkID0gbmV3IERhdGUodHMpXG5cdFx0XHRjb25zdCBwYWQgPSBuID0+IFN0cmluZyhuKS5wYWRTdGFydCgyLCAnMCcpXG5cdFx0XHRyZXR1cm4gYCR7ZC5nZXRNb250aCgpKzF9LSR7ZC5nZXREYXRlKCl9ICR7cGFkKGQuZ2V0SG91cnMoKSl9OiR7cGFkKGQuZ2V0TWludXRlcygpKX06JHtwYWQoZC5nZXRTZWNvbmRzKCkpfWBcblx0XHR9LFxuXHRcdGdvUmVzdWx0KHNuKSB7XG5cdFx0XHR1bmkucmVkaXJlY3RUbyh7IHVybDogYC9wYWdlcy9yZXN1bHQvcmVzdWx0P3NuPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNuKX1gIH0pXG5cdFx0fSxcblx0XHRkZWwoaSkge1xuXHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdHRpdGxlOiAnRGVsZXRlJyxcblx0XHRcdFx0Y29udGVudDogJ0RlbGV0ZSB0aGlzIHJlY29yZD8nLFxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxpc3Quc3BsaWNlKGksIDEpXG5cdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoJ3NjYW5faGlzdG9yeScsIHRoaXMubGlzdClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSxcblx0XHRjbGVhckFsbCgpIHtcblx0XHRcdHVuaS5zaG93TW9kYWwoe1xuXHRcdFx0XHR0aXRsZTogJ0NsZWFyIEFsbCcsXG5cdFx0XHRcdGNvbnRlbnQ6ICdDbGVhciBhbGwgcmVjb3Jkcz8nLFxuXHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxpc3QgPSBbXVxuXHRcdFx0XHRcdFx0dW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdzY2FuX2hpc3RvcnknKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///49\n");

/***/ }),
/* 50 */
/*!***************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/sn7/sn7.vue?mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sn7_vue_vue_type_template_id_29e52250_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sn7.vue?vue&type=template&id=29e52250&scoped=true&mpType=page */ 51);\n/* harmony import */ var _sn7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sn7.vue?vue&type=script&lang=js&mpType=page */ 53);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sn7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sn7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _sn7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _sn7_vue_vue_type_template_id_29e52250_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _sn7_vue_vue_type_template_id_29e52250_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"29e52250\",\n  null,\n  false,\n  _sn7_vue_vue_type_template_id_29e52250_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/sn7/sn7.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDa0U7QUFDTDs7O0FBRzdEO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3NuNy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjllNTIyNTAmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NuNy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vc243LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjllNTIyNTBcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvc243L3NuNy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///50\n");

/***/ }),
/* 51 */
/*!*********************************************************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/sn7/sn7.vue?vue&type=template&id=29e52250&scoped=true&mpType=page ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sn7_vue_vue_type_template_id_29e52250_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./sn7.vue?vue&type=template&id=29e52250&scoped=true&mpType=page */ 52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sn7_vue_vue_type_template_id_29e52250_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sn7_vue_vue_type_template_id_29e52250_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sn7_vue_vue_type_template_id_29e52250_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sn7_vue_vue_type_template_id_29e52250_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 52 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/sn7/sn7.vue?vue&type=template&id=29e52250&scoped=true&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "header card"), attrs: { _i: 1 } },
        [
          _c("view", {
            staticClass: _vm._$s(2, "sc", "h-title"),
            attrs: { _i: 2 },
          }),
          _c("view", {
            staticClass: _vm._$s(3, "sc", "h-sub"),
            attrs: { _i: 3 },
          }),
        ]
      ),
      _c(
        "view",
        { staticClass: _vm._$s(4, "sc", "input-card card"), attrs: { _i: 4 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(5, "sc", "input-row"), attrs: { _i: 5 } },
            [
              _c("text", {
                staticClass: _vm._$s(6, "sc", "prefix"),
                attrs: { _i: 6 },
              }),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.suffix,
                    expression: "suffix",
                  },
                ],
                staticClass: _vm._$s(7, "sc", "sn-input"),
                attrs: { focus: _vm._$s(7, "a-focus", _vm.autoFocus), _i: 7 },
                domProps: { value: _vm._$s(7, "v-model", _vm.suffix) },
                on: {
                  input: [
                    function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.suffix = $event.target.value
                    },
                    _vm.onInput,
                  ],
                  confirm: _vm.onQuery,
                },
              }),
              _vm._$s(8, "i", _vm.suffix)
                ? _c("button", {
                    staticClass: _vm._$s(8, "sc", "btn-clear"),
                    attrs: { _i: 8 },
                    on: {
                      click: function ($event) {
                        _vm.suffix = ""
                      },
                    },
                  })
                : _vm._e(),
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(9, "sc", "input-hint"), attrs: { _i: 9 } },
            [
              _vm._$s(10, "i", _vm.suffix.length === 0)
                ? _c("text")
                : _vm._$s(11, "e", _vm.suffix.length < 4)
                ? _c(
                    "text",
                    {
                      staticClass: _vm._$s(11, "sc", "warn"),
                      attrs: { _i: 11 },
                    },
                    [_vm._v(_vm._$s(11, "t0-0", _vm._s(_vm.suffix.length)))]
                  )
                : _vm._$s(12, "e", _vm.suffix.length > 7)
                ? _c(
                    "text",
                    { staticClass: _vm._$s(12, "sc", "ok"), attrs: { _i: 12 } },
                    [_vm._v(_vm._$s(12, "t0-0", _vm._s(_vm.effectiveSuffix)))]
                  )
                : _c(
                    "text",
                    { staticClass: _vm._$s(13, "sc", "ok"), attrs: { _i: 13 } },
                    [_vm._v(_vm._$s(13, "t0-0", _vm._s(_vm.suffix.length)))]
                  ),
            ]
          ),
          _c(
            "button",
            {
              staticClass: _vm._$s(14, "sc", "btn-query"),
              attrs: {
                disabled: _vm._$s(14, "a-disabled", !_vm.canQuery),
                _i: 14,
              },
              on: { click: _vm.onQuery },
            },
            [
              _c("text", [
                _vm._v(_vm._$s(15, "t0-0", _vm._s(_vm.effectiveSuffix.length))),
              ]),
            ]
          ),
        ]
      ),
      _vm._$s(16, "i", _vm.queried)
        ? _c(
            "view",
            {
              staticClass: _vm._$s(16, "sc", "results card"),
              attrs: { _i: 16 },
            },
            [
              _vm._$s(17, "i", _vm.results.length === 0)
                ? _c(
                    "view",
                    {
                      staticClass: _vm._$s(17, "sc", "empty"),
                      attrs: { _i: 17 },
                    },
                    [
                      _c("view", {
                        staticClass: _vm._$s(18, "sc", "empty-icon"),
                        attrs: { _i: 18 },
                      }),
                      _c("view", {
                        staticClass: _vm._$s(19, "sc", "empty-title"),
                        attrs: { _i: 19 },
                      }),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(20, "sc", "empty-sub"),
                          attrs: { _i: 20 },
                        },
                        [
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s(21, "sc", "mono"),
                              attrs: { _i: 21 },
                            },
                            [
                              _vm._v(
                                _vm._$s(21, "t0-0", _vm._s(_vm.queriedSuffix))
                              ),
                            ]
                          ),
                          _vm._v(_vm._$s(20, "t2-0", _vm._s(_vm.stats.count))),
                        ]
                      ),
                    ]
                  )
                : _c(
                    "view",
                    { attrs: { _i: 22 } },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(23, "sc", "r-title"),
                          attrs: { _i: 23 },
                        },
                        [
                          _vm._v(
                            _vm._$s(23, "t0-0", _vm._s(_vm.results.length)) +
                              _vm._$s(
                                23,
                                "t0-1",
                                _vm._s(
                                  _vm.results.length > 20
                                    ? ", showing top 20"
                                    : ""
                                )
                              )
                          ),
                        ]
                      ),
                      _vm._l(
                        _vm._$s(24, "f", { forItems: _vm.shownResults }),
                        function (it, idx, $20, $30) {
                          return _c(
                            "view",
                            {
                              key: _vm._$s(24, "f", {
                                forIndex: $20,
                                key: it.sn,
                              }),
                              staticClass: _vm._$s("24-" + $30, "sc", "r-item"),
                              attrs: { _i: "24-" + $30 },
                              on: {
                                click: function ($event) {
                                  return _vm.pickSn(it.sn)
                                },
                              },
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    "25-" + $30,
                                    "sc",
                                    "r-num"
                                  ),
                                  attrs: { _i: "25-" + $30 },
                                },
                                [
                                  _vm._v(
                                    _vm._$s(
                                      "25-" + $30,
                                      "t0-0",
                                      _vm._s(idx + 1)
                                    )
                                  ),
                                ]
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: _vm._$s(
                                    "26-" + $30,
                                    "sc",
                                    "r-sn"
                                  ),
                                  attrs: { _i: "26-" + $30 },
                                },
                                [
                                  _c(
                                    "view",
                                    {
                                      staticClass: _vm._$s(
                                        "27-" + $30,
                                        "sc",
                                        "r-sn-val mono"
                                      ),
                                      attrs: { _i: "27-" + $30 },
                                    },
                                    [
                                      _vm._v(
                                        _vm._$s(
                                          "27-" + $30,
                                          "t0-0",
                                          _vm._s(it.sn)
                                        )
                                      ),
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      staticClass: _vm._$s(
                                        "28-" + $30,
                                        "sc",
                                        "r-sn-meta"
                                      ),
                                      attrs: { _i: "28-" + $30 },
                                    },
                                    [
                                      _c(
                                        "text",
                                        {
                                          staticClass: _vm._$s(
                                            "29-" + $30,
                                            "sc",
                                            "via-badge"
                                          ),
                                          class: _vm._$s(
                                            "29-" + $30,
                                            "c",
                                            _vm.viaClass(it.via)
                                          ),
                                          attrs: { _i: "29-" + $30 },
                                        },
                                        [
                                          _vm._v(
                                            _vm._$s(
                                              "29-" + $30,
                                              "t0-0",
                                              _vm._s(_vm.viaLabel(it.via))
                                            )
                                          ),
                                        ]
                                      ),
                                      _vm._$s("30-" + $30, "i", it.diff)
                                        ? _c(
                                            "text",
                                            {
                                              staticClass: _vm._$s(
                                                "30-" + $30,
                                                "sc",
                                                "r-diff"
                                              ),
                                              attrs: { _i: "30-" + $30 },
                                            },
                                            [
                                              _vm._v(
                                                _vm._$s(
                                                  "30-" + $30,
                                                  "t0-0",
                                                  _vm._s(it.diff)
                                                )
                                              ),
                                            ]
                                          )
                                        : _vm._e(),
                                    ]
                                  ),
                                ]
                              ),
                              _c("view", {
                                staticClass: _vm._$s(
                                  "31-" + $30,
                                  "sc",
                                  "r-arrow"
                                ),
                                attrs: { _i: "31-" + $30 },
                              }),
                            ]
                          )
                        }
                      ),
                      _vm._$s(32, "i", _vm.results.length > 20)
                        ? _c(
                            "view",
                            {
                              staticClass: _vm._$s(32, "sc", "r-more"),
                              attrs: { _i: 32 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  32,
                                  "t0-0",
                                  _vm._s(_vm.results.length - 20)
                                )
                              ),
                            ]
                          )
                        : _vm._e(),
                    ],
                    2
                  ),
            ]
          )
        : _vm._e(),
      _c(
        "view",
        { staticClass: _vm._$s(33, "sc", "tips card"), attrs: { _i: 33 } },
        [
          _c("view", {
            staticClass: _vm._$s(34, "sc", "tip-title"),
            attrs: { _i: 34 },
          }),
          _c("view", {
            staticClass: _vm._$s(35, "sc", "tip-line"),
            attrs: { _i: 35 },
          }),
          _c("view", {
            staticClass: _vm._$s(36, "sc", "tip-line"),
            attrs: { _i: 36 },
          }),
          _c("view", {
            staticClass: _vm._$s(37, "sc", "tip-line"),
            attrs: { _i: 37 },
          }),
          _c("view", {
            staticClass: _vm._$s(38, "sc", "tip-line"),
            attrs: { _i: 38 },
          }),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 53 */
/*!***************************************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/sn7/sn7.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sn7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./sn7.vue?vue&type=script&lang=js&mpType=page */ 54);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sn7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sn7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sn7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sn7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_sn7_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTB1QixDQUFnQixvdEJBQUcsRUFBQyIsImZpbGUiOiI1My5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NuNy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc243LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///53\n");

/***/ }),
/* 54 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/sn7/sn7.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _auth = __webpack_require__(/*! ../../utils/auth.js */ 16);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar VIA_LABELS = {\n  'exact': 'Exact match',\n  'pos6': '6-of-7 positions hit',\n  'pos5': '5-of-7 positions hit',\n  'pos4': '4-of-6 positions hit'\n};\n// badge colors: green=all positions match / blue=one position off / orange=two positions off / dark orange=6-char input, two off\nvar VIA_CLASS = {\n  'exact': 'via-exact',\n  'pos6': 'via-fuzzy',\n  'pos5': 'via-degrade',\n  'pos4': 'via-frag4'\n};\nvar _default = {\n  data: function data() {\n    return {\n      suffix: '',\n      autoFocus: true,\n      queried: false,\n      queriedSuffix: '',\n      results: [],\n      // [{sn, via, rank, diff}]\n      stats: {\n        count: 0\n      }\n    };\n  },\n  computed: {\n    canQuery: function canQuery() {\n      return this.suffix.length >= 4;\n    },\n    // Effective suffix: when input exceeds 7 chars, take the last 7 automatically\n    effectiveSuffix: function effectiveSuffix() {\n      return this.suffix.length > 7 ? this.suffix.slice(-7) : this.suffix;\n    },\n    shownResults: function shownResults() {\n      return this.results.slice(0, 20);\n    }\n  },\n  onLoad: function onLoad(query) {\n    // ★ Support entering with a prefilled suffix (e.g. routed from the OCR page for <17-char input):\n    //   normalize, don't pop the keyboard, auto-run the fuzzy query\n    var s = String(query.suffix || query.shortText || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '');\n    if (s) {\n      this.suffix = s;\n      this.autoFocus = false;\n      this.onQuery();\n    }\n  },\n  onShow: function onShow() {\n    this.stats = (0, _auth.getWhitelistStats)();\n  },\n  methods: {\n    onInput: function onInput(e) {\n      // Auto-uppercase and filter non-alphanumerics (length not truncated; the query takes the last 7 automatically)\n      this.suffix = (e.detail.value || '').toUpperCase().replace(/[^A-Z0-9]/g, '');\n    },\n    onQuery: function onQuery() {\n      if (!this.canQuery) return;\n      this.queriedSuffix = this.effectiveSuffix;\n      this.results = (0, _auth.findSnBySuffixTolerant)(this.suffix);\n      this.queried = true;\n      __f__(\"log\", \"[sn7] Query \\\"\".concat(this.suffix, \"\\\" (effective suffix \").concat(this.queriedSuffix, \"): \").concat(this.results.length, \" results\"), \" at pages/sn7/sn7.vue:142\");\n      uni.vibrateShort && uni.vibrateShort({});\n    },\n    viaLabel: function viaLabel(via) {\n      return VIA_LABELS[via] || via;\n    },\n    viaClass: function viaClass(via) {\n      return VIA_CLASS[via] || 'via-exact';\n    },\n    pickSn: function pickSn(sn) {\n      // On selection, go to the result page with the original input; result.vue's doCheck() verifies centrally\n      __f__(\"log\", '[sn7] Selected:', sn, \" at pages/sn7/sn7.vue:153\");\n      uni.redirectTo({\n        url: \"/pages/result/result?sn=\".concat(encodeURIComponent(sn), \"&type=SUFFIX&input=\").concat(encodeURIComponent(this.queriedSuffix || this.suffix))\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 1)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvc243L3NuNy52dWUiXSwibmFtZXMiOlsiVklBX0xBQkVMUyIsIlZJQV9DTEFTUyIsImRhdGEiLCJzdWZmaXgiLCJhdXRvRm9jdXMiLCJxdWVyaWVkIiwicXVlcmllZFN1ZmZpeCIsInJlc3VsdHMiLCJzdGF0cyIsImNvdW50IiwiY29tcHV0ZWQiLCJjYW5RdWVyeSIsImxlbmd0aCIsImVmZmVjdGl2ZVN1ZmZpeCIsInNsaWNlIiwic2hvd25SZXN1bHRzIiwib25Mb2FkIiwicXVlcnkiLCJzIiwiU3RyaW5nIiwic2hvcnRUZXh0IiwidHJpbSIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSIsIm9uUXVlcnkiLCJvblNob3ciLCJnZXRXaGl0ZWxpc3RTdGF0cyIsIm1ldGhvZHMiLCJvbklucHV0IiwiZSIsImRldGFpbCIsInZhbHVlIiwiZmluZFNuQnlTdWZmaXhUb2xlcmFudCIsInVuaSIsInZpYnJhdGVTaG9ydCIsInZpYUxhYmVsIiwidmlhIiwidmlhQ2xhc3MiLCJwaWNrU24iLCJzbiIsInJlZGlyZWN0VG8iLCJ1cmwiLCJlbmNvZGVVUklDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQStFQTtBQS9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QyxHQUFHLENBQUMsSUFBSUEsR0FBRztJQUM5QixDQUFDO0lBQ0RDLFFBQVEsb0JBQUNELEdBQUcsRUFBRTtNQUNiLE9BQU9uQyxTQUFTLENBQUNtQyxHQUFHLENBQUMsSUFBSSxXQUFXO0lBQ3JDLENBQUM7SUFDREUsTUFBTSxrQkFBQ0MsRUFBRSxFQUFFO01BQ1Y7TUFDQSxhQUFZLGlCQUFpQixFQUFFQSxFQUFFO01BQ2pDTixHQUFHLENBQUNPLFVBQVUsQ0FBQztRQUNkQyxHQUFHLG9DQUE2QkMsa0JBQWtCLENBQUNILEVBQUUsQ0FBQyxnQ0FBc0JHLGtCQUFrQixDQUFDLElBQUksQ0FBQ3BDLGFBQWEsSUFBSSxJQUFJLENBQUNILE1BQU0sQ0FBQztNQUNsSSxDQUFDLENBQUM7SUFDSDtFQUNEO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjU0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5pbXBvcnQgeyBmaW5kU25CeVN1ZmZpeFRvbGVyYW50LCBnZXRXaGl0ZWxpc3RTdGF0cyB9IGZyb20gJy4uLy4uL3V0aWxzL2F1dGguanMnXG5cbmNvbnN0IFZJQV9MQUJFTFMgPSB7XG5cdCdleGFjdCc6ICdFeGFjdCBtYXRjaCcsXG5cdCdwb3M2JzogJzYtb2YtNyBwb3NpdGlvbnMgaGl0Jyxcblx0J3BvczUnOiAnNS1vZi03IHBvc2l0aW9ucyBoaXQnLFxuXHQncG9zNCc6ICc0LW9mLTYgcG9zaXRpb25zIGhpdCcsXG59XG4vLyBiYWRnZSBjb2xvcnM6IGdyZWVuPWFsbCBwb3NpdGlvbnMgbWF0Y2ggLyBibHVlPW9uZSBwb3NpdGlvbiBvZmYgLyBvcmFuZ2U9dHdvIHBvc2l0aW9ucyBvZmYgLyBkYXJrIG9yYW5nZT02LWNoYXIgaW5wdXQsIHR3byBvZmZcbmNvbnN0IFZJQV9DTEFTUyA9IHtcblx0J2V4YWN0JzogJ3ZpYS1leGFjdCcsXG5cdCdwb3M2JzogJ3ZpYS1mdXp6eScsXG5cdCdwb3M1JzogJ3ZpYS1kZWdyYWRlJyxcblx0J3BvczQnOiAndmlhLWZyYWc0Jyxcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzdWZmaXg6ICcnLFxuXHRcdFx0YXV0b0ZvY3VzOiB0cnVlLFxuXHRcdFx0cXVlcmllZDogZmFsc2UsXG5cdFx0XHRxdWVyaWVkU3VmZml4OiAnJyxcblx0XHRcdHJlc3VsdHM6IFtdLCAgIC8vIFt7c24sIHZpYSwgcmFuaywgZGlmZn1dXG5cdFx0XHRzdGF0czogeyBjb3VudDogMCB9XG5cdFx0fVxuXHR9LFxuXHRjb21wdXRlZDoge1xuXHRcdGNhblF1ZXJ5KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3VmZml4Lmxlbmd0aCA+PSA0XG5cdFx0fSxcblx0XHQvLyBFZmZlY3RpdmUgc3VmZml4OiB3aGVuIGlucHV0IGV4Y2VlZHMgNyBjaGFycywgdGFrZSB0aGUgbGFzdCA3IGF1dG9tYXRpY2FsbHlcblx0XHRlZmZlY3RpdmVTdWZmaXgoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zdWZmaXgubGVuZ3RoID4gNyA/IHRoaXMuc3VmZml4LnNsaWNlKC03KSA6IHRoaXMuc3VmZml4XG5cdFx0fSxcblx0XHRzaG93blJlc3VsdHMoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXN1bHRzLnNsaWNlKDAsIDIwKVxuXHRcdH1cblx0fSxcblx0b25Mb2FkKHF1ZXJ5KSB7XG5cdFx0Ly8g4piFIFN1cHBvcnQgZW50ZXJpbmcgd2l0aCBhIHByZWZpbGxlZCBzdWZmaXggKGUuZy4gcm91dGVkIGZyb20gdGhlIE9DUiBwYWdlIGZvciA8MTctY2hhciBpbnB1dCk6XG5cdFx0Ly8gICBub3JtYWxpemUsIGRvbid0IHBvcCB0aGUga2V5Ym9hcmQsIGF1dG8tcnVuIHRoZSBmdXp6eSBxdWVyeVxuXHRcdGNvbnN0IHMgPSBTdHJpbmcocXVlcnkuc3VmZml4IHx8IHF1ZXJ5LnNob3J0VGV4dCB8fCAnJykudHJpbSgpLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldL2csICcnKVxuXHRcdGlmIChzKSB7XG5cdFx0XHR0aGlzLnN1ZmZpeCA9IHNcblx0XHRcdHRoaXMuYXV0b0ZvY3VzID0gZmFsc2Vcblx0XHRcdHRoaXMub25RdWVyeSgpXG5cdFx0fVxuXHR9LFxuXHRvblNob3coKSB7XG5cdFx0dGhpcy5zdGF0cyA9IGdldFdoaXRlbGlzdFN0YXRzKClcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdG9uSW5wdXQoZSkge1xuXHRcdFx0Ly8gQXV0by11cHBlcmNhc2UgYW5kIGZpbHRlciBub24tYWxwaGFudW1lcmljcyAobGVuZ3RoIG5vdCB0cnVuY2F0ZWQ7IHRoZSBxdWVyeSB0YWtlcyB0aGUgbGFzdCA3IGF1dG9tYXRpY2FsbHkpXG5cdFx0XHR0aGlzLnN1ZmZpeCA9IChlLmRldGFpbC52YWx1ZSB8fCAnJykudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0vZywgJycpXG5cdFx0fSxcblx0XHRvblF1ZXJ5KCkge1xuXHRcdFx0aWYgKCF0aGlzLmNhblF1ZXJ5KSByZXR1cm5cblx0XHRcdHRoaXMucXVlcmllZFN1ZmZpeCA9IHRoaXMuZWZmZWN0aXZlU3VmZml4XG5cdFx0XHR0aGlzLnJlc3VsdHMgPSBmaW5kU25CeVN1ZmZpeFRvbGVyYW50KHRoaXMuc3VmZml4KVxuXHRcdFx0dGhpcy5xdWVyaWVkID0gdHJ1ZVxuXHRcdFx0Y29uc29sZS5sb2coYFtzbjddIFF1ZXJ5IFwiJHt0aGlzLnN1ZmZpeH1cIiAoZWZmZWN0aXZlIHN1ZmZpeCAke3RoaXMucXVlcmllZFN1ZmZpeH0pOiAke3RoaXMucmVzdWx0cy5sZW5ndGh9IHJlc3VsdHNgKVxuXHRcdFx0dW5pLnZpYnJhdGVTaG9ydCAmJiB1bmkudmlicmF0ZVNob3J0KHt9KVxuXHRcdH0sXG5cdFx0dmlhTGFiZWwodmlhKSB7XG5cdFx0XHRyZXR1cm4gVklBX0xBQkVMU1t2aWFdIHx8IHZpYVxuXHRcdH0sXG5cdFx0dmlhQ2xhc3ModmlhKSB7XG5cdFx0XHRyZXR1cm4gVklBX0NMQVNTW3ZpYV0gfHwgJ3ZpYS1leGFjdCdcblx0XHR9LFxuXHRcdHBpY2tTbihzbikge1xuXHRcdFx0Ly8gT24gc2VsZWN0aW9uLCBnbyB0byB0aGUgcmVzdWx0IHBhZ2Ugd2l0aCB0aGUgb3JpZ2luYWwgaW5wdXQ7IHJlc3VsdC52dWUncyBkb0NoZWNrKCkgdmVyaWZpZXMgY2VudHJhbGx5XG5cdFx0XHRjb25zb2xlLmxvZygnW3NuN10gU2VsZWN0ZWQ6Jywgc24pXG5cdFx0XHR1bmkucmVkaXJlY3RUbyh7XG5cdFx0XHRcdHVybDogYC9wYWdlcy9yZXN1bHQvcmVzdWx0P3NuPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNuKX0mdHlwZT1TVUZGSVgmaW5wdXQ9JHtlbmNvZGVVUklDb21wb25lbnQodGhpcy5xdWVyaWVkU3VmZml4IHx8IHRoaXMuc3VmZml4KX1gXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///54\n");

/***/ }),
/* 55 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 56 */
/*!*****************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/App.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 57);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDNk07QUFDN00sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjU2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///56\n");

/***/ }),
/* 57 */
/*!******************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 58);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVzQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiI1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///57\n");

/***/ }),
/* 58 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 1)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjU4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///58\n");

/***/ }),
/* 59 */
/*!********************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/scan/scan-h5.vue?mpType=page ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scan_h5_vue_vue_type_template_id_9d531158_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan-h5.vue?vue&type=template&id=9d531158&scoped=true&mpType=page */ 60);\n/* harmony import */ var _scan_h5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan-h5.vue?vue&type=script&lang=js&mpType=page */ 62);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _scan_h5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _scan_h5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _scan_h5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _scan_h5_vue_vue_type_template_id_9d531158_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _scan_h5_vue_vue_type_template_id_9d531158_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"9d531158\",\n  null,\n  false,\n  _scan_h5_vue_vue_type_template_id_9d531158_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/scan/scan-h5.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkk7QUFDM0k7QUFDc0U7QUFDTDs7O0FBR2pFO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSx5R0FBTTtBQUNSLEVBQUUsa0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3NjYW4taDUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlkNTMxMTU4JnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zY2FuLWg1LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9zY2FuLWg1LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOWQ1MzExNThcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvc2Nhbi9zY2FuLWg1LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///59\n");

/***/ }),
/* 60 */
/*!**************************************************************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/scan/scan-h5.vue?vue&type=template&id=9d531158&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_h5_vue_vue_type_template_id_9d531158_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./scan-h5.vue?vue&type=template&id=9d531158&scoped=true&mpType=page */ 61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_h5_vue_vue_type_template_id_9d531158_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_h5_vue_vue_type_template_id_9d531158_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_h5_vue_vue_type_template_id_9d531158_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_h5_vue_vue_type_template_id_9d531158_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 61 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/scan/scan-h5.vue?vue&type=template&id=9d531158&scoped=true&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "scan-page"), attrs: { _i: 0 } },
    [
      _c("view", {
        staticClass: _vm._$s(1, "sc", "video-box"),
        attrs: { id: "videoBox", _i: 1 },
      }),
      _c("view", { staticClass: _vm._$s(2, "sc", "frame"), attrs: { _i: 2 } }),
      _c("view", {
        staticClass: _vm._$s(3, "sc", "scanline"),
        attrs: { _i: 3 },
      }),
      _c("view", { staticClass: _vm._$s(4, "sc", "hint"), attrs: { _i: 4 } }),
      _vm._$s(5, "i", _vm.errorMsg)
        ? _c(
            "view",
            { staticClass: _vm._$s(5, "sc", "err-box"), attrs: { _i: 5 } },
            [
              _c(
                "view",
                { staticClass: _vm._$s(6, "sc", "err-text"), attrs: { _i: 6 } },
                [_vm._v(_vm._$s(6, "t0-0", _vm._s(_vm.errorMsg)))]
              ),
              _c("button", {
                staticClass: _vm._$s(7, "sc", "btn-ocr"),
                attrs: { _i: 7 },
                on: { click: _vm.goOcr },
              }),
            ]
          )
        : _vm._e(),
      _c(
        "view",
        { staticClass: _vm._$s(8, "sc", "actions"), attrs: { _i: 8 } },
        [
          _c("button", {
            staticClass: _vm._$s(9, "sc", "btn-cancel"),
            attrs: { _i: 9 },
            on: { click: _vm.goBack },
          }),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 62 */
/*!********************************************************************************************************************!*\
  !*** /Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/scan/scan-h5.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_h5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./scan-h5.vue?vue&type=script&lang=js&mpType=page */ 63);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_h5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_h5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_h5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_h5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_scan_h5_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTh1QixDQUFnQix3dEJBQUcsRUFBQyIsImZpbGUiOiI2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjYW4taDUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NjYW4taDUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///62\n");

/***/ }),
/* 63 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhouying/wwwroot/Xuefeng/APP/sn-check-list/pages/scan/scan-h5.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 2);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 13));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 15));\nvar _snValidate = __webpack_require__(/*! ../../utils/sn-validate.js */ 30);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// ★ H5-only camera scanner: uni.scanCode does not exist on H5, so we decode with\n//   zxing (same-origin static/zxing/zxing.library.min.js — no CDN dependency).\n//   When the camera is unavailable (HTTP deployment / permission denied), fall back\n//   to the photo-OCR page, which works on any H5 deployment.\nvar _default = {\n  data: function data() {\n    return {\n      errorMsg: '',\n      reader: null,\n      videoEl: null,\n      stopped: false,\n      watchdog: null,\n      lastTickAt: 0,\n      errCount: 0\n    };\n  },\n  mounted: function mounted() {\n    this.start();\n  },\n  onUnload: function onUnload() {\n    this.stop();\n  },\n  onHide: function onHide() {\n    this.stop();\n  },\n  methods: {\n    loadZxing: function loadZxing() {\n      if (window.ZXing) return Promise.resolve(window.ZXing);\n      return new Promise(function (resolve, reject) {\n        var s = document.createElement('script');\n        s.src = 'static/zxing/zxing.library.min.js';\n        s.onload = function () {\n          return resolve(window.ZXing);\n        };\n        s.onerror = function () {\n          return reject(new Error('failed to load the decoder'));\n        };\n        document.head.appendChild(s);\n      });\n    },\n    start: function start() {\n      var _this = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var ZXing, hints, video, box;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _this.stopped = false; // (re)activate — the watchdog restarts via stop()+start()\n                _context.prev = 1;\n                _context.next = 4;\n                return _this.loadZxing();\n              case 4:\n                ZXing = _context.sent;\n                if (!(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia)) {\n                  _context.next = 7;\n                  break;\n                }\n                throw new Error('Camera unavailable — the page must be opened over HTTPS');\n              case 7:\n                hints = new Map(); // 1D barcode formats on machine labels (+QR harmless for testing)\n                hints.set(ZXing.DecodeHintType.POSSIBLE_FORMATS, [ZXing.BarcodeFormat.CODE_128, ZXing.BarcodeFormat.EAN_13, ZXing.BarcodeFormat.EAN_8, ZXing.BarcodeFormat.CODE_39, ZXing.BarcodeFormat.QR_CODE]);\n                hints.set(ZXing.DecodeHintType.TRY_HARDER, true);\n                _this.reader = new ZXing.BrowserMultiFormatReader(hints);\n                // snappier retry cadence than the default\n                _this.reader.timeBetweenDecodingAttempts = 120;\n                video = document.createElement('video');\n                video.setAttribute('style', 'width:100%;height:100%;object-fit:cover;');\n                video.setAttribute('playsinline', '');\n                video.setAttribute('muted', '');\n                box = document.getElementById('videoBox');\n                box.innerHTML = '';\n                box.appendChild(video);\n                _this.videoEl = video;\n                _this.lastTickAt = Date.now();\n                _this.errCount = 0;\n                // ★ request HD resolution — the default 640x480 stream is too coarse\n                //   for dense Code128 barcodes (a top cause of \"camera works but never decodes\")\n                _this.reader.decodeFromConstraints({\n                  video: {\n                    facingMode: 'environment',\n                    width: {\n                      ideal: 1280\n                    },\n                    height: {\n                      ideal: 720\n                    }\n                  }\n                }, video, function (result, err) {\n                  if (_this.stopped) return;\n                  _this.lastTickAt = Date.now();\n                  if (result) {\n                    var text = String(result.getText() || '').trim();\n                    if (text) {\n                      _this.stop();\n                      // reuse the unified scan flow (length check → OCR guidance → result page)\n                      (0, _snValidate.dispatchScan)(text, 'H5SCAN', false);\n                    }\n                    return;\n                  }\n                  // decode errors are NORMAL per frame (NotFoundException until a code\n                  // is seen); log the first few + a periodic count for diagnosis\n                  if (err) {\n                    _this.errCount++;\n                    if (_this.errCount <= 3 || _this.errCount % 50 === 0) {\n                      __f__(\"log\", '[scan-h5] decode miss:', err && err.constructor && err.constructor.name, \" at pages/scan/scan-h5.vue:118\");\n                    }\n                  }\n                });\n\n                // ★ watchdog: zxing's internal loop silently STOPS on a non-retryable\n                //   error; if no tick arrives for 4s while active, restart the scanner\n                _this.watchdog = setInterval(function () {\n                  if (_this.stopped) return;\n                  if (Date.now() - _this.lastTickAt > 4000) {\n                    __f__(\"warn\", '[scan-h5] decode loop stalled, restarting scanner', \" at pages/scan/scan-h5.vue:128\");\n                    _this.stop();\n                    _this.start();\n                  }\n                }, 2000);\n                _context.next = 30;\n                break;\n              case 26:\n                _context.prev = 26;\n                _context.t0 = _context[\"catch\"](1);\n                __f__(\"warn\", '[scan-h5] start failed:', _context.t0, \" at pages/scan/scan-h5.vue:134\");\n                _this.errorMsg = _context.t0 && _context.t0.message || 'Camera failed to start';\n              case 30:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[1, 26]]);\n      }))();\n    },\n    stop: function stop() {\n      this.stopped = true;\n      if (this.watchdog) {\n        clearInterval(this.watchdog);\n        this.watchdog = null;\n      }\n      try {\n        if (this.reader) this.reader.reset();\n      } catch (e) {}\n      if (this.videoEl && this.videoEl.srcObject) {\n        this.videoEl.srcObject.getTracks().forEach(function (t) {\n          return t.stop();\n        });\n        this.videoEl.srcObject = null;\n      }\n    },\n    goBack: function goBack() {\n      uni.navigateBack();\n    },\n    goOcr: function goOcr() {\n      this.stop();\n      uni.redirectTo({\n        url: '/pages/ocr/ocr'\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 1)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvc2Nhbi9zY2FuLWg1LnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwiZXJyb3JNc2ciLCJyZWFkZXIiLCJ2aWRlb0VsIiwic3RvcHBlZCIsIndhdGNoZG9nIiwibGFzdFRpY2tBdCIsImVyckNvdW50IiwibW91bnRlZCIsInN0YXJ0Iiwib25VbmxvYWQiLCJzdG9wIiwib25IaWRlIiwibWV0aG9kcyIsImxvYWRaeGluZyIsIndpbmRvdyIsIlpYaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwib25sb2FkIiwib25lcnJvciIsIkVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiaGludHMiLCJNYXAiLCJzZXQiLCJEZWNvZGVIaW50VHlwZSIsIlBPU1NJQkxFX0ZPUk1BVFMiLCJCYXJjb2RlRm9ybWF0IiwiQ09ERV8xMjgiLCJFQU5fMTMiLCJFQU5fOCIsIkNPREVfMzkiLCJRUl9DT0RFIiwiVFJZX0hBUkRFUiIsIkJyb3dzZXJNdWx0aUZvcm1hdFJlYWRlciIsInRpbWVCZXR3ZWVuRGVjb2RpbmdBdHRlbXB0cyIsInZpZGVvIiwic2V0QXR0cmlidXRlIiwiYm94IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJEYXRlIiwibm93IiwiZGVjb2RlRnJvbUNvbnN0cmFpbnRzIiwiZmFjaW5nTW9kZSIsIndpZHRoIiwiaWRlYWwiLCJoZWlnaHQiLCJyZXN1bHQiLCJlcnIiLCJ0ZXh0IiwiU3RyaW5nIiwiZ2V0VGV4dCIsInRyaW0iLCJkaXNwYXRjaFNjYW4iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJzZXRJbnRlcnZhbCIsIm1lc3NhZ2UiLCJjbGVhckludGVydmFsIiwicmVzZXQiLCJlIiwic3JjT2JqZWN0IiwiZ2V0VHJhY2tzIiwiZm9yRWFjaCIsInQiLCJnb0JhY2siLCJ1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QyxRQUFRLEVBQUU7UUFDbEJnRSxhQUFhLENBQUMsSUFBSSxDQUFDaEUsUUFBUSxDQUFDO1FBQzVCLElBQUksQ0FBQ0EsUUFBUSxHQUFHLElBQUk7TUFDckI7TUFDQSxJQUFJO1FBQ0gsSUFBSSxJQUFJLENBQUNILE1BQU0sRUFBRSxJQUFJLENBQUNBLE1BQU0sQ0FBQ29FLEtBQUssRUFBRTtNQUNyQyxDQUFDLENBQUMsT0FBT0MsQ0FBQyxFQUFFLENBQUM7TUFDYixJQUFJLElBQUksQ0FBQ3BFLE9BQU8sSUFBSSxJQUFJLENBQUNBLE9BQU8sQ0FBQ3FFLFNBQVMsRUFBRTtRQUMzQyxJQUFJLENBQUNyRSxPQUFPLENBQUNxRSxTQUFTLENBQUNDLFNBQVMsRUFBRSxDQUFDQyxPQUFPLENBQUMsVUFBQUMsQ0FBQztVQUFBLE9BQUlBLENBQUMsQ0FBQ2hFLElBQUksRUFBRTtRQUFBLEVBQUM7UUFDekQsSUFBSSxDQUFDUixPQUFPLENBQUNxRSxTQUFTLEdBQUcsSUFBSTtNQUM5QjtJQUNELENBQUM7SUFDREksTUFBTSxvQkFBRztNQUNSQyxHQUFHLENBQUNDLFlBQVksRUFBRTtJQUNuQixDQUFDO0lBQ0RDLEtBQUssbUJBQUc7TUFDUCxJQUFJLENBQUNwRSxJQUFJLEVBQUU7TUFDWGtFLEdBQUcsQ0FBQ0csVUFBVSxDQUFDO1FBQUVDLEdBQUcsRUFBRTtNQUFpQixDQUFDLENBQUM7SUFDMUM7RUFDRDtBQUNELENBQUM7QUFBQSwyQiIsImZpbGUiOiI2My5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuLy8g4piFIEg1LW9ubHkgY2FtZXJhIHNjYW5uZXI6IHVuaS5zY2FuQ29kZSBkb2VzIG5vdCBleGlzdCBvbiBINSwgc28gd2UgZGVjb2RlIHdpdGhcbi8vICAgenhpbmcgKHNhbWUtb3JpZ2luIHN0YXRpYy96eGluZy96eGluZy5saWJyYXJ5Lm1pbi5qcyDigJQgbm8gQ0ROIGRlcGVuZGVuY3kpLlxuLy8gICBXaGVuIHRoZSBjYW1lcmEgaXMgdW5hdmFpbGFibGUgKEhUVFAgZGVwbG95bWVudCAvIHBlcm1pc3Npb24gZGVuaWVkKSwgZmFsbCBiYWNrXG4vLyAgIHRvIHRoZSBwaG90by1PQ1IgcGFnZSwgd2hpY2ggd29ya3Mgb24gYW55IEg1IGRlcGxveW1lbnQuXG5pbXBvcnQgeyBkaXNwYXRjaFNjYW4gfSBmcm9tICcuLi8uLi91dGlscy9zbi12YWxpZGF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRlcnJvck1zZzogJycsXG5cdFx0XHRyZWFkZXI6IG51bGwsXG5cdFx0XHR2aWRlb0VsOiBudWxsLFxuXHRcdFx0c3RvcHBlZDogZmFsc2UsXG5cdFx0XHR3YXRjaGRvZzogbnVsbCxcblx0XHRcdGxhc3RUaWNrQXQ6IDAsXG5cdFx0XHRlcnJDb3VudDogMFxuXHRcdH1cblx0fSxcblx0bW91bnRlZCgpIHtcblx0XHR0aGlzLnN0YXJ0KClcblx0fSxcblx0b25VbmxvYWQoKSB7XG5cdFx0dGhpcy5zdG9wKClcblx0fSxcblx0b25IaWRlKCkge1xuXHRcdHRoaXMuc3RvcCgpXG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRsb2FkWnhpbmcoKSB7XG5cdFx0XHRpZiAod2luZG93LlpYaW5nKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHdpbmRvdy5aWGluZylcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXHRcdFx0XHRzLnNyYyA9ICdzdGF0aWMvenhpbmcvenhpbmcubGlicmFyeS5taW4uanMnXG5cdFx0XHRcdHMub25sb2FkID0gKCkgPT4gcmVzb2x2ZSh3aW5kb3cuWlhpbmcpXG5cdFx0XHRcdHMub25lcnJvciA9ICgpID0+IHJlamVjdChuZXcgRXJyb3IoJ2ZhaWxlZCB0byBsb2FkIHRoZSBkZWNvZGVyJykpXG5cdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocylcblx0XHRcdH0pXG5cdFx0fSxcblx0XHRhc3luYyBzdGFydCgpIHtcblx0XHRcdHRoaXMuc3RvcHBlZCA9IGZhbHNlICAgLy8gKHJlKWFjdGl2YXRlIOKAlCB0aGUgd2F0Y2hkb2cgcmVzdGFydHMgdmlhIHN0b3AoKStzdGFydCgpXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBaWGluZyA9IGF3YWl0IHRoaXMubG9hZFp4aW5nKClcblx0XHRcdFx0aWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzIHx8ICFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcignQ2FtZXJhIHVuYXZhaWxhYmxlIOKAlCB0aGUgcGFnZSBtdXN0IGJlIG9wZW5lZCBvdmVyIEhUVFBTJylcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBoaW50cyA9IG5ldyBNYXAoKVxuXHRcdFx0XHQvLyAxRCBiYXJjb2RlIGZvcm1hdHMgb24gbWFjaGluZSBsYWJlbHMgKCtRUiBoYXJtbGVzcyBmb3IgdGVzdGluZylcblx0XHRcdFx0aGludHMuc2V0KFpYaW5nLkRlY29kZUhpbnRUeXBlLlBPU1NJQkxFX0ZPUk1BVFMsIFtcblx0XHRcdFx0XHRaWGluZy5CYXJjb2RlRm9ybWF0LkNPREVfMTI4LFxuXHRcdFx0XHRcdFpYaW5nLkJhcmNvZGVGb3JtYXQuRUFOXzEzLFxuXHRcdFx0XHRcdFpYaW5nLkJhcmNvZGVGb3JtYXQuRUFOXzgsXG5cdFx0XHRcdFx0WlhpbmcuQmFyY29kZUZvcm1hdC5DT0RFXzM5LFxuXHRcdFx0XHRcdFpYaW5nLkJhcmNvZGVGb3JtYXQuUVJfQ09ERVxuXHRcdFx0XHRdKVxuXHRcdFx0XHRoaW50cy5zZXQoWlhpbmcuRGVjb2RlSGludFR5cGUuVFJZX0hBUkRFUiwgdHJ1ZSlcblx0XHRcdFx0dGhpcy5yZWFkZXIgPSBuZXcgWlhpbmcuQnJvd3Nlck11bHRpRm9ybWF0UmVhZGVyKGhpbnRzKVxuXHRcdFx0XHQvLyBzbmFwcGllciByZXRyeSBjYWRlbmNlIHRoYW4gdGhlIGRlZmF1bHRcblx0XHRcdFx0dGhpcy5yZWFkZXIudGltZUJldHdlZW5EZWNvZGluZ0F0dGVtcHRzID0gMTIwXG5cblx0XHRcdFx0Y29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpXG5cdFx0XHRcdHZpZGVvLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvYmplY3QtZml0OmNvdmVyOycpXG5cdFx0XHRcdHZpZGVvLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAnJylcblx0XHRcdFx0dmlkZW8uc2V0QXR0cmlidXRlKCdtdXRlZCcsICcnKVxuXHRcdFx0XHRjb25zdCBib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW9Cb3gnKVxuXHRcdFx0XHRib3guaW5uZXJIVE1MID0gJydcblx0XHRcdFx0Ym94LmFwcGVuZENoaWxkKHZpZGVvKVxuXHRcdFx0XHR0aGlzLnZpZGVvRWwgPSB2aWRlb1xuXG5cdFx0XHRcdHRoaXMubGFzdFRpY2tBdCA9IERhdGUubm93KClcblx0XHRcdFx0dGhpcy5lcnJDb3VudCA9IDBcblx0XHRcdFx0Ly8g4piFIHJlcXVlc3QgSEQgcmVzb2x1dGlvbiDigJQgdGhlIGRlZmF1bHQgNjQweDQ4MCBzdHJlYW0gaXMgdG9vIGNvYXJzZVxuXHRcdFx0XHQvLyAgIGZvciBkZW5zZSBDb2RlMTI4IGJhcmNvZGVzIChhIHRvcCBjYXVzZSBvZiBcImNhbWVyYSB3b3JrcyBidXQgbmV2ZXIgZGVjb2Rlc1wiKVxuXHRcdFx0XHR0aGlzLnJlYWRlci5kZWNvZGVGcm9tQ29uc3RyYWludHMoe1xuXHRcdFx0XHRcdHZpZGVvOiB7XG5cdFx0XHRcdFx0XHRmYWNpbmdNb2RlOiAnZW52aXJvbm1lbnQnLFxuXHRcdFx0XHRcdFx0d2lkdGg6IHsgaWRlYWw6IDEyODAgfSxcblx0XHRcdFx0XHRcdGhlaWdodDogeyBpZGVhbDogNzIwIH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIHZpZGVvLCAocmVzdWx0LCBlcnIpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5zdG9wcGVkKSByZXR1cm5cblx0XHRcdFx0XHR0aGlzLmxhc3RUaWNrQXQgPSBEYXRlLm5vdygpXG5cdFx0XHRcdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgdGV4dCA9IFN0cmluZyhyZXN1bHQuZ2V0VGV4dCgpIHx8ICcnKS50cmltKClcblx0XHRcdFx0XHRcdGlmICh0ZXh0KSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcCgpXG5cdFx0XHRcdFx0XHRcdC8vIHJldXNlIHRoZSB1bmlmaWVkIHNjYW4gZmxvdyAobGVuZ3RoIGNoZWNrIOKGkiBPQ1IgZ3VpZGFuY2Ug4oaSIHJlc3VsdCBwYWdlKVxuXHRcdFx0XHRcdFx0XHRkaXNwYXRjaFNjYW4odGV4dCwgJ0g1U0NBTicsIGZhbHNlKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGRlY29kZSBlcnJvcnMgYXJlIE5PUk1BTCBwZXIgZnJhbWUgKE5vdEZvdW5kRXhjZXB0aW9uIHVudGlsIGEgY29kZVxuXHRcdFx0XHRcdC8vIGlzIHNlZW4pOyBsb2cgdGhlIGZpcnN0IGZldyArIGEgcGVyaW9kaWMgY291bnQgZm9yIGRpYWdub3Npc1xuXHRcdFx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0XHRcdHRoaXMuZXJyQ291bnQrK1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZXJyQ291bnQgPD0gMyB8fCB0aGlzLmVyckNvdW50ICUgNTAgPT09IDApIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ1tzY2FuLWg1XSBkZWNvZGUgbWlzczonLCBlcnIgJiYgZXJyLmNvbnN0cnVjdG9yICYmIGVyci5jb25zdHJ1Y3Rvci5uYW1lKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblxuXHRcdFx0XHQvLyDimIUgd2F0Y2hkb2c6IHp4aW5nJ3MgaW50ZXJuYWwgbG9vcCBzaWxlbnRseSBTVE9QUyBvbiBhIG5vbi1yZXRyeWFibGVcblx0XHRcdFx0Ly8gICBlcnJvcjsgaWYgbm8gdGljayBhcnJpdmVzIGZvciA0cyB3aGlsZSBhY3RpdmUsIHJlc3RhcnQgdGhlIHNjYW5uZXJcblx0XHRcdFx0dGhpcy53YXRjaGRvZyA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0XHRpZiAodGhpcy5zdG9wcGVkKSByZXR1cm5cblx0XHRcdFx0XHRpZiAoRGF0ZS5ub3coKSAtIHRoaXMubGFzdFRpY2tBdCA+IDQwMDApIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUud2FybignW3NjYW4taDVdIGRlY29kZSBsb29wIHN0YWxsZWQsIHJlc3RhcnRpbmcgc2Nhbm5lcicpXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3AoKVxuXHRcdFx0XHRcdFx0dGhpcy5zdGFydCgpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCAyMDAwKVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oJ1tzY2FuLWg1XSBzdGFydCBmYWlsZWQ6JywgZSlcblx0XHRcdFx0dGhpcy5lcnJvck1zZyA9IChlICYmIGUubWVzc2FnZSkgfHwgJ0NhbWVyYSBmYWlsZWQgdG8gc3RhcnQnXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRzdG9wKCkge1xuXHRcdFx0dGhpcy5zdG9wcGVkID0gdHJ1ZVxuXHRcdFx0aWYgKHRoaXMud2F0Y2hkb2cpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLndhdGNoZG9nKVxuXHRcdFx0XHR0aGlzLndhdGNoZG9nID0gbnVsbFxuXHRcdFx0fVxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0aWYgKHRoaXMucmVhZGVyKSB0aGlzLnJlYWRlci5yZXNldCgpXG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0aWYgKHRoaXMudmlkZW9FbCAmJiB0aGlzLnZpZGVvRWwuc3JjT2JqZWN0KSB7XG5cdFx0XHRcdHRoaXMudmlkZW9FbC5zcmNPYmplY3QuZ2V0VHJhY2tzKCkuZm9yRWFjaCh0ID0+IHQuc3RvcCgpKVxuXHRcdFx0XHR0aGlzLnZpZGVvRWwuc3JjT2JqZWN0ID0gbnVsbFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Z29CYWNrKCkge1xuXHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpXG5cdFx0fSxcblx0XHRnb09jcigpIHtcblx0XHRcdHRoaXMuc3RvcCgpXG5cdFx0XHR1bmkucmVkaXJlY3RUbyh7IHVybDogJy9wYWdlcy9vY3Ivb2NyJyB9KVxuXHRcdH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///63\n");

/***/ })
],[[0,"app-config"]]]);