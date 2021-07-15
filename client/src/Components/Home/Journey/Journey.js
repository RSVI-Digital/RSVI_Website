import { bookIcon } from '../Links';
import { mikeIcon } from '../Links';
import { deviceIcon } from '../Links';
import { healthIcon } from '../Links';
import { internIcon } from '../Links';
import { impairedIcon } from '../Links';
import { volunteerIcon } from '../Links';

import CountUp from 'react-countup';
import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';

import styles from './Journey.module.css';

class Journey extends Component {

    constructor() {
        super();
        this.state = { 
            progress: 0,
            visible: false,
        };
        this.Counter = this.Counter.bind(this);
    }

    setVisible(){
        if(!this.state.visible){
            this.setState({
                visible: true,
                progress: 100,
            });
        }
    }

    Counter = ({count}) => {
        return (
            <CountUp start={this.state.visible? null:0} end={count} duration={4} suffix={'+'}>
                {({ countUpRef }) => {
                    return (
                        <VisibilitySensor onChange={isVisible => {if (isVisible) {this.setVisible();}}}>
                            <span className={styles.counter} ref={countUpRef} />
                        </VisibilitySensor>
                    );
                }}
            </CountUp>
        )
    }

    render() {
        return (
            <Container fluid className={styles.holder}>
                <Row className={styles.text}>
                    Over the years, we have shared our journey with...
                </Row>
                <Row className={styles.iconlist}>
                    <Col>
                        <img src={volunteerIcon} alt='sample png' className={styles.icon}/>
                        <this.Counter count={5000} />
                        <p className={styles.caption}>
                            Volunteers
                        </p>
                    </Col>
                    <Col>
                        <img src={impairedIcon} alt='sample png' className={styles.icon}/>
                        <this.Counter count={10000} />
                        <p className={styles.caption}>
                            Visually Impaired Students and Elderly
                        </p>
                    </Col>
                    <Col>
                        <img src={internIcon} alt='sample png' className={styles.icon}/>
                        <this.Counter count={650} />
                        <p className={styles.caption}>
                            Student Interns
                        </p>
                    </Col>
                </Row>
                <Row className={styles.text}>
                    and together we have made
                </Row>
                <Row className={styles.iconlist}>
                    <Col>
                        <img src={bookIcon} alt='sample png' className={styles.icon}/>
                        <this.Counter count={50000} />
                        <p className={styles.caption}>
                            Braille Books and Texts
                        </p>
                    </Col>
                    <Col>
                        <img src={mikeIcon} alt='sample png' className={styles.icon}/>
                        <this.Counter count={50000} />
                        <p className={styles.caption}>
                            Daisy Recordings
                        </p>
                    </Col>
                    <Col>
                        <img src={deviceIcon} alt='sample png' className={styles.icon}/>
                        <this.Counter count={5000} />
                        <p className={styles.caption}>
                            Mobile Devices and Computers
                        </p>
                    </Col>
                    <Col>
                        <img src={healthIcon} alt='sample png' className={styles.icon}/>
                        <this.Counter count={250} />
                        <p className={styles.caption}>
                            Healthcare Camps
                        </p>
                    </Col>
                </Row>
                <Row className={styles.text}>
                    accessible to all.
                </Row>
                <Row>
                    <div className={styles.progressbar}>
                        <div className={styles.progress} style={{ width: `${this.state.progress}%`}} />
                    </div>
                </Row>
                <Row className={styles.years}>
                    <Col className={styles.year}>
                        2005
                    </Col>
                    <Col className={styles.year}>
                        2010
                    </Col>
                    <Col className={styles.year}>
                        2015
                    </Col>
                    <Col className={styles.year}>
                        2021
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Journey;
