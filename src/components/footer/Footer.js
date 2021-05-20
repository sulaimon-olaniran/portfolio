import React from 'react'
import './Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import CopyrightIcon from '@material-ui/icons/Copyright'
import { Link } from 'react-scroll'


const Footer = () => {
    return (
        <div className="footer-container" >
            <div className="social-medias-container" >
                <a href="https://github.com/sulaimon-olaniran" target="_blank" rel="noopener noreferrer" ><GitHubIcon color="primary" /></a>
                <a href="https://codepen.io/Sulaimon-Olaniran" target="_blank" rel="noopener noreferrer" style={{color :"#3f50b5"}} >
                    <i className="fa fa-codepen" aria-hidden="true"  style={{fontSize :"24px"}}>
                        <span style={{display : "none"}}>Codepen</span>
                    </i>
                </a>
                <a href="https://twitter.com/sulai_m0n" target="_blanak" rel="noopener noreferrer" ><TwitterIcon color="primary" /></a>
                <a href="https://wa.me/2349035793269" target="_blank" rel="noopener noreferrer"><WhatsAppIcon color="primary" /></a>
                <a href="https://www.linkedin.com/in/oladipupo-olaniran-479672187/" target="_blank" rel="noopener noreferrer" ><LinkedInIcon color="primary" /></a>
            </div>
            <Link activeClass="active" to="homesection" smooth={true} offset={-100} duration={1500}>
                <ArrowUpwardIcon fontSize="large" color="secondary" />
            </Link>
            <small><CopyrightIcon fontSize="small" color="secondary"/> Sulaimon-Olaniran 2021</small>
        </div>
    )
}

export default Footer