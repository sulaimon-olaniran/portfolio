import React from 'react'
import './Projects.css'
import { projects } from './ProjectsData'
import EachProject from './each_project/EachProject'
import ScrollAnimation from 'react-animate-on-scroll'
import ContributedProjects from './contributed/Contributed'


const Projects = () => {
  return (
    <div className="projects-container" >
     <ScrollAnimation animateIn="tada" animateOut="tada" ><h1><span className="style-word-span" >My</span> Projects</h1></ScrollAnimation>
     <ScrollAnimation animateIn="tada" ><p>projects I've contributed to so far;</p></ScrollAnimation>
     <ContributedProjects />

     <ScrollAnimation animateIn="tada" ><p>Personal projects I've worked on so far;</p></ScrollAnimation>

     <div className="projects-listing-container" >
      {projects.map((project, i) => {
        return (
          <ScrollAnimation animateIn='bounceIn' animateOut="bounceOut" className="each-project-container" key={i}>
              <EachProject project={project} />
          </ScrollAnimation>
        )
      })}
    </div>

    </div>
  )
}

export default Projects