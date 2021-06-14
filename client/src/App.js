import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Internship from "./Components/Internship/Internship";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import AboutUs from "./Components/AboutUs/AboutUs"


/* function App() {
  return (
    <Router>
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
    </Router>
  );
} */

function App(){
  return(
    <Router>
    <div>
      <Header> </Header>
      <AboutUs> </AboutUs>
      <Footer> </Footer>
    </div>
    </Router>
  );
}

export default App;
