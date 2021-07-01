import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import style from './Section2M.module.css';

const Section2M = () => {

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
  }

  return (
    <Container className={style.mainContainer}>
      <section className={style.container1} id="containerCardM1">
        <Row className={style.front1} id="front1">
          <Col className={style.imagePart}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-jxeu2mRorUwNN3aOItkBaKJaoRgqBHV9Q&usqp=CAU" alt="Braille" />
          </Col>
          <Col className={style.heading}>
            <h1>Braille Training</h1>
            <div className={style.border}></div>
          </Col>
          <Col className={style.contentDetails}>
            <p>
              Braille Training is imparted at RSVI to the visually Impaired so that they can study and qualify various Competetive Examinations, qualify jobs and further impart training to other Visually Impaired students.
            </p>
          </Col>
          <Row className={style.buttons}>
            <input type="button" className={style.previous} value="" />
            <input type="button" className={style.next} value="Next" id="next-btn_1" onClick={nextCard} />
          </Row>
        </Row>
      </section>

      <section className={style.container2} id="containerCardM2">
        <Row className={style.front2} id="front2">
          <Col className={style.imagePart}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-jxeu2mRorUwNN3aOItkBaKJaoRgqBHV9Q&usqp=CAU" alt="Braille" />
          </Col>
          <Col className={style.heading}>
            <h1>Mobility</h1>
            <div className={style.border}></div>
          </Col>
          <Col className={style.contentDetails}>
            <p>
              Orientation & MobilityTraining is to orient with the surroundings and to teach how to become mobile independently with the use of white cane.
            </p>
          </Col>
          <Row className={style.buttons}>
            <input type="button" className={style.previous} value="Previous" id="prev-btn_2" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-btn_2" onClick={nextCard} />
          </Row>
        </Row>
      </section>

      <section className={style.container3} id="containerCardM3">
        <Row className={style.front3} id="front3">
          <Col className={style.imagePart}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-jxeu2mRorUwNN3aOItkBaKJaoRgqBHV9Q&usqp=CAU" alt="Braille" />
          </Col>
          <Col className={style.heading}>
            <h1>Computer Training</h1>
            <div className={style.border}></div>
          </Col>
          <Col className={style.contentDetails}>
            <p>
              Computer and Laptop Training is imparted at RSVI to the visually Impaired so that they can study and qualify various Competetive Examinations, qualify jobs and further impart training to other Visually Impaired students.
            </p>
          </Col>
          <Row className={style.buttons}>
            <input type="button" className={style.previous} value="Previous" id="prev-btn_3" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-btn_3" onClick={nextCard} />
          </Row>
        </Row>
      </section>

      <section className={style.container4} id="containerCardM4">
        <Row className={style.front4} id="front4">
          <Col className={style.imagePart}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-jxeu2mRorUwNN3aOItkBaKJaoRgqBHV9Q&usqp=CAU" alt="Braille" />
          </Col>
          <Col className={style.heading}>
            <h1>Mobile Training</h1>
            <div className={style.border}></div>
          </Col>
          <Col className={style.contentDetails}>
            <p>
              Mobile Training is imparted at RSVI to the visually Impaired so that they can study and communicate through smart phones , further impart training to other Visually Impaired students.
            </p>
          </Col>
          <Row className={style.buttons}>
            <input type="button" className={style.previous} value="Previous" id="prev-btn_4" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-btn_4" onClick={nextCard} />
          </Row>
        </Row>
      </section>

      <section className={style.container5} id="containerCardM5">
        <Row className={style.front5} id="front5">
          <Col className={style.imagePart}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-jxeu2mRorUwNN3aOItkBaKJaoRgqBHV9Q&usqp=CAU" alt="Braille" />
          </Col>
          <Col className={style.heading}>
            <h1>Technical/Reading Without Seeing training</h1>
            <div className={style.border}></div>
          </Col>
          <Col className={style.contentDetails}>
            <p className={style.para5}>
              Reading without seeing & Technological workshops are held at RSVI to aware Visually Impaired Persons about technology and new updations.
            </p>
          </Col>
          <Row className={style.buttons}>
            <input type="button" className={style.previous} value="Previous" id="prev-btn_5" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-btn_5" onClick={nextCard} />
          </Row>
        </Row>
      </section>

      <section className={style.container6} id="containerCardM6">
        <Row className={style.front6} id="front6">
          <Col className={style.imagePart}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-jxeu2mRorUwNN3aOItkBaKJaoRgqBHV9Q&usqp=CAU" alt="Braille" />
          </Col>
          <Col className={style.heading}>
            <h1>Vocational Training</h1>
            <div className={style.border}></div>
          </Col>
          <Col className={style.contentDetails}>
            <p>
              Vocational Training is imparted at RSVI to the visually Impaired so that they can study and qualify various Competetive Examinations, qualify jobs and further impart training to other Visually Impaired students.
            </p>
          </Col>
          <Row className={style.buttons}>
            <input type="button" className={style.previous} value="Previous" id="prev-btn_6" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-btn_6" onClick={nextCard} />
          </Row>
        </Row>
      </section>

      <section className={style.container7} id="containerCardM7">
        <Row className={style.front7} id="front7">
          <Col className={style.imagePart}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-jxeu2mRorUwNN3aOItkBaKJaoRgqBHV9Q&usqp=CAU" alt="Braille" />
          </Col>
          <Col className={style.heading}>
            <h1>Misc workshops and Seminars</h1>
            <div className={style.border}></div>
          </Col>
          <Col className={style.contentDetails}>
            <p className={style.para7}>
              Misc workshops and Seminars is imparted at RSVI to the visually Impaired so that they can aware Visually Impaired Persons about technology and new updations, latest technology and trends.
            </p>
          </Col>
          <Row className={style.buttons}>
            <input type="button" className={style.previous} value="Previous" id="prev-btn_7" onClick={previousCard} />
            <input type="button" className={style.next} value="" />
          </Row>
        </Row>
      </section>
    </Container>
  )
}

export default Section2M;