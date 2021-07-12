import React from 'react'
import { Link}from "react-router-dom";
import styles from './Activity.module.css';
// import cn from "classnames";
// import globalS from "../Assets/Global-Styles/bootstrap.min.module.css";

const Activity = () => {
  return (
    
    <div className={styles.div}  >
      <div className={styles.div1}>
        <h1 className={styles.heading}>Activities</h1>
          <p className={styles.text}>
          There are lots of different activities for Visually Impaired of all ages where there is a host of options out there to help,  educate and keep them engaged.
          <br></br>Appropriate activities will lead to the all-round development of Visually Impaired.
          </p>
          <Link exact  to="/ActivityChild" className={styles.buttons}>Know More</Link>
      </div>
      <div className={styles.div2}><img className={styles.image} src="https://drive.google.com/uc?id=1F3niGmIUSHyJ6vAdvXsiLNM5R0dy1flk" alt="" /></div>
    </div>
    
    
  )
}

export default Activity
