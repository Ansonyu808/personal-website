import React, { Component } from "react";
import "./App.css";
import Topbar from "./components/Topbar";
import About from "./components/About";
import Work from "./components/Work";
import Projects from "./components/Projects";
import { Grid } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <Grid container className="section">
          <Grid
            item
            className="card-background"
            xs={12}
            sm={10}
            md={9}
            style={{
              radius: "40px",
              padding: "20px",
            }}
          >
            <About />
          </Grid>
        </Grid>

        <Grid container id="work" className="section">
          <Grid
            item
            className="card-background"
            xs={12}
            sm={10}
            md={9}
            style={{
              radius: "40px",
              padding: "20px",
            }}
          >
            <Work />
          </Grid>
        </Grid>
        {/* <Projects /> */}
      </div>
    );
  }
}

export default App;
