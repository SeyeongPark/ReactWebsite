import React from 'react'
import { Button } from './Button'
import './Footer.css';
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='footer-container'>
        <section class="social-media">
            <div class="social-media-wrap">
                <div class="footer-logo">
                    <Link to='/' class="social-logo">
                        SYTECH <i class="fab fa typo3"/>
                    </Link>
                </div>
                <small class="website-rights">Seyeong Park 2022</small>
                <div class="social-icons">
                    <a class="social-icon-link instagram"
                    href = 'https://www.instagram.com/see_yeong/'
                    target = '_blank'
                    aria-label='Instagram'>
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a class="social-icon-link github"
                    href = 'https://github.com/SeyeongPark?tab=repositories'
                    target = '_blank'
                    aria-label='Instagram'>
                        <i class="fab fa-github"></i>
                    </a>
                    <a class="social-icon-link linkedin"
                    href = 'https://www.linkedin.com/in/seyeong-park-0788a4200/'
                    target = '_blank'
                    aria-label='Linkedin'>
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer
