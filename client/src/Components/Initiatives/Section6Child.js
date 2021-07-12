import React,{useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './Section6Child.module.css';
import image from './Image';

const Section6Child = (props) => {

    const nextCard = (e) => {
        if (e.target.id === 'next-btn_1') {
            document.getElementById('containerCard6M1').style.display = "none";
            document.getElementById('containerCard6M2').style.display = "block";
        }
        if (e.target.id === 'next-btn_2') {
            document.getElementById('containerCard6M2').style.display = "none";
            document.getElementById('containerCard6M3').style.display = "block";
        }
        if (e.target.id == 'next-btn_3') {
            document.getElementById('containerCard6M3').style.display = "none";
            document.getElementById('containerCard6M4').style.display = "block";
        }
        if (e.target.id == 'next-btn_4') {
            document.getElementById('containerCard6M4').style.display = "none";
            document.getElementById('containerCard6M5').style.display = "block";
        }
        if (e.target.id == 'next-btn_5') {
            document.getElementById('containerCard6M5').style.display = "none";
            document.getElementById('containerCard6M6').style.display = "block";
        }
        if (e.target.id == 'next-btn_6') {
            document.getElementById('containerCard6M6').style.display = "none";
            document.getElementById('containerCard6M7').style.display = "block";
        }
        if (e.target.id == 'next-btn_7') {
            document.getElementById('containerCard6M7').style.display = "none";
            document.getElementById('containerCard6M8').style.display = "block";
        }
        if (e.target.id == 'next-btn_8') {
            document.getElementById('containerCard6M8').style.display = "none";
            document.getElementById('containerCard6M9').style.display = "block";
        }
        if (e.target.id == 'next-btn_9') {
            document.getElementById('containerCard6M9').style.display = "none";
            document.getElementById('containerCard6M10').style.display = "block";
        }
        if (e.target.id == 'next-btn_10') {
            document.getElementById('containerCard6M10').style.display = "none";
            document.getElementById('containerCard6M11').style.display = "block";
        }
        if (e.target.id == 'next-btn_11') {
            document.getElementById('containerCard6M11').style.display = "none";
            document.getElementById('containerCard6M1').style.display = "block";
        }

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

    const previousCard = (e) => {
        if (e.target.id == 'prev-btn_2') {
            document.getElementById('containerCard6M2').style.display = "none";
            document.getElementById('containerCard6M1').style.display = "block";
        }
        if (e.target.id == 'prev-btn_3') {
            document.getElementById('containerCard6M3').style.display = "none";
            document.getElementById('containerCard6M2').style.display = "block";
        }
        if (e.target.id == 'prev-btn_4') {
            document.getElementById('containerCard6M4').style.display = "none";
            document.getElementById('containerCard6M3').style.display = "block";
        }
        if (e.target.id == 'prev-btn_5') {
            document.getElementById('containerCard6M5').style.display = "none";
            document.getElementById('containerCard6M4').style.display = "block";
        }
        if (e.target.id == 'prev-btn_6') {
            document.getElementById('containerCard6M6').style.display = "none";
            document.getElementById('containerCard6M5').style.display = "block";
        }
        if (e.target.id == 'prev-btn_7') {
            document.getElementById('containerCard6M7').style.display = "none";
            document.getElementById('containerCard6M6').style.display = "block";
        }
        if (e.target.id == 'prev-btn_8') {
            document.getElementById('containerCard6M8').style.display = "none";
            document.getElementById('containerCard6M7').style.display = "block";
        }
        if (e.target.id == 'prev-btn_9') {
            document.getElementById('containerCard6M9').style.display = "none";
            document.getElementById('containerCard6M8').style.display = "block";
        }
        if (e.target.id == 'prev-btn_10') {
            document.getElementById('containerCard6M10').style.display = "none";
            document.getElementById('containerCard6M9').style.display = "block";
        }

        if (e.target.id == 'prev-btn_11') {
            document.getElementById('containerCard6M11').style.display = "none";
            document.getElementById('containerCard6M10').style.display = "block";
        }

        // For Desktop View

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
    useEffect(()=>{
        if(props.displayState){
            document.getElementById("mainDCardContainerDiv").style.display="block";
        }
        else document.getElementById("mainDCardContainerDiv").style.display="none";
       })
    return (
        <div id="mainDCardContainerDiv" className={`${style.mainDCardContainer}`}>
        {props.displayState && (<>
            <Container className={style.mainContainer}>
                <section className={style.mobilecontainer1} id="containerCard6M1">
                    <Row className={style.mobilecontainer1Row}>
                        <Col className={style.mobileimage}>
                            <img src={image.Section6b.Img1m} alt="dummy" />
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

                <section className={style.mobilecontainer2} id="containerCard6M2">
                    <Row className={style.mobilecontainer2Row}>
                        <Col className={style.mobileimage}>
                            <img src={image.Section6b.Img2m} alt="dummy" />
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

                <section className={style.mobilecontainer3} id="containerCard6M3">
                    <Row className={style.mobilecontainer3Row}>
                        <Col className={style.mobileimage}>
                            <img src={image.Section6b.Img3m} alt="dummy" />
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
                <section className={style.mobilecontainer4} id="containerCard6M4">
                    <Row className={style.mobilecontainer4Row}>
                        <Col className={style.mobileimage}>
                            <img src={image.Section6b.Img4m} alt="dummy" />
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
                <section className={style.mobilecontainer5} id="containerCard6M5">
                    <Row className={style.mobilecontainer5Row}>  
                        <Col className={style.mobileimage}>
                            <img src={image.Section6b.Img5m} alt="dummy" />
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
                <section className={style.mobilecontainer6} id="containerCard6M6">
                    <Row className={style.mobilecontainer6Row}>
                        <Col className={style.mobileimage}>
                            <img src={image.Section6b.Img6m} alt="dummy" />
                        </Col>
                        <Col className={style.mobileheading}>
                            <h1>RSVI Got Talent</h1>
                        </Col>
                        <Col className={style.mobilecontent}>
                            <p>
                            A platform to unleash hidden talent of the students of RSVI.
                            </p>
                        </Col>
                        <Row className={style.buttons}>
                            <input type="button" className={style.previous} value="Previous" id="prev-btn_6" onClick={previousCard} />
                            <input type="button" className={style.next} value="Next" id="next-btn_6" onClick={nextCard} />
                        </Row>
                    </Row>
                </section>
                <section className={style.mobilecontainer7} id="containerCard6M7">
                    <Row className={style.mobilecontainer7Row}>
                        <Col className={style.mobileimage}>
                            <img src={image.Section6b.Img7m} alt="dummy" />
                        </Col>
                        <Col className={style.mobileheading}>
                            <h1>Movie Review Sessions (Audio) by RSVI</h1>
                        </Col>
                        <Col className={style.mobilecontent}>
                            <p>
                                Sharing a detailed Movie Review Session to the Visually Impaired in form of an accessible audio capsule.
                            </p>
                        </Col>
                        <Row className={style.buttons}>
                            <input type="button" className={style.previous} value="Previous" id="prev-btn_7" onClick={previousCard} />
                            <input type="button" className={style.next} value="Next" id="next-btn_7" onClick={nextCard} />
                        </Row>
                    </Row>
                </section>
                <section className={style.mobilecontainer8} id="containerCard6M8">
                    <Row className={style.mobilecontainer8Row}>
                        <Col className={style.mobileimage}>
                            <img src={image.Section6b.Img8m} alt="dummy" />
                        </Col>
                        <Col className={style.mobileheading}>
                            <h1>Web Series (Audio) by RSVI</h1>
                        </Col>
                        <Col className={style.mobilecontent}>
                            <p>
                                An initiative to share audio capsules of most preferred web series to its Visually Impaired students for their leisure and entertainment.
                            </p>
                        </Col>
                        <Row className={style.buttons}>
                            <input type="button" className={style.previous} value="Previous" id="prev-btn_8" onClick={previousCard} />
                            <input type="button" className={style.next} value="Next" id="next-btn_8" onClick={nextCard} />
                        </Row>
                    </Row>
                </section>
                <section className={style.mobilecontainer9} id="containerCard6M9">
                    <Row className={style.mobilecontainer9Row}>
                        <Col className={style.mobileimage}>
                            <img src={image.Section6b.Img9m} alt="dummy" />
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
                            <input type="button" className={style.previous} value="Previous" id="prev-btn_9" onClick={previousCard} />
                            <input type="button" className={style.next} value="Next" id="next-btn_9" onClick={nextCard} />
                        </Row>
                    </Row>
                </section>
                <section className={style.mobilecontainer10} id="containerCard6M10">
                    <Row className={style.mobilecontainer10Row}>
                        <Col className={style.mobileimage}>
                            <img src={image.Section6b.Img10m} alt="dummy" />
                        </Col>
                        <Col className={style.mobileheading}>
                            <h1>Aaina</h1>
                        </Col>
                        <Col className={style.mobilecontent}>
                            <p>
                            Grooming sessions for the Visually Impaired are organized with emphasis on <br />
                            " Beauty doesn't need a vision" .<br />
                            Everyone is beautiful and worth appreciation.
                            </p>
                        </Col>
                        <Row className={style.buttons}>
                            <input type="button" className={style.previous} value="Previous" id="prev-btn_10" onClick={previousCard} />
                            <input type="button" className={style.next} value="Next" id="next-btn_10" onClick={nextCard} />
                        </Row>
                    </Row>
                </section>
                <section className={style.mobilecontainer11} id="containerCard6M11">
                    <Row className={style.mobilecontainer11Row}>
                        <Col className={style.mobileimage}>
                            <img src={image.Section6b.Img11m} alt="dummy" />
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
                            <input type="button" className={style.previous} value="Previous" id="prev-btn_11" onClick={previousCard} />
                            <input type="button" className={style.next} value="Next" id="next-btn_11" onClick={nextCard} />
                        </Row>
                    </Row>
                </section>
            </Container>

                             {/* Desktop View */}

            <Container className={style.mainDCardContainer}>
                <Row className={style.DCardContainer1} id="DCardContainer1">
                    <Col className={style.imageContainer}>
                        <img src={image.Section6b.Img1d} alt="" />
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
                        <img src={image.Section6b.Img2d} alt="" />
                    </Col>
                    <Col className={style.detailsContainer}>
                        <h1>Tech-Guru Sessions</h1>
                        <p>A series of update on latest technology, computer usage, updating with latest Mobile Applications and other digital and social platforms.</p>
                        <button className={style.containerButtonPrev} id="Dprev-btn_2" onClick={previousCard}>
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
                        <img src={image.Section6b.Img3d} alt="" />
                    </Col>
                    <Col className={style.detailsContainer}>
                        <h1>Interview Preparation Strategies</h1>
                        <p>An interview to learn about all the tips to crack the interview.</p>
                        <button className={style.containerButtonPrev} id="Dprev-btn_3" onClick={previousCard}>
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
                        <img src={image.Section6b.Img4d} alt="" />
                    </Col>
                    <Col className={style.detailsContainer}>
                        <h1>Mentor-Mentee Programme</h1>
                        <p>To meet the coaching requirements of students through online classes.</p>
                        <button className={style.containerButtonPrev} id="Dprev-btn_4" onClick={previousCard}>
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
                        <img src={image.Section6b.Img5d} alt="" />
                    </Col>
                    <Col className={style.detailsContainer}>
                        <h1>Chai Pe Charcha</h1>
                        <p>A series of talk sessions to know the views of students on every latest and general aspects.</p>
                        <button className={style.containerButtonPrev} id="Dprev-btn_5" onClick={previousCard}>
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
                        <img src={image.Section6b.Img6d} alt="" />
                    </Col>
                    <Col className={style.detailsContainer}>
                        <h1>RSVI Got Talent</h1>
                        <p>A platform to unleash hidden talent of the students of RSVI.</p>
                        <button className={style.containerButtonPrev} id="Dprev-btn_6" onClick={previousCard}>
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
                        <img src={image.Section6b.Img7d} alt="" />
                    </Col>
                    <Col className={style.detailsContainer}>
                        <h1>Movie Review Sessions (Audio) by RSVI</h1>
                        <p>Sharing a detailed Movie Review Session to the Visually Impaired in form of an accessible audio capsule.</p>
                        <button className={style.containerButtonPrev} id="Dprev-btn_7" onClick={previousCard}>
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
                        <img src={image.Section6b.Img8d} alt="" />
                    </Col>
                    <Col className={style.detailsContainer}>
                        <h1>Web Series (Audio) by RSVI</h1>
                        <p>An initiative to share audio capsules of most preferred web series to its Visually Impaired students for their leisure and entertainment.</p>
                        <button className={style.containerButtonPrev} id="Dprev-btn_8" onClick={previousCard}>
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
                        <img src={image.Section6b.Img9d} alt="" />
                    </Col>
                    <Col className={style.detailsContainer}>
                        <h1>Utsav</h1>
                        <p>Celebrating every occasion in form of fun and Learn.</p>
                        <button className={style.containerButtonPrev} id="Dprev-btn_9" onClick={previousCard}>
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
                        <img src={image.Section6b.Img10d} alt="" />
                    </Col>
                    <Col className={style.detailsContainer}>
                        <h1>Aaina</h1>
                        <p>Grooming sessions for the Visually Impaired are organized with emphasis on <br />
                            " Beauty doesn't need a vision" .<br />
                            Everyone is beautiful and worth appreciation.</p>
                        <button className={style.containerButtonPrev} id="Dprev-btn_10" onClick={previousCard}>
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
                        <img src={image.Section6b.Img11d} alt="" />
                    </Col>
                    <Col className={style.detailsContainer}>
                        <h1>Rozgaar Samachaar Capsule</h1>
                        <p>A platform to provide suitable career opportunities for students of RSVI.</p>
                        <button className={style.containerButtonPrev} id="Dprev-btn_11" onClick={previousCard}>
                            <span>&#129128;</span>
                            Previous
                        </button>
                    </Col >
                </Row>
            </Container>
        </>)}
        </div>
    );
}

export default Section6Child;
