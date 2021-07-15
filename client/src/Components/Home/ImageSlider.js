import React, { Component } from 'react';
import SliderData from './SliderData';
import Modules from './ImageSlider.module.css';
import { Carousel } from "react-responsive-carousel";
import './Carousel.css'; 

class ImageSlider extends Component {
    render() {
        return (
            <div>
                <div className={`${Modules.rowNineCarouselWrapper} p-2 mt-2`}>
                  <Carousel
                    autoPlay
                    infiniteLoop
                    interval="8000"
                    transitionTime="300"
                    className={Modules.rowNineCarouselRoot}>
                    <div className={` ${Modules.rowNineCarouselDiv} `}>
                      <img src={SliderData.image1} alt="thumb1" />
                    </div>
                    <div className={` ${Modules.rowNineCarouselDiv} `}>
                      <img src={SliderData.image2} alt="thumb2" />
                    </div>
                    <div className={` ${Modules.rowNineCarouselDiv} `}>
                      <img src={SliderData.image3} alt="thumb3" />
                    </div>
                    <div className={` ${Modules.rowNineCarouselDiv} `}>
                      <img src={SliderData.image4} alt="thumb4" />
                    </div>
                    <div className={` ${Modules.rowNineCarouselDiv} `}>
                      <img src={SliderData.image5} alt="thumb5" />
                    </div>
                    <div className={` ${Modules.rowNineCarouselDiv} `}>
                      <img src={SliderData.image6} alt="thumb6" />
                    </div>
                    <div className={` ${Modules.rowNineCarouselDiv} `}>
                      <img src={SliderData.image7} alt="thumb7" />
                    </div>
                  </Carousel>
                </div>
            </div>
        )
    }
}

export default ImageSlider;