import React, { Component } from 'react';
import Module from './Section6A.module.css';
import Image from './Image';
class Section6A extends Component {
    render() {
        return (
            <div className={Module.reachGrid}>
               <div className={`${Module.box} ${Module.projectUdaan}`}>
                    <div className={`${Module.box1} ${Module.project1}`}>
                        <h4 className={Module.p4}>Go Digital</h4>
                        <img src={Image.Section6P.Img1} alt='GoDigital' className={`${Module.colImg} ${Module.c1img1}`}></img>
                    </div>
                    <div className={`${Module.box1} ${Module.project2}`}>
                        <h4 className={Module.p4}>Sahyog</h4>
                        <img src={Image.Section6P.Img2} alt='Sahyog' className={`${Module.colImg} ${Module.c1img2}`}></img>
                    </div>
                    <div className={`${Module.box1} ${Module.project3}`}>
                        <h4 className={Module.p4}>Infotainment</h4>
                        <img src={Image.Section6P.Img3} alt='Infotainment' className={`${Module.colImg} ${Module.c1img3}`}></img>
                        <h5 className={Module.p5}>Read More</h5>
                    </div>
               </div> 
               <div className={`${Module.box} ${Module.upcomingProjects}`}>
                    <div className={`${Module.box1} ${Module.upcoming1}`}>
                        <h4 className={Module.p4}>Aaina</h4>
                        <img src={Image.Section7P.Img4} alt='Aaina' className={`${Module.colImg1} ${Module.c2img1}`}></img>
                    </div>
                    <div className={`${Module.box1} ${Module.upcoming2}`}>
                        <h4 className={Module.p4}>Barkat</h4>
                        <img src={Image.Section7P.Img5} alt='Barkat' className={`${Module.colImg1} ${Module.c2img2}`}></img>
                    </div>
                    <div className={`${Module.box1} ${Module.upcoming3}`}>
                        <h4 className={Module.p4}>Pariksha</h4>
                        <img src={Image.Section7P.Img9} alt='Pariksha' className={`${Module.colImg1} ${Module.c2img3}`}></img>
                    </div>
                    <div className={`${Module.box1} ${Module.upcoming4}`}>
                        <h4 className={Module.p4}>Siddhant</h4>
                        <img src={Image.Section7P.Img6} alt='Siddhant' className={`${Module.colImg1} ${Module.c2img4}`}></img>
                    </div>
                    <div className={`${Module.box1} ${Module.upcoming5}`}>
                        <h4 className={Module.p4}>Prabhav</h4>
                        <img src={Image.Section7P.Img7} alt='Prabhav' className={`${Module.colImg1} ${Module.c2img5}`}></img>
                    </div>
                    <div className={`${Module.box1} ${Module.upcoming6}`}>
                        <h4 className={Module.p4}>Swachalan</h4>
                        <img src={Image.Section7P.Img8} alt='Swachalan' className={`${Module.colImg1} ${Module.c2img6}`}></img>
                    </div>
                    <div className={`${Module.box1} ${Module.upcoming7}`}>
                        <h4 className={Module.p4}>TechSmart</h4>
                        <img src={Image.Section7P.Img10} alt='TechSmart' className={`${Module.colImg1} ${Module.c2img7}`}></img>
                    </div>
               </div> 
            </div>
        )
    }
}

export default Section6A
