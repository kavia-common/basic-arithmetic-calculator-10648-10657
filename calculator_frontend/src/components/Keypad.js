import React from 'react';
import Button from './Button';
import './Keypad.css';

// PUBLIC_INTERFACE
const Keypad = ({
  onNumberClick,
  onOperatorClick,
  onEqualsClick,
  onDecimalClick,
  onClearClick
}) => {
  return (
    <div className="keypad">
      <div className="keypad-row">
        <Button className="btn-clear" onClick={onClearClick}>C</Button>
        <Button className="btn-operator" onClick={() => onOperatorClick('÷')}>÷</Button>
        <Button className="btn-operator" onClick={() => onOperatorClick('×')}>×</Button>
        <Button className="btn-operator" onClick={() => onOperatorClick('-')}>-</Button>
      </div>
      
      <div className="keypad-row">
        <Button className="btn-number" onClick={() => onNumberClick(7)}>7</Button>
        <Button className="btn-number" onClick={() => onNumberClick(8)}>8</Button>
        <Button className="btn-number" onClick={() => onNumberClick(9)}>9</Button>
        <Button className="btn-operator btn-add" onClick={() => onOperatorClick('+')} rowSpan={2}>+</Button>
      </div>
      
      <div className="keypad-row">
        <Button className="btn-number" onClick={() => onNumberClick(4)}>4</Button>
        <Button className="btn-number" onClick={() => onNumberClick(5)}>5</Button>
        <Button className="btn-number" onClick={() => onNumberClick(6)}>6</Button>
      </div>
      
      <div className="keypad-row">
        <Button className="btn-number" onClick={() => onNumberClick(1)}>1</Button>
        <Button className="btn-number" onClick={() => onNumberClick(2)}>2</Button>
        <Button className="btn-number" onClick={() => onNumberClick(3)}>3</Button>
        <Button className="btn-equals" onClick={onEqualsClick} rowSpan={2}>=</Button>
      </div>
      
      <div className="keypad-row">
        <Button className="btn-number btn-zero" onClick={() => onNumberClick(0)} colSpan={2}>0</Button>
        <Button className="btn-decimal" onClick={onDecimalClick}>.</Button>
      </div>
    </div>
  );
};

export default Keypad;
