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
        <Compliance />
    </div>

}

export default Main;