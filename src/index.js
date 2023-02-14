import React, { Component } from "react";
import { render } from "react-dom";
import Tree from "./tree";

export default class App extends Component {
  render() {
    return <Tree />;
  }
}

render(<App />, document.getElementById("root"));
