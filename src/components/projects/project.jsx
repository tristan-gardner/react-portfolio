// components/Project.jsx
import React from 'react';
import ProjectContent from './projectContent';
import { projectList } from './projectList';

const Projects = ({openProject}) => {
    if (!openProject) {return <></>}
    console.log({openProject})
    const project = projectList.find((p) => p.id === openProject);


    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div id='openProject' className="project-page">
        <h1>{project.title}</h1>
        {ProjectContent({...project})}
        </div>
    );
};

export default Projects;