import React, { useState } from 'react'
import audio from '../audio/a.mp3'

function AudioExample() {

    // const start = () => {
    //     new Audio(audio).play()
    //     console.log('play')
    // }

    // const pause = () => {
    //     new Audio(audio).pause()

    //     console.log('pause')
    // }

    const audioSet = new Audio(audio);

    const start = () => {
        audioSet.play()
    }

    const pause = () => {
        audioSet.pause()
    }
    

    return (
        <div>
            <button onClick={start} >play</button>
            <button onClick={pause} >pause</button>
        </div>
    )
}

export default AudioExample;