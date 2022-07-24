import React from 'react';
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
        <a href="/"><img className="web-brand" src="/images/SP_logo_black.png" alt='sp-logo' onClick={closeMobileMenu}></img></a>  
            <div className='navbar-container'>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'navbar-nav active' : 'navbar-nav'}>
                  <li className='nav-item'>
                    <a className='nav-link' href='/#' onClick={closeMobileMenu}>
                      AboutMe
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/#projects' onClick={closeMobileMenu}>
                      Projects
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/#skillsets' onClick={closeMobileMenu}>
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