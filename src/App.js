import React, { Component } from "react";
import "./App.css";
import Example from "./Example/Example";
import Example1 from "./Example2/Example2";

import Home from "./Home/Home";

class App extends Component {
  state = {
    title: "Hello World",
    color1: "#000000",
    color2: "#ffffff",
    color3: "#657483",
    color4: "#ffffff",
    color5: "#087658",
    color6: "#775468",
    color7: "#123456",
    color8: "#654589"
  };

  changeTitle = newTitle => {
    this.setState({ title: newTitle });
  };

  changeColor1 = color => {
    this.setState({ color1: color });
  };

  changeColor2 = color => {
    this.setState({ color2: color });
  };
  changeColor3 = color => {
    this.setState({ color3: color });
  };
  changeColor4 = color => {
    this.setState({ color4: color });
  };
  changeColor5 = color => {
    this.setState({ color5: color });
  };
  changeColor6 = color => {
    this.setState({ color6: color });
  };
  changeColor7 = color => {
    this.setState({ color7: color });
  };
  changeColor8 = color => {
    this.setState({ color8: color });
  };
  render() {
    return (
      <div className="App">
        <Example title={this.state.title} changeTitle={this.changeTitle} />
        <Example1 title={this.state.title} changeTitle={this.changeTitle} />
        <Home
          color1={this.state.color1}
          color2={this.state.color2}
          color3={this.state.color3}
          color4={this.state.color4}
          color5={this.state.color5}
          color6={this.state.color6}
          color7={this.state.color7}
          color8={this.state.color8}
          changeColor1={this.changeColor1}
          changeColor2={this.changeColor2}
          changeColor3={this.changeColor3}
          changeColor4={this.changeColor4}
          changeColor5={this.changeColor5}
          changeColor6={this.changeColor6}
          changeColor7={this.changeColor7}
          changeColor8={this.changeColor8}
        />
      </div>
    );
  }
}

export default App;
