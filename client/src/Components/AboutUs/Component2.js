import React, { Component } from 'react';
import {Row, Container, Col} from 'react-bootstrap';
import styles from './Component2.module.css';
import axios from 'axios';
class Component2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      type: "",
      message: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onTypeChange(event) {
    this.setState({ type: event.target.value });
  }

  onMsgChange(event) {
    this.setState({ message: event.target.value });
  }

  submitEmail(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/collabwithus",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Your Message has been successfully delivered.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", type: "", message: "" });
  }
  render() {
    return (
      <Container fluid className={styles.body}>
        <p className={styles.header}>
          Fill the form to collaborate with us:
        </p>
        <Row className={styles.holder}>
         
        <form
                id="contact-form"
                onSubmit={this.submitEmail.bind(this)}
                method="POST"
              >
                <div className="form-group">
                  <div className="row">
                    <div className={styles.ContactUsSpace}>
                      <div
                        className="col-md-12 col-lg-12 col-xs-12 col-sm-12"
                        style={{ color: "red" }}
                      >
                        <input
                          placeholder="Name"
                          id="name"
                          type="text"
                          className="form-control"
                          required
                          value={this.state.name}
                          onChange={this.onNameChange.bind(this)}
                        />
                      </div>
                    </div>
                    <div className={styles.ContactUsSpace}>
                      <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                        <input
                          placeholder="Email"
                          id="email"
                          type="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                          required
                          value={this.state.email}
                          onChange={this.onEmailChange.bind(this)}
                        />
                      </div>
                    </div>

                    <div className={styles.ContactUsSpace}>
                      <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                        <input
                          placeholder="Individual/Organization"
                          id="type"
                          type="text"
                          className="form-control"
                          required
                          value={this.state.email}
                          onChange={this.onTypeChange.bind(this)}
                        />
                      </div>
                    </div>

                    <div className={styles.ContactUsSpace}>
                      <div
                        className="col-md-12 col-lg-12 col-xs-12 col-sm-12"
                        style={{ color: "red" }}
                      >
                        <textarea
                          placeholder="Message"
                          id="message"
                          type="text"
                          style={{ height: "100px" }}
                          className="form-control"
                          required
                          value={this.state.message}
                          onChange={this.onMsgChange.bind(this)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" className={styles.submit}>
                  Submit
                </button>
              </form>
        </Row>
      </Container>
    );
  }
}

export default Component2;