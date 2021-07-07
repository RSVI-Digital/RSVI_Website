import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Image from './Image';
import Style from './Section4.module.css';
class Section4 extends Component {
    render() {
        return (
            <React.Fragment >

     
<h1 className={Style.top}>Reach/Recognition</h1>
<div className={Style.containerfluid }>
<div className={Style.abc}>

<div className = {Style.blogpost}>
    <div className = {Style.blogpostimg}>
    <h1 className={Style.heading}> RSVI Madhya Pradesh</h1>
        <img className={`${Style.Section4img}`} src={Image.Section4.img1} alt=""/>  
    </div>
   {/*"https://drive.google.com/uc?id=1BSUuUwe5fX0Be2Q_HMP_tVPFQqnkqLdI" */}
    <div className = {Style.blogpostinfo}>
        
        
        <p className={Style.blogposttext}>
        RSVI has setup a branch in Unchehra to serve the blind in the
                state of Madhya Pradesh, The Branch will empower the target
                group by providing training, education, assistive devices and
                accessible technology. Our objective is to reach the
                ‘Unreached’. Unchehara, inspite of being a border town of Madhya
                Pradesh, it has yet to enjoy the pleasures of infrastructure and
                development. There is comparatively a higher number of persons
                with disability in the area. Persons with visual impairment are
                deprived of educational facilities. RSVI has decided to provide
                educational, social and economical rehabilitation opportunities
                to the target group.
        </p>
        {/* <a href ="#" class = "blogpostcta">read more</a> */}
        </div>
    </div>
</div>
</div>

 



    </React.Fragment>
        )
    }
}

export default Section4