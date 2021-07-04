import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './Section6B.module.css';

const Section6B = () => {

  const nextCard = (e) => {
    if (e.target.id === 'next-btn_1') {
      document.getElementById('containerCardM1').style.display = "none";
      document.getElementById('containerCardM2').style.display = "block";
    }
    if (e.target.id === 'next-btn_2') {
      document.getElementById('containerCardM2').style.display = "none";
      document.getElementById('containerCardM3').style.display = "block";
    }
    if (e.target.id == 'next-btn_3') {
      document.getElementById('containerCardM3').style.display = "none";
      document.getElementById('containerCardM4').style.display = "block";
    }
    if (e.target.id == 'next-btn_4') {
      document.getElementById('containerCardM4').style.display = "none";
      document.getElementById('containerCardM5').style.display = "block";
    }
    if (e.target.id == 'next-btn_5') {
      document.getElementById('containerCardM5').style.display = "none";
      document.getElementById('containerCardM6').style.display = "block";
    }
    if (e.target.id == 'next-btn_6') {
      document.getElementById('containerCardM6').style.display = "none";
      document.getElementById('containerCardM7').style.display = "block";
    }
    if (e.target.id == 'next-btn_7') {
      document.getElementById('containerCardM7').style.display = "none";
      document.getElementById('containerCardM8').style.display = "block";
    }
    if (e.target.id == 'next-btn_8') {
      document.getElementById('containerCardM8').style.display = "none";
      document.getElementById('containerCardM9').style.display = "block";
    }
    if (e.target.id == 'next-btn_9') {
      document.getElementById('containerCardM9').style.display = "none";
      document.getElementById('containerCardM10').style.display = "block";
    }
    if (e.target.id == 'next-btn_10') {
      document.getElementById('containerCardM10').style.display = "none";
      document.getElementById('containerCardM1').style.display = "block";
    }
  }

  const previousCard = (e) => {
    if (e.target.id == 'prev-btn_2') {
      document.getElementById('containerCardM2').style.display = "none";
      document.getElementById('containerCardM1').style.display = "block";
    }
    if (e.target.id == 'prev-btn_3') {
      document.getElementById('containerCardM3').style.display = "none";
      document.getElementById('containerCardM2').style.display = "block";
    }
    if (e.target.id == 'prev-btn_4') {
      document.getElementById('containerCardM4').style.display = "none";
      document.getElementById('containerCardM3').style.display = "block";
    }
    if (e.target.id == 'prev-btn_5') {
      document.getElementById('containerCardM5').style.display = "none";
      document.getElementById('containerCardM4').style.display = "block";
    }
    if (e.target.id == 'prev-btn_6') {
      document.getElementById('containerCardM6').style.display = "none";
      document.getElementById('containerCardM5').style.display = "block";
    }
    if (e.target.id == 'prev-btn_7') {
      document.getElementById('containerCardM7').style.display = "none";
      document.getElementById('containerCardM6').style.display = "block";
    }
    if (e.target.id == 'prev-btn_8') {
      document.getElementById('containerCardM8').style.display = "none";
      document.getElementById('containerCardM7').style.display = "block";
    }
    if (e.target.id == 'prev-btn_9') {
      document.getElementById('containerCardM9').style.display = "none";
      document.getElementById('containerCardM8').style.display = "block";
    }
    if (e.target.id == 'prev-btn_10') {
      document.getElementById('containerCardM10').style.display = "none";
      document.getElementById('containerCardM9').style.display = "block";
    }
  }

  return (
    <Container className={style.mainContainer}>
      <section className={style.mobilecontainer1} id="containerCardM1">
        <Row>
          <Col className={style.mobileimage}>
            <img src="https://picsum.photos/seed/picsum/400/300" alt="dummy" />
          </Col>
          <Col className={style.mobileheading}>
            <h1>Gyaan</h1>
          </Col>
          <Col className={style.mobilecontent}>
            <p>
            Customised Study plan for students to make them well equipped with basic spectrums of knowledge. Also, this involves special classes for preparation of Competitive Exams like Banking, SSC, IAS, ETC.
            </p>
          </Col>
          <Row className={style.buttons}>
            <input type="button" className={style.previous} value="" />
            <input type="button" className={style.next} value="Next" id="next-btn_1" onClick={nextCard} />
          </Row>
        </Row>
      </section>

      <section className={style.mobilecontainer2} id="containerCardM2">
        <Row>
          <Col className={style.mobileimage}>
            <img src="https://picsum.photos/seed/picsum/400/300" alt="dummy" />
          </Col>
          <Col className={style.mobileheading}>
            <h1>Tech-Guru Sessions</h1>
          </Col>
          <Col className={style.mobilecontent}>
            <p>
            A series of updates on latest technology, computer usage, updating with latest Mobile Applications and other digital and social platforms.
            </p>
          </Col>
          <Row className={style.buttons}>
            <input type="button" className={style.previous} value="Previous" id="prev-btn_2" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-btn_2" onClick={nextCard} />
          </Row>
        </Row>
      </section>

      <section className={style.mobilecontainer3} id="containerCardM3">
        <Row>
          <Col className={style.mobileimage}>
            <img src="https://picsum.photos/seed/picsum/400/300" alt="dummy" />
          </Col>
          <Col className={style.mobileheading}>
            <h1>Interview Preparation Strategies </h1>
          </Col>
          <Col className={style.mobilecontent}>
            <p>
            An initiative to learn about all the tips to crack the interview
            </p>
          </Col>
          <Row className={style.buttons}>
            <input type="button" className={style.previous} value="Previous" id="prev-btn_3" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-btn_3" onClick={nextCard} />
          </Row>
        </Row>
      </section>
      <section className={style.mobilecontainer4} id="containerCardM4">
        <Row>
          <Col className={style.mobileimage}>
            <img src="https://picsum.photos/seed/picsum/400/300" alt="dummy" />
          </Col>
          <Col className={style.mobileheading}>
            <h1>Mentor-Mentee Program </h1>
          </Col>
          <Col className={style.mobilecontent}>
            <p>
             To meet the coaching requirements of students through online classes
            </p>
          </Col>
          <Row className={style.buttons}>
            <input type="button" className={style.previous} value="Previous" id="prev-btn_4" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-btn_4" onClick={nextCard} />
          </Row>
        </Row>
      </section>
      <section className={style.mobilecontainer5} id="containerCardM5">
        <Row>
          <Col className={style.mobileimage}>
            <img src="https://picsum.photos/seed/picsum/400/300" alt="dummy" />
          </Col>
          <Col className={style.mobileheading}>
            <h1>Chai Pe Charcha </h1>
          </Col>
          <Col className={style.mobilecontent}>
            <p>
            A series of talk sessions to know the views of students on every latest and general aspects.
            </p>
          </Col>
          <Row className={style.buttons}>
            <input type="button" className={style.previous} value="Previous" id="prev-btn_5" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-btn_5" onClick={nextCard} />
          </Row>
        </Row>
      </section>
      <section className={style.mobilecontainer6} id="containerCardM6">
        <Row>
          <Col className={style.mobileimage}>
            <img src="https://picsum.photos/seed/picsum/400/300" alt="dummy" />
          </Col>
          <Col className={style.mobileheading}>
            <h1>Movie Review Sessions (Audio) by RSVI</h1>
          </Col>
          <Col className={style.mobilecontent}>
            <p>
            Ek Nayi Pehel
            </p>
          </Col>
          <Row className={style.buttons}>
            <input type="button" className={style.previous} value="Previous" id="prev-btn_6" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-btn_6" onClick={nextCard} />
          </Row>
        </Row>
      </section>
      <section className={style.mobilecontainer7} id="containerCardM7">
        <Row>
          <Col className={style.mobileimage}>
            <img src="https://picsum.photos/seed/picsum/400/300" alt="dummy" />
          </Col>
          <Col className={style.mobileheading}>
            <h1>Web Series (Audio) by RSVI</h1>
          </Col>
          <Col className={style.mobilecontent}>
            <p>
            Ek Nayi Pehel
            </p>
          </Col>
          <Row className={style.buttons}>
            <input type="button" className={style.previous} value="Previous" id="prev-btn_7" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-btn_7" onClick={nextCard} />
          </Row>
        </Row>
      </section>
      <section className={style.mobilecontainer8} id="containerCardM8">
        <Row>
          <Col className={style.mobileimage}>
            <img src="https://picsum.photos/seed/picsum/400/300" alt="dummy" />
          </Col>
          <Col className={style.mobileheading}>
            <h1>Utsav</h1>
          </Col>
          <Col className={style.mobilecontent}>
            <p>
            Celebrating every occasion in form of fun and Learn
            </p>
          </Col>
          <Row className={style.buttons}>
            <input type="button" className={style.previous} value="Previous" id="prev-btn_8" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-btn_8" onClick={nextCard} />
          </Row>
        </Row>
      </section>
      <section className={style.mobilecontainer9} id="containerCardM9">
        <Row>
          <Col className={style.mobileimage}>
            <img src="https://picsum.photos/seed/picsum/400/300" alt="dummy" />
          </Col>
          <Col className={style.mobileheading}>
            <h1>Aayina</h1>
          </Col>
          <Col className={style.mobilecontent}>
            <p>
            Reflection
            </p>
          </Col>
          <Row className={style.buttons}>
            <input type="button" className={style.previous} value="Previous" id="prev-btn_9" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-btn_9" onClick={nextCard} />
          </Row>
        </Row>
      </section>
      <section className={style.mobilecontainer10} id="containerCardM10">
        <Row>
          <Col className={style.mobileimage}>
            <img src="https://picsum.photos/seed/picsum/400/300" alt="dummy" />
          </Col>
          <Col className={style.mobileheading}>
            <h1>Rozgaar Samachaar Capsule </h1>
          </Col>
          <Col className={style.mobilecontent}>
            <p>
            A platform to provide suitable career opportunities for students of RSVI
            </p>
          </Col>
          <Row className={style.buttons}>
            <input type="button" className={style.previous} value="Previous" id="prev-btn_10" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-btn_10" onClick={nextCard} />
          </Row>
        </Row>
      </section>
    </Container>
  )
}

export default Section6B;
