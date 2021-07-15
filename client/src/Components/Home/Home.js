import React, { Component } from 'react';
import Collaboration from './Collaboration/Collaboration';
import Rehabilitation from './Rehabilitation/Rehabilitation';
import Mission from './Mission/Mission';
import Journey from './Journey/Journey';
import Capsule from './Capsule/Capsule';
import Success from './SuccessMedia/Success';
import ImageSlider from './ImageSlider';
import Work from './WorksComp/Work';
import Activity from './Activity/Activity';

 class Home extends Component {
     render() {
         return (
             <div>
                 <ImageSlider />
                 <Rehabilitation />
                 <Work />
                 <Activity />
                 <Journey />
                 <Mission />
                 <Success/>
                 <Capsule />
                 <Collaboration/>
             </div>
         );
     }
 }

export default Home;

/*class Home extends Component {
    render() {
        return (
            <div>
                <Rehabilitation />
                <Mission />
                <Journey />
                <Capsule />
            </div>
        );
    }
}

export default Home;
*/