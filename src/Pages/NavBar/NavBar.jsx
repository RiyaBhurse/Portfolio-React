import React from 'react';
import './NavBar.css';
import icon from './icon.png';

function NavBar(){
    return(
        <nav>
            <ul className="NavBar">
                <li className='NavItem'><img src={icon} alt="icon" className="icon"/></li>
                <li className="NavItem"><a href='link'>Home</a></li>
                <li className="NavItem"><a href='link'>About</a></li>
                <li className="NavItem"><a href='link'>Skills</a></li>
                <li className="NavItem"><a href='link'>Education</a></li>
                <li className="NavItem"><a href='link'>Experience</a></li>
                <li className="NavItem"><a href='link'>Projects</a></li>
                <li className="NavItem"><a href='link'>Resume</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;