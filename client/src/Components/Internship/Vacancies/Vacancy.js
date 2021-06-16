import React from "react";
import FlipCard from "./FlipCard";
import Style from "./style.module.css";
import DepartmentInfo from "./DepartmentInfo";

function Vacancy() {

  function createCard(department) {
    return (<div className="col-md-4"><FlipCard dir={department.direction} img={department.imageURL} head={department.heading} info={department.information}/></div>)
  }
  return (<div>
    <div className={Style.ban}>
      <h1>Current Vacancies</h1>
      <hr className={Style.rule}/>
    </div>
    <div className="container">
      <div className="row">
        {DepartmentInfo.map(createCard)}; {/* <div className="col-md-4"><FlipCard img="http://www.starsgroup.es/images/graphdep.jpg" head="Graphics Department"/></div>
        <div className="col-md-4"><FlipCard img="https://www.hrmexam.com/wp-content/uploads/2020/04/How-Does-a-HR-Department-Affect-an-Organization.jpg" head="HR Department"/></div>
        <div className="col-md-4"><FlipCard img="https://cdn.lynda.com/course/647682/647682-637491181638185188-16x9.jpg" head="Voice Over"/></div>
        <div className="col-md-4"><FlipCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcr6vO9NTqNoQTYnlCkdPmPG0YJRkA3aL3CbHmQXnQHI2SB-Qe7vPBmPLWKNTOAsTQh-U&usqp=CAU" head="Marketing"/></div>
        <div className="col-md-4"><FlipCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gCZTgvj4ukFFF_9veUqk3357JGOLrpMiRke3L_zRyPaDvufDcdbsmP8Eisqcdjn8phk&usqp=CAU" head="Spoken English"/></div>
        <div className="col-md-4"><FlipCard img="https://www.outlookmarketingsrv.com/wp-content/uploads/2020/12/content-3679757_1280-1-1.png" head="Content"/></div> */
        }</div>
    </div>
  </div>);
}

export default Vacancy;
