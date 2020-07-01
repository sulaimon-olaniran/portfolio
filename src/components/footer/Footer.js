import React from 'react'
import './Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'


const Footer = () =>{
    return(
        <div className="footer-container" >
            <div className="social-medias-container" >
                <a href="https://github.com/sulaimon-olaniran" target="_blank" rel="noopener noreferrer" ><GitHubIcon  color="primary" /></a>
                <a href="https://twitter.com/Olami_dipupo" target="_blanak" rel="noopener noreferrer" ><TwitterIcon color="primary" /></a>
                <a href="https://wa.me/2348088614722" target="_blank" rel="noopener noreferrer"><WhatsAppIcon color="primary" /></a>
                <a href="https://www.linkedin.com/in/oladipupo-olaniran-479672187/" target="_blank" rel="noopener noreferrer" ><LinkedInIcon color="primary" /></a>
            </div>
            <small>Sulaimon-Olaniran 2020</small>
        </div>
    )
}

export default Footer