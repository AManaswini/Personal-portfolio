import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import myimage from '../../img/myimagebkp.png'
import {motion} from 'framer-motion'
const Intro = () => {
  const transition = {duration:10,type:'spring'}
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I Am</span>
                <span>Manaswini Aitha</span>
                <span>MS CS student at University of Chicago</span>
            </div>
            {/* <button className="i-button button">Hire me</button> */}
            <div className="i-icons">
                <a href='https://github.com/AManaswini'><img src={Github} alt="" /></a>
                <a href='https://www.linkedin.com/in/manaswinia/'><img src={Linkedin} alt="" /></a>
            </div>
            
        </div>
        <div className="i-right">
            <img src={Vector1} alt=""></img>
            <img src={Vector2} alt=""></img>
            <img src={myimage} alt=""></img>
            {/* <img 
            // initial = {{left:'-36%'}}
            // whileInView = {{left:'-24%'}}
            // transition = {transition}
            src={glassesimoji} alt=""/> */}
            <div style={{top:'-4rem', left:'22rem'}}  className='floatingdiv'>
                <FloatingDiv image={crown} txt1='Software' txt2='Engineer'/>
            </div>
            <div style={{top:'18rem', left:'0rem'}} className='floatingdiv'>
                <FloatingDiv image={thumbup} txt1='MS in CS at' txt2='University of Chicago'/>
            </div>
            <div className="blur" style={{backgroundColor:"rgb(238 210 255)"}}></div>
            <div className="blur" style={{background:'#C1F5FF', top:'17rem',width:'21rem',height:'11rem', left:'-9rem'}}></div>

        </div>
    </div>
  )
}

export default Intro