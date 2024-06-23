import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav>
      <ul className="NavBar">
        <li className={`NavItem ${activeLink === '/' ? 'active' : ''}`} onClick={() => handleClick('/')}>
          <Link to="/">Home</Link>
        </li>
        <li className={`NavItem ${activeLink === '/about' ? 'active' : ''}`} onClick={() => handleClick('/about')}>
          <Link to="/about">About</Link>
        </li>
        <li className={`NavItem ${activeLink === '/skills' ? 'active' : ''}`} onClick={() => handleClick('/skills')}>
          <Link to="/skills">Skills</Link>
        </li>
        <li className={`NavItem ${activeLink === '/projects' ? 'active' : ''}`} onClick={() => handleClick('/projects')}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={`NavItem ${activeLink === '/resume' ? 'active' : ''}`} onClick={() => handleClick('/resume')}>
          <a href="https://drive.google.com/file/d/1ZRj61CMgAshRbxYrtbSpO9JwDgV2GsFl/view?usp=sharing" target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
