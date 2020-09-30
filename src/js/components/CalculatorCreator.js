export class CalculatorCreator {
  constructor({parentClass = null, calculatorClasses}) {
    this.calculator = this._createElementWithClasses('div', ...calculatorClasses);
    this.buttons = [];
    this.output = '';
    this.currentOperand = '';
    this.previousOperand = '';

    if (parentClass === null) {
      this._addElementsToParent(document.querySelector('body'), false, this.calculator);
    } else {
      this._addElementsToParent(document.querySelector(`.${parentClass}`), false, this.calculator);
    }
  }

  renderOutput({currentOperandClasses, previousOperandClasses, outputClasses}) {

    this.output = this._createElementWithClasses('div', ...outputClasses);
    this.currentOperand = this._createElementWithClasses('div', ...currentOperandClasses);
    this.previousOperand = this._createElementWithClasses('div', ...previousOperandClasses);

    this._addElementsToParent(this.calculator, false, this.output);
    this._addElementsToParent(this.output, true, this.previousOperand, this.currentOperand);
  }

  renderButtons(buttonsData) {
    buttonsData.forEach(buttonData => {
      for (let buttonKey in buttonData) {
        let button = this._createElementWithClasses('button', ...buttonData[buttonKey]['classes']);
        this._setDataAttributeToElement(button, ...buttonData[buttonKey]['dataType']);
        this._addInnerHtmlToElement(button, buttonKey);
        this._addElementsToParent(this.calculator, true, button);

        this.buttons.push(button);
      }
    })
  }

  addButtonsEffectOnClick(activeClass) {
    this.buttons.forEach(button => button.addEventListener('click', (e) => {
      this._createEffectOnButtonClick(e, activeClass);
    }));
  }

  _createEffectOnButtonClick(e, activeClass) {
    let currentButton = e.target;
    let currentButtonCoordinates = currentButton.getBoundingClientRect();
    let effect = this._createElementWithClasses('div', activeClass);

    effect.style.top = `${currentButton.offsetTop + currentButtonCoordinates.height/2}px`;
    effect.style.left = `${currentButton.offsetLeft + currentButtonCoordinates.width/2}px`;


    this._addElementsToParent(this.calculator, true, effect);

    setTimeout( ()=> {
      effect.remove()
    }, 1000)
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

  _addInnerHtmlToElement(element, ...innerHtml) {
    element.innerHTML += [...innerHtml];
  }

  _setDataAttributeToElement(element, ...attributes) {
    element.setAttribute('data-type', `${attributes.join(' ')}`)

  }
}