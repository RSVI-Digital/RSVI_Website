import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Container} from 'react-bootstrap';

import styles from './CollabImage.module.css';
import { collabImage } from './Links';

class CollabImage extends Component {
    render() {
        return (
            <Container fluid className={styles.body}>
                <Row className={styles.imageholder}>
                    <img src={collabImage} className={styles.image}/>
                </Row>
                <Row className={styles.textholder}>
                    <p className={styles.text}>
                        Collaborate With Us
                    </p>
                    <p className={styles.textsm}>
                        Small Message for Collaborators
                    </p>
                </Row>
            </Container>
        );
    }
}

export default CollabImage;