import React from 'react';
import NavLink from '@/components/ui/NavLink';
import styles from "@/styles/index_page/Header.module.css";


const Header: React.FC = () => {
    return (
        <header className={`${styles.header}`}>
            <div className="container">
                <nav className={`${styles.header__nav}`}>
                    <h1 className={`${styles.header__nav_name}`}>Sannikov Ivan Mikhailovich</h1>
                    <ul className={`${styles.header__nav_menu}`}>
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