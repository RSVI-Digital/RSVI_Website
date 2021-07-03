import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modules from "./Section7.module.css";
import Image from './Image'
class Section7 extends Component {
    render() {
      return (
          <div className={`container`}>
          <div
          className={`row justify-content-center mt-5 ${Modules.Project2Head}`}
        >
          <h1>Upcoming Projects!</h1>
        </div>
        <hr></hr>
        <div className={`row justify-content-center`}>
          <div className={`row `}>
            <div className={`col ${Modules.P4Col} m-1`}>
              <div className={`${Modules.P4}`}>
                <h3>Aaina</h3>
                <img src={Image.Section7P.Img4} alt="Aaina" />
              </div>
            </div>
            <div className={`col ${Modules.P5Col} m-1`}>
              <div className={`${Modules.P5}`}>
                <h3>Barkat</h3>
                <img src={Image.Section7P.Img5} alt="Barkat" />
              </div>
            </div>
            <div className={`col ${Modules.P6Col} m-1`}>
              <div className={`${Modules.P6}`}>
                <h3>Siddhant</h3>
                <img src={Image.Section7P.Img6} alt="Siddhant" />
              </div>
            </div>
            <div className={`col ${Modules.P7Col} m-1`}>
              <div className={`${Modules.P7}`}>
                <h3>Prabhav</h3>
                <img src={Image.Section7P.Img7} alt="Prabhav" />
              </div>
            </div>
            <div className={`col ${Modules.P8Col} m-1`}>
              <div className={`${Modules.P8}`}>
                <h3>TechSmart</h3>
                <img src={Image.Section7P.Img10} alt="TechSmart" />
              </div>
            </div>
          </div>
          <div className={`row`}>
            <div className={`col ${Modules.P9Col} m-1`}>
              <div className={`${Modules.P9}`}>
                <h3>Swachalan</h3>
                <img src={Image.Section7P.Img8} alt="Swachalan" />
              </div>
            </div>
            <div className={`col ${Modules.P10Col} m-1`}>
              <div className={`${Modules.P10}`}>
              <img className={`${Modules.P10img1}`} src={Image.Section7P.Img9} alt="Pariksha" />  
              <h3>Pariksha</h3>
                <img className={`${Modules.P10img2}`} src={Image.Section7P.Img9} alt="Pariksha" />
              </div>
            </div>
          </div>
        </div>
          </div>
      );
    }
}

export default Section7;