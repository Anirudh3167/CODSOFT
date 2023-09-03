// Package imports
import React, { useState } from 'react'

// Component imports
import Navbar from '../../components/Navbar/Navbar'

// CSS imports
import './Profile.css'

// icon imports
import { AiFillGithub,AiFillInstagram } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs';

function Profile() {
  // ############################
  // USER OBJECT FUNCTIONS
  // ############################
  const [user,setUser] = useState({
    fname : "", lname : "", email : "", mobile : "", dob : "", github : "", discord : "",
    insta : "", skills : [], experience : [], projects : []
  });
  // Updates the user object with the corresponding data
  const handleUserObj = (key_name,value) => {
    let obj = {};
    obj[key_name] = value;
    setUser(user => ({...user,...obj}))
  }
  // ############################
  // EDIT FUNCTIONS
  // ############################
  const [edit,setEdit] = useState(false);
  const saveDetails = () => {
    // Any checks on data to be done.
    // <-- -->
    setEdit(false);

    console.log(user);
  }
  
  // ############################
  // PROFILE PIC 
  // ############################
  const [profilePic,setProfilePic] = useState();
  const uploadProfile = () => {
        if (edit) {
            var elem = document.getElementById('ProfilePic');
            elem.click();
        }
  }
  return (
    <div className='ProfileWrapper'>
        <Navbar />
        <div className="ProfileMainContainer">
            <div className="ProfileHeadings"> User Details </div>
            {/* First Profile Division */}
            <div className="ProfileDivision">
                <div className="ProfileLeftContainer">
                    <div className="ProfileImageContainer">
                        {
                            profilePic ? 
                            <img src={URL.createObjectURL(profilePic)} alt="" style={{width:"160px",height:"160px"}} />
                            :
                            <div className="ProfileImageUploadCover" onClick={() => {uploadProfile();}}> Upload </div>
                        }
                        <input type="file" style={{display:"none"}} id='ProfilePic' accept='image/*'
                        onChange={(e) => {setProfilePic(e.target.files[0])}} />
                    </div>
                </div>
                <div className="ProfileRightContainer">
                    <div className="profileRightItem">
                        <div className="profileRightItemHead"> First Name </div>
                        <input type="text" className="profileInputBox" 
                        onChange={(e) => {handleUserObj("fname",e.target.value)}}
                        readOnly={!edit} />
                    </div>
                    <div className="profileRightItem">
                        <div className="profileRightItemHead"> Last Name </div>
                        <input type="text" className="profileInputBox"
                        onChange={(e) => {handleUserObj("lname",e.target.value)}} 
                        readOnly={!edit} />
                    </div>
                    <div className="profileRightItem" style={{width:"100%",minWidth:"280px",maxWidth:"500px"}}>
                        <div className="profileRightItemHead"> Email </div>
                        <input type="email" className="profileInputBox"
                        onChange={(e) => {handleUserObj("email",e.target.value)}} 
                        readOnly={!edit} />
                    </div>
                </div>
            </div>
            {/*  Bio */}
            <div className="ProfileHeadings" style={{fontSize:"20px",fontWeight:"400",width:"100%",alignItems:"center"}}> Bio </div>
            <textarea placeholder='A Job Board User' className="ProfileBio"
            onChange={(e) => {handleUserObj("mobile",e.target.value)}} 
            readOnly={!edit} style={edit ? {border:"1px solid rgb(140,140,140)",textAlign:"left"} : {border:"0"}}></textarea>
            {/* Personal Details */}
            <div className="ProfileHeadings"> Personal Details </div>
            <div className="ProfilePersonalContainer">
                    <div className="profileRightItem">
                        <div className="profileRightItemHead"> Mobile </div>
                        <input type="tel" className="profileInputBox"
                        onChange={(e) => {handleUserObj("mobile",e.target.value)}} 
                        readOnly={!edit} />
                    </div>
                    <div className="profileRightItem">
                        <div className="profileRightItemHead"> Date of Birth </div>
                        <input type="date" className="profileInputBox"
                        onChange={(e) => {handleUserObj("dob",e.target.value)}} 
                        readOnly={!edit} />
                    </div>
            </div>
            {/* Social Links */}
            <div className="ProfileHeadings"> Social Links </div>
            <div className="ProfilePersonalContainer">
                <div className="ProfileSocialItem">
                    <div className="ProfileSocialLinkHead"> 
                       <AiFillGithub style={{fontSize:"20px",margin:"0 5px"}} /> Github </div>
                    <input type="url" className='ProfileUrlInputBox'
                        placeholder='Your Github Link'
                        onChange={(e) => {handleUserObj("github",e.target.value)}} readOnly={!edit} 
                        style={edit ? {color:'black',border:'1px solid rgb(140,140,140)'} : {color:"blue",cursor:"pointer"}} />
                </div>
                <div className="ProfileSocialItem">
                    <div className="ProfileSocialLinkHead"> 
                       <BsDiscord style={{fontSize:"20px",margin:"0 5px"}} /> Discord </div>
                    <input type="url" className='ProfileUrlInputBox'
                        placeholder='Your Discord Link'
                        onChange={(e) => {handleUserObj("discord",e.target.value)}} readOnly={!edit} 
                        style={edit ? {color:'black',border:'1px solid rgb(140,140,140)'} : {color:"blue",cursor:"pointer"}} />
                </div>
                <div className="ProfileSocialItem">
                    <div className="ProfileSocialLinkHead"> 
                       <AiFillInstagram style={{fontSize:"20px",margin:"0 5px"}} /> Instagram </div>
                    <input type="url" className='ProfileUrlInputBox'
                        placeholder='Your Insta Link'
                        onChange={(e) => {handleUserObj("insta",e.target.value)}} readOnly={!edit} 
                        style={edit ? {color:'black',border:'1px solid rgb(140,140,140)'} : {color:"blue",cursor:"pointer"}} />
                </div>
            </div>
            {/* Company */}
            <div className="ProfileHeadings"> Company </div>
            <div className="ProfileCompanyContainer">
            <div className="ProfileBtn" style={{marginLeft:"20px",width:"150px",color:"white",backgroundColor:"blue"}}> Add New </div>
                        {/* Rest of the Content Here */}
            </div>
            {/* Skills */}
            <div className="ProfileHeadings"> Skills </div>
            <div className="ProfileCompanyContainer">
            <div className="ProfileBtn" style={{marginLeft:"20px",width:"150px",color:"white",backgroundColor:"blue"}}> Add New </div>
            
            <div className="ProfileSkillsContainer">
                Skills here
            </div>
            </div>
            {/* Projects */}
            <div className="ProfileHeadings"> Projects </div>
            <div className="ProfileCompanyContainer">
            <div className="ProfileBtn" style={{marginLeft:"20px",width:"150px",color:"white",backgroundColor:"blue"}}> Add New </div>
                        {/* Rest of the Content Here */}
            </div>
            {/* Experience */}
            <div className="ProfileHeadings"> Experience </div>
            <div className="ProfileCompanyContainer">
            <div className="ProfileBtn" style={{marginLeft:"20px",width:"150px",color:"white",backgroundColor:"blue"}}> Add New </div>
                        {/* Rest of the Content Here */}
            </div>
            {/* Resume */}
            <div className="ProfileHeadings"> Resume </div>
            <div className="ProfileCompanyContainer" style={{justifyContent:"center",alignItems:"center",border:"3px solid blue",borderStyle:"dashed",borderRadius:"10px"}}>
                        Resumer Upload Space
                        {/* Rest of the Content Here */}
            </div>

            {/* Profile Buttons */}
            <div className="ProfileBtnsWrapper">
                {edit ? 
                <div className="ProfileBtn" style={{background:"rgba(230,230,230,0.9)",color:"black"}}
                onClick={() => {saveDetails()}}> Save Details </div>
                :
                <div className="ProfileBtn" onClick={() => {setEdit(true)}}> Edit Details </div>
                }
                {edit ? <div className="ProfileBtn" style={{background:"red",color:"white"}}
                onClick={() => {setEdit(false)}}> Cancel </div>
                    : (
                        <div className="ProfileBtn"> Change Password </div>
                        )
                    }
                {!edit && <div className="ProfileBtn" style={{background:"red",color:"white"}}> Logout </div>}
            </div>
        </div>
    </div>
  )
}

export default Profile