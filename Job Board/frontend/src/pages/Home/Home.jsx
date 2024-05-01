// Package Imports
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

// CSS imports
import './Home.css'

function Home() {
  return (
    <div className='HomeMainWrapper'>
        <Navbar />
        <div className="HomeSection">
          <div className="centerHead"> Search Jobs Easy and Fast with, 
            <div className="logoHead"> Job Board </div>
          </div>
          <div className="centerDesc"> With more than 1M positions and 100K Customers, we are the largest job portal </div>
        </div>
    </div>
  )
}

export default Home