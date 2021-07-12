import React, { Component } from 'react';

import styles from './FormSection.module.css';
import { Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class FormSection extends Component {
  render() {
    return (
      <>
      <div>
      <br/>
    <p className={styles.tt}>  Fill the form below to collaborate with us: </p>
      </div>
      <div className={styles.formsection}>
      <p className={styles.tt1}>
          ( * symbolises compulsory questions.)
      </p>
<div className={styles.tt3}>
      <Form.Group>

  <Form.Control className={styles.tt4} size="lg" type="text" placeholder="Name *: "/>

  <Form.Control className={styles.tt4} size="lg" type="text" placeholder="Email Id *: " />

<Form.Control className={styles.tt4} size="lg" type="text" placeholder="Organisation/Individual: " />
</Form.Group>
</div>


<Form.Group controlId="exampleForm.ControlTextarea1">

   <Form.Control className={styles.tt4} as="textarea" placeholder="How would you like to collaborate with us: *" size="lg" rows={5} columns={6} />
 </Form.Group>

      <br/>
      <br/>
      <Button variant="light" type="submit" className={styles.submit}>Submit</Button>
        </div>
      </>
    )
  }
}

export default FormSection;
