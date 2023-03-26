import React from 'react'
import './Video_path.css'
import {useState} from 'react'
import Discuss from './Navbar/Discuss';
import Learner from './Navbar/Learner';
import Path from './Navbar/Path';
const Video_path = ({showvideo1,setshowvideo1,showvideo2,setshowvideo2,showvideo3,setshowvideo3,showvideo4,setshowvideo4,showvideo5,setshowvideo5,showvideo6,setshowvideo6,showvideo7,setshowvideo7,showvideo8,setshowvideo8,showvideo9,setshowvideo9,showvideo10,setshowvideo10,showvideo11,setshowvideo11,showvideo12,setshowvideo12,showvideo13,setshowvideo13}) => {
    const [show1,setshow1]=useState(true);
    const [show2,setshow2]=useState(false);
    const [show3,setshow3]=useState(false);

    const path=()=>{
        setshow1(true);
        setshow2(false);
        setshow3(false);
    }
    const learner=()=>{
        setshow2(true);
        setshow1(false);
        setshow3(false);
    }
    const discuss=()=>{
        setshow3(true)
        setshow1(false)
        setshow2(false)
    }


  return (
    <>
        <div className="video_path_btn">
            <div><button onClick={path}>Path</button></div>
            <div><button onClick={learner}>Learner</button></div>
            <div><button onClick={discuss}>Discuss</button></div>
        </div>
        {show1 && <Path showvideo1={showvideo1} setshowvideo1={setshowvideo1} showvideo2={showvideo2} setshowvideo2={setshowvideo2} showvideo3={showvideo3} setshowvideo3={setshowvideo3} showvideo4={showvideo4} setshowvideo4={setshowvideo4} showvideo5={showvideo5} setshowvideo5={setshowvideo5} showvideo6={showvideo6} setshowvideo6={setshowvideo6} showvideo7={showvideo7} setshowvideo7={setshowvideo7} showvideo8={showvideo8} setshowvideo8={setshowvideo8} showvideo9={showvideo9} setshowvideo9={setshowvideo9} showvideo10={showvideo10} setshowvideo10={setshowvideo10} showvideo11={showvideo11} setshowvideo11={setshowvideo11} showvideo12={showvideo12} setshowvideo12={setshowvideo12} showvideo13={showvideo13} setshowvideo13={setshowvideo13}/>}
        {show2 && <Learner/>}
        {show3 && <Discuss/>}
    </>
  )
}

export default Video_path