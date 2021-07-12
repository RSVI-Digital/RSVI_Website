import React from 'react';
import Styles from "./Collaboration.module.css";
import cn from "classnames";
import globalS from "../../../Assets/Global-Styles/bootstrap.min.module.css"

function Collaboration() {
    return (
        <div className={cn(Styles.main , globalS["row"])}>
            <div className={cn(Styles.leftPart , globalS["col-lg-7"], globalS["col-md-7"], globalS["col-sm-12"])}>
                <div className ={cn(Styles.imageAndText, globalS["row"])}>
                    <div className= {cn(globalS["col-lg-2"])}>
                        <img className={cn(Styles.RSVI_image, globalS["mx-auto"])} src="https://drive.google.com/uc?id=1kafk9Ud_mGWBHxCkXoMd9R09OcMBIU00" alt="RSVI_Image" />
                    </div>
                    <div className={cn(Styles.RSVI_text, globalS["col-lg-10"])}>
                        <p className={cn(Styles.para1, globalS["mx-auto"])}>Collaborations at</p>
                        <h1 className={cn(Styles.hh)}>RSVI</h1>
                    </div>
                </div>
                <div className={cn(Styles.text)}>
                    <p className={cn(Styles.para2)}>RSVI has been successful in humungous collaborations till date for its visibility and reach. Majorly being  Rehabilitation Council Of India (RCI) New Delhi , NIVH for the distribution of Aids & Appliances, Agency of advocacy cell in Uttar Pradesh being run by All India Confederation of the Blind (AICB).Besides receiving support and technical expertise from a number of Organizations, RSVI joins hands with SAKSHAM New Delhi, NAB (Along with its various States and district branches), Arushi Bhopal, Score Foundation New Delhi and very recently collaborated with Uber India.</p>
                </div>
            </div>
            <div className={cn(Styles.imgs , globalS["col-lg-5"], globalS["col-md-5"], globalS["col-sm-12"])}>
                <img className={cn(Styles.image)} src="https://drive.google.com/uc?id=1P7BmPQBnBa8Dy5npp436PqjNJpBvCoLl" />
                
            </div>
        </div>
    )
}

export default Collaboration;