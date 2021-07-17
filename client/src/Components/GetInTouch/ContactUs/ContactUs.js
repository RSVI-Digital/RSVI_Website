import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container} from 'react-bootstrap';

import styles from './ContactUs.module.css';
import axios from 'axios';
class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

 

    onMsgChange(event) {
        this.setState({message: event.target.value})
    }

    submitEmail(e){
        e.preventDefault();
        axios({
          method: "POST", 
          url:"/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
              alert("Message Sent."); 
              this.resetForm()
          }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
          }
        })
}

resetForm(){
        this.setState({name: '', email: '',subject:'', message: ''})
}

    render() {
        return (
            <Container fluid className={styles.body}>
                <Row className={styles.holder}>
                    <Col lg={7} className={styles.form}>
                        <p className={styles.heading}>
                            Contact Us
                        </p>
                        <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">Contact Us</h2>
                                <p>Let us know what you think! In order to provide better service,
                                     please do not hesitate to give us your feedback. Thank you.</p><hr/>
                                <form id="contact-form" onSubmit={this.submitEmail.bind(this)} 
                                    method="POST">
                                <div className="form-group">
                                <div className="row">
                                <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12" style={{color: "red"}}>
                                    <input placeholder = "Name"  id="name" type="text" 
                                       className="form-control" required value={this.state.name} 
                                       onChange={this.onNameChange.bind(this)}/>
                                </div>
                                <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                                    <input placeholder = "Email"  id="email" type="email"
                                      className="form-control" aria-describedby="emailHelp"
                                      required value={this.state.email} onChange=
                                      {this.onEmailChange.bind(this)}/>
                                </div>
                                </div>
                                </div>
                                
                                <div className="form-group">
                                    <textarea placeholder = "Message"  id="message" 
                                       className="form-control" rows="1" 
                                       required value={this.state.message}
                                       onChange= {this.onMsgChange.bind(this)}/>
                                </div>
                                <button type="submit" className={styles.submit}>Submit</button>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
                    </Col>
                    <Col lg={5} className={styles.details}>
                        <p className={styles.content}>
                            Email us with any suggestion or queries.
                            We would be happy to answer all your questions
                            and set up a meeting with you.
                        </p>
                        <p className={styles.email}>
                            Email us at: hr@rsvi.org
                        </p>
                        <iframe 
                            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d889.9311080799333!2d80.95065634034962!3d26.84871574485951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6618eecac0f2ad60!2sRehabilitation%20Society%20of%20the%20Visually%20Impaired!5e0!3m2!1sen!2sin!4v1623867318407!5m2!1sen!2sin' 
                            className={styles.map}
                            loading='lazy' 
                        ></iframe>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ContactUs;
