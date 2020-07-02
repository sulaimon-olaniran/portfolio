import React, { useState } from 'react'
import './EachProject.css'
import Button from '@material-ui/core/Button'
//import Modal from '@material-ui/core/Modal'
//import { makeStyles } from '@material-ui/core/styles'
//import Backdrop from '@material-ui/core/Backdrop'
//import Zoom from '@material-ui/core/Zoom'
import Collapse from '@material-ui/core/Collapse'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

// const useStyles = makeStyles((theme) => ({
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// }))


const EachProject = ({ project }) => {
    //const classes = useStyles()
    const [x, setX] = useState(0)
    // const [ showDetails, setShowDetails ] = useState(false)
    const [expand, setExpand] = useState(false)
    // const tech = ["html", "css", "java", "netlify"]

    const handleExpand = () => {
        setExpand(prev => !prev)
    }

    // const openDetailsModal = () =>{
    //     setShowDetails(true)
    // }

    // const closeDetailsModal = () =>{
    //     setShowDetails(false)
    // }

    //const images = ["image-one", "image-two", "image-three"]

    const handleNext = () => {
        x === -100 * (project.images.length - 1) ? setX(0) : setX(x - 100);
    }

    const handlePrevious = () => {
        x === 0 ? setX(-100 * (project.images.length - 1)) : setX(x + 100);
    }

    return (
        <React.Fragment>
            <h5>{project.name}</h5>

            <div className="images-container">
                {project.images.map((image, i) => {

                    return (
                        <div key={i} style={{ transform: `translateX(${x}%)` }} className="each-image-container" >
                            <img src={image} alt="Review" />
                        </div>
                    )
                })}
                <div className="slider-button" >
                    <ArrowBackIosIcon onClick={handlePrevious} color="secondary" fontSize="large" />
                    <ArrowForwardIosIcon onClick={handleNext} color="secondary" fontSize="large" />
                </div>
            </div>
            <Collapse in={expand} timeout={500} unmountOnExit>
                <div className="project-details-container" >
                    <div className="project-summary" >
                        <p>{project.summary}</p>
                    </div>
                    <ul>
                        <h5>Technologies Used</h5>
                        {
                            project.techs.map((tech, i) => {
                                return (
                                    <li key={i}>{tech}</li>
                                )
                            })
                        }
                    </ul>

                    <div className="project-details-buttons" >
                        <a href={project.codeUrl}  target="_blank" rel="noopener noreferrer" >
                            <Button color="primary"  variant="outlined" >Code</Button>
                        </a>
                        <a href={project.liveUrl}  target="_blank" rel="noopener noreferrer" >
                            <Button color="primary" variant="outlined" >Live</Button>
                        </a>
                    </div>

                </div>
            </Collapse>
            <div className="more-details-button" >
                {expand ? <ExpandLessIcon onClick={handleExpand} size="large" color="secondary" /> :
                    <ExpandMoreIcon onClick={handleExpand} size="large" color="secondary" />}
            </div>
        </React.Fragment>
    )
}

export default EachProject