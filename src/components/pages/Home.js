import React, { Component } from 'react';
import '../../App.js'
import AboutMe from './AboutMe.js';
import SkillSets from './SkillSets.js';
import ProjectCards from '../ProjectCards'

// const AboutMe = React.lazy(() => import('./AboutMe.js'));
// const SkillSets = React.lazy(() => import('./SkillSets.js'));
// const ProjectCards = React.lazy(() => import('../ProjectCards.js'));

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