import React from "react";
import { Link } from "react-router-dom";
import styles from "./Success.module.css";

const Success = () => {
  return (
    <div className={styles.div}>
      <div className={styles.div_1}>
        <div className={styles.div_img} style={{ backgroundColor: "yellow" }}>
          <div className={styles.img_1}>
            <img
              className={styles.image}
              src="https://drive.google.com/uc?id=1g-OPJDKxNsy6lGNuFibQH-2Ek6z_nifb"
              alt=""
            />
          </div>
          <div className={styles.img_2}>
            <img
              className={styles.image}
              src="https://drive.google.com/uc?id=15xN8BHVmatQRltDZYwGHxzB3nKz5P7mV"
              alt=""
            />
          </div>
        </div>
        <div className={styles.text_1}>
          <div className={styles.text_border1}>
            <h1 className={styles.heading}>Media Coverage</h1>
            <p>
              RSVI has been part of many media coverage. It has its presence in
              renowned newspapers, news channel , social media and many media
              partners. It's media coverage is worth watching and Inspiring.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.div_2}>
        <div className={styles.text_2}>
          <div className={styles.text_border2}>
            <h1 className={styles.heading}>Success Stories</h1>
            <p>
              RSVI has given many beautiful gems and their success stories are
              awe - Inspiring. They have been an inspiration for many and proved
              that a dream doesn't need a vision, what it needs is determination
              and passion.
            </p>
            <Link exact to="/success-child" className={styles.buttons}>
              Know More
            </Link>
          </div>
        </div>
        <div className={styles.div_img}>
          <div className={styles.img_3}>
            <img
              className={styles.image}
              src="https://drive.google.com/uc?id=1PNwoKqRByaWt1l3ervX7L5HRBPBccqso"
              alt=""
            />
          </div>
          <div className={styles.img_4}>
            <img
              className={styles.image}
              src="https://drive.google.com/uc?id=1W_ww30HSBZaR3XXGih8gSgtAK9o-vawL"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
