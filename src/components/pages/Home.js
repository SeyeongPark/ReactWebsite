import React, { Component } from 'react';
import '../../App.js'
import CoverSection from '../CoverSection.js'
import AboutMe from './AboutMe.js';
import SkillSets from './SkillSets.js';
import ProjectCards from '../ProjectCards'
import Footer from '../Footer.js';
// import ScrollableAnchor from 'react-scrollable-anchor';
  
class Home extends Component {
    render(){
        return(
            <div>
                <CoverSection/>
                {/* <ScrollableAnchor id={"aboutme"}> */}
                   <AboutMe/>
                {/* </ScrollableAnchor>
       
                <ScrollableAnchor id={"skillsets"}> */}
                   <SkillSets/>
                {/* </ScrollableAnchor>
                <ScrollableAnchor id={"projects"}> */}
                   <ProjectCards/>
                {/* </ScrollableAnchor> */}
   
                <Footer/>
            </div>
        )
    }
}

export default Home;