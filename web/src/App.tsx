import React from 'react';
import bee_logo from './assets/images/brentford-fc-logo-512x512.png'
import './App.css';
import ScoreTable from './ScoreTable'

import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bee_logo} className="App-logo" alt="logo" />
        <p>
          Come on you bees!
        </p>

      </header>
      <ScoreTable/>
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
