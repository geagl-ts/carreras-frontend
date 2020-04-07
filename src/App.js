import React from "react";
import "./App.css";

import Index from "./components/";
import Home from "./components/home";

function App() {
  return (
    <div className="container">
      <Index>
        <Home />
      </Index>
    </div>
  );
}

export default App;
