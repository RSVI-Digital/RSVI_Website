import React, { Component } from 'react'
import cx from "classnames";
import globalStyles from "../../Assets/Global-Styles/bootstrap.min.module.css";
import styles from "./Section5.module.css";
import AwardsData from "./Section5Data";

class Section5 extends Component {
    render() {
        return (
            <div id={styles.Awards}>
                <div id={styles.heading} className={cx(globalStyles["text-center"])}>
                    <img
                    src="https://drive.google.com/thumbnail?id=1Abhhcqf4KtLETLSc-01-MfwaTwwV2mNo"
                    alt="left flashlight"
                    style={{ float: "left" }}
                    className={cx(globalStyles["img-fluid"], styles.flash)}
                    />
                    <img
                    src="https://drive.google.com/thumbnail?id=1AiR-HYGMm5PQ5UyusEwsuDBj2IZ-15Zj"
                    alt="left flashlight"
                    style={{ float: "right" }}
                    className={cx(globalStyles["img-fluid"], styles.flash)}
                    />
                    <div id={styles.title}>Awards And Recognitions</div>
                    <div className={cx(globalStyles.container, styles.lines)}>
                        <hr className={styles.hr1} id={styles.leftLine} />
                        <hr className={styles.hr1} id={styles.rightLine} />
                   </div>
                </div>
                <div className={cx(styles.content)}>
                    <p>
                    RSVI and its staffs have been honoured with various state, national
                    and International level awards and recognistions in a period of 16
                    years.
                    </p>
                </div>

                <div className={styles.AwardsImages}>
                    {AwardsData.map((val, i) => {
                    return (
                        <img
                        src={val.img}
                        alt="Awards"
                        id={styles.AwardsImg}
                        className={cx(globalStyles["img-fluid"])}
                        />
                    );
                    })}
                </div>
            </div>
        )
    }
}


export default Section5
