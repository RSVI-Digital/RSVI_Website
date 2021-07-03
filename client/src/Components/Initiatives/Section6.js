import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modules from "./Section6.module.css";
import Image from './Image'
class Section6 extends Component {
  render() {
    return (
      <div className={`container`}>
        <div className={`row justify-content-center ${Modules.Project1Head}`}>
          <img
            className={`${Modules.bird1}`}
            src={Image.Section6P.imghead2}
            alt="bird 1"
          />
          <h1 className={``}>Project Udaan</h1>
          <img
            className={`${Modules.bird2}`}
            src={Image.Section6P.imghead1}
            alt="bird 2"
          />
        </div>
        <hr className={`${Modules.Project1Headhr}`}></hr>
        <div className={`row`}>
          <div className={`col  ${Modules.P1col} m-1`}>
            <div className={`${Modules.P1}`}>
              <h3>Go Digital</h3>
              <img src={Image.Section6P.Img1} alt="Go Digital" />
            </div>
          </div>
          <div className={`col ${Modules.P2col} m-1`}>
            <div className={`${Modules.P2}`}>
              <h3>Sahyog</h3>
              <img src={Image.Section6P.Img2} alt="Sahyog" />
            </div>
          </div>
          <div className={`col ${Modules.P3col} m-1`}>
            <div className={`${Modules.P3}`}>
              <h3>Infotainment</h3>
              <img src={Image.Section6P.Img3} alt="Project Infotainment" />
              <p>Read More</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section6;
