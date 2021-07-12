import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './Section2.module.css';
import image from './Image';

const Section2 = () => {
  const nextCard = (e) => {
    console.log(e.target.id,);
    if (e.target.id == 'next-btn_1') {
      document.getElementById('containerCard1').style.display = "none";
      document.getElementById('containerCard2').style.display = "block";
    }
    if (e.target.id == 'next-btn_2') {
      document.getElementById('containerCard2').style.display = "none";
      document.getElementById('containerCard3').style.display = "block";
    }
    if (e.target.id == 'next-btn_3') {
      document.getElementById('containerCard3').style.display = "none";
      document.getElementById('containerCard4').style.display = "block";
    }

    // For mobile view

    if (e.target.id === 'Mnext-btn_1') {
      document.getElementById('containerCardM1').style.display = "none";
      document.getElementById('containerCardM2').style.display = "block";
    }
    if (e.target.id === 'Mnext-btn_2') {
      document.getElementById('containerCardM2').style.display = "none";
      document.getElementById('containerCardM3').style.display = "block";
    }
    if (e.target.id == 'Mnext-btn_3') {
      document.getElementById('containerCardM3').style.display = "none";
      document.getElementById('containerCardM4').style.display = "block";
    }
    if (e.target.id == 'Mnext-btn_4') {
      document.getElementById('containerCardM4').style.display = "none";
      document.getElementById('containerCardM5').style.display = "block";
    }
    if (e.target.id == 'Mnext-btn_5') {
      document.getElementById('containerCardM5').style.display = "none";
      document.getElementById('containerCardM6').style.display = "block";
    }
    if (e.target.id == 'Mnext-btn_6') {
      document.getElementById('containerCardM6').style.display = "none";
      document.getElementById('containerCardM7').style.display = "block";
    }
  }

  const previousCard = (e) => {
    if (e.target.id == 'prev-btn_2') {
      document.getElementById('containerCard2').style.display = "none";
      document.getElementById('containerCard1').style.display = "block";
      // document.getElementById('containerCard1').style.transition = "all 1200ms ease-in";
    }
    if (e.target.id == 'prev-btn_3') {
      document.getElementById('containerCard3').style.display = "none";
      document.getElementById('containerCard2').style.display = "block";
      // document.getElementById('containerCard1').style.transition = "all 1200ms ease-in";
    }
    if (e.target.id == 'prev-btn_4') {
      document.getElementById('containerCard4').style.display = "none";
      document.getElementById('containerCard3').style.display = "block";
      // document.getElementById('containerCard1').style.transition = "all 1200ms ease-in";
    }

    // For mobile view

    if (e.target.id == 'Mprev-btn_2') {
      document.getElementById('containerCardM2').style.display = "none";
      document.getElementById('containerCardM1').style.display = "block";
    }
    if (e.target.id == 'Mprev-btn_3') {
      document.getElementById('containerCardM3').style.display = "none";
      document.getElementById('containerCardM2').style.display = "block";
    }
    if (e.target.id == 'Mprev-btn_4') {
      document.getElementById('containerCardM4').style.display = "none";
      document.getElementById('containerCardM3').style.display = "block";
    }
    if (e.target.id == 'Mprev-btn_5') {
      document.getElementById('containerCardM5').style.display = "none";
      document.getElementById('containerCardM4').style.display = "block";
    }
    if (e.target.id == 'Mprev-btn_6') {
      document.getElementById('containerCardM6').style.display = "none";
      document.getElementById('containerCardM5').style.display = "block";
    }
    if (e.target.id == 'Mprev-btn_7') {
      document.getElementById('containerCardM7').style.display = "none";
      document.getElementById('containerCardM6').style.display = "block";
    }
  }

  return (
    <div>
      <h1 className={style.header}>Training Programs</h1>
      <Container className={style.mainTraining}>
        <div className={style.container1} id="containerCard1">
          <Row className={style.Row1}>
            <Col className={style.topimage}>
              <img src={image.Section2.Img1} alt="Braille" />
            </Col>
            <Col className={style.containertext}>
              <h2 className={style.containerH2}> Braille Training </h2>
              <p> Braille Training is imparted at RSVI to the Visually Impaired so that they can study and qualify various Competitive Examinations, qualify jobs and further impart training to other Visually Impaired students. </p>
            </Col>
          </Row>
          <Row className={style.Row2}>
            <Col className={style.containertext}>
              <h2 className={style.containerH2}> Mobility </h2>
              <p> Orientation & Mobility Training is to orient with the surroundings and to teach how to become mobile independently with the use of white cane. </p>
              <input type="button" className={style.Dnext} value="Next" id="next-btn_1" onClick={nextCard} />
            </Col>
            <Col className={style.bottomimage}>
              <img src={image.Section2.Img2} alt="Braille" />
            </Col>
          </Row>
        </div>
        <div className={style.container2} id="containerCard2">
          <Row className={style.Row3}>
            <Col className={style.topimage}>
              <img src={image.Section2.Img3} alt="Computer Training" />
            </Col>
            <Col className={style.containertext}>
              <h2 className={style.containerH2}> Computer Training  </h2>
              <p> Computer and Laptop Training is imparted at RSVI to the visually Impaired so that they can study and qualify various Competitive Examinations, qualify jobs and further impart training to other Visually Impaired students. </p>
            </Col>
          </Row>
          <Row className={style.Row4}>
            <Col className={style.containertext}>
              <h2 className={style.containerH2}> Mobile Training </h2>
              <p> Mobile Training is imparted at RSVI to the visually Impaired so that they can study and communicate through smart phones , further impart training to other Visually Impaired students.  </p>
              <input type="button" className={style.Dprevious} value="Previous" id="prev-btn_2" onClick={previousCard} />
              <input type="button" className={style.Dnext} value="Next" id="next-btn_2" onClick={nextCard} />
            </Col>
            <Col className={style.bottomimage}>
              <img src={image.Section2.Img4} alt="Mobile Training" />
            </Col>
          </Row>
        </div>
        <div className={style.container3} id="containerCard3">
          <Row className={style.Row1}>
            <Col className={style.topimage}>
              <img src={image.Section2.Img5} alt="Braille" />
            </Col>
            <Col className={style.containertext}>
              <h2 className={style.containerH2}> Technical / Reading Without Seeing Training </h2>
              <p> Reading without seeing & Technological workshops are held at RSVI to aware Visually Impaired Persons about technology and new updations.  </p>
            </Col>
          </Row>
          <Row className={style.Row2}>
            <Col className={style.containertext}>
              <h2 className={style.containerH2}> Vocational Training </h2>
              <p> Vocational Training is imparted at RSVI to the visually Impaired so that they can study and qualify various Competitive Examinations, qualify jobs and further impart training to other Visually Impaired students. </p>
              <input type="button" className={style.Dprevious} value="Previous" id="prev-btn_3" onClick={previousCard} />
              <input type="button" className={style.Dnext} value="Next" id="next-btn_3" onClick={nextCard} />
            </Col>
            <Col className={style.bottomimage}>
              <img src={image.Section2.Img6} alt="Braille" />
            </Col>
          </Row>
        </div>
        <div className={style.container4} id="containerCard4">
          <Row className={style.Row3}>
            <Col className={style.topimage}>
              <img src={image.Section2.Img7} alt="Braille" />
            </Col>
            <Col className={style.containertext}>
              <h2 className={style.containerH2}> Misc Workshop and Seminar </h2>
              <p>Misc workshops and Seminars is imparted at RSVI to the visually Impaired so that they can aware Visually Impaired Persons about technology and new updations, latest technology and trends. </p>
              <input type="button" className={style.Dprevious} value="Previous" id="prev-btn_4" onClick={previousCard} />
            </Col>
          </Row>
          <Row className={style.Row2}>
          </Row>
        </div>
      </Container>

      {/******  For mobile view **********/}

      <Container className={style.mainContainer}>
        <section className={style.container1} id="containerCardM1">
          <Row className={style.front1} id="front1">
            <div className={style.imagePart}>
              <img src={image.Section2.Img1} alt="Braille" />
            </div>
            <div className={style.heading}>
              <h1>Braille Training</h1>
              <div className={style.border}></div>
            </div>
            <div className={style.contentDetails}>
              <p>
                Braille Training is imparted at RSVI to the visually Impaired so that they can study and qualify various Competetive Examinations, qualify jobs and further impart training to other Visually Impaired students.
              </p>
            </div>
            <div className={style.buttons}>
              <input type="button" className={style.next} value="Next" id="Mnext-btn_1" onClick={nextCard} />
            </div>
          </Row>
        </section>

        <section className={style.container2} id="containerCardM2">
          <Row className={style.front2} id="front1">
            <div className={style.imagePart}>
              <img src={image.Section2.Img1} alt="Braille" />
            </div>
            <div className={style.heading}>
              <h1>Mobility</h1>
              <div className={style.border}></div>
            </div>
            <div className={style.contentDetails}>
              <p>
                Orientation & MobilityTraining is to orient with the surroundings and to teach how to become mobile independently with the use of white cane.
              </p>
            </div>
            <div className={style.buttons}>
              <input type="button" className={style.previous} value="Previous" id="Mprev-btn_2" onClick={previousCard} />
              <input type="button" className={style.next} value="Next" id="Mnext-btn_2" onClick={nextCard} />
            </div>
          </Row>
        </section>

        <section className={style.container3} id="containerCardM3">
          <Row className={style.front3} id="front1">
            <div className={style.imagePart}>
              <img src={image.Section2.Img1} alt="Braille" />
            </div>
            <div className={style.heading}>
              <h1>Computer Training</h1>
              <div className={style.border}></div>
            </div>
            <div className={style.contentDetails}>
              <p>
                Computer and Laptop Training is imparted at RSVI to the visually Impaired so that they can study and qualify various Competetive Examinations, qualify jobs and further impart training to other Visually Impaired students.
              </p>
            </div>
            <div className={style.buttons}>
              <input type="button" className={style.previous} value="Previous" id="Mprev-btn_3" onClick={previousCard} />
              <input type="button" className={style.next} value="Next" id="Mnext-btn_3" onClick={nextCard} />
            </div>
          </Row>
        </section>

        <section className={style.container4} id="containerCardM4">
          <Row className={style.front4} id="front1">
            <div className={style.imagePart}>
              <img src={image.Section2.Img1} alt="Braille" />
            </div>
            <div className={style.heading}>
              <h1>Mobile Training</h1>
              <div className={style.border}></div>
            </div>
            <div className={style.contentDetails}>
              <p>
                Mobile Training is imparted at RSVI to the visually Impaired so that they can study and communicate through smart phones , further impart training to other Visually Impaired students.
              </p>
            </div>
            <div className={style.buttons}>
              <input type="button" className={style.previous} value="Previous" id="Mprev-btn_4" onClick={previousCard} />
              <input type="button" className={style.next} value="Next" id="Mnext-btn_4" onClick={nextCard} />
            </div>
          </Row>
        </section>

        <section className={style.container5} id="containerCardM5">
          <Row className={style.front5} id="front1">
            <div className={style.imagePart}>
              <img src={image.Section2.Img1} alt="Braille" />
            </div>
            <div className={style.heading}>
              <h1>Technical/Reading Without Seeing training</h1>
              <div className={style.border}></div>
            </div>
            <div className={style.contentDetails}>
              <p>
                Reading without seeing & Technological workshops are held at RSVI to aware Visually Impaired Persons about technology and new updations.
              </p>
            </div>
            <div className={style.buttons}>
              <input type="button" className={style.previous} value="Previous" id="Mprev-btn_5" onClick={previousCard} />
              <input type="button" className={style.next} value="Next" id="Mnext-btn_5" onClick={nextCard} />
            </div>
          </Row>
        </section>

        <section className={style.container6} id="containerCardM6">
          <Row className={style.front6} id="front1">
            <div className={style.imagePart}>
              <img src={image.Section2.Img1} alt="Braille" />
            </div>
            <div className={style.heading}>
              <h1>Vocational Training</h1>
              <div className={style.border}></div>
            </div>
            <div className={style.contentDetails}>
              <p>
                Vocational Training is imparted at RSVI to the visually Impaired so that they can study and qualify various Competetive Examinations, qualify jobs and further impart training to other Visually Impaired students.
              </p>
            </div>
            <div className={style.buttons}>
              <input type="button" className={style.previous} value="Previous" id="Mprev-btn_6" onClick={previousCard} />
              <input type="button" className={style.next} value="Next" id="Mnext-btn_6" onClick={nextCard} />
            </div>
          </Row>
        </section>

        <section className={style.container7} id="containerCardM7">
          <Row className={style.front7} id="front1">
            <div className={style.imagePart}>
              <img src={image.Section2.Img1} alt="Braille" />
            </div>
            <div className={style.heading}>
              <h1>Misc workshops and Seminars</h1>
              <div className={style.border}></div>
            </div>
            <div className={style.contentDetails}>
              <p>
                Misc workshops and Seminars is imparted at RSVI to the visually Impaired so that they can aware Visually Impaired Persons about technology and new updations, latest technology and trends.
              </p>
            </div>
            <div className={style.buttons}>
              <input type="button" className={style.previous} value="Previous" id="Mprev-btn_7" onClick={previousCard} />
            </div>
          </Row>
        </section>




      </Container>
    </div>
  )
}

export default Section2
