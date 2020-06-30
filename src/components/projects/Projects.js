import React from 'react'
import './Projects.css'
import { projects } from './ProjectsData'
import EachProject from './each_project/EachProject'



const Projects = () => {
  //const projects = [1, 2, 3, 4, 5]
  return (
    <div className="projects-container" >
      <h1><span className="style-word-span" >My</span> Projects</h1>


      {projects.map((project, i) => {
        return (
          <div className="each-project-container" key={i}>
              <EachProject project={project} />
          </div>
        )
      })}


    </div>
  )
}

export default Projects