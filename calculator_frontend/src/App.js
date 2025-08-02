import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main App component that renders the calculator application.
   * Provides a centered layout with the calculator component.
   */
  return (
    <div className="App">
      <div className="App-container">
        <h1 className="App-title">Calculator</h1>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
