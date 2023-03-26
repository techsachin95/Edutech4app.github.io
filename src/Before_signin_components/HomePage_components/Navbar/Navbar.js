import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
import Signin from '../../../Pages/Before_signin/Signin'
import Signup from '../../../Pages/Before_signin/Signup'
const Navbar = ({signin1,signout1}) => {
    const [signin_show,set_signin_show]=useState(false)
    const [signup_show,set_signup_show]=useState(false)

    const signin=()=>{
        set_signin_show(true)
        
    }
    const signup=()=>{
        set_signup_show(true)
    }
    return (
        <>
            <nav>
                <div className="logo">
                <Link to={"/"}>Edutech<sup className='sup'>&reg;</sup></Link>
                </div>
                <div className='navbarlinks'>
                <Link to={"/"}>Home</Link>
                <Link to={"/before_signin_courses"}>Courses</Link>
                <Link to={"/before_signin_contact_us"}>Contact Us</Link>
                <Link to={"/before_signin_about_us"}>About Us</Link>
                </div>
                <div className="btn">
                <button onClick={signin}>Signin</button>
                {signin_show && <Signin signin_show={signin_show} set_signin_show={set_signin_show}/>}
                <button onClick={signup} className='signup1'>SignUp</button>
                {signup_show && <Signup signup_show={signup_show} set_signup_show={set_signup_show}/>}
                </div>
            </nav>
        </>
    )
}

export default Navbar