import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupations: "",
    city: "",
    bio: ""
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
    const { fistName, lastName, email, occupation, city, bio } = this.state;
    const values = { fistName, lastName, email, occupation, city, bio };

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
        return <h1>FormPersonalDetales</h1>;
      case 3:
        return <h1>Conferm</h1>;
      case 4:
        return <h1>Success</h1>;
    }
  }
}

export default UserForm;
