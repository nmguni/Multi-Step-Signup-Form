import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaiseButton from "material-ui/RaisedButton";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import "../App.css";
import { Grid } from "@material-ui/core";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Grid className="background-color" container justify="center">
            <Toolbar>
              <Typography className="center" variant="h1">
                <div className="header-text">Saiyan Signup Form</div>
              </Typography>
            </Toolbar>
          </Grid>

          <div className="field">
            <TextField
              className="formback-ground"
              hintText="Name"
              floatingLabelText="Name"
              onChange={handleChange("Name")}
              defaultValue={values.name}
            />
            <br />

            <RaiseButton
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
              variant="filled"
            />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
