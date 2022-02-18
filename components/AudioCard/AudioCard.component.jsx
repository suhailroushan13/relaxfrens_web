import React from 'react';

import ReactSlider from 'react-slider';
import styles from './AudioCard.module.css';
import { BsFillDropletFill } from 'react-icons/bs';
import { GiCampfire, GiNestBirds } from 'react-icons/gi';
import dynamic from 'next/dynamic'


const AudioCard = props => {
    const { Icon, audioName } = props || {};
    const [volume, setVolume] = React.useState(50);
    const [audio, setAudio] = React.useState(null);
    const [active, setActive] = React.useState(false);
    const audioTag = React.useRef(null);
    React.useEffect(() => {
        // console.log(volume, audioTag.current.volume);
        // audioTag.current.volume = volume / 100;
        let audioUrl = "";
        if (audioName === "waterWaves") {
            audioUrl = "/audio/water_waves.wav"
        }
        if (audioName === "ambulance") {
            audioUrl = "/audio/ambulance_sound.wav"
        }
        if (audioName === "birds") {
            audioUrl = "/audio/birds.wav"
        }
        if (audioName === "campFire") {
            audioUrl = "/audio/camp_fire.wav"
        }
        if (audioName === "children") {
            audioUrl = "/audio/children_audience.wav"
        }
        if (audioName === "cityRoad") {
            audioUrl = "/audio/city_road.wav"
        }
        if (audioName === "wind") {
            audioUrl = "/audio/wind.wav"
        }
        if (audioName === "rain") {
            audioUrl = "/audio/rain.mp3"
        }
        if (audioName === "thunder") {
            audioUrl = "/audio/thunder.wav"
        }
        if (audioName === "clockTimer") {
            audioUrl = "/audio/clock_timer.wav"
        }


        if (!audio) {
            setAudio(new Audio(audioUrl), () => {
                audio.loop = true;
            });
        }
        else {
            audio.loop = true;
            audio.volume = volume / 100;
        }
    }, [audio, volume]);


    const toggleActive = () => {
        if (!active) {
            setActive(true);
            audio.play();
        }
        else {
            setActive(false);
            audio.pause();
        }
    }

    return <div className={`${styles.cardContainer} ${active && styles.cardContainerActive}`}>
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
                        console.log({ e });
                        setVolume(e);
                    }}
                    value={volume}
                />
            </div>
        </div>
    </div>
}


export default AudioCard