import React, { Component } from "react";
import Iframe from "react-iframe";
import { Container } from "@material-ui/core";

// import { flexbox } from "@material-ui/system";

class Giffy extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Iframe
            src="https://giphy.com/embed/fxnEiGnEp5uzr67cwE"
            width="480"
            height="268"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          />
        </Container>
      </div>
    );
  }
}

export default Giffy;
