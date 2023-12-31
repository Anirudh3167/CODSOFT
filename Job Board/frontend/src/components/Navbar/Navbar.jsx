// Package imports
import React,{ useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

// Icons import
import {BsChevronDown,BsChevronUp} from 'react-icons/bs'

// CSS imports
import './Navbar.css'

function Navbar() {
  // Variables
  const location = useLocation();   // For Pathname.

  // ################################
  // CHECK USER IS LOGGED IN
  // ################################
  const [userLoggedIn,setUserLoggedIn] = useState(true);   // For authenticating the user.
  const [userName,setUserName] = useState("Master");
  useEffect(()=>{
    // console.log(`User Logged in : ${userLoggedIn}`);
    // console.log(`User Name: ${userName}`);
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
        <div className="NavLinkMenu" onClick={() => {handleMenu()}}
        style={menuClicked ? {display:"none"} : {}}> Menu </div>

        {/* Links */}
        <div className="NavLinksContainer" style={menuClicked ? {display:"flex"} : {}}>
            <div className="NavLinkCrossBtn" onClick={() => {handleMenu()}}> X </div>
            <Link to="/" className={`NavLinkContainer ${location.pathname === "/" ? "activePath" : ""}`}> Home </Link>
            <Link to="#" className={`NavLinkContainer ${location.pathname === "/about" ? "activePath" : ""}`}> About </Link>
            <Link to="#" className={`NavLinkContainer ${location.pathname === "/contact" ? "activePath" : ""}`}> Contact </Link>
            {
                userLoggedIn ?
                <div className="NavLinksHolder">
                    <div className="NavUserName" onClick={() => {setProfileMenu(!profileMenu)}}
                    style={{cursor:"pointer"}}> 
                      {userName} 
                      {
                        profileMenu ? <BsChevronUp style={{fontSize:"16px",margin:"0 5px"}} />
                        : <BsChevronDown style={{fontSize:"16px",margin:"5px"}} /> 
                      }
                    </div>
                    <div className="NavLinkHolderParent" style={profileMenu ? {display:"flex"} : {display:"none"}}>
                      <Link to={`/profile/${userName}`} className="NavLinkHolder"> Profile </Link>
                      <Link to="/dashboard" className="NavLinkHolder"> Dashboard </Link>
                      <Link to="/hire" className="NavLinkHolder"> Hire </Link>
                      <div className="NavLinkHolder logoutBtn" onClick={() => {setUserLoggedIn(false)}}
                      style={{cursor:"pointer"}}> Logout </div>
                    </div>
                </div> :
                <Link to="/signin" className='NavLinkContainer'> Sign in </Link>
            }
        </div>
    </div>
  )
}

export default Navbar