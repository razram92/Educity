import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
       <h1>We Ensure the better education for better world</h1>
       <p>Edusity is an interactive educational website that provides high-quality learning resources, video 
        lectures, quizzes, and notes for students of all levels. It helps learners strengthen concepts, track progress,
         and prepare for exams efficiently. With engaging content and personalized learning paths, EduQuest makes studying simple, accessible, and enjoyable for everyone.</p>
         <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
