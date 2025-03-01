import { useState } from 'react'
import './LoginPopUp.css'
import {assets} from '../../assets/assets'

// eslint-disable-next-line react/prop-types
const LoginPopUp = ({setShowLogin}) => {
    const [currState, setCurrState] = useState('Sign Up')
    return (
        <div className='login-popup'>
<form className='login-popup-container'>
    <div className="login-popup-title">
        <h2>
            {currState}
        </h2>
        <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
    </div>
    <div className="login-popup-input">
        {currState !== "Login" && <input type="text" placeholder='Your name' required/>}
        {/* <input type="text" placeholder='Your name' required/> */}
        <input type="email" placeholder='Your email' required/>
        <input type="password" placeholder='Your password' required/>
    </div>
    <button>{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>
    <div className="login-popup-condition">
        <input type="checkbox" required />
        <p>I accept all terms and conditions</p>
    </div>
    {currState === "Login" ?  <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>: <p onClick={() => setCurrState('Login')}>Already have an account? <span >Login</span></p>}
   
   
</form>
        </div>
    )
}

export default LoginPopUp