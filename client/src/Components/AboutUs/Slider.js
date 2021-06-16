import React, { Component } from 'react';
import Image from './AboutUsImages/Image';
import Modules from './Slider.module.css';
import { Carousel } from "react-responsive-carousel";
import './Carousel.css'; 

class Slider extends Component {
    render() {
        return (
            <div>
                <div className={`${Modules.rowNineCarouselWrapper} p-2 mt-2`}>
                  <Carousel
                    autoPlay
                    infiniteLoop
                    interval="15000"
                    transitionTime="600"
                    className={Modules.rowNineCarouselRoot}>
                    <div className={` ${Modules.rowNineCarouselDiv} `}>
                      <img src={Image.Section9.Img1} alt="thumb1" />
                    </div>
                    <div className={` ${Modules.rowNineCarouselDiv} `}>
                      <img src={Image.Section9.Img2} alt="thumb2" />
                    </div>
                    <div className={` ${Modules.rowNineCarouselDiv} `}>
                      <img src={Image.Section9.Img3} alt="thumb3" />
                    </div>
                    <div className={` ${Modules.rowNineCarouselDiv} `}>
                      <img src={Image.Section9.Img4} alt="thumb4" />
                    </div>
                    <div className={` ${Modules.rowNineCarouselDiv} `}>
                      <img src={Image.Section9.Img5} alt="thumb5" />
                    </div>
                  </Carousel>
                </div>
            </div>
        )
    }
}

export default Slider
