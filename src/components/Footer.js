import React from 'react'


function Footer() {
  return (
    <div className='footer-container'>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <a href='/' className="social-logo">
                        SPTECH <i className="fab fa typo3"/>
                    </a>
                </div>
                <p className="website-rights">Seyeong Park 2022</p>
                <div className="social-icons">
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
