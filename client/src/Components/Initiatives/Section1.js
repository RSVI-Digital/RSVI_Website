import React, { useState } from "react";
import Style from "./Section1.module.css";
import globalStyles from "../../Assets/Global-Styles/bootstrap.min.module.css";
import cx from "classnames";
import ModalData from "./Section1ModalData";
import Modal from "./Section1Modal";

const Section1 = () => {
    const [show, setShow] = useState(false);
    const [ModalElem, setModal] = useState(ModalData);
  
    const ModalCall = (id) => {
      setShow(true);
      const currModal = ModalData.filter((currId) => {
        return currId.id === id;
      });
      setModal(currModal);
    };
  
    return (
      <section
        className={cx(
          //globalStyles.container,
          globalStyles["pt-3"],
          globalStyles["align-content-sm-center"],
          Style.Section,
          globalStyles["mb-4"]
        )}
      >
        <div className={Style.EduHead}>
          <h1 className={Style.HeadText}>Educational Content</h1>
          <hr className={Style.HeadLine} />
        </div>
        <div className={Style.tileBox}>
          {ModalData.map((val, i) => {
            return (
              <>
                <div
                  className={Style.tile}
                  style={{ backgroundImage: `url(${val.imgbg})` }}
                  key={i}
                  onClick={() => ModalCall(val.id)}
                >
                  {val.title}
                </div>
              </>
            );
          })}
          <Modal
            onClose={() => setShow(false)}
            show={show}
            ModalElem={ModalElem}
          />
        </div>
      </section>
    );
  };

  
export default Section1
