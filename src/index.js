import {calculatorData} from './js/calculatorData';
import {CalculatorCreator} from './js/components/CalculatorCreator';

let calculator = new CalculatorCreator({
  parentClass: null,
  calculatorClasses: ['calculator-grid']
});

calculator.renderOutput({
  outputClasses: ['output', 'span-4'],
  previousOperandClasses: ['previous-operand'],
  currentOperandClasses: ['current-operand'],
})

calculator.renderButtons(calculatorData);
calculator.addButtonsEffectOnClick('button_active');