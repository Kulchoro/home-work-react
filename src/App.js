import React, { Component } from "react";
import EventExample from "./EventExample/EventExample";
import "./App.css";
import Home from "./HomeWork/HomeWork";
class App extends Component {
  render() {
    return (
      <div className="App">
        <EventExample />
        <Home />
      </div>
    );
  }
}

export default App;
