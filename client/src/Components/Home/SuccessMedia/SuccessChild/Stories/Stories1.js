import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';

import styles from './Stories.module.css';

import { storyImage1 } from '../Links';

class Stories1 extends Component {
    render() {
        return (
            <Container fluid className={styles.body1}>
                <Row className={styles.holder}>
                    <Col md={5}>
                        <Row className={styles.imagebox}>
                            <img src={storyImage1} className={styles.image}/>
                        </Row>
                    </Col>
                    <Col md={7} className={styles.textCol}>
                        <p className={styles.heading}>
                            ABHINANDAN MISHRA
                        </p>
                        <p className={styles.text}>
                            Abhinandan Mishra, 9, was asked to leave 
                            the school as he had started losing his eyesight. 
                            RSVI took over the charge and got him admitted in 
                            one of the most reputed convent schools of Lucknow. 
                            RSVI prepares books in Braille for Abhinandan and 
                            helps him in coping with the academic and co curricular 
                            requirements of his school. He is being trained into 
                            adapting the life of a person losing his eyesight. 
                            He learns Braille script and computer using screen 
                            reading software at RSVI. He aspires to become an IAS 
                            officer.
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Stories1;
