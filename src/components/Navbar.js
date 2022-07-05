// 'rfce' -> make js basic form
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
        <nav className="navbar">
            <div className='navbar-container'>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                  <li className='nav-item'>
                    <a href='#aboutme' className='nav-links' >
                      About me 
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#skillsets' className='nav-links' >
                      SkillSets
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#projects' className='nav-links' >
                      Projects
                    </a>
                  </li>
                </ul>
            </div>
        </nav>
    </>
  );
}

export default Navbar
