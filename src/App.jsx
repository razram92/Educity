import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle = 'Our Programs' title = 'What We Offer'/>
        <Program/>
        <About/>
        <Title subtitle = 'Gallery' title = 'Campus Photos'/>
        <Campus/>
        <Title subtitle = 'Testimonials' title = 'Reviews From our Folks'/>
        <Testimonials/>
        <Title subtitle = 'Contact us' title = 'Get in touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App

