import React from 'react';

import AudioCard from '../../components/AudioCard/AudioCard.component'

import { BsFillDropletFill, BsCloudRain } from 'react-icons/bs';
import { GiCampfire, GiNestBirds, GiModernCity } from 'react-icons/gi';
import { SiWindicss } from 'react-icons/si';
import { BiWater } from 'react-icons/bi';
import { IoThunderstormOutline } from 'react-icons/io5';
import { MdOutlineChildFriendly } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import styles from './Main.module.css';
import Header from '../../components/Header/Header.component';
import Compliance from '../../components/Compliance/Compliance.component';
// import { BsFillDropletFill } from 'react-icons/bs';

const Main = props => {

    return <div>
        <Header />
        {/* <audio src="/audio/wind.mp3" controls autoPlay style={{ visibility: "hidden" }} /> */}
        <div className={styles.soundContainer}>
            <AudioCard Icon={BsCloudRain} audioName="rain" appState={props.appState} toggleAudioPlaying={props.toggleAudioPlaying} />
            <AudioCard Icon={GiCampfire} audioName="campFire" appState={props.appState} toggleAudioPlaying={props.toggleAudioPlaying} />
            <AudioCard Icon={GiNestBirds} audioName="birds" appState={props.appState} toggleAudioPlaying={props.toggleAudioPlaying} />
            <AudioCard Icon={SiWindicss} audioName="wind" appState={props.appState} toggleAudioPlaying={props.toggleAudioPlaying} />
        </div>
        <div className={styles.soundContainer}>
            <AudioCard Icon={BiWater} audioName="waterWaves" appState={props.appState} toggleAudioPlaying={props.toggleAudioPlaying} />
            <AudioCard Icon={IoThunderstormOutline} audioName="thunder" appState={props.appState} toggleAudioPlaying={props.toggleAudioPlaying} />
            <AudioCard Icon={GiModernCity} audioName="cityRoad" appState={props.appState} toggleAudioPlaying={props.toggleAudioPlaying} />
            <AudioCard Icon={IoIosPeople} audioName="children" appState={props.appState} toggleAudioPlaying={props.toggleAudioPlaying} />
        </div>
        <div style={{ width: "100%" }}>
            {/* Begin Mailchimp Signup Form */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }} className="mt-10">


                <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  max-width:600px; min-width: 300px;}\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" }} />
                <div id="mc_embed_signup">
                    <form action="https://zubstr.us8.list-manage.com/subscribe/post?u=7fc5d98aeac8f822c847c9348&id=0d5b6f71df" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                            <h2 style={{fontSize: "17px"}}>Subscribe for product updates</h2>
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
        </div>
        <div style={{ width: "100%", textAlign: "center", padding: "20px 0px" }}>
            <a href="https://vercel.com?utm_source=syedzubairahmed001&utm_campaign=oss" rel="noreferrer noopener" target="_blank">

                <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" alt="vercel logo" />
            </a>
        </div>
        <Compliance />
    </div>

}

export default Main;