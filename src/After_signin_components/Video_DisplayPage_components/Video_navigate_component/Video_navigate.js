import React from 'react'
import './Video_navigate.css'
import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
const Video_navigate = ({showvideo1,setshowvideo1}) => {
    const navigate=useNavigate();
  return (
    <div className='navigate_navbar'>
        <div className="btn1">
            <button onClick={()=>{showvideo1 && navigate(-1)}}><FaAngleLeft/>Previous</button>
        </div>
        <div className="btn2">
        <button onClick={()=>{navigate('/path')}}>Next<FaAngleRight/></button>
        </div>
    </div>
  )
}

export default Video_navigate