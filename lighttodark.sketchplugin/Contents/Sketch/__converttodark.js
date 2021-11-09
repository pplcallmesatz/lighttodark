var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/converttodark.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/converttodark.js":
/*!******************************!*\
  !*** ./src/converttodark.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sketch = __webpack_require__(/*! sketch/dom */ "sketch/dom");

var async = __webpack_require__(/*! sketch/async */ "sketch/async");

var DataSupplier = __webpack_require__(/*! sketch/data-supplier */ "sketch/data-supplier");

var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");

var Settings = __webpack_require__(/*! sketch/settings */ "sketch/settings");

var Page = __webpack_require__(/*! sketch/dom */ "sketch/dom").Page;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var document = sketch.getSelectedDocument();
  var selectedLayers = document.selectedLayers;
  var selectedCount = selectedLayers.length;
  var page = document.selectedPage;
  var Artboard = sketch.Artboard;
  var ShapePath = sketch.ShapePath;
  var pageLayer = document.getLayersNamed("Light");
  var sharedStyles = document.sharedLayerStyles;
  var sharedTextStyles = document.sharedTextStyles;

  var SharedStyle = __webpack_require__(/*! sketch/dom */ "sketch/dom").SharedStyle;

  pageLayer.selected = false;
  var layers = document.getLayersNamed("Dark");

  if (layers.length) {
    for (var i = 0; i < layers.length; i++) {
      layers[i].remove();
    }

    duplicateThePage();
  } else {
    duplicateThePage();
  }

  function duplicateThePage() {
    var bb = pageLayer[0].duplicate();
    bb.name = "Dark";
    bb.selected = true; //document.centerOnLayer(bb.layers[0])

    last(bb);
    view(bb);
  }

  function last(page) {
    var art = page.layers;

    for (var _i = 0; _i < art.length; _i++) {
      rEiterate(art[_i].layers);
    }
  }

  function rEiterate(art) {
    var sharedStyle;

    var _loop = function _loop(_i2) {
      //console.log(art[i].type)
      switch (art[_i2].type) {
        case "ShapePath":
        case "Shape":
        case "Oval":
          if (art[_i2].sharedStyleId != null) {
            sharedStyle = document.getSharedLayerStyleWithID(art[_i2].sharedStyleId);
            layerIdError = ["layer", art[_i2].id, art[_i2].name];
            dd(sharedStyle, layerIdError);
          } else {}

          break;

        case "Text":
          if (art[_i2].sharedStyleId != null) {
            sharedStyle = document.getSharedTextStyleWithID(art[_i2].sharedStyleId);
            layerIdError = ["text", art[_i2].id, art[_i2].name];
            dd(sharedStyle, layerIdError);
          } else {}

          break;

        case "SymbolInstance":
          symbolToGroup = art[_i2].detach();
          rEiterate(symbolToGroup.layers);
          break;

        case "Override":
          break;

        case "Group":
          var checkGroupLayers = art[_i2].layers;

          if (art[_i2].sharedStyleId != null) {
            sharedStyle = document.getSharedLayerStyleWithID(art[_i2].sharedStyleId);
            layerIdError = ["layer", art[_i2].id, art[_i2].name];
            dd(sharedStyle, layerIdError);

            if (checkGroupLayers > 0) {
              rEiterate(art[_i2].layers);
            }
          } else {
            rEiterate(art[_i2].layers); //console.log(art[i].layers)
          }

          break;

        default: // code block

      }

      function dd(sharedStyle, type) {
        var myLayerStyle;
        var Name = sharedStyle.name;
        var splitName = Name.split("light/");

        if (splitName.length <= 1) {
          UI.message("There is a error in the selected layer: " + type[2]);
          var layerDefect = document.getLayerWithID(type[1]);

          if (layerDefect) {
            document.centerOnLayer(layerDefect);
            layerDefect.selected = true;
            return false;
          } else {}
        } else {}

        var getName = "dark/" + splitName[1];

        if (type[0] === "text") {
          myLayerStyle = sharedTextStyles.find(function (sharedTextStyles) {
            return sharedTextStyles.name == getName;
          });
        } else {
          myLayerStyle = sharedStyles.find(function (sharedStyles) {
            return sharedStyles.name == getName;
          });
        }

        var shStyle = [myLayerStyle.style, myLayerStyle.id];
        art[_i2].style = shStyle[0];
        art[_i2].sharedStyleId = shStyle[1];
      }
    };

    for (var _i2 = 0; _i2 < art.length; _i2++) {
      var layerIdError;
      var layerIdError;
      var symbolToGroup;
      var layerIdError;

      _loop(_i2);
    }
  }

  function view(data) {
    document.centerOnLayer(data.layers[0]);
  }

  document.save();
  UI.message("Document saved Successfully 🎉");
});

/***/ }),

/***/ "sketch/async":
/*!*******************************!*\
  !*** external "sketch/async" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/async");

/***/ }),

/***/ "sketch/data-supplier":
/*!***************************************!*\
  !*** external "sketch/data-supplier" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/data-supplier");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=__converttodark.js.map