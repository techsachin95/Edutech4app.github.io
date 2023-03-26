import React from 'react'
import './Me.css'
import { Link,useNavigate} from 'react-router-dom'
const Me = () => {
    const navigate=useNavigate();
    return (
        <div className='show'>
            <Link to={"/inbox"}>Inbox</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/account"}>Account</Link>
            <button onClick={()=>navigate('/')}>Sign out</button>
        </div>
    )
}

export default Me