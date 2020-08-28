import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

class Work extends Component {
  jobs = [
    {
      title: "UL",
      description:
        " Developing a web application in React and Java’s Spring Boot Framework - ​Developed a database schema from scratch, created the database in MySQL - Cored out and tested all REST APIs using Spring Boot and Postman - Implemented a JSON Web Token (JWT) login token system from scratch - Deployed the app as a service to an internal server - Identified and supported an in-house load testing solution - Supported the GUI development for a UL product. - Built, delivered, and maintained small internal automation applications using Python - Saved the company about 300 hours annually with about 100 hours of development time.",
      technologies: "MySQL, Spring Boot/Java, Python",
    },
    {
      title: "USDA",
      description:
        "Built a mobile app from scratch including: project design, implementation  testing, and maintenance. Stored data from Google Maps API to a MySQL Database hosted on Amazon’s Relational Database Service using AWS Lambda functions. ",
      technologies: "​MySQL, Amazon Web Services (AWS)",
    },
  ];
  render() {
    return (
      <div>
        {this.jobs.map((job) => (
          <Grid container key={job.title}>
            <Grid item xs={2} lg={1}>
              <Button>{job.title}</Button>
            </Grid>
            <div style={{ margin: "5px" }}></div>
            <Grid
              item
              xs={9}
              lg={10}
              id={job.title}
              style={{ display: "inline-block", paddingBottom: "15px" }}
            >
              Technologies used: {job.technologies}
              <br />
              Description: {job.description}
            </Grid>
          </Grid>
        ))}
      </div>
    );
  }
}

export default Work;
