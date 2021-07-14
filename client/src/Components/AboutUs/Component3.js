import React, { Component } from 'react';
import Module from './Component3.module.css';
import {Row, Col} from 'react-bootstrap';
import Image from './Image';

class Component3 extends Component {
    render() {
        return (
            <div className={Module.component3}>
                <h1 className={Module.heading}>Our Collaborations</h1>
                <Row className={Module.comp3Row1}>
                    <Col className={Module.row1Col1}>
                        <Row className={Module.c1r1}>
                            <img src={Image.Component3.img1} alt='Justvocates' className={Module.comp3Img}></img>
                        </Row>
                        <Row className={Module.c1r2}>
                            <h5 className={Module.subheading}>Justvocates</h5>
                            <p className={Module.para}>Together building a common platform for uncommon people, and undoubtedly to help the blind.
                            </p>
                        </Row>
                    </Col>
                    <Col className={Module.row1Col2}>
                        <Row className={Module.c2r1}>
                            <img src={Image.Component3.img2} alt={"Breakthrough & L'Orèal"} className={Module.comp3Img}></img>
                        </Row>
                        <Row className={Module.c2r2}>
                            <h5 className={Module.subheading}>Breakthrough & <br></br>L'Orèal</h5>
                            <p className={Module.para}>
                             A collaboration  where we discussed about how we can identify any street harassment and intervene safely to help others.
                            </p>
                        </Row>
                    </Col>
                    <Col className={Module.row1Col3}>
                        <Row className={Module.c3r1}>
                            <img src={Image.Component3.img3} alt={"UBER India"} className={Module.comp3Img}></img>
                        </Row>
                        <Row className={Module.c3r2}>
                            <h5 className={Module.subheading}>UBER India</h5>
                            <p className={Module.para}>
                            RSVI collaborated with Uber India to implement a project in which Uber offered free taxi rides to the blind and staff of NGOs serving the blind in 8 cities across India.
                            </p>
                        </Row>
                    </Col>
                    <Col className={Module.row1Col4}>
                        <Row className={Module.c4r1}>
                            <img src={Image.Component3.img4} alt={"Enactus SBSEC"} className={Module.comp3Img}></img>
                        </Row>
                        <Row className={Module.c4r2}>
                            <h5 className={Module.subheading}>Enactus SBSEC</h5>
                            <p className={Module.para}>
                            A collaboration to educate and empower under priviledeged and people with disabilities. It made VIs more updated about new interview techniques.
                            </p>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Component3
