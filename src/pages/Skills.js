import React from 'react'
import '../assets/pages.css'
import { ProgressBar } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Skills() {
    return (

        <div className="skills">
            <div className="headline" >Skills</div>

            <div className="text-p">
                {/* <div> */}
                <div className="row">
                    <div className="col-md-2" style={{ textAlign: "left", margin: "mx-auto" , fontWeight:'bold'}}>JavaScipt</div>
                    <div className="col-md-10 " ><ProgressBar now={70} variant="danger" label={`${80}% `} style={{ width: "100%", height: "30px" }} /> <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2" style={{ textAlign: "left", margin: "mx-auto", fontWeight:'bold' }}>HTML5,CSS</div>
                    <div className="col-md-10" ><ProgressBar now={60} variant="info" label={`${80}%`} style={{ width: "100%", height: "30px" }} /> <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2" style={{ textAlign: "left", margin: "mx-auto", fontWeight:'bold' }}>BootStrap 4</div>
                    <div className="col-md-10" ><ProgressBar now={65} variant="warning" label={`${75}% `} style={{ width: "100%", height: "30px" }} /> <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2" style={{ textAlign: "left", margin: "mx-auto", fontWeight:'bold' }}>Node JS</div>
                    <div className="col-md-10" ><ProgressBar now={65} variant="danger" label={`${65}% `} style={{ width: "100%", height: "30px" }} /> <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2" style={{ textAlign: "left", margin: "mx-auto", fontWeight:'bold' }}>React Js</div>
                    <div className="col-md-10" ><ProgressBar now={50} variant="info" label={`${60}% `} style={{ width: "100%", height: "30px" }} /> <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2" style={{ textAlign: "left", margin: "mx-auto", fontWeight:'bold' }}>MongoDb</div>
                    <div className="col-md-10" ><ProgressBar variant="success" now={50} label={`${50}% `} style={{ width: "100%", height: "30px" }} /> <br />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Skills;

