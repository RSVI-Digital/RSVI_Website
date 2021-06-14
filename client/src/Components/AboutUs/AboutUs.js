import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Modules from "./AboutUs.module.css";
import { Carousel } from "react-responsive-carousel";
import './Carousel.css'; 
import Image from './AboutUsImages/Image';

class AboutUs extends Component {
  constructor() {
    super();

    this.state = {
      display1: false,
      display2: false,
      display3: false,
      display4: false,
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
          display4: false,
        };
      if (e.target.alt === "CEO")
        return {
          display1: false,
          display2: !prevState.display2,
          display3: false,
          display4: false,
        };
      if (e.target.alt === "Roots1")
        return {
          display1: false,
          display2: false,
          display3: !prevState.display3,
          display4: false,
        };
      if (e.target.alt === "Roots2")
        return {
          display1: false,
          display2: false,
          display3: false,
          display4: !prevState.display4,
        };
    });
  };
  render() {
    return (
      <div className={`${Modules.mainAboutUs}`}>
        <Container className={`${Modules.containerAboutUs}`}>
          {/* **************** Row 1 **************** */}
          <div className={`row mt-3 ${Modules.section1} p-md-2`}>
            <div
              className={`col-md-3 col-12 my-md-5 p-0 ${Modules.rowOneColOne} }`}
            >
              <img src={Image.Section1} alt="group"></img>
            </div>
            <div className={`${Modules.rowOneColTwo}  col text-center py-md-5`}>
              <div className="d-inline-block  text-left my-5">
                <h1 className="d-inline-block">
                  Rehabiliation <br></br>Society of the<br></br>Visually
                  Impaired
                </h1>
                <br></br>
                <p className="d-inline-block h6">
                  let the blind hold the torch...
                </p>
              </div>
            </div>
          </div>
          {/* **************** Row 2 **************** */}
          <div className={`row ${Modules.section2} p-md-1 `}>
            <div className={`${Modules.rowTwoDiv}  py-4 mt-5`}>
              <h1 className="">Who Are We?</h1>
            </div>
            <div
              className={`row pt-2 m-1 text-justify ${Modules.rowTwoRowPara}`}
            >
              <p>
                RSVI started its journey in the year 2005 and has successfully
                completed more than 15 years of its successful mission.
              </p>
              <p>
                RSVI is a charitable organization professionally managed by a
                team of committed social workers having experience of more than
                20 years and technical expertise in the field of education,
                training, research, employment, networking, advocacy and
                consultancy services pertaining to the social, psychological and
                economic rehabilitation of the visually impaired. It aims at
                achieving perfection to the satisfaction of both the beneficiary
                and the benefactor.
              </p>
              <p>
                We at RSVI (Rehabilitation Society of The Visually Impaired)
                have joined hands together to help you if for any reason or by
                birth you are affected by one or the other problem of eyesight.
                You may have lost your eyesight completely or in the process of
                losing the same, you can always count on us for all kinds of
                problems that you face due to the partial or total loss of
                eyesight.
              </p>
            </div>
          </div>

          {/* **************** Row 3 **************** */}
          <section className={Modules.section3}>
            <div className={Modules.content}>
              <p>
                In fact, we also extend our services to people with other types
                of physical and mental disabilities, including hearing
                impairment, dyslexia, muscular dystrophy or even people
                suffering from more than one disability. Our services are
                designed to serve persons of all ages and sexes. We also help
                parents and siblings of persons with disabilities and teach them
                how to overcome the mental trauma they undergo because of having
                a person with a disability in their family.
                <br />
                <br />
                Our efforts are directed towards creating an inclusive and
                barrier-free environment; we build a common platform for
                uncommon people. We provide educational facilities, emotional
                strength, psychological counselling, social integration,
                Economic Rehabilitation and all that is needed for a person
                suffering from a disability to be a respectable member of
                society. From giving advice to providing emotional dock and
                assisting you to choose the appropriate technology for your
                educational needs or for your workplace, we are at your beck and
                call.
              </p>
            </div>
            <div className={Modules.imageBox}>
              <img src={Image.Section3} alt="pot" />
            </div>
    </section> 

          {/* **************** Row 4 **************** */}

          <section className={Modules.section4}>
            <div className={Modules.whyStarted}>
              <h1>Why We Started RSVI ?</h1>
            </div>
            <div className={Modules.reasonForStart}>
              <p>
                It is important to mention here that there is a dearth of
                reading material and information in accessaile formats (Audio,
                Braille, E-Text) for the visually impaired resulting in creating
                an insurmountable problem for the students and other
                professional requiring constant updating of their knowledge. It
                is estimated that less than 0.5% of books printed in india are
                converted into audio and Braille formats, let alone
                international publications. As a matter of fact, rehabilitation
                services are available to less than 5% of people suffering from
                blindness and low vision.
                <br />
                The magnitude of the problem may be assessed from the following:{" "}
                <ol>
                  <li>Total number of schools for the blind in the state of Utter
                Pradesh with a population of more than 20 crores is less than
                25.</li>
                  <li>Government Braille Production Centers including NGO's in the
                entire country is less than 10.</li>
                  <li>Audio Reording Centers of books run by government and NGO's
                in the entire country is less than 15.</li>
                  <li>Audio-Conversion Centers in the state of UP is only one.</li>
                </ol>
              </p>
            </div>
          </section>
          {/* **************** Row 5 **************** */}
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
          {/* **************** Row 7 **************** */}
          {/* Section 7a */}
          <Container className={`${Modules.containerCards}`}>
            <Row className={`${Modules.sectionSeven}`}>
              <Col
                className={`${Modules.section7Col} ${Modules.section7Col1}`}
                onClick={this.displayHandler} /* onclick={childPage} */
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
                  alt="Roots1"
                ></img>
                <div className={`${Modules.contentWrap} ${Modules.wrapSeven3}`}>
                  <h3>ROOTS</h3>
                  <h4>Ms. Satakshi Gupta</h4>
                </div>
              </Col>
              <Col
                className={`${Modules.section7Col} ${Modules.section7Col4}`}
                onClick={this.displayHandler}
              >
                <img
                  className={`${Modules.sevenImage}`}
                  src={Image.Section7.Img4}
                  alt="Roots2"
                ></img>
                <div className={`${Modules.contentWrap} ${Modules.wrapSeven4}`}>
                  <h3>ROOTS</h3>
                  <h4>Mr. Nagesh Kumar Pandey</h4>
                </div>
              </Col>
            </Row>
          </Container>
          {/* Section 7b */}
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
                      {/* <br></br><br></br> */}
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
                    src={Image.Section7b.Img2}
                    alt="Ceo"
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
                    alt="Roots1"
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
                      She not only has a working experience with RSVI but also
                      with :
                      <ul>
                        <li>AIR , Lucknow as Compere </li>
                        <li>Radio Afsana as radio Jockey trainee</li>
                        <li>Bula Masti, Canada as Internet RJ</li>
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
          {this.state.display4 && (
            <Row
              className={`${Modules.sectionSevenb} ${Modules.sectionSevenRow4}`}
            >
              <Row className={`${Modules.innerRow}`}>
                <Col className={`${Modules.row4Col1}`}>
                  <Row className={`${Modules.cWrap} ${Modules.wrap4}`}>
                    <h2>ROOTS</h2>
                    <h4>Mr. Nagesh Kumar Pandey</h4>
                  </Row>
                  <Row className={`${Modules.cWrap}`}>
                    <p>
                      <strong>Mr. Nagesh Kumar Pandey</strong> is from
                      middle-class family, his whole family has provided social
                      services to handicapped people and taken care of their
                      education for around 40 years. Nagesh Kumar is continuing
                      their legacy by working for visually impaired people.
                    </p>
                    <p>
                      To help financially unstable, dependent and also
                      handicapped people more effectively, he got special
                      education in B.Ed. Degree. Then after to work more
                      effectively for handicapped people's right, he got PHD in
                      social working. He is working for visually impaired people
                      for 11 years and since last 7 years he's also providing
                      services to old aged, poor females and children, animals,
                      children from youth detention center (juvenile detention
                      center- JDC) etc. He's also providing technical services
                      in RSVI's audio books.
                    </p>
                    <p>
                      He has been a technical expert in UP and other states too.
                      He's spreading awareness about visually impaired and their
                      education in UP and other Indian states too. He's also
                      helping in developing software and hardware activities in
                      India and abroad activities too.
                    </p>
                    <p>
                      After seeing his infinite services to these handicapped
                      institutes, he awarded state level in 2018 by UP govt.
                    </p>
                  </Row>
                </Col>
                <Col className={`${Modules.row4Col2} col-md-4`}>
                  <img
                    className={`${Modules.image7}`}
                    src={Image.Section7b.Img4}
                    alt="Roots2"
                  ></img>
                </Col>
              </Row>
            </Row>
          )}
          {/* Section 7c */}
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
                      She not only has a working experience with RSVI but also
                      with :
                      <ul>
                        <li>AIR , Lucknow as Compere </li>
                        <li>Radio Afsana as radio Jockey trainee</li>
                        <li>Bula Masti, Canada as Internet RJ</li>
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
          <Row className={`${Modules.sectionSevenc} ${Modules.sectionSevencRow4}`}>
              <Row className={`${Modules.innercRow}`}>
              <Col className={`${Modules.row4Col1c}`}>
                  <img
                    className={`${Modules.image7c}`}
                    src={Image.Section7b.Img4}
                    alt="Roots2"
                  ></img>
                </Col>
                <Col className={`${Modules.row4Col2c}`}>
                  <Row className={`${Modules.cWrapc} ${Modules.wrap4c}`}>
                    <h2>ROOTS</h2>
                    <h4>Mr. Nagesh Kumar Pandey</h4>
                  </Row>
                  <Row className={`${Modules.cWrapc}`}>
                    <p>
                      <strong>Mr. Nagesh Kumar Pandey</strong> is from
                      middle-class family, his whole family has provided social
                      services to handicapped people and taken care of their
                      education for around 40 years. Nagesh Kumar is continuing
                      their legacy by working for visually impaired people.
                    </p>
                    <p>
                      To help financially unstable, dependent and also
                      handicapped people more effectively, he got special
                      education in B.Ed. Degree. Then after to work more
                      effectively for handicapped people's right, he got PHD in
                      social working. He is working for visually impaired people
                      for 11 years and since last 7 years he's also providing
                      services to old aged, poor females and children, animals,
                      children from youth detention center (juvenile detention
                      center- JDC) etc. He's also providing technical services
                      in RSVI's audio books.
                    </p>
                    <p>
                      He has been a technical expert in UP and other states too.
                      He's spreading awareness about visually impaired and their
                      education in UP and other Indian states too. He's also
                      helping in developing software and hardware activities in
                      India and abroad activities too.
                    </p>
                    <p>
                      After seeing his infinite services to these handicapped
                      institutes, he awarded state level in 2018 by UP govt.
                    </p>
                  </Row>
                </Col>
              </Row>
            </Row>
          {/* **************** Row 8 **************** */}
          {/* Anjali */}
          <Row className={Modules.section8}>
            <img
              src={Image.Section8}
              alt="dummy"
              className={Modules.bgimage}
            />
          </Row>
          <Row className={Modules.collabs}>
            <Col>
              <h1> Affilations & Collaborations </h1>
              {/* Should link it yet */}
              <button className={Modules.collabbutton}> KNOW MORE </button>
            </Col>
            <Col>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas molestie iaculis fringilla. Ut tincidunt tempor quam,
                sit amet interdum lectus tempus porttitor. Vivamus dolor est,
                vulputate ut dapibus vitae, accumsan consequat tortor. Phasellus
                varius porttitor nunc, a accumsan lorem tempor sit amet. Nam
                aliquet ultricies metus.{" "}
              </p>
            </Col>
          </Row>
          {/* **************** Row 9 **************** */}
          <div className={`${Modules.rowNineCarouselWrapper} p-2 mt-2`}>
            <Carousel
              autoPlay
              infiniteLoop
              interval="15000"
              transitionTime="600"
              className={Modules.rowNineCarouselRoot}
            >
              <div className={` ${Modules.rowNineCarouselDiv} `}>
                <img src={Image.Section9.Img1} alt="thumb1" />
              </div>
              <div className={` ${Modules.rowNineCarouselDiv} `}>
                <img src={Image.Section9.Img2} alt="thumb2" />
              </div>
              <div className={` ${Modules.rowNineCarouselDiv} `}>
                <img src={Image.Section9.Img3} alt="thumb3" />
              </div>
              <div className={` ${Modules.rowNineCarouselDiv} `}>
                <img src={Image.Section9.Img4} alt="thumb4" />
              </div>
              <div className={` ${Modules.rowNineCarouselDiv} `}>
                <img src={Image.Section9.Img5} alt="thumb5" />
              </div>
            </Carousel>
          </div>
        </Container>
      </div>
    );
  }
}

export default AboutUs;
