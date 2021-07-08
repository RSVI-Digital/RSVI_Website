import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';

import styles from './FAQImage.module.css';

import { image } from '../Links';

class FAQImage extends Component {
    render() {
        return (
            <Container fluid className={styles.body}>
                <Row className={styles.imageholder}>
                    <img src={image} className={styles.image}/>
                </Row>
                <Row className={styles.textholder}>
                    <p className={styles.text}>
                        Frequently Asked Questions
                    </p>
                </Row>
            </Container>
        );
    }
}

export default FAQImage;
