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
                   <Col>
                   <img src={image.Section8.Img5} alt="Collab" className={style.collabiamges1}/>
                  </Col>
                  <Col>
                  <img src={image.Section8.Img3} alt="Collab" className={style.collabiamges}/>
                  </Col>
                  <Col>
                  <img src={image.Section8.Img2} alt="Collab" className={style.collabiamges}/>
                  </Col>
                  <Col>
                  <img src={image.Section8.Img4} alt="Collab" className={style.collabiamges}/>
                  </Col>
                </Row>
                <Row className={style.row2}>
                  <Col>
                     <h1 className={style.heading}> Justvocates </h1>
                     <p className={style.content}>
                      Together building a common platform for uncommon people, and undoubtedly to help the blind.                    </p>
                  </Col>
                  <Col>
                     <h1 className={style.heading}> Breakthrough & L'Orèal   </h1>
                     <p className={style.content}>
                      A collaboration  where we discussed about how we can identify any street harassment and intervene safely to help others.                     </p>
                  </Col>
                  <Col>
                     <h1 className={style.heading}> UBER India </h1>
                     <p className={style.content}>
                      RSVI collaborated with Uber India to implement a project in which Uber offered free taxi rides to the blind and staff of NGOs serving the blind in 8 cities across India.                    </p>
                  </Col>
                  <Col>
                     <h1 className={style.heading}> Enactus SBSEC </h1>
                     <p className={style.content}>
                       A collaboration to educate and empower under priviledeged and people with disabilities. It made VIs more updated about new interview techniques.                     </p>
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
