import React, { Component } from 'react';
import Image from './Image';
import Modules from './Section8.module.css';
import {Row, Col} from 'react-bootstrap';

class Section8 extends Component {
    render() {
        return (
            <div>
                <Row className={Modules.section8}>
                    <img src={Image.Section8} alt="section8" className={Modules.sec8img}></img>
                </Row>
                <Row className={Modules.collabs}>
                  <Col className={Modules.sec8Col}>
                    <h1> Affilations & Collaborations </h1>
                    {/* Should link it yet */}
                    <button className={Modules.collabbutton}> KNOW MORE </button>
                  </Col>
                  <Col className={Modules.sec8Col}>
                    <p>
                    Collaborations with RSVI is very easy process. We extend collaboration
                    to all the organisations who  compliment to our cause and can help in
                    upliftment of life of the visually Impaired. Major highlights being Uber
                    India , Enactus , NSS Society of various colleges , Yoga Session, Mental
                    Wellness doctors etc.
                    </p>
                    <button className={Modules.mobilebutton}> KNOW MORE </button>
                  </Col>
                </Row> 
            </div>
        )
    }
}

export default Section8;