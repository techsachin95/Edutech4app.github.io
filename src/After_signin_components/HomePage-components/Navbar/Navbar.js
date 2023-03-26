import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import {FaAngleDown} from 'react-icons/fa'
import Me from './Me/Me';
import './Navbar.css'
const Navbar = () => {
  const [show,setshow]=useState(false);
  const navbardropdown=()=>{
    setshow(!show);
  }
  return (
    <>
    <div className='after_Signin_Navbar'>
      <div className="logo">
      <Link to={"/home"}>Edutech<sup>&reg;</sup></Link>
      </div>
      <div className="links">
      <Link to={"/starts"}>Starts</Link>
      <Link to={"/courses"}>Courses</Link>
      <button onClick={navbardropdown}>Me<sub><FaAngleDown/></sub></button>
      </div>
    </div>
    {show && <Me/>}

    </>
  )
}

export default Navbar