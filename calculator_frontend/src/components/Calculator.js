import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import './Calculator.css';

// PUBLIC_INTERFACE
const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [expression, setExpression] = useState('');

  // PUBLIC_INTERFACE
  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  // PUBLIC_INTERFACE
  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  // PUBLIC_INTERFACE
  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
    setExpression('');
  };

  // PUBLIC_INTERFACE
  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
      setExpression(display + ' ' + nextOperation + ' ');
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
      setExpression(previousValue + ' ' + operation + ' ' + display + ' = ' + newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  // PUBLIC_INTERFACE
  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return secondValue !== 0 ? firstValue / secondValue : 0;
      default:
        return secondValue;
    }
  };

  // PUBLIC_INTERFACE
  const performEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      const newExpression = previousValue + ' ' + operation + ' ' + display + ' = ' + newValue;
      
      setDisplay(String(newValue));
      setExpression(newExpression);
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="calculator">
      <Display value={display} expression={expression} />
      <Keypad
        onNumberClick={inputNumber}
        onOperatorClick={performOperation}
        onEqualsClick={performEquals}
        onDecimalClick={inputDecimal}
        onClearClick={clear}
      />
    </div>
  );
};

export default Calculator;
