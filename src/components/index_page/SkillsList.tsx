import React from 'react';
import Skill from './Skill';
import styles from '@/styles/index_page/SkillsList.module.css';

interface SkillsListProps {
  name: string;
  skills: string[];
}

const SkillsList: React.FC<SkillsListProps> = ({ name, skills }) => {
  return (
    <div className={styles.portfolio__skills_content}>
      <h3 className={styles.portfolio__subheader}>{name}</h3>
      <ul className={styles.portfolio__skills_list}>
        {skills.map((skill, index) => (
          <Skill key={index} name={skill} />
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
