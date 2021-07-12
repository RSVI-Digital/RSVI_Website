import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';

import styles from './Stories.module.css';

import { storyImage2 } from '../Links';

class Stories2 extends Component {
    render() {
        return (
            <Container fluid className={styles.body2}>
                <Row className={styles.holder}>
                    <Col md={5} className={styles.bighide}>
                        <Row className={styles.imagebox}>
                            <img src={storyImage2} className={styles.image}/>
                        </Row>
                    </Col>
                    <Col md={7} className={styles.textCol}>
                        <p className={styles.heading}>
                            VANISHKA SRIVASTAVA
                        </p>
                        <p className={styles.text}>
                            Vanshika Srivastava, 15, lost her eyesight when she was 
                            studying in class 6th. She was left with no alternative 
                            but to remain confined in the four walls of her house. 
                            She was brought to RSVI in April 2015. She resumed her 
                            studies with added enthusiasm finding all the opportunities 
                            of development in RSVI. She was helped to prepare for her 
                            10th standard board exams by providing all the necessary 
                            study material in Braille and audio. She wants to become 
                            a doctor and serve the society.
                        </p>
                    </Col>
                    <Col md={5} className={styles.smallhide}>
                        <Row className={styles.imagebox}>
                            <img src={storyImage2} className={styles.image}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Stories2;
