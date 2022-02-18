import React from 'react';
import Image from 'next/image';

import styles from './Header.module.css';

const Header = props => {
    return <header className={styles.headerContainer}>
        <h2>
            Hey <span className={styles.waveEmoji}><Image src="/images/waving_hand.png" width={30} height={30} /></span>
        </h2>
        <h3>
            Plugin your earphones and create your calm environment.
        </h3>
    </header>
}

export default Header;