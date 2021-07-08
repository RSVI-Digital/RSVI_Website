import React, { Component } from "react";
import Module from "./Section6.module.css";
import Section6Child from "./Section6Child";
import Image from "./Image";


class Section6 extends Component {
  constructor() {
    super();
    this.state = { display: false };
  }
  displayHandler = () => {
    console.log("clicked", this.state.display);
    this.setState((prevstate) => {
      return { display: !prevstate.display };
    });
  };
  render() {
    return (
      <>
        <div className={Module.reachGrid}>
          <div className={`${Module.upcomingProjectsWrapper}`}>
            <h1 className={`${Module.projectHead2} ${Module.header}`}>Upcoming Projects!</h1>
            <div className={`${Module.box} ${Module.upcomingProjects}`}>
              <div className={`${Module.box1} ${Module.upcoming1}`}>
                <h4 className={`${Module.p4} ${Module.p44}`}>Aaina</h4>
                <img
                  src={Image.Section7P.Img4}
                  alt="Aaina"
                  className={`${Module.colImg1} ${Module.c2img1}`}
                ></img>
              </div>
              <div className={`${Module.box1} ${Module.upcoming2}`}>
                <h4 className={`${Module.p4} ${Module.p45}`}>Barkat</h4>
                <img
                  src={Image.Section7P.Img5}
                  alt="Barkat"
                  className={`${Module.colImg1} ${Module.c2img2}`}
                ></img>
              </div>
              <div className={`${Module.box1} ${Module.upcoming3}`}>
                <h4 className={`${Module.p4} ${Module.p46}`}>Pariksha</h4>
                <img
                  src={Image.Section7P.Img9}
                  alt="Pariksha"
                  className={`${Module.colImg1} ${Module.c2img3}`}
                ></img>
              </div>
              <div className={`${Module.box1} ${Module.upcoming4}`}>
                <h4 className={`${Module.p4} ${Module.p47}`}>Siddhant</h4>
                <img
                  src={Image.Section7P.Img6}
                  alt="Siddhant"
                  className={`${Module.colImg1} ${Module.c2img4}`}
                ></img>
              </div>
              <div className={`${Module.box1} ${Module.upcoming5}`}>
                <h4 className={`${Module.p4} ${Module.p48}`}>Prabhav</h4>
                <img
                  src={Image.Section7P.Img7}
                  alt="Prabhav"
                  className={`${Module.colImg1} ${Module.c2img5}`}
                ></img>
              </div>
              <div className={`${Module.box1} ${Module.upcoming6}`}>
                <h4 className={`${Module.p4} ${Module.p49}`}>Swachalan</h4>
                <img
                  src={Image.Section7P.Img8}
                  alt="Swachalan"
                  className={`${Module.colImg1} ${Module.c2img6}`}
                ></img>
              </div>
              <div className={`${Module.box1} ${Module.upcoming7}`}>
                <h4 className={`${Module.p4} ${Module.p410}`}>TechSmart</h4>
                <img
                  src={Image.Section7P.Img10}
                  alt="TechSmart"
                  className={`${Module.colImg1} ${Module.c2img7}`}
                ></img>
              </div>
            </div>
          </div>
          <div className={`${Module.projectUdaanWrapper}`}>
          <div className={`${Module.projectHead1Wrapper}`}>
            <img
              className={`${Module.bird1}`}
              src={Image.Section6P.imghead2}
              alt="bird 1"
            />
            <h1 className={`${Module.projectHead1} ${Module.header}`}>Project Udaan</h1>
            <img
              className={`${Module.bird2}`}
              src={Image.Section6P.imghead1}
              alt="bird 2"
            />
          </div>
          {/* <h1 className={`${Module.projectHead1}`}>Project Udaan</h1>*/}
          <div className={`${Module.box} ${Module.projectUdaan}`}>
            <div className={`${Module.box1} ${Module.project1}`}>
              <h4 className={`${Module.p4} ${Module.p41}`}>Go Digital</h4>
              <img
                src={Image.Section6P.Img1}
                alt="GoDigital"
                className={`${Module.colImg} ${Module.c1img1}`}
              ></img>
            </div>
            <div className={`${Module.box1} ${Module.project2}`}>
              <h4 className={`${Module.p4} ${Module.p42}`}>Sahyog</h4>
              <img
                src={Image.Section6P.Img2}
                alt="Sahyog"
                className={`${Module.colImg} ${Module.c1img2}`}
              ></img>
            </div>
            <div className={`${Module.box1} ${Module.project3}`}>
              <h4 className={`${Module.p4} ${Module.p43}`}>Infotainment</h4>
              <img
                src={Image.Section6P.Img3}
                alt="Infotainment"
                className={`${Module.colImg} ${Module.c1img3}`}
              ></img>
              <h5 className={Module.p5} onClick={this.displayHandler}>
                <a href="#down">Read More</a>
              </h5>
              {/*  <Section6Child displayState={this.state.display} />*/}
            </div>
          </div>
        </div>
        </div>
        <a id={this.state.display && "down"}></a>
        <Section6Child displayState={this.state.display} />
      </>
    );
  }
}

export default Section6;
