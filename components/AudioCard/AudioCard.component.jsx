import React from 'react';

import ReactSlider from 'react-slider';
import styles from './AudioCard.module.css';
import { BsFillDropletFill } from 'react-icons/bs';
import { GiCampfire, GiNestBirds } from 'react-icons/gi';
import dynamic from 'next/dynamic'
import AppContext from '../../context/app.context';
import { Howl, Howler } from 'howler';



const AudioCard = props => {
    const { Icon, audioName } = props || {};
    const [volume, setVolume] = React.useState(50);
    const [audio, setAudio] = React.useState(null);
    const [active, setActive] = React.useState(false);
    const audioTag = React.useRef(null);
    const appContext = React.useContext(AppContext)


    React.useEffect(() => {
        let audioUrl = "";
        if (audioName === "waterWaves") {
            audioUrl = "/audio/water_waves.mp3"
        }
        if (audioName === "ambulance") {
            audioUrl = "/audio/ambulance_sound.wav"
        }
        if (audioName === "birds") {
            audioUrl = "/audio/birds.mp3"
        }
        if (audioName === "campFire") {
            audioUrl = "/audio/camp_fire.mp3"
        }
        if (audioName === "children") {
            audioUrl = "/audio/children_audience.mp3"
        }
        if (audioName === "cityRoad") {
            audioUrl = "/audio/city_road.mp3"
        }
        if (audioName === "wind") {
            audioUrl = "/audio/wind.mp3"
        }
        if (audioName === "rain") {
            audioUrl = "/audio/rain.mp3"
        }
        if (audioName === "thunder") {
            audioUrl = "/audio/thunder.mp3"
        }
        if (audioName === "clockTimer") {
            audioUrl = "/audio/clock_timer.wav"
        }
        if (!audio) {
            setAudio(new Audio(audioUrl))
        } 
    }, [])
    React.useEffect(() => {
        // console.log(volume, audioTag.current.volume);
        // audioTag.current.volume = volume / 100;



        console.log(appContext.isAudioPlaying);
        if (!appContext.isAudioPlaying) {
            audio.pause()
        } else if (appContext.isAudioPlaying && active) {
            audio.play()
        }
        if (appContext.isResetSettings) {
            resetSettings()
        }
        
    }, [appContext, active]);

    React.useEffect(() => {
        if (audio) {
            
            audio.volume = volume / 100;
        }
    }, [volume])
    React.useEffect(() => {
        if (audio) {
            audio.loop = true;
        }
    }, [audio])
    React.useEffect(() => {
        if (audio) {

            if (active && appContext.isAudioPlaying) {
                audio.play();
            }
            else {
                audio.pause();
            }
        }
    }, [active])


    const toggleActive = () => {
        if (!active) {
            setActive(true);
        }
        else {
            setActive(false);
        }
    }
    const resetSettings = () => {
        setActive(false);
        audio.pause();
        setVolume(50);
        appContext.clearResetSettings();
    }

    return <div className={`${styles.cardContainer} ${active && styles.cardContainerActive} ${!appContext.isAudioPlaying && styles.globalPaused}`}>
        <div className={styles.iconContainer} onClick={() => {
            toggleActive()
        }}>
            {
                Icon ?
                    <Icon fontSize={40} className={`${styles.icon} ${active && styles.iconActive}`} /> : ""
            }
        </div>
        <div>
            {/* <audio src="/audio/wind.mp3" autoPlay style={{ visibility: "hidden" }} loop ref={audioTag} /> */}
            <div className={`${styles.sliderContainer} ${active && styles.sliderContainerActive}`}>
                <ReactSlider
                    className={styles.sliderMain}
                    thumbClassName={styles.sliderThumb}
                    trackClassName={styles.sliderTrack}
                    renderThumb={(props, volumeState) => {
                        return <div {...props}>{volumeState.valueNow}</div>
                    }
                    }
                    onChange={(e) => {
                        setVolume(e);
                    }}
                    value={volume}
                />
            </div>
        </div>
    </div>
}


export default AudioCard