import React from 'react';
import './Photos.css'

export default function Photos() {
    return (
        <div className="container">
            <div className="photo-description">
                <h4>I enjoy taking <em className="em-photo">photo</em></h4>
                <p>When I catch beautiful sights in daily life, I bring up my camera and take a shot of the beauty. In my leisure time, I love to bring my camera, and go out to the forest, streets, and other nice places! Great photos always give me great inspiration about this life.  </p>
            </div>
            <div className="gallery">

                <div className='gallery-item'>
                    <img className='gallery-image' src='images/photo1.jpeg' alt='photo1.jpeg' />
                </div>
                <div className='gallery-item'>
                    <img className='gallery-image' src='images/photo2.jpeg' alt='photo2.jpeg' />
                </div>
                <div className='gallery-item'>
                    <img className='gallery-image' src='images/photo3.jpeg' alt='photo3.jpeg' />
                </div>
                <div className='gallery-item'>
                    <img className='gallery-image' src='images/photo4.jpeg' alt='photo4.jpeg' />
                </div>
            </div>

        </div>
    )
}