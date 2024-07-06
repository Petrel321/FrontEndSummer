import React from 'react';
import SkillsList from './SkillsList';
import ProjectsList from './ProjectsList';
import styles from '@/styles/index_page/Portfolio.module.css';


const coreSkills = [
    'Security Monitoring', 'Incident Triage', 'Forensics', 'Security Tools',
    'Networks', 'Operating Systems'
]

const otherSkills = [
    'C/C++', 'Java', 'Python', 'HTML', 'CSS', 'JS/TS', 'React', 'Redux',
    'Git', 'CI/CD', 'Docker', 'Docker Compose', 'PostgreSQL', 'MongoDB',
    'MySQL', 'SQLite', 'Team work', 'Soft skills', 'English'
]

const projects = [
    {name: "Backup Api", description: "Dockerized API for automated encrypted remote PostgreSQL backups. Stack: PostgreSQL, Python, Docker&Docker Compose, CI/CD, SSH, GPG."},
    {name: "Follow My Reading", description: "Follow My Reading provides a API service for our users to upload an image and audio of their reading session, and our service checks whether there are any mistakes in pronunciation in the audio."}
]

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className={styles.main__portfolio}>
            <div className="container">
                <h2>Portfolio</h2>
                <div className={styles.main__portfolio_content}>
                    <div className={styles.main__portfolio_skills}>
                        <SkillsList name={"Core skills"} skills={coreSkills} />
                        <SkillsList name={"Other skills"} skills={otherSkills} />
                    </div>
                    <div className={styles.main__portfolio_projects}>
                        <div className={styles.portfolio__projects_content}>
                            <h3 className={styles.portfolio__subheader}>Projects</h3>
                            <ProjectsList projects={projects}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
);
};

export default Portfolio;