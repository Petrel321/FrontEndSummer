import React from 'react';
import styles from '@/styles/index_page/Project.module.css';


interface ProjectProps {
    name: string;
    description: string;
}

const Project: React.FC<ProjectProps> = ({ name, description }) => {
    return (
        <li className={`${styles.portfolio__project}`}>
            <div className={`${styles.portfolio__project_image}`}></div>
            <div className={`${styles.portfolio__project_data}`}>
                <h4 className={`${styles.portfolio__project_header}`}>{name}</h4>
                <p className={`${styles.portfolio__project_description}`}>{description}</p>
            </div>
        </li>
    );
};

export default Project;