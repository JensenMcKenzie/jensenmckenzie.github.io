import './App.css';
import * as React from 'react';
import mailIcon from './assets/mail-icon.png';
import Form from './form.js';
import Contact from './contact.js';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useSpring } from "@react-spring/web";
import Card from './Card.js';
import PageMap from 'react-pagemap';

function App() {
  const arrowStyle = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    to: { y: 10 },
    config: {
      duration: 700
    },
  })

  PageMap.defaultProps = {
    viewport: null,
    styles: {
      container: {
        position: 'fixed',
        top: '8px',
        right: '8px',
        width: '100px',
        height: '100%',
        zIndex: '100'
      },
      'header,footer,section,article': 'rgba(0, 0, 0, 1)',
      'h1,a': 'rgba(0, 0, 0, 1)',
      'h2,h3,h4': 'rgba(0, 0, 0, 1)',
      '#App': 'rgba(0, 0, 0,1 )',
      '#second': 'rgba(255,171,0,.5)',

    },
    back: 'rgba(0, 0, 0, 0.02)',
    view: 'rgba(0, 0, 0, 0.2)',
    drag: 'rgba(0, 0, 0, 0.10)',
    interval: null
  }
  return (
    <ParallaxProvider>
      <div className="App">

        <div style={{ position: 'fixed', top: '0', left: '0' }}>
          <div className="shape-blob one" id="blob1"></div>
          <div className="shape-blob two" id='blob2'></div>
          <div className="shape-blob three" id='blob3'></div>
          <div className="shape-blob four" id='blob4'></div>

        </div>
        <div id='indicator'>|</div>
        <PageMap />
        <div style={{ height: '31vh', scrollSnapAlign: 'start' }} />
        <div className='grad' id='hello'>Hello.</div>
        <Contact />
        <div id='introduction'>
          My name is <span className='grad'>Jensen McKenzie</span>.<br></br>I am a software developer.
        </div>

        <div id="second" >
          <p className='grad2'>Projects</p>
        </div>
        <div id="projectsInfo">Currently, I am working on developing this website, as well as others. I also have extensive experience in game development (virtual reality, 3D applications, ect.), fullstack development (frontend/backend), and other projects.</div>
        <div id="displayContainer">
          <Card link={"https://github.com/JensenMcKenzie/situationalvr"} imgURL={0} text={"VR Development"} size={40} />
          <Card link={'https://github.com/JensenMcKenzie/main_portfolio'} imgURL={1} text={"Portfolio"} size={40} />
          <Card link={'https://github.com/JensenMcKenzie/RadixSort'} imgURL={2} text={"Sorting Visualizer"} size={40} />
          <Card link={'https://github.com/JensenMcKenzie/minesweeper'} imgURL={3} text={"Python GUI"} size={40} />
        </div>
        <div id="skills">
          <p className='grad3' style={{ height: 'fit-content', fontWeight: '700', fontSize: '8vh' }}>Skills</p>
          <div className="container3x3" style={{ marginTop: '10%' }}>
            <Card link={"/"} imgURL={4} text={"React"} size={45} />
            <Card link={"/"} imgURL={5} text={"Unity"} size={45} />
            <Card link={"/"} imgURL={6} text={"C++"} size={45} />
            <Card link={"/"} imgURL={7} text={"Python"} size={45} />
            <Card link={"/"} imgURL={8} text={"Java"} size={45} />
            <Card link={"/"} imgURL={9} text={"SQL"} size={45} />
            <Card link={"/"} imgURL={10} text={"three.js"} size={45} />
            <Card link={"/"} imgURL={11} text={"Figma"} size={45} />
            <Card link={"/"} imgURL={11} text={"Firebase"} size={45} />
          </div>
        </div>
        <div style={{ scrollSnapAlign: 'start', height: '100vh' }}>
          <p className='grad4' style={{ height: 'fit-content', fontWeight: '700', fontSize: '8vh' }}>Experience</p>
        </div>
        <div id="tempFiller"></div>
        <div id="contact" />
        <Form />
        <div id="tempFiller"></div>
        <div id="tempFiller"></div>
      </div>
    </ParallaxProvider>
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
  if (value > (this.window.innerHeight * 4)) {
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
    this.document.getElementById('contactInner').innerHTML = "";
    this.document.getElementById('contactInner').style.backgroundImage = "url(" + mailIcon + ")";
    this.document.getElementById('contactInner').style.backgroundColor = "";
    this.document.getElementById('contactOuter').style.top = "90vh";
    this.document.getElementById('contactOuter').style.left = "46vw";
    this.document.getElementById('contactOuter').style.width = "8vh";
    this.document.getElementById('contactOuter').style.height = "8vh";
    this.document.getElementById('contactOuter').style.borderRadius = "50px";
    this.document.getElementById('indicator').style.transform = "translateY(150px)";
    for (let i = 1; i < 5; i++) {
      this.document.getElementById('blob' + i).style.backgroundPositionX = "100%";
    }
  }
  else if (value > (this.window.innerHeight * 1.8)) {
    this.document.getElementById('contactInner').innerHTML = "";
    this.document.getElementById('contactInner').style.backgroundImage = "url(" + mailIcon + ")";
    this.document.getElementById('contactInner').style.backgroundColor = "";
    this.document.getElementById('contactOuter').style.top = "90vh";
    this.document.getElementById('contactOuter').style.left = "46vw";
    this.document.getElementById('contactOuter').style.width = "8vh";
    this.document.getElementById('contactOuter').style.height = "8vh";
    this.document.getElementById('contactOuter').style.borderRadius = "50px";
    this.document.getElementById('indicator').style.transform = "translateY(100px)";
    for (let i = 1; i < 5; i++) {
      this.document.getElementById('blob' + i).style.backgroundPositionX = "70%";
    }

  }
  else if (value >= (this.window.innerHeight * .9)) {

    this.document.getElementById('indicator').style.transform = "translateY(50px)";
    this.document.getElementById('contactInner').innerHTML = "";
    this.document.getElementById('contactInner').style.backgroundImage = "url(" + mailIcon + ")";
    this.document.getElementById('contactInner').style.backgroundColor = "";
    this.document.getElementById('contactOuter').style.top = "90vh";
    this.document.getElementById('contactOuter').style.left = "46vw";
    this.document.getElementById('contactOuter').style.width = "8vh";
    this.document.getElementById('contactOuter').style.height = "8vh";
    this.document.getElementById('contactOuter').style.borderRadius = "50px";
    //this.document.getElementById('shape-blob').style.background = "linear-gradient(90deg, #ff1900, #ffc500)";
    for (let i = 1; i < 5; i++) {
      this.document.getElementById('blob' + i).style.backgroundPositionX = "35%";
    }

  }
  else if (value < this.window.innerHeight) {
    this.document.getElementById('indicator').style.transform = "translateY(0px)";
    this.document.getElementById('contactInner').style.backgroundImage = "url()";
    this.document.getElementById('contactInner').style.backgroundColor = "#222";
    this.document.getElementById('contactInner').innerHTML = "Contact me";
    this.document.getElementById('contactOuter').style.top = "0vh";
    this.document.getElementById('contactOuter').style.left = "25vw";
    this.document.getElementById('contactOuter').style.width = "min(460px, 50%)";
    this.document.getElementById('contactOuter').style.borderRadius = "30px";
    //this.document.getElementById('shape-blob').style.background = "linear-gradient(90deg, #12c2e9, #c471ed, #f64f59)";
    for (let i = 1; i < 5; i++) {
      this.document.getElementById('blob' + i).style.backgroundPositionX = "0%";
    }

  }
});

export default App;
