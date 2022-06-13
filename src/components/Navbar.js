// 'rfce' -> make js basic form
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      // when it's mobile mode, the 'sign-up' button will be disappeared
      setButton(false);
    } else{
      setButton(true);
    }
  };

  useEffect(()=>{
    showButton()
  })

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    SeyeongPark <i class="fab fa-typo3"/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='#aboutme' className='nav-links' onClick={closeMobileMenu}>
                      About me 
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='#skillsets' className='nav-links' onClick={closeMobileMenu}>
                      SkillSets
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='#projects' className='nav-links' onClick={closeMobileMenu}>
                      Projects
                    </Link>
                  </li>
                </ul>
            </div>
        </nav>
    </>
  );
}

export default Navbar
