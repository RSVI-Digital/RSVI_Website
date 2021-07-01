import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './Section2.module.css';

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
}

  return (
    <div> 
        <h1 className={style.header}>Training Programs</h1>
        <Container className={style.mainTraining}>
        <div className={style.container1} id="containerCard1">
           <Row className={style.Row1}>
             <Col className={style.containerimage}>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-jxeu2mRorUwNN3aOItkBaKJaoRgqBHV9Q&usqp=CAU" alt="Braille" />
             </Col>
             <Col className={style.containertext}>
               <h2 className={style.containerH2}> Braille Training </h2>
               <p> Braille Training is imparted at RSVI to the Visually Impaired so that they can study and qualify various Competitive Examinations, qualify jobs and further impart training to other Visually Impaired students. </p>
             </Col>
           </Row>
           <Row className={style.Row2}>
             <Col className={style.containertext1}>
              <h2 className={style.containerH2}> Mobility </h2>
               <p> Orientation & Mobility Training is to orient with the surroundings and to teach how to become mobile independently with the use of white cane. </p>
               <input type="button" className={style.previous} value="" />
               <input type="button" className={style.next} value="Next" id="next-btn_1" onClick={nextCard} />
             </Col>
             <Col className={style.containerimage1}>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-jxeu2mRorUwNN3aOItkBaKJaoRgqBHV9Q&usqp=CAU" alt="Braille" />
             </Col>
           </Row>
        </div>
        <div className={style.container2} id="containerCard2">
           <Row className={style.Row1}>
             <Col className={style.containerimage}>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-jxeu2mRorUwNN3aOItkBaKJaoRgqBHV9Q&usqp=CAU" alt="Braille" />
             </Col>
             <Col className={style.containertext}>
               <h2 className={style.containerH2}> Computer Training  </h2>
               <p> Computer and Laptop Training is imparted at RSVI to the visually Impaired so that they can study and qualify various Competitive Examinations, qualify jobs and further impart training to other Visually Impaired students. </p>
             </Col>
           </Row>
           <Row className={style.Row2}>
             <Col className={style.containertext1}>
              <h2 className={style.containerH2}> Mobile Training </h2>
               <p> Mobile Training is imparted at RSVI to the visually Impaired so that they can study and communicate through smart phones , further impart training to other Visually Impaired students.  </p>
               <input type="button" className={style.previous} value="Previous" id="prev-btn_2" onClick={previousCard} />
               <input type="button" className={style.next} value="Next" id="next-btn_2" onClick={nextCard} />
             </Col>
             <Col className={style.containerimage1}>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-jxeu2mRorUwNN3aOItkBaKJaoRgqBHV9Q&usqp=CAU" alt="Braille" />
             </Col>
           </Row>
        </div>
        <div className={style.container3} id="containerCard3">
           <Row className={style.Row1}>
             <Col className={style.containerimage}>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-jxeu2mRorUwNN3aOItkBaKJaoRgqBHV9Q&usqp=CAU" alt="Braille" />
             </Col>
             <Col className={style.containertext}>
               <h2 className={style.containerH2}> Technical / Reading Without Seeing Training </h2>
               <p> Reading without seeing & Technological workshops are held at RSVI to aware Visually Impaired Persons about technology and new updations.  </p>
             </Col>
           </Row>
           <Row className={style.Row2}>
             <Col className={style.containertext1}>
              <h2 className={style.containerH2}> Vocational Training </h2>
               <p> Vocational Training is imparted at RSVI to the visually Impaired so that they can study and qualify various Competitive Examinations, qualify jobs and further impart training to other Visually Impaired students. </p>
               <input type="button" className={style.previous} value="Previous" id="prev-btn_3" onClick={previousCard} />
               <input type="button" className={style.next} value="Next" id="next-btn_3" onClick={nextCard} />
             </Col>
             <Col className={style.containerimage1}>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-jxeu2mRorUwNN3aOItkBaKJaoRgqBHV9Q&usqp=CAU" alt="Braille" />
             </Col>
           </Row>
        </div>
        <div className={style.container4} id="containerCard4">
           <Row className={style.Row1}>
             <Col className={style.containerimage}>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-jxeu2mRorUwNN3aOItkBaKJaoRgqBHV9Q&usqp=CAU" alt="Braille" />
             </Col>
             <Col className={style.containertext}>
               <h2 className={style.containerH2}> Misc Workshop and Seminar </h2>
               <p>Misc workshops and Seminars is imparted at RSVI to the visually Impaired so that they can aware Visually Impaired Persons about technology and new updations, latest technology and trends.s </p>
               <input type="button" className={style.previous} value="Previous" id="prev-btn_4" onClick={previousCard} />
               <input type="button" className={style.next} value="" />
             </Col>
           </Row>
           <Row className={style.Row2}>
           </Row>
        </div>
    </Container>
    </div>  
    
)
}

export default Section2
