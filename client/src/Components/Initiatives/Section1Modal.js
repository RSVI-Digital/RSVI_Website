import React from "react";
import Styles from "./Section1Modal.module.css";

const Section1Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className={Styles.modal}>
      <div className={Styles.content}>
        <div className={Styles.header}></div>
        {props.ModalElem.map((val, i) => {
          return (
            <>
              <div
                className={Styles.body}
                key={i}
                style={{ backgroundImage: `url(${val.imgbg})` }}
              >
                <div className={Styles.img}>
                  <img
                    className={Styles.image}
                    src={val.sideImg}
                    alt={val.title}
                  />
                </div>
                <div className={Styles.title}>
                  <h1 className={Styles.heading}>{val.title}</h1>
                  <p className={Styles.para}>{val.content}</p>
                </div>
                <div className={Styles.footer}>
                  <button onClick={props.onClose} className={Styles.button}>
                    Close
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Section1Modal;
