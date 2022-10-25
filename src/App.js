import './App.css';
import * as React from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import mailIcon from './assets/mail-icon.png';
import Form from './form.js';
import Contact from './contact.js';
import Menu from './menu.js';
import { useParallax, ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { AnimationLoader } from 'three';
import { useSpring, animated } from "@react-spring/web";
import test from './assets/test.svg';
import Card from './Card.js';
import Minimap from './Minimap';
import PageMap from 'react-pagemap'

function App() {
 
  const arrowStyle = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    to: { y: 10 },
    config: {
      duration: 700
    },
  })
  
  return (
    <ParallaxProvider>
      <div className="App">
        <div id='indicator'>|</div>
        
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
        <div id="skills" className='grad' style={{ height: '100vh' }}>Skills
          <div id="skillsInfo">I have 6+ years of experience in software development</div>
          <div className="container3x3">
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
          <div className='grad'>Experience</div>
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
