import React from 'react';
import './Compus.css';
import gallery1_icon from '../../assets/gallery-1.png';
import gallery2_icon from '../../assets/gallery-2.png';
import gallery3_icon from '../../assets/gallery-3.png';
import gallery4_icon from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white-arrow.png';

const Compus = () => {
  return (
    <div className="compus">
      <div className="gallery">
        <img src={gallery1_icon} alt="" />
        <img src={gallery2_icon} alt="" />
        <img src={gallery3_icon} alt="" />
        <img src={gallery4_icon} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Compus
