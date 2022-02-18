import React from 'react';
import Image from 'next/image';

import styles from './Header.module.css';

const Header = props => {
    return <header className={styles.headerContainer}>
        <h2>
            Hey fren <span className={styles.waveEmoji}><Image src="/images/waving_hand.png" width={30} height={30} className={styles.waveEmojiImage} /></span>
        </h2>
        <h3>
            Escape the noisy world and create your own calm environment.
        </h3>
    </header>
}

export default Header;