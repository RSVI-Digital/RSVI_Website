import React, { Component } from "react";
import Work from "./WorksComp/Work";
import Rehabilitation from "./Rehabilitation";
import Mission from "./Mission";
import Journey from "./Journey";

class Home extends Component {
  render() {
    return (
      <div>
        <Rehabilitation />
        <Work />
        <Mission />
        <Journey />
      </div>
    );
  }
}

export default Home;
