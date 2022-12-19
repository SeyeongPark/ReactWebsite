/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.development';

export const Navbar = () => {
  
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
        <a href="/"><img loading='lazy' className="web-brand" src="/images/SP_logo_black.webp" alt='sp-logo' onClick={closeMobileMenu}></img></a>  
            <div className='navbar-container'>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'navbar-nav active' : 'navbar-nav'}>
                  <li className='nav-item'>
                    <HashLink className='nav-link' smooth to="/#aboutme">
                      AboutMe
                    </HashLink>
                  </li>
                  <li className='nav-item'>
                    <HashLink className='nav-link' smooth to="/#projects">
                      Projects
                    </HashLink>
                  </li>
                  <li className='nav-item'>
                    <HashLink className='nav-link' smooth to="/#skillsets">
                      SkillSets
                    </HashLink>
                  </li>
                </ul>
            </div>
        </nav>
    </>
  );
}