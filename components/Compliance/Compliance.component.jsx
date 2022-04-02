import React from 'react';

import styles from './Compliance.module.css'

const Compliance = props => {
    return <div className={styles.container}>
        By using RelaxFrens you agree to {" "}
        <a href="/privacy-policy" target="_blank" rel='noopener'>
            privacy policy
        </a>
        {" "}
        and
        {" "}
        <a href="/terms-and-conditions" target="_blank" rel='noopener'>
            terms & conditions
        </a>
    </div>
}


export default Compliance