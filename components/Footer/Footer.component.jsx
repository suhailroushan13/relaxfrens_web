import React from 'react';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';
import { GrPowerReset } from 'react-icons/gr';
import Image from 'next/image';
import AppContext from '../../context/app.context';

import styles from './Footer.module.css';

const Footer = props => {
    return <footer className={styles.footerContainer}>
        <AppContext.Consumer>
            {
                value => {
                    return (<><div className={styles.footerActionContainer}>
                        <div className={styles.actionPrimary} onClick={() => {
                            value.togglePlaying()
                        }}>
                            {
                                value.isAudioPlaying ?
                                    <BsPauseFill />
                                    :
                                    <BsPlayFill />
                            }
                        </div>
                        <div className={styles.actionSecondary} onClick={() => {
                            value.setResetSettings();
                        }}>
                            <GrPowerReset />
                        </div>
                        <div className={styles.appCredits}>
                            Built with {" "}
                            <img src="/images/heart_emoji.png" alt="heart emoji" className={styles.heartEmoji} /> by {" "}
                            <a href="https://twitter.com/zubairself" target="_blank" rel="noreferrer">Zubair</a>
                        </div>
                    </div>
                        <div></div> </>)

                }}

        </AppContext.Consumer>
    </footer >
}

export default Footer;