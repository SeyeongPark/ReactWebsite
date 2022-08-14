import React, { Component } from 'react';
import '../../App.js'
import { AboutMe } from './AboutMe.js';
import SkillSets from './SkillSets.js';
import ProjectCards from '../ProjectCards'
import AOS from 'aos';
import 'aos/dist/aos.css';

class Home extends Component {
    render(){
        AOS.init();
        return(
            <>
                <AboutMe/>
                <ProjectCards/>
                <SkillSets/>
            </>
        )
    }
}

export default Home;