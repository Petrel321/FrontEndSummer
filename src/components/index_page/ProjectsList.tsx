import React from 'react';
import Project from '@/components/index_page/Project';
import styles from '@/styles/index_page/ProjectsList.module.css';


interface ProjectI {
    name: string;
    description: string;
}

interface ProjectsListProps {
    projects: ProjectI[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
    return (
        <ul className={`${styles.portfolio__project_list}`}>
            {projects.map((project, index) => (
                <Project key={index} name={project.name} description={project.description} />
            ))}
        </ul>
    );
};

export default ProjectsList;