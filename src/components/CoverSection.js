import React from 'react'
import '../App.css'
import './CoverSection.css';

function CoverSection() {
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  
  return (
    <div className='cover-container'>
      <img className="cover-img" src="/images/banner-navy.png" alt="cover-image"/>
      <h3>Seyeong Park</h3>
      <p>Web Developer</p>
    </div>
  )
}

export default CoverSection
