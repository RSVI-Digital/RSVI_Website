import React, { Component } from 'react';
import Image from './Image';
import Modules from './Section5_6.module.css';
import {Container, Row, Col} from 'react-bootstrap';
import { Carousel } from "react-responsive-carousel"; 
import './CarouselWithoutThumbnail.css';  

class Section5_6 extends Component {
    render() {
        return (
            <div>
                {/* *********************** Row 5 *********************** */}
                <div className={`${Modules.section5}`}>
                    <Row className={`${Modules.sec5Row1}`}>
                        <img className={`${Modules.sec5Img}`} src={Image.Section5} alt="Sec5"></img>
                    </Row>
                    <Row className={`${Modules.sec5Content}`}>
                        <p className={`${Modules.sec5para}`}>
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
                </div>
                {/* *********************** Row 6 *********************** */}
                <Container className={`${Modules.container6}`}>
                    <Row className={`${Modules.section6}`}>
                        <Col className={`${Modules.sec6Col1}`}>
                            <img className={`${Modules.sec6Img}`} src={Image.Section6.Img1} alt='sec6Image1'></img>
                            <div className={`${Modules.sec6Wrap}`}>
                                <h4>Something about the picture</h4>
                            </div>
                        </Col>
                        <Col className={`${Modules.sec6Col2}`}>
                            <img className={`${Modules.sec6Img}`} src={Image.Section6.Img2} alt='sec6Image2'></img>
                            <div className={`${Modules.sec6Wrap}`}>
                                <h4>Something about the picture</h4>
                            </div>
                        </Col>
                        <Col className={`${Modules.sec6Col3}`}>
                            <img className={`${Modules.sec6Img}`} src={Image.Section6.Img3} alt='sec6Image3'></img>
                            <div className={`${Modules.sec6Wrap}`}>
                                <h4>Something about the picture</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className={`${Modules.section6b}`}>
                  <Carousel
                    autoPlay
                    infiniteLoop
                    interval="10000"
                    transitionTime="600"
                    className={Modules.sec6bSlider}>
                    <div className={` ${Modules.sec6Carousel} `}>
                      <img src={Image.Section6.Img1} alt="thumb1" />
                      <div className={` ${Modules.sec6bWrap} `}>
                        <h4>Something about the picture</h4>
                      </div>
                    </div>
                    <div className={` ${Modules.sec6Carousel} `}>
                      <img src={Image.Section6.Img2} alt="thumb2" />
                      <div className={` ${Modules.sec6bWrap} `}>
                        <h4>Something about the picture</h4>
                      </div>
                    </div>
                    <div className={` ${Modules.sec6Carousel} `}>
                      <img src={Image.Section6.Img3} alt="thumb3" />
                      <div className={` ${Modules.sec6bWrap} `}>
                        <h4>Something about the picture</h4>
                      </div>
                    </div>
                  </Carousel>
                </div> 
            </div>
        )
    }
}

export default Section5_6