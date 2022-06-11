import React from 'react';
import '../../App.js'
import CoverSection from '../CoverSection.js'
import AboutMe from './AboutMe.js';
import SkillSets from './SkillSets.js';
import ProjectCards from '../ProjectCards'
import Footer from '../Footer.js';
import ScrollableAnchor from 'react-scrollable-anchor'

function Home() {
    return(
        <>
         <CoverSection/>
         {/* <ScrollableAnchor id={'aboutme'}> */}
            <AboutMe/>
         {/* </ScrollableAnchor> */}



         <SkillSets name="skillsets"/>
         <ProjectCards name="projects"/>
         <Footer/>
        </>
    )
}

export default Home;