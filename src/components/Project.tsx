import React from 'react';
import '../styles/Project.css';


interface ProjectProps {
    name: string;
    description: string;
}

const Project: React.FC<ProjectProps> = ({ name, description }) => {
    return (
        <li className="portfolio__project">
            <div className="portfolio__project-image"></div>
            <div className="portfolio__project-data">
                <h4 className="portfolio__project-header">{name}</h4>
                <p className="portfolio__project-description">{description}</p>
            </div>
        </li>
    );
};

export default Project;