import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import Zoom from '@material-ui/core/Zoom'
import HomeSharpIcon from '@material-ui/icons/HomeSharp'
import { Link } from 'react-scroll'
import Button from '@material-ui/core/Button'
import './NavBar.css'



const NavBar = () => {
    const [drawer, setDrawer] = useState(false)

    const handleDrawer = () => {
        setDrawer(true)
    }

    const closeDrawer = () => {
        setDrawer(false)
    }

    return (
        <nav>
            <MenuIcon onClick={handleDrawer} color="secondary" />
            <Drawer anchor="top" elevation={15} open={drawer} variant="temporary" onClose={closeDrawer} >
                <div className="nav-links-container" >


                    <Link activeClass="active" to="homesection" spy={true} smooth={true} offset={-100} duration={500}>
                        <Zoom in={drawer} style={{ transitionDelay: drawer ? '300ms' : '0ms' }}>
                            <Button onClick={closeDrawer} color="secondary" variant="contained" size="small" >Home</Button>
                        </Zoom>
                    </Link>

                    <Link activeClass="active" to="aboutsection" smooth={true} offset={-100} duration={500}>
                        <Zoom in={drawer} style={{ transitionDelay: drawer ? '400ms' : '0ms' }}>
                            <Button onClick={closeDrawer} color="secondary" variant="contained" size="small" >About</Button>
                        </Zoom>
                    </Link>
                    <Link activeClass="active" to="projectsection" smooth={true} offset={-100} duration={500}>
                        <Zoom in={drawer} style={{ transitionDelay: drawer ? '500ms' : '0ms' }}>
                            <Button onClick={closeDrawer} color="secondary" variant="contained" size="small" >Projects</Button>
                        </Zoom>
                    </Link>

                    <Link activeClass="active" to="contactsection" spy={true} smooth={true} offset={-100} duration={500}>
                        <Zoom in={drawer} style={{ transitionDelay: drawer ? '600ms' : '0ms' }}>
                            <Button onClick={closeDrawer} color="secondary" variant="contained" size="small" >Contact</Button>
                        </Zoom>
                    </Link>

                </div>
            </Drawer>
        </nav>
    )

}


export default NavBar