import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HW1 from './HW1';
import HW2_3 from './HW2_3';

const AllRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HW1 />}/>
                <Route path="/hw3" element={<HW2_3 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AllRoutes;