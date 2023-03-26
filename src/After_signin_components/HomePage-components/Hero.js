import React from 'react'
import './Hero.css'
import img1 from '../../Assets/after_signin_home1.png'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
  const navigate=useNavigate()
  return (
    <div className='hero_maindiv'>
      <div className="div1">
      <h6>Lesson series</h6>
      <h1>Learn Web Development: Step-by-step tutorials from basics to advanced</h1>
      <p>Build fully customized, mobile-responsive web pages with a solid foundation in HTML, CSS and JAVASCRIPT in this in-depth course that takes you through the fundamentals of coding to give you a head start and then lets you dive into advanced concepts.</p>
      <button onClick={()=>{navigate('/video_display')}}>Continue</button>
      </div>
    <div className="div2">
      <img src={img1} alt="img1"/>
    </div>
    </div>
  )
}

export default Hero