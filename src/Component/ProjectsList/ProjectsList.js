import classes from './ProjectsList.module.css';
import React from 'react';
import Project from './Project';
import {projectsData} from './projectsData';
const ProjectsList=()=>{
/*     console.log(projectsData) */
    return(
        <div className={classes.ProjectsList} >
            <ul>
                {projectsData.map((project)=>{
                    return <li>
                    <Project data={project} />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ProjectsList;