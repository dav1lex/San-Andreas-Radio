import {Stations} from './stations'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import {useEffect, useRef, useState} from "react";

export function Player({radioindex, setradioindex}) {

    const [currentRadio, setcurrentRadio] = useState(Stations[radioindex])

    useEffect(() => {
        setcurrentRadio(Stations[radioindex])
    }, [radioindex,])

    return (
        <div>
            <AudioPlayer
                autoPlay={false}
                src={currentRadio}
            />
        </div>
    )

}