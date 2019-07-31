import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetales from "./formPersonalDetales";
import Conferm from "./conferm";
import Success from "./success";

export class UserForm extends Component {
  state = {
    step: 1,
    Name: "",
    occupation: "",
    location: "",
    race: ""
  };
  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  // PGo back to prev step
  prevtStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //  Handle fields change
  handleChange = input => e => {
    // take input and set it to the value
    this.setState({ [input]: e.target.value });
  };

  // find what step we are on and decide what component we want to display
  render() {
    const { step } = this.state;
    const { Name, occupation, location, race } = this.state;
    const values = { Name, occupation, location, race };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetales
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Conferm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;
