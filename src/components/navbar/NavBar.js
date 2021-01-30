import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import Zoom from '@material-ui/core/Zoom'
import { Link } from 'react-scroll'
import Button from '@material-ui/core/Button'
import './NavBar.css'
import { CloseOutlined } from '@material-ui/icons'

const NavBar = () => {
    const [drawer, setDrawer] = useState(false)

    const handleOpenLinksDrawer = () => {
        setDrawer(true)
    }

    const handleCloseLinksDrawer = () => {
        setDrawer(false)
    }

    // const hints = [
    //     "An algorithm is a set of rules or instructions designed to solve a definite problem",
    //     "A program is an organized collection of instructions which performs a specific task",
    //     "An API is a set of rules, routines, and protocols to build software applications",
    //     "Arguments also known as Arg is a value that is passed into a command or a function",
    //     "A Boolean is an expressiong used to create statements that are either TRUE or FALSE",
    //     "ASCII is a standard that assign letters, numbers and other characters different slots",
    //     "A Bug is a term used to denote an unexpected error which cuases it to malfunction",
    //     "Char is a dislay unit of information equal to one alphabetic letter or symbol",
    //     "An Object is a combination of variables, constants and other data structures",
    //     "Object-Oreiented Programming is a model defined by programmers that revolve around ojects and data",
    //     "A Class refers to a set of related objects with common properties",
    //     "Code is a term which describe a written set of instructions using protocols",
    //     "Array are lists or groups of similar types of data values that are grouped",
    //     "Conditionslas helps the code make a choice and result in either TRUE or FALSE",
    //     "Compilation is process of converting High level language to Low level language",
    //     "Command Line Interface is a user interface based on the text",
    //     "A data type is the classification of a particular type of data",
    //     "A Constant is a value that doesn't change during the execution of the program"
    // ]

   

    return (
        <React.Fragment>

            <Drawer anchor="top" open={drawer} variant="temporary" onClose={handleCloseLinksDrawer} >
                <div className="nav-links-container" >

                    <div className='links-container'>
                        <Link activeClass="active" to="homesection" spy={true} smooth={true} offset={-100} duration={1000}>
                            <Zoom in={drawer} style={{ transitionDelay: drawer ? '200ms' : '0ms' }}>
                                <Button onClick={handleCloseLinksDrawer} color="primary" variant="outlined" size="small" >Home</Button>
                            </Zoom>
                        </Link>

                        <Link activeClass="active" to="aboutsection" smooth={true} offset={-100} duration={1000}>
                            <Zoom in={drawer} style={{ transitionDelay: drawer ? '300ms' : '0ms' }}>
                                <Button onClick={handleCloseLinksDrawer} color="primary" variant="outlined" size="small" >About</Button>
                            </Zoom>
                        </Link>

                        <Link activeClass="active" to="skillsection" smooth={true} offset={-100} duration={1000}>
                            <Zoom in={drawer} style={{ transitionDelay: drawer ? '400ms' : '0ms' }}>
                                <Button onClick={handleCloseLinksDrawer} color="primary" variant="outlined" size="small" >Skills</Button>
                            </Zoom>
                        </Link>

                        <Link activeClass="active" to="projectsection" smooth={true} offset={-100} duration={1000}>
                            <Zoom in={drawer} style={{ transitionDelay: drawer ? '500ms' : '0ms' }}>
                                <Button onClick={handleCloseLinksDrawer} color="primary" variant="outlined" size="small" >Projects</Button>
                            </Zoom>
                        </Link>

                        <Link activeClass="active" to="articlesection" smooth={true} offset={-100} duration={1000}>
                            <Zoom in={drawer} style={{ transitionDelay: drawer ? '500ms' : '0ms' }}>
                                <Button onClick={handleCloseLinksDrawer} color="primary" variant="outlined" size="small" >Articles</Button>
                            </Zoom>
                        </Link>

                        <Link activeClass="active" to="contactsection" spy={true} smooth={true} offset={-100} duration={1000}>
                            <Zoom in={drawer} style={{ transitionDelay: drawer ? '600ms' : '0ms' }}>
                                <Button onClick={handleCloseLinksDrawer} color="primary" variant="outlined" size="small" >Contact</Button>
                            </Zoom>
                        </Link>

                        <a href="https://drive.google.com/file/d/1cQV99JLuSUAD3nMIxjqUGHRmOWj2GMNi/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
                            <Zoom in={drawer} style={{ transitionDelay: drawer ? '700ms' : '0ms' }}>
                                <Button onClick={handleCloseLinksDrawer} color="primary" variant="outlined" size="small" >Resume</Button>
                            </Zoom>
                        </a>
                    </div>

                    {/* <Zoom in={drawer} style={{ transitionDelay: drawer ? '800ms' : '0ms' }}>
                        <div className='hints-container'>
                            {
                                shuffledHints.slice(0, 2).map((hint, index) => {
                                    return (
                                        <p key={index}>{hint}</p>
                                    )
                                })
                            }
                        </div>
                    </Zoom> */}

                    <Zoom in={drawer} style={{ transitionDelay: drawer ? '850ms' : '0ms' }}>

                        <Button onClick={handleCloseLinksDrawer}>
                            <CloseOutlined color='secondary' fontSize='large' />
                        </Button>
                    </Zoom>

                </div>
            </Drawer>



            <nav>
                <div className='nav-container'>
                    <MenuIcon onClick={handleOpenLinksDrawer} color="secondary" />
                </div>
            </nav>

        </React.Fragment>
    )

}


export default NavBar