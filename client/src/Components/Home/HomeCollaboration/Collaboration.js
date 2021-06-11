import React from 'react';
import Styles from "./Collaboration.module.css";
import cn from "classnames";
import globalS from "../../../Assests/Global-Styles/bootstrap.min.module.css";

function Collaboration() {
    return (
        <div className={cn(Styles.main , globalS["row"])}>
            <div className={cn(Styles.leftPart , globalS["col-lg-7"], globalS["col-md-7"], globalS["col-sm-12"])}>
                <div className ={cn(Styles.imageAndText, globalS["row"])}>
                    <div className= {cn(globalS["col-lg-2"])}>
                        <img className={cn(Styles.RSVI_image, globalS["mx-auto"])} src="./images/rs.jpeg" alt="RSVI_Image" />
                    </div>
                    <div className={cn(Styles.RSVI_text, globalS["col-lg-10"])}>
                        <p className={cn(Styles.para1, globalS["mx-auto"])}>Collaborations at</p>
                        <h1>RSVI</h1>
                    </div>
                </div>
                <div className={cn(Styles.text)}>
                    <p className={cn(Styles.para2)}>A small description about collaborations Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique pellentesque dignissim. Nam eget molestie tortor. Ut at placerat ex. Suspendisse potenti. </p>
                </div>
            </div>
            <div className={cn(Styles.imgs , globalS["col-lg-5"], globalS["col-md-5"], globalS["col-sm-12"])}>
                <img className={cn(Styles.image)} src="./images/Collaborations.png" />
                
            </div>
        </div>
    )
}

export default Collaboration;
