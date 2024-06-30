import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Hire from './Hire';


const Main: React.FC = () => {
    return (
        <main className="main">
            <About />
            <Portfolio />
            <Hire />
        </main>
    );
};

export default Main;