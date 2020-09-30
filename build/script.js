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
  currentOperandClasses: ['current-operand'],
  operatorClasses: ['operator']
});
calculator.renderButtons(_js_calculatorData__WEBPACK_IMPORTED_MODULE_0__["calculatorData"]);
calculator.addButtonsEffectOnClick('button_active');

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
  'AC': {
    classes: ['button', 'span-2'],
    dataType: ['all-clear']
  }
}, {
  'DEL': {
    classes: ['button', 'span-1'],
    dataType: ['delete']
  }
}, {
  '÷': {
    classes: ['button', 'span-1'],
    dataType: ['operation']
  }
}, {
  '1': {
    classes: ['button', 'span-1'],
    dataType: ['number']
  }
}, {
  '2': {
    classes: ['button', 'span-1'],
    dataType: ['number']
  }
}, {
  '3': {
    classes: ['button', 'span-1'],
    dataType: ['number']
  }
}, {
  '×': {
    classes: ['button', 'span-1'],
    dataType: ['operation']
  }
}, {
  '4': {
    classes: ['button', 'span-1'],
    dataType: ['number']
  }
}, {
  '5': {
    classes: ['button', 'span-1'],
    dataType: ['number']
  }
}, {
  '6': {
    classes: ['button', 'span-1'],
    dataType: ['number']
  }
}, {
  '+': {
    classes: ['button', 'span-1'],
    dataType: ['operation']
  }
}, {
  '7': {
    classes: ['button', 'span-1'],
    dataType: ['number']
  }
}, {
  '8': {
    classes: ['button', 'span-1'],
    dataType: ['number']
  }
}, {
  '9': {
    classes: ['button', 'span-1'],
    dataType: ['number']
  }
}, {
  '-': {
    classes: ['button', 'span-1'],
    dataType: ['operation']
  }
}, {
  '.': {
    classes: ['button', 'span-1'],
    dataType: ['number']
  }
}, {
  '0': {
    classes: ['button', 'span-1'],
    dataType: ['number']
  }
}, {
  '=': {
    classes: ['button', 'span-2'],
    dataType: ['operation']
  }
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
    this.allButtons = [];
    this.equalButton = '';
    this.output = '';
    this.currentOperand = '';
    this.previousOperand = '';
    this.rounding = 10;
    this.currentOperation = null;
    this.isOperationAfterEqual = false;

    if (parentClass === null) {
      this._addElementsToParent(document.querySelector('body'), false, this.calculator);
    } else {
      this._addElementsToParent(document.querySelector(".".concat(parentClass)), false, this.calculator);
    }
  } // Create elements on page


  _createClass(Calculator, [{
    key: "renderOutput",
    value: function renderOutput(_ref2) {
      var currentOperandClasses = _ref2.currentOperandClasses,
          previousOperandClasses = _ref2.previousOperandClasses,
          outputClasses = _ref2.outputClasses,
          operatorClasses = _ref2.operatorClasses;
      this.output = this._createElementWithClasses.apply(this, ['div'].concat(_toConsumableArray(outputClasses)));
      this.currentOperand = this._createElementWithClasses.apply(this, ['div'].concat(_toConsumableArray(currentOperandClasses)));
      this.previousOperand = this._createElementWithClasses.apply(this, ['div'].concat(_toConsumableArray(previousOperandClasses)));
      this.operationField = this._createElementWithClasses.apply(this, ['div'].concat(_toConsumableArray(operatorClasses)));

      this._addElementsToParent(this.calculator, false, this.output);

      this._addElementsToParent(this.output, true, this.previousOperand, this.operationField, this.currentOperand);
    }
  }, {
    key: "renderButtons",
    value: function renderButtons(buttonsData) {
      var _this = this;

      buttonsData.forEach(function (buttonData) {
        for (var buttonKey in buttonData) {
          var button = _this._createElementWithClasses.apply(_this, ['button'].concat(_toConsumableArray(buttonData[buttonKey]['classes'])));

          _this._setDataAttributeToElement.apply(_this, [button].concat(_toConsumableArray(buttonData[buttonKey]['dataType'])));

          _this._addInnerHtmlToElement(button, buttonKey);

          _this._addElementsToParent(_this.calculator, true, button);

          _this.allButtons.push(button);

          switch (button.getAttribute('data-type')) {
            case 'operation':
              button.addEventListener('click', function (e) {
                return _this._selectOperation(e.target.textContent);
              });
              break;

            case 'delete':
              button.addEventListener('click', function () {
                return _this._delete();
              });
              break;

            case 'all-clear':
              button.addEventListener('click', function () {
                return _this._allClear();
              });
              break;

            default:
              button.addEventListener('click', function (e) {
                return _this._appendNumber(e);
              });
          }
        }
      });
    } // Visual effects on button click

  }, {
    key: "addButtonsEffectOnClick",
    value: function addButtonsEffectOnClick(activeClass) {
      var _this2 = this;

      this.allButtons.forEach(function (button) {
        return button.addEventListener('click', function (e) {
          _this2._createEffectOnButtonClick(e, activeClass);
        });
      });
    }
  }, {
    key: "_createEffectOnButtonClick",
    value: function _createEffectOnButtonClick(e, activeClass) {
      var currentButton = e.target;

      var effect = this._createElementWithClasses('div', activeClass);

      this._addElementsToParent(this.calculator, true, effect);

      effect.style.top = "".concat(currentButton.offsetTop + currentButton.clientHeight / 2 - effect.clientHeight / 2, "px");
      effect.style.left = "".concat(currentButton.offsetLeft + currentButton.clientWidth / 2 - effect.clientWidth / 2, "px");
      setTimeout(function () {
        effect.remove();
      }, 500);
    } // Display methods

  }, {
    key: "_allClear",
    value: function _allClear() {
      this._clearCurrentOperand();

      this._clearPreviousOperand();

      this._clearOperationField();

      this.currentOperation = null;
    }
  }, {
    key: "_clearCurrentOperand",
    value: function _clearCurrentOperand() {
      this._setInnerHtmlOfElement(this.currentOperand, '');
    }
  }, {
    key: "_clearPreviousOperand",
    value: function _clearPreviousOperand() {
      this._setInnerHtmlOfElement(this.previousOperand, '');
    }
  }, {
    key: "_clearOperationField",
    value: function _clearOperationField() {
      this._setInnerHtmlOfElement(this.operationField, '');
    }
  }, {
    key: "_delete",
    value: function _delete() {
      if (this.currentOperand.textContent === 'NaN') {
        console.log('');

        this._setInnerHtmlOfElement(this.currentOperand, '');
      } else {
        this._setInnerHtmlOfElement(this.currentOperand, this.currentOperand.textContent.substring(0, this.currentOperand.textContent.length - 1));
      }
    }
  }, {
    key: "_appendNumber",
    value: function _appendNumber(number) {
      if (this.isOperationAfterEqual) {
        this._allClear();

        this.isOperationAfterEqual = false;
      }

      this._addInnerHtmlToElement(this.currentOperand, number.target.textContent);
    } // Calculation methods

  }, {
    key: "_selectOperation",
    value: function _selectOperation(operator) {
      if (this.currentOperand.textContent === '' && !this.currentOperation) return;

      if (this.currentOperand.textContent === '' && this.currentOperation) {
        this._setInnerHtmlOfElement(this.operationField, operator);

        this.currentOperation = operator;
        return;
      }

      if (operator === '=') {
        this.isOperationAfterEqual = true;
        if (this.previousOperand.textContent === '') return;

        this._setInnerHtmlOfElement(this.currentOperand, this._calculate());

        this._clearPreviousOperand();

        this._clearOperationField();

        this.currentOperation = null;
        return;
      }

      if (!this.currentOperation) {
        this._setInnerHtmlOfElement(this.previousOperand, this.currentOperand.textContent);
      } else {
        this._setInnerHtmlOfElement(this.previousOperand, this._calculate());
      }

      this.isOperationAfterEqual = false;
      this.currentOperation = operator;

      this._setInnerHtmlOfElement(this.operationField, operator);

      this._clearCurrentOperand();
    }
  }, {
    key: "_calculate",
    value: function _calculate() {
      var result = 0;

      switch (this.currentOperation) {
        case '+':
          result = +this.previousOperand.textContent + +this.currentOperand.textContent;
          break;

        case '-':
          result = +this.previousOperand.textContent - +this.currentOperand.textContent;
          break;

        case '/':
        case '÷':
          result = +this.previousOperand.textContent / +this.currentOperand.textContent;
          break;

        case '*':
        case '×':
          result = +this.previousOperand.textContent * +this.currentOperand.textContent;
          break;
      }

      return +result.toFixed(this.rounding);
    } // Helper methods

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
    value: function _addInnerHtmlToElement(element) {
      for (var _len3 = arguments.length, innerHtml = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        innerHtml[_key3 - 1] = arguments[_key3];
      }

      element.innerHTML += innerHtml.join('');
    }
  }, {
    key: "_setInnerHtmlOfElement",
    value: function _setInnerHtmlOfElement(element) {
      for (var _len4 = arguments.length, innerHtml = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        innerHtml[_key4 - 1] = arguments[_key4];
      }

      element.innerHTML = innerHtml.join('');
    }
  }, {
    key: "_setDataAttributeToElement",
    value: function _setDataAttributeToElement(element) {
      for (var _len5 = arguments.length, attributes = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        attributes[_key5 - 1] = arguments[_key5];
      }

      element.setAttribute('data-type', "".concat(attributes.join(' ')));
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