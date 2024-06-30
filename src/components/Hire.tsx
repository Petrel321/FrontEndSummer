import React from 'react';
import Ability from './Ability';
import '../styles/Hire.css';


const abilities = [
    'Security monitoring', 'Identification of incidents', 'Incident response',
    'Analysis and reporting', 'Maintenance and configuration of security systems',
    'User education and awareness'
]

const Hire: React.FC = () => {
    return (
        <section id="hire-me" className="main__hire">
            <div className="container">
                <h2>Hire me</h2>
                <p>Here are some of the things I can help you with:</p>
                <ul className="main__list">
                    {abilities.map((ability, index) => (
                        <Ability key={index} name={ability} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Hire;