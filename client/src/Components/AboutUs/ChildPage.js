import React, { Component } from 'react';
import image from './Image';
import style from './ChildPage.module.css';
import { Container, Row, Col } from "react-bootstrap";

class ChildPage extends Component {
    render() {
        return (
            <div>
            <Container>
              <Row>
               <Col className={style.row1}>
                 <h1> Collaborate with Us through: </h1>
               </Col>
               <Col>
                <Row className={style.row2}>
                   <Col className={style.graphic}>
                   <p> Small Graphic </p>
                  </Col>
                  <Col className={style.graphic}>
                  <p> Small Graphic </p>
                  </Col>
                  <Col className={style.graphic}>
                  <p> Small Graphic </p>
                  </Col>
                  <Col className={style.graphic}>
                  <p> Small Graphic </p>
                  </Col>
                </Row>
                <Row className={style.row2}>
                  <Col>
                     <h1 className={style.heading}> Title </h1>
                     <p className={style.content}>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique pellentesque dignissim,
                    </p>
                  </Col>
                  <Col>
                     <h1 className={style.heading}> Title </h1>
                     <p className={style.content}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique pellentesque dignissim,
                     </p>
                  </Col>
                  <Col>
                     <h1 className={style.heading}> Title </h1>
                     <p className={style.content}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique pellentesque dignissim,
                    </p>
                  </Col>
                  <Col>
                     <h1 className={style.heading}> Title </h1>
                     <p className={style.content}>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique pellentesque dignissim,
                     </p>
                  </Col>
                </Row>
               </Col>
              </Row>
            </Container>
            <div className={style.collabcompanies}>
              <Row>
                <Col>
                  <h1> Our Collaborations </h1>
                </Col>
                <Col className={style.companiescol2}>
                  <img src={image.Section8.Img2} alt="Collab" className={style.collabiamges}/>
                </Col>
                <Col>
                <img src={image.Section8.Img3} alt="Collab" className={style.collabiamges} />
                </Col>
                <Col>
                <img src={image.Section8.Img4} alt="Collab" className={style.collabiamges} />
                </Col>
                <Col>
                <img src={image.Section8.Img5} alt="Collab" className={style.collabiamges} />
                </Col>
              </Row>
            </div>

            </div>
        )
    }
}

export default ChildPage
