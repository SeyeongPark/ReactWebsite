import React from 'react';
import './Photos.css'


export default function Photos() {
    return (
        <div className="container">
            <h1 className="title">Photos</h1>

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