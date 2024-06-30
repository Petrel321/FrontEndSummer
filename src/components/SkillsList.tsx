import React from 'react';
import Skill from './Skill';
import '../styles/SkillsList.css';


interface SkillsListProps {
    name: string;
    skills: string[];
}

const SkillsList: React.FC<SkillsListProps> = ({ name, skills }) => {
    return (
        <div className="portfolio__skills-content">
            <h3 className="portfolio__subheader">{name}</h3>
            <ul className="portfolio__skills-list">
                {skills.map((skill, index) => (
                    <Skill key={index} name={skill} />
                ))}
            </ul>
        </div>
    );
};

export default SkillsList;