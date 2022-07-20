import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className='navbar-container'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <a className='nav-link' href='/#aboutme'>
                      AboutMe
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/#projects'>
                      Projects
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/#skillsets'>
                      SkillSets
                    </a>
                  </li>
                </ul>
            </div>
        </nav>
    </>
  );
}

export default Navbar