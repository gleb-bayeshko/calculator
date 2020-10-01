export class Calculator {
  constructor({parentClass = null, calculatorClasses}) {
    this.calculator = this._createElementWithClasses('div', ...calculatorClasses);
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
      this._addElementsToParent(document.querySelector(`.${parentClass}`), false, this.calculator);
    }
  }

  // Create elements on page
  renderOutput({currentOperandClasses, previousOperandClasses, outputClasses, operatorClasses}) {

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
            button.addEventListener('click', (e) => this._selectOperation(e.target.textContent));
            break;
          case 'delete':
            button.addEventListener('click', () => this._delete());
            break;
          case 'all-clear':
            button.addEventListener('click', () => this._allClear());
            break;
          default:
            button.addEventListener('click', (e) => this._appendNumber(e));
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

    setTimeout( ()=> {
      effect.remove()
    }, 500)
  }

  // Display methods
  _allClear() {
    this._clearCurrentOperand();
    this._clearPreviousOperand();
    this._clearOperationField();
    this.currentOperation = null;
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
    if (this.currentOperand.textContent === 'NaN' || this.currentOperand.textContent === 'Infinity') {
      this._setInnerHtmlOfElement(this.currentOperand, '');
    } else if (this.currentOperand.textContent === '') {
      this.currentOperation = null;
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
    if (this.isOperationAfterEqual) {
      this._allClear();
      this.isOperationAfterEqual = false;
    }
    this._addInnerHtmlToElement(this.currentOperand, number.target.textContent);
  }

  // Calculation methods
  _selectOperation(operator) {
    if (this.currentOperand.textContent === '' && operator !== '-' && operator !== '=') {
      if (this.currentOperation) {
        this._setInnerHtmlOfElement(this.operationField, operator);
        this.currentOperation = operator;
      }
      return
    }

    if (operator !== '-' && this.currentOperand.textContent === '-') {
      return
    }

    if (operator === '-') {
      if (this.isOperationAfterEqual || this.currentOperand.textContent === '' || this.currentOperand.textContent === '-') {
        this._setInnerHtmlOfElement(this.currentOperand, '-');
        this.isOperationAfterEqual = false;
        return
      }
    }

    if (operator === '=') {
      this.isOperationAfterEqual = true;
      if (this.previousOperand.textContent === '') {
        return;
      } else if (this.previousOperand.textContent !== '' && this.currentOperand.textContent === '') {
        this._setInnerHtmlOfElement(this.currentOperand, this.previousOperand.textContent);
      } else if (this.previousOperand.textContent !== '' && this.currentOperand.textContent !== '') {
        this._setInnerHtmlOfElement(this.currentOperand, this._calculate());
      }

      this._clearPreviousOperand();
      this._clearOperationField();
      this.currentOperation = null;

      return
    }

    if(!this.currentOperation) {
      this._setInnerHtmlOfElement(this.previousOperand, this.currentOperand.textContent);
    } else {
      this._setInnerHtmlOfElement(this.previousOperand, this._calculate());
    }

    this.isOperationAfterEqual = false;
    this.currentOperation = operator;
    this._setInnerHtmlOfElement(this.operationField, operator);
    this._clearCurrentOperand();
  }

  _calculate() {
    let result = 0;
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
    return +result.toFixed(this.rounding)
  }

  // Helper methods
  _createElementWithClasses(elementType, ...elementClasses) {
    let element = document.createElement(elementType);
    elementClasses.forEach(elementClass => element.classList.add(elementClass));

    return element;
  }

  _addElementsToParent(parent, insertAtTheEnd = true,  ...elements) {
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