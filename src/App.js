import './App.css';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import mailIcon from './assets/mail-icon.png';
import Form from './form.js';
import Contact from './contact.js';
import Menu from './menu.js';
function App() {


  return (
    <div className="App">
      <div id='indicator'>|</div>
      <Menu/>
      <div className='grad' id='hello'>Hello.</div>
      <Contact />
      <div id='introduction'>
        My name is <span className='grad'>Jensen McKenzie</span>.<br></br>I am a software developer.</div>
      <div className='grad' id="second">
        Projects</div><div id="projectsInfo">Currently, I am working on developing this website, as well as others. I also have extensive experience in game development (virtual reality, 3D applications, ect.), fullstack development (frontend/backend), and other projects.</div>
      <div id="displayContainer">
        <a href='https://github.com/JensenMcKenzie/SituationalVR' className='containerElement' id='displayOne'><span className='displayText'>Virtual Reality Development</span></a>
        <a href='https://github.com/JensenMcKenzie/main_portfolio' className='containerElement' id='displayTwo'><span className='displayText'>Fullstack Development</span></a>
        <a href='https://github.com/JensenMcKenzie/RadixSort' className='containerElement' id='displayThree'><span className='displayText'>Sorting Visualizer</span></a>
        <a href='https://github.com/JensenMcKenzie/minesweeper' className='containerElement' id='displayFour'><span className='displayText'>Python GUI</span></a>
      </div>
      <div id="skills" className='grad'>Skills</div>
      <div id="skillsInfo">I have 6+ years of experience in software development</div>
      <div id="skillsContainer">
        <div className='containerElement' id="displayOneA"><span className='displayText'>React.js</span></div>
        <div className='containerElement' id="displayTwoA"><span className='displayText'>Unity</span></div>
        <div className='containerElement' id="displayThreeA"><span className='displayText'>C++</span></div>
        <div className='containerElement' id="displayFourA"><span className='displayText'>Python</span></div>
        <div className='containerElement' id="displayFiveA"><span className='displayText'>Java</span></div>
        <div className='containerElement' id="displaySixA"><span className='displayText'>SQL</span></div>
        <div className='containerElement' id="displaySevenA"><span className='displayText'>three.js</span></div>
        <div className='containerElement' id="displayEightA"><span className='displayText'>Figma</span></div>
        <div className='containerElement' id="displayNineA"><span className='displayText'>Firebase</span></div>
      </div>
      <div id="introductionText">
        <br></br><br></br>I have been developing games, software, and websites for several years. My first hands on experience with Computer Science was in a highschool class, ever since then my passion has only continued to grow.<br></br>When I'm not at the computer, you can find me hiking, biking, or otherwise experiencing the great outdoors.
      </div>
      <div id="tempFiller"></div>
      <div id="contact" />
      <Form />
      <div id="tempFiller"></div>
      <div id="tempFiller"></div>
    </div>
  );
}

//Window scroll persistence
document.addEventListener("DOMContentLoaded", function (event) {
  var scrollpos = localStorage.getItem('scrollpos');
  if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function (e) {
  localStorage.setItem('scrollpos', window.scrollY);
};


window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log(value + " " + this.window.innerHeight);
  if (value > (this.window.innerHeight * 4)) {
    console.log("5");
    this.document.getElementById('indicator').style.transform = "translateY(200px)";
    this.document.getElementById('contactInner').style.backgroundImage = "url()";
    this.document.getElementById('contactInner').style.backgroundColor = "#222";
    this.document.getElementById('contactInner').innerHTML = "Contact me";
    this.document.getElementById('contactOuter').style.top = "10vh";
    this.document.getElementById('contactOuter').style.left = "25vw";
    this.document.getElementById('contactOuter').style.width = "min(460px, 50%)";
    this.document.getElementById('contactOuter').style.borderRadius = "30px";
  }
  else if (value > (this.window.innerHeight * 2.7)) {
    console.log("4");
    this.document.getElementById('contactInner').innerHTML = "";
    this.document.getElementById('contactInner').style.backgroundImage = "url(" + mailIcon + ")";
    this.document.getElementById('contactInner').style.backgroundColor = "";
    this.document.getElementById('contactOuter').style.top = "90vh";
    this.document.getElementById('contactOuter').style.left = "46vw";
    this.document.getElementById('contactOuter').style.width = "8vh";
    this.document.getElementById('contactOuter').style.height = "8vh";
    this.document.getElementById('contactOuter').style.borderRadius = "50px";
    this.document.getElementById('indicator').style.transform = "translateY(150px)";
  }
  else if (value > (this.window.innerHeight * 1.8)) {
    console.log("3");
    this.document.getElementById('contactInner').innerHTML = "";
    this.document.getElementById('contactInner').style.backgroundImage = "url(" + mailIcon + ")";
    this.document.getElementById('contactInner').style.backgroundColor = "";
    this.document.getElementById('contactOuter').style.top = "90vh";
    this.document.getElementById('contactOuter').style.left = "46vw";
    this.document.getElementById('contactOuter').style.width = "8vh";
    this.document.getElementById('contactOuter').style.height = "8vh";
    this.document.getElementById('contactOuter').style.borderRadius = "50px";
    this.document.getElementById('indicator').style.transform = "translateY(100px)";
  }
  else if (value >= (this.window.innerHeight * .9)) {
    console.log("2");
    this.document.getElementById('indicator').style.transform = "translateY(50px)";
    this.document.getElementById('contactInner').innerHTML = "";
    this.document.getElementById('contactInner').style.backgroundImage = "url(" + mailIcon + ")";
    this.document.getElementById('contactInner').style.backgroundColor = "";
    this.document.getElementById('contactOuter').style.top = "90vh";
    this.document.getElementById('contactOuter').style.left = "46vw";
    this.document.getElementById('contactOuter').style.width = "8vh";
    this.document.getElementById('contactOuter').style.height = "8vh";
    this.document.getElementById('contactOuter').style.borderRadius = "50px";
  }
  else if (value < this.window.innerHeight) {
    console.log("1");
    this.document.getElementById('indicator').style.transform = "translateY(0px)";
    this.document.getElementById('contactInner').style.backgroundImage = "url()";
    this.document.getElementById('contactInner').style.backgroundColor = "#222";
    this.document.getElementById('contactInner').innerHTML = "Contact me";
    this.document.getElementById('contactOuter').style.top = "0vh";
    this.document.getElementById('contactOuter').style.left = "25vw";
    this.document.getElementById('contactOuter').style.width = "min(460px, 50%)";
    this.document.getElementById('contactOuter').style.borderRadius = "30px";
  }
});
export default App;
