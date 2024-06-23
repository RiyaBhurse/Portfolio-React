import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Pages/NavBar/NavBar';
import Home from './Pages/Home/Home';
import About from './Pages/ABOUT/About';
import Skills from './Pages/Skills/skills';
import Project from './Pages/PROJECTS/Project';
import Resume from './Pages/RESUME/Resume';
import pic from './Pages/ABOUT/pic.jpg';
import { BsYoutube } from 'react-icons/bs';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="fixed">
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={
              <About
                header={"More About Me"}
                img={pic}
                text={(
                  <div className='AboutText'>
                    <ul className='AboutUl'>
                      <li>Hello, Im Riya Rajan Bhurse born and brought up in Belgaum Karnataka,</li>
                      <li>Currently Im doing Computer Science at Scaler School Of Technology,</li>
                      <li>I enjoy building projects,</li>
                      <li>Im also fond of DSA and Competative Programming,</li>
                      <li>I have solved 200+ questions on leetcode,</li>
                      <li>Im fond of learning new technology,</li><br />
                      <li>I enjoy exploring AI/ML,</li>
                      <li>I enjoy Problem Solving.</li>
                    </ul>
                    <h4>I have a deep passion for nature and animals and I'm eager to build something meaningful for their benefit.</h4>
                    <h4 className='ytLink'>Also I enjoy creating content on Youtube: </h4>
                    <a className='yt' href="https://www.youtube.com/channel/UCV4F9Uc-l0NLZ9bC1PBY6kg"> <BsYoutube /> </a>
                  </div>
                )}
                link={"https://www.scaler.com/"}
                position={"img-right"}
                bgColor={"red"}
              />
            } />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
