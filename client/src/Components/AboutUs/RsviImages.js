import React, { Component } from 'react';
import Image from './AboutUsImages/Image';
import Modules from './RsviImages.module.css';
import {Row, Col} from 'react-bootstrap';

class RsviImages extends Component {
    render() {
        return (
            <div>
                <Row className={Modules.section5}>
                  <p className={Modules.para1}>
                    Besides there are other issues to be addressed, such as
                    availability of Aids & Appliances (Assistive Devices) for the
                    blind students and professionals, availability of assistive
                    technology, information & communication technology, community
                    services, awareness, advocacy services, skill development &
                    Vocational Training, Psychological and Social Adjustments,
                    Availability of Sports & Entertainment Facilities, Training in
                    Daily Living Skills, resource crunch etc. <br></br>
                    <br></br>
                    As a matter of fact, the disability sector in the state of Uttar
                    Pradesh requires more attention from the government and the people
                    than in many other States and Union Territories of Our Country.
                    The picture appears to be quite bleak. Hence, RSVI is a ray of
                    hope for the above-mentioned challenges with respect to Visual
                    Impairment.
                  </p>
                </Row>
                {/* **************** Row 6 **************** */}
                <Row className={Modules.sec5bgimage}>
                  <img src={Image.Section5} alt="dummy" />
                </Row>
                <Row className={Modules.section6}>
                  <Col>
                    <img
                      src={Image.Section6.Img1}
                      alt="dummy"
                      className={Modules.boxbg1}
                    />
                    <p className={Modules.sbox}> About Us </p>
                  </Col>
                  <Col>
                    <img
                      src={Image.Section6.Img2}
                      alt="dummy"
                      className={Modules.boxbg2}
                    />
                    <p className={Modules.sbox}> About Us </p>
                  </Col>
                  <Col>
                    <img
                      src={Image.Section6.Img3}
                      alt="dummy"
                      className={Modules.boxbg3}
                    />
                    <p className={Modules.sbox}> About Us </p>
                  </Col>
                </Row>
            </div>
        )
    }
}

export default RsviImages
