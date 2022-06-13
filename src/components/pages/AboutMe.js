import React from "react";
import '../../App.css';
import './About.css';
import Photos from "../Photos";
// import Education from "../Education";

export default function AboutMe(){
    return(
        <body>
            <h1 className="title">About.</h1>
            <div class="main">
                <div class="text-main">
                    <p>I want to be a <em> developer</em> who develope applications to make users to be useful in daily life.</p>
                    <br/>
                    <div class="myself">
                        <div class="myself-left">
                            <i class="bi bi-geo-alt-fill fa-5x"> Living</i>
                            <p>Toronto, ON</p>
                        </div>
                        <div class="myself-mid">
                            <i class="bi bi-telephone-fill"> Phone</i>
                            <p>437)989-5177</p>
                        </div>
                    </div>
                    <div class="myself-right">
                            <i class="bi bi-envelope-fill"> Email</i>
                            <p>seyeong.park.5@gmail.com</p>
                        </div>
                    
                    <a className="site-icon" href = 'https://github.com/SeyeongPark?tab=repositories'>
                        <i class="fab fa-github fa-3x"/>
                     </a>

                    <a class="social-icon-link linkedin"
                    href = 'https://www.linkedin.com/in/seyeong-park-0788a4200/'
                    aria-label='Linkedin'>
                        <i class="fab fa-linkedin fa-2x"></i>   
                    </a>
                    </div>

                <div class="img-main">
                    <img class="img-logo" src="../images/me-3.JPEG" />
                </div>
            </div>
            
            <Photos/>
            {/* <Education/> */}
        </body>
    ) 
}
