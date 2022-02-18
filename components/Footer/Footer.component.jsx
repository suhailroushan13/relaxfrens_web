import React from 'react';
import { BsPlayFill, BsPause } from 'react-icons/bs';
import { GrPowerReset } from 'react-icons/gr';
import Image from 'next/image';

import styles from './Footer.module.css';

const Footer = props => {
    return <footer className={styles.footerContainer}>
        <div className={styles.footerActionContainer}>
            <div className={styles.actionPrimary}>
                <BsPlayFill />
            </div>
            <div className={styles.actionSecondary}>
                <GrPowerReset />
            </div>
            <div className={styles.appCredits}>
                Built with 
                <Image src="/images/heart_emoji.png" width={15} height={15} /> by 
                <a href="https://twitter.com/zubairself" target="_blank" rel="noreferrer">Zubair</a>
            </div>
        </div>
        <div></div>
    </footer>
}

export default Footer;