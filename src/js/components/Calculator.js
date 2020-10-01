export class Calculator {
  constructor({ parentClass = null, calculatorClasses }) {
    this.calculator = this._createElementWithClasses('div', ...calculatorClasses);
    this.allButtons = [];
    this.equalButton = '';
    this.output = '';
    this.currentOperand = '';
    this.previousOperand = '';
    this.rounding = 7;
    this.currentOperator = null;
    this.needToClearCurrentOperand = false;
    this.isError = false;

    if (parentClass === null) {
      this._addElementsToParent(document.querySelector('body'), false, this.calculator);
    } else {
      this._addElementsToParent(document.querySelector(`.${parentClass}`), false, this.calculator);
    }
  }

  // Create elements on page
  renderOutput({ currentOperandClasses, previousOperandClasses, outputClasses, operatorClasses }) {

    this.output = this._createElementWithClasses('div', ...outputClasses);
    this.currentOperand = this._createElementWithClasses('div', ...currentOperandClasses);
    this.previousOperand = this._createElementWithClasses('div', ...previousOperandClasses);
    this.operationField = this._createElementWithClasses('div', ...operatorClasses);

    this._addElementsToParent(this.calculator, false, this.output);
    this._addElementsToParent(this.output, true, this.previousOperand, this.operationField, this.currentOperand);
  }

  renderButtons(buttonsData) {
    buttonsData.forEach(buttonData => {
      for (let buttonKey in buttonData) {
        let button = this._createElementWithClasses('button', ...buttonData[buttonKey]['classes']);
        this._setDataAttributeToElement(button, ...buttonData[buttonKey]['dataType']);
        this._addInnerHtmlToElement(button, buttonKey);
        this._addElementsToParent(this.calculator, true, button);

        this.allButtons.push(button);

        switch (button.getAttribute('data-type')) {
          case 'operation':
            button.addEventListener('click', (e) => this._updateDisplayByOperator(e.target.textContent));
            break;
          case 'delete':
            button.addEventListener('click', () => this._delete());
            break;
          case 'all-clear':
            button.addEventListener('click', () => this._allClear());
            break;
          default:
            button.addEventListener('click', (e) => this._appendNumber(e.target.textContent));
        }
      }
    })
  }

  // Visual effects on button click
  addButtonsEffectOnClick(activeClass) {
    this.allButtons.forEach(button => button.addEventListener('click', (e) => {
      this._createEffectOnButtonClick(e, activeClass);
    }));
  }

  _createEffectOnButtonClick(e, activeClass) {
    let currentButton = e.target;
    let effect = this._createElementWithClasses('div', activeClass);

    this._addElementsToParent(this.calculator, true, effect);

    effect.style.top = `${currentButton.offsetTop + currentButton.clientHeight / 2 - effect.clientHeight / 2}px`;
    effect.style.left = `${currentButton.offsetLeft + currentButton.clientWidth / 2 - effect.clientWidth / 2}px`;

    setTimeout(() => {
      effect.remove()
    }, 500)
  }

  // Calculations and operations methods
  _allClear(changeErrorStatus = true) {
    this._clearCurrentOperand();
    this._clearPreviousOperand();
    this._clearOperationField();
    this.currentOperator = null;

    if (changeErrorStatus) {
      this.isError = false;
    }
  }

  _clearCurrentOperand() {
    this._setInnerHtmlOfElement(this.currentOperand, '');
  }

  _clearPreviousOperand() {
    this._setInnerHtmlOfElement(this.previousOperand, '');
  }

  _clearOperationField() {
    this._setInnerHtmlOfElement(this.operationField, '');
  }

  _delete() {
    if (this.isError) {
      this._setInnerHtmlOfElement(this.currentOperand, '');
      this.isError = false;
    } else if (this.currentOperand.textContent === '') {
      this.currentOperator = null;
      this._setInnerHtmlOfElement(this.currentOperand, this.previousOperand.textContent);
      this._clearOperationField();
      this._clearPreviousOperand();
      return
    }

    this._setInnerHtmlOfElement(
      this.currentOperand,
      this.currentOperand.textContent.substring(0, this.currentOperand.textContent.length - 1)
    );
  }

  _appendNumber(number) {
    if (this.needToClearCurrentOperand) {
      this._clearCurrentOperand();
      this.needToClearCurrentOperand = false;
    }
    this._addInnerHtmlToElement(this.currentOperand, number);
  }

  _updateDisplayByOperator(operator) {
    if (this.isError) {
      this._allClear();
      this.isError = false;
    }

    if (this.currentOperand.textContent === '' && operator !== '-' && operator !== '√' && operator !== '=') {
      if (this.currentOperator) {
        this._setInnerHtmlOfElement(this.operationField, operator);
        this.currentOperator = operator;
      }

      return
    }

    if (this.currentOperand.textContent === '-') return;

    if (operator === '√') {
      this._setInnerHtmlOfElement(this.currentOperand, this._calculate(true));
      this.needToClearCurrentOperand = true;

      return
    }

    if (operator === '-') {
      if (this.currentOperand.textContent === '') {
        this._setInnerHtmlOfElement(this.currentOperand, '-');
        this.needToClearCurrentOperand = false;

        return
      }
    }

    if (operator === '=') {
      this.needToClearCurrentOperand = true;
      if (this.previousOperand.textContent === '') {

        return;
      } else if (this.previousOperand.textContent !== '' && this.currentOperand.textContent === '') {
        this._setInnerHtmlOfElement(this.currentOperand, this.previousOperand.textContent);
      } else if (this.previousOperand.textContent !== '' && this.currentOperand.textContent !== '') {
        this._setInnerHtmlOfElement(this.currentOperand, this._calculate());
      }

      this._clearPreviousOperand();
      this._clearOperationField();
      this.currentOperator = null;

      return
    }

    if (!this.currentOperator) {
      this._setInnerHtmlOfElement(this.previousOperand, this.currentOperand.textContent);
    } else {
      let subtotal = this._calculate();
      if (this.isError) {
        this._allClear(false);
        this._setInnerHtmlOfElement(this.currentOperand, subtotal);

        return
      } else {
        this._setInnerHtmlOfElement(this.previousOperand, subtotal);
      }
    }

    this.needToClearCurrentOperand = false;

    this.currentOperator = operator;
    if (operator === 'x') {
      this._setInnerHtmlOfElement(this.operationField, '^');
    } else {
      this._setInnerHtmlOfElement(this.operationField, operator);
    }

    this._clearCurrentOperand();
  }

  _calculate(isRoot = false) {
    let result = 0;

    if (isRoot) {
      if (+this.currentOperand.textContent < 0) {
        result = 'Cannot square root a negative number!';
        this.isError = true;
      } else {
        result = Math.sqrt(+this.currentOperand.textContent);
      }
    } else {
      switch (this.currentOperator) {
        case '+':
          result = +this.previousOperand.textContent + +this.currentOperand.textContent;
          break;
        case '-':
          result = +this.previousOperand.textContent - +this.currentOperand.textContent;
          break;
        case '/':
        case '÷':
          if (this.currentOperand.textContent.match(/^-?0$/)) {
            result = 'Cannot divide by zero!';
            this.isError = true;
          } else {
            result = +this.previousOperand.textContent / +this.currentOperand.textContent;
          }
          break;
        case '*':
        case '×':
          result = +this.previousOperand.textContent * +this.currentOperand.textContent;
          break;
        case 'x':
          result = (+this.previousOperand.textContent) ** +this.currentOperand.textContent
          break;
      }
    }

    if (result.toString() === 'NaN' || result.toString().match(/.Infinity/)) {
      result = 'Error';
      this.isError = true;
    } else if (+result) {
      result = +result.toFixed(this.rounding)
    }

    return result;
  }

  // Helper methods
  _createElementWithClasses(elementType, ...elementClasses) {
    let element = document.createElement(elementType);
    elementClasses.forEach(elementClass => element.classList.add(elementClass));

    return element;
  }

  _addElementsToParent(parent, insertAtTheEnd = true, ...elements) {
    if (insertAtTheEnd) {
      elements.forEach(element => parent.append(element));
    } else {
      elements.forEach(element => parent.prepend(element));
    }
  }

  _addInnerHtmlToElement(element, ...innerHtml) {
    element.innerHTML += innerHtml.join('');
  }
  _setInnerHtmlOfElement(element, ...innerHtml) {
    element.innerHTML = innerHtml.join('');
  }

  _setDataAttributeToElement(element, ...attributes) {
    element.setAttribute('data-type', `${attributes.join(' ')}`)

  }
}