import React from 'react'
import Navbar from '../navbar/Navbar'
import './Graph.scss'

const Graph = () => {
  return (
    <section className="graph-section">
        {/* <Navbar /> */}
        <div className="cards">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card grid">
            <div className="sub-card"></div>
            <div className="sub-card"></div>
            </div>
        </div>
        <div className="graph-grid">
        <div className="graph">
            graph here
        </div>
        <div className="article">
            Article here
        </div>
        </div>
    </section>
  )
}

export default Graph