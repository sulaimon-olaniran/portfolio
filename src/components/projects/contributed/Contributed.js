import React from 'react'
import './Contributed.css'
import { ContributedProjectsData } from './ContributedData'
import EachContributedProject from './eachcontributed/EachContributed'
import ScrollAnimation from 'react-animate-on-scroll'


const ContributedProjects = () => {
    return (
        <div className="projects-listing-container">
            {
                ContributedProjectsData.map((project, i) => {
                    return (
                        <ScrollAnimation animateIn='bounceIn' animateOut="bounceOut" className="each-project-container" key={i}>
                            <EachContributedProject project={project} />
                        </ScrollAnimation>
                    )
                })
            }
        </div>
    )
}

export default ContributedProjects