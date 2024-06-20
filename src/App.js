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

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={
            <About
              header={"About Riya Bhurse"}
              img={pic}
              text={(
                <>
                  Hello Im Riya Bhurse born and brought up in Belgaum Karnataka,<br/> Currently Im doing Computer Science at Scaler School Of Technology, <br/> I enjoy building projects,<br/>  currently building an Humonoid, <br/> and I have built many more projects, do check my github.<br/>  Im also fond of DSA and Compitative Programming,<br/>  I have solved 200+ questions on leetcode.<br/>  Im fond of learning new technology,<br/>  and exploring the possiblites of AI/ML.<br/>
                </>
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
      </div>
    </Router>
  );
}

export default App;
