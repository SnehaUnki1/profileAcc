import React from 'react'
import '../assets/pages.css'
import profilepic from '../assets/images/Sneha.jpg'

const Home = () => {
    return (

        <div className="home bg" >
            <img alt="profile" className="rounded-circle" src={profilepic} style={{ borderRadius: "40%" }} />
            <div className="bg-text">
                <p > 
                    I am Sneha
                </p>
                {/* <br /> */}
                <p style={{fontSize:"2rem", fontWeight:"lighter"}}>And I am a MERN Stack Developer...</p>
            </div>
        </div>
    )
}

export default Home;
