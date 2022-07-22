import React, { Component } from 'react';
import '../../App.js'
import AboutMe from './AboutMe.js';
import SkillSets from './SkillSets.js';
import ProjectCards from '../ProjectCards'

class Home extends Component {
    render(){
        return(
            <div>
                {/* <CoverSection/> */}
                    <section id="aboutme">
                        <AboutMe/>
                    </section>
                    <section id="projects">
                        <ProjectCards/>
                    </section>
                    <section id="skillsets">
                        <SkillSets/>
                    </section>
            </div>
        )
    }
}

export default Home;