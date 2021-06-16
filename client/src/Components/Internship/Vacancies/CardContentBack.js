import React from "react";
import Style from "./style.module.css";

function CardContentBack(params) {
  return <div className={Style.theBack}>
    <p className={Style.backPara}>{params.about}</p>
  </div>
}

export default CardContentBack;
