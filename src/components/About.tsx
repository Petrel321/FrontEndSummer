import React from 'react';
import '../styles/About.css';


const About: React.FC = () => {
    return (
        <section id="about-me" className="main__about">
            <div className="container">
                <h2>About me</h2>
                <div className="main__about-content">
                    <img className="main__about-photo" src="images/person.jpg" alt="Me" draggable="false"></img>
                    <div className="main__about-text">
                        <p>Hi there</p>
                        <p>I'm Ivan Sannikov <br></br> Information security specialist </p>
                        <p>I am a 20 y.o. student from Innopolis University.<br></br>I like to study technology and apply the acquired skills in projects.</p>     
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;