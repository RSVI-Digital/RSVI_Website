import React, { Component } from 'react';
import { Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Modules from "./Initiatives.module.css";
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section6A from './Section6A';
import Section6B from './Section6B';
import Section6C from './Section6C';
import Section6D from './Section6D';
import Section7 from './Section7';
class Initiatives extends Component {
    render() {
        return (
            <div className={Modules.mainInitiatives}>
                <Container className={Modules.containerInitiatives}>
                    <Section1></Section1>
                    <Section2></Section2>
                    <Section3></Section3>
                    <Section4></Section4>
                    <Section5></Section5>
                    <Section6A></Section6A>
                    {/* <Section6B></Section6B> */}
                    {/* <Section6C></Section6C> */}
                    <Section6D></Section6D>
                    {/* <Section7></Section7> */}
                </Container>
            </div>
        )
    }
}

export default Initiatives
