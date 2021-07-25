import React, { Component } from "react";
import cx from "classnames";
import Styles from "./Joinus.module.css";
import globalStyles from "./Assets/Global-Styles/bootstrap.min.module.css";
import joinUsImg from "./Links";
import axios from "axios";
class Joinus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      department: "",
      message: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onDepartmentChange(event) {
    this.setState({ department: event.target.value });
  }

  onMsgChange(event) {
    this.setState({ message: event.target.value });
  }

  submitEmail(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/joinus",
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
    this.setState({ name: "", email: "", department: "", message: "" });
  }
  render() {
    return (
      <>
        <div className={cx(Styles.body, globalStyles["row"])}>
          <div
            className={cx(
              Styles.leftSec,
              globalStyles["col-lg-4"],
              globalStyles["col-md-4"],
              globalStyles["col-sm-12"],
              globalStyles["mx-auto"],
              globalStyles["pt-4"]
            )}
          >
            <div className={Styles.imgWrap}>
              <img
                alt="Education"
                src={joinUsImg}
                className={cx(Styles.picture, globalStyles["img-fluid"])}
                maxWidth="100%"
              />
            </div>
          </div>

          <div
            className={cx(
              Styles.rightSec,
              globalStyles["col-lg-8"],
              globalStyles["col-md-8"],

              globalStyles["col-sm-12"],
              globalStyles["mx-auto"],
              globalStyles["pt-5"],
              globalStyles["pl-3"]
            )}
          >
            <div className={Styles.wrapForm}>
              <h2 className={Styles.heading}>Want to join us?</h2>
              <p className={Styles.info}>
                Fill the form below and we'll get in touch
              </p>

              <form
                id="contact-form"
                onSubmit={this.submitEmail.bind(this)}
                method="POST"
              >
                <div className="form-group">
                  <div className="row">
                    <div className={Styles.ContactUsSpace}>
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
                    <div className={Styles.ContactUsSpace}>
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

                    <div className={Styles.ContactUsSpace}>
                      <div className="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                        <input
                          placeholder="Department"
                          id="department"
                          type="text"
                          className="form-control"
                          required
                          value={this.state.department}
                          onChange={this.onDepartmentChange.bind(this)}
                        />
                      </div>
                    </div>

                    <div className={Styles.ContactUsSpace}>
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
                <button type="submit" className={Styles.submit}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Joinus;
