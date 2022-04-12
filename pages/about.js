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
                {/* Begin Mailchimp Signup Form */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="mt-10">


                    <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;}\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" }} />
                    <div id="mc_embed_signup">
                        <form action="https://zubstr.us8.list-manage.com/subscribe/post?u=7fc5d98aeac8f822c847c9348&id=0d5b6f71df" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                            <div id="mc_embed_signup_scroll">
                                <h2>Subscribe for RelaxFrens product updates</h2>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span>
                                    </label>
                                    <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
                                </div>
                                <div id="mce-responses" className="clear foot">
                                    <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                                    <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                                </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_7fc5d98aeac8f822c847c9348_0d5b6f71df" tabIndex={-1} defaultValue /></div>
                                <div className="optionalParent">
                                    <div className="clear foot">
                                        <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                                        {/* <p className="brandingLogo"><a href="http://eepurl.com/hVKg71" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" /></a></p> */}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/*End mc_embed_signup*/}

            </main>

        </div>
    )
}
