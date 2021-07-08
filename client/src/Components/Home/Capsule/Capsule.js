import React, { Component } from 'react';

import { capsule_image } from '../Links';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';
import styles from './Capsule.module.css';

class Capsule extends Component {
    render() {
        return (
            <Container fluid className={styles.body}>
                <Row>
                    <Col xl={6} className={styles.holder}>
                        <img src={capsule_image} className={styles.image}/>
                    </Col>
                    <Col xl={6} className={styles.content}>
                        <p className={styles.heading}>
                            RVSI INFO-CAPSULE
                        </p>
                        <p className={styles.description}>
                            RSVI aims to establish its presence and awareness 
                            through digital platforms, launched RSVI Info Capsule, 
                            which is an audio initiative to spread learning and 
                            development through digital platforms like WhatsApp 
                            where Visually Impaired across the globe are connected.
                        </p>
                        <button className={styles.button} >
                            Listen to podcast now!
                        </button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Capsule;
