import React from 'react'
import Button from '@material-ui/core/Button'
import olami_dp from './asset/olami_dp.png'
import { Link } from 'react-scroll'
import './HomePage.css'
import ScrollAnimation from 'react-animate-on-scroll'


const HomePage = () => {
    return (
        <div className="homepage-container" >
            <ScrollAnimation
                animateIn='rubberBand'
                animateOut='flipOutY'
                offset={150}
            >
                <div className="homepage-details" >

                    <div className="homepage-image" >

                        <img src={olami_dp} alt="Sulaimon O" />

                    </div>

                    <h2>Sulaimon <span className="last-name" >Olaniran</span></h2>
                    <p>A Front End Developer</p>
                </div>

                <Link activeClass="active" to="aboutsection" spy={true} smooth={true} offset={-100} duration={500}>
                    <Button variant="contained" color="secondary" >More About Me...</Button>
                </Link>
            </ScrollAnimation>
        </div>
    )
}

export default HomePage