import React from 'react'
import './MainNavigate.css'
import {useNavigate } from 'react-router-dom'
import {HiArrowNarrowLeft } from 'react-icons/hi'

const MainNavigate = () => {
    const navigate=useNavigate();
  return (
    <div className='vtrack_bt1'>
    <button on onClick={() => { navigate("/home") }}><HiArrowNarrowLeft /><i>Back to course page</i></button>
    </div>
  )
}

export default MainNavigate