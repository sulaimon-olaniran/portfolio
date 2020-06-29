import React from 'react'
import fire_background from './asset/fire_background.mp4'
import Button from '@material-ui/core/Button'
//import olami_black from './asset/olami_black.png'
import olami_dp from './asset/olami_dp.png'
//import Avatar from '@material-ui/core/Avatar'
import './HomePage.css'


const HomePage = () => {
    return (
        <div className="homepage-container" >
            <video src={fire_background} alt="Background" autoPlay loop></video>
            <div className="homepage-details" >

                <div className="homepage-image" >
                  <img src={olami_dp} alt="Sulaimon O" />
                </div>

                <h2>Sulaimon Olaniran</h2>
                <p>Junior Front End Developer</p>
            </div>

            <Button variant="contained" color="secondary" >More About Me...</Button>
        </div>
    )
}

export default HomePage