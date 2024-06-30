import React from 'react';
import NavLink from './ui/NavLink';
import '../styles/Header.css';


const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <h1 className="header__nav-name">Sannikov Ivan Mikhailovich</h1>
                    <ul className="header__nav-menu">
                        <NavLink href="#about-me" content='About Me' />
                        <NavLink href="#portfolio" content='Portfolio' />
                        <NavLink href="#hire-me" content='Hire' />
                        <NavLink href="#contact-me" content='Contact me' />
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;