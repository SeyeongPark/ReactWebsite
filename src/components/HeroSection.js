import React from 'react'
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h3>Seyeong Park</h3>
      <p>Web Developer</p>
    </div>
  )
}

export default HeroSection
