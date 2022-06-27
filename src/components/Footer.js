import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='footer-container'>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className="social-logo">
                        SYTECH <i className="fab fa typo3"/>
                    </Link>
                </div>
                <small className="website-rights">Seyeong Park 2022</small>
                <div className="social-icons">
                    {/* <a className="social-icon-link instagram"
                    href = 'https://www.instagram.com/see_yeong/'
                    target = '_blank'
                    aria-label='Instagram'>
                        <i className="fab fa-instagram"></i>
                    </a> */}
                    <a className="social-icon-link github"
                    href = 'https://github.com/SeyeongPark?tab=repositories'
                    aria-label='Instagram'>
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="social-icon-link linkedin"
                    href = 'https://www.linkedin.com/in/seyeong-park-0788a4200/'
                    aria-label='Linkedin'>
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer
