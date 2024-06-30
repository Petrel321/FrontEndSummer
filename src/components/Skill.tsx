import React from 'react';
import '../styles/Skill.css';


interface SkillProps {
    name: string;
}

const Skill: React.FC<SkillProps> = ({ name }) => {
    return (
        <li className="portfolio__skills-item">
            <span>{name}</span>
        </li>
    );
};

export default Skill;