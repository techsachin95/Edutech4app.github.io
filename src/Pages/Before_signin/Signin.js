import React from 'react'
import './Signin.css'
import {FaFacebookF} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import {AiFillApple,AiFillLinkedin,AiOutlineTwitter} from 'react-icons/ai'
import {useState} from 'react'
import Signup from './Signup'
import Newpassword from './Newpassword'
import { useNavigate } from 'react-router-dom'
import Home from '../After_signin/Home'
const Signin = ({signin_show,set_signin_show}) => {
    const navigate=useNavigate();
    const [show_signup,setsign_up]=useState(false);
    const [show_newpass,setnewpass]=useState(false);

    const signup=()=>{
        // set_signin_show(false)
        setsign_up(true)
        setnewpass(false)
        
    }
    const signinClose=()=>{
        set_signin_show(!signin_show)
    }
    const getnew_password=()=>{
        setnewpass(true)
        setsign_up(false)
    }
    
    const loginshow=()=>{
        navigate('/home')
    }
  return (
    <>
    <div className="mdiv">
    <div className="signin">
        <div className="btn"><button onClick={signinClose}>x</button></div>
        <h1>Login or sign up to start learning</h1>
        <div className="social_link">
            <div><a href="#" className='fac'><FaFacebookF/></a></div>
            <div><a href="#"><AiOutlineTwitter/></a></div>
            <div><a href="#"><AiFillLinkedin/></a></div>
            <div><a href="#"className='gog'><FcGoogle/></a></div>
            <div><a href="#"><AiFillApple/></a></div>
        </div>
        <span><sup>_</sup> Or <sup>_</sup></span>
        <div className="logininfo">
            <label htmlFor="">What's your e-mail?</label><br />
            <input type="email" /><br />
            <label htmlFor="">Your password?</label><br />
            <input type="password" /><br />
            <input type="submit" value='Login' onClick={loginshow}/>
        </div>
        <button onClick={signup}>Create Account</button>
        {show_signup && <Signup show_newpass={show_newpass} setnewpass={setnewpass} signin_show={signin_show} set_signin_show={set_signin_show} show_signup={show_signup} setsign_up={setsign_up}/>}
        <button onClick={getnew_password}>Forgot your password?</button>
        {show_newpass && <Newpassword signin_show={signin_show} set_signin_show={set_signin_show} show_newpass={show_newpass} setnewpass={setnewpass}/>}
    </div>
    </div>
    </>
  )
}

export default Signin