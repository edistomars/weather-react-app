import React from "react";

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
