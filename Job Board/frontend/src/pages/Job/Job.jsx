// Package imports
import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

// Icon imports
import {IoLocationOutline} from 'react-icons/io5'
import {FaRegMoneyBillAlt} from 'react-icons/fa'
import {AiOutlineCalendar, AiOutlineFieldTime} from 'react-icons/ai'

// Components imports
import Navbar from '../../components/Navbar/Navbar'

// CSS imports
import './Job.css'

function Job() {
  const [jobDetails,setJobDetails] = useState(
    {company:"SpaceX",Role:"Software Developer",duration:"6 months", available : "36"
    ,location:"California, USA",type:"full time",salary:"$5000", appliedNumber : "74"
    ,copmanyUrl : "http://github.com/Anirudh3167",companyDesc:"A fake company. Dont apply"
    ,jobDesc: "Stay still but not to die is the only task you need to do"
    ,questions:["Why Should we hire you?","Do you have any prior experience?",
                "Link of your best project realted to the software development."]}
  )
  // #############################
  // EMPLOYER
  // #############################
  const [isEmployer,setIsEmployer] = useState(false);
  
  // #############################
  // EMPLOYER
  // #############################
  const [applied,setApplied] = useState(false);

  return (
    <div className='JobWrapper'>
        <Navbar />
        <div className="JobMainContainer">
            {/* Cover Photo */}
            <div className="JobCoverPage">
                <div className="JobCompanyLogo"> N.A. </div>
            </div>
            {/* Sub Container to partition the application form and details */}
            <div className="JobSubContainer">     
                {/* Holds the Job Descriptions */}
                <div className="JobLeftContainer">    
                    <div className="JobCompanyName"> {jobDetails.company} </div>
                    <div className="JobRole"> {jobDetails.Role} </div>
                    <div className="JobTags">
                        <div className="JobTag" style={{backgroundColor:"rgba(210,80,20,0.7)"}}>
                            <AiOutlineCalendar style={{fontSize:"18px",margin:"0 5px"}} />
                            {jobDetails.duration}
                        </div>
                        <div className="JobTag" style={{backgroundColor:"rgba(230,150,20,0.9)"}}>
                            <IoLocationOutline style={{fontSize:"18px",margin:"0 5px"}} />
                            {jobDetails.location}
                        </div>
                        <div className="JobTag" style={{backgroundColor:"rgba(100,230,20,0.7)"}}>
                            <AiOutlineFieldTime style={{fontSize:"18px",margin:"0 5px"}} />
                            {jobDetails.type}
                        </div>
                    </div>
                    <div className="JobStats">
                        <div className="JobStatsItem">
                            available positions : {jobDetails.available}
                        </div>
                        <div className="JobStatsItem">
                            Applications : {jobDetails.appliedNumber}
                        </div>
                    </div>

                    {/* Wrapper is to keep button width fixed and aligned to left */}
                    {
                        isEmployer ?
                        <div className="EmployerViewBtnWrapper">
                            <Link to="/" className="EmployerOptionViewBtn"> View Applications </Link>
                        </div> : ""
                    }
                    
                    <div className="JobAbout"> 
                        <div className="JobPageTitleContainer">Salary </div>
                        <div className="JobStats">
                           <FaRegMoneyBillAlt style={{margin:" 0 10px"}} /> {jobDetails.salary}/month 
                        </div>
                    </div>
                    <div className="JobAbout">
                        <div className="JobPageTitleContainer">About the company</div>
                        <Link to={jobDetails.copmanyUrl} target='_blank'
                        className="CompanyLinks"> {jobDetails.copmanyUrl} </Link>
                        <div className="JobDesc"> {jobDetails.companyDesc} </div>
                    </div>
                    <div className="JobAbout">
                        <div className="JobPageTitleContainer">About the Position </div>
                        <div className="JobDesc"> {jobDetails.companyDesc} </div>
                    </div>
                </div>
                {/* Application Form */}
                <div className="JobApplication" style={isEmployer ? {display:"none"} : {}}>
                    <div className="JobPageTitleContainer"> Application </div>
                    {
                        !applied && jobDetails.questions.map((question,index) => {
                            return (
                                <div className="jobQuestionContainer" key={index}>
                                    <div className="JobQuestion">{question}</div>
                                    <textarea className='JobAnswer'></textarea>
                                </div>
                            )
                        })
                    }
                    {
                        applied ? 
                        <div className="JobApplied">
                            <div className="JobDesc">You have already Applied</div>
                            <div className="JobApplyBtn"> View Application </div>
                        </div>

                        :   <div className="JobApplyBtn"> Apply </div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Job