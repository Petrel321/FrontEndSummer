import React from 'react';
import Image from 'next/image';
import styles from '@/styles/index_page/About.module.css';


const About: React.FC = () => {
    return (
        <section id="about-me" className={styles.main__about}>
            <div className="container">
                <h2>About me</h2>
                <div className={styles.main__about_content}>
                    <Image className={styles.main__about_photo} src="/FrontEndSummer/person.jpg" width={400} height={500} alt="Me" draggable="false" />
                    <div className={styles.main__about_text}>
                        <p>Hi there</p>
                        <p>Im Ivan Sannikov <br></br> Information security specialist </p>
                        <p>I am a 20 y.o. student from Innopolis University.<br></br>I like to study technology and apply the acquired skills in projects.</p>     
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;