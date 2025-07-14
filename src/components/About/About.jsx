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
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, numquam repudiandae reiciendis laborum ullam iste quaerat architecto fugiat 
            cupiditate assumenda sint culpa excepturi autem! Praesentium accusantium itaque accusamus in pariatur?</p>
      </div>
    </div>
  )
}

export default About
