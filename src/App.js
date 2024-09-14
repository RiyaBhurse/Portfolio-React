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
                   <li>Hello, I'm Riya Rajan Bhurse, born and brought up in Belgaum, Karnataka.</li>
                      <li>Currently, I'm studying Computer Science at Scaler School of Technology.</li>
                      <li>I enjoy building projects.</li>
                      <li>I'm deeply interested in DSA and Competitive Programming.</li>
                      <li>I have solved 250+ questions on LeetCode.</li>
                      <li>I’m always eager to learn new technologies.</li>
                      <li>I enjoy exploring AI/ML.</li>
                      <li>I have a passion for problem-solving.</li>
                      <h4>I also have a deep love for nature and animals, and I’m eager to build something meaningful for their benefit.</h4>
                      <div className='ytLink'>
                        <h4>I also enjoy creating content on YouTube:</h4>
                        <a className='yt' href="https://www.youtube.com/channel/UCV4F9Uc-l0NLZ9bC1PBY6kg"><BsYoutube /></a>
                      </div>
                  </ul>
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
