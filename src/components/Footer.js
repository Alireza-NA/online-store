import React from 'react';
// Styles
import styles from '../styles/Footer.module.scss'

// Icons
import github from '../assets/github.svg'
const Footer = () => {

    return (
        <div className={styles.footer}>
            <p>Created by</p>
            <a href='https://github.com/Alireza-NA'>
                <span>alireza</span>
                <i><img src={github} alt="github"/></i>
            </a>
        </div>
    );
};

export default Footer;