import React from "react";
import './About.css';
import '../items/CoverSection.css';

export default function AboutMe(){
    return(
            <div className="aboutme-container">
                <section id="aboutme">
                <div className="main">
                    <div className="text-main">
                        <div className="about-text">
                        <p>Hi, I’m Seyeong! I’m a web developer.</p>
                        <br/>
                        <p>I’m a person <em>open</em> to new technology and new skills and <em>enjoy</em> hearing various ideas. 
                        </p>
                        </div>
                        <br/>
                        <div className="myself">
                            <div className="myself-left">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  </svg> Living
                                <p>Toronto, ON</p>
                            </div>
                             <div className="myself-right">
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg> Email
                                <p>
                                <a className="email" href="mailto:seyeong.park.5@gmail.com">seyeong.park.5@gmail.com</a>
                                </p>
                            </div>
                        </div>
                        
                        <a className="site-icon" href = 'https://github.com/SeyeongPark?tab=repositories'>
                            <i className="fab fa-github fa-3x"/>
                        </a>

                         <a className="social-icon-link"
                        href = 'https://www.linkedin.com/in/seyeong-park-0788a4200/'
                        aria-label='Linkedin'>
                            <i className="fab fa-linkedin fa-2x"></i>   
                        </a>
                        </div>

                    <div className="img-main">
                        <img className="img-me" src="../images/me-5.webp"/>
                    </div>

                    <div className='scroll-container'>
                        <div id="scroll" className="demo">
                            <a href="#projects"><span></span></a>
                        </div>
                    </div>
                </div>
                </section>
            </div>
    ) 
}
