import React from 'react';
import Ability from '@/components/index_page/Ability';
import styles from '@/styles/index_page/Hire.module.css';


const abilities = [
    'Security monitoring', 'Identification of incidents', 'Incident response',
    'Analysis and reporting', 'Maintenance and configuration of security systems',
    'User education and awareness'
]

const Hire: React.FC = () => {
    return (
        <section id="hire-me" className={styles.main__hire}>
            <div className="container">
                <h2>Hire me</h2>
                <p>Here are some of the things I can help you with:</p>
                <ul className={styles.main__list}>
                    {abilities.map((ability, index) => (
                        <Ability key={index} name={ability} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Hire;