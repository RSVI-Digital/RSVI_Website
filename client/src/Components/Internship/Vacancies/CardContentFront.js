import React from "react";
import Style from "./style.module.css"

function CardContentFront(params) {
  return (<div className={Style.content}>
    <img src={params.image} alt="Departmental vector" className={Style.image}/>
    <h5 className={Style.heading}>{params.heading}</h5>
    <p className={Style.para}>Vacancies</p>
  </div>)
}

export default CardContentFront;
