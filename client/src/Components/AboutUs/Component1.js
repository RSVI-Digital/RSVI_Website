import React, { Component } from 'react';
import {Row, Container} from 'react-bootstrap';
import styles from './Component1.module.css';
import Image from './Image';

class Component1 extends Component {
    render() {
        return (
            <Container fluid className={styles.body}>
                <Row className={styles.imageholder}>
                    <img src={Image.Collab} className={styles.image}/>
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

export default Component1;