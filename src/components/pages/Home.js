import React from 'react';
import '../../App.js'
import CoverSection from '../CoverSection.js'
import AboutMe from './AboutMe.js';
import SkillSets from './SkillSets.js';
import ProjectCards from '../ProjectCards'
import Footer from '../Footer.js';

function Home() {
    return(
        <>
         <CoverSection/>
         <AboutMe/>
         <SkillSets/>
         <ProjectCards/>
         <Footer/>
        </>
    )
}

export default Home;