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
            Hi! I'm a software engineer with a B.S. in Computer Science and a
            certificate in Database Management. I'm passionate about finding and
            developing software solutions for client problems!
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
            <IconButton
              onClick={() =>
                this.onExternalLinkClicked("https://github.com/ansonyu808")
              }
            >
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
