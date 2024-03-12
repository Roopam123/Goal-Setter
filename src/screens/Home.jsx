import React from 'react';
import img from '../assets/goalsetter.png';
import styles from  '../styles/home.module.css'

const NewHome = () => {
  return (
    <div className={styles.new_home}>
      <div className={styles.new_home_img}><img src={img} alt="" /></div>
      <h2>Empower Your Study Goals - Track, Achieve, and Elevate Your Academic Productivity🎉</h2>
    </div>
  )
}

export default NewHome
