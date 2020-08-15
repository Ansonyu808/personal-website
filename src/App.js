import React, { Component } from "react";
import "./App.css";
import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="inherit">
          <Toolbar>
            <IconButton style={{ color: "white" }}>Logo</IconButton>
            <div className="emptySpace"></div>
            <Button
              style={{ color: "white" }}
              onClick={() => this.test("about")}
            >
              About
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={() => this.test("work")}
            >
              Work
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={() => this.test("projects")}
            >
              Projects
            </Button>
          </Toolbar>
        </AppBar>
        <div id="about" className="section">
          <h1>Anwar Anson Yu</h1>
          <h3>Software Engineer</h3>
          <p>
            Software engineer passionate in providing software solutions to
            client problems. Excellent problem solver, teamworker, and leader
            with a strong sense of passion for learning about software
            development.
          </p>
        </div>
        <div id="work" className="section">
          <p>Underwriter Laboratories - Transaction Securtiy Associate</p>
          <p>USDA - Biological Lab Technician</p>
        </div>
        <div id="projects" className="section">
          <p>Best Beans</p>
          <p>Instagram Web Scraper</p>
        </div>
      </div>
    );
  }
  test = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
}

export default App;
