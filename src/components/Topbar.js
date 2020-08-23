import { AppBar, Toolbar, IconButton, Button } from "@material-ui/core";
import React, { Component } from "react";

class Topbar extends Component {
  render() {
    return (
      <AppBar color="inherit">
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
