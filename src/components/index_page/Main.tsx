import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Hire from './Hire';
import styles from '@/styles/index_page/Main.module.css';


const Main: React.FC = () => {
    return (
        <main className={`${styles.main}`}>
            <About />
            <Portfolio />
            <Hire />
        </main>
    );
};

export default Main;