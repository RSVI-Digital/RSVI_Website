import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';

import styles from './Stories.module.css';

import { storyImage4 } from '../Links';

class Stories4 extends Component {
    render() {
        return (
            <Container fluid className={styles.body4}>
                <Row className={styles.holder}>
                    <Col md={5} className={styles.bighide}>
                        <Row className={styles.imagebox}>
                            <img src={storyImage4} className={styles.image}/>
                        </Row>
                    </Col>
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
                    <Col md={5} className={styles.smallhide}>
                        <Row className={styles.imagebox}>
                            <img src={storyImage4} className={styles.image}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Stories4;
