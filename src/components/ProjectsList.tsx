import React from 'react';
import Project from './Project';
import '../styles/ProjectsList.css';


interface ProjectI {
    name: string;
    description: string;
}

interface ProjectsListProps {
    projects: ProjectI[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
    return (
        <ul className="portfolio__projects-list">
            {projects.map((project, index) => (
                <Project key={index} name={project.name} description={project.description} />
            ))}
        </ul>
    );
};

export default ProjectsList;