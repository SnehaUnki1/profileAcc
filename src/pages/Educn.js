import React from 'react'
import '../assets/pages.css'
import '../assets/edu.css'

function Educn() {
    return (
        <div className="edu "  >
            <div className="headline">Education</div>

            <div className="container">
                <div className="card ">
                    <div className="content">
                        <h2>Graduaction</h2>
                        <h1>75.3%</h1>
                        <h4>Basaveshwar Engineering College</h4>
                        <h4>2011-2014</h4>
                    </div>
                </div>
                <div className="card ">
                    <div className="content">
                        <h2>Diploma</h2>
                        <h1>71.15%</h1>
                        <h4>BVVS Polytechnic (Autonomous) College</h4>
                        <h4>2008-2011</h4>
                    </div>
                </div>
                <div className="card ">
                    <div className="content">
                        <h2>School</h2>
                        <h1>83.84%</h1>
                        <h4>BVVS Primary and High School </h4>
                        <h4>2008</h4>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Educn
