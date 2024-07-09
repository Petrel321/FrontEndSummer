import React from 'react';
import styles from '@/styles/index_page/NavLink.module.css';

interface NavLinkProps {
  href: string;
  content: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, content }) => {
  return (
    <li>
      <a href={href} className={`${styles.header__nav_item}`}>
        {content}
      </a>
    </li>
  );
};

export default NavLink;
