// Package imports
import React,{ useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

// CSS imports
import './Navbar.css'

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
    console.log(`path:${location.pathname}`)
  },[]);

  // ################################
  // Menu Toggling for small screen
  // ################################
  const [menuClicked,setMenuClicked] = useState(false);
  const handleMenu = () => {setMenuClicked(!menuClicked);}

  // ################################
  // Profile menu toggle (links after logged in)
  // ################################
  const [profileMenu,setProfileMenu] = useState(false);

  return (
    <div className='NavMainWrapper'>
        {/* Logo */}
        <Link href="/" className="NavLogoSpace"> Job Board </Link>

        {/* Menu For small screens */}
        {/* Wrapper for menuclicked work only on window.innerWidth < 800 */}
        <div className="NavLinkMenuWrapper">
          <div className="NavLinkMenu" onClick={() => {handleMenu()}}
          style={menuClicked ? {display:"none"} : {display:"flex"}}> Menu </div>
        </div>

        {/* Links */}
        <div className="NavLinksContainer" style={window.innerWidth > 800 || menuClicked ? {display:"flex"} : {display:"none"}}>
            <div className="NavLinkCrossBtn" onClick={() => {handleMenu()}}> X </div>
            <Link href="/" className={`NavLinkContainer ${location.pathname === "/" ? "activePath" : ""}`}> Home </Link>
            <Link href="#" className={`NavLinkContainer ${location.pathname === "/about" ? "activePath" : ""}`}> About </Link>
            <Link href="#" className={`NavLinkContainer ${location.pathname === "/contact" ? "activePath" : ""}`}> Contact </Link>
            {
                userLoggedIn ?
                <div className="NavLinksHolder">
                    <div className="NavUserName" onClick={() => {setProfileMenu(!profileMenu)}}> {userName} </div>
                    <div className="NavLinkHolderParent" style={profileMenu ? {display:"flex"} : {display:"none"}}>
                      <div className="NavLinkHolder"> Dashboard </div>
                      <div className="NavLinkHolder"> Employer </div>
                      <div className="NavLinkHolder"> settings </div>
                      <div className="NavLinkHolder logoutBtn" onClick={() => {setUserLoggedIn(false)}}> Logout </div>
                    </div>
                </div> :
                <Link href="#" className='NavLinkContainer' onClick={() => {setUserLoggedIn(true)}}> Signup </Link>
            }
        </div>
    </div>
  )
}

export default Navbar