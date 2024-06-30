import React from 'react';
import '../../styles/NavLink.css';

interface NavLinkProps {
    href: string;
    content: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, content }) => {
    return (
        <li className="header__nav-list">
            <a href={href} className="header__nav-item">{content}</a>
        </li>
    );
};

export default NavLink;