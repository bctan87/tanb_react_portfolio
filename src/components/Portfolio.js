import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Project from './Project';
import projects from './projects.json';

function Portfolio() {

    const [ projectlist ] = useState(projects);
  
    return (
      <Project>
        <div className="container">
            <h4>Portfolio</h4>
  
            <div className="row">
                {
                projectlist.map(project => (
                    <ProjectCard key={project.id} 
                    id={project.id}
                    name={project.name} 
                    image={(process.env.PUBLIC_URL + `../images/${project.id}.png`)}
                    description={project.description} 
                    link={project.link}
                    repo={project.repo}  
                    >
        
                    </ProjectCard>
                    ))
                }
            </div>


         </div>
      </Project>
    );
  }

export default Portfolio;