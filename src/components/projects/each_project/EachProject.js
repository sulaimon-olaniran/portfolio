import React, { useState } from 'react'
import './EachProject.css'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'



const EachProject = ({ project }) => {
    const [x, setX] = useState(0)
    const [expand, setExpand] = useState(false)

    const handleExpand = () => {
        setExpand(prev => !prev)
    }

    const handleNext = () => {
        x === -100 * (project.images.length - 1) ? setX(0) : setX(x - 100);
    }

    const handlePrevious = () => {
        x === 0 ? setX(-100 * (project.images.length - 1)) : setX(x + 100);
    }

    const sliderClass = project.images.length > 1 ? "show-slider-button" : "hide-slider-button"

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
                <div className={`slider-button ${sliderClass}`} >
                    <ArrowBackIosIcon onClick={handlePrevious} color="secondary" fontSize="small" />
                    <ArrowForwardIosIcon onClick={handleNext} color="secondary" fontSize="small" />
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
                {expand ? <ExpandLessIcon onClick={handleExpand} fontSize="default" color="primary" /> :
                    <ExpandMoreIcon onClick={handleExpand} fontSize="default" color="primary" />}
            </div>
        </React.Fragment>
    )
}

export default EachProject