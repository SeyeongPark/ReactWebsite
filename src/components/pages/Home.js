import React, { Component } from 'react';
import '../../App.js'
import { AboutMe } from './AboutMe.js';
import SkillSets from './SkillSets.js';
import ProjectCards from '../ProjectCards'

class Home extends Component {
    render(){
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