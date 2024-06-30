import React from 'react';
import Main from './hw2_3_components/Main';


const HW2_3: React.FC = () => {
    return (
        <div>
            <noscript>
                <p>JavaScript is required for this page to work properly.</p>
            </noscript>
            <Main />
            <script src="../dist/bundle.js"></script>
        </div>
    );
};

export default HW2_3;