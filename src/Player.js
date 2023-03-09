import {Stations} from './stations'
import AudioPlayer from 'react-h5-audio-player';

import {useEffect, useRef, useState} from "react";

export function Player({radioindex}) {
    const cont = useRef()
    const [currentRadio, setcurrentRadio] = useState(Stations[radioindex])

    useEffect(() => {
        setcurrentRadio(Stations[radioindex])
    }, [radioindex,])


    return (
        <div>
            {/*<button onClick={()=>cont.current.}>saddsa</button>*/}
            <AudioPlayer
                autoPlay={true}
                src={currentRadio}
                ref={cont}
                volume={0.1}
            />
        </div>
    )

}

