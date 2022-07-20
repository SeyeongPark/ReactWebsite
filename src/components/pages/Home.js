import React, { Component } from 'react';
import '../../App.js'
import CoverSection from '../CoverSection.js'
import AboutMe from './AboutMe.js';
import SkillSets from './SkillSets.js';
import ProjectCards from '../ProjectCards'
import Footer from '../Footer.js';
import Navbar from '../Navbar';

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
                <Footer/>
            </div>
        )
    }
}

export default Home;