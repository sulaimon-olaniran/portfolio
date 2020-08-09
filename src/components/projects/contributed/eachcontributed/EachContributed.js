import React, { useState } from 'react'
import './EachContributed.css'
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'



const EachContributedProject = ({ project }) => {
    const [expand, setExpand] = useState(false)

    const handleExpand = () => {
        setExpand(prev => !prev)
    }

    return (
        <React.Fragment >
           <h5>{project.name}</h5>

            <div className="each-contributed-project-image">
                <img src={project.image} alt="" />
            </div>

            <Collapse in={expand} timeout={500} unmountOnExit>
                <div className="contributed-project-details-container" >
                    <div className="contribution-summary" >
                        <p>{project.contribution}</p>
                    </div>


                    <div className="project-details-buttons" >
                        <a href={project.link} target="_blank" rel="noopener noreferrer" >
                            <Button color="primary" variant="outlined" >View On GitHub</Button>
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


export default EachContributedProject