import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';

import styles from './Stories.module.css';

import { black } from '../Links';

class Stories4 extends Component {
    render() {
        return (
            <Container fluid className={styles.body4}>
                <Row className={styles.holder}>
                    <Col md={7} className={styles.textCol}>
                        <p className={styles.heading}>
                            RUBINA & SABINA
                        </p>
                        <p className={styles.text}>
                            Two young girls from a traditional Muslim family 
                            suffering from Multiple disability have been provided 
                            physiotherapy and vocational training. They are now 
                            capable of managing themselves as they have received 
                            training in daily living skills.
                        </p>
                    </Col>
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
                </Row>
            </Container>
        );
    }
}

export default Stories4;
