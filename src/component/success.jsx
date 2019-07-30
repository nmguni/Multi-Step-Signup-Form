import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Giffy from "./myGif";
import { Grid } from "@material-ui/core";

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // process form
    // send data to api
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  //   <Grid
  //   container
  //   spacing={0}
  //   direction="column"
  //   alignItems="center"
  //   justify="center"
  // />

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar titel="Success" />
          <h1>Thank you for your submittion</h1>
          <p>you will ail with further instructions</p>
          <Grid container justify="center">
            <Giffy />
          </Grid>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
