import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/HW1.css';


const HW1: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default HW1;
