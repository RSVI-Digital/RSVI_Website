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
            src={Image.Projects.imghead2}
            alt="bird 1"
          />
          <h1 className={``}>Project Udaan</h1>
          <img
            className={`${Modules.bird2}`}
            src={Image.Projects.imghead1}
            alt="bird 2"
          />
        </div>
        <hr></hr>
        <div className={`row`}>
          <div className={`col  ${Modules.P1col} m-1`}>
            <div className={`${Modules.P1}`}>
              <h3>Go Digital</h3>
              <img src={Image.Projects.Img1} alt="Go Digital" />
            </div>
          </div>
          <div className={`col ${Modules.P2col} m-1`}>
            <div className={`${Modules.P2}`}>
              <h3>Sahyog</h3>
              <img src={Image.Projects.Img2} alt="Sahyog" />
            </div>
          </div>
          <div className={`col ${Modules.P3col} m-1`}>
            <div className={`${Modules.P3}`}>
              <h3>Project Infotainment</h3>
              <img src={Image.Projects.Img3} alt="Project Infotainment" />
              <p>Read More</p>
            </div>
          </div>
        </div>
        <div
          className={`row justify-content-center mt-5 ${Modules.ProjectHead}`}
        >
          <h1>Upcoming Projects!</h1>
        </div>
        <hr></hr>
        <div className={`row justify-content-center`}>
          <div className={`row `}>
            <div className={`col ${Modules.P4Col} m-1`}>
              <div className={`${Modules.P4}`}>
                <h3>Aaina</h3>
                <img src={Image.Projects.Img4} alt="Aaina" />
              </div>
            </div>
            <div className={`col ${Modules.P5Col} m-1`}>
              <div className={`${Modules.P5}`}>
                <h3>Barkat</h3>
                <img src={Image.Projects.Img5} alt="Barkat" />
              </div>
            </div>
            <div className={`col ${Modules.P6Col} m-1`}>
              <div className={`${Modules.P6}`}>
                <h3>Siddhant</h3>
                <img src={Image.Projects.Img6} alt="Siddhant" />
              </div>
            </div>
            <div className={`col ${Modules.P7Col} m-1`}>
              <div className={`${Modules.P7}`}>
                <h3>Prabhav</h3>
                <img src={Image.Projects.Img7} alt="Prabhav" />
              </div>
            </div>
            <div className={`col ${Modules.P8Col} m-1`}>
              <div className={`${Modules.P8}`}>
                <h3>Swachalan</h3>
                <img src={Image.Projects.Img10} alt="Swachalan" />
              </div>
            </div>
          </div>
          <div className={`row`}>
            <div className={`col ${Modules.P9Col} m-1`}>
              <div className={`${Modules.P9}`}>
                <h3>Pariksha</h3>
                <img src={Image.Projects.Img8} alt="Pariksha" />
              </div>
            </div>
            <div className={`col ${Modules.P10Col} m-1`}>
              <div className={`${Modules.P10}`}>
                <h3>TechSmart</h3>
                <img src={Image.Projects.Img9} alt="Tech smart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section6;
