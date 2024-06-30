import React from 'react';
import '../../styles/ContactLink.css';


interface ContactLinkProps {
    id: string;
    href: string;
    content: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ id, href, content }) => {
    return (
        <li className="footer__contacts-item">
            <a id={id} href={href} className="footer__contacts-link" target="_blank">{content}</a>
        </li>
    );
};

export default ContactLink;