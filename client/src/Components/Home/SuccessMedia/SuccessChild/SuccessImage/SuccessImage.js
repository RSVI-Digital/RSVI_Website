import React, { Component } from 'react';

import { successStoriesBg } from '../Links';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';

import styles from './SuccessImage.module.css';

class SuccessChild extends Component {
    render() {
        return (
            <Container fluid className={styles.body}>
                <Row className={styles.imageholder}>
                    <img src={successStoriesBg} className={styles.image}/>
                </Row>
                <Row className={styles.textholder}>
                    <p className={styles.text}>
                        SUCCESS STORIES
                    </p>
                </Row>
            </Container>
        );
    }
}

export default SuccessChild;
