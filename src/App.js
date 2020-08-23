import React, { Component } from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";

class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <About />
        <Work />
        <Projects />
      </div>
    );
  }
}

export default App;
