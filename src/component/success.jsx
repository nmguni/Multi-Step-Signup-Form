import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from "material-ui/AppBar";
import Giffy from "./myGif";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import "../App.css";

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

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Grid className="background-color" container justify="center">
            <Toolbar>
              <Typography className="center" variant="h1">
                <div className="header-text">Thank you for your submittion</div>
              </Typography>
            </Toolbar>
          </Grid>
          <Grid container justify="center">
            <Giffy />
          </Grid>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
