import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Workexperience from "./components/Workexperience/Workexperience";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import {themecontext} from './Context'
import { useContext } from "react";
function App() {
  const theme = useContext(themecontext)
  const darkmode = theme.state.darkMode
  return (
  // <div className="App" style={{background: darkmode?'black':'white', color:darkmode?'white':'black'}} >
  <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Certifications/>
      <Experience/>
      {/* <Works/> */}
      <Portfolio/>
      <Workexperience/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
