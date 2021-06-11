import React, { Component } from 'react';

import Rehabilitation from './Rehabilitation';
import Mission from './Mission';
import Journey from './Journey';
import ImageSlider from '../Home/HomeCarousel/ImageSlider';
import {SliderData} from '../Home/HomeCarousel/SliderData';
import Collaboration from './HomeCollaboration/Collaboration';

class Home extends Component {
    render() {
        return (
            <div>
                <ImageSlider slides = {SliderData}/>
                <Rehabilitation />
                <Mission />
                <Journey />
                <Collaboration/>
            </div>
        );
    }
}

export default Home;
