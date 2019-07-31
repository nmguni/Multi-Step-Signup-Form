import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaiseButton from "material-ui/RaisedButton";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import "../App.css";
import { Grid } from "@material-ui/core";

export class FormUserDetails extends Component {
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
    const {
      values: { Name, occupation, location, race }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Grid className="background-color" container justify="center">
            <Toolbar>
              <Typography className="center" variant="h1">
                <div className="header-text">Conferm</div>
              </Typography>
            </Toolbar>
          </Grid>
          <List>
            <ListItem primaryText="Name" secondaryText={Name} />
            <ListItem primaryText="occupation" secondaryText={occupation} />
            <ListItem primaryText="location" secondaryText={location} />
            <ListItem primaryText="Race" secondaryText={race} />
          </List>
          <br />
          <RaiseButton
            label="Conferm"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaiseButton
            label="Back"
            primary={true}
            style={styles.button}
            onClick={this.back}
          />
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
