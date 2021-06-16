import React, { Component } from 'react';
import Image from './AboutUsImages/Image';
import Modules from './Cards.module.css';
import {Container, Row, Col} from 'react-bootstrap';

class Cards extends Component {
    constructor() {
        super();
    
        this.state = {
          display1: false,
          display2: false,
          display3: false,
        };
      }
    
      displayHandler = (e) => {
        console.log(e.target.alt);
        this.setState((prevState) => {
          if (e.target.alt === "Founder")
            return {
              display1: !prevState.display1,
              display2: false,
              display3: false,
            };
          if (e.target.alt === "CEO")
            return {
              display1: false,
              display2: !prevState.display2,
              display3: false,
            };
          if (e.target.alt === "Roots")
            return {
              display1: false,
              display2: false,
              display3: !prevState.display3,
            };
        });
      };
    render() {
        return (
            <div>
                {/* ***************Row 7a**************** */}
                <Container className={`${Modules.containerAboutUs}`}>
                    <Row className={`${Modules.sectionSeven}`}>
                      <Col
                        className={`${Modules.section7Col} ${Modules.section7Col1}`}
                        onClick={this.displayHandler} >
                        <img className={`${Modules.sevenImage}`}
                             src={Image.Section7.Img1}
                             alt="Founder"></img>
                        <div className={`${Modules.contentWrap} ${Modules.wrapSeven1}`}>
                          <h3>FOUNDER</h3>
                          <h4>Dr. Rakesh Jain</h4>
                        </div>
                      </Col>
                      <Col
                        className={`${Modules.section7Col} ${Modules.section7Col2}`}
                        onClick={this.displayHandler}>
                        <img
                          className={`${Modules.sevenImage}`}
                          src={Image.Section7.Img2}
                          alt="CEO"></img>
                        <div className={`${Modules.contentWrap} ${Modules.wrapSeven2}`}>
                          <h3>CEO</h3>
                          <h4>Ms. Shraddha Srivastava</h4>
                        </div>
                      </Col>
                      <Col
                        className={`${Modules.section7Col} ${Modules.section7Col3}`}
                        onClick={this.displayHandler}>
                        <img
                          className={`${Modules.sevenImage}`}
                          src={Image.Section7.Img3}
                          alt="Roots"></img>
                        <div className={`${Modules.contentWrap} ${Modules.wrapSeven3}`}>
                          <h3>ROOTS</h3>
                          <h4>Ms. Satakshi Gupta</h4>
                        </div>
                      </Col>
                    </Row>
                </Container>
                {/* ***************Row 7b**************** */}
                {this.state.display1 && (
                  <Row className={`${Modules.sectionSevenb} ${Modules.sectionSevenRow1}`}>
                    <Row className={`${Modules.innerRow}`}>
                      <Col className={`${Modules.row1Col1} col-md-4`}>
                        <img
                          className={`${Modules.image7}`}
                          src={Image.Section7b.Img1}
                          alt="Founder"></img>
                      </Col>
                      <Col className={`${Modules.row1Col2}`}>
                        <Row className={`${Modules.cWrap} ${Modules.wrap1}`}>
                          <h2>FOUNDER</h2>
                          <h4>Dr. Rakesh Jain</h4>
                        </Row>
                        <Row className={`${Modules.cWrap}`}>
                          <p>
                            <strong>Dr. Rakesh Jain</strong> is the Secretary General
                            of the Rehabilitation Society of the Visually Impaired and
                            Associate Professor and Head Department of English,
                            National Post Graduate College, Lucknow. Dr. Jain is a
                            well known name in the field of social service and has
                            been associated with many national level organizations
                            working for the blind welfare.
                          </p>
                          <p>
                            He was awarded Junior Research Fellowship and Senior
                            Research Fellowship for his Ph.D. in English Literature
                            and he was also awarded Research Associate ship by the
                            University Grants Commission for his Post-Doctoral
                            Research in his discipline.{" "}
                          </p>
                          <p>
                            Dr. Jain launched an organisation in 2005. The
                            organisation has accomplished a lot during this short
                            period of time.
                          </p>
                        </Row>
                      </Col>
                    </Row>
                  </Row>
                )}
                {this.state.display2 && (
                  <Row className={`${Modules.sectionSevenb} ${Modules.sectionSevenRow2}`}>
                    <Row className={`${Modules.innerRow}`}>
                      <Col className={`${Modules.row2Col1}`}>
                        <Row className={`${Modules.cWrap} ${Modules.wrap2}`}>
                          <h2>CEO</h2>
                          <h4>Ms. Shraddha Srivastava</h4>
                        </Row>
                        <Row className={`${Modules.cWrap}`}>
                          <p>
                            <strong>Ms. Shraddha Srivastava</strong> has been
                            instrumental in growth of RSVI since inception. She is
                            woman of substance with multiple projects in her
                            portfolio.
                          </p>
                          <p>
                            She is an Advocate (Specialization Disability Sector) at
                            High Court Lucknow Working in the field of Rehabilitation
                            of the Visually Impaired - RSVI since 2006 in the various
                            capacities including Chief Executive Secretary & Treasurer
                            of RSVI, as well as Course-co-ordinator D.Ed.S.E.V.I.
                            (Diploma in Education, Special Education Visual
                            Impairment)
                          </p>
                        </Row>
                      </Col>
                      <Col className={`${Modules.row2Col2} col-md-4`}>
                        <img
                          className={`${Modules.image7}`}
                          src={Image.Section7b.Img2}></img>
                      </Col>
                    </Row>
                  </Row>
                )}
                {this.state.display3 && (
                  <Row className={`${Modules.sectionSevenb} ${Modules.sectionSevenRow3}`}>
                    <Row className={`${Modules.innerRow}`}>
                      <Col className={`${Modules.row3Col1} col-md-4`}>
                        <img
                          className={`${Modules.image7}`}
                          src={Image.Section7b.Img3}
                          alt="Roots"></img>
                      </Col>
                      <Col className={`${Modules.row3Col2}`}>
                        <Row className={`${Modules.cWrap} ${Modules.wrap3}`}>
                          <h2>Roots</h2>
                          <h4>Ms. Satakshi Gupta</h4>
                        </Row>
                        <Row className={`${Modules.cWrap}`}>
                          <p>
                            <strong>Ms. Satakshi Gupta</strong> plays a core part as
                            Daisy incharge , recordist , voice editor and yoga trainer
                            in Rehabilitation Society of the Visually Impaired. She
                            joined RSVI in 2006 with graduation and PG diploma in
                            communication also with a number of professional
                            qualifications such as:{" "}
                          </p>
                          <p>
                            <ul>
                              <li>Certified child counselor</li>
                              <li>
                                Certified marriage ,relationship and family counselor
                              </li>
                              <li>
                                Certified Emotional Freedom technique (EFT) practioner
                              </li>
                              <li>Certified Neuro -Linguistic</li>
                              <li>Programming (NLP) practioner</li>
                              <li>Reiki healer and Mudra therapist</li>
                              <li>Self love and life coach</li>
                            </ul>
                          </p>
                          <p>
                            Rehabilitation Society Of the Visually Impaired is
                            immensely glad for her contribution and to be a part of
                            RSVI
                          </p>
                        </Row>
                      </Col>
                    </Row>
                  </Row>
                )}
          
                {/* ***************Row 7c**************** */}
                <Row className={`${Modules.sectionSevenc} ${Modules.sectionSevencRow1}`}>
                    <Row className={`${Modules.innercRow}`}>
                      <Col className={`${Modules.row1Col1c}`}>
                        <img
                          className={`${Modules.image7c}`}
                          src={Image.Section7b.Img1}
                          alt="Founder"
                        ></img>
                      </Col>
                      <Col className={`${Modules.row1Col2c}`}>
                        <Row className={`${Modules.cWrapc} ${Modules.wrap1c}`}>
                          <h2>FOUNDER</h2>
                          <h4>Dr. Rakesh Jain</h4>
                        </Row>
                        <Row className={`${Modules.cWrapc}`}>
                          <p>
                            <strong>Dr. Rakesh Jain</strong> is the Secretary General
                            of the Rehabilitation Society of the Visually Impaired and
                            Associate Professor and Head Department of English,
                            National Post Graduate College, Lucknow. Dr. Jain is a
                            well known name in the field of social service and has
                            been associated with many national level organizations
                            working for the blind welfare.
                          </p>
                          <p>
                            He was awarded Junior Research Fellowship and Senior
                            Research Fellowship for his Ph.D. in English Literature
                            and he was also awarded Research Associate ship by the
                            University Grants Commission for his Post-Doctoral
                            Research in his discipline.{" "}
                          </p>
                          <p>
                            Dr. Jain launched an organisation in 2005. The
                            organisation has accomplished a lot during this short
                            period of time.
                          </p>
                        </Row>
                      </Col>
                    </Row>
                </Row>
                <Row className={`${Modules.sectionSevenc} ${Modules.sectionSevencRow2}`}>
                    <Row className={`${Modules.innercRow}`}>
                      <Col className={`${Modules.row2Col1c}`}>
                        <img
                          className={`${Modules.image7c}`}
                          src={Image.Section7b.Img2}
                          alt="Ceo"
                        ></img>
                      </Col>
                      <Col className={`${Modules.row2Col2c}`}>
                        <Row className={`${Modules.cWrapc} ${Modules.wrap2c}`}>
                          <h2>CEO</h2>
                          <h4>Ms. Shraddha Srivastava</h4>
                        </Row>
                        <Row className={`${Modules.cWrapc}`}>
                          <p>
                            <strong>Ms. Shraddha Srivastava</strong> has been
                            instrumental in growth of RSVI since inception. She is
                            woman of substance with multiple projects in her
                            portfolio.
                          </p>
                          <p>
                            She is an Advocate (Specialization Disability Sector) at
                            High Court Lucknow Working in the field of Rehabilitation
                            of the Visually Impaired - RSVI since 2006 in the various
                            capacities including Chief Executive Secretary & Treasurer
                            of RSVI, as well as Course-co-ordinator D.Ed.S.E.V.I.
                            (Diploma in Education, Special Education Visual
                            Impairment)
                          </p>
                        </Row>
                      </Col>
                    </Row>
                </Row>
                <Row className={`${Modules.sectionSevenc} ${Modules.sectionSevencRow3}`}>
                    <Row className={`${Modules.innercRow}`}>
                      <Col className={`${Modules.row3Col1c}`}>
                        <img
                          className={`${Modules.image7c}`}
                          src={Image.Section7b.Img3}
                          alt="Roots1"
                        ></img>
                      </Col>
                      <Col className={`${Modules.row3Col2c}`}>
                        <Row className={`${Modules.cWrapc} ${Modules.wrap3c}`}>
                          <h2>Roots</h2>
                          <h4>Ms. Satakshi Gupta</h4>
                        </Row>
                        <Row className={`${Modules.cWrapc}`}>
                          <p>
                            <strong>Ms. Satakshi Gupta</strong> plays a core part as
                            Daisy incharge , recordist , voice editor and yoga trainer
                            in Rehabilitation Society of the Visually Impaired. She
                            joined RSVI in 2006 with graduation and PG diploma in
                            communication also with a number of professional
                            qualifications such as:{" "}
                          </p>
                          <p>
                            <ul>
                              <li>Certified child counselor</li>
                              <li>
                                Certified marriage ,relationship and family counselor
                              </li>
                              <li>
                                Certified Emotional Freedom technique (EFT) practioner
                              </li>
                              <li>Certified Neuro -Linguistic</li>
                              <li>Programming (NLP) practioner</li>
                              <li>Reiki healer and Mudra therapist</li>
                              <li>Self love and life coach</li>
                            </ul>
                          </p>
                          <p>
                            Rehabilitation Society Of the Visually Impaired is
                            immensely glad for her contribution and to be a part of
                            RSVI
                          </p>
                        </Row>
                      </Col>
                    </Row>
                </Row>
            </div>
        )
    }
}

export default Cards
