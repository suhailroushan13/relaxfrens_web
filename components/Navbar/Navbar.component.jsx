import React from 'react';

import styles from './Navbar.module.css';

const Navbar = props => {
    return <nav className={styles.nav}>
        <div className='flex flex-center'>
            <img src="/images/logo/relax_frens_logo.png" className={styles.logo} />
            <h1 className='ml-10'>Relax Frens</h1>
        </div>
    </nav>
}


export default Navbar;