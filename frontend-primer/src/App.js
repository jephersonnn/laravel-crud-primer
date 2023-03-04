
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/Home";
import { ActionBar } from "./components/ActionBar";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ActionBar />
        <Home />
      </header>
    </div>
  );
}

export default App;
