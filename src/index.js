import {calculatorData} from './js/calculatorData';
import {Calculator} from './js/components/Calculator';

let calculator = new Calculator({
  parentClass: null,
  calculatorClasses: ['calculator-grid']
});

calculator.renderOutput({
  outputClasses: ['output', 'span-4'],
  previousOperandClasses: ['previous-operand'],
  currentOperandClasses: ['current-operand'],
})

calculator.renderButtons(calculatorData);