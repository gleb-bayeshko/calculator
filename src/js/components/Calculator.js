export class Calculator {
  constructor({parentClass = null, calculatorClasses}) {
    this.calculator = this._createElementWithClasses('div', ...calculatorClasses);

    if (parentClass === null) {
      this._addElementsToParent(document.querySelector('body'), false, this.calculator);
    } else {
      this._addElementsToParent(document.querySelector(`.${parentClass}`), false, this.calculator);
    }
  }

  renderOutput({currentOperandClasses, previousOperandClasses, outputClasses}) {

    let output = this._createElementWithClasses('div', ...outputClasses);
    let currentOperand = this._createElementWithClasses('div', ...currentOperandClasses);
    let previousOperand = this._createElementWithClasses('div', ...previousOperandClasses);

    this._addElementsToParent(this.calculator, false, output);
    this._addElementsToParent(output, true, previousOperand, currentOperand);
  }

  renderButtons(buttonsData) {
    buttonsData.forEach(buttonData => {
      for (let buttonKey in buttonData) {
        let button = this._createElementWithClasses('button', ...buttonData[buttonKey]);
        this._addInnerHtmlToElement(button, buttonKey);
        this._addElementsToParent(this.calculator, true, button);
      }
    })
  }

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

  _addInnerHtmlToElement(el, ...innerHtml) {
    el.innerHTML += [...innerHtml];
  }
}