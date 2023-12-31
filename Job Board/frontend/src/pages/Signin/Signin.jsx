// Package Imports
import React,{ useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Icons
import {FcGoogle} from 'react-icons/fc'
import { BsEye, BsEyeSlash } from 'react-icons/bs';

// CSS imports
import './Signin.css'

function Signin() {
  // ######################################
  // FOR ROUTER PURPOSE 
  // ######################################
  const router = useNavigate();
  
  // ######################################
  // STORING THE DATA
  // ######################################
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [showPassword,setShowPassword] = useState(false);
  
  // ######################################
  // HANDLING THE DATA BEFORE SUBMITTING
  // ######################################
  const handleSubmit = () => {
    const msg = email === "" ? "Invalid Email" :
                password === "" ? "Invalid Password" : "";
    
    if (msg !== "") {alert(msg);}
    else {
        const data = {email,password}

        // Send the data to the backend.
        console.log(data);
        
        router("/");
    }
  }
  return (
    <div className='SigninWrapper'>
        {/* Upper Text */}
        <div className="SigninMainContainer">
            <div className="SigninHello"> Hello again </div>
            <div className="SigninWelcomeMessage">
                Welcome back. Please sign in to continue
            </div>
        {/* OAuth Buttons */}
            <div className="SigninOauthWrapper">
                <div className="SigninOAuthBtn"> 
                    <FcGoogle style={{fontSize:"24px",margin:"0px 10px"}} />
                    Sign in with Google 
                </div>
                <div className="SigninOr"> or </div>
            </div>
        {/* Input Contanier */}
            <div className="SigninInputWrapper">
                <div className="SigninInputContainer">
                    <input type="email" className='SigninInputBox' placeholder='Email' 
                    onChange={(e)=>{setEmail(e.target.value)}} value={email} />
                </div>
                <div className="SigninInputContainer">
                    <input className='SigninInputBox'
                    placeholder='Password' style={{paddingRight:"40px"}}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    type={showPassword ? "text" : "password"} value={password} />
                    {
                        password!=="" && (showPassword ?
                        <BsEye className='passwordIcon' onClick={()=>{setShowPassword(!showPassword)}} /> 
                        : <BsEyeSlash className='passwordIcon' onClick={()=>{setShowPassword(!showPassword)}} />
                        )
                    }
                </div>
                <div className="SigninRememberContainer">
                    <div className="SigninRemeber">
                        <input type="checkbox" className='SigninCheckBox' name='rememberMe' />
                        <label htmlFor="rememberMe" className='rememberMe'> Remember me </label>
                    </div>
                    <Link href="/" className="SigninForgotPassword"> Forgot Password? </Link>
                </div>
            </div>
        {/* Sign In */}
            <div className="SigninButton" onClick={() => {handleSubmit()}}> Sign in </div>
        {/* Sign up */}
            <div className="SignupContainer">
                Doesn't have an account?
                <Link to="/signup" className="SigninForgotPassword"> Sign up</Link>
            </div>
        </div>
    </div>
  )
}

export default Signin