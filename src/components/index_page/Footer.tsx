import React from 'react';
import ContactLink from '../ui/ContactLink';
import styles from '@/styles/index_page/Footer.module.css';


const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <section className={styles.footer__contacts}>
                    <h2 className={styles.footer__contacts_header} id="contact-me">Ready to talk?</h2>
                    <p className={styles.footer__contacts_text}>Feel free to contact me</p>
                    <ul className={styles.footer__contacts_list}>
                        <ContactLink id={"gh_link"} href={"https://github.com/Petrel321"} content={"GitHub"}/>
                        <ContactLink id={"tg_link"} href={"https://telegram.me/ivasan1"} content={"Telegram"}/>
                        <ContactLink id={"email"} href={"mailto:i.sannikov@innopolis.university"} content={"Email"}/>
                    </ul>
                </section>
            </div>
        </footer>
    );
};

export default Footer;