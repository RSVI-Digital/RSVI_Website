import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './Section6C.module.css';
import image from './Image';

const DCards = () => {

    const nextCard = (e) => {
        console.log(e.target.id,);

        // For desktop view

        if (e.target.id === 'Dnext-btn_1') {
            document.getElementById('DCardContainer1').style.display = "none";
            document.getElementById('DCardContainer2').style.display = "grid";
        }
        if (e.target.id === 'Dnext-btn_2') {
            document.getElementById('DCardContainer2').style.display = "none";
            document.getElementById('DCardContainer3').style.display = "grid";
        }
        if (e.target.id == 'Dnext-btn_3') {
            document.getElementById('DCardContainer3').style.display = "none";
            document.getElementById('DCardContainer4').style.display = "grid";
        }
        if (e.target.id == 'Dnext-btn_4') {
            document.getElementById('DCardContainer4').style.display = "none";
            document.getElementById('DCardContainer5').style.display = "grid";
        }
        if (e.target.id == 'Dnext-btn_5') {
            document.getElementById('DCardContainer5').style.display = "none";
            document.getElementById('DCardContainer6').style.display = "grid";
        }
        if (e.target.id == 'Dnext-btn_6') {
            document.getElementById('DCardContainer6').style.display = "none";
            document.getElementById('DCardContainer7').style.display = "grid";
        }
        if (e.target.id == 'Dnext-btn_7') {
            document.getElementById('DCardContainer7').style.display = "none";
            document.getElementById('DCardContainer8').style.display = "grid";
        }
        if (e.target.id == 'Dnext-btn_8') {
            document.getElementById('DCardContainer8').style.display = "none";
            document.getElementById('DCardContainer9').style.display = "grid";
        }
        if (e.target.id == 'Dnext-btn_9') {
            document.getElementById('DCardContainer9').style.display = "none";
            document.getElementById('DCardContainer10').style.display = "grid";
        }
        if (e.target.id == 'Dnext-btn_10') {
            document.getElementById('DCardContainer10').style.display = "none";
            document.getElementById('DCardContainer11').style.display = "grid";
        }
    }

    const prevCard = (e) => {
        if (e.target.id === 'Dprev-btn_2') {
            document.getElementById('DCardContainer1').style.display = "grid";
            document.getElementById('DCardContainer2').style.display = "none";
        }
        if (e.target.id === 'Dprev-btn_3') {
            document.getElementById('DCardContainer2').style.display = "grid";
            document.getElementById('DCardContainer3').style.display = "none";
        }
        if (e.target.id == 'Dprev-btn_4') {
            document.getElementById('DCardContainer3').style.display = "grid";
            document.getElementById('DCardContainer4').style.display = "none";
        }
        if (e.target.id == 'Dprev-btn_5') {
            document.getElementById('DCardContainer4').style.display = "grid";
            document.getElementById('DCardContainer5').style.display = "none";
        }
        if (e.target.id == 'Dprev-btn_6') {
            document.getElementById('DCardContainer5').style.display = "grid";
            document.getElementById('DCardContainer6').style.display = "none";
        }
        if (e.target.id == 'Dprev-btn_7') {
            document.getElementById('DCardContainer6').style.display = "grid";
            document.getElementById('DCardContainer7').style.display = "none";
        }
        if (e.target.id == 'Dprev-btn_8') {
            document.getElementById('DCardContainer7').style.display = "grid";
            document.getElementById('DCardContainer8').style.display = "none";
        }
        if (e.target.id == 'Dprev-btn_9') {
            document.getElementById('DCardContainer8').style.display = "grid";
            document.getElementById('DCardContainer9').style.display = "none";
        }
        if (e.target.id == 'Dprev-btn_10') {
            document.getElementById('DCardContainer9').style.display = "grid";
            document.getElementById('DCardContainer10').style.display = "none";
        }
        if (e.target.id == 'Dprev-btn_11') {
            document.getElementById('DCardContainer10').style.display = "grid";
            document.getElementById('DCardContainer11').style.display = "none";
        }
    }

    return (
        <Container className={style.mainDCardContainer}>
            <Row className={style.DCardContainer1} id="DCardContainer1">
                <Col className={style.imageContainer}>
                    <img src={image.Section6b.Img1} alt="" />
                </Col>
                <Col className={style.detailsContainer}>
                    <h1>Gyaan</h1>
                    <p>Customised Study plan for students to make them well equipped with basic spectrums of knowledge. Also, this involves special classes for preparation of Competative Exams like Banking, SSC, IAS, etc.</p>
                    <button className={style.containerButtonNext} id="Dnext-btn_1" onClick={nextCard}>
                        Next
                        <span>&#129130;</span>
                    </button>
                </Col >
            </Row>

            <Row className={style.DCardContainer2} id="DCardContainer2">
                <Col className={style.imageContainer}>
                    <img src={image.Section6b.Img2} alt="" />
                </Col>
                <Col className={style.detailsContainer}>
                    <h1>Tech-Guru Sessions</h1>
                    <p>A series of update on latest technology, computer usage, updating with latest Mobile Applications and other digital and social platforms.</p>
                    <button className={style.containerButtonPrev} id="Dprev-btn_2" onClick={prevCard}>
                        <span>&#129128;</span>
                        Previous
                    </button>
                    <button className={style.containerButtonNext} id="Dnext-btn_2" onClick={nextCard}>
                        Next
                        <span>&#129130;</span>
                    </button>
                </Col >
            </Row>

            <Row className={style.DCardContainer3} id="DCardContainer3">
                <Col className={style.imageContainer}>
                    <img src={image.Section6b.Img3} alt="" />
                </Col>
                <Col className={style.detailsContainer}>
                    <h1>Interview Preparation Strategies</h1>
                    <p>An interview to learn about all the tips to crack the interview.</p>
                    <button className={style.containerButtonPrev} id="Dprev-btn_3" onClick={prevCard}>
                        <span>&#129128;</span>
                        Previous
                    </button>
                    <button className={style.containerButtonNext} id="Dnext-btn_3" onClick={nextCard}>
                        Next
                        <span>&#129130;</span>
                    </button>
                </Col >
            </Row>

            <Row className={style.DCardContainer4} id="DCardContainer4">
                <Col className={style.imageContainer}>
                    <img src={image.Section6b.Img4} alt="" />
                </Col>
                <Col className={style.detailsContainer}>
                    <h1>Mentor-Mentee Programme</h1>
                    <p>To meet the coaching requirements of studennts through online classes.</p>
                    <button className={style.containerButtonPrev} id="Dprev-btn_4" onClick={prevCard}>
                        <span>&#129128;</span>
                        Previous
                    </button>
                    <button className={style.containerButtonNext} id="Dnext-btn_4" onClick={nextCard}>
                        Next
                        <span>&#129130;</span>
                    </button>
                </Col >
            </Row>

            <Row className={style.DCardContainer5} id="DCardContainer5">
                <Col className={style.imageContainer}>
                    <img src={image.Section6b.Img5} alt="" />
                </Col>
                <Col className={style.detailsContainer}>
                    <h1>Chai Pe Charcha</h1>
                    <p>A series of talk sessions to know the views of students on every latest and general aspects.</p>
                    <button className={style.containerButtonPrev} id="Dprev-btn_5" onClick={prevCard}>
                        <span>&#129128;</span>
                        Previous
                    </button>
                    <button className={style.containerButtonNext} id="Dnext-btn_5" onClick={nextCard}>
                        Next
                        <span>&#129130;</span>
                    </button>
                </Col >
            </Row>

            <Row className={style.DCardContainer6} id="DCardContainer6">
                <Col className={style.imageContainer}>
                    <img src={image.Section6b.Img6} alt="" />
                </Col>
                <Col className={style.detailsContainer}>
                    <h1>RSVI Got Talent</h1>
                    <p>A platform to unleash hidden talent of the students of RSVI.</p>
                    <button className={style.containerButtonPrev} id="Dprev-btn_6" onClick={prevCard}>
                        <span>&#129128;</span>
                        Previous
                    </button>
                    <button className={style.containerButtonNext} id="Dnext-btn_6" onClick={nextCard}>
                        Next
                        <span>&#129130;</span>
                    </button>
                </Col >
            </Row>

            <Row className={style.DCardContainer7} id="DCardContainer7">
                <Col className={style.imageContainer}>
                    <img src={image.Section6b.Img7} alt="" />
                </Col>
                <Col className={style.detailsContainer}>
                    <h1>Movie Review Sessions (Audio) by RSVI</h1>
                    <p>Sharing a detailed Movie Review Session to the Visually Impaired in form of an accessible audio capsule.</p>
                    <button className={style.containerButtonPrev} id="Dprev-btn_7" onClick={prevCard}>
                        <span>&#129128;</span>
                        Previous
                    </button>
                    <button className={style.containerButtonNext} id="Dnext-btn_7" onClick={nextCard}>
                        Next
                        <span>&#129130;</span>
                    </button>
                </Col >
            </Row>

            <Row className={style.DCardContainer8} id="DCardContainer8">
                <Col className={style.imageContainer}>
                    <img src={image.Section6b.Img8} alt="" />
                </Col>
                <Col className={style.detailsContainer}>
                    <h1>Web Series (Audio) by RSVI</h1>
                    <p>An initiative to share audio capsules of most preferred web series to its Visually Impaired students for their leisure and entertainment.</p>
                    <button className={style.containerButtonPrev} id="Dprev-btn_8" onClick={prevCard}>
                        <span>&#129128;</span>
                        Previous
                    </button>
                    <button className={style.containerButtonNext} id="Dnext-btn_8" onClick={nextCard}>
                        Next
                        <span>&#129130;</span>
                    </button>
                </Col >
            </Row>

            <Row className={style.DCardContainer9} id="DCardContainer9">
                <Col className={style.imageContainer}>
                    <img src={image.Section6b.Img9} alt="" />
                </Col>
                <Col className={style.detailsContainer}>
                    <h1>Utsav</h1>
                    <p>Celebrating every occasion in form of fun and Learn.</p>
                    <button className={style.containerButtonPrev} id="Dprev-btn_9" onClick={prevCard}>
                        <span>&#129128;</span>
                        Previous
                    </button>
                    <button className={style.containerButtonNext} id="Dnext-btn_9" onClick={nextCard}>
                        Next
                        <span>&#129130;</span>
                    </button>
                </Col >
            </Row>

            <Row className={style.DCardContainer10} id="DCardContainer10">
                <Col className={style.imageContainer}>
                    <img src={image.Section6b.Img10} alt="" />
                </Col>
                <Col className={style.detailsContainer}>
                    <h1>Aayina</h1>
                    <p>Grooming sessions for the Visually Impaired are organized with emphasis on <br />
                        " Beauty doesn't need a vision" .<br />
                        Everyone is beautiful and worth appreciation.</p>
                    <button className={style.containerButtonPrev} id="Dprev-btn_10" onClick={prevCard}>
                        <span>&#129128;</span>
                        Previous
                    </button>
                    <button className={style.containerButtonNext} id="Dnext-btn_10" onClick={nextCard}>
                        Next
                        <span>&#129130;</span>
                    </button>
                </Col >
            </Row>

            <Row className={style.DCardContainer11} id="DCardContainer11">
                <Col className={style.imageContainer}>
                    <img src={image.Section6b.Img11} alt="" />
                </Col>
                <Col className={style.detailsContainer}>
                    <h1>Rozgaar Samachaar Capsule</h1>
                    <p>A platform to provide suitable career opportunities for students of RSVI.</p>
                    <button className={style.containerButtonPrev} id="Dprev-btn_11" onClick={prevCard}>
                        <span>&#129128;</span>
                        Previous
                    </button>
                </Col >
            </Row>
        </Container>
    );
}

export default DCards;