// 'rfce' -> make js basic form
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  // const handleClick = () => setClick(!click);

  const goToAbout = () =>(
    window.scrollTo({top: 1000, left: 0, behavior: "smooth"})
  );

  const goToSkillsets = () =>(
    window.scrollTo({top: 2350, left: 0, behavior: "smooth"})
  );

  const goToProject = () =>(
    window.scrollTo({top: 3200, left: 0, behavior: "smooth"})
  );

  return (
    <>
        <nav className="navbar">
            <div className='navbar-container'>
                {/* <Link to="/" className="navbar-logo">
                    SeyeongPark <i className="fab fa-typo3"/>
                </Link> */}
                {/* <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div> */}
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='#aboutme' className='nav-links' onClick={goToAbout}>
                      About me 
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='#skillsets' className='nav-links' onClick={goToSkillsets}>
                      SkillSets
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='#projects' className='nav-links' onClick={goToProject}>
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
