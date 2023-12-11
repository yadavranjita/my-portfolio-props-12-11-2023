import React from "react";

const Projects=(props)=>{
    return(
        <div>
        <h2>Projects</h2>
        <ul>
          {props.projects.map(project => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
        </div>
    );
}
export default Projects;