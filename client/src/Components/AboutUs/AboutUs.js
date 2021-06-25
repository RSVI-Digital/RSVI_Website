import React, { Component } from 'react';
import { Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Modules from "./AboutUs.module.css";
import Section1_2 from './Section1_2';
import Section3_4 from './Section3_4';
import Section5_6 from './Section5_6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';

class AboutUs extends Component {
    render() {
        return (
            <div className={Modules.mainAboutUS}>
                <Container className={Modules.containerAboutUs}>
                    <Section1_2></Section1_2>
                    <Section3_4></Section3_4>
                    <Section5_6></Section5_6>
                    <Section7></Section7>
                    <Section8></Section8>
                    <Section9></Section9>
                </Container>
            </div>
        )
    }
}

export default AboutUs
