import React from 'react'
import './Newpassword.css'
const Newpassword = ({signin_show,set_signin_show,show_newpass,setnewpass}) => {
    const newpasswordClose=()=>{
        setnewpass(!show_newpass)
        set_signin_show(!signin_show)

    }
    const close_newPassword=()=>{
        setnewpass(!show_newpass)
        set_signin_show(!signin_show)
    }
    return (
        <>
            <div className="mdiv">
                <div className="newpass">
                <div className="btn"><button onClick={newpasswordClose}>x</button></div>
                    <h1>Get a brand new password!</h1>
                    <div className="logininfo">
                        <label htmlFor="">What's your e-mail?</label><br />
                        <input type="email" /><br />
                    </div>
                    <button>OK</button>
                    <button onClick={close_newPassword}>Cancel</button>
                </div>
            </div>
        </>
    )
}

export default Newpassword