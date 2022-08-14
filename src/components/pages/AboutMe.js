import React, { useEffect } from 'react';
import AOS from 'aos';

export const AboutMe = () => {
    return(
        <>
            <div className="aboutme-container">
                <section className="aboutme" id="aboutme">
                <div className="main">
                    <div className="text-main">
                        <div className="about-text">
                        <div data-aos="fade-up" 
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-sine"
                            data-aos-mirror="true"
                            data-aos-once="false"
                        >
                        <h1>Hi! I’m Seyeong</h1>
                        <br/>
                        <p>I’m a person <b>open</b> to new technology and new skills and <b>enjoy</b> hearing various ideas. 
                        </p>
                        </div>
                        </div>
                        <br/>
                        <div className="myself">
                            <div className="myself-left">
                           <img className="icon" loading='lazy' src="../images/geo-alt-fill.svg" alt=""/> Living
                                <p>Toronto, ON</p>
                            </div>
                             <div className="myself-right">
                             <img className="icon" loading='lazy' src="../images/envelope-fill.svg" alt=""/> Email
                                <p>
                                <a className="email" href="mailto:seyeong.park.5@gmail.com">seyeong.park.5@gmail.com</a>
                                </p>
                            </div>
                        </div>
                        
                        <a className="site-icon" href = 'https://github.com/SeyeongPark?tab=repositories'>
                        <img className="github-icon" loading='lazy' src="../images/github.svg" alt=""/>
                        </a>

                         <a className="social-icon-link"
                        href = 'https://www.linkedin.com/in/seyeong-park-0788a4200/'
                        aria-label='Linkedin'>
                             <img className="linkedin-icon" loading='lazy' src="../images/linkedin.svg" alt=""/>   
                        </a>
                        </div>

                    <div className="img-main">
                        <div className="fade-in-img">
                        <img className="img-me" src="../images/me-5.png"/>
                        </div>
                    </div>

                    <div className='scroll-container'>
                        <div id="scroll" className="demo">
                            <a href="#projects"><span></span></a>
                        </div>
                    </div>
                </div>
                </section>
            </div>
            </>
    ) 
}
