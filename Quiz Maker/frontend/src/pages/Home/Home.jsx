// Package Imports
import React from 'react'
import { Link } from 'react-router-dom'

// CSS imports
import './Home.css'

// Component Imports
import Navbar from '../../components/Navbar/Navbar'

function Home() {
  return (
    <div className='HomeMainWrapper'>
        <Navbar />
        <div className="HomeMainContainer">
            The Site is under construction. <br />
            For More Information
            <Link to="https://github.com/Anirudh3167/CODSOFT"> Contact here </Link>
        </div>
    </div>
  )
}

export default Home