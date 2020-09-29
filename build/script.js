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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_calculatorData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/calculatorData */ "./src/js/calculatorData.js");
/* harmony import */ var _js_components_Calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/Calculator */ "./src/js/components/Calculator.js");


var calculator = new _js_components_Calculator__WEBPACK_IMPORTED_MODULE_1__["Calculator"]({
  parentClass: null,
  calculatorClasses: ['calculator-grid']
});
calculator.renderOutput({
  outputClasses: ['output', 'span-4'],
  previousOperandClasses: ['previous-operand'],
  currentOperandClasses: ['current-operand']
});
calculator.renderButtons(_js_calculatorData__WEBPACK_IMPORTED_MODULE_0__["calculatorData"]);

/***/ }),

/***/ "./src/js/calculatorData.js":
/*!**********************************!*\
  !*** ./src/js/calculatorData.js ***!
  \**********************************/
/*! exports provided: calculatorData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatorData", function() { return calculatorData; });
var calculatorData = [{
  'AC': ['button', 'span-2']
}, {
  'DEL': ['button', 'span-1']
}, {
  '÷': ['button', 'span-1']
}, {
  '1': ['button', 'span-1']
}, {
  '2': ['button', 'span-1']
}, {
  '3': ['button', 'span-1']
}, {
  '×': ['button', 'span-1']
}, {
  '4': ['button', 'span-1']
}, {
  '5': ['button', 'span-1']
}, {
  '6': ['button', 'span-1']
}, {
  '+': ['button', 'span-1']
}, {
  '7': ['button', 'span-1']
}, {
  '8': ['button', 'span-1']
}, {
  '9': ['button', 'span-1']
}, {
  '-': ['button', 'span-1']
}, {
  '.': ['button', 'span-1']
}, {
  '0': ['button', 'span-1']
}, {
  '=': ['button', 'span-2']
}];

/***/ }),

/***/ "./src/js/components/Calculator.js":
/*!*****************************************!*\
  !*** ./src/js/components/Calculator.js ***!
  \*****************************************/
/*! exports provided: Calculator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calculator", function() { return Calculator; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Calculator = /*#__PURE__*/function () {
  function Calculator(_ref) {
    var _ref$parentClass = _ref.parentClass,
        parentClass = _ref$parentClass === void 0 ? null : _ref$parentClass,
        calculatorClasses = _ref.calculatorClasses;

    _classCallCheck(this, Calculator);

    this.calculator = this._createElementWithClasses.apply(this, ['div'].concat(_toConsumableArray(calculatorClasses)));

    if (parentClass === null) {
      this._addElementsToParent(document.querySelector('body'), false, this.calculator);
    } else {
      this._addElementsToParent(document.querySelector(".".concat(parentClass)), false, this.calculator);
    }
  }

  _createClass(Calculator, [{
    key: "renderOutput",
    value: function renderOutput(_ref2) {
      var currentOperandClasses = _ref2.currentOperandClasses,
          previousOperandClasses = _ref2.previousOperandClasses,
          outputClasses = _ref2.outputClasses;

      var output = this._createElementWithClasses.apply(this, ['div'].concat(_toConsumableArray(outputClasses)));

      var currentOperand = this._createElementWithClasses.apply(this, ['div'].concat(_toConsumableArray(currentOperandClasses)));

      var previousOperand = this._createElementWithClasses.apply(this, ['div'].concat(_toConsumableArray(previousOperandClasses)));

      this._addElementsToParent(this.calculator, false, output);

      this._addElementsToParent(output, true, previousOperand, currentOperand);
    }
  }, {
    key: "renderButtons",
    value: function renderButtons(buttonsData) {
      var _this = this;

      buttonsData.forEach(function (buttonData) {
        for (var buttonKey in buttonData) {
          var button = _this._createElementWithClasses.apply(_this, ['button'].concat(_toConsumableArray(buttonData[buttonKey])));

          _this._addInnerHtmlToElement(button, buttonKey);

          _this._addElementsToParent(_this.calculator, true, button);
        }
      });
    }
  }, {
    key: "_createElementWithClasses",
    value: function _createElementWithClasses(elementType) {
      var element = document.createElement(elementType);

      for (var _len = arguments.length, elementClasses = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        elementClasses[_key - 1] = arguments[_key];
      }

      elementClasses.forEach(function (elementClass) {
        return element.classList.add(elementClass);
      });
      return element;
    }
  }, {
    key: "_addElementsToParent",
    value: function _addElementsToParent(parent) {
      var insertAtTheEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      for (var _len2 = arguments.length, elements = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        elements[_key2 - 2] = arguments[_key2];
      }

      if (insertAtTheEnd) {
        elements.forEach(function (element) {
          return parent.append(element);
        });
      } else {
        elements.forEach(function (element) {
          return parent.prepend(element);
        });
      }
    }
  }, {
    key: "_addInnerHtmlToElement",
    value: function _addInnerHtmlToElement(el) {
      for (var _len3 = arguments.length, innerHtml = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        innerHtml[_key3 - 1] = arguments[_key3];
      }

      el.innerHTML += [].concat(innerHtml);
    }
  }]);

  return Calculator;
}();

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/index.js ./src/sass/main.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/main.scss */"./src/sass/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map