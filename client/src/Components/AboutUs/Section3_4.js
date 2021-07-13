import React, { Component } from 'react';
import Image from './Image';
import Modules from './Section3_4.module.css';

class Section3_4 extends Component {
    render() {
        return (
            <div>
                <section className={Modules.section3}>
                    <div className={Modules.content}>
                      <p>
                        In fact, we also extend our services to people with other types
                        of physical and mental disabilities, including hearing
                        impairment, dyslexia, muscular dystrophy or even people
                        suffering from more than one disability. Our services are
                        designed to serve persons of all ages and sexes. We also help
                        parents and siblings of persons with disabilities and teach them
                        how to overcome the mental trauma they undergo because of having
                        a person with a disability in their family.
                        <br />
                        <br />
                        Our efforts are directed towards creating an inclusive and
                        barrier-free environment; we build a common platform for
                        uncommon people. We provide educational facilities, emotional
                        strength, psychological counselling, social integration,
                        Economic Rehabilitation and all that is needed for a person
                        suffering from a disability to be a respectable member of
                        society. From giving advice to providing emotional dock and
                        assisting you to choose the appropriate technology for your
                        educational needs or for your workplace, we are at your beck and
                        call.
                      </p>
                    </div>
                    <div className={Modules.imageBox}>
                      <img src={Image.Section3} alt="main" />
                    </div>
                </section> 

                {/* **************** Row 4 **************** */}

                <section className={Modules.section4}>
                  <div className={Modules.whyStarted}>
                    <h1>Why We Started RSVI?</h1>
                  </div>
                  <div className={Modules.reasonForStart}>
                    <p>
                      It is important to mention here that there is a dearth of
                      reading material and information in accessaile formats (Audio,
                      Braille, E-Text) for the visually impaired resulting in creating
                      an insurmountable problem for the students and other
                      professional requiring constant updating of their knowledge. It
                      is estimated that less than 0.5% of books printed in india are
                      converted into audio and Braille formats, let alone
                      international publications. As a matter of fact, rehabilitation
                      services are available to less than 5% of people suffering from
                      blindness and low vision.
                      <br />
                      The magnitude of the problem may be assessed from the following:{" "}
                      <ol>
                        <li>Total number of schools for the blind in the state of Utter
                      Pradesh with a population of more than 20 crores is less than
                      25.</li>
                        <li>Government Braille Production Centers including NGO's in the
                      entire country is less than 10.</li>
                        <li>Audio Reording Centers of books run by government and NGO's
                      in the entire country is less than 15.</li>
                        <li>Audio-Conversion Centers in the state of UP is only one.</li>
                      </ol>
                    </p>
                  </div>
                </section>
            </div>
        )
    }
}

export default Section3_4