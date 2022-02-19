import React from 'react';
import Link from 'next/link';

import styles from './Navbar.module.css';

const Navbar = props => {
    return <nav className={styles.nav}>
        <div className='flex flex-center'>
            <img src="/images/logo/relax_frens_logo.png" className={styles.logo} alt="relax frens logo" />
            <h1 className='ml-10'><Link href="/" className="">Relax Frens</Link></h1>

        </div>
        <Link href="/about" className="">About</Link>
    </nav>
}


export default Navbar;