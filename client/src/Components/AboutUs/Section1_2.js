import React, { Component } from 'react';
import Image from './Image';
import Modules from './Section1_2.module.css';

class Section1_2 extends Component {
    render() {
        return (
            <div>
                {/* **************** Row 1 **************** */}
                <div className={`row mt-3 ${Modules.section1} p-md-2`}>
                    <div className={`col-md-3 col-12 my-md-5 p-0 ${Modules.rowOneColOne} }`}>
                      <img src={Image.Section1} alt="group"></img>
                    </div>
                    <div className={`${Modules.rowOneColTwo}  col text-center py-md-5`}>
                      <div className="d-inline-block  text-left my-5">
                        <h1 className="d-inline-block">
                          Rehabilitation <br></br>Society of the<br></br>Visually
                          Impaired
                        </h1>
                        <br></br>
                        <p className="d-inline-block h6">
                          let the blind hold the torch...
                        </p>
                      </div>
                    </div>
                </div>
                {/* **************** Row 2 **************** */}
                <div className={`row ${Modules.section2} p-md-1 `}>
                  <div className={`${Modules.rowTwoDiv}  py-4 mt-5`}>
                    <h1 className="">Who Are We?</h1>
                  </div>
                  <div className={`row pt-2 m-md-1 text-justify ${Modules.rowTwoRowPara}`}>
                    <p>
                      RSVI started its journey in the year 2005 and has successfully
                      completed more than 15 years of its successful mission.
                    </p>
                    <p>
                      RSVI is a charitable organization professionally managed by a
                      team of committed social workers having experience of more than
                      20 years and technical expertise in the field of education,
                      training, research, employment, networking, advocacy and
                      consultancy services pertaining to the social, psychological and
                      economic rehabilitation of the visually impaired. It aims at
                      achieving perfection to the satisfaction of both the beneficiary
                      and the benefactor.
                    </p>
                    <p>
                      We at RSVI (Rehabilitation Society of The Visually Impaired)
                      have joined hands together to help you if for any reason or by
                      birth you are affected by one or the other problem of eyesight.
                      You may have lost your eyesight completely or in the process of
                      losing the same, you can always count on us for all kinds of
                      problems that you face due to the partial or total loss of
                      eyesight.
                    </p>
                  </div>
                </div>
            </div>
        )
    }
}

export default Section1_2
