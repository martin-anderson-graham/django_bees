import React from 'react';
import bee_logo from './assets/images/brentford-fc-logo-512x512.png'
import './App.css';

import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bee_logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
document.addEventListener('DOMContentLoaded', () => {
        let appElement = document.getElementById("app")
        if (appElement !== null) {
        const root = createRoot(appElement);
        root.render(<App />);
        }
    })
export default App;
