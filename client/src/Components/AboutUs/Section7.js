import React, { Component } from "react";
import Image from "./Image";
import Modules from "./Section7.module.css";
import { Container, Row, Col } from "react-bootstrap";

class Section7 extends Component {
  constructor() {
    super();

    this.state = {
      display1: false,
      display2: false,
      display3: false,
      screenWidth: false,
      screenWidth2: false,
    };
  }
  componentDidMount() {
    this.screenWidthHandler();
    window.addEventListener("resize", this.screenWidthHandler);
    console.log(this.state.screenWidth);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.screenWidthHandler);
  }
  screenWidthHandler = () => {
    console.log(window.innerWidth);
    console.log(this.state);
    if (window.innerWidth < 576) {
      this.setState({ screenWidth: true });
    } else {
      this.setState({ screenWidth: false });
    }
    if (window.innerWidth < 360) {
      this.setState({ screenWidth2: true });
    } else {
      this.setState({ screenWidth2: false });
    }
    console.log(
      `according to screenHandler 
      screenWidth2 is ${this.state.screenWidth2}`
    );
  };
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
  contentHandler = (e) => {
    const btn = e.target.id;
    let para,
      paraNext,
      next,
      nextNext,
      next2,
      flag = 0;
   
    if (btn === Modules.btn) {
      para = Modules.p1;
      paraNext = Modules.p1next1;
      next = Modules.next1;
      nextNext = Modules.next1next1;
      next2 = Modules.next2;
    }
    if (btn === Modules.btn2) {
      flag = 1;
      para = Modules.p21;
      paraNext = Modules.p1next21;
      next = Modules.next21;
      nextNext = Modules.next1next21;
      next2 = Modules.next22;
    }
    if (btn === Modules.btn3) {
      para = Modules.p31;
      paraNext = Modules.p1next31;
      next = Modules.next31;
      nextNext = Modules.next1next31;
      next2 = Modules.next32;
    }
    console.log(para, paraNext, next, nextNext, next2);
    console.log(e.target.id, this.state.screenWidth2);

    if (!this.state.screenWidth2 || flag) {
      if (
        document.getElementById(para).style.display === "block" ||
        document.getElementById(para).style.display === ""
      ) {
        console.log("show next1");
        document.getElementById(next).style.display = "block";
        document.getElementById(para).style.display = "none";
        document.getElementById(next2).style.display = "none";
      } else {
        if (document.getElementById(btn).innerHTML === "Read More") {
          console.log("show next2");
          document.getElementById(next2).style.display = "block";
          document.getElementById(next).style.display = "none";
          document.getElementById(para).style.display = "none";
          document.getElementById(btn).innerHTML = "Read Less";
        } else {
          if (document.getElementById(btn).innerHTML === "Read Less") {
            console.log("show p1");
            document.getElementById(para).style.display = "block";
            document.getElementById(next).style.display = "none";
            document.getElementById(next2).style.display = "none";
            document.getElementById(btn).innerHTML = "Read More";
          }
        }
      }
    } else {
      console.log("5 sections");
      console.log(document.getElementById(para).style.display);
      if (
        document.getElementById(para).style.display === "" ||
        document.getElementById(para).style.display === "block"
      ) {
        console.log("show p1next1");
        document.getElementById(paraNext).style.display = "block";
        document.getElementById(para).style.display = "none";
        document.getElementById(next).style.display = "none";
        document.getElementById(nextNext).style.display = "none";
        document.getElementById(next2).style.display = "none";
      } else if (
        document.getElementById(paraNext).style.display === "block"
      ) {
        console.log("show next1");
        document.getElementById(next).style.display = "block";
        document.getElementById(paraNext).style.display = "none";
      } else if (
        document.getElementById(next).style.display === "block"
      ) {
        console.log("show next1next1");
        document.getElementById(nextNext).style.display = "block";
        document.getElementById(next).style.display = "none";
      } else if (
        document.getElementById(nextNext).style.display === "block"
      ) {
        console.log("show next2");
        document.getElementById(next2).style.display = "block";
        document.getElementById(nextNext).style.display = "none";
        document.getElementById(btn).innerHTML = "Read Less";
      } else if (
        document.getElementById(next2).style.display === "block"
      ) {
        console.log("show p1");
        document.getElementById(para).style.display = "block";
        document.getElementById(next2).style.display = "none";
        document.getElementById(btn).innerHTML = "Read More";
      }
    }
  };
  render() {
    return (
      <div>
        {/* ***************Row 7a**************** */}
        <Container className={`${Modules.containerAboutUs}`}>
          <Row className={`${Modules.sectionSeven}`}>
            <Col
              className={`${Modules.section7Col} ${Modules.section7Col1}`}
              onClick={this.displayHandler}
            >
              <img
                className={`${Modules.sevenImage}`}
                src={Image.Section7.Img1}
                alt="Founder"
              ></img>
              <div className={`${Modules.contentWrap} ${Modules.wrapSeven1}`}>
                <h3>FOUNDER</h3>
                <h4>Dr. Rakesh Jain</h4>
              </div>
            </Col>
            <Col
              className={`${Modules.section7Col} ${Modules.section7Col2}`}
              onClick={this.displayHandler}
            >
              <img
                className={`${Modules.sevenImage}`}
                src={Image.Section7.Img2}
                alt="CEO"
              ></img>
              <div className={`${Modules.contentWrap} ${Modules.wrapSeven2}`}>
                <h3>CEO</h3>
                <h4>Ms. Shraddha Srivastava</h4>
              </div>
            </Col>
            <Col
              className={`${Modules.section7Col} ${Modules.section7Col3}`}
              onClick={this.displayHandler}
            >
              <img
                className={`${Modules.sevenImage}`}
                src={Image.Section7.Img3}
                alt="Roots"
              ></img>
              <div className={`${Modules.contentWrap} ${Modules.wrapSeven3}`}>
                <h3>ROOTS</h3>
                <h4>Ms. Satakshi Gupta</h4>
              </div>
            </Col>
          </Row>
        </Container>
        {/* ***************Row 7b**************** */}
        {this.state.display1 && (
          <Row
            className={`${Modules.sectionSevenb} ${Modules.sectionSevenRow1}`}
          >
            <Row className={`${Modules.innerRow}`}>
              <Col className={`${Modules.row1Col1} col-md-4`}>
                <img
                  className={`${Modules.image7}`}
                  src={Image.Section7b.Img1}
                  alt="Founder"
                ></img>
              </Col>
              <Col className={`${Modules.row1Col2}`}>
                <Row className={`${Modules.cWrap} ${Modules.wrap1}`}>
                  <h2>FOUNDER</h2>
                  <h4>Dr. Rakesh Jain</h4>
                </Row>
                <Row className={`${Modules.cWrap}`}>
                  <p>
                    <strong>Dr. Rakesh Jain</strong> is the Secretary General of
                    the Rehabilitation Society of the Visually Impaired and
                    Associate Professor and Head Department of English, National
                    Post Graduate College, Lucknow. Dr. Jain is a well known
                    name in the field of social service and has been associated
                    with many national level organizations working for the blind
                    welfare.
                  </p>
                  <p>
                    He was awarded Junior Research Fellowship and Senior
                    Research Fellowship for his Ph.D. in English Literature and
                    he was also awarded Research Associate ship by the
                    University Grants Commission for his Post-Doctoral Research
                    in his discipline.{" "}
                  </p>
                  <p>
                    Dr. Jain launched an organisation in 2005. The organisation
                    has accomplished a lot during this short period of time.
                  </p>
                </Row>
              </Col>
            </Row>
          </Row>
        )}
        {this.state.display2 && (
          <Row
            className={`${Modules.sectionSevenb} ${Modules.sectionSevenRow2}`}
          >
            <Row className={`${Modules.innerRow}`}>
              <Col className={`${Modules.row2Col1}`}>
                <Row className={`${Modules.cWrap} ${Modules.wrap2}`}>
                  <h2>CEO</h2>
                  <h4>Ms. Shraddha Srivastava</h4>
                </Row>
                <Row className={`${Modules.cWrap}`}>
                  <p>
                    <strong>Ms. Shraddha Srivastava</strong> has been
                    instrumental in growth of RSVI since inception. She is woman
                    of substance with multiple projects in her portfolio.
                  </p>
                  <p>
                    She is an Advocate (Specialization Disability Sector) at
                    High Court Lucknow Working in the field of Rehabilitation of
                    the Visually Impaired - RSVI since 2006 in the various
                    capacities including Chief Executive Secretary & Treasurer
                    of RSVI, as well as Course-co-ordinator D.Ed.S.E.V.I.
                    (Diploma in Education, Special Education Visual Impairment)
                  </p>
                </Row>
              </Col>
              <Col className={`${Modules.row2Col2} col-md-4`}>
                <img
                  className={`${Modules.image7}`}
                  src={Image.Section7b.Img2}
                ></img>
              </Col>
            </Row>
          </Row>
        )}
        {this.state.display3 && (
          <Row
            className={`${Modules.sectionSevenb} ${Modules.sectionSevenRow3}`}
          >
            <Row className={`${Modules.innerRow}`}>
              <Col className={`${Modules.row3Col1} col-md-4`}>
                <img
                  className={`${Modules.image7}`}
                  src={Image.Section7b.Img3}
                  alt="Roots"
                ></img>
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
                    Rehabilitation Society Of the Visually Impaired is immensely
                    glad for her contribution and to be a part of RSVI
                  </p>
                </Row>
              </Col>
            </Row>
          </Row>
        )}

        {/* ***************Row 7c**************** */}
        <Row
          className={`${Modules.sectionSevenc} ${Modules.sectionSevencRow1}`}
        >
          <Row className={`${Modules.innercRow} ${Modules.incRow1}`}>
            <Col className={`${Modules.row1Col1c}`}>
              {this.state.screenWidth ? (
                <img
                  className={`${Modules.image7c}`}
                  src={Image.Section7.Img1}
                  alt="Founder"
                ></img>
              ) : (
                <img
                  className={`${Modules.image7c}`}
                  src={Image.Section7b.Img1}
                  alt="Founder"
                ></img>
              )}
            </Col>
            <Col className={`${Modules.row1Col2c}`}>
              <Row className={`${Modules.cWrapc} ${Modules.wrap1c}`}>
                <h2>FOUNDER</h2>
                <h4>Dr. Rakesh Jain</h4>
              </Row>
              <Row className={`${Modules.cWrapc} ${Modules.imppeople}`}>
                <p id={Modules.p1}>
                  <strong>Dr. Rakesh Jain</strong> is the Secretary General of
                  the Rehabilitation Society of the Visually Impaired and
                  Associate Professor and Head Department of English, National
                  Post Graduate College, Lucknow.
                  {!this.state.screenWidth2 &&
                    "Dr. Jain is a well known name in the field of social service and has been associated with many national level organizations working for the blind welfare."}
                </p>

                <p id={Modules.p1next1}>
                  Dr. Jain is a well known name in the field of social service
                  and has been associated with many national level organizations
                  working for the blind welfare.
                </p>

                <p id={Modules.next1}>
                  He was awarded Junior Research Fellowship and Senior Research
                  Fellowship for his Ph.D. in English Literature and he was also
                  awarded
                  {!this.state.screenWidth2 &&
                    "Research Associate ship by the University Grants Commission for his Post-Doctoral Research in his discipline."}
                </p>

                <p id={Modules.next1next1}>
                  Research Associate ship by the University Grants Commission
                  for his Post-Doctoral Research in his discipline.
                </p>

                <p id={Modules.next2}>
                  Dr. Jain launched an organisation in 2005. The organisation
                  has accomplished a lot during this short period of time.
                </p>
                {this.state.screenWidth && (<p id={Modules.parabtn}>
                  <span id={Modules.btn} onClick={this.contentHandler}>
                    Read More
                  </span></p>
                )}
              </Row>
            </Col>
          </Row>
        </Row>
        <Row
          className={`${Modules.sectionSevenc} ${Modules.sectionSevencRow2}`}
        >
          <Row className={`${Modules.innercRow} ${Modules.incRow2}`}>
            <Col className={`${Modules.row2Col1c}`}>
              {this.state.screenWidth ? (
                <img
                  className={`${Modules.image7c}`}
                  src={Image.Section7.Img2}
                  alt="Ceo"
                ></img>
              ) : (
                <img
                  className={`${Modules.image7c}`}
                  src={Image.Section7b.Img2}
                  alt="Ceo"
                ></img>
              )}
            </Col>
            <Col className={`${Modules.row2Col2c}`}>
              <Row className={`${Modules.cWrapc} ${Modules.wrap2c}`}>
                <h2>CEO</h2>
                <h4>Ms. Shraddha Srivastava</h4>
              </Row>
              <Row className={`${Modules.cWrapc} ${Modules.imppeople1}`}>
                <p id={Modules.p21}>
                  <strong>Ms. Shraddha Srivastava</strong> has been instrumental
                  in growth of RSVI since inception. She is woman of substance
                  with multiple projects in her portfolio.
                </p>
                <p id={Modules.next21}>
                  She is an Advocate (Specialization Disability Sector) at High
                  Court Lucknow Working in the field of Rehabilitation of the
                  Visually Impaired - RSVI since 2006 in the various capacities
                  {!this.state.screenWidth &&
                    " including Chief Executive Secretary & Treasurer of RSVI, as well as Course-co-ordinator D.Ed.S.E.V.I. (Diploma in Education, Special Education Visual Impairment)"}
                </p>
                <p id={Modules.next22}>
                  including Chief Executive Secretary & Treasurer of RSVI, as
                  well as Course-co-ordinator D.Ed.S.E.V.I. (Diploma in
                  Education, Special Education Visual Impairment)
                </p>
                {this.state.screenWidth && (<p id={Modules.parabtn2}>
                  <span id={Modules.btn2} onClick={this.contentHandler}>
                    Read More
                  </span></p>
                )}
              </Row>
            </Col>
          </Row>
        </Row>
        <Row
          className={`${Modules.sectionSevenc} ${Modules.sectionSevencRow3}`}
        >
          <Row className={`${Modules.innercRow} ${Modules.incRow3}`}>
            <Col className={`${Modules.row3Col1c}`}>
              {this.state.screenWidth ? (
                <img
                  className={`${Modules.image7c}`}
                  src={Image.Section7.Img3}
                  alt="Roots1"
                ></img>
              ) : (
                <img
                  className={`${Modules.image7c}`}
                  src={Image.Section7b.Img3}
                  alt="Roots1"
                ></img>
              )}
            </Col>
            <Col className={`${Modules.row3Col2c}`}>
              <Row className={`${Modules.cWrapc} ${Modules.wrap3c}`}>
                <h2>Roots</h2>
                <h4>Ms. Satakshi Gupta</h4>
              </Row>
              <Row className={`${Modules.cWrapc} ${Modules.imppeople}`}>
                <p id={Modules.p31}>
                  <strong>Ms. Satakshi Gupta</strong> plays a core part as Daisy
                  incharge , recordist , voice editor and yoga trainer in
                  Rehabilitation Society of the Visually Impaired.
                  {!this.state.screenWidth2 &&
                    "She joined RSVI in 2006 with graduation and PG diploma in communication also with a number of professional qualifications such as:"}{" "}
                </p>
                <p id={Modules.p1next31}>
                  She joined RSVI in 2006 with graduation and PG diploma in
                  communication also with a number of professional
                  qualifications such as:{" "}
                </p>
                <p id={Modules.next31}>
                  <ul className="m-0">
                    <li>Certified child counselor</li>
                    <li>
                      Certified marriage ,relationship and family counselor
                    </li>
                    <li>
                      Certified Emotional Freedom technique (EFT) practioner
                    </li>
                  </ul>
                  {!this.state.screenWidth2 && (
                    <ul className="m-0">
                      <li>Certified Neuro -Linguistic</li>
                      <li>Programming (NLP) practioner</li>
                      <li>Reiki healer and Mudra therapist</li>
                      <li>Self love and life coach</li>
                    </ul>
                  )}
                </p>
                <p id={Modules.next1next31}><ul>
                <li>Certified Neuro -Linguistic</li>
                <li>Programming (NLP) practioner</li>
                <li>Reiki healer and Mudra therapist</li>
                <li>Self love and life coach</li>
              </ul></p>
                <p id={Modules.next32}>
                  Rehabilitation Society Of the Visually Impaired is immensely
                  glad for her contribution and to be a part of RSVI.
                </p>
                {this.state.screenWidth && (<p id={Modules.parabtn3}>
                  <span id={Modules.btn3} onClick={this.contentHandler}>
                    Read More
                  </span></p>
                )}
              </Row>
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}

export default Section7;