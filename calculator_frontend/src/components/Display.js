import React from 'react';
import './Display.css';

// PUBLIC_INTERFACE
const Display = ({ value, expression }) => {
  return (
    <div className="display">
      <div className="expression">{expression}</div>
      <div className="value">{value}</div>
    </div>
  );
};

export default Display;
