import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import AnsonAvatar from "../static/images/Anson-Avatar.jpg";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

class About extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={3}>
          <Avatar
            alt="Anson"
            src={AnsonAvatar}
            style={{ height: "auto", width: "90%" }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography className="flex flex-horizontal-center" variant="h4">
            Anwar Anson Yu
          </Typography>

          <Typography className="flex flex-horizontal-center" variant="h5">
            Software Engineer
          </Typography>

          <hr></hr>
          <Typography
            className="flex flex-horizontal-center"
            variant="subtitle1"
          >
            Software engineer passionate in providing software solutions to
            client problems. Excellent problem solver, teamworker, and leader
            with a strong sense of passion for learning about software
            development.
          </Typography>
          <div className="flex flex-horizontal-center">
            <IconButton
              onClick={() =>
                this.onExternalLinkClicked(
                  "https://www.linkedin.com/in/anwar-anson-yu-946219179/"
                )
              }
            >
              <LinkedInIcon aria-label="Anson's Github" />
            </IconButton>
            <IconButton>
              <GitHubIcon aria-label="Anson's Github" />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    );
  }

  onExternalLinkClicked = (url) => {
    window.open(url);
  };
}
export default About;
