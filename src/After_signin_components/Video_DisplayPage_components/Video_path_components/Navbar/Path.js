import React, { useState } from 'react'
import {RiArrowDownSFill,RiArrowUpSFill} from 'react-icons/ri'
import {FiPlayCircle} from 'react-icons/fi'
import {GiCheckMark} from 'react-icons/gi'


import './Path.css'
const Path = ({setshowvideo1,setshowvideo2,setshowvideo3,setshowvideo4,setshowvideo5,setshowvideo6,setshowvideo7,setshowvideo8,setshowvideo9,setshowvideo10,setshowvideo11,setshowvideo12,setshowvideo13}) => {
  const [check,setcheck]=useState(false)


  const[show1 ,setshow1]=useState(false)
  const accordian1=()=>{setshow1(!show1)}
  const video1 =()=>{
    setshowvideo1(true);
    setshowvideo2(false);
    setshowvideo3(false);
    setshowvideo4(false);
    setshowvideo5(false);
    setshowvideo6(false);
    setshowvideo7(false);
    setshowvideo8(false);
    setshowvideo9(false);
    setshowvideo10(false);
    setshowvideo11(false);
    setshowvideo12(false);
    setshowvideo13(false);


  }

  const[show2 ,setshow2]=useState(false)
  const accordian2=()=>{setshow2(!show2)}
  const video2 =()=>{
    setshowvideo2(true);
    setshowvideo1(false);
    setshowvideo3(false);
    setshowvideo4(false);
    setshowvideo5(false);
    setshowvideo6(false);
    setshowvideo7(false);
    setshowvideo8(false);
    setshowvideo9(false);
    setshowvideo10(false);
    setshowvideo11(false);
    setshowvideo12(false);
    setshowvideo13(false);
  }

  const[show3 ,setshow3]=useState(false)
  const accordian3=()=>{setshow3(!show3)}
  const video3 =()=>{
    setshowvideo3(true);
    setshowvideo1(false);
    setshowvideo2(false);
    setshowvideo4(false);
    setshowvideo5(false);
    setshowvideo6(false);
    setshowvideo7(false);
    setshowvideo8(false);
    setshowvideo9(false);
    setshowvideo10(false);
    setshowvideo11(false);
    setshowvideo12(false);
    setshowvideo13(false);
  }

  const[show4 ,setshow4]=useState(false)
  const accordian4=()=>{setshow4(!show4)}
  const video4 =()=>{
    setshowvideo4(true);
    setshowvideo1(false);
    setshowvideo2(false);
    setshowvideo3(false);
    setshowvideo5(false);
    setshowvideo6(false);
    setshowvideo7(false);
    setshowvideo8(false);
    setshowvideo9(false);
    setshowvideo10(false);
    setshowvideo11(false);
    setshowvideo12(false);
    setshowvideo13(false);
  }

  const[show5 ,setshow5]=useState(false)
  const accordian5=()=>{setshow5(!show5)}
  const video5 =()=>{
    setshowvideo5(true);
    setshowvideo1(false);
    setshowvideo2(false);
    setshowvideo3(false);
    setshowvideo4(false);
    setshowvideo6(false);
    setshowvideo7(false);
    setshowvideo8(false);
    setshowvideo9(false);
    setshowvideo10(false);
    setshowvideo11(false);
    setshowvideo12(false);
    setshowvideo13(false);

  }

  const[show6 ,setshow6]=useState(false)
  const accordian6=()=>{setshow6(!show6)}
  const video6 =()=>{
    setshowvideo6(true);
    setshowvideo1(false);
    setshowvideo2(false);
    setshowvideo3(false);
    setshowvideo4(false);
    setshowvideo5(false);
    setshowvideo7(false);
    setshowvideo8(false);
    setshowvideo9(false);
    setshowvideo10(false);
    setshowvideo11(false);
    setshowvideo12(false);
    setshowvideo13(false);

  }

  const[show7 ,setshow7]=useState(false)
  const accordian7=()=>{setshow7(!show7)}
  const video7 =()=>{
    setshowvideo7(true);
    setshowvideo6(false);
    setshowvideo1(false);
    setshowvideo2(false);
    setshowvideo3(false);
    setshowvideo4(false);
    setshowvideo5(false);
    setshowvideo8(false);
    setshowvideo9(false);
    setshowvideo10(false);
    setshowvideo11(false);
    setshowvideo12(false);
    setshowvideo13(false);

  }

  const[show8 ,setshow8]=useState(false)
  const accordian8=()=>{setshow8(!show8)}
  const video8 =()=>{
    setshowvideo8(true);
    setshowvideo6(false);
    setshowvideo1(false);
    setshowvideo2(false);
    setshowvideo3(false);
    setshowvideo4(false);
    setshowvideo5(false);
    setshowvideo7(false);
    setshowvideo9(false);
    setshowvideo10(false);
    setshowvideo11(false);
    setshowvideo12(false);
    setshowvideo13(false);

  }

  const[show9 ,setshow9]=useState(false)
  const accordian9=()=>{setshow9(!show9)}
  const video9 =()=>{
    setshowvideo9(true);
    setshowvideo6(false);
    setshowvideo1(false);
    setshowvideo2(false);
    setshowvideo3(false);
    setshowvideo4(false);
    setshowvideo5(false);
    setshowvideo7(false);
    setshowvideo8(false);
    setshowvideo10(false);
    setshowvideo11(false);
    setshowvideo12(false);
    setshowvideo13(false);

  }

  const[show10 ,setshow10]=useState(false)
  const accordian10=()=>{setshow10(!show10)}
  const video10 =()=>{
    setshowvideo10(true);
    setshowvideo6(false);
    setshowvideo1(false);
    setshowvideo2(false);
    setshowvideo3(false);
    setshowvideo4(false);
    setshowvideo5(false);
    setshowvideo7(false);
    setshowvideo8(false);
    setshowvideo9(false);
    setshowvideo11(false);
    setshowvideo12(false);
    setshowvideo13(false);

  }

  const[show11 ,setshow11]=useState(false)
  const accordian11=()=>{setshow11(!show11)}
  const video11 =()=>{
    setshowvideo11(true);
    setshowvideo6(false);
    setshowvideo1(false);
    setshowvideo2(false);
    setshowvideo3(false);
    setshowvideo4(false);
    setshowvideo5(false);
    setshowvideo7(false);
    setshowvideo8(false);
    setshowvideo9(false);
    setshowvideo10(false);
    setshowvideo12(false);
    setshowvideo13(false);

  }

  const[show12 ,setshow12]=useState(false)
  const accordian12=()=>{setshow12(!show12)}
  const video12 =()=>{
    setshowvideo12(true);
    setshowvideo6(false);
    setshowvideo1(false);
    setshowvideo2(false);
    setshowvideo3(false);
    setshowvideo4(false);
    setshowvideo5(false);
    setshowvideo7(false);
    setshowvideo8(false);
    setshowvideo9(false);
    setshowvideo10(false);
    setshowvideo11(false);
    setshowvideo13(false);

  }

  const[show13 ,setshow13]=useState(false)
  const accordian13=()=>{setshow13(!show13)}
  const video13 =()=>{
    setshowvideo13(true);
    setshowvideo6(false);
    setshowvideo1(false);
    setshowvideo2(false);
    setshowvideo3(false);
    setshowvideo4(false);
    setshowvideo5(false);
    setshowvideo7(false);
    setshowvideo8(false);
    setshowvideo9(false);
    setshowvideo10(false);
    setshowvideo11(false);
    setshowvideo12(false);
    

  }
  return (
    <>
    <div className='path'>
      <span  onClick={accordian1}>{!show1 && <RiArrowDownSFill/>}{show1 && <RiArrowUpSFill/> }
      1.INTRODUCTION TO REACT</span><br /><br />
      {
      show1 && <div><span><FiPlayCircle/></span> <span onClick={video1}>Introduction to react </span><span className='check'><GiCheckMark/></span><br/><span>12.37</span></div>
      }

      <span  onClick={accordian2}>{!show2 && <RiArrowDownSFill/>}{show2 && <RiArrowUpSFill/> }
      2.HOW JSX WORKS?</span><br/><br />
      {
      show2 && <div><span><FiPlayCircle/></span> <span onClick={video2}>How jsx works?</span><span className='check'><GiCheckMark/></span><br/><span>23.19</span></div>
      }
      
      <span  onClick={accordian3}>{!show3 && <RiArrowDownSFill/>}{show3 && <RiArrowUpSFill/> }
      3.ABOUT REACT COMPONENTS</span><br /><br />
      {
      show3 && <div><span><FiPlayCircle/></span> <span onClick={video3}>About react components</span><span className='check'><GiCheckMark/></span><br/><span>17.41</span></div>
      }

      <span  onClick={accordian4}>{!show4 && <RiArrowDownSFill/>}{show4 && <RiArrowUpSFill/> }
      4.STYLING IN REACT</span><br /><br />
      {
      show4 && <div><span><FiPlayCircle/></span> <span onClick={video4}>How css styling in react</span><span className='check'><GiCheckMark/></span><br/><span>13.04</span></div>
      }

      <span  onClick={accordian5}>{!show5 && <RiArrowDownSFill/>}{show5 && <RiArrowUpSFill/> }
      5.PROPS IN REACT</span><br /><br />
      {
      show5 && <div><span><FiPlayCircle/></span> <span onClick={video5}>Props in react</span><span className='check'><GiCheckMark/></span><br/><span>19.27</span></div>
      }

      <span  onClick={accordian6}>{!show6 && <RiArrowDownSFill/>}{show6 && <RiArrowUpSFill/> }
      6.EVENT HANDELING IN REACT</span><br /><br />
      {
      show6 && <div><span><FiPlayCircle/></span> <span onClick={video6}>How events work in react</span><span className='check'><GiCheckMark/></span><br/><span>07.36</span></div>
      }

      <span  onClick={accordian7}>{!show7 && <RiArrowDownSFill/>}{show7 && <RiArrowUpSFill/> }
      7.STATE IN REACT JS</span><br /><br />
      {
      show7 && <div><span><FiPlayCircle/></span> <span onClick={video7}>How state works in react</span><span className='check'><GiCheckMark/></span><br/><span>14.51</span></div>
      }

      <span onClick={accordian8}>{!show8 && <RiArrowDownSFill/>}{show8 && <RiArrowUpSFill/> }
      8.MAP IN REACT</span><br /><br />
      {
      show8 && <div><span><FiPlayCircle/></span> <span onClick={video8}>What is map in react</span><span className='check'><GiCheckMark/></span><br/><span>13.25</span></div>
      }

      <span  onClick={accordian9}>{!show9 && <RiArrowDownSFill/>}{show9 && <RiArrowUpSFill/> }
      9.CONDITIONAL RANDERING IN REACT</span><br /><br />
      {
      show9 && <div><span><FiPlayCircle/></span> <span onClick={video9}>How conditional randering works</span><span className='check'><GiCheckMark/></span><br/><span>15.49</span></div>
      }

      <span  onClick={accordian10}>{!show10 && <RiArrowDownSFill/>}{show10 && <RiArrowUpSFill/> }
      10.HOOKS IN REACT</span><br /><br />
      {
      show10 && <div><span><FiPlayCircle/></span> <span onClick={video10}>Hooks and state in react</span><span className='check'><GiCheckMark/></span><br/><span>17.20</span></div>
      }

      <span  onClick={accordian11}>{!show11 && <RiArrowDownSFill/>}{show11 && <RiArrowUpSFill/> }
      11.CONTEXT API IN REACT</span><br /><br />
      {
      show11 && <div><span><FiPlayCircle/></span> <span onClick={video11}>How context api work in react</span><span className='check'><GiCheckMark/></span><br/><span>21.44</span></div>
      }

      <span  onClick={accordian12}>{!show12 && <RiArrowDownSFill/>}{show12 && <RiArrowUpSFill/> }
      12. ROUTING IN REACT </span><br /><br />
      {
      show12 && <div><span><FiPlayCircle/></span> <span onClick={video12}>How routing works in react </span><span className='check'><GiCheckMark/></span><br/><span>19.13</span></div>
      }

      <span  onClick={accordian13}>{!show13 && <RiArrowDownSFill/>}{show13 && <RiArrowUpSFill/> }
      13.REDUX FUNCTIONALITY IN REACT</span><br /><br />
      {
      show13 && <div><span><FiPlayCircle/></span> <span onClick={video13}>How redux work</span><span className='check'><GiCheckMark/></span><br/><span>7.57</span></div>
      }
    </div>
    </>
  )
}

export default Path