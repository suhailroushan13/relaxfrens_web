import React from 'react';
import Image from 'next/image';

import styles from './Header.module.css';

const Header = props => {
    return <header className={styles.headerContainer}>
        <h2>
            Hey fren <span className={styles.waveEmoji}><img src="/images/waving_hand.png" alt="wave_emoji" className={styles.waveEmojiImage} /></span>
        </h2>
        <h3>
            Escape the noisy world and create your own calm environment.
        </h3>
    </header>
}

export default Header;