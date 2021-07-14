import React, { Component } from "react";
import Image from "./Image";
import { Row, Col } from "react-bootstrap";
import Modules from "./Section4.module.css";

class Section4 extends Component {
  render() {
    return (
      <div id="work3@Home">
        <div className={Modules.mainReach}>
          <h1 className={Modules.header}>Reach/Recognition</h1>
          <Row className={Modules.reachRow}>
            <Col className={Modules.reachCol1}>
              <Row className={Modules.col1Row1}>
                <h3 className={Modules.heading1}>RSVI Madhya Pradesh</h3>
              </Row>
              <Row className={Modules.col1Row2}>
                <img
                  src={Image.Section4}
                  alt="Reach/Recognition"
                  className={Modules.imageReach}
                ></img>
              </Row>
            </Col>
            <Col className={Modules.reachCol2}>
              <p className={Modules.para}>
                RSVI has setup a branch in Unchehra to serve the blind in the
                state of Madhya Pradesh, The Branch will empower the target
                group by providing training, education, assistive devices and
                accessible technology. Our objective is to reach the
                ‘Unreached’. Unchehara, inspite of being a border town of Madhya
                Pradesh, it has yet to enjoy the pleasures of infrastructure and
                development. There is comparatively a higher number of persons
                with disability in the area. Persons with visual impairment are
                deprived of educational facilities. RSVI has decided to provide
                educational, social and economical rehabilitation opportunities
                to the target group.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Section4;
