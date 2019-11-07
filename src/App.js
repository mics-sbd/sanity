import React from 'react';
import logo from './PEO-pegasus_black.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pegasus Works
        </p>
        <a
          className="App-link"
          href="https://github.com/mics-sbd"
          target="_blank"
          rel="noopener noreferrer"
        >
          Secure By Design
        </a>
      </header>
    </div>
  );
}

export default App;
