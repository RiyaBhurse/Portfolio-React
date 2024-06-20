import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import icon from './icon.png';

function NavBar() {
  return (
    <nav>
      <ul className="NavBar">
        <li className='NavItem'><img src={icon} alt="icon" className="icon" /></li>
        <li className="NavItem"><Link to="/">Home</Link></li>
        <li className="NavItem"><Link to="/about">About</Link></li>
        <li className="NavItem"><Link to="/skills">Skills</Link></li>
        <li className="NavItem"><Link to="/projects">Projects</Link></li>
        <li className="NavItem"><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
