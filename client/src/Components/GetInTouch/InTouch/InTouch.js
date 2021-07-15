import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';

import styles from './InTouch.module.css';

import { inTouch } from '../Links';
import { facebook } from '../Links';
import { youtube } from '../Links';
import { instagram } from '../Links';

class InTouch extends Component {
    render() {
        return (
            <Container fluid className={styles.body}>
                <Row className={styles.imageholder}>
                    <Col lg={1} />
                    <Col lg={10} className={styles.col}>
                        <img src={inTouch} className={styles.image}/>
                    </Col>
                    <Col lg={1} className={styles.icons}>
                        <img src={youtube} className={styles.icon} onClick={() => window.open('https://youtube.com/c/RSVILucknow')}/>
                        <img src={instagram} className={styles.icon} onClick={() => window.open('https://instagram.com/missionrsvi?igshid=1wzs8v4dk0to1')} />
                        <img src={facebook} className={styles.icon} onClick={() => window.open('https://www.facebook.com/rsvilko/')} />
                    </Col>
                </Row>
                <Row className={styles.textholder}>
                    <p className={styles.text}>
                        Get In Touch
                    </p>
                </Row>
            </Container>
        );
    }
}

export default InTouch;
