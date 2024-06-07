import React from 'react';
import './NavBar.css';

function NavBar(){
    return(
        // <nav id="myNavBar" className="NavDiv">
        <nav>
            <ul className="NavBar">
                <li className="NavItem"><a href='link'>Home</a></li>
                <li className="NavItem"><a href='link'>About</a></li>
                <li className="NavItem"><a href='link'>Skills</a></li>
                <li className="NavItem"><a href='link'>Education</a></li>
                <li className="NavItem"><a href='link'>Experience</a></li>
                <li className="NavItem"><a href='link'>Projects</a></li>
                <li className="NavItem"><a href='link'>Resume</a></li>
            </ul>
            {/* <div className="DarkMode"></div> */}
        </nav>
    )
}

export default NavBar;