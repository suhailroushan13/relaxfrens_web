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
        <a href="https://www.producthunt.com/posts/relaxfrens?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-relaxfrens" target="_blank" rel="noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=332572&theme=light" alt="RelaxFrens - Create your own calm environment using relaxing sounds | Product Hunt" style={{ width: "250px", height: "54px" }} width="250" height="54" /></a>
    </header>
}

export default Header;