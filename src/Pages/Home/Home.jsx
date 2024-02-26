import React from 'react';
import './Home.css';
import goalsetter from '../../Assets/goalsetter.png'

const Home = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
      <span>Empower Your Study Goals - Track, Achieve, and Elevate Your Academic Productivity.</span>
      <span>Designed for students, our platform enables you to set daily study goals, monitor hours, and analyze productivity. Begin your journey to academic excellence and smarter time management today.</span>
      </div>
      <div className="hero-right">
        <img src={goalsetter} alt="" />
      </div>
    </div>
  )
}

export default Home
