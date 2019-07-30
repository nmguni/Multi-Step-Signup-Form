import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Giffy from "./myGif";

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
          <AppBar titel="Success" />
          <h1>Thank you for your submittion</h1>
          <p>you will ail with further instructions</p>
          <Giffy />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
