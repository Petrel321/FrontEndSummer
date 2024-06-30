import React from 'react';
import ContactLink from './ui/ContactLink';
import '../styles/Footer.css';


const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <section className="footer__contacts">
                    <h2 className="footer__contacts-header" id="contact-me">Ready to talk?</h2>
                    <p className="footer__contacts-text">Feel free to contact me</p>
                    <ul className="footer__contacts-list">
                        <ContactLink id={"gh-link"} href={"https://github.com/Petrel321"} content={"GitHub"}/>
                        <ContactLink id={"tg-link"} href={"https://telegram.me/ivasan1"} content={"Telegram"}/>
                        <ContactLink id={"email"} href={"mailto:i.sannikov@innopolis.university"} content={"Email"}/>
                    </ul>
                </section>
            </div>
        </footer>
    );
};

export default Footer;