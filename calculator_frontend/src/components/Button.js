import React from 'react';
import './Button.css';

// PUBLIC_INTERFACE
const Button = ({ children, onClick, className = '', colSpan = 1, rowSpan = 1 }) => {
  const style = {
    gridColumn: colSpan > 1 ? `span ${colSpan}` : 'auto',
    gridRow: rowSpan > 1 ? `span ${rowSpan}` : 'auto'
  };

  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      style={style}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
