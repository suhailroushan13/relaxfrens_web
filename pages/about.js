import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';

import Layout from '../containers/Layout/Layout.container';
import Navbar from '../components/Navbar/Navbar.component';
import { BsTwitter, BsInstagram } from 'react-icons/bs'
export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Relax Frens</title>
                <meta name="description" content="Create your own environment using soothing and relaxing nature sounds to be more productive at work, study to ace your exams, practice yoga / meditation or just relax frens" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Navbar />
                <h2>
                    Hey there fren,
                </h2>
                <h3 className='text-center'>
                    I hope this app is helping you to focus more or to just relax.
                    <br />Make sure you download it or bookmark for easy access :)
                </h3>
                <br />
                <br />
                <h2>
                    Follow relaxfrens
                </h2>
                <a href="https://instagram.com/relaxfrens" target="_blank" rel="noreferrer" className='social-link m-10'><BsInstagram /></a>
                <br />
                <h2>
                    Follow the developer
                </h2>
                <div className='mt-10'>
                    <a href="https://twitter.com/zubairself" target="_blank" rel="noreferrer" className='social-link'><BsTwitter /></a>
                    <a href="https://instagram.com/zubairself" target="_blank" rel="noreferrer" className='social-link ml-10'><BsInstagram /></a>

                </div>

                <h3>
                    <a href="https://www.buymeacoffee.com/zubairself" target="_blank" rel="noreferrer" className='link1' >Support this app</a>
                </h3>


            </main>

        </div>
    )
}
