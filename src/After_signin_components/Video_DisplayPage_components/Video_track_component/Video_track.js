import React, { useState } from 'react'
import './Video_track.css'

import Video_path from '../Video_path_components/Video_path'

const Video_track = () => {

  return (
    <>
    <div className='video_track'>
        <h2>EDUTECH TRAINING FULL<br/>STACK</h2>
        <progress min={0} max={100} value={50}></progress>&nbsp;&nbsp;<span>99%</span>
    </div>
    </>
  )
}

export default Video_track