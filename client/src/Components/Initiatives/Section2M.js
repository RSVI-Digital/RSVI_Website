import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import style from './Section2M.module.css';

const Section2M = () => {

  // const showSlide = (e) => {
  //   console.log(e.target.className);
  //   document.getElementById('slide').style.display = "block";
  // }

  // const removeSlide = () => {
  //   document.getElementById('slide').style.display = "none";
  // }

  const nextCard = (e) => {
    console.log(e.target.id,);
    if (e.target.id == 'next-Mbtn_1') {
      document.getElementById('containerMCard1').style.display = "none";
      document.getElementById('containerMCard2').style.display = "block";
    }
    if (e.target.id == 'next-Mbtn_2') {
      document.getElementById('containerMCard2').style.display = "none";
      document.getElementById('containerMCard3').style.display = "block";
    }
    if (e.target.id == 'next-Mbtn_3') {
      document.getElementById('containerMCard3').style.display = "none";
      document.getElementById('containerMCard4').style.display = "block";
    }
    if (e.target.id == 'next-Mbtn_4') {
      document.getElementById('containerMCard4').style.display = "none";
      document.getElementById('containerMCard5').style.display = "block";
    }
    if (e.target.id == 'next-Mbtn_5') {
      document.getElementById('containerMCard5').style.display = "none";
      document.getElementById('containerMCard6').style.display = "block";
    }
    if (e.target.id == 'next-Mbtn_6') {
      document.getElementById('containerMCard6').style.display = "none";
      document.getElementById('containerMCard7').style.display = "block";
    }
  }

  const previousCard = (e) => {
    if (e.target.id == 'prev-Mbtn_2') {
      document.getElementById('containerMCard2').style.display = "none";
      document.getElementById('containerMCard1').style.display = "block";
      // document.getElementById('containerMCard1').style.transition = "all 1200ms ease-in";
    }
    if (e.target.id == 'prev-Mbtn_3') {
      document.getElementById('containerMCard3').style.display = "none";
      document.getElementById('containerMCard2').style.display = "block";
      // document.getElementById('containerMCard1').style.transition = "all 1200ms ease-in";
    }
    if (e.target.id == 'prev-Mbtn_4') {
      document.getElementById('containerMCard4').style.display = "none";
      document.getElementById('containerMCard3').style.display = "block";
      // document.getElementById('containerMCard1').style.transition = "all 1200ms ease-in";
    }
    if (e.target.id == 'prev-Mbtn_5') {
      document.getElementById('containerMCard5').style.display = "none";
      document.getElementById('containerMCard4').style.display = "block";
      // document.getElementById('containerMCard1').style.transition = "all 1200ms ease-in";
    }
    if (e.target.id == 'prev-Mbtn_6') {
      document.getElementById('containerMCard6').style.display = "none";
      document.getElementById('containerMCard5').style.display = "block";
      // document.getElementById('containerMCard1').style.transition = "all 1200ms ease-in";
    }
    if (e.target.id == 'prev-Mbtn_7') {
      document.getElementById('containerMCard7').style.display = "none";
      document.getElementById('containerMCard6').style.display = "block";
      // document.getElementById('containerMCard1').style.transition = "all 1200ms ease-in";
    }
  }

  return (
    <Container className={style.mainContainer}>
      <section className={style.containerM1} id="containerMCard1">
        {/* <Row className={style.slide1} id='slide1' onMouseEnter={showSlide} onMouseLeave={removeSlide}>
        <h2 className={style.name} id='name'><a href="#">John Doe</a></h2>
        <p className={style.date}>June 21, 2021</p>
        <ul className={style.listItems} id='listItems'>
          <li><a href="#">Learn</a></li>
          <li><a href="#">Code</a></li>
          <li><a href="#">HTML</a></li>
          <li><a href="#">CSS</a></li>
        </ul>
      </Row> */}
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
            <input type="button" className={style.next} value="Next" id="next-Mbtn_1" onClick={nextCard} />
          </Row>
        </Row>
      </section>

      <section className={style.containerM2} id="containerMCard2">
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
            <input type="button" className={style.previous} value="Previous" id="prev-Mbtn_2" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-Mbtn_2" onClick={nextCard} />
          </Row>
        </Row>
      </section>

      <section className={style.containerM3} id="containerMCard3">
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
            <input type="button" className={style.previous} value="Previous" id="prev-Mbtn_3" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-Mbtn_3" onClick={nextCard} />
          </Row>
        </Row>
      </section>

      <section className={style.containerM4} id="containerMCard4">
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
            <input type="button" className={style.previous} value="Previous" id="prev-Mbtn_4" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-Mbtn_4" onClick={nextCard} />
          </Row>
        </Row>
      </section>

      <section className={style.containerM5} id="containerMCard5">
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
            <input type="button" className={style.previous} value="Previous" id="prev-Mbtn_5" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-Mbtn_5" onClick={nextCard} />
          </Row>
        </Row>
      </section>

      <section className={style.containerM6} id="containerMCard6">
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
            <input type="button" className={style.previous} value="Previous" id="prev-Mbtn_6" onClick={previousCard} />
            <input type="button" className={style.next} value="Next" id="next-Mbtn_6" onClick={nextCard} />
          </Row>
        </Row>
      </section>

      <section className={style.containerM7} id="containerMCard7">
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
            <input type="button" className={style.previous} value="Previous" id="prev-Mbtn_7" onClick={previousCard} />
            <input type="button" className={style.next} value="" />
          </Row>
        </Row>
      </section>
    </Container>
  )
}

export default Section2M;