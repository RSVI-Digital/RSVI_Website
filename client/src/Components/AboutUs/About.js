import React, { Component } from 'react';
import { Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Modules from "./About.module.css";
import Whoarewe from './Whoarewe';
import Whyrsvi from './Whyrsvi';
import Section5 from './Section5';
import RsviImages from './RsviImages';
import Cards from './Cards';
import Collaborations from './Collaborations';
import Slider from './Slider';

class About extends Component {
    render() {
        return (
            <div className={Modules.mainAboutUS}>
                <Container className={Modules.containerAboutUs}>
                    <Whoarewe></Whoarewe>
                    <Whyrsvi></Whyrsvi>
                    <Section5></Section5>
                    {/* <RsviImages></RsviImages> */}
                    <Cards></Cards>
                    <Collaborations></Collaborations>
                    <Slider></Slider>
                </Container>
            </div>
        )
    }
}

export default About
