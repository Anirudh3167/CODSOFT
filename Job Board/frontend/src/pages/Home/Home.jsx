// Package Imports
import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

// CSS imports
import './Home.css'

function Home() {
  return (
    <div className='HomeMainWrapper'>
        <Navbar />
        <div className="HomeMainContainer">
            The Site is under construction. <br />
            For More Information
            <Link to="https://github.com/Anirudh3167/CODSOFT" style={{color:"blue"}}> Contact here </Link>
        </div>
    </div>
  )
}

export default Home