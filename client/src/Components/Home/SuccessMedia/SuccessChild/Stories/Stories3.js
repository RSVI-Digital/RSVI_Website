import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';

import styles from './Stories.module.css';

import { black } from '../Links';

class Stories3 extends Component {
    render() {
        return (
            <Container fluid className={styles.body1}>
                <Row className={styles.holder}>
                    <Col md={5} className={styles.imageCol}>
                        <Row className={styles.imagebox}>
                            <Col xs={6} className={styles.imageleft}>
                                <img src={black} className={styles.halftop}/>
                                <img src={black} className={styles.halfbottom}/>
                            </Col>
                            <Col xs={6} className={styles.imageright}>
                                <img src={black} className={styles.full}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={7} className={styles.textCol}>
                        <p className={styles.heading}>
                            VINOD PRAKASH SRIVASTAVA
                        </p>
                        <p className={styles.text}>
                            Vinod Prakash Srivastava, 62, Lost his eyesight at 
                            the age of 30. He had lost confidence in himself and 
                            was scared even to venture out on the porch of his own 
                            house. RSVI brought him to its rehabilitation centre 
                            where he was given rigorous training in Orientation 
                            and Mobility. He was also engaged in the 'Sankalp-Mai' 
                            Project where he received training in making artificial 
                            jewellery. He now comes to RSVI from his Residence taking 
                            public transport all by himself. He has learnt Braille 
                            script and computer. He now reads books and e-newspaper. 
                            He has recently been operated upon one of his eyes with 
                            our efforts and is gaining some vision in his left eye. 
                            He says it is a new berth for him in this world.
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Stories3;
