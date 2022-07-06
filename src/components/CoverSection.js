import React from 'react'
import '../App.css'
import './CoverSection.css';

function CoverSection() {
  return (
    <div className='cover-container'>
      <img className="cover-img" src="/images/banner-navy-1.png" alt="cover-image"/>
      <h3>Seyeong Park</h3>
      <p>Web Developer</p>
      <section id="scroll" class="demo">
        <a href="#aboutme"><span></span>Scroll Down</a>
      </section>
    </div>
  )
}

export default CoverSection
