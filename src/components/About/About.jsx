import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt=""  className='play-icon'/>
      </div>
      
      <div className="about-right">
        <h3>About university</h3>
        <h2>JSSATE NOIDA Uttar pradesh</h2>
        <p>JSS Academy of Technical Education is a renowned institution committed to providing quality technical education, fostering innovation,
           research, and holistic development, while preparing students for successful careers and global challenges.</p>
      </div>
    </div>
  )
}

export default About
