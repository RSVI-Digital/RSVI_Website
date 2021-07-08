import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import cn from "classnames";
import GlobalS from "../../Assets/Global-Styles/bootstrap.min.module.css";
import Styles from "./Section3.module.css";

class Section3 extends Component {
    render() {
        return (
            <div className={Styles.allover}>
                <h1 className={cn(Styles.h)}>
                    Additional Support
                    </h1>
                    <Tabs>
                    <TabList>
                        <Tab>Rail Concession</Tab>
                        <Tab>Eyes & Health Checkup</Tab>
                        <Tab>Old Age Support</Tab>
                        <Tab>Aids & Appliances center</Tab>
                        <Tab>Exposure After Training</Tab>
                    </TabList>
                
                {/* .............................1................................. */}
                <TabPanel>
                <div className ={cn(Styles.pink,GlobalS["row"])}>
                <div className = {cn(GlobalS["col-lg-6"])}>
                    <p className={cn(Styles.contenp)}>
                        RSVI issues Railway Concessions for Visually Impaired persons whose vision loss is 100 percent. Any person from anywhere in India may directly approach RSVI for the issuance of Rail Concession Certificate. RSVI also organises camps for issuing Railway Concession Certificates at Schools, NGO’s and at places where a substantial number of target group could assemble.
                    </p>
                </div>
                <div className = {cn(GlobalS["col-lg-6"])}>
                    <img className={cn(Styles.imagess)} src="https://drive.google.com/uc?id=1ChibArFJ7_yZ0ssw1n238rBDb0MZH17w" alt="demo" />
                </div>
                
                </div>
                </TabPanel>
                
                {/* .............................2................................. */}
                <TabPanel>
                <div className ={cn(Styles.green,GlobalS["row"])}>
                <div className = {cn(GlobalS["col-lg-6"])}>
                    <p className={cn(Styles.contenp)}>
                    RSVI organises various Eye and Health<br></br>check Ups for Visually Impaired with an<br></br>attempt for proper eye care and timely<br></br>treatment.
                    </p>   
                </div>
                <div className={cn(GlobalS["col-lg-6"])}>
                    <img className={cn(Styles.imagess)} src="https://drive.google.com/uc?id=1CqpJCMmXfXwxT6lRM_D3jNSve3_Xe3rn" alt="demo" />
                </div>
                </div>
                </TabPanel>
                
                {/* .............................3................................. */}
                <TabPanel>
                <div className ={cn(Styles.orange,GlobalS["row"])}>
                <div className = {cn(GlobalS["col-lg-6"])}>
                    <p className={cn(Styles.contenp)}>
                    RSVI extends selfless service to Old Age<br></br>and supports them with required aids<br></br>and appliances.
                    </p>
                </div>
                <div className = {cn(GlobalS["col-lg-6"])}>
                    <img className={cn(Styles.imagess)} src="https://drive.google.com/uc?id=1CdnQWlkg9AdkgtaRoNNvNt9DIahHk69w" alt="demo" />
                </div>
                </div>
                </TabPanel>

                {/* .............................4................................. */}
                <TabPanel>
                <div className ={cn(Styles.blue,GlobalS["row"])}>
                <div className = {cn(GlobalS["col-lg-6"])}>
                <p className={cn(Styles.contenp)}>
                RSVI is a famous Aids & Appliances center.<br></br>Its objective is to arrange assistive<br></br>devices for all kinds of requirements of<br></br>persons with special needs.
                </p>
                </div>
                <div className = {cn(GlobalS["col-lg-6"])}>
                    <img className={cn(Styles.imagess)} src="https://drive.google.com/uc?id=1ylO1-WNbTMHvPsaW3OlynzEI6ewqu3uB" alt="demo" />
                </div>
                </div>
                </TabPanel>

                {/* .............................5................................. */}
                <TabPanel>
                <div className ={cn(Styles.pink,GlobalS["row"])}>
                <div className = {cn(GlobalS["col-lg-6"])}>
                <p className={cn(Styles.contenp)}>
                RSVI provides Exposure after training to the Visually Impaired to give them a real life experience of the trainings imparted.
                </p>
                </div>
                <div className = {cn(GlobalS["col-lg-6"])}>
                    <img className={cn(Styles.imagess)} src="https://drive.google.com/uc?id=1RpiZqcAm0ahbcWaiseSjvb-4OJ1IRbCL" alt="demo" />
                </div>
                </div>
                </TabPanel>
                
            </Tabs>
            </div>
        )
    }
}

export default Section3
