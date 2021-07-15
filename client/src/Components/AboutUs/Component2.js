import React, { Component } from 'react';
import {Row, Container, Col} from 'react-bootstrap';
import styles from './Component2.module.css';

class Component2 extends Component {
  render() {
    return (
      <Container fluid className={styles.body}>
        <p className={styles.header}>
          Fill the form to collaborate with us:
        </p>
        <Row className={styles.holder}>
          <p className={styles.header}>
            ( * Compulsory questions.)
          </p>
          <form>
              <input className={styles.input} placeholder='Name *:' required/>
              <input className={styles.input} placeholder='Email Id *:' required/>
              <input className={styles.input} placeholder='Organisation/ Individual:'/>
              <textarea className={styles.textbox} placeholder='How would you like to collaborate with us: *' required/>
              <button type='submit' className={styles.submit}>
                Submit
              </button>
          </form>
        </Row>
      </Container>
    );
  }
}

export default Component2;