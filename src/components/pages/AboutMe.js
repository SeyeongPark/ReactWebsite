import React from "react";
import './About.css';
import '../CoverSection.css';

export default function AboutMe(){
    return(
            <div className="aboutme-container">
                <section id="aboutme">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
                {/* <h1 className="title">About.</h1> */}
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
                                <i className="bi bi-geo-alt-fill"> Living</i>
                                <p>Toronto, ON</p>
                            </div>
                             <div className="myself-right">
                                <i className="bi bi-envelope-fill"> Email</i>
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
