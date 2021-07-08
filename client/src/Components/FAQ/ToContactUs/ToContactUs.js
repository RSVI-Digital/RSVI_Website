import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Container, Button, Col} from 'react-bootstrap';

import styles from './ToContactUs.module.css';

import React, { Component } from 'react';

class ToContactUs extends Component {
	render() {
		return (
			<Container fluid>
				<Row className={styles.content}>
					<Col>
						<p className={styles.heading}>
							Can't find your questions?
						</p>
						<p className={styles.heading}>
							Drop us your queries!
						</p>
						<Button className={styles.button} href='/get-in-touch'>
							Contact Us
						</Button>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default ToContactUs;