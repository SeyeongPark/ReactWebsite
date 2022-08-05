import React from "react";

export const AboutMe = () => {

    return(
            <div className="aboutme-container">
                <section className="aboutme" id="aboutme">
                <div className="main">
                    <div className="text-main">
                        <div className="about-text">
                        <h1>Hi! I’m Seyeong</h1>
                        <br/>
                        <p>I’m a person <em>open</em> to new technology and new skills and <em>enjoy</em> hearing various ideas. 
                        </p>
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
                        <img className="img-me" src="../images/me-5.png"/>
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
