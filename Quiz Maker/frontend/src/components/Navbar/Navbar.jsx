// Package imports
import React,{ useState } from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

function Navbar() {
  // Variables
  const location = useLocation();   // For Pathname.

  // ################################
  // CHECK USER IS LOGGED IN
  // ################################
  const [userLoggedIn,setUserLoggedIn] = useState(false);   // For authenticating the user.
  const [userName,setUserName] = useState("Master");
  useEffect(()=>{
    console.log(`User Logged in : ${userLoggedIn}`);
    console.log(`User Name: ${userName}`);
  },[]);

  return (
    <div className='NavMainWrapper'>
        {/* Logo */}
        <div className="NavLogoSpace"> Job Board </div>

        {/* Links */}
        <div className="NavLinksContainer">
            <div className="NavLinkCrossBtn"> X </div>
            <Link href="/" className={`NavLinkContainer ${location.pathname === "" ? "active" : ""}`}> Home </Link>
            <Link href="#" className={`NavLinkContainer ${location.pathname === "/about" ? "active" : ""}`}> About </Link>
            <Link href="#" className={`NavLinkContainer ${location.pathname === "/contact" ? "active" : ""}`}> Contact </Link>
            {
                userLoggedIn ?
                <div className="NavLinksHolder">
                    <div className="NavUserName"> {userName} </div>
                    <div className="NavLinkHolder"> Dashboard </div>
                    <div className="NavLinkHolder"> Employer </div>
                    <div className="NavLinkHolder"> settings </div>
                    <div className="NavLinkHolder logoutBtn"> Logout </div>
                </div> :
                <Link href="#" className='NavLinkContainer'> Signup </Link>
            }
        </div>
    </div>
  )
}

export default Navbar