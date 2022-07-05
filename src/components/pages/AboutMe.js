import React, { useEffect, useState } from "react";
import '../../App.css';
import './About.css';
import Photos from "../Photos";
// import Education from "../Education";
import GitHubCalendar from 'react-github-calendar';

export default function AboutMe(){

    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      }; // Resource: https://grubersjoe.github.io/react-github-calendar/

    return(
            <body>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
                <h1 className="title">About.</h1>
                <div className="main">
                    <div className="text-main">
                        <div className="about-text">
                        <p>
                        I’m a person <em>open</em> to new technology and new skills and <em>enjoy</em> hearing various ideas. 
                        </p>
                        </div>
                        <br/>
                        <div className="myself">
                            <div className="myself-left">
                                <i className="bi bi-geo-alt-fill"> Living</i>
                                <p>Toronto, ON</p>
                            </div>
                            <div className="myself-mid">
                                <i className="bi bi-telephone-fill"> Phone</i>
                                <p>437)989-5177</p>
                            </div>
                        </div>
                        <div className="myself-right">
                                <i className="bi bi-envelope-fill"> Email</i>
                                <p>seyeong.park.5@gmail.com</p>
                            </div>
                        
                        <a className="site-icon" href = 'https://github.com/SeyeongPark?tab=repositories'>
                            <i className="fab fa-github fa-3x"/>
                        </a>

                        <a className="social-icon-link linkedin"
                        href = 'https://www.linkedin.com/in/seyeong-park-0788a4200/'
                        aria-label='Linkedin'>
                            <i className="fab fa-linkedin fa-2x"></i>   
                        </a>

                        {/* <GitHubCalendar  
                            className="github-graph"
                            username="SeyeongPark" 
                            transformData={selectLastHalfYear} 
                            hideTotalCount 
                            hideColorLegend
                            /> */}
                        </div>

                    <div className="img-main">
                        <img className="img-logo" src="../images/me-4.png" />
                    </div>
                    <img className="github-graph" src="https://ghchart.rshah.org/SeyeongPark"/>
                </div>
                
                {/* <Photos/> */}
                {/* <Education/> */}
            </body>
    ) 
}
