import React, { useRef } from "react";
import Style from "./Work.module.css";
import WorkData from "./WorkData";
//import { Link } from "react-router-dom";
import globalStyles from "../../../Assets/Global-Styles/bootstrap.min.module.css";
import cx from "classnames";
import { HashLink as Link } from "react-router-hash-link";

const Work = () => {
  return (
    <section
      className={cx(
        globalStyles.container,
        globalStyles["pt-3"],
        globalStyles["align-content-sm-center"],
        Style.WorkSection,
        globalStyles["mb-5"]
      )}
    >
      <div className={Style.WorkHead}>
        <h1 className={Style.HeadText}>What we do?</h1>
      </div>
      <br />
      {WorkData.map((val) => {
        return (
          <Link to={val.linkto} exact>
            <div
              className={Style.card}
              style={{
                backgroundImage: `url(${val.imgbg})`,
              }}
            >
              <div
                className={cx(
                  globalStyles["mt-auto"],
                  globalStyles["p-0"],
                  Style.work_card
                )}
              >
                <img
                  src={val.imgsrc}
                  alt="workdata"
                  className={cx(globalStyles["img-fluid"], Style.img_work)}
                  maxWidth="100%"
                />
              </div>
              <div
                className={cx(
                  Style.card_title,
                  globalStyles["text-center"],
                  globalStyles["justify-content-center"]
                )}
              >
                {val.title}
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};
export default Work;
