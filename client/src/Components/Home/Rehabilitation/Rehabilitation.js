import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Container} from 'react-bootstrap';

import styles from './Rehabilitation.module.css';
import { rsvi_logo } from '../Links';

function Rehabilitation() {
	return(
		<Container fluid>
			<Row className={styles.content}>
				<img src = {rsvi_logo} className = {styles.logo} alt='rsvi logo'/>
				<p className={styles.heading}>
					Rehabilitation Society of the Visually Impaired
				</p>
				<p className={styles.text}>
					The Rehabilitation Society of the Visually Impaired (RSVI) is an NGO based 
					in Lucknow, started by Professor Rakesh Jain. It has been working for the 
					rehabilitation and upliftment of the visually impaired for more than 15 years now. RSVI got registered on 21st October 2005. 
				</p>
			</Row>
		</Container>
	);
}

export default Rehabilitation;