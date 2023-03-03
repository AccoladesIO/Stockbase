import React from 'react'
import Navbar from '../navbar/Navbar'
import Chart from './Chart'
import './Graph.scss'

const Graph = () => {
  return (
    <section className="graph-section">
        {/* <Navbar /> */}
        <div className="cards">
          {/* card 1 */}
            <div className="card">
              

            </div>
            {/* card 2 */}
            <div className="card">

            </div>
            {/* card 3 and 4 */}
            <div className="card-grid">
            <div className="sub-card"></div>
            <div className="sub-card"></div>
            </div>
        </div>
        {/* The main graph section grid */}
        <div className="graph-grid">

          {/* graph component */}
        <div className="graph">
            graph here
            <Chart />
        </div>

        {/* article component */}
        <div className="article">
            Article here
        </div>
        </div>
    </section>
  )
}

export default Graph