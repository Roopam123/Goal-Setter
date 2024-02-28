import React from 'react';
import img from '../../Assets/goalsetter.png';
import './NewHome.css'

const NewHome = () => {
  return (
    <div className='new-home'>
      <div className='new-home-img'><img src={img} alt="" /></div>
      <h2>Empower Your Study Goals - Track, Achieve, and Elevate Your Academic Productivity🎉</h2>
    </div>
  )
}

export default NewHome
