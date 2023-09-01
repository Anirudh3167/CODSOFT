// Package imports
import React, { useState } from 'react'

// Component imports
import Navbar from '../../components/Navbar/Navbar'

// CSS imports
import './Profile.css'

function Profile() {
  // ############################
  // USER OBJECT FUNCTIONS
  // ############################
  const [user,setUser] = useState({
    fname : "", lname : "", email : "", mobile : "",
  });
  // Updates the user object with the corresponding data
  const handleUserObj = (key,value) => {
    setUser(details => ({...details,...{key:value}}))
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
                    <div className="profileRightItem">
                        <div className="profileRightItemHead"> Mobile </div>
                        <input type="phone" className="profileInputBox"
                        onChange={(e) => {handleUserObj("mobile",e.target.value)}} 
                        readOnly={!edit} />
                    </div>
                </div>
            </div>
            <div className="ProfileHeadings"> Skills </div>
            <div className="ProfileHeadings"> Achievements </div>
            <div className="ProfileHeadings"> Experience </div>
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