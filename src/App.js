import React from "react";
import axios from "axios";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>What's the temperature??</h1>
        <Weather city="Chicago" />
      </header>
    </div>
  );
}

export default App;
