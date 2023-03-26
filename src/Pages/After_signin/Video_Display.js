import React from 'react'
import './Video_display.css'
import Video_display from '../../After_signin_components/Video_DisplayPage_components/Video_display_component/Video_display'
import Video_navigate from '../../After_signin_components/Video_DisplayPage_components/Video_navigate_component/Video_navigate'
import Video_path from '../../After_signin_components/Video_DisplayPage_components/Video_path_components/Video_path'
import Video_track from '../../After_signin_components/Video_DisplayPage_components/Video_track_component/Video_track'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { HiChevronDoubleLeft} from 'react-icons/hi'
import { useState } from 'react'
import MainNavigate from '../../After_signin_components/Video_DisplayPage_components/MainNavigate_components/MainNavigate'
const Video_Display = () => {
    const [show,setshow]=useState(false);
    //by clicking accordian content link displaying video with the help of usestate(showvideo,setshowvideo) 
    const [showvideo1,setshowvideo1]=useState(true);
    const [showvideo2,setshowvideo2]=useState(false);
    const [showvideo3,setshowvideo3]=useState(false);
    const [showvideo4,setshowvideo4]=useState(false);
    const [showvideo5,setshowvideo5]=useState(false);
    const [showvideo6,setshowvideo6]=useState(false);
    const [showvideo7,setshowvideo7]=useState(false);
    const [showvideo8,setshowvideo8]=useState(false);
    const [showvideo9,setshowvideo9]=useState(false);
    const [showvideo10,setshowvideo10]=useState(false);
    const [showvideo11,setshowvideo11]=useState(false);
    const [showvideo12,setshowvideo12]=useState(false);
    const [showvideo13,setshowvideo13]=useState(false);

    const hideSidePanel=()=>{
        setshow(!show)
      }
      const showSidePanel=()=>{
        setshow(false)
      }

    return (
        <div className="video_display_mdiv">
            <div className="video_div1">
                <div className="vtrack_navigate">
                    {
                        !show && <MainNavigate/>
                    }
                    {/* <div className="vtrack_bt1">
                        <button on onClick={() => { navigate("/home") }}><HiArrowNarrowLeft /><i>Back to course page</i></button>
                    </div> */}
                    <div className="btn">
                    {
                        !show && <button onClick={hideSidePanel}><HiChevronDoubleLeft /></button>

                    }
                        {
                            show &&  <button onClick={showSidePanel} className='rightarrow'><AiOutlineDoubleRight /></button>
                        }
                    </div>
                </div>
                {
                    !show && <Video_track />

                }
                {
                    !show && <Video_path 
                    showvideo1={showvideo1} setshowvideo1={setshowvideo1}
                    showvideo2={showvideo2} setshowvideo2={setshowvideo2}
                    showvideo3={showvideo3} setshowvideo3={setshowvideo3}
                    showvideo4={showvideo4} setshowvideo4={setshowvideo4}
                    showvideo5={showvideo5} setshowvideo5={setshowvideo5}
                    showvideo6={showvideo6} setshowvideo6={setshowvideo6}
                    showvideo7={showvideo7} setshowvideo7={setshowvideo7}
                    showvideo8={showvideo8} setshowvideo8={setshowvideo8}
                    showvideo9={showvideo9} setshowvideo9={setshowvideo9}
                    showvideo10={showvideo10} setshowvideo10={setshowvideo10}
                    showvideo11={showvideo11} setshowvideo11={setshowvideo11}
                    showvideo12={showvideo12} setshowvideo12={setshowvideo12}
                    showvideo13={showvideo13} setshowvideo13={setshowvideo13}/>

                }   
            </div>
                <div className="Video_div2">
                    <Video_navigate showvideo1={showvideo1} setshowvideo1={setshowvideo1}/>
                    <Video_display showvideo1={showvideo1} showvideo2={showvideo2} showvideo3={showvideo3} showvideo4={showvideo4} showvideo5={showvideo5} showvideo6={showvideo6} showvideo7={showvideo7} showvideo8={showvideo8} showvideo9={showvideo9} showvideo10={showvideo10} showvideo11={showvideo11} showvideo12={showvideo12} showvideo13={showvideo13}/>
                </div>
                {
                    !show && <div className="video_div3"><h1>Learn well get hire emiadiatly</h1></div>

                }
                {
                    show && <div className="video_div3" style={{position:'absolute',bottom:'-13.6rem'}}><h1>Learn well get hire emiadiatly</h1></div>

                }
                {/* {
                    show && <Video_display style=/>
                } */}
        </div>
)
}

            export default Video_Display