import {Stations} from './stations'
import ReactHowler from 'react-howler'

import {useEffect, useRef, useState} from "react";

export function Player({radioindex, setradioindex}) {

    const [currentRadio, setcurrentRadio] = useState(Stations[radioindex])
    const [playing, setplaying] = useState(false)
    const [volume, setvolume] = useState(1.0)
    const controls = useRef(ReactHowler)

    const {duration, seek} = ReactHowler.name
    console.log(duration)
    useEffect(() => {
        setcurrentRadio(Stations[radioindex])
    }, [radioindex,])

    function playradio() {
        setplaying(!playing)
    }

    function nextRadio() {
        radioindex !== 9 ? setradioindex((index) => index + 1) : setradioindex(0)
    }

    function doss() {
        return ReactHowler.caller
    }

    return (
        <div>
            <ReactHowler html5={true} playing={playing} volume={volume} src={currentRadio} ref={controls}>

            </ReactHowler>

            <button onClick={playradio}>{playing ? 'pause' : 'play'}</button>
            <button onClick={nextRadio}>next radio</button>
            <h1 className='text-white'>{() => doss} dasd</h1>
            <input
                type='range'
                min='0'
                max='1'
                step='.02'
                value={volume}
                onChange={e => setvolume(parseFloat(e.target.value))}
            />

        </div>
    )

}