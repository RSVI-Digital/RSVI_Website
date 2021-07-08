
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import GetInTouch from './Components/GetInTouch/GetInTouch';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';

import WhatWeDo  from './Components/Home/WorksComp/WhatWeDo';
import ActivityChild from './Components/Home/Activity/ActivityChild';
import SuccessChild from './Components/Home/SuccessMedia/SuccessChild/SuccessChild';

// import Internship from "./Components/Internship/Internship";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/work/' component={WhatWeDo}/>
          <Route exact path="/ActivityChild" component={ActivityChild}/>
          <Route exact path="/success-child" component={SuccessChild}/>
          <Route exact path='/about-us' component={AboutUs} />
          <Route exact path='/faqs' component={FAQ} />
          <Route exact path='/get-in-touch' component={GetInTouch} />
          {/* <Route exact path='/internship' component={Internship} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
