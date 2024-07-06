import React from 'react';
import styles from '@/styles/index_page/ContactLink.module.css';


interface ContactLinkProps {
    id: string;
    href: string;
    content: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ id, href, content }) => {
    return (
        <li className={`${styles.footer__contacts_item}`}>
            <a id={id} href={href} className={`${styles.footer__contacts_link}`} target="_blank" rel="noreferrer">{content}</a>
        </li>
    );
};

export default ContactLink;