// Package imports
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Component imports
import Navbar from '../../components/Navbar/Navbar'

// Icon imports
import {GoSearch} from 'react-icons/go'
import {FiFilter} from 'react-icons/fi'
import {IoLocationOutline} from 'react-icons/io5'
import {FaRegMoneyBillAlt} from 'react-icons/fa'
import {AiOutlineCalendar,AiOutlineRight} from 'react-icons/ai'

// Styles imports
import './CustomerDashboard.css'

function CustomerDashboard() {
  // #######################################
  // FILTER TOGGLE FOR SMALL SCREENS
  // #######################################
  const [showFilter,setShowFilter] = useState(false)
  
  // #######################################
  // SEARCH RESULTS (/DEFAULT)
  // #######################################
  const [serach,setSearch] = useState("");
  const [jobs,setJobs] = useState([
    {"company":"ABC","role":"Web Dev intern","salary":"$500"},
    {"company":"ABC","role":"ML intern","salary":"$400"},
    {"company":"ABC","role":"Android Dev intern","salary":"$550"},
    {"company":"ABC","role":"Android Dev intern","salary":"$550"},
    {"company":"ABC","role":"Android Dev intern","salary":"$550"},
    {"company":"ABC","role":"Android Dev intern","salary":"$550"},
    {"company":"SpaceX","role":"Web Dev intern","salary":"$5000"},
    {"company":"ABC","role":"ML intern","salary":"$400"},
    {"company":"ABC","role":"Android Dev intern","salary":"$550"},
  ])
  const handleSearch = () => {
    // Search will be done with both search input and filter values.
    console.log(serach);
    console.log(duration);
  }
  
  // #######################################
  // FILTER VALUES
  // #######################################
  const [minSalary,setMinSalary] = useState(0);
  const [location,setLocation] = useState("");
  const [jobRole,setJobRole] = useState("");
  const [jobType,setJobType] = useState(["part time","full time"]);
  const [duration,setDuration] = useState(["1","2","3","4","5","6","7"]);
  const handleReset = () => {
    setMinSalary(0);
    setLocation("");
    setJobRole("");
    setJobType();
    setDuration();
  }
  // Helper functions to add or remove elements
  const handleJobType = (checked,element) => {
    checked ? setJobType(prev => [...prev,element]) : 
    setJobType(prev => prev.filter(prevJobtype => prevJobtype !== element))
  }
  const handleDuration = (checked,element) => {
    checked ? setDuration(prev => [...prev,element]) : 
    setDuration(prev => prev.filter(prevJobtype => prevJobtype !== element))
  }
  // Adding a duration object to reduce the code length
  let durationObject = [];
  for(let i = 1; i <=7; i++) {
    durationObject.push(
      <div className="OptionCheckboxContainer">
          <input type="checkbox" id={`${i} Month`} defaultChecked name={`${i} Month`} 
          onChange={(e)=>{handleDuration(e.target.checked,i.toString())}}
            style={{width:"15px",height:"15px",margin:"0 10px"}} />
          <label htmlFor={`${i} Month`}> {i} Month </label>
      </div>
    )
  }
  return (
    <div className='DashboardWrapper'>
      <Navbar />
      <div className="DashboardMainContainer">
        {/* Filter Container (Left Container) */}
        <div className="DashboardLeft" style={showFilter ? {display:"flex"} : {}}>
          <div className="DashboardLeftFilterCross"
          onClick={() => {setShowFilter(false)}}> X </div>
          <div className="FilterResetBtn" onClick={() => {handleReset()}}> Reset </div>
          <div className="FilterResetBtn" onClick={() =>{handleSearch()}}
          style={{margin:"10px 0",backgroundColor:"blue",color:"white"}}> Apply </div>
          {/* Salary */}
          <div className="FilterOptionContainer">
            <div className="FilterOptionHead"> Salary </div>
            <div className="FilterOptionContent"> {minSalary} - 1000 </div>
            <input type="range" min="0" max={`1000`} className='FilterPriceRange' 
            onChange={(e) => {setMinSalary(e.target.value)}} value={minSalary} />
          </div>
          {/* Role */}
          <div className="FilterOptionContainer">
            <div className="FilterOptionHead"> Role </div>
            <input type="text" className='inputBox' onChange={(e) => {setJobRole(e.target.value)}}
            style={{width:"100%",height:"30px",border:"1px solid black"}}
            value={jobRole} />
          </div>
          {/* Location */}
          <div className="FilterOptionContainer">
            <div className="FilterOptionHead"> Location </div>
            <input type="text" className='inputBox' onChange={(e) => {setLocation(e.target.value)}}
            style={{width:"100%",height:"30px",border:"1px solid black"}} 
            value={location} />
          </div>
          {/* Job Type */}
          <div className="FilterOptionContainer">
            <div className="FilterOptionHead"> Job Type </div>
            <div className="FilterOptionContent">
              <div className="OptionCheckboxContainer">
                  <input type="checkbox" id='Part Time' name='Part Time' defaultChecked
                  onChange={(e)=>{handleJobType(e.target.checked,"part time")}}
                  style={{width:"15px",height:"15px",margin:"0 10px"}} />
                  <label htmlFor="Part Time"> Part Time </label> <br />
                </div>
              <div className="OptionCheckboxContainer">
                  <input type="checkbox" id='Full Time' name='Full Time' defaultChecked
                  onChange={(e)=>{handleJobType(e.target.checked,"full time")}}
                    style={{width:"15px",height:"15px",margin:"0 10px"}} />
                  <label htmlFor="Full Time"> Full Time </label> <br />
                </div>
            </div>
          </div>
          <div className="FilterOptionContainer">
            {/* Duration */}
            <div className="FilterOptionHead"> Duration </div>
            <div className="FilterOptionContent">
              {
                durationObject.map((obj) => {
                  return(obj)
                })
              }
            </div>
          </div>
        </div>
        {/* Results Container (Right Container) */}
        <div className="DashboardRight" style={showFilter ? {display:"none"} : {}}>
          <div className="DashboardRightTop">
            {/* Search Container here. */}
            <div className="DashboardSearchContainer">
              <input type="text" className='DashboardSearchBox'
              placeholder='Search here...'
              onChange={(e) => {setSearch(e.target.value)}} />
              <GoSearch className='DashboardSearchBtn' onClick={() => {handleSearch()}} />
            </div>
            {/* Show Filter for small screen */}
            <div className="DashboardRightFilterBtn"
            onClick={() => {setShowFilter(true)}}> <FiFilter /> Filter </div>
          </div>
          {/* Dashboard Results here */}
          <div className="DashboardResultsContainer">
            {
              jobs.map((job,index) => {return (
                <div className="DashboardResult" key={index}>
                  <div className="JobTopContainer">
                    <div className="DashboardCompanyProfile"> N.A. </div>
                    <div className="DashboardCompanyTopDetails">
                      <div className="ResultsJobRole">{job.role}</div>
                      <div className="DashboardCompanyName"> {job.company} </div>
                    </div>
                  </div>
                  <div className="ResultsJobDetailsContainer">
                    <div className="ResultsJobDetailsItem">
                      <IoLocationOutline style={{fontSize:"18px",margin:"0 5px"}} /> Location : Honkong, China
                    </div>
                    <div className="ResultsJobDetailsItem">
                      <FaRegMoneyBillAlt style={{fontSize:"18px",margin:"0 5px"}} /> Salary : $550/month
                    </div>
                    <div className="ResultsJobDetailsItem">
                      <AiOutlineCalendar style={{fontSize:"18px",margin:"0 5px"}} /> Duration : 6 months
                    </div>
                  </div>
                  <div className="ResultsJobPosted"> Posted at: 12th,Aug,2024 </div>
                  <Link to={`/jobs/${index}`} className="ResultsJobView"> View Details <AiOutlineRight style={{fontSize:"18px"}} /> </Link>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard