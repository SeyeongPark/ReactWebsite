import React, { Component } from 'react';
import '../../App.js'
import CoverSection from '../CoverSection.js'
import AboutMe from './AboutMe.js';
import SkillSets from './SkillSets.js';
import ProjectCards from '../ProjectCards'
import Footer from '../Footer.js';
import { ThemeProvider } from 'styled-components';

  
class Home extends Component {
    render(){
        return(
            <div>
                <CoverSection/>
                   <AboutMe/>
                    <SkillSets/>
                   <ProjectCards/>
                <Footer/>
            </div>
        )
    }
}

export default Home;