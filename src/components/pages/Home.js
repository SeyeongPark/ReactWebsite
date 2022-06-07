import React from 'react';
import '../../App.js'
import HeroSection from '../HeroSection.js'
import AboutMe from './AboutMe.js';
import SkillSets from './SkillSets.js';
import ProjectCards from '../ProjectCards'
import Footer from '../Footer.js';

function Home() {
    return(
        <>
         <HeroSection/>
         <AboutMe/>
         <SkillSets/>
         <ProjectCards/>
         <Footer/>
        </>
    )
}

export default Home;