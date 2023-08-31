// Package Imports
import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

// Icons
import {FcGoogle} from 'react-icons/fc'

// CSS imports
import './Signin.css'

function Signin() {
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
                    <input type="email" className='SigninInputBox' placeholder='Email' />
                </div>
                <div className="SigninInputContainer">
                    <input type="password" className='SigninInputBox' placeholder='Password' />
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
            <div className="SigninButton"> Sign in </div>
        {/* Sign up */}
            <div className="SignupContainer">
                Don't have an account?
                <Link href="#" className="SigninForgotPassword"> Sign up</Link>
            </div>
        </div>
    </div>
  )
}

export default Signin