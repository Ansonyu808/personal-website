import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import React, { Component } from "react";

let scrollY = 0;
class Topbar extends Component {
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };
  handleScroll = (event) => {
    if (scrollY > window.scrollY) {
      document.getElementById("topbar").style.visibility = "visible";
    } else if (scrollY > 100) {
      document.getElementById("topbar").style.visibility = "hidden";
    }
    scrollY = window.scrollY;
  };
  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    return (
      <AppBar id="topbar">
        <Toolbar>
          <IconButton style={{ color: "white" }}>Logo</IconButton>
          <div className="emptySpace"></div>
          <Button style={{ color: "white" }} onClick={() => this.test("about")}>
            About
          </Button>
          <Button style={{ color: "white" }} onClick={() => this.test("work")}>
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
    );
  }
  test = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
}

export default Topbar;
