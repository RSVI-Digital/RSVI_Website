import React, { Component } from 'react';
import Faq from 'react-faq-component';

import styles from './Faqsection.module.css';

const data = {

  // title: "FAQ (How it works)",
  rows: [
    {
      title: "Where do you work in India?",
      content: "Offline - We have presence in Madhya Pradesh and Lucknow. Lucknow is the parent branch of RSVI. <br>Online Mode – RSVI is connected with Visually Impaired Community at a national and International level through its Project “UDAAN”"
    },
    {
      title: "Who are your target groups?",
      content: " Our target group is very diverse with all ages covered and can be classified as below: <br> Visually Impaired People living in urban/rural areas <br> Visually Impaired people who are from Poor marginal communities living in remote areas <br>Visually Impaired People residing in slumps and least privileged areas"
    },
    {
      title: "How does RSVI identify the programs and areas to work in?",
      content: "We identify projects that contribute to the achievement of RSVI’s strategic aims. On the basis of prevalence of blindness, low vision and other causes of avoidable blindness, health status, status of education etc. we tailor make our projects. "
    },
    {
      title: "Do you work on your own or through partnership?",
      content: "RSVI works in partnership with NGOs, the partnership is based on common goal and vision, learning from each other. We partner with everyone who can support our cause. "
    },
    {
      title: "How can I support RSVI?",
      content: "You can support RSVI through one or more of the following options: <br> Making a donation by contacting us <br> Spreading our key message across in your network <br >Visiting and being a part of our social media network <br> Becoming a volunteer/ Intern  (please write to hr@rsvi.organd we will be happy to explore opportunities)"
    },
    {
      title: "What all information is sent to the donor?",
      content: "A Thank you letter with donation Receipt cum 80G certificate"
    },
    {
      title: "Is my donation to RSVI exempted from tax?",
      content: "Yes. Under section 80G of IT Act"
    },
    {
      title: "Is RSVI a registered organisation?",
      content: "Yes. It’s a 16 + year old NGO founded in 2005. <br> Government ID :UP/2017/0174048 , Registration ID : 1372 "
    },
    {
      title: "How to do Internship at RSVI and whom to contact ?",
      content: "Please drop an email at hr@rvi.org <br> Visit our social Media platforms to know about active Internships <br> Project Manager : Prakhar Verma , 9958836145 "
    },
    {
      title: "What are perks of internship at RSVI ?",
      content: "Privilege to be associated with a 16+ year old registered NGO <br> Exposure to diverse group of Interns <br> Certificate of completion and Letter of Recommendation "
    },
    {
      title: "How can I contact RSVI?",
      content: "You can email us at hr@rsvi.orgor call us on (between 9:30am to 5:30pm):<br> Phone: 0522-3019456/05224070138 <br> Project Manager : Prakhar Verma , 9958836145 "
    }]
}

export default class App extends Component {
  render() {
    return (
      <>
      <div>
            <p className={styles.p}>Got a Question?   We are here to answer.</p>
      </div>
      <div className={styles.div}>
        <Faq data={data}
        styles={{
                rowTitleColor: "#00BCD4",
                rowTitleTextSize: 'max(1.3vw, 16px)',
                rowContentTextSize: 'max(1.1vw, 15px)',
            }}
        />
      </div>
      </>
    )
  }
}
