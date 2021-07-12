import React from 'react'
import { Link}from "react-router-dom";
import styles from './Success.module.css'

const Success = () => {
  return (
    <div className={styles.div}>
      <div className={styles.div_1}>
        <div className={styles.div_img} style={{backgroundColor:'yellow'}}>
          <div className={styles.img_1}><img className={styles.image} src="https://drive.google.com/uc?id=1__ItwdAhxosZwCoKUOc45ktpyLWeRWNb" alt="" /></div>
          <div className={styles.img_2}><img className={styles.image} src="https://drive.google.com/uc?id=1MQ4gBOwKO1Bnp0VIPhBIt-d9DbU0Gr3N" alt=""  /></div>
        </div>
        <div className={styles.text_1} >
          <div className={styles.text_border1} >
            <h1 className={styles.heading}>Media Coverage</h1>
            <p>RSVI has been part of many media coverage. It has its presence in renowned newspapers, news channel , social media and many media partners. It's media coverage is worth watching and Inspiring.</p>
          </div>
          
        </div>
      </div>
      <div className={styles.div_2}>
        <div className={styles.text_2}>
          <div className={styles.text_border2}>
            <h1 className={styles.heading}>Success Stories</h1>
            <p>RSVI has given many beautiful gems and their success stories are awe - Inspiring. They have been an inspiration for many and proved that a dream doesn't need a vision, what it needs is determination and passion.</p>
            <Link exact  to="/success-child" className={styles.buttons}>Know More</Link>
          </div>
          
        </div>
        <div className={styles.div_img}>
          <div className={styles.img_3}><img className={styles.image} src="https://drive.google.com/uc?id=1cVqlfvV4-b3sFjoQ4_XoUuo0To9v-ZQ8" alt=""  /></div>
          <div className={styles.img_4}><img className={styles.image} src="https://drive.google.com/uc?id=1wwxLXH5EI7c2R1P1kChOIzBgwkOzxZlK" alt=""  /></div>
        </div>
      </div>
      
    </div>
  )
}

export default Success
