import React from "react";
import { Link}from "react-router-dom";
import Style from './Footer.module.css'
import { SocialIcon } from 'react-social-icons';


function openTab() {
    window.open('https://youtube.com/c/RSVILucknow');
}

function openTab1() {
    window.open('https://www.facebook.com/rsvilko/');
}

function openTab2() {
    window.open('https://instagram.com/missionrsvi?igshid=1wzs8v4dk0to1');
}

function openTab3() {
    window.open('https://www.linkedin.com/company/rehabilitation-society-of-visually-impaired');
}


function Footer() {
  return (
    <div className={Style.mainfooter}>
        <div className="row">
          {/* Column1 */}
          <div className="col-lg-2 col-mg-4 col-sm-2">
          <img src="https://drive.google.com/uc?id=165lGw6lMAl5cHZGQGFy9sE5H4abB8phd" className={Style.forimg}/>
          <p className={Style.fortxt}>Rehabilitation<br></br>Society of the <br></br>Visually Impaired </p>
          </div>
          
          <div className="col-lg-1 col-mg-2 col-sm-1">
              <div className={Style.verticalline} ></div>
          </div>
          
          {/* Column2 */}
          <div className="col-lg-4 col-mg-6 col-sm-4 lastc" >
            <p className={Style.para} style={{color:"black"}}>Address:<br></br> Gopala Apartment, A-303, 2nd floor,<br></br>Ram Terath Marg, Narhi, Lucknow,<br></br> Uttar Pradesh 226001</p>
            <p className={Style.para} style={{color:"black"}}>Phone no.: 0522 3019456, 4070138</p>
            <p className={Style.para} style={{color:"black"}}>Email: daisyrsvi@gmail.com</p>
            <ui>
            <Link className={Style.para} onClick={openTab}><SocialIcon network="youtube" bgColor="#c3ffaa" fgColor="red" style={{height: 50, width: 50}} /></Link>
            <Link className={Style.par1}  onClick={openTab1}><SocialIcon network="facebook" fgColor="white" style={{height: 40, width: 40}}/></Link>
            <Link  style={{paddingLeft:10}} className={Style.par2}  onClick={openTab2}><SocialIcon network="instagram" fgColor="white" style={{height: 40, width: 40}}/></Link>
            <Link  style={{paddingLeft:10}} className={Style.par3}  onClick={openTab3}><SocialIcon network="linkedin" fgColor="white" style={{backgroundColor:"#0077b3",height: 35, width: 35}}/></Link>
            </ui>
          </div>
          <div className="col-lg-6 col-mg-0 col-sm-0 "></div>
        </div>
    </div>
  );
}

export default Footer;