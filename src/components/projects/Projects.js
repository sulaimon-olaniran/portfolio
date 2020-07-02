import React from 'react'
import './Projects.css'
import { projects } from './ProjectsData'
import EachProject from './each_project/EachProject'
import ScrollAnimation from 'react-animate-on-scroll'


const Projects = () => {
  //const projects = [1, 2, 3, 4, 5]
  return (
    <div className="projects-container" >
     <ScrollAnimation animateIn="tada" ><h1><span className="style-word-span" >My</span> Projects</h1></ScrollAnimation>

     <div className="projects-listing-container" >
      {projects.map((project, i) => {
        return (
          <ScrollAnimation animateIn='bounceInUp' className="each-project-container" key={i}>
              <EachProject project={project} />
          </ScrollAnimation>
        )
      })}
    </div>

    </div>
  )
}

export default Projects