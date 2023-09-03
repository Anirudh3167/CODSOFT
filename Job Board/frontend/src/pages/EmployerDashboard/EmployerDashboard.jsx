// Package imports
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// Component imports
import Navbar from '../../components/Navbar/Navbar'

// Icon imports
import { GoSearch } from 'react-icons/go'
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri'

// CSS imports
import './EmployerDashboard.css'
import '../Job/Job.css'
import { AiOutlineRight } from 'react-icons/ai';

function EmployerDashboard() {
  // #############################
  // SEARCH FUNCTIONAILTY
  // #############################
  const [search,setSearch] = useState("");
  const handleSearch = () => {
    console.log(search);
  }

  // #############################
  // JOB POSTINGS
  // #############################
  const [prevHirings,setPrevHirings] = useState([
    {id:"1","company":"ABC","role":"Web Dev intern","salary":"$500",open:"34",applied:"76"},
    {id:"2","company":"ABC","role":"ML intern","salary":"$400",open:"34",applied:"76"},
    {id:"3","company":"ABC","role":"Android Dev intern","salary":"$550",open:"34",applied:"76"},
    {id:"4","company":"ABC","role":"Android Dev intern","salary":"$550",open:"34",applied:"76"},
    {id:"5","company":"ABC","role":"Android Dev intern","salary":"$550",open:"34",applied:"76"},
    {id:"6","company":"ABC","role":"Android Dev intern","salary":"$550",open:"34",applied:"76"},
    {id:"7","company":"SpaceX","role":"Web Dev intern","salary":"$5000",open:"34",applied:"76"},
    {id:"8","company":"ABC","role":"ML intern","salary":"$400",open:"34",applied:"76"},
    {id:"9","company":"ABC","role":"Android Dev intern","salary":"$550",open:"34",applied:"76"},
  ])
  const deleteJob = (jobId) => {
    setPrevHirings(prevHirings.filter(prevElem => 
                    {return prevElem.id !== jobId;}
                    )
    );
  }
  return (
    <div className='EmployerDashboardWrapper'>
        <Navbar />
        <div className="EmployerDashboardContainer">
            {/* Search Container */}
            <div className="EmployerDashboardTop">
                <div className="EmployerDashboardSearchContainer">
                    <input type="text" className='DashboardSearchBox'
                    placeholder='Search here...'
                    onChange={(e) => {setSearch(e.target.value)}} />
                    <GoSearch className='DashboardSearchBtn' onClick={() => {handleSearch()}} />
                </div>
            </div>
            {/* Create new Job Post */}
            <Link to="/" className="JobApplyBtn" style={{width:"200px"}}> create new job </Link>
            {/* Emploer Job Posts */}
                <div className="JobPageTitleContainer" style={{padding:"0 20px"}}> Previous Hirings </div>
            <div className="EmployerDashboardResultsContainer">
                {
                    prevHirings.length !== 0 ?
                    <div className="EmployerDashboardResult">
                        {
                            prevHirings.map((job,index) => {
                                return (
                                    <div className="EmployerDashboardJobContainer" key={index}>
                                        {/* Delete Job Btn */}
                                        <div className="EmployerDashboardJobDeleteBtn" onClick={() => {deleteJob(job.id)}}>
                                            <RiDeleteBinLine style={{fontSize:"20px"}} />
                                        </div>
                                        <div className="JobRole" style={{fontSize:"20px"}}>
                                                {job.role}
                                        </div>
                                        <div className="JobCompanyName" style={{fontSize:"16px",fontWeight:"500"}}>
                                                {job.company}
                                        </div>
                                        <div className="JobStats">
                                            <div className="JobStatsItem">
                                                available positions : {job.open}
                                            </div>
                                            <div className="JobStatsItem">
                                                Applications : {job.applied}
                                            </div>
                                        </div>
                                        <div className="JobAbout" style={{flexDirection : "row",alignItems:"center"}}> 
                                            <div className="JobPageTitleContainer" style={{fontSize:"16px",width:"120px"}}>Salary </div>
                                            <div className="JobStats" style={{fontSize:"14px"}}>
                                            <FaRegMoneyBillAlt style={{margin:" 0 10px",alignItems:"center"}} /> {job.salary}/month 
                                            </div>
                                        </div>
                                        <Link to={`/jobs/${index}`} className="EmployerDashboardJobViewBtn"> View Details <AiOutlineRight style={{fontSize:"18px"}} /> </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    :    "Loading..."
                }
            </div>
        </div>
    </div>
  )
}

export default EmployerDashboard