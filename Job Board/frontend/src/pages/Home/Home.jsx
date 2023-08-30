import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='HomeMainWrapper'>
        <div className="HomeMainContainer">
            The Site is under construction. <br />
            For More Information
            <Link to="https://github.com/Anirudh3167/CODSOFT"> Contact here </Link>
        </div>
    </div>
  )
}

export default Home