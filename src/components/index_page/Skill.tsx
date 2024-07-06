import React from 'react';
import styles from '@/styles/index_page/Skill.module.css';


interface SkillProps {
    name: string;
}

const Skill: React.FC<SkillProps> = ({ name }) => {
    return (
        <li className={styles.portfolio__skills_item}>
            <span>{name}</span>
        </li>
    );
};

export default Skill;