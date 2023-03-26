import React from 'react'
import './Video_display.css'
import video1 from '../../../Assets/Videos/Introduction.m4v'
import video2 from '../../../Assets/Videos/Jsx.m4v'
import video3 from '../../../Assets/Videos/Components.m4v'
import video4 from '../../../Assets/Videos/Styling.m4v'
import video5 from '../../../Assets/Videos/Props.m4v'
import video6 from '../../../Assets/Videos/Event Handeling.m4v'
import video7 from '../../../Assets/Videos/State.m4v'
import video8 from '../../../Assets/Videos/Maps.m4v'
import video9 from '../../../Assets/Videos/Conditional Randering.m4v'
import video10 from '../../../Assets/Videos/Hooks.m4v'
import video11 from '../../../Assets/Videos/Context Api.m4v'
import video12 from '../../../Assets/Videos/React Router.m4v'
import video13 from '../../../Assets/Videos/Redux Part 1.m4v'


const Video_display = ({showvideo1,showvideo2,showvideo3,showvideo4,showvideo5,showvideo6,showvideo7,showvideo8,showvideo9,showvideo10,showvideo11,showvideo12,showvideo13}) => {   
 
  return (
    <div className='video_display'>
      {
        showvideo1 && <video controls src={video1} autoPlay></video>
      }
      {
        showvideo2 && <video controls src={video2} autoPlay></video>
      }
      {
        showvideo3 && <video controls src={video3} autoPlay></video>
      }
      {
        showvideo4 && <video controls src={video4} autoPlay></video>
      }
      {
        showvideo5 && <video controls src={video5} autoPlay></video>
      }
      {
        showvideo6 && <video controls src={video6} autoPlay></video>
      }
      {
        showvideo7 && <video controls src={video7} autoPlay></video>
      }
      {
        showvideo8 && <video controls src={video8} autoPlay></video>
      }
      {
        showvideo9 && <video controls src={video9} autoPlay></video>
      }
      {
        showvideo10 && <video controls src={video10} autoPlay></video>
      }
      {
        showvideo11 && <video controls src={video11} autoPlay></video>
      }
      {
        showvideo12 && <video controls src={video12} autoPlay></video>
      }
      {
        showvideo13 && <video controls src={video13} autoPlay></video>
      }

    </div>
  )
}

export default Video_display