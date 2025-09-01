import React from 'react'
import './Abouts.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';


const Abouts = () => {
  return (
    // https://www.youtube.com/watch?v=WbV3zRgpw_E
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='about-icon' />
      </div>
      <div className="about-right"></div>
    </div>
  )
}

export default Abouts
