import React from 'react'
import './Signup.css'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { AiFillApple, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import Signin from './Signin'
import {useNavigate} from 'react-router-dom'
const Signup = ({ show_newpass,setnewpass,signup_show,set_signup_show,signin_show,set_signin_show,show_signup, setsign_up }) => {
  const navigate=useNavigate()
  const signupClose = () => {
    setsign_up(!show_signup)
    set_signin_show(!signin_show)
  }
  const signupClose1=()=>{
    set_signup_show(!signup_show)
  }
  const showsignin=()=>{
    setsign_up(true)
  }
  const showsignin1=()=>{
    setsign_up(false)
    // set_signin_show(true)

  }
  const getnewpassword=()=>{
    setnewpass(!show_newpass)
    set_signup_show(false)
    set_signin_show(false)

  }
  const getnewpassword1=()=>{
    console.log('hi')
    // setnewpass(true)
    // set_signup_show(true)
    // set_signin_show(false)

  }
  return (
    <>
      <div className="mdiv">
        <div className="signup">
          {
            signin_show && <div className="btn"><button onClick={signupClose}>x</button></div>
          }
          {
            signup_show && <div className="btn"><button onClick={signupClose1}>x</button></div>
          }
          <h1>Sign up to Edutech!</h1>
          <div className="social_link">
            <div><a href="#"><FaFacebookF /></a></div>
            <div><a href="#"><AiOutlineTwitter /></a></div>
            <div><a href="#"><AiFillLinkedin /></a></div>
            <div><a href="#"><FcGoogle /></a></div>
            <div><a href="#"><AiFillApple /></a></div>
          </div>
          <span><sup>_</sup> Or <sup>_</sup></span>
          <div className="logininfo">
            <label htmlFor="">What's your e-mail?</label><br />
            <input type="email" /><br />
            <label htmlFor="">Your password?</label><br />
            <input type="password" /><br />
            <input type="submit" value='Login' />
          </div>
        
          {
            signin_show && <button onClick={showsignin1}>Sign in with your account</button>
          }
          {
            signup_show && <button onClick={showsignin}>Sign in with your account1</button>

          }
          {
            signin_show && <button onClick={getnewpassword}>Forgot your password?</button>

          }
          {
            signup_show && <button onClick={getnewpassword1}>Forgot your password?1</button>

          }
        </div>
      </div>

    </>
  )
}

export default Signup