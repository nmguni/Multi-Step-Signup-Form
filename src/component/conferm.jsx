import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaiseButton from "material-ui/RaisedButton";

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
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar titel="Conferm User Data" />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="last Name" secondaryText={lastName} />
            <ListItem primaryText="Email " secondaryText={email} />
            <ListItem primaryText="occupation" secondaryText={occupation} />
            <ListItem primaryText="bio" secondaryText={bio} />
            <ListItem primaryText="City" secondaryText={city} />
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
