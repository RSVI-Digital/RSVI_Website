import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Container} from 'react-bootstrap';
import styles from './Mission.module.css';
class Mission extends Component {
    render() {
        return (
            <Container fluid className={styles.holder}>
                <Row className={styles.content}>
                    <p className={styles.heading}>
                        Our Mission
                    </p>
                    <p className={styles.para1}>
                        The mission of RSVI is, undoubtedly, to empower the blind in such a 
                        manner that after becoming educationally, socially, economically and 
                        psychologically rehabilitated, he/she should be capable enough to extend 
                        helping hands to even the non-disabled persons, RSVI aims at putting 
                        an end to the problem of availability of reading material in an accessible 
                        format with quality and perfection.
                    </p>
                    <p className={styles.para2}>
                        Becoming independent is not what RSVI strives for, its ultimate goal is 
                        to empower the visually challenged in such a manner that after becoming 
                        independent, he/she embarks upon a tedious journey of making others.
                    </p>
                </Row>
            </Container>
        )
    }
}

export default Mission;
