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
import {AiOutlineCalendar} from 'react-icons/ai'

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
  ])
  const handleSearch = () => {
    console.log(serach);
  }
  return (
    <div className='DashboardWrapper'>
      <Navbar />
      <div className="DashboardMainContainer">
        {/* Filter Container (Left Container) */}
        <div className="DashboardLeft" style={showFilter ? {display:"flex"} : {}}>
          <div className="DashboardLeftFilterCross"
          onClick={() => {setShowFilter(false)}}> X </div>
          <div className="FilterResetBtn"> Reset </div>
          <div className="FilterResetBtn" style={{margin:"10px 0",backgroundColor:"blue",color:"white"}}> Apply </div>
          <div className="FilterOptionContainer">
            <div className="FilterOptionHead"> Salary </div>
            <div className="FilterOptionContent"> 0 - 1000 </div>
            <input type="range" min="0" max={`1000`} className='FilterPriceRange' />
          </div>
          <div className="FilterOptionContainer">
            <div className="FilterOptionHead"> Role </div>
            <input type="text" className='inputBox' style={{width:"100%",height:"30px",border:"1px solid black"}} />
          </div>
          <div className="FilterOptionContainer">
            <div className="FilterOptionHead"> Location </div>
            <input type="text" className='inputBox' style={{width:"100%",height:"30px",border:"1px solid black"}} />
          </div>
          <div className="FilterOptionContainer">
            <div className="FilterOptionHead"> Job Type </div>
            <div className="FilterOptionContent">
              part Time <br />
              Full Time <br />
            </div>
          </div>
          <div className="FilterOptionContainer">
            <div className="FilterOptionHead"> Duration </div>
            <div className="FilterOptionContent">
              1 month <br />
              2 months <br />
              3 months <br />
              6 months <br />
              above 6 months <br />
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
                  <Link to="/" className="ResultsJobView"> View Details {` >`} </Link>
                  {/* Company : {job.company} <br />
                  Role : {job.role} <br />
                  Salary : {job.salary} <br /> */}
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